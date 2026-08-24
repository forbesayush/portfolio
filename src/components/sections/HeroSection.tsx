import React, { useRef, useState } from 'react';
import { ArrowDown, Bot, Mail, Linkedin, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';

interface HeroSectionProps {
  onOpenAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: ((y - centerY) / centerY) * -5,
      y: ((x - centerX) / centerX) * 5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 text-left">
      {/* Top Bento Row: Headline & Executive Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
        {/* Main Headline & Positioning Card */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-sans font-medium text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Product Management (APM/PM) &amp; Strategy Roles</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif font-medium text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Turning product &amp; operational data into <span className="italic text-accent underline decoration-accent/30 underline-offset-4">scalable growth.</span>
            </h1>

            {/* Crisp Executive Bio */}
            <p className="max-w-2xl text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
              MBA Candidate (2027) at Regional College of Management, Bhubaneswar. Experienced in building operational fraud platforms, cutting mobile OS defect recurrence by <strong className="text-slate-900 font-semibold"><AnimatedCounter value={22} suffix="%" /></strong>, and automating D2C retention modeling to save <strong className="text-slate-900 font-semibold"><AnimatedCounter value={35} suffix="%" /></strong> in weekly reporting.
            </p>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenAI}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Bot className="w-4 h-4 text-accent" />
                <span>Ask AVA (AI Assistant)</span>
              </button>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-3 text-xs text-slate-500 font-sans">
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                className="flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">ayushchatterjee.edu@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-slate-300">&bull;</span>
              <a
                href="https://linkedin.com/in/ayushmba"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-accent" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Portrait & Persona Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
          className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4"
        >
          {/* Portrait Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60">
            <img
              src="/ayush-chatterjee.png"
              alt="Ayush Chatterjee"
              width={384}
              height={384}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Persona Details */}
          <div className="space-y-1 text-left">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-semibold text-lg text-slate-900">Ayush Chatterjee</h2>
              <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                MBA 2027
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans">
              Specialization in IT &amp; International Business &bull; RCM Bhubaneswar
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Bhubaneswar, India &bull; Open to Relocation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bento Metric Highlight Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
          <span className="text-[11px] sm:text-xs font-sans text-slate-500 uppercase tracking-wider block font-medium">
            Cashback MIS Repeat Rate
          </span>
          <div className="font-serif font-semibold text-2xl sm:text-3xl text-slate-900">
            <AnimatedCounter value={33} suffix="%" />
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-sans">
            Deals.Seller fraud &amp; ops platform
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
          <span className="text-[11px] sm:text-xs font-sans text-slate-500 uppercase tracking-wider block font-medium">
            Defect Recurrence Drop
          </span>
          <div className="font-serif font-semibold text-2xl sm:text-3xl text-emerald-600">
            -<AnimatedCounter value={22} suffix="%" />
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-sans">
            Across 4 mobile OS test builds
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
          <span className="text-[11px] sm:text-xs font-sans text-slate-500 uppercase tracking-wider block font-medium">
            Weekly Report Time Saved
          </span>
          <div className="font-serif font-semibold text-2xl sm:text-3xl text-slate-900">
            -<AnimatedCounter value={35} suffix="%" />
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-sans">
            Automated Power BI workflows
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
          <span className="text-[11px] sm:text-xs font-sans text-slate-500 uppercase tracking-wider block font-medium">
            Diamond Franchise Rollout
          </span>
          <div className="font-serif font-semibold text-2xl sm:text-3xl text-accent">
            0 Gap
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-sans">
            4Cs inventory intake SOPs
          </p>
        </div>
      </div>
    </section>
  );
};
