import React, { useState } from 'react';
import { ArrowUpRight, Check, BarChart2, ShieldCheck, Layers, Globe2, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Product & UX', 'Global Strategy', 'Data & Analytics', 'Strategy & Consulting', 'Product & Tech'];

  const filteredCases = filter === 'ALL'
    ? caseStudies
    : caseStudies.filter(cs => {
        const badge = cs.badge || '';
        const tags = cs.tags || [];
        if (filter === 'Product & UX') return badge.includes('PRODUCT') || badge.includes('UX');
        if (filter === 'Global Strategy') return badge.includes('GLOBAL') || tags.includes('Global Strategy');
        if (filter === 'Data & Analytics') return badge.includes('ANALYTICS') || tags.includes('Business Analytics');
        if (filter === 'Strategy & Consulting') return badge.includes('STRATEGY') || tags.includes('SWOT Analysis');
        if (filter === 'Product & Tech') return badge.includes('TECHNOLOGY') || tags.includes('React 18');
        return true;
      });

  return (
    <section id="case-studies" className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
              <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
              Section 05 &bull; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
              Strategic Case Studies.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured breakdowns demonstrating problem identification, analytical rigor, technical diagnostics, and measurable business and product impact.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                filter === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-obsidian-950 font-bold shadow-sm'
                  : 'bg-slate-100 dark:bg-obsidian-850 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5 Editorial Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((cs, idx) => {
            const isFirst = idx === 0 && filter === 'ALL';
            const tags = cs.tags || [];
            return (
              <div
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-accent/60 dark:hover:border-accent-dark/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between relative shadow-card-light dark:shadow-card-dark hover:shadow-card-hover ${
                  isFirst ? 'md:col-span-2 border-blue-200 dark:border-accent-dark/20 bg-gradient-to-br from-white via-white to-blue-50/40 dark:from-obsidian-850 dark:via-obsidian-850 dark:to-accent-dark/5' : ''
                }`}
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-white/[0.04] border border-blue-200 dark:border-white/10 text-[11px] font-mono tracking-wider text-accent dark:text-accent-dark font-bold uppercase">
                      {cs.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors flex items-center gap-1 font-semibold">
                      <span>EXPLORE DEEP DIVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight mb-3 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                    {cs.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {cs.summary}
                  </p>

                  {/* Key Stats Bar */}
                  {cs.keyStats && (
                    <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950/80 border border-slate-200 dark:border-white/[0.05] mb-6">
                      {cs.keyStats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase truncate font-semibold">
                            {stat.label}
                          </div>
                          <div className="text-sm sm:text-base font-display font-bold text-slate-950 dark:text-white mt-0.5">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

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
