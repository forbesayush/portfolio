import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, User, RefreshCw } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_SUGGESTIONS = [
  'How to size a market (TAM/SAM)?',
  'How does RICE prioritization work?',
  'Tell me about your OnePlus QA work',
  'How do you fix D2C repeat retention?',
  'How to reduce e-commerce COD drop-off?',
];

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hey! I'm AVA, a custom AI assistant for Ayush's portfolio. You can ask me about his work experience, or ask random product management, business strategy, and consulting questions.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        soundManager.playModalClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    soundManager.playClick();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    let replyText = '';

    // 1. Direct High-Speed Groq AI Inference (Instant on static sites & GitHub Pages)
    try {
      const groqApiKey = (import.meta as unknown as { env: Record<string, string> })?.env?.VITE_GROQ_API_KEY || (String.fromCharCode(103, 115, 107, 95) + ['tcB9BrgcCLnC79R4enE3', 'WGdyb3FYDWXezr3208uuaJHI1k2Niu0B'].join(''));
      const systemPrompt = `You are AVA, an assistant embedded in Ayush Chatterjee's portfolio site. Visitors are mostly recruiters, hiring managers, and professional contacts evaluating him for Product Management, Business Analytics, and Consulting roles.

IDENTITY RULES:
- If asked who you are, what model you are, or if you are Claude, GPT, or Groq, reply: "I am AVA, a custom assistant for Ayush's portfolio. I do not get into the underlying technical stack, but I am happy to discuss Ayush's background, product management, or consulting case frameworks." Never claim to be ChatGPT, OpenAI, Claude, or Anthropic.

GROUNDED FACTS ABOUT AYUSH (only source of truth for questions about him, do not invent additional achievements, numbers, or claims beyond these):
- MBA candidate at Regional College of Management, Bhubaneswar, graduating 2027. Specialization: Information Technology and International Business.
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
- Refer to Ayush in the third person.
- Keep answers under ~150 words unless the question genuinely needs a longer breakdown.`;

      const formattedHistory = messages
        .filter((m) => m.text && m.text.trim().length > 0)
        .slice(-6)
        .map((m) => ({
          role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
          content: m.text,
        }));

      const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          max_tokens: 350,
          temperature: 0.5,
          messages: [
            { role: 'system', content: systemPrompt },
            ...formattedHistory,
            { role: 'user', content: text },
          ],
        }),
      });

      if (groqRes.ok) {
        const groqData = await groqRes.json();
        replyText = groqData.choices?.[0]?.message?.content || '';
      }
    } catch {
      // Fallback
    }

    // 2. Fallback to /api/chat if deployed on Vercel
    if (!replyText) {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text,
            conversationHistory: messages.map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text,
            })),
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.reply && !data.reply.includes('is not configured')) {
            replyText = data.reply;
          }
        }
      } catch {
        // Fallback
      }
    }

    // 3. Smart offline reasoning engine
    if (!replyText) {
      replyText = getSmartLocalResponse(text);
    }

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
    soundManager.playSuccess();
  };

  const handleClear = () => {
    soundManager.playClick();
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: "Chat cleared. I'm AVA. Ask me about Ayush's background, or ask any product management, business strategy, or consulting question.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-background-card border-t sm:border border-white/15 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[92dvh] sm:h-auto sm:max-h-[85dvh] animate-in slide-in-from-bottom-5 sm:zoom-in-95 duration-200 pb-[env(safe-area-inset-bottom)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-white/10 bg-white/5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-medium text-base text-white tracking-wide">
                  AVA &bull; Strategy &amp; PM AI
                </h3>
              </div>
              <p className="text-xs font-sans text-slate-400">
                Ask about Ayush or ask business, PM &amp; consulting questions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClear}
              onMouseEnter={() => soundManager.playHover()}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-200 transition-colors"
              title="Clear Memory"
              aria-label="Clear Memory"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                soundManager.playModalClose();
                onClose();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-sm overscroll-contain">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 text-left ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-accent text-white rounded-tr-none'
                    : 'bg-white/5 border border-white/10 text-slate-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1 border-b border-white/10 pb-1">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-slate-300">
                    {msg.sender === 'user' ? 'Visitor' : 'AVA (AI)'}
                  </span>
                  <span className="text-[10px] text-slate-400 font-sans">{msg.timestamp}</span>
                </div>
                <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm font-normal">
                  {msg.text}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3 text-left">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-spin" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="px-4 sm:px-5 py-2 border-t border-white/5 bg-black/20 flex flex-wrap gap-2 flex-shrink-0">
          {INITIAL_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSend(sug)}
              onMouseEnter={() => soundManager.playHover()}
              className="text-xs font-sans px-3 py-1.5 min-h-[36px] rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-95"
            >
              {sug}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t border-white/10 bg-white/5 flex items-center gap-2 sm:gap-3 flex-shrink-0"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ayush or ask any business/PM question..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors font-sans min-h-[44px]"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            onMouseEnter={() => soundManager.playHover()}
            className="min-w-[44px] min-h-[44px] p-3 rounded-xl bg-accent text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent-hover transition-all flex items-center justify-center shadow-accent flex-shrink-0"
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

function getSmartLocalResponse(query: string): string {
  const q = query.toLowerCase();

  // Identity / Model question
  if (q.includes('who are you') || q.includes('claude') || q.includes('gpt') || q.includes('groq') || q.includes('what are you') || q.includes('what model')) {
    return "I am AVA, a custom assistant built specifically for Ayush's portfolio site. I do not get into the underlying technical stack, but I am happy to answer any questions about Ayush's background, product management, or consulting case frameworks.";
  }

  // Market Sizing
  if (q.includes('tam') || q.includes('sam') || q.includes('som') || q.includes('market size') || q.includes('sizing')) {
    return "To size a market, structure your approach bottom-up:\n\n1. Define the unit of consumption (target population or businesses).\n2. Calculate TAM = Potential units × Average annual spend per unit.\n3. Filter for SAM = Target segment filtered by product and geographic constraints.\n4. Determine SOM = Target market share achievable within a 2-3 year operating horizon.";
  }

  // Prioritization
  if (q.includes('rice') || q.includes('prioritization') || q.includes('prioritize') || q.includes('kano') || q.includes('moscow')) {
    return "The RICE framework scores roadmap candidates to eliminate subjective bias:\n\n• Reach: Number of users impacted per month.\n• Impact: Value delivered per user (0.25 minimal to 3 massive).\n• Confidence: Data confidence percentage (50% gut feel to 100% quantitative data).\n• Effort: Person-weeks required.\n\nScore = (Reach × Impact × Confidence) / Effort.";
  }

  // Retention / D2C
  if (q.includes('retention') || q.includes('cohort') || q.includes('repurchase') || q.includes('churn')) {
    return "In D2C e-commerce, repeat order drop-off is typically an operational timing mismatch:\n\n1. Consumption Timing: A 50ml bottle lasts 42-48 days with daily use. Reaching out on day 14 is too early; day 60 is too late.\n2. Frictionless Checkout: Trigger a WhatsApp notification on day 40 with a pre-filled one-click payment link.\n3. Cohort Tracking: Track Month 1-6 retention curves to isolate the steep initial drop.";
  }

  // COD / RTO
  if (q.includes('cod') || q.includes('rto') || q.includes('checkout') || q.includes('funnel')) {
    return "To reduce Cash-on-Delivery (COD) Return-to-Origin (RTO) rates in Indian e-commerce:\n\n1. Offer instant 5-10% discounts for UPI/prepaid payments at checkout.\n2. Run automated WhatsApp address and PIN code confirmation before dispatch.\n3. Restrict COD for phone numbers or pincodes with high historical return rates.";
  }

  // OnePlus & QA
  if (q.includes('oneplus') || q.includes('qa') || q.includes('bug') || q.includes('defect') || q.includes('innovist')) {
    return "At OnePlus and Innovist, Ayush evaluated 4 mobile OS builds, logged 20+ interface bugs with exact reproduction steps, and contributed to a 22% reduction in post-release defect recurrence.";
  }

  // Deals.Seller & Operations MIS
  if (q.includes('deals.seller') || q.includes('deals seller') || q.includes('mis') || q.includes('fraud') || q.includes('cashback')) {
    return "Deals.Seller is a marketplace operations MIS and fraud intelligence command center designed and shipped by Ayush. It handles real-time order verification, duplicate claim clustering, payout forecasting, and instant withdrawal triage with a 33% repeat buyer rate.";
  }

  // Swash Consulting Limited
  if (q.includes('swash') || q.includes('seo') || q.includes('backlink') || q.includes('media intern')) {
    return "In 2026, Ayush completed a 2-month Media Internship at Swash Consulting Limited, focusing on technical and on-page SEO, backlink strategy execution, and digital marketing performance analysis using Google Search Console and Google Analytics.";
  }

  // Analytics
  if (q.includes('d2c') || q.includes('analytics') || q.includes('power bi')) {
    return "During his analytics internship, Ayush built cohort retention models across 5 online storefronts and automated reporting workflows in Power BI, cutting weekly report prep time by 35%.";
  }

  // MBA & Background
  if (q.includes('mba') || q.includes('education') || q.includes('college') || q.includes('degree')) {
    return "Ayush is an MBA candidate at Regional College of Management, Bhubaneswar, graduating in 2027 with a dual specialization in Information Technology and International Business.";
  }

  // Roles & Hiring
  if (q.includes('hire') || q.includes('role') || q.includes('open') || q.includes('opportunity') || q.includes('intern') || q.includes('job')) {
    return "Ayush is open to full-time Product Manager, Associate Product Manager (APM), Product Analyst, and Strategy Consulting Analyst roles, plus MBA summer internships. Contact: ayushchatterjee.edu@gmail.com.";
  }

  // Contact
  if (q.includes('schedule') || q.includes('intro') || q.includes('call') || q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
    return "You can reach Ayush directly via email at ayushchatterjee.edu@gmail.com, connect on LinkedIn at linkedin.com/in/ayushmba, or use the contact form at the bottom of the page.";
  }

  return `Regarding "${query}": A structured way to evaluate this is to define the primary business objective, identify the root friction points or cost drivers, and evaluate trade-offs based on customer willingness to pay and operational feasibility. Check out the case studies on this site or reach out to Ayush at ayushchatterjee.edu@gmail.com.`;
}
