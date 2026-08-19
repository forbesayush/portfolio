/**
 * Telegram Visitor & Inquiry Tracker
 * Sends real-time telemetry and message notifications directly to your Telegram chat.
 */

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

/**
 * Send a message via Telegram Bot API
 */
export async function sendTelegramNotification(messageText) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('[Telegram Tracker] Bot Token or Chat ID not configured.');
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('[Telegram Tracker] Failed to send notification:', error);
    return false;
  }
}

/**
 * Track visitor arrival (deduplicated per browser session)
 */
export async function trackVisitor() {
  if (typeof window === 'undefined') return;

  // Prevent spamming on every page refresh in the same session
  if (sessionStorage.getItem('tg_visitor_tracked')) {
    return;
  }

  try {
    // Fetch approximate geolocation info
    let geo = { ip: 'Unknown', city: 'Unknown', country_name: 'Unknown', org: 'Unknown' };
    try {
      const geoRes = await fetch('https://ipwho.is/');
      if (geoRes.ok) {
        const geoData = await geoRes.json();
        if (geoData.success) {
          geo = {
            ip: geoData.ip || 'Unknown',
            city: geoData.city || 'Unknown',
            country_name: `${geoData.country || 'Unknown'} ${geoData.country_code ? `(${geoData.country_code})` : ''}`,
            org: geoData.connection?.isp || geoData.connection?.org || 'Unknown',
          };
        }
      }
    } catch (e) {
      // Geo fallback
    }

    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone/i.test(userAgent);
    const deviceType = isMobile ? '📱 Mobile' : '💻 Desktop/Laptop';
    const referrer = document.referrer || 'Direct / Bookmark';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const message = `
🚀 <b>New Portfolio Visitor!</b>
📍 <b>Location:</b> ${geo.city}, ${geo.country_name}
🌐 <b>IP / ISP:</b> <code>${geo.ip}</code> (${geo.org})
🖥️ <b>Device:</b> ${deviceType}
🔗 <b>Referrer:</b> ${referrer}
⏰ <b>Time (IST):</b> ${timestamp}
🌐 <b>URL:</b> ${window.location.href}
    `.trim();

    const sent = await sendTelegramNotification(message);
    if (sent) {
      sessionStorage.setItem('tg_visitor_tracked', 'true');
    }
  } catch (err) {
    console.error('[Telegram Tracker] Error in visitor tracking:', err);
  }
}

/**
 * Send contact form submission to Telegram
 */
export async function sendContactInquiry({ name, email, topic, message }) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const text = `
📬 <b>New Direct Portfolio Inquiry!</b>
👤 <b>Name:</b> ${name}
📧 <b>Email:</b> <a href="mailto:${email}">${email}</a>
🎯 <b>Topic:</b> ${topic}
⏰ <b>Time (IST):</b> ${timestamp}

💬 <b>Message:</b>
<i>"${message}"</i>
  `.trim();

  return await sendTelegramNotification(text);
}
