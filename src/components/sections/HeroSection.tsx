import React from 'react';
import { Sparkles, Terminal, ArrowDown, Shield, Cpu, Zap, Bot } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI, onOpenTerminal }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 overflow-hidden">
      {/* Ambient background glow points */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyber-amber/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-glass border border-cyber-cyan/30 backdrop-blur-xl shadow-glow-cyan/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-neon" />
          </span>
          <span className="font-mono text-xs text-slate-300 tracking-wider">
            STATUS: ACTIVE (2027 INITIATIVES &amp; ARCHITECTURAL CONSULTING)
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] select-none">
            ENGINEERING <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan via-white to-cyber-neon">
              AUTONOMOUS CORES
            </span>
            <br />
            &amp; SPATIAL WORLDS.
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans leading-relaxed pt-2">
            I am <strong className="text-white font-medium">Ayush Chatterjee</strong>, a staff AI systems architect and distributed graphics engineer. I build low-latency autonomous swarms, real-time WebGPU shaders, and post-quantum zero-trust infrastructure.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            data-cursor-text="EXPLORE"
            className="group relative px-7 py-3.5 rounded-xl bg-cyber-cyan text-black font-mono font-bold text-sm tracking-wide shadow-glow-cyan hover:bg-cyber-neon transition-all duration-300 flex items-center gap-2"
          >
            <span>EXPLORE SYSTEMS</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenAI();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="SYNTHESIS"
            className="px-6 py-3.5 rounded-xl bg-surface-glass hover:bg-surface-glass-hover border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan font-mono text-sm tracking-wide transition-all duration-300 flex items-center gap-2 backdrop-blur-xl"
          >
            <Bot className="w-4 h-4 text-cyber-cyan" />
            <span>NEURAL CORE</span>
            <Sparkles className="w-3.5 h-3.5 text-cyber-neon" />
          </button>

          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenTerminal();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="TERMINAL"
            className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-amber/50 text-slate-300 hover:text-cyber-amber font-mono text-sm tracking-wide transition-all duration-300 flex items-center gap-2 backdrop-blur-xl"
          >
            <Terminal className="w-4 h-4" />
            <span>LAUNCH CLI</span>
          </button>
        </div>

        {/* Key Telemetry Bar */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-xl bg-surface-glass/60 border border-white/5 backdrop-blur-md hover:border-cyber-cyan/40 transition-colors">
            <div className="flex items-center gap-2 text-cyber-cyan mb-1">
              <Zap className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400">Swarm Consensus</span>
            </div>
            <div className="font-display font-bold text-2xl text-white">45,000</div>
            <div className="font-mono text-[11px] text-slate-400">ops/s edge throughput</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-glass/60 border border-white/5 backdrop-blur-md hover:border-cyber-amber/40 transition-colors">
            <div className="flex items-center gap-2 text-cyber-amber mb-1">
              <Cpu className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400">Graphics Render</span>
            </div>
            <div className="font-display font-bold text-2xl text-white">120 FPS</div>
            <div className="font-mono text-[11px] text-slate-400">WebGPU Neural NeRF</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-glass/60 border border-white/5 backdrop-blur-md hover:border-cyber-neon/40 transition-colors">
            <div className="flex items-center gap-2 text-cyber-neon mb-1">
              <Shield className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400">Security Layer</span>
            </div>
            <div className="font-display font-bold text-2xl text-white">NIST L5</div>
            <div className="font-mono text-[11px] text-slate-400">ML-KEM-1024 PQC Mesh</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-glass/60 border border-white/5 backdrop-blur-md hover:border-purple-400/40 transition-colors">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400">Experience</span>
            </div>
            <div className="font-display font-bold text-2xl text-white">8+ Years</div>
            <div className="font-mono text-[11px] text-slate-400">Distributed systems building</div>
          </div>
        </div>
      </div>
    </section>
  );
};
