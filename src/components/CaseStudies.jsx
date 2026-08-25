import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, BarChart2, ShieldCheck, Layers, Globe2, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'D2C & Growth', 'Brand & Positioning', 'UX & Conversion', 'Strategy & Moats'];

  const filteredCases = filter === 'ALL'
    ? caseStudies
    : caseStudies.filter(cs => {
        const badge = cs.badge || '';
        const tags = cs.tags || [];
        if (filter === 'D2C & Growth') return badge.includes('D2C') || badge.includes('GROWTH') || tags.includes('D2C Marketing');
        if (filter === 'Brand & Positioning') return badge.includes('BRAND') || tags.includes('Brand Positioning');
        if (filter === 'UX & Conversion') return badge.includes('UX') || tags.includes('CRO');
        if (filter === 'Strategy & Moats') return badge.includes('STRATEGY') || tags.includes('Brand Strategy');
        return true;
      });

  return (
    <section id="case-studies" className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="figma-frame-tag">
                # CAMPAIGN_CASEBOOKS [Variants: 4 &bull; Auto-Layout]
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase font-semibold">
                <span className="w-2 h-[2px] bg-rose-500"></span>
                <span>Section 05 &bull; Campaign Casebooks</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
              Marketing & Growth Casebooks.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Empirical breakdowns demonstrating audience segmentation, full-funnel CRO, D2C unit economics, and verified commercial revenue impact.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mb-10 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors duration-150 ${
                filter === cat
                  ? 'text-zinc-950 dark:text-white font-semibold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-black/[0.06] dark:bg-white/[0.1] rounded-lg border border-black/5 dark:border-white/10 -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* 5 Editorial Case Studies Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <AnimatePresence>
            {filteredCases.map((cs, idx) => {
              const isFirst = idx === 0 && filter === 'ALL';
              const tags = cs.tags || [];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  key={cs.id}
                  onClick={() => setSelectedCase(cs)}
                  className={`p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 group cursor-pointer flex flex-col justify-between relative linear-card ${
                    isFirst ? 'md:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono tracking-wider text-zinc-700 dark:text-zinc-300 font-medium uppercase">
                        {cs.badge}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-linear-brand dark:group-hover:text-linear-accent transition-colors flex items-center gap-1 font-medium">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-2.5 group-hover:text-linear-brand dark:group-hover:text-linear-accent transition-colors leading-snug">
                      {cs.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                      {cs.summary}
                    </p>

                    {/* Key Stats Bar */}
                    {cs.keyStats && (
                      <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] mb-6">
                        {cs.keyStats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase truncate">
                              {stat.label}
                            </div>
                            <div className="text-base sm:text-lg font-display font-bold text-zinc-950 dark:text-white mt-0.5">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.05] text-[11px] font-mono text-zinc-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
}
