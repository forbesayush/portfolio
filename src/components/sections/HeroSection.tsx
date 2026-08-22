import React from 'react';
import { Terminal, ArrowDown, Bot, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI, onOpenTerminal }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Core Positioning & Concrete Proof */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-sans text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Targeting: Product Management (APM/PM), Business Analytics, Strategy Consulting</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-white leading-[1.05]">
            Product &amp; <br />
            <span className="italic text-accent">business strategy</span> <br />
            backed by data.
          </h1>

          {/* Core Subtitle with concrete proof */}
          <p className="max-w-xl text-base sm:text-lg text-slate-300 font-sans leading-relaxed font-normal">
            I'm <strong className="text-white font-medium">Ayush Chatterjee</strong>, an MBA candidate (2027) at Regional College of Management, Bhubaneswar. I cut post-release defect recurrence by 22% across 4 mobile OS builds, reduced weekly reporting time by 35% across 5 D2C storefronts, and built standardized retail launch playbooks.
          </p>

          {/* Direct Contact & Location Bar: 0 clicks needed */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-slate-300 py-1">
            <a
              href="mailto:ayushchatterjee.edu@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>ayushchatterjee.edu@gmail.com</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <a
              href="https://linkedin.com/in/ayushmba"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent" />
              <span>linkedin.com/in/ayushmba</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Bhubaneswar &bull; Open to relocation</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              data-cursor-text="WORK"
              className="px-6 py-3 rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center gap-2 shadow-accent"
            >
              <span>Case studies</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundManager.playModalOpen();
                onOpenAI();
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="ASK"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-accent" />
              <span>Ask AVA</span>
            </button>

            <button
              onClick={() => {
                soundManager.playModalOpen();
                onOpenTerminal();
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="CLI"
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-slate-400" />
              <span>Terminal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Portrait Photo & Summary Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-sm rounded-2xl bg-background-card border border-white/10 p-5 space-y-4 shadow-2xl">
            {/* Portrait */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Quick Context & Proof Points */}
            <div className="space-y-2 text-left pt-1">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-white font-medium">Ayush Chatterjee</span>
                <span className="text-xs text-accent font-sans font-medium">MBA &bull; IT &amp; IB</span>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Regional College of Management, Bhubaneswar (2025 to 2027). Hands-on exposure in mobile OS QA, D2C funnel retention modeling, and retail franchise operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

