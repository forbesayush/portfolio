import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Download, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#FAFAF8] luxury-silk-bg luxury-grid-lines overflow-hidden text-left">
      
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A880]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#B38F5B]/30 text-[#8A6B3D] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B38F5B] animate-pulse"></span>
              <span>{personalInfo.educationBadge}</span>
            </div>

            {/* Giant Editorial Luxury Headline */}
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A6B3D] mb-2 font-bold">
                Executive Product Management & Growth Strategy
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-luxury font-bold text-[#111318] tracking-tight leading-[1.06]">
                Ayush Chatterjee
              </h1>
            </div>

            {/* Subtitle with Serif Refinement */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-luxury italic text-[#8A6B3D] font-normal">
              Engineering Defensible Growth & High-Yield UX.
            </h2>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl font-normal">
              Operating at the convergence of <strong className="text-[#111318] font-semibold">consumer buying psychology</strong>, <strong className="text-[#111318] font-semibold">quantitative unit economics (CAC:LTV)</strong>, and <strong className="text-[#111318] font-semibold">frictionless product conversion (CRO)</strong>.
            </p>

            {/* Luxury Formula Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm max-w-2xl text-xs font-mono">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold">
                CORE VALUE FORMULA
              </div>
              <div className="flex flex-wrap items-center gap-2 text-slate-700 font-bold">
                <span className="px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-black/[0.06] text-[#111318]">PRODUCT STRATEGY</span>
                <span className="text-[#B38F5B]">+</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-black/[0.06] text-[#8A6B3D]">CAC : LTV TELEMETRY</span>
                <span className="text-[#B38F5B]">+</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-black/[0.06] text-[#111318]">CRO & RETENTION</span>
                <span className="text-[#B38F5B]">=</span>
                <span className="px-2.5 py-1 rounded-md bg-[#B38F5B]/15 text-[#8A6B3D]">SCALABLE ROI</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#dashboard"
                className="px-7 py-3.5 rounded-full btn-luxury-dark text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
              >
                <span>EXPLORE DASHBOARD</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full btn-luxury-outline text-xs font-sans font-bold uppercase tracking-wider"
              >
                <span>STAR CASEBOOKS</span>
              </a>

              <button
                onClick={onOpenBrief}
                className="px-5 py-3.5 rounded-full btn-luxury-outline text-xs font-mono font-semibold flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#B38F5B]" />
                <span>1P BRIEF</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Editorial Framed Portrait & Meta (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="w-full max-w-sm space-y-4">
              
              {/* Main Portrait Card */}
              <div className="p-4 rounded-3xl bg-[#FFFFFF] border border-black/[0.08] shadow-luxury-card relative overflow-hidden group">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-[#F4EFE6]">
                  <img
                    src="/ayush-portrait.jpg"
                    alt="Ayush Chatterjee"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#8A6B3D] text-[10px] font-mono font-bold mb-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Open to Global Product Roles</span>
                    </div>
                    <div className="text-white font-luxury font-bold text-lg uppercase tracking-wide">
                      Ayush Chatterjee
                    </div>
                    <div className="text-slate-200 text-xs font-sans">
                      MBA (IT & International Business) &bull; RCM
                    </div>
                  </div>
                </div>

                {/* Footer Highlights */}
                <div className="pt-3 grid grid-cols-2 gap-2 text-left text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Scope</div>
                    <div className="font-bold text-[#111318] truncate">India &rarr; Global Remote</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Core Focus</div>
                    <div className="font-bold text-[#8A6B3D] truncate">Product Strategy</div>
                  </div>
                </div>

              </div>

              {/* 2 Quick Telemetry Stats */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">MIS Speed Acceleration</div>
                  <div className="text-2xl font-luxury font-bold text-[#111318] mt-1">+35%</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">CAC : LTV Multiplier</div>
                  <div className="text-2xl font-luxury font-bold text-[#8A6B3D] mt-1">3.4x</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
