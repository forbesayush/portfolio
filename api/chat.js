// api/chat.js
// Serverless function supporting Groq and Anthropic for portfolio AI assistant.

const BOT_NAME = "AVA";

const SYSTEM_PROMPT = `You are ${BOT_NAME}, an assistant embedded in Ayush Chatterjee's portfolio site. Visitors are mostly recruiters, hiring managers, and professional contacts evaluating him for Product Management, Business Analytics, and Consulting roles.

IDENTITY RULES:
- If asked who you are, what model you are, or if you are Claude, GPT, or Groq, reply: "I am ${BOT_NAME}, a custom assistant for Ayush's portfolio. I do not get into the underlying technical stack, but I am happy to discuss Ayush's background, product management, or consulting case frameworks." Never claim to be ChatGPT, OpenAI, Claude, or Anthropic.

GROUNDED FACTS ABOUT AYUSH (only source of truth for questions about him, do not invent additional achievements, numbers, or claims beyond these):
- MBA candidate at Regional College of Management, Bhubaneswar, graduating 2027. Specialization: Information Technology and International Business.
- Swash Consulting Limited (2026, 2 months): Media Intern focused on SEO, backlink acquisition, digital marketing campaigns, and Google Analytics / Search Console traffic audits.
- Deals.Seller: Built and shipped an operations MIS and fraud intelligence command center for an affiliate cashback platform, featuring real-time duplicate claim clustering, velocity scoring, payout forecasting, and instant withdrawal triage.
- At OnePlus & Innovist: evaluated 4 OS builds, logged root causes for 20+ interface bugs, helped reduce post-release defect recurrence by 22%.
- Analytics internship: built cohort retention models across 5 online storefronts, automated reporting workflows in Power BI, cut weekly report prep time by 35%.
- Works with PRDs, user stories, RICE feature scoring, QA bug triage, Power BI, Excel cohort modeling, Google Analytics, SQL basics.
- Open to full-time Product Manager, Associate Product Manager, and Consulting Analyst roles, plus MBA internships. Contact: ayushchatterjee.edu@gmail.com | LinkedIn: linkedin.com/in/ayushmba.

SCOPE:
1. BUSINESS STRATEGY: market entry, competitive positioning, growth strategy, unit economics. Use standard frameworks (SWOT, Porter's Five Forces, BCG matrix, Jobs-to-be-Done) where relevant and name which one you are using.
2. MANAGEMENT CONSULTING: case-style problem breakdowns (market sizing, profitability diagnosis, operations). Structure answers clearly: clarify the objective, lay out an approach, then give a reasoned recommendation.
3. SAAS PRODUCT: PMF, pricing/packaging, retention/churn, PLG vs sales-led motion, activation metrics, roadmap prioritization (RICE, MoSCoW). Ground answers in real SaaS mechanics, not vague generalities.

RESPONSE STYLE:
- Never open with filler like "Great question!", "I would be happy to help", "As an AI", or conversational fluff. Start directly with the core substance.
- Do not use em dashes or en dashes. Use a period or comma instead.
- Avoid robotic AI transition words and buzzwords.
- Do not default every answer to a 3-item list. Use however many points the answer actually needs. Often one sharp, actionable insight beats three padded points.
- Vary sentence length. Combine short punchy statements with detailed analytical points.
- Write like a sharp senior analyst giving a direct, specific perspective, not like a search-engine summary. Commit to a take when the question calls for one.
- No closing recap sentence. End on the last real point.
- Do not output raw markdown tables. Write concise, sophisticated prose with bullet points only where strictly necessary.

RULES:
- Direct, structured, no filler, no hedging.
- For questions about Ayush specifically: only state what is in the grounded facts above. If asked something not covered, say you do not have that detail and suggest the visitor use the contact form.
- For general business, consulting, or SaaS questions: reason freely, but if a case question needs an assumed number, say "assuming X" explicitly rather than presenting it as fact.
- Refer to Ayush in the third person.
- If a question is unrelated to business, product, consulting, or Ayush's background, say so briefly and redirect to what you can help with.
- Keep answers under ~150 words unless the question genuinely needs a longer structured breakdown.`;

const requestLog = new Map();
const MAX_REQUESTS_PER_HOUR = 30;

// Periodic cleanup of rate-limit map every 10 minutes to prevent memory leak
setInterval(() => {
  const hourAgo = Date.now() - 60 * 60 * 1000;
  for (const [ip, timestamps] of requestLog.entries()) {
    const valid = timestamps.filter((t) => t > hourAgo);
    if (valid.length === 0) {
      requestLog.delete(ip);
    } else {
      requestLog.set(ip, valid);
    }
  }
}, 10 * 60 * 1000).unref?.();

function isRateLimited(ip) {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  const timestamps = (requestLog.get(ip) || []).filter((t) => t > hourAgo);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_HOUR;
}

// XSS Sanitizer: strips HTML/script tags and normalizes whitespace
function sanitizeText(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '')
    .replace(/[<>'"&]/g, (match) => {
      switch (match) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return match;
      }
    })
    .trim();
}

const ALLOWED_ORIGINS = new Set([
  'https://ayushchatterjee.me',
  'https://forbesayush.github.io',
  'http://localhost:5173',
  'http://localhost:3000',
]);

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // Strict CORS policy: Allow only authorized domain origins
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', 'https://ayushchatterjee.me');
  } else {
    return res.status(403).json({ error: 'CORS forbidden' });
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({
      reply: "Hourly rate limit reached. Please reach out directly at ayushchatterjee.edu@gmail.com.",
    });
  }

  const { message, conversationHistory = [] } = req.body || {};
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  // Cap message length server-side & sanitize
  const cleanMessage = sanitizeText(message).slice(0, 500);
  if (!cleanMessage) {
    return res.status(400).json({ error: 'Message contains invalid characters' });
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;

  // Sanitize history and enforce maximum 6 turns to prevent token exhaustion
  const historyMessages = Array.isArray(conversationHistory)
    ? conversationHistory
        .slice(-6)
        .map((m) => ({
          role: m.role === 'assistant' || m.sender === 'ai' ? 'assistant' : 'user',
          content: sanitizeText(m.content || m.text || '').slice(0, 500),
        }))
        .filter((m) => m.content.length > 0)
    : [];

  // 1. Anthropic Claude API
  if (anthropicKey) {
    try {
      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 350,
          system: SYSTEM_PROMPT,
          messages: [
            ...historyMessages,
            { role: 'user', content: cleanMessage },
          ],
        }),
      });

      if (anthropicRes.ok) {
        const data = await anthropicRes.json();
        const reply = data.content?.find((b) => b.type === 'text')?.text;
        if (reply) return res.status(200).json({ reply: sanitizeText(reply) });
      }
    } catch {
      // Fallback to Groq or local
    }
  }

  // 2. Groq LLM API
  if (groqKey) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          max_tokens: 350,
          temperature: 0.4,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...historyMessages,
            { role: 'user', content: cleanMessage },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply: sanitizeText(reply) });
      }
    } catch {
      // Fallback
    }
  }

  return res.status(200).json({
    reply: "I am having trouble reaching the inference server at this moment. You can reach Ayush directly at ayushchatterjee.edu@gmail.com.",
  });
}
