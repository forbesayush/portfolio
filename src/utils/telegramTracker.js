/**
 * Advanced Visitor Intelligence & Telegram Tracking Engine
 * Comprehensive real-time telemetry, hardware probing, VPN detection, UTM attribution,
 * and VIP Recruiter / Visitor Name identification.
 */

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8794303730:AAHcqK7dRlIATTP5u5QtPQ4-55EqR6A2dC0';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '6290094136';
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
 * WebRTC Real IP Leak Detection via STUN
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
      }, 2000);
    } catch (err) {
      resolve('WebRTC test error');
    }
  });
};

/**
 * Battery Status Probe
 */
const getBatteryStatus = async () => {
  try {
    if (typeof navigator !== 'undefined' && navigator.getBattery) {
      const battery = await navigator.getBattery();
      const level = Math.round(battery.level * 100);
      const charging = battery.charging ? '⚡ Charging' : '🔋 Discharging';
      return `${level}% (${charging})`;
    }
  } catch (_) {}
  return 'N/A (Desktop/Restricted)';
};

/**
 * Network Connection Speed & Type Probe
 */
const getNetworkInfo = () => {
  try {
    if (typeof navigator !== 'undefined' && navigator.connection) {
      const conn = navigator.connection;
      const type = conn.effectiveType ? conn.effectiveType.toUpperCase() : 'Broadband';
      const speed = conn.downlink ? `${conn.downlink} Mbps` : '';
      const rtt = conn.rtt ? `RTT: ${conn.rtt}ms` : '';
      const details = [type, speed, rtt].filter(Boolean).join(' • ');
      return details || 'Broadband/WiFi';
    }
  } catch (_) {}
  return 'Standard Broadband';
};

/**
 * AdBlocker Probe
 */
const checkAdBlocker = async () => {
  try {
    const url = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    const res = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    return '✅ Clean Browser (No AdBlock)';
  } catch (_) {
    return '🛡️ AdBlocker / Tracker Shield Active';
  }
};

/**
 * Extract Identified Name from URL params
 * e.g. ?name=Sundar_Pichai or ?v=Sarah_Jenkins or ?recruiter=John_Doe
 */
export function getIdentifiedVisitor() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const rawName = params.get('name') || params.get('v') || params.get('recruiter') || params.get('for') || params.get('who') || params.get('lead');
  const rawCompany = params.get('company') || params.get('org') || params.get('team');

  if (!rawName && !rawCompany) return null;

  const cleanName = rawName ? decodeURIComponent(rawName.replace(/[+_]/g, ' ')) : null;
  const cleanCompany = rawCompany ? decodeURIComponent(rawCompany.replace(/[+_]/g, ' ')) : null;

  return { name: cleanName, company: cleanCompany };
}

/**
 * Send Message to Telegram & Backend Relay
 */
export async function sendTelegramNotification(messageText) {
  let sent = false;

  // 1. Direct Telegram API
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

  // 2. Render Relay Fallback
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: messageText }),
    });
    if (backendRes.ok) sent = true;
  } catch (e) {
    // Silent fallback
  }

  return sent;
}

/**
 * Master Visitor Telemetry Tracker
 */
export async function trackVisitor() {
  if (typeof window === 'undefined') return;

  // Deduplicate per browser session
  if (sessionStorage.getItem('tg_visitor_tracked')) {
    return;
  }

  try {
    const startTime = performance.now();

    // 0. Check for Identified VIP Visitor / Recruiter Name in URL
    const identified = getIdentifiedVisitor();
    let vipHeader = '';
    if (identified) {
      vipHeader = `
🎯🎯 *IDENTIFIED VIP VISITOR / RECRUITER!* 🎯🎯
👤 *Identified Name:* ${identified.name ? `*${identified.name}*` : 'N/A'}
🏢 *Identified Company:* ${identified.company ? `*${identified.company}*` : 'N/A'}
━━━━━━━━━━━━━━━━━━━━━━━
      `.trim() + '\n\n';
    }

    // 1. IP & Deep Geolocation
    let geo = { ip: 'Unknown', city: 'N/A', region: 'N/A', country_name: 'N/A', postal: 'N/A', org: 'N/A', latitude: '', longitude: '', timezone: '' };
    try {
      const ipRes = await fetchWithTimeout('https://ipapi.co/json/');
      if (ipRes.ok) {
        geo = await ipRes.json();
      }
    } catch (e) {
      try {
        const whoRes = await fetchWithTimeout('https://ipwho.is/');
        if (whoRes.ok) {
          const who = await whoRes.json();
          geo = {
            ip: who.ip || 'Unknown',
            city: who.city || 'N/A',
            region: who.region || 'N/A',
            country_name: who.country || 'N/A',
            postal: who.postal || 'N/A',
            org: who.connection?.org || who.connection?.isp || 'N/A',
            latitude: who.latitude || '',
            longitude: who.longitude || '',
            timezone: who.timezone?.id || '',
          };
        }
      } catch (_) {}
    }

    // 2. Advanced VPN / Commercial Proxy / Datacenter Check
    let isVPN = '✅ NO (Clean Residential)';
    let vpnBrand = 'N/A';
    try {
      if (geo.ip && geo.ip !== 'Unknown') {
        const vpnRes = await fetchWithTimeout(`https://blackbox.ipinfo.app/lookup/${geo.ip}`, { timeout: 2500 });
        if (vpnRes.ok) {
          const vpnText = await vpnRes.text();
          if (vpnText.trim() === 'Y') {
            isVPN = '⚠️ YES (Proxy / Commercial VPN)';
            const orgName = (geo.org || '').toLowerCase();
            if (orgName.includes('tefincom') || orgName.includes('nord')) vpnBrand = 'NordVPN';
            else if (orgName.includes('expressvpn') || orgName.includes('express vpn')) vpnBrand = 'ExpressVPN';
            else if (orgName.includes('kape') || orgName.includes('cyberghost') || orgName.includes('zenmate') || orgName.includes('private internet access'))
              vpnBrand = 'CyberGhost / PIA / ZenMate';
            else if (orgName.includes('surfshark')) vpnBrand = 'Surfshark';
            else if (orgName.includes('proton')) vpnBrand = 'ProtonVPN';
            else if (orgName.includes('mullvad')) vpnBrand = 'Mullvad VPN';
            else if (orgName.includes('m247') || orgName.includes('datacamp') || orgName.includes('tzulo') || orgName.includes('leaseweb') || orgName.includes('quadranet'))
              vpnBrand = `Commercial Datacenter (${geo.org})`;
            else if (orgName.includes('google') || orgName.includes('amazon') || orgName.includes('aws') || orgName.includes('digitalocean') || orgName.includes('ovh') || orgName.includes('linode') || orgName.includes('cloudflare') || orgName.includes('akamai'))
              vpnBrand = `Cloud Data Center (${geo.org})`;
            else vpnBrand = geo.org || 'Unknown Proxy Provider';
          }
        }
      }
    } catch (_) {}

    // 3. WebRTC Real IP Leak Probe
    let realIpStr = 'No leak detected';
    try {
      realIpStr = await getWebRTCIP(geo.ip);
    } catch (_) {}

    // 4. Battery & Network Telemetry
    const batteryStatus = await getBatteryStatus();
    const networkInfo = getNetworkInfo();
    const adBlockStatus = await checkAdBlocker();

    // 5. Hardware & Device Probing
    const userAgent = navigator.userAgent || 'Unknown';
    const platform = navigator.platform || 'Unknown';
    const languages = navigator.languages ? navigator.languages.join(', ') : navigator.language || 'Unknown';
    const cpuCores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : 'N/A';
    const deviceMemory = navigator.deviceMemory ? `~${navigator.deviceMemory} GB RAM` : 'N/A';
    const touchSupport = navigator.maxTouchPoints > 0 ? `Touchscreen (${navigator.maxTouchPoints} pts)` : 'No Touch (Mouse/Trackpad)';
    const dpr = typeof window !== 'undefined' ? `${window.devicePixelRatio || 1}x DPR` : '1x';
    const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A';
    const viewportRes = typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A';
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? '📱 Mobile' : '💻 Desktop / Laptop';
    const themePref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '🌙 Dark Mode' : '☀️ Light Mode';

    // 6. Source & UTM Campaign Attribution
    let source = 'Direct / Bookmark 🔖';
    const referrer = (document.referrer || '').toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const hasUtm = utmSource || utmMedium || utmCampaign;
    const utmSummary = hasUtm ? `source=${utmSource || 'N/A'}, medium=${utmMedium || 'N/A'}, campaign=${utmCampaign || 'N/A'}` : 'None';

    const isWhatsApp =
      referrer.includes('whatsapp') ||
      referrer.includes('wa.me') ||
      utmSource === 'whatsapp' ||
      userAgent.toLowerCase().includes('whatsapp');

    if (isWhatsApp) {
      source = 'WhatsApp 🟩';
    } else if (referrer) {
      if (referrer.includes('linkedin.com')) source = 'LinkedIn 🔵';
      else if (referrer.includes('google.com')) source = 'Google Search 🔍';
      else if (referrer.includes('twitter.com') || referrer.includes('t.co') || referrer.includes('x.com')) source = 'Twitter / X 🐦';
      else if (referrer.includes('github.com')) source = 'GitHub 🐙';
      else source = document.referrer;
    }

    // 7. Live Visitor Counter (CounterAPI)
    let visitorCount = 'Live Tracking';
    try {
      const timestamp = new Date().getTime();
      const countRes = await fetch(`https://api.counterapi.dev/v1/forbesayush/portfolio/up?t=${timestamp}`);
      if (countRes.ok) {
        const countData = await countRes.json();
        if (countData && countData.count) {
          visitorCount = countData.count;
        }
      }
    } catch (_) {}

    // 8. Timestamps & Timezones
    const visitorTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || geo.timezone || 'Unknown';
    const visitorLocalTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const istTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'medium' });
    const loadDuration = Math.round(performance.now() - startTime);

    const coordsStr = (geo.latitude && geo.longitude) ? `${geo.latitude}, ${geo.longitude}` : 'N/A';

    // 9. Master Formatted Notification Message
    const messageText = `
${vipHeader}🚨 *ADVANCED VISITOR INTELLIGENCE ALERT* 🚨

📈 *Total Visitors:* #${visitorCount}
━━━━━━━━━━━━━━━━━━━━━━━
📍 *GEOLOCATION & NETWORK*
• *Location:* ${geo.city || 'N/A'}, ${geo.region || 'N/A'}, ${geo.country_name || 'N/A'}
• *Postal Pincode:* ${geo.postal || 'N/A'}
• *Coordinates:* ${coordsStr}
• *IP Address:* \`${geo.ip || 'N/A'}\`
• *ISP / Org:* ${geo.org || 'N/A'}
• *VPN/Proxy:* ${isVPN}
• *VPN Provider:* ${vpnBrand}
• *WebRTC Real IP:* \`${realIpStr}\`

━━━━━━━━━━━━━━━━━━━━━━━
🧭 *TRAFFIC & CAMPAIGN ATTRIBUTION*
• *Traffic Source:* ${source}
• *Referrer URL:* ${document.referrer || 'Direct Entry'}
• *UTM Attribution:* ${utmSummary}
• *Landing Page:* ${window.location.href}

━━━━━━━━━━━━━━━━━━━━━━━
🖥️ *HARDWARE & CLIENT ENVIRONMENT*
• *Device Type:* ${deviceType}
• *Platform:* ${platform}
• *CPU Cores:* ${cpuCores}
• *Device Memory:* ${deviceMemory}
• *Battery Status:* ${batteryStatus}
• *Screen Resolution:* ${screenRes} (${dpr})
• *Active Viewport:* ${viewportRes}
• *Input Mode:* ${touchSupport}
• *OS Theme Preference:* ${themePref}

━━━━━━━━━━━━━━━━━━━━━━━
📶 *NETWORK & BROWSER INTEGRITY*
• *Connection:* ${networkInfo}
• *AdBlocker Status:* ${adBlockStatus}
• *Languages:* ${languages}
• *Page Load Speed:* ${loadDuration} ms

━━━━━━━━━━━━━━━━━━━━━━━
⏰ *TIME & TEMPORAL METRICS*
• *Visitor Local Time:* ${visitorLocalTime} (${visitorTimezone})
• *India Time (IST):* ${istTimestamp}

📱 *User Agent:*
\`${userAgent}\`
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
  const istTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'medium' });

  const text = `
📬 *NEW DIRECT INQUIRY FROM PORTFOLIO!* 📬

👤 *Name:* ${name}
📧 *Email:* ${email}
🎯 *Discussion Topic:* ${topic}
⏰ *Time (IST):* ${istTimestamp}

💬 *Message Content:*
"${message}"
  `.trim();

  return await sendTelegramNotification(text);
}
