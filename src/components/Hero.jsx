import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, FileText, Search, Sparkles, ShieldCheck, Activity, Terminal, CheckCircle2, Layers, Zap } from 'lucide-react';
import { personalInfo, heroTelemetry } from '../data/portfolioData';

export default function Hero({ onOpenBrief, onOpenSpotlight }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center py-12 sm:py-20 bg-[#08090E] app-mesh-bg app-grid-lines overflow-hidden">
      
      {/* Ambient background glow cones */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main App Window Frame Container */}
        <div className="p-6 sm:p-10 rounded-3xl glass-window shadow-app-window">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center text-left">
            
            {/* Left Column: Executive Bio & Interactive Actions (7 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Top Mode Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{personalInfo.educationBadge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
                  <span>{personalInfo.focusBadge}</span>
                </div>
              </div>

              {/* Title & Name */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Executive Product & Growth Studio</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                  {personalInfo.name}
                </h1>
              </div>

              {/* Subtitle with Gradient */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-app tracking-tight uppercase">
                {personalInfo.title}
              </h2>

              {/* Narrative Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
                {personalInfo.supportingHeadline}
              </p>

              {/* Core Operating Formula Card */}
              <div className="p-4 rounded-2xl bg-[#090B12] border border-white/[0.08] max-w-2xl text-xs font-mono">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  SYSTEM CORE: DEFECT-FREE GROWTH ENGINE
                </div>
                <div className="flex flex-wrap items-center gap-2 text-slate-200 font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">PRODUCT MANAGEMENT</span>
                  <span className="text-slate-600">+</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">UNIT ECONOMICS (CAC:LTV)</span>
                  <span className="text-slate-600">+</span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300">CRO & FRICTION CUT</span>
                  <span className="text-slate-600">=</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">PROFITABLE SCALE</span>
                </div>
              </div>

              {/* Action Cluster Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl app-btn-primary font-mono text-xs font-bold tracking-wider uppercase shadow-glow-indigo"
                >
                  <span>EXPLORE STAR PROJECTS</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl app-btn-secondary font-mono text-xs font-semibold tracking-wider uppercase"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl app-btn-secondary font-mono text-xs font-semibold tracking-wider uppercase"
                  title="Download Verified Resume Statement"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>CV STATEMENT</span>
                </a>

                <button
                  onClick={onOpenSpotlight}
                  className="hidden sm:inline-flex items-center justify-center gap-2 px-3.5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white font-mono text-xs font-semibold"
                  title="Press ⌘K to open command palette"
                >
                  <Search className="w-4 h-4 text-indigo-400" />
                  <span className="app-kbd">⌘K</span>
                </button>
              </div>

            </motion.div>

            {/* Right Column: Apple-Style Glass Profile Card & Telemetry Dials (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
            >
              <div className="w-full max-w-sm space-y-4">
                
                {/* Executive Profile Glass Window */}
                <div className="p-4 rounded-3xl bg-apple-card border border-white/[0.12] shadow-2xl relative overflow-hidden group">
                  
                  {/* Portrait Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-black/60">
                    <img
                      src="/ayush-portrait.jpg"
                      alt="Ayush Chatterjee - Product Manager & Growth Strategist"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Bottom Vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090B12] via-[#090B12]/60 to-transparent"></div>

                    {/* Overlaid Bottom Details */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Open to Global Product Roles</span>
                      </div>
                      <div className="text-white font-display font-bold text-base uppercase">
                        Ayush Chatterjee
                      </div>
                      <div className="text-slate-300 text-[11px] font-mono">
                        MBA (IT & International Business) &bull; RCM
                      </div>
                    </div>
                  </div>

                  {/* Profile Card Footer Meta */}
                  <div className="pt-3 grid grid-cols-2 gap-2 text-left text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                      <div className="text-[9px] text-slate-400 uppercase font-semibold">Location Scope</div>
                      <div className="font-bold text-white truncate">India &rarr; Global Remote</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                      <div className="text-[9px] text-slate-400 uppercase font-semibold">Primary Track</div>
                      <div className="font-bold text-indigo-400 truncate">Product Strategy</div>
                    </div>
                  </div>

                </div>

                {/* 4 Live Telemetry Dials */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {heroTelemetry.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-2xl bg-[#0B0D14] border border-white/[0.08] hover:border-indigo-500/30 transition-colors text-left"
                    >
                      <div className="text-[9px] font-mono text-slate-400 mb-0.5 truncate uppercase">
                        {item.label}
                      </div>
                      <div className="text-base sm:text-lg font-display font-bold text-white flex items-baseline justify-between">
                        <span>{item.value}</span>
                        <span className="text-[9px] font-mono text-emerald-400 font-semibold">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
