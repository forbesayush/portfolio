import React from 'react';
import { Box, Compass, Database, Check, ArrowUpRight } from 'lucide-react';
import { pillars } from '../data/portfolioData';

const pillarIcons = {
  product: Box,
  strategy: Compass,
  'data-technology': Database
};

export default function PillarCards() {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 04 &bull; Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            What I Work On.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Three interconnected disciplines engineered to take products from ambiguous early problems to structured, scalable market execution.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Box;
            return (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-accent/50 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-card-light dark:shadow-card-dark hover:shadow-card-hover"
              >
                {/* Subtle top accent bar */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-slate-100 dark:bg-white/[0.06] group-hover:bg-accent dark:group-hover:bg-accent-dark transition-all duration-300"></div>

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-slate-300 group-hover:bg-accent dark:group-hover:text-accent-dark dark:group-hover:bg-obsidian-950 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-accent dark:text-accent-dark mb-4 tracking-wide">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-3 border-t border-slate-100 dark:border-white/[0.06] pt-4 font-semibold">
                    Domain Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {pillar.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark shrink-0"></span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
