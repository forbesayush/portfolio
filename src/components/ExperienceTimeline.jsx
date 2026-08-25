import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, TrendingUp, Sparkles, Shield, Layers, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Section 02 &bull; Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Verified Experience.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Real-world product diagnostics, cross-border analytics, and frontline business operations with verified metrics and defensible impact.
          </p>
        </div>

        {/* Experience Layout: Selector on Left, Detail on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
          
          {/* Navigation / Role Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {experiences.map((exp) => {
              const isSelected = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-white dark:bg-[#0E1015] border-black/20 dark:border-white/20 shadow-xs text-zinc-950 dark:text-white linear-card'
                      : 'bg-white/60 dark:bg-[#0E1015]/60 border-black/[0.06] dark:border-white/[0.06] hover:bg-white dark:hover:bg-[#0E1015] hover:border-black/10 dark:hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-display font-bold uppercase tracking-tight text-zinc-950 dark:text-zinc-100">
                      {exp.company}
                    </h3>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 mt-0.5 ${
                      isSelected ? 'text-linear-brand dark:text-linear-accent translate-x-0.5' : 'text-zinc-400 dark:text-zinc-600'
                    }`} />
                  </div>

                  <div className="text-xs text-zinc-600 dark:text-zinc-400 font-normal mb-2.5 line-clamp-1">
                    {exp.role}
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-linear-brand dark:bg-linear-accent rounded-r"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Display Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark transition-all relative linear-card"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-zinc-700 dark:text-zinc-300 mb-2.5 font-medium uppercase">
                      {activeExp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase">
                      {activeExp.company}
                    </h3>
                    <div className="text-xs font-mono font-medium text-linear-brand dark:text-linear-accent mt-1">
                      {activeExp.role}
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-zinc-500 dark:text-zinc-400 space-y-0.5">
                    <div className="font-semibold text-zinc-800 dark:text-zinc-200">{activeExp.period}</div>
                    <div className="text-zinc-400 dark:text-zinc-500">{activeExp.location}</div>
                  </div>
                </div>

                {/* Summary Tagline */}
                <div className="py-4">
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic border-l-2 border-linear-brand pl-3 py-1 bg-black/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                    "{activeExp.summary}"
                  </p>
                </div>

                {/* Verified Metrics Pills */}
                {activeExp.metrics && activeExp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
                    {activeExp.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06]">
                        <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase truncate">{m.label}</div>
                        <div className="text-lg font-display font-bold text-zinc-950 dark:text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Verified Impact Points */}
                <div className="space-y-3 mb-6">
                  <div className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-medium">
                    Key Responsibilities & Outcomes
                  </div>
                  <ul className="space-y-2.5">
                    {activeExp.verifiedPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-brand/80 dark:bg-linear-accent/80 shrink-0 mt-1.5"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competency & Skill Tags */}
                <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div className="text-[10px] font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase mb-2 font-medium">
                    Applied Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeExp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] text-[11px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
