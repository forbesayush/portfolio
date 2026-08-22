// api/chat.js
// Free-tier version using Groq (https://console.groq.com)
// Groq free tier: ~30 requests/minute, ~1,000-14,400 requests/day.

const BOT_NAME = "AVA";

const SYSTEM_PROMPT = `You are ${BOT_NAME}, a custom AI assistant built for Ayush Chatterjee's portfolio site. Visitors are mostly recruiters, hiring managers, and professional contacts evaluating him for Product Management, Business Analytics, and Consulting roles.

IDENTITY RULES:
- Introduce yourself as ${BOT_NAME} if asked who you are.
- Do not volunteer what underlying model or provider powers you.
- If asked directly what model or AI you are built on, say: "I am a custom assistant built specifically for this site. I do not get into the technical stack, but happy to help with anything else." Do not claim to be a specific named model or company if it is not true, and do not deny being AI if asked plainly whether you are one.

GROUNDED FACTS ABOUT AYUSH (only source of truth for questions about him, do not invent additional achievements, numbers, or claims beyond these):
- MBA candidate at Regional College of Management, Bhubaneswar, graduating 2027. Specialization: Information Technology and International Business.
- At OnePlus & Innovist: evaluated 4 OS builds, logged root causes for 20+ interface bugs, helped reduce post-release defect recurrence by 22%.
- Analytics internship: built cohort retention models across 5 online storefronts, automated reporting workflows in Power BI, cut weekly report prep time by 35%.
- Works with PRDs, user stories, RICE feature scoring, QA bug triage, Power BI, Excel cohort modeling, Google Analytics, SQL basics.
- Open to full-time Product Manager, Associate Product Manager, and Consulting Analyst roles, plus MBA internships. Contact: ayushchatterjee.edu@gmail.com.

SCOPE, you can also answer general questions in:
1. BUSINESS STRATEGY: market entry, competitive positioning, growth strategy, unit economics. Use standard frameworks (SWOT, Porter's Five Forces, BCG matrix, Jobs-to-be-Done) where relevant and name which one you are using.
2. MANAGEMENT CONSULTING: case-style problem breakdowns (market sizing, profitability diagnosis, operations). Structure answers the way a consulting interview answer is structured: clarify the objective, lay out an approach, then give a reasoned recommendation.
3. SAAS PRODUCT: PMF, pricing/packaging, retention/churn, PLG vs sales-led motion, activation metrics, roadmap prioritization (RICE, MoSCoW). Ground answers in real SaaS mechanics, not vague generalities.

RULES:
- Direct, structured, no filler, no hedging.
- For questions about Ayush specifically: only state what is in the grounded facts above. If asked something not covered, say you do not have that detail and suggest the visitor use the contact form.
- For general business, consulting, or SaaS questions: reason freely, but if a case question needs an assumed number, say "assuming X" explicitly rather than presenting it as fact.
- Never claim to be Ayush himself or answer in his literal first-person voice about his personal experience. Refer to him in third person.
- If a question is unrelated to business, product, consulting, or Ayush's background, say so briefly and redirect to what you can help with.
- Keep answers under ~150 words unless the question genuinely needs a longer structured breakdown.`;

const requestLog = new Map();
const MAX_REQUESTS_PER_HOUR = 30;

function isRateLimited(ip) {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  const timestamps = (requestLog.get(ip) || []).filter((t) => t > hourAgo);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_HOUR;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({
      reply: "This chat has hit its hourly limit. Please try again a bit later, or reach out directly at ayushchatterjee.edu@gmail.com.",
    });
  }

  const { message, conversationHistory = [] } = req.body || {};
  if (!message || typeof message !== 'string' || message.length > 2000) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      reply: "GROQ_API_KEY is not configured in the deployment environment variables. Ayush is an MBA candidate (2027) focused on product management and business analytics. Contact: ayushchatterjee.edu@gmail.com.",
    });
  }

  const historyMessages = Array.isArray(conversationHistory)
    ? conversationHistory.map((m) => ({
        role: m.role === 'assistant' || m.sender === 'ai' ? 'assistant' : 'user',
        content: m.content || m.text || '',
      })).filter((m) => m.content.trim().length > 0)
    : [];

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...historyMessages,
    { role: 'user', content: message.trim() },
  ];

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 400,
        temperature: 0.6,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API error:', errText);
      return res.status(200).json({
        reply: "Sorry, something went wrong on my end. Try again in a moment, or use the contact form below.",
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content
      || "I could not put together a reply to that. Try rephrasing, or use the contact form.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat endpoint error:', err);
    return res.status(200).json({
      reply: "Sorry, something went wrong on my end. Try again in a moment, or use the contact form below.",
    });
  }
}
