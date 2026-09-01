// Serverless Function: /api/contact (Hardened Contact Proxy)

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || process.env.FRONTEND_URL || 'https://ayushchatterjee.me';
const ALLOWED_ORIGINS = [
  ALLOWED_ORIGIN.replace(/\/$/, ''),
  'https://www.ayushchatterjee.me',
  'https://ayushchatterjee.me',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
];

const rateLimitMap = new Map();

function checkRateLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const history = rateLimitMap.get(ip) || [];
  const recent = history.filter(t => now - t < windowMs);
  if (recent.length >= limit) {
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

function escapeTelegramMarkdown(str = '') {
  if (typeof str !== 'string') return '';
  return str.replace(/([*_`\[\]()])/g, '\\$1');
}

function sanitizeString(str = '', maxLength = 1000) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F]/g, '').trim().slice(0, maxLength);
}

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const normalizedOrigin = origin.replace(/\/$/, '');

  if (origin && !ALLOWED_ORIGINS.includes(normalizedOrigin) && ALLOWED_ORIGIN !== '*') {
    return res.status(403).json({ error: 'CORS policy: Access denied from unauthorized origin' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientIp = (req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'Unknown').replace(/^::ffff:/, '').trim();

  // Rate limit: 5 requests / min per IP
  if (!checkRateLimit(clientIp, 5, 60000)) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ error: 'Too many contact requests. Please try again in 1 minute.' });
  }

  const { name, email, message, turnstileToken, _gotcha, payload } = req.body || {};

  // Honeypot check
  if (_gotcha) {
    return res.status(200).json({ success: true, message: 'Message received' });
  }

  // Turnstile CAPTCHA check
  const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
  if (TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return res.status(403).json({ error: 'CAPTCHA verification token missing' });
    }
    try {
      const formData = new URLSearchParams();
      formData.append('secret', TURNSTILE_SECRET_KEY);
      formData.append('response', turnstileToken);
      if (clientIp !== 'Unknown') formData.append('remoteip', clientIp);

      const turnRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
      });
      const turnData = await turnRes.json();
      if (!turnData.success) {
        return res.status(403).json({ error: 'CAPTCHA verification failed' });
      }
    } catch {
      return res.status(500).json({ error: 'CAPTCHA verification service error' });
    }
  }

  const cleanName = sanitizeString(name, 100);
  const cleanEmail = sanitizeString(email, 100);
  const cleanMessage = sanitizeString(message, 1000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';

  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN not configured on server' });
  }

  const geo = payload || {};
  const loc = geo.city && geo.country ? `${geo.city}, ${geo.region || ''}, ${geo.country}` : 'N/A';
  const nowIst = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const contactAlert = `📬 *NEW CONTACT FORM SUBMISSION* 📬

👤 *Lead Name*: ${escapeTelegramMarkdown(cleanName)}
📧 *Email Address*: \`${cleanEmail}\`
💬 *Direct Message*:
"${escapeTelegramMarkdown(cleanMessage)}"

━━━━━━━━━━━━━━━━━━━━━━━
📍 *VISITOR CONTEXT*
• Location: ${loc}
• Real IP: \`${clientIp}\`
• Device: ${geo.deviceType || 'Web Browser'} (${geo.platform || 'N/A'})
• Referrer: ${geo.referrer || 'Direct'}
• Landing Page: \`${geo.landingUrl || 'https://ayushchatterjee.me/#contact'}\`
• Submitted At: ${nowIst} (IST)`;

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: contactAlert,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();
    if (!tgRes.ok) {
      if (tgData.description?.includes('can\'t parse entities')) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: contactAlert.replace(/[*_`\[\]()]/g, ''),
            disable_web_page_preview: true,
          }),
        });
        return res.status(200).json({ success: true, message: 'Message delivered in plain text' });
      }
      return res.status(500).json({ error: tgData.description || 'Failed to dispatch alert' });
    }

    return res.status(200).json({ success: true, message: 'Message delivered successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
