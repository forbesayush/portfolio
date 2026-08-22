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
      text: "Hello! I am NEURAL CORE, Ayush Chatterjee's synthetic assistant. I know all about Ayush's architectural designs, WebGPU compute pipelines, distributed systems work, and current availability. What would you like to know?",
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
        text: 'Memory re-initialized. Ready for your next question.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-background-secondary/95 border border-cyber-cyan/30 rounded-2xl shadow-spatial overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-surface-glass">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/50 flex items-center justify-center text-cyber-cyan shadow-glow-cyan/20">
              <Bot className="w-4 h-4" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-sm text-white tracking-wide">
                  NEURAL CORE
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40">
                  AI COMPANION
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Direct assistant for Ayush Chatterjee portfolio
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
              className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-slate-400 hover:text-red-400 text-xs transition-colors"
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
                <div className="w-7 h-7 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyber-cyan/15 border border-cyber-cyan/40 text-white rounded-tr-sm'
                    : 'bg-surface-glass border border-white/10 text-slate-200 rounded-tl-sm backdrop-blur-md'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {msg.sender === 'user' ? 'VISITOR' : 'NEURAL CORE'}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{msg.timestamp}</span>
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
            <div className="flex gap-3 justify-start">
              <div className="w-7 h-7 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan flex-shrink-0">
                <Bot className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="bg-surface-glass border border-white/10 rounded-2xl p-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce delay-200" />
                <span className="font-mono text-xs text-cyber-cyan ml-2">TYPING...</span>
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
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyber-cyan/15 border border-white/10 hover:border-cyber-cyan/40 text-slate-300 hover:text-cyber-cyan transition-all"
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
          className="p-4 border-t border-white/10 bg-surface-glass flex items-center gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={() => soundManager.playTypeKey()}
            placeholder="Ask anything about systems, graphics, projects, or background..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors font-sans"
            autoFocus
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-cyber-cyan text-black font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyber-neon transition-all flex items-center justify-center shadow-glow-cyan/20"
            aria-label="Transmit Prompt"
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

  if (q.includes('aegis') || q.includes('swarm') || q.includes('agent')) {
    return "AEGIS is Ayush's autonomous swarm operating system. It coordinates distributed language model agents using Rust and WebAssembly with lock-free ring buffers. Key highlights include:\n• Byzantine Fault Tolerant consensus with sub-2.4ms latency\n• Browser execution using WebWorkers and WebRTC data meshes\n• 45,000 ops/s verified benchmark throughput.";
  }

  if (q.includes('webgpu') || q.includes('nerf') || q.includes('3d') || q.includes('graphics')) {
    return "Ayush specializes in spatial computing and WebGPU graphics. His Chronos NeRF engine achieves 120 FPS 6DoF neural volumetric rendering straight in the browser. He writes custom WGSL compute shaders, 3D Gaussian splatting pipelines, and particle physics engines.";
  }

  if (q.includes('hire') || q.includes('role') || q.includes('open') || q.includes('opportunity') || q.includes('salary')) {
    return "Ayush is currently considering Staff and Principal Architect roles and founding engineer positions centered on autonomous agent infrastructure, spatial computing, and distributed core systems. You can connect through the contact form below or email ayushchatterjee.edu@gmail.com directly.";
  }

  if (q.includes('schedule') || q.includes('intro') || q.includes('call') || q.includes('interview')) {
    return "You can book a 30-minute technical intro call. Jump to the Contact section at the bottom of the page or send a message with your team details. You will get a direct booking link.";
  }

  if (q.includes('skill') || q.includes('tech stack') || q.includes('rust') || q.includes('c++')) {
    return "Core Technical Mastery:\n• Languages: Rust, C++23, TypeScript, WGSL, GLSL, Go, Python\n• AI and Agents: Multi-Agent Swarms, AWQ Quantization, HNSW Vector Clustering, CUDA, Triton\n• Graphics: WebGPU, Three.js, React Three Fiber, 3D Gaussian Splats\n• Systems: Lock-Free Queues, DPDK Kernel Bypass, Raft Consensus, Post-Quantum Cryptography.";
  }

  if (q.includes('who') || q.includes('ayush') || q.includes('bio')) {
    return "Ayush Chatterjee is a staff AI systems engineer and spatial architect with over 8 years of high-performance systems experience. He has built distributed systems saving millions in compute costs, won international graphics awards, and pushed the boundaries of edge AI and volumetric WebGPU rendering.";
  }

  return `I have recorded your question about "${query}". Ayush focuses on building high-performance software: sub-millisecond distributed architectures, WebGPU 3D spatial interfaces, and resilient autonomous swarms. Feel free to inspect the project blueprints or reach out directly through the contact form.`;
}
