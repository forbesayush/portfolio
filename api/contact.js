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

// Anti-Spam, Link Injection & Phishing Shield
function detectSpamOrPhishing(name = '', email = '', message = '') {
  const combined = `${name} ${email} ${message}`.toLowerCase();

  // 1. URL injection in name or email fields
  if (/(https?:\/\/|www\.|\.ru\/|\.top\/|\.xyz\/|\.cn\/|t\.me\/|wa\.me\/)/i.test(name) ||
      /(https?:\/\/|www\.)/i.test(email)) {
    return { isSpam: true, reason: 'URL injection in name/email' };
  }

  // 2. Multiple external links in message
  const urlMatches = message.match(/(https?:\/\/[^\s]+|www\.[^\s]+|t\.me\/[^\s]+)/gi) || [];
  if (urlMatches.length > 1) {
    return { isSpam: true, reason: 'Multiple URLs in message body' };
  }

  // 3. Known phishing, spam, and bot keywords
  const spamKeywords = [
    't.me/', 'telegram.me/', 'wa.me/', 'whatsapp.com/channel',
    'bit.ly/', 'tinyurl.com/', 'cutt.ly/', 'is.gd/', 'v.ht/',
    'crypto profit', 'casino', 'viagra', 'cialis', 'porn', 'xxx',
    'seo ranking', 'backlinks', 'guest post', 'domain rating',
    'earn money fast', 'passive income', 'investment return',
    'whatsapp marketing', 'dating site', 'escort', 'adult dating',
    'hack tool', 'telegram bot access', 'buy traffic', 'darknet',
    'binance airdrop', 'usdt investment', 'wallet connect'
  ];

  for (const kw of spamKeywords) {
    if (combined.includes(kw)) {
      return { isSpam: true, reason: `Spam keyword matched: ${kw}` };
    }
  }

  return { isSpam: false };
}

// Defang URLs so they are not rendered as active clickable links in Telegram
function defangUrls(str = '') {
  return str.replace(/(https?:\/\/|www\.)([^\s]+)/gi, (match, prefix, domain) => {
    return `[defanged-link: ${domain.replace(/[\/\.]/g, ' ')}]`;
  });
}

export default async function handler(req, res) {
  const origin = req.headers.origin || req.headers.referer || '';
  const normalizedOrigin = origin.replace(/\/$/, '');

  if (origin && !ALLOWED_ORIGINS.some(allowed => normalizedOrigin.startsWith(allowed)) && ALLOWED_ORIGIN !== '*') {
    return res.status(403).json({ error: 'CORS policy: Access denied from unauthorized origin' });
  }

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || ALLOWED_ORIGIN);
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

  // Honeypot check (Silent drop for spam bots)
  if (_gotcha) {
    console.warn(`[Honeypot Triggered] Spambot detected from IP ${clientIp}`);
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

  // Anti-Spam / Phishing Link Evaluation
  const spamCheck = detectSpamOrPhishing(cleanName, cleanEmail, cleanMessage);
  if (spamCheck.isSpam) {
    console.warn(`[Spam Blocked] IP ${clientIp} blocked: ${spamCheck.reason}`);
    // Silently return success so spam bots don't know they are blocked
    return res.status(200).json({ success: true, message: 'Message received' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8794303730:AAGYuOag2TRatSpgrmPY4HtpBc3qdK0JKwk';
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';

  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN not configured on server' });
  }

  const safeMessage = defangUrls(cleanMessage);
  const geo = payload || {};
  const loc = geo.city && geo.country ? `${geo.city}, ${geo.region || ''}, ${geo.country}` : 'N/A';
  const nowIst = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const contactAlert = `📬 *NEW CONTACT FORM SUBMISSION* 📬

👤 *Lead Name*: ${escapeTelegramMarkdown(cleanName)}
📧 *Email Address*: \`${cleanEmail}\`
💬 *Direct Message*:
"${escapeTelegramMarkdown(safeMessage)}"

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
