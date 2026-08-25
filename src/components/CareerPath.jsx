import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowDown, ChevronRight, Target, Sparkles, Compass } from 'lucide-react';
import { careerTracks } from '../data/portfolioData';

export default function CareerPath() {
  const { primary, secondary } = careerTracks;

  return (
    <section className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 12 &bull; Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Dual-Track Marketing Trajectory.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Calibrated for high-velocity Growth & Product Marketing (PMM) teams while maintaining rigorous brand strategy and consulting capabilities.
          </p>
        </div>

        {/* Dual Track Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Primary Track: Product Management */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark relative overflow-hidden linear-card"
          >
            {/* Header */}
            <div className="mb-5 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase font-medium tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{primary.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                {primary.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-normal">
                {primary.tagline}
              </p>
            </div>

            {/* Progression Steps */}
            <div className="space-y-3 relative">
              {primary.path.map((step, idx) => {
                const isFinal = idx === primary.path.length - 1;
                return (
                  <div key={step.level} className="flex items-start gap-3.5 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isFinal
                          ? 'bg-linear-brand text-white'
                          : 'bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300'
                      }`}>
                        {step.level}
                      </div>
                      {!isFinal && (
                        <div className="w-[1px] h-6 bg-black/[0.06] dark:bg-white/[0.08] my-1"></div>
                      )}
                    </div>

                    <div className="flex-1 pt-0.5 pb-1">
                      <h4 className={`text-sm font-display font-bold uppercase tracking-tight ${
                        isFinal ? 'text-linear-brand dark:text-linear-accent' : 'text-zinc-950 dark:text-white'
                      }`}>
                        {step.role}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal mt-0.5">
                        {step.focus}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Secondary Track: Strategy & Consulting */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col justify-between linear-card"
          >
            <div>
              {/* Header */}
              <div className="mb-5 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase font-medium tracking-wider mb-2.5">
                  {secondary.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                  {secondary.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-normal">
                  {secondary.tagline}
                </p>
              </div>

              {/* Progression Steps */}
              <div className="space-y-3">
                {secondary.path.map((step, idx) => {
                  const isFinal = idx === secondary.path.length - 1;
                  return (
                    <div key={step.level} className="flex items-start gap-3.5 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isFinal
                            ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950'
                            : 'bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300'
                        }`}>
                          {step.level}
                        </div>
                        {!isFinal && (
                          <div className="w-[1px] h-6 bg-black/[0.06] dark:border-white/[0.08] my-1"></div>
                        )}
                      </div>

                      <div className="flex-1 pt-0.5 pb-1">
                        <h4 className="text-sm font-display font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
                          {step.role}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal mt-0.5">
                          {step.focus}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08] mt-5 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium">
              High Strategic Rigor & Structured Advisory
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
