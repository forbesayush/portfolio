import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, ArrowRight, MapPin, Compass, ShieldCheck, CheckCircle2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { globalRoadmap, targetCountries, additionalMarkets } from '../data/portfolioData';

export default function GlobalCareer() {
  const [showMoreMarkets, setShowMoreMarkets] = useState(false);

  return (
    <section id="global" className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Section 10 &bull; International Ambition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Building For A Global Career.
          </h2>
          <blockquote className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-normal italic border-l-2 border-linear-brand pl-3 mb-3">
            "Building a globally transferable career."
          </blockquote>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            A methodical, value-driven progression engineered to build rigorous execution foundations in India, scale cross-border collaboration, and transition into international product strategy leadership.
          </p>
        </div>

        {/* 3-Stage Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 text-left">
          {globalRoadmap.map((stage, idx) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 shadow-xs flex flex-col justify-between group linear-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-semibold text-linear-brand dark:text-linear-accent">
                    STAGE {stage.num}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-black/[0.06] dark:border-white/[0.08] font-medium">
                    {stage.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-0.5">
                  {stage.title}
                </h3>
                <div className="text-xs font-mono text-linear-brand dark:text-linear-accent mb-3 font-medium">
                  {stage.phase}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-black/[0.04] dark:border-white/[0.06] mt-5 flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                <span>Phase {stage.num} Milestone</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Markets Exploration Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs text-left linear-card">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                  Target Global Innovation Ecosystems
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Strategic international markets for long-term product and technology strategy leadership.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1 rounded-lg border border-black/[0.06] dark:border-white/[0.08] font-medium">
                Global Transferability
              </span>
            </div>
          </div>

          {/* 5-Column Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {targetCountries.map((c, idx) => {
              const isAndMore = idx === targetCountries.length - 1;
              return (
                <div
                  key={c.name}
                  onClick={() => isAndMore && setShowMoreMarkets(!showMoreMarkets)}
                  className={`p-4 rounded-xl border transition-all duration-150 flex flex-col justify-between ${
                    isAndMore
                      ? 'bg-black/[0.03] dark:bg-white/[0.04] border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 cursor-pointer shadow-xs'
                      : 'bg-black/[0.01] dark:bg-white/[0.02] border-black/[0.05] dark:border-white/[0.06]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-xs font-display font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
                        {c.name}
                      </h4>
                      <MapPin className="w-3 h-3 text-zinc-400" />
                    </div>

                    <div className="text-[11px] font-mono mb-1.5 font-medium text-zinc-800 dark:text-zinc-200">
                      {c.hub}
                    </div>

                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                      {c.focus}
                    </p>
                  </div>

                  {isAndMore && (
                    <div className="pt-2.5 mt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-linear-brand dark:text-linear-accent font-medium">
                      <span>{showMoreMarkets ? 'Hide Extra Hubs' : 'Explore All Hubs'}</span>
                      {showMoreMarkets ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Expandable Extra Hubs Drawer */}
          <AnimatePresence>
            {showMoreMarkets && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 overflow-hidden"
              >
                {additionalMarkets.map((m) => (
                  <div
                    key={m.name}
                    className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-xs uppercase text-zinc-900 dark:text-white">
                        {m.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Active</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-700 dark:text-zinc-300 mb-0.5 font-medium">
                      {m.hub}
                    </div>
                    <div className="text-[10px] text-zinc-500 leading-relaxed">
                      {m.focus}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
