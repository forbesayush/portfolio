import React, { useState } from 'react';
import { Box, Database, Cpu, Briefcase, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { key: 'product', label: 'PRODUCT', icon: Box, color: 'text-blue-600 dark:text-sky-400', border: 'border-blue-200 dark:border-sky-500/20', bg: 'bg-blue-50 dark:bg-sky-500/10' },
  { key: 'data', label: 'DATA & ANALYTICS', icon: Database, color: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-500/20', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { key: 'technology', label: 'TECHNOLOGY', icon: Cpu, color: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-500/20', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  { key: 'business', label: 'BUSINESS & STRATEGY', icon: Briefcase, color: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-500/20', bg: 'bg-amber-50 dark:bg-amber-500/10' },
];

export default function SkillsMatrix() {
  return (
    <section className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 09 &bull; Competency Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Technical & Professional Toolkit.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A calibrated blend of product methodologies, quantitative analytics, software technologies, and enterprise business strategy.
          </p>
        </div>

        {/* 4 Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const skills = skillsData[cat.key] || [];
            return (
              <div
                key={cat.key}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-card-light dark:hover:shadow-card-dark flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                    <div className={`w-9 h-9 rounded-lg ${cat.bg} border ${cat.border} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {cat.label}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white dark:bg-obsidian-950/40 border border-slate-200 dark:border-white/[0.03] text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/15 transition-all shadow-2xs font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark shrink-0"></div>
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/[0.05] text-[10px] font-mono text-slate-500 uppercase flex items-center justify-between font-semibold">
                  <span>Zero Fluff</span>
                  <span>Applied Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
