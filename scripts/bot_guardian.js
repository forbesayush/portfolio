/**
 * bot_guardian.js
 *
 * Active Security Watchdog for @ekchatterjee_bot
 * Continuously monitors the bot's metadata and immediately repels any unauthorized
 * changes to the bot name, description, or commands.
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8814191409:AAGuexfw15UmBV8nveMWg7MjAJtCfANKj5w';
const EXPECTED_NAME = 'Ayush Portfolio Bot';
const EXPECTED_DESCRIPTION = 'Real-time telemetry and recruiter inquiry dispatcher for Ayush Chatterjee (ayushchatterjee.me).';
const EXPECTED_SHORT_DESC = 'Official portfolio telemetry & recruiter inquiry alerts.';

const LEGITIMATE_COMMANDS = [
  { command: 'stats', description: 'Live session stats and active time' },
  { command: 'leads', description: 'Recent recruiter inquiries' },
  { command: 'report', description: 'Generate 24h performance digest' },
  { command: 'projects', description: 'Case study view breakdown' },
  { command: 'status', description: 'System health and uptime' },
  { command: 'help', description: 'Show commands menu' }
];

async function callTelegram(method, body = {}) {
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return await res.json();
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

async function auditAndEnforce() {
  try {
    // 1. Check Bot Identity
    const meRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
    const me = await meRes.json();

    if (!me.ok) {
      console.log(`[Guardian ${new Date().toLocaleTimeString()}] Token status:`, me.description);
      return;
    }

    if (me.result.first_name !== EXPECTED_NAME) {
      console.warn(`[Guardian ALERT] Bot name tampered: "${me.result.first_name}". Restoring...`);
      await callTelegram('setMyName', { name: EXPECTED_NAME });
    }

    // 2. Check Description
    const descRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMyDescription`);
    const desc = await descRes.json();
    if (desc.ok && desc.result.description !== EXPECTED_DESCRIPTION) {
      console.warn(`[Guardian ALERT] Description tampered. Restoring...`);
      await callTelegram('setMyDescription', { description: EXPECTED_DESCRIPTION });
    }

    // 3. Check Short Description
    const shortRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMyShortDescription`);
    const sDesc = await shortRes.json();
    if (sDesc.ok && sDesc.result.short_description !== EXPECTED_SHORT_DESC) {
      console.warn(`[Guardian ALERT] Short description tampered. Restoring...`);
      await callTelegram('setMyShortDescription', { short_description: EXPECTED_SHORT_DESC });
    }

    // 4. Enforce Commands
    await callTelegram('setMyCommands', { commands: LEGITIMATE_COMMANDS });
    console.log(`[Guardian ${new Date().toLocaleTimeString()}] Bot security verified & locked: @${me.result.username} is clean.`);
  } catch (err) {
    console.error('[Guardian Error]', err.message);
  }
}

// Run once immediately
auditAndEnforce();

// Check every 30 seconds
setInterval(auditAndEnforce, 30000);
