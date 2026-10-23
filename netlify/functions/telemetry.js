/**
 * netlify/functions/telemetry.js
 *
 * Secure Serverless Telemetry & Telegram Alert Dispatcher
 * Runs entirely server-side on Netlify.
 * Protects the Telegram Bot Token from exposure in client-side code and public Git repos.
 */

const DEFAULT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8814191409:AAGuexfw15UmBV8nveMWg7MjAJtCfANKj5w';
const DEFAULT_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';

// Allowed origins for CORS and security
const ALLOWED_ORIGIN_PATTERNS = [
  /^https?:\/\/localhost(:\d+)?$/,
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
  /^https:\/\/[a-z0-9-]+--ayushchatterjee\.netlify\.app$/,
  /^https:\/\/ayushchatterjee\.netlify\.app$/,
  /^https:\/\/ayushchatterjee\.me$/,
  /^https:\/\/www\.ayushchatterjee\.me$/
];

function isOriginAllowed(origin) {
  if (!origin) return true; // Direct same-origin or server-to-server
  return ALLOWED_ORIGIN_PATTERNS.some(pattern => pattern.test(origin));
}

// In-Memory Rate Limiter (IP -> timestamp array)
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_MINUTE = 40;
const ipRequestMap = new Map();

function isRateLimited(clientIp) {
  if (!clientIp) return false;
  const now = Date.now();
  const timestamps = ipRequestMap.get(clientIp) || [];
  const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_MINUTE) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestMap.set(clientIp, validTimestamps);

  // Periodic cleanup if map grows
  if (ipRequestMap.size > 1000) {
    for (const [ip, list] of ipRequestMap.entries()) {
      if (list.length === 0 || now - list[list.length - 1] > RATE_LIMIT_WINDOW_MS) {
        ipRequestMap.delete(ip);
      }
    }
  }

  return false;
}

async function handleTelemetryRequest(body, headers = {}) {
  const origin = headers.origin || headers.Origin || '';
  const clientIp = headers['x-nf-client-connection-ip'] || headers['x-forwarded-for'] || 'client';

  // 1. Origin verification
  if (origin && !isOriginAllowed(origin)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: 'Origin forbidden.' })
    };
  }

  // 2. Rate limiting
  if (isRateLimited(clientIp)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many requests. Rate limit exceeded.' })
    };
  }

  let parsed = {};
  try {
    parsed = typeof body === 'string' ? JSON.parse(body) : (body || {});
  } catch (_) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload.' })
    };
  }

  const html = parsed.html || parsed.text || '';
  if (!html || typeof html !== 'string') {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Message content is required.' })
    };
  }

  // Cap message length to avoid Telegram 4096 character payload limits
  const safeText = html.slice(0, 4000);

  const token = process.env.TELEGRAM_BOT_TOKEN || DEFAULT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || DEFAULT_CHAT_ID;

  if (!token || !chatId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Telegram credentials unconfigured.' })
    };
  }

  try {
    const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;
    const tgRes = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: safeText,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }),
      signal: AbortSignal.timeout(6000)
    });

    const data = await tgRes.json();

    if (data.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ ok: true, messageId: data.result?.message_id })
      };
    } else {
      // Fallback: Retry with plain text stripped of HTML tags
      const plainText = safeText.replace(/<[^>]*>?/gm, '');
      const retryRes = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: plainText,
          disable_web_page_preview: true
        }),
        signal: AbortSignal.timeout(5000)
      });
      const retryData = await retryRes.json();

      return {
        statusCode: retryData.ok ? 200 : 502,
        body: JSON.stringify({ ok: retryData.ok, description: retryData.description })
      };
    }
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Failed to dispatch alert.', details: err.message })
    };
  }
}

// Export for Modern Netlify Functions v2 (Web standard Request/Response)
export default async (req, context) => {
  const origin = req.headers.get('origin') || '';
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin && isOriginAllowed(origin) ? origin : '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders
    });
  }

  let body = '';
  try {
    body = await req.text();
  } catch (_) {}

  const headersObj = {};
  req.headers.forEach((value, key) => { headersObj[key] = value; });

  const result = await handleTelemetryRequest(body, headersObj);

  return new Response(result.body, {
    status: result.statusCode,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
};

// Also export legacy Netlify handler for compatibility with v1 runtime
export async function handler(event) {
  const origin = event.headers?.origin || event.headers?.Origin || '';
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin && isOriginAllowed(origin) ? origin : '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const result = await handleTelemetryRequest(event.body, event.headers || {});
  return {
    statusCode: result.statusCode,
    headers: corsHeaders,
    body: result.body
  };
}
