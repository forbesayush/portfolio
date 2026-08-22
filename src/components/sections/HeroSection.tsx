import React from 'react';
import { Terminal, ArrowDown, Bot } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI, onOpenTerminal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Editorial Serif & Humanist Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Subtle Context Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-sans text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>MBA Candidate (2027), Regional College of Management</span>
          </div>

          {/* Main Headline in Distinctive Serif */}
          <h1 className="font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white leading-[1.05]">
            Product &amp; <br />
            <span className="italic text-accent">business strategy</span> <br />
            for growth.
          </h1>

          {/* Subtitle in Clean Humanist Sans */}
          <p className="max-w-xl text-lg sm:text-xl text-slate-300 font-sans leading-relaxed font-normal">
            I'm <strong className="text-white font-medium">Ayush Chatterjee</strong>. I evaluate user friction, analyze retention funnels, and build product roadmaps backed by data.
          </p>

          {/* Action Buttons: 1 deliberate accent moment */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              data-cursor-text="WORK"
              className="px-6 py-3 rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center gap-2 shadow-accent"
            >
              <span>View Case Studies</span>
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
              <Bot className="w-4 h-4 text-slate-400" />
              <span>Ask AI</span>
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

        {/* Right Column: Authentic Personal Photo & Key Focus Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-sm rounded-2xl bg-background-card border border-white/10 p-5 space-y-5 shadow-2xl">
            {/* Authentic Portrait Photo */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Quick Context */}
            <div className="space-y-2 text-left pt-1">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-white font-medium">Ayush Chatterjee</span>
                <span className="text-xs text-accent font-sans font-medium">MBA &bull; IT &amp; IB</span>
              </div>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Specializing in Information Technology &amp; International Business. Practical exposure across mobile QA, e-commerce retention, and retail operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
