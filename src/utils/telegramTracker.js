/**
 * Advanced Visitor Intelligence & Telegram Tracking Engine
 * Extracted & upgraded from your previous portfolio's SecurityWrapper system.
 * 
 * Features:
 * - Live Visitor Counter (CounterAPI)
 * - Geolocation (City, Region, Country, Postal Pincode)
 * - Commercial VPN / Cloud Proxy Detector (blackbox.ipinfo.app)
 * - WebRTC Real IP Leak Discovery (Google STUN)
 * - Traffic Source Identification (WhatsApp, LinkedIn, Google, X/Twitter, Direct)
 * - Device & Fingerprint Telemetry (Platform, Screen, Language, UserAgent)
 * - Direct Telegram Bot Notification + Render Backend Relay
 */

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '6290094136'; // Extracted from your previous portfolio
const BACKEND_URL = 'https://portfolio-backend-iug0.onrender.com';

/**
 * Helper: Fetch with timeout
 */
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

/**
 * WebRTC Real IP Leak Test
 */
const getWebRTCIP = async (externalIp) => {
  if (typeof window === 'undefined') return 'N/A';
  return new Promise((resolve) => {
    try {
      const ips = new Set();
      const RTCPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;

      if (!RTCPeerConnection) return resolve('Not Supported');

      const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
      pc.createDataChannel('');

      pc.onicecandidate = (e) => {
        if (!e.candidate) {
          try { pc.close(); } catch (_) {}
          if (ips.size === 0) resolve('No leak detected');
          else resolve(Array.from(ips).join(', '));
          return;
        }
        const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
        const match = ipRegex.exec(e.candidate.candidate);
        if (match && match[1] !== externalIp && !match[1].endsWith('.local')) {
          ips.add(match[1]);
        }
      };

      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(() => resolve('Offer failed'));

      setTimeout(() => {
        try { pc.close(); } catch (_) {}
        if (ips.size === 0) resolve('Timeout / No leak');
        else resolve(Array.from(ips).join(', '));
      }, 2500);
    } catch (err) {
      resolve('WebRTC test error');
    }
  });
};

/**
 * Send Telegram Message (Direct via Telegram Bot API or via Backend)
 */
export async function sendTelegramNotification(messageText) {
  let sent = false;

  // 1. Direct Telegram Bot API
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageText,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });
      if (tgRes.ok) sent = true;
    } catch (e) {
      console.warn('[Telegram Tracker] Direct API dispatch failed:', e);
    }
  }

  // 2. Backup Relay: Render Backend
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: messageText }),
    });
    if (backendRes.ok) sent = true;
  } catch (e) {
    // Backend offline fallback
  }

  return sent;
}

/**
 * Advanced Visitor Tracker (Matches your previous portfolio's SecurityWrapper engine)
 */
export async function trackVisitor() {
  if (typeof window === 'undefined') return;

  // Session deduplication
  if (sessionStorage.getItem('tg_visitor_tracked')) {
    return;
  }

  try {
    // 1. IP & Geo Telemetry
    let data = { ip: 'Unknown', city: 'N/A', region: 'N/A', country_name: 'N/A', postal: 'N/A', org: 'N/A' };
    try {
      const ipResponse = await fetchWithTimeout('https://ipapi.co/json/');
      if (ipResponse.ok) {
        data = await ipResponse.json();
      }
    } catch (e) {
      // Secondary Geo Fallback
      try {
        const whoRes = await fetchWithTimeout('https://ipwho.is/');
        if (whoRes.ok) {
          const who = await whoRes.json();
          data = {
            ip: who.ip || 'Unknown',
            city: who.city || 'N/A',
            region: who.region || 'N/A',
            country_name: who.country || 'N/A',
            postal: who.postal || 'N/A',
            org: who.connection?.org || who.connection?.isp || 'N/A',
          };
        }
      } catch (_) {}
    }

    // 2. Advanced VPN / Cloud Proxy Check
    let isVPN = '✅ NO';
    let vpnBrand = 'N/A';
    try {
      if (data.ip && data.ip !== 'Unknown') {
        const vpnResponse = await fetchWithTimeout(`https://blackbox.ipinfo.app/lookup/${data.ip}`, { timeout: 2500 });
        if (vpnResponse.ok) {
          const vpnText = await vpnResponse.text();
          if (vpnText.trim() === 'Y') {
            isVPN = '⚠️ YES (Proxy/VPN)';
            const orgName = (data.org || '').toLowerCase();
            if (orgName.includes('tefincom') || orgName.includes('nord')) vpnBrand = 'NordVPN';
            else if (orgName.includes('expressvpn') || orgName.includes('express vpn')) vpnBrand = 'ExpressVPN';
            else if (orgName.includes('kape') || orgName.includes('cyberghost') || orgName.includes('zenmate') || orgName.includes('private internet access'))
              vpnBrand = 'CyberGhost / PIA / ZenMate';
            else if (orgName.includes('surfshark')) vpnBrand = 'Surfshark';
            else if (orgName.includes('proton')) vpnBrand = 'ProtonVPN';
            else if (orgName.includes('mullvad')) vpnBrand = 'Mullvad VPN';
            else if (orgName.includes('m247') || orgName.includes('datacamp') || orgName.includes('tzulo') || orgName.includes('leaseweb') || orgName.includes('quadranet'))
              vpnBrand = `Commercial VPN Host (${data.org})`;
            else if (orgName.includes('google') || orgName.includes('amazon') || orgName.includes('aws') || orgName.includes('digitalocean') || orgName.includes('ovh') || orgName.includes('linode') || orgName.includes('cloudflare') || orgName.includes('akamai'))
              vpnBrand = `Cloud Proxy/VPN (${data.org})`;
            else vpnBrand = data.org || 'Unknown Provider';
          }
        }
      }
    } catch (vpnErr) {
      console.warn('VPN check failed:', vpnErr);
    }

    // 3. WebRTC Real IP Leak
    let realIpStr = 'Unknown';
    try {
      realIpStr = await getWebRTCIP(data.ip);
    } catch (_) {}

    // 4. Device & Browser Fingerprinting
    const userAgent = navigator.userAgent || 'Unknown';
    const platform = navigator.platform || 'Unknown';
    const language = navigator.language || 'Unknown';
    const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A';
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? '📱 Mobile' : '🖥️ Desktop';

    // 5. Traffic Source Intelligence
    let source = 'Direct / Bookmark';
    const referrer = (document.referrer || '').toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const isWhatsApp =
      referrer.includes('whatsapp') ||
      referrer.includes('wa.me') ||
      urlParams.get('utm_source') === 'whatsapp' ||
      userAgent.toLowerCase().includes('whatsapp');

    if (isWhatsApp) {
      source = 'WhatsApp 🟩';
    } else if (referrer) {
      if (referrer.includes('linkedin.com')) source = 'LinkedIn 🔵';
      else if (referrer.includes('google.com')) source = 'Google Search 🔍';
      else if (referrer.includes('twitter.com') || referrer.includes('t.co')) source = 'Twitter/X 🐦';
      else source = document.referrer;
    }

    // 6. Live Visitor Count (CounterAPI)
    let visitorCount = 'Live Tracking';
    try {
      const timestamp = new Date().getTime();
      const countResponse = await fetch(`https://api.counterapi.dev/v1/forbesayush/portfolio/up?t=${timestamp}`);
      if (countResponse.ok) {
        const countData = await countResponse.json();
        if (countData && countData.count) {
          visitorCount = countData.count;
        }
      }
    } catch (_) {}

    // 7. Format Telegram Notification Message (Matching your exact original format)
    const messageText = `
🔔 *New Portfolio Visitor!* 🔔

📈 *Total Visitors:* ${visitorCount}
----------------------------
${deviceType}
🔗 *Source:* ${source}
📍 *Location:* ${data.city || 'N/A'}, ${data.region || 'N/A'}, ${data.country_name || 'N/A'}
📮 *Pincode:* ${data.postal || 'N/A'}
🌐 *IP Address:* ${data.ip || 'N/A'}
🛡️ *VPN/Proxy:* ${isVPN}
🏷️ *VPN Brand:* ${vpnBrand}
🕵️ *Real IP (WebRTC):* ${realIpStr}
🏢 *ISP/Org:* ${data.org || 'N/A'}
💻 *Platform:* ${platform}
📏 *Screen:* ${screenRes}
🗣 *Language:* ${language}
📱 *User Agent:* ${userAgent}
    `.trim();

    await sendTelegramNotification(messageText);
    sessionStorage.setItem('tg_visitor_tracked', 'true');
  } catch (err) {
    console.error('[Telegram Tracker] Error in visitor tracking:', err);
  }
}

/**
 * Send Contact Form Inquiry to Telegram
 */
export async function sendContactInquiry({ name, email, topic, message }) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const text = `
📬 *New Direct Portfolio Inquiry!* 📬

👤 *Name:* ${name}
📧 *Email:* ${email}
🎯 *Topic:* ${topic}
⏰ *Time (IST):* ${timestamp}

💬 *Message:*
"${message}"
  `.trim();

  return await sendTelegramNotification(text);
}
