/**
 * privacy-analytics.js
 *
 * Single-file, server-side Node.js example:
 *   - Express API for consent, privacy requests, and aggregate analytics
 *   - SQLite storage with configurable retention and deletion
 *   - Telegram production-progress alerts containing aggregate data only
 *
 * Install:
 *   npm install express better-sqlite3
 *
 * Run:
 *   NODE_ENV=production \
 *   ANALYTICS_HMAC_SECRET='use-a-long-random-secret' \
 *   TELEGRAM_BOT_TOKEN='your-bot-token' \
 *   TELEGRAM_CHAT_ID='your-chat-id' \
 *   node privacy-analytics.js
 *
 * Serve the consent UI below from your site, and configure your reverse proxy
 * to provide the client IP securely. Do not trust X-Forwarded-For unless your
 * proxy is explicitly configured as trusted.
 */

"use strict";

const express = require("express");
const Database = require("better-sqlite3");
const crypto = require("node:crypto");

const app = express();
app.use(express.json({ limit: "10kb" }));

const PORT = Number(process.env.PORT || 3000);
const DB_PATH = process.env.DB_PATH || "./analytics.sqlite";
const HMAC_SECRET = process.env.ANALYTICS_HMAC_SECRET;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Retention is configurable. Keep only what you need.
const RETENTION_DAYS = {
  consent: Number(process.env.CONSENT_RETENTION_DAYS || 730),
  events: Number(process.env.EVENT_RETENTION_DAYS || 30),
  audit: Number(process.env.AUDIT_RETENTION_DAYS || 365),
};

if (!HMAC_SECRET || HMAC_SECRET.length < 32) {
  throw new Error("Set ANALYTICS_HMAC_SECRET to a random secret of at least 32 characters.");
}

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS consent (
    id TEXT PRIMARY KEY,
    analytics_allowed INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    consent_id TEXT NOT NULL,
    event_name TEXT NOT NULL,
    source TEXT,
    device_type TEXT,
    browser_family TEXT,
    company_name TEXT,
    company_source TEXT,
    created_at TEXT NOT NULL,
    FOREIGN KEY(consent_id) REFERENCES consent(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS audit_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    action TEXT NOT NULL,
    consent_id TEXT,
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at);
  CREATE INDEX IF NOT EXISTS idx_events_consent_id ON events(consent_id);
`);

const now = () => new Date().toISOString();

function audit(action, consentId = null) {
  db.prepare(
    "INSERT INTO audit_log (action, consent_id, created_at) VALUES (?, ?, ?)"
  ).run(action, consentId, now());
}

function validId(value) {
  return typeof value === "string" && /^[a-f0-9-]{20,80}$/i.test(value);
}

function safeText(value, max = 100) {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\r\n\t]/g, " ").trim();
  return cleaned ? cleaned.slice(0, max) : null;
}

function hashIp(ip) {
  if (!ip) return null;
  return crypto.createHmac("sha256", HMAC_SECRET).update(ip).digest("hex");
}

function getClientIp(req) {
  // Use req.ip only after configuring Express trust proxy for your own proxy.
  // IP is pseudonymized and never stored raw in this example.
  return req.ip || req.socket?.remoteAddress || null;
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

function requireConsent(req, res, next) {
  const consentId = req.get("x-consent-id");
  if (!validId(consentId)) {
    return res.status(400).json({ error: "Valid X-Consent-Id header required." });
  }

  const consent = db.prepare("SELECT * FROM consent WHERE id = ?").get(consentId);
  if (!consent || consent.analytics_allowed !== 1) {
    return res.status(403).json({ error: "Analytics consent is not active." });
  }

  req.consentId = consentId;
  next();
}

// Create or update a consent record. Do not enable analytics by default.
app.post("/api/consent", (req, res) => {
  const allowed = req.body?.analyticsAllowed === true;
  const suppliedId = req.body?.consentId;
  const consentId = validId(suppliedId) ? suppliedId : crypto.randomUUID();
  const timestamp = now();

  db.prepare(`
    INSERT INTO consent (id, analytics_allowed, created_at, updated_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      analytics_allowed = excluded.analytics_allowed,
      updated_at = excluded.updated_at
  `).run(consentId, allowed ? 1 : 0, timestamp, timestamp);

  audit(allowed ? "consent_granted_or_updated" : "consent_denied_or_withdrawn", consentId);

  if (!allowed) {
    db.prepare("DELETE FROM events WHERE consent_id = ?").run(consentId);
  }

  res.json({ consentId, analyticsAllowed: allowed });
});

// Record a minimal event only when analytics consent is active.
app.post("/api/event", requireConsent, (req, res) => {
  const eventName = safeText(req.body?.eventName, 50);
  if (!eventName) return res.status(400).json({ error: "eventName is required." });

  const { browser, device } = parseUserAgent(req.get("user-agent") || "");
  const source = safeText(req.body?.source, 100);

  // Company information must come from a legitimate, disclosed, consent-based
  // provider or user-supplied business context. Never infer an individual's
  // identity from an IP address or scrape LinkedIn.
  const companyName = safeText(req.body?.companyName, 100);
  const companySource = companyName
    ? safeText(req.body?.companySource, 100)
    : null;

  db.prepare(`
    INSERT INTO events
      (consent_id, event_name, source, device_type, browser_family,
       company_name, company_source, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    req.consentId,
    eventName,
    source,
    device,
    browser,
    companyName,
    companySource,
    now()
  );

  // Pseudonymized IP is deliberately not retained in this example.
  // If you have a documented legal need to retain it, set a short retention
  // period, restrict access, encrypt storage, and disclose it in your notice.
  void hashIp(getClientIp(req));

  res.status(202).json({ accepted: true });
});

// Access/export the requesting visitor's records using their consent ID.
app.get("/api/privacy/export", (req, res) => {
  const consentId = req.get("x-consent-id");
  if (!validId(consentId)) return res.status(400).json({ error: "Valid X-Consent-Id required." });

  const consent = db.prepare("SELECT * FROM consent WHERE id = ?").get(consentId);
  if (!consent) return res.status(404).json({ error: "No record found." });

  const events = db.prepare(`
    SELECT event_name, source, device_type, browser_family,
           company_name, company_source, created_at
    FROM events WHERE consent_id = ? ORDER BY created_at DESC
  `).all(consentId);

  res.json({ consent, events });
});

// Delete a visitor's analytics and consent record.
app.delete("/api/privacy/data", (req, res) => {
  const consentId = req.get("x-consent-id");
  if (!validId(consentId)) return res.status(400).json({ error: "Valid X-Consent-Id required." });

  db.prepare("DELETE FROM events WHERE consent_id = ?").run(consentId);
  db.prepare("DELETE FROM consent WHERE id = ?").run(consentId);
  audit("privacy_data_deleted", consentId);

  res.status(204).end();
});

// Aggregate reporting. Never return individual visitor records here.
app.get("/api/analytics/summary", (req, res) => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const total = db.prepare(
    "SELECT COUNT(*) AS count FROM events WHERE created_at >= ?"
  ).get(since).count;

  const sources = db.prepare(`
    SELECT COALESCE(source, 'unknown') AS source, COUNT(*) AS count
    FROM events WHERE created_at >= ?
    GROUP BY source ORDER BY count DESC LIMIT 10
  `).all(since);

  const devices = db.prepare(`
    SELECT device_type AS device, COUNT(*) AS count
    FROM events WHERE created_at >= ?
    GROUP BY device_type ORDER BY count DESC
  `).all(since);

  res.json({ period: "last 24 hours", totalEvents: total, sources, devices });
});

// Telegram receives aggregate production progress only—never visitor-level data.
async function sendTelegramProgress({ stage, status, summary }) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

  const safe = (v) => String(v || "").replace(/[\r\n]/g, " ").slice(0, 250);
  const text = [
    "Production progress",
    `Stage: ${safe(stage)}`,
    `Status: ${safe(status)}`,
    `Summary: ${safe(summary)}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    }
  );

  if (!response.ok) throw new Error(`Telegram notification failed: ${response.status}`);
}

// Example production-progress endpoint. Protect this endpoint with your
// deployment platform's authentication or a separate admin authentication layer.
app.post("/internal/production-progress", async (req, res) => {
  try {
    await sendTelegramProgress({
      stage: req.body?.stage,
      status: req.body?.status,
      summary: req.body?.summary,
    });
    res.status(202).json({ sent: Boolean(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) });
  } catch {
    res.status(502).json({ error: "Notification failed." });
  }
});

// Automatically delete expired records.
function purgeExpired() {
  const cutoff = (days) => new Date(Date.now() - days * 86400000).toISOString();

  db.prepare("DELETE FROM events WHERE created_at < ?").run(cutoff(RETENTION_DAYS.events));
  db.prepare("DELETE FROM consent WHERE updated_at < ?").run(cutoff(RETENTION_DAYS.consent));
  db.prepare("DELETE FROM audit_log WHERE created_at < ?").run(cutoff(RETENTION_DAYS.audit));
}
purgeExpired();
setInterval(purgeExpired, 60 * 60 * 1000).unref();

app.listen(PORT, () => {
  console.log(`Privacy analytics server listening on port ${PORT}`);
});
