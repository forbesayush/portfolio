import React from 'react';
import { Terminal, ArrowDown, Bot } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI, onOpenTerminal }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Asymmetric Bold Typography */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Status Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-slate-200">
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
            <span className="font-medium">Available for staff roles and advisory</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight text-white leading-[0.96]">
            I BUILD <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan via-white to-cyber-neon">
              SYSTEMS
            </span>
            <br />
            THAT SHIP.
          </h1>

          {/* Subtitle: Bigger, punchier font */}
          <p className="max-w-xl text-lg sm:text-xl md:text-2xl text-slate-300 font-sans leading-relaxed font-normal">
            I'm <strong className="text-white font-semibold">Ayush Chatterjee</strong>. I build distributed backends, WebGPU shaders, and agent infrastructure in Rust, C++, and TypeScript.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <a
              href="#projects"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              data-cursor-text="WORK"
              className="px-7 py-3.5 rounded-xl bg-cyber-cyan text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-cyber-neon transition-all duration-300 flex items-center gap-2 shadow-glow-cyan"
            >
              <span>See My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundManager.playModalOpen();
                onOpenAI();
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="ASK"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/50 text-slate-200 hover:text-cyber-cyan font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={() => {
                soundManager.playModalOpen();
                onOpenTerminal();
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="CLI"
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-amber/50 text-slate-300 hover:text-cyber-amber font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Asymmetric Technical Spec Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#090b10] border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs sm:text-sm text-cyber-cyan uppercase font-bold tracking-wider">
                CORE DISCIPLINES
              </span>
              <span className="font-mono text-xs text-slate-400 font-semibold">2025</span>
            </div>

            <div className="space-y-3.5 font-mono text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between">
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">Distributed Engines</span>
                  <span className="text-slate-400 text-xs">Rust, DPDK, lock-free queues</span>
                </div>
                <span className="text-cyber-cyan font-mono text-xs sm:text-sm font-bold">45K ops/s</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between">
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">WebGPU & 3D Shaders</span>
                  <span className="text-slate-400 text-xs">WGSL, Gaussian splats, Three.js</span>
                </div>
                <span className="text-cyber-amber font-mono text-xs sm:text-sm font-bold">120 FPS</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between">
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">Security & Cryptography</span>
                  <span className="text-slate-400 text-xs">Post-quantum ML-KEM, eBPF</span>
                </div>
                <span className="text-cyber-neon font-mono text-xs sm:text-sm font-bold">NIST L5</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs sm:text-sm text-slate-400">
              <span className="font-medium">Experience: 8+ years</span>
              <span className="text-slate-200 font-semibold">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
