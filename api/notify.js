// Serverless Function: /api/notify

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

  if (!checkRateLimit(clientIp, 5, 60000)) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { title, text, message, _gotcha } = req.body || {};

  // Honeypot check
  if (_gotcha) {
    return res.status(200).json({ success: true, message: 'Notification received' });
  }

  const content = (message || text || title || '').slice(0, 2000).trim();
  if (!content) {
    return res.status(400).json({ error: 'Message content is required' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8794303730:AAGYuOag2TRatSpgrmPY4HtpBc3qdK0JKwk';
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';

  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN not configured on server' });
  }

  const formatted = `📢 *SYSTEM NOTIFICATION*\n\n${escapeTelegramMarkdown(content)}`;

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: formatted,
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
            text: formatted.replace(/[*_`\[\]()]/g, ''),
            disable_web_page_preview: true,
          }),
        });
        return res.status(200).json({ success: true, message: 'Notification sent in plain text' });
      }
      return res.status(500).json({ error: tgData.description || 'Telegram dispatch failed' });
    }

    return res.status(200).json({ success: true, message: 'Notification dispatched successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
