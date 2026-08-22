import React, { useState, useRef } from 'react';
import { Terminal, ArrowDown, Bot, Mail, Linkedin, MapPin } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';
import { AnimatedCounter } from '../common/AnimatedCounter';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI, onOpenTerminal }) => {
  // Signature Interaction: Interactive 3D Perspective Tilt on portrait card
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <section className="relative min-h-[90dvh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Core Positioning & Concrete Proof */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Tag with gentle entrance */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-sans text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
            <span className="leading-tight">Targeting: Product Management (APM/PM), Product Analytics, Strategy Consulting</span>
          </div>

          {/* Kinetic Display Headline */}
          <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
            <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:100ms] fill-mode-backwards">
              Product &amp;
            </span>{' '}
            <br />
            <span className="italic text-accent inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:200ms] fill-mode-backwards">
              business strategy
            </span>{' '}
            <br />
            <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:300ms] fill-mode-backwards">
              backed by data.
            </span>
          </h1>

          {/* Core Subtitle with Alive Metric Counters */}
          <p className="max-w-xl text-sm sm:text-lg text-slate-300 font-sans leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:350ms] fill-mode-backwards">
            I'm <strong className="text-white font-medium">Ayush Chatterjee</strong>, an MBA candidate (2027) at Regional College of Management, Bhubaneswar. I cut post-release defect recurrence by <strong className="text-white font-medium"><AnimatedCounter value={22} suffix="%" /></strong> across <strong className="text-white font-medium"><AnimatedCounter value={4} /></strong> mobile OS builds, reduced weekly reporting time by <strong className="text-white font-medium"><AnimatedCounter value={35} suffix="%" /></strong> across <strong className="text-white font-medium"><AnimatedCounter value={5} /></strong> D2C storefronts, and built standardized retail launch playbooks.
          </p>

          {/* Direct Contact & Location Bar: 0 clicks needed */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-slate-300 py-1 animate-in fade-in duration-500 [animation-delay:400ms] fill-mode-backwards">
            <a
              href="mailto:ayushchatterjee.edu@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors min-h-[44px] py-1 break-all"
            >
              <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>ayushchatterjee.edu@gmail.com</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <a
              href="https://linkedin.com/in/ayushmba"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors min-h-[44px] py-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>linkedin.com/in/ayushmba</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-slate-400 min-h-[44px] py-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
              <span>Bhubaneswar &bull; Open to relocation</span>
            </span>
          </div>

          {/* Action Buttons: 44px+ touch targets */}
          <div className="flex flex-wrap items-center gap-3 pt-1 animate-in fade-in duration-500 [animation-delay:450ms] fill-mode-backwards">
            <a
              href="#projects"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              data-cursor-text="WORK"
              className="px-6 py-3 min-h-[44px] rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-accent hover:shadow-lg active:scale-95 group"
            >
              <span>Case studies</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => {
                soundManager.playModalOpen();
                onOpenAI();
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="ASK"
              className="px-5 py-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
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
              className="px-4 py-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
            >
              <Terminal className="w-4 h-4 text-slate-400" />
              <span>Terminal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Signature 3D Perspective Photo Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end animate-in fade-in slide-in-from-right-4 duration-600 [animation-delay:250ms] fill-mode-backwards">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
            className="w-full max-w-sm rounded-2xl bg-background-card border border-white/10 p-5 space-y-4 shadow-2xl relative overflow-hidden group cursor-pointer"
          >
            {/* Dynamic Ambient Light Sheen */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(224, 122, 95, 0.25) 0%, transparent 60%)`,
                opacity: tilt.opacity,
              }}
            />

            {/* Portrait */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                width={384}
                height={384}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Quick Context & Proof Points */}
            <div className="space-y-2 text-left pt-1">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-white font-medium">Ayush Chatterjee</span>
                <span className="text-xs text-accent font-sans font-medium">MBA &bull; IT &amp; IB</span>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
                Regional College of Management, Bhubaneswar (2025 to 2027). Hands-on exposure in mobile OS QA, D2C funnel retention modeling, and retail product strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

