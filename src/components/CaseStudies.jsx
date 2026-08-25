import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
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
    <section id="case-studies" className="py-24 relative bg-black border-t border-b border-white/10 text-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="figma-frame-tag">
                # CAMPAIGN_CASEBOOKS [Variants: 4]
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase font-semibold">
                <span className="w-2 h-[2px] bg-cream"></span>
                <span>Section 05 &bull; Campaign Casebooks</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-hn font-bold text-cream tracking-tight uppercase leading-tight mb-4">
              Marketing & Growth Casebooks.
            </h2>
            <p className="text-base sm:text-lg text-cream/70 leading-relaxed font-normal">
              Empirical breakdowns demonstrating audience segmentation, full-funnel CRO, D2C unit economics, and verified commercial revenue impact.
            </p>
          </div>
        </motion.div>

        {/* Filter Pills with Sliding Indicator */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-colors duration-150 ${
                filter === cat
                  ? 'text-black bg-cream font-bold shadow-md'
                  : 'text-cream/60 hover:text-cream bg-white/5 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Casebook Grid with Sliding Item Reveals */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <AnimatePresence>
            {filteredCases.map((cs, idx) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedCase(cs)}
                className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-white/15 hover:border-white/30 transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/10 text-cream uppercase tracking-wider font-semibold">
                      {cs.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-cream/40 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-hn font-bold text-cream uppercase mb-3 leading-snug group-hover:text-white transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-normal mb-6">
                    {cs.summary}
                  </p>
                </div>

                <div>
                  {/* Key Stats Row */}
                  {cs.keyStats && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/60 border border-white/10 mb-5">
                      {cs.keyStats.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <div className="text-sm sm:text-base font-hn font-bold text-cream">
                            {stat.value}
                          </div>
                          <div className="text-[9px] font-mono text-cream/50 uppercase truncate mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Tags & Deep Dive Trigger */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags?.slice(0, 2).map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-cream/50">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono font-medium text-cream flex items-center gap-1 group-hover:underline">
                      <span>View Teardown</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep Dive Modal */}
        <CaseStudyModal
          study={selectedCase}
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
        />

      </div>
    </section>
  );
}
