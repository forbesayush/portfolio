// User Tracking & Visitor Data Capture System with Telegram Bot Integration

const env = (import.meta as unknown as { env: Record<string, string> }).env || {};
const TELEGRAM_BOT_TOKEN = env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = env.VITE_TELEGRAM_CHAT_ID || '6290094136';
const BACKEND_URL = env.VITE_BACKEND_URL || 'http://localhost:5000';

export interface VisitorInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  org: string;
  userAgent: string;
  screenRes: string;
  language: string;
  timezone: string;
  referrer: string;
  landingUrl: string;
  timestamp: string;
}

// Fetch visitor geolocation & network IP
export const getVisitorData = async (): Promise<VisitorInfo> => {
  let ip = 'Unknown';
  let city = 'Unknown';
  let region = 'Unknown';
  let country = 'Unknown';
  let org = 'Unknown';

  try {
    const res = await fetch('https://ipapi.co/json/').catch(() => null);
    if (res && res.ok) {
      const data = await res.json();
      ip = data.ip || 'Unknown';
      city = data.city || 'Unknown';
      region = data.region || 'Unknown';
      country = data.country_name || 'Unknown';
      org = data.org || data.asn || 'Unknown';
    } else {
      const fallbackRes = await fetch('https://api.ipify.org?format=json').catch(() => null);
      if (fallbackRes && fallbackRes.ok) {
        const fallbackData = await fallbackRes.json();
        ip = fallbackData.ip || 'Unknown';
      }
    }
  } catch (err) {
    console.warn('Geolocation lookup notice:', err);
  }

  return {
    ip,
    city,
    region,
    country,
    org,
    userAgent: navigator.userAgent,
    screenRes: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || 'Direct',
    landingUrl: window.location.href,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };
};

// Send Markdown Telegram Notification via Backend or Direct Endpoint
export const sendTelegramAlert = async (formattedMessage: string): Promise<boolean> => {
  // 1. Try sending via Backend Server endpoint
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: formattedMessage }),
    }).catch(() => null);

    if (backendRes && backendRes.ok) {
      console.log('✅ Tracking data sent securely via Backend server.');
      return true;
    }
  } catch (err) {
    console.warn('Backend server dispatch warning:', err);
  }

  // 2. Direct Telegram API fallback if Bot Token & Chat ID available
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID && !TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: formattedMessage,
          parse_mode: 'Markdown',
        }),
      });

      if (res.ok) {
        console.log('✅ Telegram alert sent directly via Telegram API.');
        return true;
      }
    } catch (err) {
      console.warn('Direct Telegram API dispatch warning:', err);
    }
  }

  return false;
};

// Automatically track new website visitor session
export const trackNewVisitor = async () => {
  const visitor = await getVisitorData();

  const message = `🚨 *NEW PORTFOLIO VISITOR ALERT* 🚨

👤 *Visitor Details*:
• *IP Address*: \`${visitor.ip}\`
• *Location*: ${visitor.city}, ${visitor.region}, ${visitor.country}
• *ISP/Network*: ${visitor.org}

📱 *Device Specs*:
• *User Agent*: \`${visitor.userAgent.slice(0, 120)}\`
• *Screen*: ${visitor.screenRes}
• *Language*: ${visitor.language}
• *Timezone*: ${visitor.timezone}

⏰ *Timestamp*: ${visitor.timestamp} (IST)
🔗 *Landing Page*: \`${visitor.landingUrl}\`
⬅️ *Referrer*: ${visitor.referrer}`;

  await sendTelegramAlert(message);
};

// Track Contact Form Submissions
export const trackContactForm = async (name: string, email: string, userMessage: string) => {
  const visitor = await getVisitorData();

  const message = `📬 *NEW CONTACT FORM SUBMISSION* 📬

👤 *Name*: ${name}
📧 *Email*: \`${email}\`
💬 *Message*:
"${userMessage}"

📍 *Visitor Location*: ${visitor.city}, ${visitor.region}, ${visitor.country}
🌐 *IP Address*: \`${visitor.ip}\`
📱 *Device*: ${visitor.screenRes} (${visitor.timezone})
⏰ *Submitted At*: ${visitor.timestamp}`;

  await sendTelegramAlert(message);
};

// Track Specific Button / Link Clicks
export const trackUserAction = async (actionName: string, detail?: string) => {
  const visitor = await getVisitorData();

  const message = `⚡ *USER ACTION TRACKED* ⚡

🎯 *Action*: ${actionName} ${detail ? `(${detail})` : ''}
📍 *Visitor Location*: ${visitor.city}, ${visitor.country}
🌐 *IP*: \`${visitor.ip}\`
⏰ *Time*: ${visitor.timestamp}`;

  await sendTelegramAlert(message);
};
