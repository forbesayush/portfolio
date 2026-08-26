import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ShieldCheck, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import { experienceLedger } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeLedgerId, setActiveLedgerId] = useState(experienceLedger[0].id);
  const activeTx = experienceLedger.find(t => t.id === activeLedgerId) || experienceLedger[0];

  return (
    <section id="ledger" className="py-20 sm:py-24 relative bg-[#08090E] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM MODULE 03 &bull; VERIFIED CAREER LEDGER & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            Commercial Experience Ledger.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real-world product execution mandates, storefront optimization, and management consulting engagements recorded as verified transaction entries.
          </p>
        </div>

        {/* 2-Column Ledger: Left Role List, Right Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Navigation Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
              EXPERIENCE ENTRIES (4 VERIFIED MANDATES)
            </div>

            {experienceLedger.map((tx) => {
              const isSelected = tx.id === activeLedgerId;
              return (
                <button
                  key={tx.id}
                  onClick={() => setActiveLedgerId(tx.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#151928] border-indigo-500/60 shadow-glow-indigo text-white'
                      : 'bg-[#0E1018] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:bg-[#121520]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {tx.ref}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span>{tx.status.split('•')[0]}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white uppercase tracking-tight">
                    {tx.company}
                  </h3>

                  <div className="text-xs text-slate-300 font-normal mt-0.5 mb-2 line-clamp-1">
                    {tx.role}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.04]">
                    <span>{tx.period}</span>
                    <span className="flex items-center gap-1 text-indigo-400 font-medium group-hover:translate-x-1 transition-transform">
                      <span>Inspect Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Dossier Panel (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTx.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-9 rounded-3xl glass-card border border-white/[0.12] shadow-app-window relative overflow-hidden"
              >
                {/* Header */}
                <div className="pb-6 border-b border-white/[0.08] mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-indigo-400 font-bold tracking-widest uppercase">
                      STATEMENT REF: {activeTx.ref}
                    </span>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold uppercase">
                      {activeTx.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight mb-1">
                    {activeTx.company}
                  </h3>

                  <div className="text-sm font-semibold text-slate-200 mb-3">
                    {activeTx.role} &bull; <span className="text-slate-400 font-mono font-normal">{activeTx.period} ({activeTx.location})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {activeTx.summary}
                  </p>
                </div>

                {/* Key Telemetry ROI Numbers */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeTx.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#090B12] border border-white/10 text-left">
                      <div className="text-lg sm:text-xl font-display font-bold text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Executed Workflows & Deliverables
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeTx.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {activeTx.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-slate-300 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
