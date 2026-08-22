// api/contact.js
// Secure serverless contact form handler with honeypot spam protection,
// rate limiting, email regex validation, and XSS sanitization.

const requestLog = new Map();
const MAX_SUBMISSIONS_PER_HOUR = 5;

// Periodic cleanup of rate-limit map
setInterval(() => {
  const hourAgo = Date.now() - 60 * 60 * 1000;
  for (const [ip, timestamps] of requestLog.entries()) {
    const valid = timestamps.filter((t) => t > hourAgo);
    if (valid.length === 0) {
      requestLog.delete(ip);
    } else {
      requestLog.set(ip, valid);
    }
  }
}, 10 * 60 * 1000).unref?.();

function isRateLimited(ip) {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  const timestamps = (requestLog.get(ip) || []).filter((t) => t > hourAgo);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_SUBMISSIONS_PER_HOUR;
}

function sanitizeText(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '')
    .replace(/[<>'"&]/g, (match) => {
      switch (match) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return match;
      }
    })
    .trim();
}

const ALLOWED_ORIGINS = new Set([
  'https://ayushchatterjee.me',
  'https://forbesayush.github.io',
  'http://localhost:5173',
  'http://localhost:3000',
]);

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default async function handler(req, res) {
  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', 'https://ayushchatterjee.me');
  } else {
    return res.status(403).json({ error: 'CORS forbidden' });
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: 'Too many submissions from this IP. Please email directly at ayushchatterjee.edu@gmail.com.',
    });
  }

  const { name, email, topic, message, honeypot } = req.body || {};

  // 1. Honeypot check: Bots filling the hidden input get a simulated 200 OK without dispatch
  if (honeypot && String(honeypot).trim().length > 0) {
    return res.status(200).json({ ok: true, message: 'Message received' });
  }

  // 2. Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const cleanName = sanitizeText(name).slice(0, 100);
  const cleanEmail = String(email).trim().slice(0, 120);
  const cleanTopic = sanitizeText(topic || 'General Inquiry').slice(0, 100);
  const cleanMessage = sanitizeText(message).slice(0, 2000);

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({ error: 'Invalid email address format' });
  }

  if (cleanMessage.length < 5) {
    return res.status(400).json({ error: 'Message is too short' });
  }

  // 3. Optional Telegram Webhook Dispatch if configured
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChatId) {
    try {
      const text = `📬 *New Portfolio Message*\n\n*Name:* ${cleanName}\n*Email:* ${cleanEmail}\n*Topic:* ${cleanTopic}\n*IP:* ${ip}\n\n*Message:*\n${cleanMessage}`;
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChatId,
          text,
          parse_mode: 'Markdown',
        }),
      });
    } catch {
      // ignore
    }
  }

  return res.status(200).json({ ok: true, message: 'Message dispatched successfully' });
}
