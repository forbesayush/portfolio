/**
 * app.js
 *
 * Production-Grade Analytics, Session Cost Attribution & Lead Notification Server
 *
 * Environment Configuration:
 *   TELEGRAM_BOT_TOKEN="8814191409:AAGuexfw15UmBV8nveMWg7MjAJtCfANKj5w"
 *   TELEGRAM_CHAT_ID="6290094136"
 *   ADMIN_KEY="ayush_admin_9f3b8e72c4a10d65e2a87b4f"
 *   COST_PER_SESSION="0.01"
 *   COST_PER_ACTIVE_MINUTE="0.001"
 *
 * Run:
 *   node app.js
 */

"use strict";

const express = require("express");
const Database = require("better-sqlite3");
const crypto = require("node:crypto");

const app = express();

// Middleware
app.use(express.json({ limit: "25kb" }));

// Enable CORS for frontend integration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Consent-Id, X-Admin-Key, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Environment Configuration with Pre-filled Production Defaults
const PORT = Number(process.env.PORT || 3000);
const DB_PATH = process.env.DB_PATH || "./analytics.sqlite";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8814191409:AAGuexfw15UmBV8nveMWg7MjAJtCfANKj5w";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "6290094136";
const ADMIN_KEY = process.env.ADMIN_KEY || "ayush_admin_9f3b8e72c4a10d65e2a87b4f";
const COST_PER_SESSION = parseFloat(process.env.COST_PER_SESSION || "0.01");
const COST_PER_ACTIVE_MINUTE = parseFloat(process.env.COST_PER_ACTIVE_MINUTE || "0.001");
const HMAC_SECRET = process.env.ANALYTICS_HMAC_SECRET || "ayush-portfolio-hmac-secret-vault-2026";

// Initialize SQLite Database
const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// Setup Schema
db.exec(`
  CREATE TABLE IF NOT EXISTS consent (
    id TEXT PRIMARY KEY,
    analytics_allowed INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    session_id TEXT PRIMARY KEY,
    consent_id TEXT,
    created_at TEXT NOT NULL,
    last_active_at TEXT NOT NULL,
    active_seconds INTEGER DEFAULT 0,
    source TEXT,
    device_type TEXT,
    browser_family TEXT,
    base_cost REAL NOT NULL,
    duration_cost REAL DEFAULT 0,
    total_cost REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    consent_id TEXT,
    event_name TEXT NOT NULL,
    source TEXT,
    metadata TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    topic TEXT,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS audit_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    action TEXT NOT NULL,
    entity_id TEXT,
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_created ON sessions(created_at);
  CREATE INDEX IF NOT EXISTS idx_events_session ON events(session_id);
`);

const now = () => new Date().toISOString();

function audit(action, entityId = null) {
  try {
    db.prepare("INSERT INTO audit_log (action, entity_id, created_at) VALUES (?, ?, ?)")
      .run(action, entityId, now());
  } catch (_) {}
}

function parseUserAgent(ua = "") {
  const browser =
    /Edg\//.test(ua) ? "Edge" :
    /Firefox\//.test(ua) ? "Firefox" :
    /Chrome\//.test(ua) && !/Edg\//.test(ua) ? "Chrome" :
    /Safari\//.test(ua) && !/Chrome\//.test(ua) ? "Safari" :
    "Other";

  const device =
    /iPad|Tablet/i.test(ua) ? "tablet" :
    /Mobile|Android|iPhone/i.test(ua) ? "mobile" :
    "desktop";

  return { browser, device };
}

// Telegram Message Dispatcher
async function sendTelegramAlert(text, options = {}) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("[Telegram] Missing token or chat ID.");
    return false;
  }

  try {
    const endpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: options.parseMode || "HTML",
        disable_web_page_preview: true
      }),
      signal: AbortSignal.timeout(8000)
    });
    return response.ok;
  } catch (err) {
    console.warn("[Telegram Alert Error]", err.message);
    return false;
  }
}

// Authentication Middleware for Admin Endpoints
function requireAdmin(req, res, next) {
  const headerKey = req.get("x-admin-key") || (req.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!headerKey || headerKey !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized. Valid X-Admin-Key required." });
  }
  next();
}

// ---------- API ROUTES ----------

// Health Check & System Status
app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "Ayush Chatterjee Analytics & Session Cost Engine",
    costConfig: {
      costPerSession: `$${COST_PER_SESSION.toFixed(4)}`,
      costPerActiveMinute: `$${COST_PER_ACTIVE_MINUTE.toFixed(4)}`
    },
    uptime: `${Math.round(process.uptime())}s`
  });
});

// 1. Start Session & Track Base Cost
app.post("/api/session/start", (req, res) => {
  const sessionId = req.body?.sessionId || crypto.randomUUID();
  const consentId = req.body?.consentId || null;
  const source = (req.body?.source || "direct").slice(0, 100);
  const { browser, device } = parseUserAgent(req.get("user-agent") || "");
  const timestamp = now();

  const totalCost = COST_PER_SESSION;

  try {
    db.prepare(`
      INSERT INTO sessions
        (session_id, consent_id, created_at, last_active_at, active_seconds, source, device_type, browser_family, base_cost, duration_cost, total_cost)
      VALUES (?, ?, ?, ?, 0, ?, ?, ?, ?, 0, ?)
      ON CONFLICT(session_id) DO UPDATE SET
        last_active_at = excluded.last_active_at
    `).run(sessionId, consentId, timestamp, timestamp, source, device, browser, COST_PER_SESSION, totalCost);

    audit("session_started", sessionId);

    res.json({
      sessionId,
      baseCost: COST_PER_SESSION,
      totalCost,
      status: "active"
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to record session." });
  }
});

// 2. Session Heartbeat (25s intervals) & Duration Cost Accumulation
app.post(["/api/session/ping", "/api/session/heartbeat"], (req, res) => {
  const sessionId = req.body?.sessionId;
  const additionalSeconds = Number(req.body?.seconds || 25);

  if (!sessionId) {
    return res.status(400).json({ error: "sessionId required." });
  }

  const session = db.prepare("SELECT * FROM sessions WHERE session_id = ?").get(sessionId);
  if (!session) {
    return res.status(404).json({ error: "Session not found." });
  }

  const newActiveSeconds = session.active_seconds + additionalSeconds;
  const activeMinutes = newActiveSeconds / 60;
  const newDurationCost = activeMinutes * COST_PER_ACTIVE_MINUTE;
  const newTotalCost = session.base_cost + newDurationCost;

  db.prepare(`
    UPDATE sessions
    SET active_seconds = ?,
        duration_cost = ?,
        total_cost = ?,
        last_active_at = ?
    WHERE session_id = ?
  `).run(newActiveSeconds, newDurationCost, newTotalCost, now(), sessionId);

  res.json({
    sessionId,
    activeSeconds: newActiveSeconds,
    durationCost: Number(newDurationCost.toFixed(5)),
    totalCost: Number(newTotalCost.toFixed(5))
  });
});

// 2b. Session End
app.post("/api/session/end", (req, res) => {
  const sessionId = req.body?.sessionId;
  if (sessionId) {
    db.prepare("UPDATE sessions SET last_active_at = ? WHERE session_id = ?").run(now(), sessionId);
    audit("session_ended", sessionId);
  }
  res.status(202).json({ ended: true });
});

// 3. Feature / Event Recording
app.post(["/api/session/event", "/api/event"], (req, res) => {
  const sessionId = req.body?.sessionId || null;
  const consentId = req.body?.consentId || null;
  const feature = req.body?.feature || req.body?.eventName || "interaction";
  const action = req.body?.action || "used";
  const eventName = `${feature}:${action}`.slice(0, 50);
  const metadata = req.body?.metadata ? JSON.stringify(req.body.metadata).slice(0, 500) : null;
  const source = (req.body?.source || "").slice(0, 100);

  db.prepare(`
    INSERT INTO events (session_id, consent_id, event_name, source, metadata, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(sessionId, consentId, eventName, source, metadata, now());

  res.status(202).json({ recorded: true, eventName });
});

// 4. Contact Form Ingestion & Telegram Dispatch
app.post("/api/contact", async (req, res) => {
  const name = (req.body?.name || "").trim().slice(0, 100);
  const email = (req.body?.email || "").trim().slice(0, 100);
  const topic = (req.body?.topic || "APM Role").trim().slice(0, 100);
  const message = (req.body?.message || "").trim().slice(0, 2000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  // Save to database
  db.prepare(`
    INSERT INTO leads (name, email, topic, message, created_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(name, email, topic, message, now());

  audit("lead_submitted", email);

  // Dispatch live alert to Telegram
  const alertText = `
📬 <b>NEW RECRUITER INQUIRY</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
🎯 <b>Mandate:</b> ${topic}
⏰ <b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST

💬 <b>Message:</b>
<i>"${message}"</i>
  `.trim();

  await sendTelegramAlert(alertText);

  res.json({ success: true, message: "Inquiry received and dispatched." });
});

// 5. Admin Metrics & Cost Accounting (Protected by ADMIN_KEY)
app.get("/api/admin/metrics", requireAdmin, (req, res) => {
  const totalSessions = db.prepare("SELECT COUNT(*) AS count FROM sessions").get().count;
  const costAggregate = db.prepare(`
    SELECT
      COALESCE(SUM(total_cost), 0) AS totalAccruedCost,
      COALESCE(SUM(active_seconds), 0) AS totalActiveSeconds,
      COALESCE(AVG(active_seconds), 0) AS avgSessionDuration
    FROM sessions
  `).get();

  const trafficSources = db.prepare(`
    SELECT COALESCE(source, 'direct') AS source, COUNT(*) AS count, SUM(total_cost) AS cost
    FROM sessions
    GROUP BY source ORDER BY count DESC LIMIT 8
  `).all();

  const recentEvents = db.prepare(`
    SELECT event_name, source, created_at
    FROM events ORDER BY created_at DESC LIMIT 15
  `).all();

  const totalLeads = db.prepare("SELECT COUNT(*) AS count FROM leads").get().count;

  res.json({
    metrics: {
      totalSessions,
      totalActiveMinutes: Number((costAggregate.totalActiveSeconds / 60).toFixed(1)),
      avgSessionSeconds: Math.round(costAggregate.avgSessionDuration),
      totalAccruedCostUSD: `$${Number(costAggregate.totalAccruedCost).toFixed(4)}`,
      totalLeadsCaptured: totalLeads
    },
    rateCards: {
      costPerSession: `$${COST_PER_SESSION.toFixed(4)}`,
      costPerActiveMinute: `$${COST_PER_ACTIVE_MINUTE.toFixed(4)}`
    },
    trafficSources,
    recentEvents
  });
});

// 6. Admin Production Progress & Aggregate Report Dispatch (Protected by ADMIN_KEY)
app.post(["/admin/send-report", "/api/admin/send-report"], requireAdmin, async (req, res) => {
  const hours = Math.max(1, Math.min(720, Number(req.body?.hours || 24)));
  const since = new Date(Date.now() - hours * 3600000).toISOString();

  // Query database metrics for period
  const sessionStats = db.prepare(`
    SELECT
      COUNT(*) AS totalSessions,
      COALESCE(SUM(active_seconds), 0) AS totalActiveSeconds,
      COALESCE(SUM(total_cost), 0) AS totalCost,
      COALESCE(AVG(active_seconds), 0) AS avgDuration
    FROM sessions
    WHERE created_at >= ?
  `).get(since);

  const sources = db.prepare(`
    SELECT COALESCE(source, 'direct') AS source, COUNT(*) AS count
    FROM sessions
    WHERE created_at >= ?
    GROUP BY source ORDER BY count DESC LIMIT 5
  `).all(since);

  const topEvents = db.prepare(`
    SELECT event_name, COUNT(*) AS count
    FROM events
    WHERE created_at >= ?
    GROUP BY event_name ORDER BY count DESC LIMIT 5
  `).all(since);

  const leadsCount = db.prepare(`
    SELECT COUNT(*) AS count FROM leads WHERE created_at >= ?
  `).get(since).count;

  const totalActiveMin = (sessionStats.totalActiveSeconds / 60).toFixed(1);
  const costFormatted = Number(sessionStats.totalCost).toFixed(4);

  const sourcesText = sources.length > 0
    ? sources.map(s => `  • <code>${s.source}</code>: ${s.count}`).join("\n")
    : "  • None recorded";

  const eventsText = topEvents.length > 0
    ? topEvents.map(e => `  • <code>${e.event_name}</code>: ${e.count}`).join("\n")
    : "  • None recorded";

  const reportHtml = `
📊 <b>PRODUCTION TELEMETRY REPORT (${hours}H)</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 <b>Total Sessions:</b> ${sessionStats.totalSessions}
⏱ <b>Active Engagement:</b> ${totalActiveMin} mins (Avg: ${Math.round(sessionStats.avgDuration)}s)
💰 <b>Accrued Cost:</b> $${costFormatted} USD
📬 <b>Recruiter Inquiries:</b> ${leadsCount}

🌐 <b>TOP CHANNELS:</b>
${sourcesText}

⚡ <b>KEY PRODUCT INTERACTIONS:</b>
${eventsText}

<i>Dispatched at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</i>
  `.trim();

  const telegramSent = await sendTelegramAlert(reportHtml);

  res.json({
    success: true,
    hours,
    telegramSent,
    report: {
      totalSessions: sessionStats.totalSessions,
      totalActiveMinutes: Number(totalActiveMin),
      accruedCostUSD: `$${costFormatted}`,
      leadsCount,
      sources,
      topEvents
    }
  });
});

// 7. Admin Manual Telegram Dispatch
app.post("/api/admin/telegram-alert", requireAdmin, async (req, res) => {
  const text = req.body?.text || "🔔 Manual test alert from Analytics Admin Console.";
  const success = await sendTelegramAlert(text);
  res.json({ sent: success });
});

// 7. Automated Data Purge (30-day retention)
function purgeOldData() {
  const cutoff = new Date(Date.now() - 30 * 86400000).toISOString();
  db.prepare("DELETE FROM events WHERE created_at < ?").run(cutoff);
  db.prepare("DELETE FROM sessions WHERE last_active_at < ?").run(cutoff);
}
purgeOldData();
setInterval(purgeOldData, 24 * 60 * 60 * 1000).unref();

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 AYUSH CHATTERJEE ANALYTICS & COST ENGINE`);
  console.log(`📡 Listening on http://localhost:${PORT}`);
  console.log(`🤖 Telegram Bot: Configured (@ekchatterjee_bot)`);
  console.log(`📊 Chat ID: ${TELEGRAM_CHAT_ID}`);
  console.log(`💵 Rate: $${COST_PER_SESSION}/session + $${COST_PER_ACTIVE_MINUTE}/min`);
  console.log(`🔑 Admin Key: ${ADMIN_KEY}`);
  console.log(`=================================================`);
});
