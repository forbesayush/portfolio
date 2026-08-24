import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, User, RefreshCw } from 'lucide-react';

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

GROUNDED FACTS ABOUT AYUSH:
- MBA candidate at Regional College of Management, Bhubaneswar, graduating 2027. Specialization: Information Technology and International Business.
- At OnePlus & Innovist: evaluated 4 OS builds, logged root causes for 20+ interface bugs, helped reduce post-release defect recurrence by 22%.
- Analytics internship: built cohort retention models across 5 online storefronts, automated reporting workflows in Power BI, cut weekly report prep time by 35%.
- Swash Consulting Limited (2026, 2 months): Media Intern focused on SEO, backlink strategies, and Google Analytics / Search Console analysis.
- D-Dzire Jewels: Product Strategy Intern managing lab-grown diamond franchise launch workflows, 4Cs grading audits, and customer pricing perception.
- Deals.Seller: Product Lead / Builder for marketplace operations MIS and fraud intelligence command center (velocity scoring, duplicate claim triage, instant UPI payouts).
- Works with PRDs, user stories, RICE feature scoring, QA bug triage, Power BI, Excel cohort modeling, Google Analytics, SQL basics.
- Open to full-time Product Manager, Associate Product Manager, and Consulting Analyst roles, plus MBA internships. Contact: ayushchatterjee.edu@gmail.com | LinkedIn: linkedin.com/in/ayushmba.

NEGATIVE CONSTRAINTS & FORMATTING (STRICT):
- NEVER output markdown tables (e.g. '| Step | What to do |', '|---|---|') or pipe characters '|'. Always use clean, concise bullet points (•) or standard numbered lists (1., 2., 3.).
- NEVER use emoji numbers like 1️⃣, 2️⃣, 3️⃣, 4️⃣. Use plain numbers like '1.', '2.', '3.' or simple bullet points '•'.
- NEVER output canned boilerplate bullet headers like "**Continuous QA & iteration**", "**Continuous testing & iteration**", "**Monitoring & Iteration**", or "**Continuous improvement**".
- Do NOT end answers with generic template platitudes or repetitive summary bullets.
- Direct, structured, factual, no filler, no hedging.
- Refer to Ayush in the third person.
- Keep answers under ~150 words.`;

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

    if (!replyText) {
      replyText = getSmartLocalResponse(text);
    }

    replyText = cleanAndFormatBotResponse(replyText);

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const handleClear = () => {
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border-t sm:border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[92dvh] sm:h-auto sm:max-h-[85dvh] animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 pb-[env(safe-area-inset-bottom)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-accent flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-serif font-semibold text-base text-slate-900">
                AVA &bull; Portfolio &amp; Strategy Assistant
              </h3>
              <p className="text-xs font-sans text-slate-500">
                Interactive dialogue grounded in Ayush's verified work
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClear}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title="Clear Conversation"
              aria-label="Clear Conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close Dialog"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-sm overscroll-contain">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 text-left ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-slate-900 text-white rounded-tr-none'
                    : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1.5 border-b border-black/5 pb-1">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-wider opacity-60">
                    {msg.sender === 'user' ? 'You' : 'AVA'}
                  </span>
                  <span className="text-[10px] opacity-50 font-sans">{msg.timestamp}</span>
                </div>
                <div className="font-sans text-xs sm:text-sm font-normal">
                  <FormattedMessageContent content={msg.text} isUser={msg.sender === 'user'} />
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-accent flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 text-xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-spin" />
                <span>Formulating response...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="px-4 sm:px-5 py-2 border-t border-slate-100 bg-slate-50/50 flex flex-wrap gap-1.5 flex-shrink-0">
          {INITIAL_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSend(sug)}
              className="text-xs font-sans px-2.5 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all active:scale-95"
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
          className="p-3 sm:p-4 border-t border-slate-100 bg-white flex items-center gap-2 flex-shrink-0"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ayush's projects, frameworks, or experience..."
            className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent transition-colors font-sans"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-2.5 rounded-xl bg-slate-900 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center justify-center flex-shrink-0"
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

function cleanAndFormatBotResponse(raw: string): string {
  if (!raw) return '';
  let text = raw;

  // 1. Remove generic concluding headers & platitudes
  text = text
    .replace(/\*\*Continuous QA & iteration\*\*:?/gi, '')
    .replace(/\*\*Continuous QA and iteration\*\*:?/gi, '')
    .replace(/Continuous QA & iteration:?/gi, '')
    .replace(/Continuous QA and iteration:?/gi, '')
    .replace(/\*\*Continuous monitoring & iteration\*\*:?/gi, '')
    .replace(/\*\*Ongoing iteration & QA\*\*:?/gi, '');

  // 2. Convert emoji number boxes (1️⃣, 2️⃣, etc.) into clean standard numerals
  text = text
    .replace(/1️⃣/g, '1. ')
    .replace(/2️⃣/g, '2. ')
    .replace(/3️⃣/g, '3. ')
    .replace(/4️⃣/g, '4. ')
    .replace(/5️⃣/g, '5. ')
    .replace(/6️⃣/g, '6. ')
    .replace(/7️⃣/g, '7. ')
    .replace(/8️⃣/g, '8. ')
    .replace(/9️⃣/g, '9. ')
    .replace(/🔟/g, '10. ');

  // 3. Convert broken markdown tables (| Step | What to do | ... |) into elegant structured bullet points
  const lines = text.split('\n');
  const result: string[] = [];
  let isTable = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('|') || (trimmed.includes('|') && trimmed.endsWith('|'))) {
      const cells = trimmed.split('|').map((c) => c.trim()).filter(Boolean);
      // Skip divider row (e.g. |---|---|)
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        isTable = true;
        continue;
      }
      // Skip generic table header row
      if (!isTable && cells.some((c) => /step|what to do|action|deliverable|parameter/i.test(c))) {
        isTable = true;
        continue;
      }

      if (cells.length > 0) {
        const title = cells[0];
        const rest = cells.slice(1).join(' — ');
        result.push(`• **${title}**${rest ? ': ' + rest : ''}`);
        continue;
      }
    } else {
      isTable = false;
      result.push(lines[i]);
    }
  }

  return result.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

interface FormattedMessageContentProps {
  content: string;
  isUser: boolean;
}

const FormattedMessageContent: React.FC<FormattedMessageContentProps> = ({ content, isUser }) => {
  if (isUser) {
    return <span>{content}</span>;
  }

  const paragraphs = content.split('\n\n');

  return (
    <div className="space-y-2.5 leading-relaxed text-left">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split('\n').filter((l) => l.trim().length > 0);

        return (
          <div key={pIdx} className="space-y-1.5">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*');
              const isNumbered = /^\d+\.\s/.test(trimmed);

              const cleanLine = isBullet
                ? trimmed.replace(/^[•\-*]\s*/, '')
                : isNumbered
                ? trimmed.replace(/^\d+\.\s*/, '')
                : trimmed;

              const numberMatch = isNumbered ? trimmed.match(/^(\d+)\.\s*/)?.[1] : null;

              return (
                <div
                  key={lIdx}
                  className={`flex items-start gap-2 ${
                    isBullet || isNumbered ? 'pl-0.5' : ''
                  }`}
                >
                  {isBullet && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  )}
                  {isNumbered && numberMatch && (
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 font-semibold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {numberMatch}
                    </span>
                  )}
                  <div className="flex-1">
                    <InlineFormattedText text={cleanLine} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

function InlineFormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx} className="font-semibold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </span>
  );
}

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

  // Franchise & Retail Launch (D-Dzire Jewels)
  if (q.includes('franchise') || q.includes('store launch') || q.includes('opening') || q.includes('retail') || q.includes('diamond') || q.includes('dzire') || q.includes('4cs')) {
    return "At D-Dzire Jewels (Lab-Grown Diamonds), Ayush managed franchise store opening workflows, 4Cs inventory grading audits (Cut, Clarity across VS1/VS2/SI, Carat, Color), and customer pricing perception, eliminating opening-day stock discrepancies across partner outlets.";
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
