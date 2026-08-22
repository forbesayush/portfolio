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
  'Tell me about AEGIS Swarm OS',
  'What is your WebGPU and 3D stack?',
  'What staff roles are you open to?',
  'How do I schedule a technical intro?',
];

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hey! I'm an AI assistant for Ayush's portfolio. Ask me anything about his work, projects, skills, or how to get in touch.",
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
    }, 650);
  };

  const handleClear = () => {
    soundManager.playClick();
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: 'Chat cleared. Ask me anything.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
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
                  Portfolio AI
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-sans bg-accent/10 text-accent border border-accent/30">
                  Beta
                </span>
              </div>
              <p className="text-xs font-sans text-slate-400">
                Ask me about Ayush's background
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
                    {msg.sender === 'user' ? 'Visitor' : 'AI'}
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
            placeholder="Ask about Ayush's MBA background, projects, skills..."
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

  if (q.includes('oneplus') || q.includes('qa') || q.includes('bug') || q.includes('defect')) {
    return "At OnePlus and Innovist, Ayush evaluated 4 OS builds and logged root causes for 20+ interface bugs. His reports helped reduce post-release defect recurrence by 22%.";
  }

  if (q.includes('d2c') || q.includes('analytics') || q.includes('cohort') || q.includes('retention') || q.includes('power bi')) {
    return "During his analytics internship, Ayush built cohort retention models across 5 online storefronts. He automated reporting workflows in Power BI, cutting weekly report prep time by 35%.";
  }

  if (q.includes('mba') || q.includes('education') || q.includes('college') || q.includes('degree')) {
    return "Ayush is an MBA candidate at Regional College of Management, graduating in 2027. His dual specialization is Information Technology and International Business.";
  }

  if (q.includes('hire') || q.includes('role') || q.includes('open') || q.includes('opportunity') || q.includes('intern')) {
    return "Ayush is looking for full-time Product Manager, Associate Product Manager, and Consulting Analyst roles, as well as MBA internships. You can reach him at ayushchatterjee.edu@gmail.com.";
  }

  if (q.includes('schedule') || q.includes('intro') || q.includes('call') || q.includes('interview')) {
    return "You can use the contact form at the bottom of the page or email ayushchatterjee.edu@gmail.com directly to schedule a conversation.";
  }

  if (q.includes('skill') || q.includes('tool') || q.includes('framework') || q.includes('rice') || q.includes('prd')) {
    return "Ayush works with PRDs, user stories, RICE feature scoring, and QA bug triage. For analytics, he uses Power BI, Excel cohort modeling, Google Analytics, and SQL basics.";
  }

  if (q.includes('who') || q.includes('ayush') || q.includes('bio') || q.includes('about')) {
    return "Ayush Chatterjee is an MBA candidate with hands-on experience in product usability analysis, e-commerce retention modeling, and retail operations.";
  }

  return `Thanks for asking about "${query}". Ayush is an MBA candidate focused on product management, business analytics, and strategy. Check the case studies above or use the contact form to reach him.`;
}
