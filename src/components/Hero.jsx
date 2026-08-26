import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, FileText, ShieldCheck, Sparkles, Wifi, CreditCard, Activity, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { personalInfo, heroTelemetry } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  const [cardRotateX, setCardRotateX] = useState(0);
  const [cardRotateY, setCardRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardRotateX(-y / 14);
    setCardRotateY(x / 14);
  };

  const handleMouseLeave = () => {
    setCardRotateX(0);
    setCardRotateY(0);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center py-16 sm:py-24 bg-[#07080B] overflow-hidden bg-fintech-grid">
      
      {/* Ambient background glow cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* Left Column: Positioning & Action Hub (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personalInfo.educationBadge}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
                <span>{personalInfo.focusBadge}</span>
              </div>
            </div>

            {/* Main Header */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5 font-medium">
                Product Management & Growth Architecture
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                {personalInfo.name}
              </h1>
            </div>

            {/* Subtitle & Gradient Tagline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-fintech tracking-tight uppercase">
              {personalInfo.title}
            </h2>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
              {personalInfo.supportingHeadline}
            </p>

            {/* Unit Economics Formula Badge */}
            <div className="p-4 rounded-2xl bg-[#0E1017] border border-white/[0.08] max-w-2xl text-xs font-mono">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                Core Growth Formula
              </div>
              <div className="flex flex-wrap items-center gap-2 text-slate-200 font-bold">
                <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400">CAC OPTIMIZATION</span>
                <span className="text-slate-500">+</span>
                <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">FUNNEL CRO</span>
                <span className="text-slate-500">+</span>
                <span className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">LTV LIFECYCLE</span>
                <span className="text-slate-500">=</span>
                <span className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">PROFITABLE SCALE</span>
              </div>
            </div>

            {/* CTAs Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl fintech-btn-primary font-mono text-xs font-bold tracking-wider uppercase"
              >
                <span>EXPLORE STAR PROJECTS</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl fintech-btn-secondary font-mono text-xs font-semibold tracking-wider uppercase"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl fintech-btn-secondary font-mono text-xs font-semibold tracking-wider uppercase"
                title="Download Verified Resume PDF"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>STATEMENT (CV)</span>
              </a>

              <button
                onClick={onOpenBrief}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all font-mono text-xs font-bold tracking-wider uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>1P AUDIT</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Interactive Titanium Virtual Membership Card (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="w-full max-w-md space-y-5">
              
              {/* 3D Tilt Titanium FinTech Card */}
              <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  perspective: 1000,
                }}
                className="w-full"
              >
                <motion.div
                  animate={{
                    rotateX: cardRotateX,
                    rotateY: cardRotateY,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full aspect-[1.586/1] rounded-3xl bg-titanium-card p-6 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  {/* Holographic foil sheen overlay */}
                  <div className="absolute inset-0 bg-holographic opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  {/* Card Top Row: Chip + Contactless NFC */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Gold EMV Microchip */}
                      <div className="w-11 h-9 rounded-lg card-chip p-1.5 flex flex-col justify-between">
                        <div className="w-full h-[1px] bg-black/40"></div>
                        <div className="w-full h-[1px] bg-black/40"></div>
                        <div className="w-full h-[1px] bg-black/40"></div>
                      </div>
                      <Wifi className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>BLACK TITANIUM</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Middle: Embossed Number */}
                  <div className="relative z-10 my-auto">
                    <div className="text-lg sm:text-xl font-mono tracking-[0.22em] text-white font-bold drop-shadow-md">
                      4532 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 2026
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                      PRODUCT & GROWTH PROTOCOL
                    </div>
                  </div>

                  {/* Card Bottom Row: Holder Name & Expiry */}
                  <div className="flex items-end justify-between relative z-10 pt-2">
                    <div>
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                        CARDHOLDER / STRATEGIST
                      </div>
                      <div className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-wider">
                        AYUSH CHATTERJEE
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                        VALID THRU
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-white">
                        2024 / 2026
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>

              {/* Live Telemetry Ticker Bento under Card */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {heroTelemetry.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-colors text-left"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                      <span className="truncate">{item.label}</span>
                    </div>
                    <div className="text-lg sm:text-xl font-display font-bold text-white flex items-baseline gap-2">
                      <span>{item.value}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
