require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// -----------------------------------------------------------------------------
// 1. CORS Origin Lockdown
// -----------------------------------------------------------------------------
const PRIMARY_ORIGIN = process.env.ALLOWED_ORIGIN || process.env.FRONTEND_URL || 'https://ayushchatterjee.me';
const ALLOWED_ORIGINS = [
  PRIMARY_ORIGIN,
  'https://www.ayushchatterjee.me',
  'https://ayushchatterjee.me',
];

// In local development, also permit localhost dev servers
if (NODE_ENV !== 'production') {
  ALLOWED_ORIGINS.push(
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5000'
  );
}

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser requests (like server health checks / curl without origin header)
    if (!origin) return callback(null, true);
    
    const normalizedOrigin = origin.replace(/\/$/, '');
    const isAllowed = ALLOWED_ORIGINS.some(allowed => {
      if (allowed === '*') return true;
      return allowed.replace(/\/$/, '') === normalizedOrigin;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS Blocked] Unauthorized origin: ${origin}`);
      callback(new Error('CORS policy: Access denied from unauthorized origin'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '64kb' }));

// -----------------------------------------------------------------------------
// 2. Server-Only Secrets & Environment
// -----------------------------------------------------------------------------
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const GEOIP_API_KEY = process.env.GEOIP_API_KEY;

// -----------------------------------------------------------------------------
// 3. Helper: Real Client IP Extraction
// -----------------------------------------------------------------------------
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const ips = forwarded.split(',').map(ip => ip.trim());
    for (const ip of ips) {
      if (ip && !ip.startsWith('10.') && !ip.startsWith('192.168.') && !ip.startsWith('127.')) {
        return ip.replace(/^::ffff:/, '');
      }
    }
  }
  const realIp = req.headers['x-real-ip'] || req.headers['cf-connecting-ip'] || req.socket?.remoteAddress;
  if (realIp) {
    return realIp.replace(/^::ffff:/, '');
  }
  return 'Unknown';
}

// -----------------------------------------------------------------------------
// 4. IP-Based Sliding Window Rate Limiting (In-Memory)
// -----------------------------------------------------------------------------
const rateLimitBuckets = new Map();

// Periodic cleanup of stale rate-limit buckets (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of rateLimitBuckets.entries()) {
    const valid = timestamps.filter(t => now - t < 60000);
    if (valid.length === 0) {
      rateLimitBuckets.delete(key);
    } else {
      rateLimitBuckets.set(key, valid);
    }
  }
}, 5 * 60 * 1000);

function createRateLimiter(maxRequests = 5, windowMs = 60000, actionName = 'request') {
  return (req, res, next) => {
    const ip = getClientIp(req);
    const key = `${actionName}:${ip}`;
    const now = Date.now();

    const history = rateLimitBuckets.get(key) || [];
    const recent = history.filter(t => now - t < windowMs);

    if (recent.length >= maxRequests) {
      const oldest = recent[0];
      const retryAfterSec = Math.ceil((windowMs - (now - oldest)) / 1000);
      res.setHeader('Retry-After', retryAfterSec);
      console.warn(`[Rate Limit Exceeded] IP ${ip} exceeded ${maxRequests} req/${windowMs / 1000}s on ${actionName}`);
      return res.status(429).json({
        error: 'Too many requests. Please slow down and try again later.',
        retryAfter: retryAfterSec,
      });
    }

    recent.push(now);
    rateLimitBuckets.set(key, recent);
    next();
  };
}

const contactRateLimiter = createRateLimiter(5, 60000, 'contact');
const trackRateLimiter = createRateLimiter(30, 60000, 'track');

// -----------------------------------------------------------------------------
// 5. Input Sanitization & Telegram Markdown Escaping
// -----------------------------------------------------------------------------
function sanitizeString(str = '', maxLength = 1000) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F]/g, '') // Strip control chars
    .trim()
    .slice(0, maxLength);
}

// Escapes Telegram Markdown V1 / legacy formatting special characters
function escapeTelegramMarkdown(str = '') {
  if (typeof str !== 'string') return '';
  return str.replace(/([*_`\[\]()])/g, '\\$1');
}

// -----------------------------------------------------------------------------
// 6. Bot-Abuse & Cloudflare Turnstile Verification
// -----------------------------------------------------------------------------
async function verifyTurnstileToken(token, clientIp) {
  if (!TURNSTILE_SECRET_KEY) {
    // If no secret key configured on server, pass gracefully
    return { success: true };
  }
  if (!token) {
    return { success: false, error: 'Turnstile CAPTCHA token missing' };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    if (clientIp && clientIp !== 'Unknown') {
      formData.append('remoteip', clientIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return { success: Boolean(data.success), error: data['error-codes']?.join(', ') };
  } catch (err) {
    console.error('Turnstile verification network error:', err);
    return { success: false, error: 'Verification service unreachable' };
  }
}

// -----------------------------------------------------------------------------
// 7. Enterprise & Big Brand Intelligence Classifier
// -----------------------------------------------------------------------------
function detectEnterpriseBrand(isp = '', org = '', asn = '') {
  const combined = `${isp} ${org} ${asn}`.toLowerCase();

  const brands = [
    // Big Tech & Cloud
    { match: ['microsoft', 'azure', 'msft'], name: 'Microsoft', category: '🚀 Big Tech / Enterprise Cloud', network: 'Microsoft Corporation' },
    { match: ['google', 'alphabet', 'youtube'], name: 'Google', category: '🌐 Big Tech / Search & AI', network: 'Google LLC' },
    { match: ['apple'], name: 'Apple', category: '🍎 Big Tech / Consumer Hardware & OS', network: 'Apple Inc.' },
    { match: ['amazon', 'aws'], name: 'Amazon / AWS', category: '📦 Big Tech / Cloud Infrastructure', network: 'Amazon.com / AWS' },
    { match: ['meta', 'facebook', 'instagram', 'whatsapp'], name: 'Meta', category: '👥 Big Tech / Social Platforms', network: 'Meta Platforms, Inc.' },
    { match: ['netflix'], name: 'Netflix', category: '🎬 Entertainment & Streaming Tech', network: 'Netflix, Inc.' },
    { match: ['nvidia'], name: 'Nvidia', category: '⚡ AI Compute & GPU Architecture', network: 'Nvidia Corporation' },
    { match: ['cloudflare'], name: 'Cloudflare', category: '☁️ Edge Infrastructure & Security Cloud', network: 'Cloudflare, Inc.' },
    { match: ['oracle'], name: 'Oracle', category: '🏛️ Enterprise Database & Cloud', network: 'Oracle Corporation' },
    { match: ['salesforce'], name: 'Salesforce', category: '☁️ Enterprise CRM & Cloud SaaS', network: 'Salesforce, Inc.' },
    { match: ['ibm', 'international business machines'], name: 'IBM', category: '🏛️ Enterprise Tech & Cognitive Systems', network: 'IBM Corporation' },
    { match: ['cisco'], name: 'Cisco', category: '🔌 Enterprise Networking & Cybersecurity', network: 'Cisco Systems, Inc.' },
    { match: ['intel'], name: 'Intel', category: '⚡ Semiconductor & Compute Systems', network: 'Intel Corporation' },
    { match: ['adobe'], name: 'Adobe', category: '🎨 Creative Cloud & Enterprise Software', network: 'Adobe Inc.' },
    { match: ['uber'], name: 'Uber', category: '🚗 Global Mobility & Tech Platform', network: 'Uber Technologies' },
    { match: ['airbnb'], name: 'Airbnb', category: '🏡 Global Travel & Marketplace Platform', network: 'Airbnb, Inc.' },
    { match: ['tesla'], name: 'Tesla', category: '⚡ EV, Clean Energy & Robotics', network: 'Tesla, Inc.' },
    { match: ['spacex', 'starlink'], name: 'SpaceX / Starlink', category: '🚀 Aerospace & Satellite Internet', network: 'Space Exploration Technologies' },

    // Strategy Consulting (MBB & Big 4)
    { match: ['mckinsey'], name: 'McKinsey & Company', category: '💼 Top Strategy Consulting (MBB)', network: 'McKinsey & Company' },
    { match: ['boston consulting', 'bcg'], name: 'Boston Consulting Group (BCG)', category: '💼 Top Strategy Consulting (MBB)', network: 'Boston Consulting Group' },
    { match: ['bain & company', 'bain.com'], name: 'Bain & Company', category: '💼 Top Strategy Consulting (MBB)', network: 'Bain & Company' },
    { match: ['deloitte'], name: 'Deloitte', category: '📊 Big 4 Advisory & Consulting', network: 'Deloitte Touche Tohmatsu' },
    { match: ['pricewaterhouse', 'pwc'], name: 'PricewaterhouseCoopers (PwC)', category: '📊 Big 4 Advisory & Strategy', network: 'PwC Global' },
    { match: ['ernst & young', 'ernst and young', 'ey global', 'ey.com'], name: 'Ernst & Young (EY)', category: '📊 Big 4 Advisory & Strategy', network: 'EY Global' },
    { match: ['kpmg'], name: 'KPMG', category: '📊 Big 4 Advisory & Financial Strategy', network: 'KPMG International' },
    { match: ['accenture'], name: 'Accenture', category: '💡 Global Tech & Strategy Consulting', network: 'Accenture PLC' },

    // Investment Banking & Asset Management
    { match: ['goldman', 'gs.com'], name: 'Goldman Sachs', category: '🏦 Tier 1 Global Investment Bank', network: 'Goldman Sachs Group' },
    { match: ['morgan stanley'], name: 'Morgan Stanley', category: '🏦 Tier 1 Global Investment Bank', network: 'Morgan Stanley' },
    { match: ['jpmorgan', 'jp morgan', 'chase'], name: 'JPMorgan Chase', category: '🏦 Global Investment Banking & Markets', network: 'JPMorgan Chase & Co.' },
    { match: ['blackrock'], name: 'BlackRock', category: '📈 Global Premier Asset Management', network: 'BlackRock, Inc.' },
    { match: ['barclays'], name: 'Barclays', category: '🏦 Global Investment Bank', network: 'Barclays PLC' },
    { match: ['hsbc'], name: 'HSBC', category: '🏦 Global Banking & Financial Markets', network: 'HSBC Holdings' },

    // Target Brands & Conglomerates
    { match: ['oneplus', 'bbk electronics', 'oppo', 'vivo'], name: 'OnePlus / BBK Electronics', category: '📱 Consumer Electronics & Smartphone OEM', network: 'BBK Electronics' },
    { match: ['innovist', 'bare anatomy', 'chemist at play'], name: 'Innovist', category: '💄 D2C Personal Care & Beauty Brand', network: 'Innovist D2C' },
    { match: ['d-dzire', 'dzire jewels'], name: 'D-Dzire Jewels', category: '💎 Lab-Grown Diamonds & Luxury Retail', network: 'D-Dzire Jewels' },
    { match: ['swiggy', 'bundl'], name: 'Swiggy', category: '🛵 Quick Commerce & Hyperlocal Delivery', network: 'Swiggy / Bundl Technologies' },
    { match: ['zomato', 'blinkit'], name: 'Zomato / Blinkit', category: '🛵 FoodTech & Quick Commerce', network: 'Zomato Media' },
    { match: ['flipkart', 'walmart'], name: 'Flipkart / Walmart', category: '🛍️ Global E-Commerce & Retail Giant', network: 'Flipkart Internet / Walmart' },
    { match: ['reliance', 'jio'], name: 'Reliance Industries / Jio', category: '📶 Telecom, Digital Services & Retail Conglomerate', network: 'Reliance Jio Infocomm' },
    { match: ['tata consultancy', 'tcs', 'tata communications', 'tata sons'], name: 'Tata Group / TCS', category: '🏢 Global Conglomerate & IT Transformation', network: 'Tata Consultancy Services' },
    { match: ['sequoia', 'peak xv'], name: 'Sequoia Capital / Peak XV', category: '🚀 Tier 1 Global Venture Capital', network: 'Peak XV Partners' },
    { match: ['andreessen', 'a16z'], name: 'Andreessen Horowitz (a16z)', category: '🚀 Tier 1 Silicon Valley VC', network: 'AH Capital' },
    { match: ['y combinator', 'ycombinator'], name: 'Y Combinator', category: '🚀 Premier Startup Accelerator', network: 'Y Combinator LLC' },
  ];

  for (const b of brands) {
    if (b.match.some((m) => combined.includes(m))) {
      return {
        isEnterprise: true,
        name: b.name,
        category: b.category,
        network: org && org !== 'N/A' ? org : (isp && isp !== 'N/A' ? isp : b.network),
      };
    }
  }

  return {
    isEnterprise: false,
    name: '',
    category: '',
    network: '',
  };
}

// -----------------------------------------------------------------------------
// 8. Server-Side GeoIP Enrichment Proxy (Protects private API keys)
// -----------------------------------------------------------------------------
async function enrichGeoData(ip) {
  if (!ip || ip === 'Unknown' || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.')) {
    return null;
  }

  try {
    const res = await fetch(`https://ipwho.is/${ip}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        return {
          ip: data.ip || ip,
          city: data.city || 'N/A',
          region: data.region || 'N/A',
          country: data.country || 'N/A',
          postal: data.postal || 'N/A',
          coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
          mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
          isp: data.connection?.isp || data.connection?.org || 'N/A',
          org: data.connection?.org || data.connection?.isp || 'N/A',
          asn: data.connection?.asn ? `AS${data.connection.asn}` : 'N/A',
          isVpn: Boolean(data.security?.vpn || data.security?.proxy || data.security?.tor || data.security?.hosting),
          vpnProvider: data.security?.service || (data.security?.hosting ? 'Datacenter / Hosting' : 'N/A'),
        };
      }
    }
  } catch (err) {
    console.warn('Server GeoIP primary lookup notice:', err.message);
  }

  try {
    const res2 = await fetch(`https://freeipapi.com/api/json/${ip}`);
    if (res2.ok) {
      const data = await res2.json();
      if (data && data.ipAddress) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        return {
          ip: data.ipAddress || ip,
          city: data.cityName || 'N/A',
          region: data.regionName || 'N/A',
          country: data.countryName || 'N/A',
          postal: data.zipCode || 'N/A',
          coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
          mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
          isp: 'N/A',
          org: 'N/A',
          asn: 'N/A',
          isVpn: false,
          vpnProvider: 'N/A',
        };
      }
    }
  } catch (err) {
    console.warn('Server GeoIP backup lookup notice:', err.message);
  }

  return null;
}

// -----------------------------------------------------------------------------
// 9. Dispatch to Telegram (Server-to-Server Only)
// -----------------------------------------------------------------------------
async function sendToTelegram(text, chatId = TELEGRAM_CHAT_ID) {
  if (!TELEGRAM_BOT_TOKEN || !chatId || TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    console.warn('⚠️ Telegram Bot Token or Chat ID not configured on server.');
    return { ok: false, error: 'Telegram credentials missing on server' };
  }

  // Cap message payload size to 4096 characters (Telegram API limit)
  const safeText = text.slice(0, 4000);

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: safeText,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();

    // If Markdown parsing fails due to unusual entities, fallback safely to plain text
    if (!response.ok && data.description && data.description.includes('can''t parse entities')) {
      console.warn('Markdown parsing failed; falling back to sanitized plain text dispatch...');
      const fallbackRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: safeText.replace(/[*_`\[\]()]/g, ''),
          disable_web_page_preview: true,
        }),
      });
      return await fallbackRes.json();
    }

    return data;
  } catch (err) {
    console.error('Telegram dispatch error:', err);
    return { ok: false, error: err.message };
  }
}

// -----------------------------------------------------------------------------
// 10. API Endpoints
// -----------------------------------------------------------------------------

// POST /api/notify - Generic notification proxy
app.post('/api/notify', contactRateLimiter, async (req, res) => {
  try {
    const { title, text, message, _gotcha } = req.body || {};

    // Honeypot check
    if (_gotcha) {
      console.warn('[Honeypot Triggered] Spambot submission blocked on /api/notify');
      return res.status(200).json({ success: true, message: 'Notification received' });
    }

    const content = sanitizeString(message || text || title, 2000);
    if (!content) {
      return res.status(400).json({ error: 'Message content is required' });
    }

    const formatted = `📢 *SYSTEM NOTIFICATION*\n\n${escapeTelegramMarkdown(content)}`;
    const result = await sendToTelegram(formatted);

    if (result && result.ok === false) {
      return res.status(500).json({ error: result.error || 'Failed to dispatch notification' });
    }

    res.status(200).json({ success: true, message: 'Notification dispatched successfully' });
  } catch (err) {
    console.error('Server /api/notify error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/contact - Hardened Contact Form Proxy
app.post('/api/contact', contactRateLimiter, async (req, res) => {
  try {
    const { name, email, message, turnstileToken, _gotcha, payload } = req.body || {};
    const clientIp = getClientIp(req);

    // 1. Honeypot check (Silent rejection)
    if (_gotcha) {
      console.warn(`[Honeypot Triggered] Spambot detected from IP ${clientIp}`);
      return res.status(200).json({ success: true, message: 'Message received' });
    }

    // 2. Turnstile CAPTCHA check
    if (TURNSTILE_SECRET_KEY) {
      const turnstileRes = await verifyTurnstileToken(turnstileToken, clientIp);
      if (!turnstileRes.success) {
        return res.status(403).json({ error: 'CAPTCHA verification failed. Please try again.' });
      }
    }

    // 3. Input validation & sanitization
    const cleanName = sanitizeString(name, 100);
    const cleanEmail = sanitizeString(email, 100);
    const cleanMessage = sanitizeString(message, 1000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    // 4. Enrich visitor context
    let geo = payload;
    if (!geo && clientIp !== 'Unknown') {
      geo = await enrichGeoData(clientIp);
    }

    const loc = geo ? `${geo.city || 'N/A'}, ${geo.region || 'N/A'}, ${geo.country || 'N/A'}` : 'N/A';
    const nowIst = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 5. Build Safe Markdown Alert
    const contactAlert = `📬 *NEW CONTACT FORM SUBMISSION* 📬

👤 *Lead Name*: ${escapeTelegramMarkdown(cleanName)}
📧 *Email Address*: \`${cleanEmail}\`
💬 *Direct Message*:
"${escapeTelegramMarkdown(cleanMessage)}"

━━━━━━━━━━━━━━━━━━━━━━━
📍 *VISITOR CONTEXT*
• Location: ${loc}
• Real IP: \`${clientIp}\`
• Coordinates: \`${geo?.coordinates || 'N/A'}\`
• Device: ${geo?.deviceType || 'Web Browser'} (${geo?.platform || 'N/A'})
• Referrer: ${geo?.referrer || 'Direct'}
• Landing Page: \`${geo?.landingUrl || 'https://ayushchatterjee.me/#contact'}\`
• Submitted At: ${nowIst} (IST)`;

    const tgResult = await sendToTelegram(contactAlert);

    if (tgResult && tgResult.ok === false) {
      return res.status(500).json({ error: tgResult.error || 'Failed to dispatch alert' });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server /api/contact Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/track - Visitor Intelligence Telemetry Proxy
app.post('/api/track', trackRateLimiter, async (req, res) => {
  try {
    const { message, payload } = req.body || {};
    const clientIp = getClientIp(req);

    let finalMessage = message;

    if (payload) {
      let geo = payload;

      // Server-side IP and Geo enrichment if client missed it
      if ((!payload.ip || payload.ip === 'Unknown' || payload.city === 'N/A') && clientIp !== 'Unknown') {
        const enriched = await enrichGeoData(clientIp);
        if (enriched) {
          geo = { ...payload, ...enriched };
        } else if (clientIp !== 'Unknown') {
          geo = { ...payload, ip: clientIp };
        }
      }

      const enterprise = detectEnterpriseBrand(geo.isp, geo.org, geo.asn);
      const enterpriseHeader = enterprise.isEnterprise
        ? `🏢🏢 *ENTERPRISE / BIG BRAND VISIT DETECTED!* 🏢🏢
🏛️ *Organization*: ${enterprise.name}
🏷️ *Category*: ${enterprise.category}
🏢 *Network / ASN*: ${enterprise.network}
━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        : '';

      let vpnStatusText = '✅ NO (Clean Residential)';
      let vpnProviderText = geo.vpnProvider && geo.vpnProvider !== 'N/A' ? geo.vpnProvider : 'N/A';

      if (geo.isVpn) {
        vpnStatusText = '⚠️ YES (Proxy / Commercial VPN)';
        vpnProviderText = geo.vpnProvider && geo.vpnProvider !== 'N/A' ? geo.vpnProvider : (geo.org || geo.isp || 'Commercial Datacenter');
      } else if (enterprise.isEnterprise) {
        vpnStatusText = '✅ NO (Clean Residential)';
        vpnProviderText = 'N/A';
      }

      const locationText = `${geo.city || 'N/A'}, ${geo.region || 'N/A'}, ${geo.country || 'N/A'}`;
      const coordsLine = geo.mapsUrl
        ? `• Coordinates: \`${geo.coordinates}\` ([📍 Maps](${geo.mapsUrl}))`
        : `• Coordinates: \`${geo.coordinates || 'N/A'}\``;

      let webRtcIpText = geo.webRtcIp;
      if (!webRtcIpText || webRtcIpText === 'N/A' || webRtcIpText.includes('Timeout') || webRtcIpText.includes('Protected')) {
        webRtcIpText = 'No leak detected';
      }

      finalMessage = `${enterpriseHeader}🚨 *ADVANCED VISITOR INTELLIGENCE ALERT* 🚨

📈 *Total Visitors*: #${geo.visitorCount || 'Live'} Live Tracking
━━━━━━━━━━━━━━━━━━━━━━━
📍 *GEOLOCATION & NETWORK*
• Location: ${locationText}
• Postal Pincode: ${geo.postal || 'N/A'}
${coordsLine}
• IP Address: \`${geo.ip || clientIp}\`
• ISP / Org: ${geo.isp !== 'N/A' ? geo.isp : geo.org || 'N/A'}
• VPN/Proxy: ${vpnStatusText}
• VPN Provider: ${vpnProviderText}
• WebRTC Real IP: ${webRtcIpText}

━━━━━━━━━━━━━━━━━━━━━━━
🧭 *TRAFFIC & CAMPAIGN ATTRIBUTION*
• Traffic Source: ${geo.trafficSource || 'Direct / Bookmark 🔖'}
• Referrer URL: ${geo.referrer || 'Direct Entry'}
• UTM Attribution: ${geo.utmAttribution || 'None'}
• Landing Page: \`${geo.landingUrl || 'https://ayushchatterjee.me/'}\`

━━━━━━━━━━━━━━━━━━━━━━━
🖥 *HARDWARE & CLIENT ENVIRONMENT*
• Device Type: ${geo.deviceType || '💻 Desktop / Laptop'}
• Platform: ${geo.platform || 'Unknown'}
• CPU Cores: ${geo.cpuCores || 'N/A'}
• Device Memory: ${geo.deviceMemory || 'N/A'}
• Battery Status: ${geo.batteryStatus || 'N/A'}
• Screen Resolution: ${geo.screenRes || 'N/A'} (${geo.dpr || '1x'} DPR)
• Active Viewport: ${geo.activeViewport || 'N/A'}
• Input Mode: ${geo.inputMode || 'Mouse / Trackpad'}
• OS Theme Preference: ${geo.themePreference || 'Light Mode'}

━━━━━━━━━━━━━━━━━━━━━━━
📶 *NETWORK & BROWSER INTEGRITY*
• Connection: ${geo.connectionInfo || 'High-Speed Broadband'}
• AdBlocker Status: ${geo.adBlockStatus || 'Clean Browser (No AdBlock)'}
• Languages: ${geo.languages || 'en-US'}
• Page Load Speed: ${geo.pageLoadSpeed || 'Fast (<1s)'}

━━━━━━━━━━━━━━━━━━━━━━━
⏰ *TIME & TEMPORAL METRICS*
• Visitor Local Time: ${geo.visitorLocalTime || 'N/A'}
• India Time (IST): ${geo.indiaTime || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📱 *User Agent*:
\`${geo.userAgent || req.headers['user-agent'] || 'Unknown'}\``;
    }

    if (!finalMessage) {
      return res.status(400).json({ error: 'Message or payload is required' });
    }

    const tgResult = await sendToTelegram(finalMessage);

    if (tgResult && tgResult.ok === false && tgResult.error) {
      return res.status(500).json({ error: tgResult.error });
    }

    res.status(200).json({ success: true, message: 'Visitor intelligence sent securely to Telegram!' });
  } catch (error) {
    console.error('Server /api/track Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/action - User Action Telemetry Proxy
app.post('/api/action', trackRateLimiter, async (req, res) => {
  try {
    const { actionName, detail, payload } = req.body || {};
    const clientIp = getClientIp(req);

    if (!actionName) {
      return res.status(400).json({ error: 'actionName is required' });
    }

    const cleanAction = sanitizeString(actionName, 100);
    const cleanDetail = sanitizeString(detail, 200);

    const visitor = payload || {};
    const loc = visitor.city && visitor.country ? `${visitor.city}, ${visitor.country}` : 'N/A';
    const nowIst = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const message = `⚡ *USER ACTION TRACKED* ⚡

🎯 *Action*: ${cleanAction} ${cleanDetail ? `(\`${cleanDetail}\`)` : ''}
📍 *Location*: ${loc}
🌐 *IP*: \`${visitor.ip || clientIp}\`
📱 *Device*: ${visitor.deviceType || 'Web Browser'} (${visitor.platform || 'N/A'})
⏰ *Time*: ${nowIst} (IST)`;

    await sendToTelegram(message);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server /api/action Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/geoip - Protected Server-Side GeoIP Lookup Proxy
app.get('/api/geoip', trackRateLimiter, async (req, res) => {
  try {
    const targetIp = req.query.ip ? sanitizeString(req.query.ip, 45) : getClientIp(req);
    const geo = await enrichGeoData(targetIp);
    if (!geo) {
      return res.status(404).json({ error: 'GeoIP data not available for IP' });
    }
    res.status(200).json(geo);
  } catch (err) {
    console.error('Server /api/geoip Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /health - Server Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Secure Visitor Intelligence & Telegram Proxy Service is Live and Hardened',
    environment: NODE_ENV,
    allowedOrigin: PRIMARY_ORIGIN,
    timestamp: new Date().toISOString(),
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  if (err.message && err.message.includes('CORS policy')) {
    return res.status(403).json({ error: err.message });
  }
  console.error('Unhandled express error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🔒 Secure Visitor Intelligence Backend running on port ${PORT}`);
  console.log(`🛡️ CORS locked to: ${PRIMARY_ORIGIN}`);
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn("⚠️ WARNING: TELEGRAM_BOT_TOKEN is not set in your .env file!");
  }
});
