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
      text: "Hey! I'm an AI assistant for Ayush's portfolio. You can ask me about his work experience, or ask random product management, business strategy, and consulting questions.",
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

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    soundManager.playClick();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      soundManager.playSuccess();
    }, 450);
  };

  const handleClear = () => {
    soundManager.playClick();
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: "Chat cleared. Ask me about Ayush's background, or ask any product management, business strategy, or consulting question.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-background-card border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-medium text-base text-white tracking-wide">
                  Portfolio &amp; Strategy AI
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-sans bg-accent/10 text-accent border border-accent/30">
                  Interactive
                </span>
              </div>
              <p className="text-xs font-sans text-slate-400">
                Ask about Ayush or ask business, PM &amp; consulting questions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              onMouseEnter={() => soundManager.playHover()}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-200 text-xs transition-colors"
              title="Clear Memory"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                soundManager.playModalClose();
                onClose();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 font-sans text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-accent/15 border border-accent/40 text-white rounded-tr-sm'
                    : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="font-sans text-[11px] uppercase font-medium tracking-wide text-slate-400">
                    {msg.sender === 'user' ? 'Visitor' : 'AI Assistant'}
                  </span>
                  <span className="font-sans text-[10px] text-slate-500">{msg.timestamp}</span>
                </div>
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start items-center text-slate-400 text-xs font-sans">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Bot className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-5 py-2 border-t border-white/5 bg-black/20 flex flex-wrap gap-2">
          {INITIAL_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSend(sug)}
              onMouseEnter={() => soundManager.playHover()}
              className="text-xs font-sans px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t border-white/10 bg-white/5 flex items-center gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ayush or ask any business/PM/consulting question..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors font-sans"
            autoFocus
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-accent text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent-hover transition-all flex items-center justify-center shadow-accent"
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

function generateAIResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. Market Sizing (TAM / SAM / SOM)
  if (q.includes('tam') || q.includes('sam') || q.includes('som') || q.includes('market size') || q.includes('sizing') || q.includes('estimate market')) {
    return "To size a market, use a bottom-up approach instead of relying on top-down industry reports:\n\n" +
      "1. Define the unit of consumption (e.g. Number of target businesses or target households in a geography).\n" +
      "2. Calculate TAM (Total Addressable Market) = Total potential buyers × Average annual spend per buyer.\n" +
      "3. Filter for SAM (Serviceable Addressable Market) = TAM filtered by your actual product constraints (e.g. smartphone owners, internet access, price segment).\n" +
      "4. Determine SOM (Serviceable Obtainable Market) = Target market share achievable within a 2-3 year operating horizon based on sales capacity and distribution channels.";
  }

  // 2. RICE & Feature Prioritization
  if (q.includes('rice') || q.includes('prioritization') || q.includes('prioritize') || q.includes('feature scoring') || q.includes('kano') || q.includes('moscow')) {
    return "The RICE framework scores candidate features to resolve roadmap debates objectively:\n\n" +
      "• Reach: Number of users impacted over a given period (e.g. 10,000 active users/month).\n" +
      "• Impact: Value delivered per user (0.25 = minimal, 1 = medium, 2 = high, 3 = massive).\n" +
      "• Confidence: Percentage reflecting data backing your estimate (50% = low gut feel, 80% = qualitative user feedback, 100% = quantitative A/B test data).\n" +
      "• Effort: Person-weeks or sprint points required across design, engineering, and QA.\n\n" +
      "Formula: Score = (Reach × Impact × Confidence) / Effort. It prevents high-effort pet projects with low reach from crowding out high-confidence quick wins.";
  }

  // 3. D2C Cohort Retention & Replenishment
  if (q.includes('retention') || q.includes('cohort') || q.includes('repurchase') || q.includes('churn') || q.includes('repeat order')) {
    return "In D2C e-commerce, repeat order drop-off is usually a timing and friction issue rather than product quality:\n\n" +
      "1. Customer Replenishment Cycle: A 50ml bottle typically lasts 42 to 48 days with daily use. Reaching out on day 14 is too early; waiting until day 60 is too late because the customer already bought a replacement locally.\n" +
      "2. Friction Reduction: Instead of driving repeat buyers through a web checkout with OTP logins and address forms, trigger a WhatsApp or SMS notification on day 40 with a pre-filled one-click payment link.\n" +
      "3. Cohort Tracking: Group customers by acquisition month and track Month 1 to Month 6 repurchase curves. If the Month 1 drop exceeds 70%, focus on onboarding and usage nudges before increasing acquisition ad spend.";
  }

  // 4. E-Commerce Checkout Funnel & COD / RTO
  if (q.includes('cod') || q.includes('rto') || q.includes('checkout') || q.includes('funnel') || q.includes('conversion rate') || q.includes('drop-off')) {
    return "For Indian e-commerce, Cash-on-Delivery (COD) orders often suffer high Return-to-Origin (RTO) rates (20-35%). Here is how to diagnose and fix the funnel:\n\n" +
      "1. Checkout Step Diagnostics: Measure drop-offs at PDP -> Add to Cart -> Address Entry -> Payment. Each added input field cuts conversion by 8-12%.\n" +
      "2. RTO Reduction Tactics:\n" +
      "   • Offer instant 5-10% discounts for UPI/prepaid payments to shift COD share.\n" +
      "   • Run automated WhatsApp address confirmation and PIN code verification before dispatching COD parcels.\n" +
      "   • Restrict COD availability for phone numbers or pincodes with high historical return rates.";
  }

  // 5. Consulting Case Structure & Profitability Trees
  if (q.includes('profitability') || q.includes('profit') || q.includes('consulting framework') || q.includes('case interview') || q.includes('cost tree') || q.includes('revenue tree')) {
    return "When diagnosing a business profitability decline, break the problem into a structured tree:\n\n" +
      "Profit = Revenue - Total Costs\n\n" +
      "1. Revenue Branch (Price × Volume):\n" +
      "   • Volume: Is the drop market-wide (macro/competitor) or company-specific? Break down by product lines, geography, and sales channels.\n" +
      "   • Price: Changes in average selling price (ASP), discounts, product mix shifts, or exchange rates.\n\n" +
      "2. Cost Branch (Fixed + Variable):\n" +
      "   • Variable Costs: Raw materials, packaging, logistics, shipping per order, payment gateway fees.\n" +
      "   • Fixed Costs: Warehousing leases, headcounts, marketing overhead, IT infrastructure.\n\n" +
      "Always isolate the single biggest leakage before proposing solutions.";
  }

  // 6. Go-To-Market (GTM) Strategy & International Expansion
  if (q.includes('gtm') || q.includes('go to market') || q.includes('market entry') || q.includes('expansion') || q.includes('channel strategy')) {
    return "A Go-To-Market (GTM) strategy requires aligning three core pillars:\n\n" +
      "1. Target Customer Profile: Sizing the segment with the highest willingness to pay and shortest sales cycle.\n" +
      "2. Distribution Model:\n" +
      "   • Direct Self-Serve: Ideal for low-ACV, high-volume products (product-led onboarding).\n" +
      "   • Channel / Partner Sales: Effective for entering new international regions where local regulatory compliance and reseller relationships speed up distribution.\n" +
      "   • Enterprise Direct Sales: Necessary for high-ACV products requiring multi-month procurement cycles.\n" +
      "3. Positioning & Proof: Establish clear competitive differentiation rather than competing on generic feature parity.";
  }

  // 7. PRD Drafting & User Stories
  if (q.includes('prd') || q.includes('product requirement') || q.includes('user story') || q.includes('spec')) {
    return "A strong Product Requirement Document (PRD) focuses on the problem and constraints rather than prescribing rigid UI:\n\n" +
      "• Problem Statement: The customer pain point with quantitative evidence (e.g. '34% of mobile users fail to complete password recovery').\n" +
      "• User Persona & Goals: Who experiences the issue and what their desired outcome is.\n" +
      "• Functional Requirements: Acceptance criteria formatted as 'As a [user], I want to [action] so that [benefit]'.\n" +
      "• Out of Scope: Explicitly defining what will NOT be built in this sprint to prevent scope creep.\n" +
      "• Success Metrics: Input metric (e.g. checkout step completion time) and primary outcome metric.";
  }

  // 8. Unit Economics (CAC, LTV, Payback)
  if (q.includes('cac') || q.includes('ltv') || q.includes('unit economics') || q.includes('payback') || q.includes('nrr')) {
    return "Key unit economics metrics for digital and subscription businesses:\n\n" +
      "• Customer Acquisition Cost (CAC) = Total sales & marketing spend / Number of new customers acquired.\n" +
      "• Customer Lifetime Value (LTV) = (Average Order Value × Purchase Frequency × Gross Margin %) / Churn Rate.\n" +
      "• LTV:CAC Ratio: A healthy benchmark is 3:1 or higher. Below 2:1 indicates unsustainable marketing burn.\n" +
      "• Payback Period: The number of months required for a customer's gross margin contribution to pay back their acquisition cost (target < 12 months for SMB SaaS and D2C).";
  }

  // 9. Pricing Strategy
  if (q.includes('pricing') || q.includes('price elasticity') || q.includes('freemium') || q.includes('subscription model')) {
    return "Three standard approaches to product pricing:\n\n" +
      "1. Cost-Plus: Adds a markup percentage over unit production costs. Simple, but leaves money on the table.\n" +
      "2. Competitor-Based: Benchmarks against prevailing market alternatives. Useful for initial positioning in crowded segments.\n" +
      "3. Value-Based (Recommended): Prices the product according to the economic value delivered to the buyer (e.g. pricing software at 10-20% of the cost savings or revenue it generates for the client).\n\n" +
      "For SaaS, tier features based on usage metrics (seats, storage, API volume) so pricing scales naturally with customer growth.";
  }

  // 10. OnePlus & Innovist Work Experience
  if (q.includes('oneplus') || q.includes('qa') || q.includes('bug') || q.includes('defect') || q.includes('innovist')) {
    return "At OnePlus and Innovist, Ayush worked as a User Experience Analyst on mobile operating system usability and quality assurance. He tested 4 mobile OS builds, logged 20+ interface bugs with exact reproduction steps, and contributed to a 22% reduction in post-release defect recurrence.";
  }

  // 11. D2C Analytics Internship
  if (q.includes('d2c') || q.includes('analytics internship') || q.includes('power bi') || q.includes('skincare')) {
    return "During his Business Analytics and Strategy internship with a D2C skincare portfolio, Ayush built cohort retention models across 5 online storefronts. He identified root causes behind a 17% drop in repeat orders and automated weekly reporting workflows in Power BI, cutting report preparation time by 35%.";
  }

  // 12. Retail & Franchise Operations
  if (q.includes('franchise') || q.includes('retail') || q.includes('jewellery') || q.includes('inventory')) {
    return "During his practical business operations exposure in jewellery retail and franchise management, Ayush created standard operating procedures, store launch checklists, and stock intake audit processes for new outlet openings.";
  }

  // 13. MBA Education & Background
  if (q.includes('mba') || q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('bba')) {
    return "Ayush is an MBA candidate at Regional College of Management, Bhubaneswar, graduating in 2027 with a dual specialization in Information Technology and International Business. He previously earned his Bachelor of Business Administration (BBA) from the same institution in 2025.";
  }

  // 14. Target Roles & Hiring
  if (q.includes('hire') || q.includes('role') || q.includes('open') || q.includes('opportunity') || q.includes('intern') || q.includes('job')) {
    return "Ayush is actively open to full-time Product Manager, Associate Product Manager (APM), Product Analyst, and Strategy Consulting Analyst roles, as well as MBA summer internships. You can connect with him directly at ayushchatterjee.edu@gmail.com.";
  }

  // 15. Contact & Scheduling
  if (q.includes('schedule') || q.includes('intro') || q.includes('call') || q.includes('interview') || q.includes('email') || q.includes('contact')) {
    return "You can reach Ayush directly via email at ayushchatterjee.edu@gmail.com, connect on LinkedIn at linkedin.com/in/forbesayush, or use the contact form at the bottom of the page to request a 30-minute introductory conversation.";
  }

  // 16. General Bio
  if (q.includes('who') || q.includes('ayush') || q.includes('bio') || q.includes('about')) {
    return "Ayush Chatterjee is an MBA candidate (2027) with hands-on experience in product usability analysis, e-commerce retention modeling, and retail franchise operations. He focuses on data-backed product management, business analytics, and strategy consulting.";
  }

  // Default structured response for any other business question
  return `Regarding "${query}": A structured way to evaluate this is to define the primary business objective, identify the root friction points or cost drivers, and evaluate trade-offs based on customer willingness to pay and operational feasibility. Check out the case studies on this site or reach out to Ayush at ayushchatterjee.edu@gmail.com to discuss this further.`;
}
