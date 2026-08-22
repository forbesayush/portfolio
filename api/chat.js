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
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { message, conversationHistory } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "message" in request body.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Provide a helpful response if API key is not configured in deployment environment
    return res.status(200).json({
      reply: "ANTHROPIC_API_KEY is not configured in deployment settings yet. Ayush Chatterjee is an MBA candidate (2027) focused on product management, business analytics, and strategy consulting. You can reach him directly at ayushchatterjee.edu@gmail.com."
    });
  }

  const systemPrompt = `You are an AI assistant for Ayush Chatterjee's portfolio website.
Ayush Chatterjee is an MBA candidate (2027) at Regional College of Management, Bhubaneswar, specializing in Information Technology and International Business.
His background:
- Mobile OS Usability & QA Analyst at OnePlus / Innovist: Evaluated 4 OS builds, logged root causes for 20+ defects, contributed to a 22% reduction in post-release defect recurrence.
- E-Commerce Retention & Cohort Analytics: Built retention models across 5 online storefronts, modeled Day-45 replenishment timing, automated Power BI dashboards reducing weekly prep time by 35%.
- Retail Operations: Standardized store launch SOPs, inventory checklists, and stock intake audits.
- Target Roles: Full-time APM, Product Manager, Product Analyst, Strategy Consulting Analyst, and MBA internships.
- Email: ayushchatterjee.edu@gmail.com | LinkedIn: https://linkedin.com/in/forbesayush

You can also answer general product management (RICE, PRDs, metric trees), consulting case frameworks (market sizing TAM/SAM/SOM, profitability trees, GTM), and business analytics (cohort retention, CAC/LTV, COD/RTO reduction).

Tone guidelines:
- Be direct, conversational, and helpful.
- Keep answers concise (1 to 3 short paragraphs).
- Avoid corporate cliches, hyperbolic marketing claims, and filler phrases.
- Do not use em dashes or en dashes. Use commas or periods instead.`;

  try {
    // Format conversation history for Anthropic API
    const formattedMessages = [];

    if (Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg) => {
        if (msg.role === 'user' || msg.role === 'assistant') {
          if (msg.content && typeof msg.content === 'string') {
            formattedMessages.push({
              role: msg.role,
              content: msg.content.trim(),
            });
          }
        }
      });
    }

    // Add current user message
    formattedMessages.push({
      role: 'user',
      content: message.trim(),
    });

    // Ensure alternating roles starting with 'user'
    const cleanMessages = [];
    let lastRole = null;
    for (const m of formattedMessages) {
      if (m.role !== lastRole) {
        cleanMessages.push(m);
        lastRole = m.role;
      } else if (cleanMessages.length > 0) {
        cleanMessages[cleanMessages.length - 1].content += "\n" + m.content;
      }
    }

    if (cleanMessages.length === 0 || cleanMessages[0].role !== 'user') {
      cleanMessages.unshift({ role: 'user', content: message.trim() });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 600,
        system: systemPrompt,
        messages: cleanMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      return res.status(500).json({
        error: 'Failed to communicate with AI model.',
        reply: "I am having trouble connecting to the AI service right now. You can reach out to Ayush directly at ayushchatterjee.edu@gmail.com."
      });
    }

    const data = await response.json();
    const replyText = data.content?.[0]?.text || "Thanks for your question. Ayush is available at ayushchatterjee.edu@gmail.com.";

    return res.status(200).json({ reply: replyText });
  } catch (err) {
    console.error('Serverless function error:', err);
    return res.status(500).json({
      error: 'Internal server error',
      reply: "An unexpected error occurred. Please try again or contact Ayush at ayushchatterjee.edu@gmail.com."
    });
  }
}
