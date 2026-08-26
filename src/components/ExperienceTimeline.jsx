import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { experienceLedger } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeLedgerId, setActiveLedgerId] = useState(experienceLedger[0].id);
  const activeTx = experienceLedger.find(t => t.id === activeLedgerId) || experienceLedger[0];

  return (
    <section id="experience" className="py-24 bg-[#FFFFFF] border-t border-b border-black/[0.06] text-[#111318] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAFAF8] border border-[#B38F5B]/30 text-[#8A6B3D] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B38F5B]"></span>
            <span>VERIFIED CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#111318] tracking-tight uppercase mb-4">
            Commercial Experience Ledger.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            Real-world product execution mandates, storefront optimization, and management consulting engagements recorded as verified transaction entries.
          </p>
        </div>

        {/* 2-Column Ledger: Left Role List, Right Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Navigation Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2 font-bold">
              EXPERIENCE ENTRIES (4 VERIFIED MANDATES)
            </div>

            {experienceLedger.map((tx) => {
              const isSelected = tx.id === activeLedgerId;
              return (
                <button
                  key={tx.id}
                  onClick={() => setActiveLedgerId(tx.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#FAFAF8] border-[#B38F5B] shadow-sm text-[#111318] ring-1 ring-[#B38F5B]/30'
                      : 'bg-[#FFFFFF] border-black/[0.06] text-slate-600 hover:text-black hover:border-black/[0.15]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {tx.ref}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-800 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span>{tx.status.split('•')[0]}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-luxury font-bold text-[#111318] uppercase tracking-wide">
                    {tx.company}
                  </h3>

                  <div className="text-xs text-slate-600 font-sans mt-0.5 mb-2 line-clamp-1">
                    {tx.role}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-black/[0.04]">
                    <span>{tx.period}</span>
                    <span className="flex items-center gap-1 text-[#8A6B3D] font-bold group-hover:translate-x-1 transition-transform">
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
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-black/[0.08] shadow-luxury-card relative overflow-hidden"
              >
                {/* Header */}
                <div className="pb-6 border-b border-black/[0.06] mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-[#8A6B3D] font-bold tracking-widest uppercase">
                      STATEMENT REF: {activeTx.ref}
                    </span>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#B38F5B]/30 text-[#8A6B3D] font-bold uppercase shadow-sm">
                      {activeTx.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318] tracking-tight mb-1">
                    {activeTx.company}
                  </h3>

                  <div className="text-sm font-semibold text-slate-700 mb-3">
                    {activeTx.role} &bull; <span className="text-slate-500 font-mono font-normal">{activeTx.period} ({activeTx.location})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal">
                    {activeTx.summary}
                  </p>
                </div>

                {/* Key Telemetry ROI Numbers */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeTx.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm text-left">
                      <div className="text-xl font-luxury font-bold text-[#111318]">
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
                  <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                    Executed Workflows & Deliverables
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {activeTx.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B38F5B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-black/[0.06] flex flex-wrap gap-2">
                  {activeTx.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#FFFFFF] text-[11px] font-mono text-slate-600 border border-black/[0.06]">
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
