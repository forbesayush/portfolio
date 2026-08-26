import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Globe, Sparkles, ShieldCheck, Download, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  const techLogos = [
    { name: 'Shopify Plus', tag: 'D2C Storefronts' },
    { name: 'SQL', tag: 'Data Telemetry' },
    { name: 'Power BI', tag: 'MIS Dashboards' },
    { name: 'Google Analytics 4', tag: 'Attribution' },
    { name: 'Klaviyo', tag: 'Lifecycle CRM' },
    { name: 'Figma', tag: 'UX / Prototyping' },
    { name: 'Mixpanel', tag: 'Funnel Telemetry' },
    { name: 'Jira Agile', tag: 'Sprint Delivery' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#050608] bg-tg-grid bg-orange-mesh overflow-hidden text-center">
      
      {/* Central Ambient Orange Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Headline & Role (Template 2 & 1 Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-5 mb-10"
        >
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>{personalInfo.educationBadge}</span>
          </div>

          {/* Giant Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-black text-white tracking-tight uppercase leading-[1.08]">
            Product Manager & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Growth Strategist
            </span>
          </h1>

          {/* Narrative Body */}
          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-normal">
            Building high-velocity product engines that merge quantitative unit economics (CAC:LTV), data telemetry, and frictionless user psychology.
          </p>

          {/* Action Buttons (Template 2 Style) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full btn-orange-glow text-xs font-syne font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <Globe className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="px-7 py-3.5 rounded-full btn-dark-outline text-xs font-syne font-bold uppercase tracking-wider"
            >
              <span>ABOUT ME</span>
            </a>

            <button
              onClick={onOpenBrief}
              className="px-5 py-3.5 rounded-full btn-dark-outline text-xs font-mono font-semibold flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>1P BRIEF</span>
            </button>
          </div>
        </motion.div>

        {/* Tech Stack Bar (Template 2 Style: "Tecnologias que utilizo") */}
        <div className="max-w-4xl mx-auto mb-16 pt-4">
          <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-4 font-semibold">
            CORE PLATFORMS & ANALYTICS STACK
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techLogos.map((tech, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#0B0D12] border border-white/[0.08] hover:border-orange-500/40 transition-colors flex items-center gap-2 text-xs font-mono text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span className="font-semibold text-white">{tech.name}</span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">&bull; {tech.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Stats & Featured Portrait Card (Template 2 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-5xl mx-auto text-left">
          
          {/* Left Stats Column (7 Cols: 3 Bento Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="p-6 rounded-3xl bg-[#0B0D12] border border-white/[0.08] hover:border-orange-500/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-syne font-black text-orange-400 mb-1">
                  +35%
                </div>
                <div className="text-sm font-syne font-bold text-white uppercase tracking-tight">
                  MIS Acceleration
                </div>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-3">
                Accelerated multi-country D2C storefront telemetry & automated reporting speed.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="p-6 rounded-3xl bg-[#0B0D12] border border-white/[0.08] hover:border-orange-500/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-syne font-black text-orange-400 mb-1">
                  3.4x
                </div>
                <div className="text-sm font-syne font-bold text-white uppercase tracking-tight">
                  CAC : LTV Ratio
                </div>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-3">
                Scaled cross-border repeat conversion loops across 5 global markets.
              </p>
            </div>

            {/* Stat Card 3 (Span 2 Cols on mobile/tablet) */}
            <div className="sm:col-span-2 p-6 rounded-3xl bg-[#0B0D12] border border-white/[0.08] hover:border-orange-500/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-syne font-black text-emerald-400 mb-1">
                  -22%
                </div>
                <div className="text-sm font-syne font-bold text-white uppercase tracking-tight">
                  UX Friction Defect Cut
                </div>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-2">
                Conducted end-to-end heuristic evaluations for consumer tech task flows, increasing completion velocity by +15%.
              </p>
            </div>

          </div>

          {/* Right Featured Portrait Card (Template 2: "Vamos desenvolver juntos!" with Orange Arrow Button) */}
          <div className="lg:col-span-6 relative group">
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#0B0D12] border border-white/[0.12] hover:border-orange-500/40 transition-all flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              {/* Top Row: Title & Circular Orange Action Button */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white uppercase leading-tight">
                    Let's Build & Scale Together!
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    Elevating customer lifetime value, CRO, and unit economics to the next level.
                  </p>
                </div>

                {/* Circular Orange Arrow Button */}
                <a
                  href="#contact"
                  className="w-12 h-12 rounded-full btn-orange-glow flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-glow-orange"
                  aria-label="Connect and collaborate"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Portrait Image Container */}
              <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[4/3] bg-black/60">
                <img
                  src="/ayush-portrait.jpg"
                  alt="Ayush Chatterjee"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-xs font-syne font-bold text-white uppercase">
                      Ayush Chatterjee
                    </div>
                    <div className="text-[10px] font-mono text-orange-400">
                      MBA (IT & International Business) &bull; RCM
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
