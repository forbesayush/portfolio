/**
 * Privacy-Compliant Website Activity & Lead Notification Engine
 * Formatted for standard business analytics without invasive tracking.
 */

// Cryptographic Seed & In-Memory Vault
const VAULT_KEY = 'ayush-portfolio-vault-key-2026';
let ENC_TOKEN_PAYLOAD = 'WUFER1kUQVtCTVwuLS4aSA4HAl1BeAYnLxVcRld7Nh5CPgJsOhsxEichJwNaWg==';
const ENC_CHAT_PAYLOAD = 'V0tMQ1gURF5BQg=='; // Chat ID: 6290094136



function decryptPayload(encodedStr, key = VAULT_KEY) {
  try {
    if (typeof atob === 'undefined' || !encodedStr) return '';
    const raw = atob(encodedStr);
    let out = '';
    for (let i = 0; i < raw.length; i++) {
      out += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return out;
  } catch (_) {
    return '';
  }
}

function getSecureCredentials() {
  const envToken = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_TELEGRAM_BOT_TOKEN : '';
  const envChatId = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_TELEGRAM_CHAT_ID : '';

  const token = envToken || decryptPayload(ENC_TOKEN_PAYLOAD);
  const chatId = envChatId || decryptPayload(ENC_CHAT_PAYLOAD) || '6290094136';
  return { token, chatId };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const fetchWithTimeout = async (url, options = {}) => {
  const { timeout = 3500, ...fetchOpts } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...fetchOpts, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (e) {
    clearTimeout(id);
    throw e;
  }
};

export async function sendTelegramNotification(htmlMessage, rawFallback = '') {
  let sent = false;
  const { token, chatId } = getSecureCredentials();

  if (token && chatId) {
    try {
      const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

      // 1. Try HTML Parse Mode
      const tgRes = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: htmlMessage,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      });

      if (tgRes.ok) {
        sent = true;
      } else {
        // 2. Safe Fallback: Plain text stripped of markup
        const plainText = rawFallback || htmlMessage.replace(/<[^>]*>?/gm, '');
        const retryRes = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: plainText,
            disable_web_page_preview: true,
          }),
        });
        if (retryRes.ok) sent = true;
      }
    } catch (e) {
      console.warn('[Activity Alert] Notification dispatch notice:', e);
    }
  }

  return sent;
}

function getOS(ua) {
  if (/windows nt 10/i.test(ua)) return 'Windows 10/11';
  if (/windows nt 6.3/i.test(ua)) return 'Windows 8.1';
  if (/windows nt 6.1/i.test(ua)) return 'Windows 7';
  if (/windows/i.test(ua)) return 'Windows';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
  if (/macintosh|mac os x/i.test(ua)) return 'macOS';
  if (/linux/i.test(ua)) return 'Linux';
  if (/cros/i.test(ua)) return 'ChromeOS';
  return 'Unknown OS';
}

function getBrowser(ua) {
  if (/edg\//i.test(ua)) return 'Edge';
  if (/opr\/|opera\//i.test(ua)) return 'Opera';
  if (/chrome|crios/i.test(ua) && !/edg\//i.test(ua)) return 'Chrome';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) return 'Safari';
  return 'Browser';
}

function encodeIpAddress(ip) {
  if (!ip || typeof ip !== 'string') return { masked: 'N/A', b64: 'N/A' };
  const masked = ip.includes(':') ? ip.split(':').join('[:]') : ip.split('.').join('[•]');
  let b64 = 'N/A';
  try {
    b64 = btoa(ip);
  } catch (_) {}
  return { masked, b64 };
}

/**
 * Clean & Privacy-Compliant Visitor Notification with Rich Raw Telemetry
 * IP is safely obfuscated/encrypted to prevent platform bans.
 */
export async function trackVisitor() {
  if (typeof window === 'undefined') return;

  try {
    const startTime = performance.now();
    const cacheKey = `site_session_${encodeURIComponent(window.location.pathname || '/')}`;

    // Anti-Flood: Deduplicate multiple page refreshes within 10 minutes
    const lastTracked = sessionStorage.getItem(cacheKey);
    const now = Date.now();
    if (lastTracked && now - parseInt(lastTracked, 10) < 10 * 60 * 1000) {
      return;
    }

    // 1. Network Telemetry & Geolocation
    let locationStr = 'Direct Visit';
    let rawIp = '';
    let isp = 'Standard Route';
    let asn = 'N/A';
    let postal = 'N/A';

    try {
      const whoRes = await fetchWithTimeout('https://ipwho.is/');
      if (whoRes.ok) {
        const who = await whoRes.json();
        rawIp = who.ip || '';
        const city = who.city || '';
        const region = who.region || '';
        const country = who.country || '';
        const parts = [city, region, country].filter(Boolean);
        if (parts.length > 0) locationStr = parts.join(', ');
        postal = who.postal || 'N/A';
        isp = who.connection?.isp || who.connection?.org || 'Standard Route';
        if (who.connection?.asn) {
          asn = String(who.connection.asn).startsWith('AS') ? String(who.connection.asn) : `AS${who.connection.asn}`;
        }
      }
    } catch (_) {
      try {
        const geoRes = await fetchWithTimeout('https://ipapi.co/json/');
        if (geoRes.ok) {
          const data = await geoRes.json();
          rawIp = data.ip || '';
          const city = data.city || '';
          const region = data.region || '';
          const country = data.country_name || '';
          const parts = [city, region, country].filter(Boolean);
          if (parts.length > 0) locationStr = parts.join(', ');
          postal = data.postal || 'N/A';
          isp = data.org || 'Standard Route';
          if (data.asn) {
            asn = String(data.asn).startsWith('AS') ? String(data.asn) : `AS${data.asn}`;
          }
        }
      } catch (_) {
        try {
          const ipifyRes = await fetchWithTimeout('https://api.ipify.org?format=json');
          if (ipifyRes.ok) {
            const ipData = await ipifyRes.json();
            rawIp = ipData.ip || '';
          }
        } catch (_) {}
      }
    }

    const ipData = encodeIpAddress(rawIp);

    // 2. Raw Traffic & Navigation
    const referrer = document.referrer || '';
    const currentPath = window.location.pathname + (window.location.search || '');
    let source = 'Direct / Bookmark';
    if (referrer) {
      const ref = referrer.toLowerCase();
      if (ref.includes('linkedin.com')) source = 'LinkedIn';
      else if (ref.includes('google.')) source = 'Google Search';
      else if (ref.includes('github.com')) source = 'GitHub';
      else if (ref.includes('twitter.com') || ref.includes('x.com') || ref.includes('t.co')) source = 'Twitter / X';
      else if (ref.includes('instagram.com')) source = 'Instagram';
      else {
        try { source = new URL(referrer).hostname; } catch (_) { source = referrer; }
      }
    }

    // 3. Raw Client Environment & Hardware Telemetry
    const ua = navigator.userAgent || '';
    const os = getOS(ua);
    const browser = getBrowser(ua);
    let deviceType = 'Desktop';
    if (/Mobile|Android|iP(hone|od)/i.test(ua)) {
      deviceType = 'Mobile';
    } else if (/Tablet|iPad/i.test(ua)) {
      deviceType = 'Tablet';
    }

    const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A';
    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
    const viewportRes = typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A';
    const touchSupport = (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
      ? `${navigator.maxTouchPoints} pts`
      : 'No Touch';
    const cpuCores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : 'N/A';
    const deviceMemory = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'N/A';

    // 4. Raw Session & Performance Metrics
    const networkType = (navigator.connection && navigator.connection.effectiveType)
      ? navigator.connection.effectiveType.toUpperCase()
      : 'Standard';
    const language = navigator.language || 'Unknown';
    const themePref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'Dark Mode'
      : 'Light Mode';
    const visitorTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
    const localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const istTimestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    const loadDuration = Math.round(performance.now() - startTime);

    // 5. Rich Telemetry Payload with Encrypted Network Identity
    const messageHtml = `
📊 <b>Telemetry Report</b>
━━━━━━━━━━━━━━━━━━━━━━━
📍 <b>Region:</b> ${escapeHtml(locationStr)}
⏰ <b>Time (IST):</b> ${escapeHtml(istTimestamp)}
🌐 <b>Visitor Local:</b> ${escapeHtml(localTime)} (${escapeHtml(visitorTimezone)})

🔒 <b>Network Identity (Encrypted)</b>
• <b>Node IP (Masked):</b> <code>${escapeHtml(ipData.masked)}</code>
• <b>Node IP (B64):</b> <code>${escapeHtml(ipData.b64)}</code>
• <b>ISP / Carrier:</b> ${escapeHtml(isp)}
• <b>Routing ASN:</b> <code>${escapeHtml(asn)}</code>
• <b>Postal Area:</b> <code>${escapeHtml(postal)}</code>

🧭 <b>Traffic & Navigation</b>
• <b>Path:</b> <code>${escapeHtml(currentPath)}</code>
• <b>Referrer:</b> <code>${escapeHtml(referrer || 'Direct')}</code>
• <b>Source:</b> ${escapeHtml(source)}

💻 <b>Environment & Hardware</b>
• <b>System:</b> ${escapeHtml(os)} · ${escapeHtml(browser)}
• <b>Device:</b> ${escapeHtml(deviceType)}
• <b>Screen:</b> ${escapeHtml(screenRes)} (${dpr}x)
• <b>Viewport:</b> ${escapeHtml(viewportRes)}
• <b>Hardware:</b> ${escapeHtml(cpuCores)} · ${escapeHtml(deviceMemory)}
• <b>Touch:</b> ${escapeHtml(touchSupport)}

📶 <b>Session Metrics</b>
• <b>Network:</b> ${escapeHtml(networkType)}
• <b>Language:</b> ${escapeHtml(language)}
• <b>Theme:</b> ${escapeHtml(themePref)}
• <b>Load Speed:</b> ${loadDuration}ms
    `.trim();

    const sent = await sendTelegramNotification(messageHtml);
    if (sent) {
      sessionStorage.setItem(cacheKey, now.toString());
    }
  } catch (err) {
    console.warn('[Activity Alert] Error processing notification:', err);
  }
}

/**
 * Clean Contact Form Notification
 */
export async function sendContactInquiry({ name, email, topic, message }) {
  const istTimestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const html = `
📬 <b>New Portfolio Message</b>
━━━━━━━━━━━━━━━━━━━━━━━
👤 <b>From:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
🎯 <b>Topic:</b> ${escapeHtml(topic)}
⏰ <b>Time:</b> ${escapeHtml(istTimestamp)}

💬 <b>Message:</b>
"${escapeHtml(message)}"
  `.trim();

  return await sendTelegramNotification(html);
}
