import React from 'react';
import { ayushData } from '../data/portfolioData';
import { ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

interface SectionProps {
  theme?: 'dark' | 'light';
}

export const ExperienceSection: React.FC<SectionProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const getCompanyLogo = (company: string) => {
    if (company.includes('OnePlus')) {
      return (
        <span className="font-mono-code font-extrabold text-xs tracking-wider text-red-500 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
          ONEPLUS
        </span>
      );
    }
    if (company.includes('Innovist')) {
      return (
        <span className="font-mono-code font-extrabold text-xs tracking-wider text-pink-500 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/20">
          INNOVIST D2C
        </span>
      );
    }
    if (company.includes('D-DZIRE') || company.includes('D-Dzire')) {
      return (
        <span className="font-mono-code font-extrabold text-xs tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
          D-DZIRE JEWELS
        </span>
      );
    }
    return (
      <span className="font-mono-code font-extrabold text-xs tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
        SWASH CONSULTING
      </span>
    );
  };

  return (
    <section
      id="work"
      className={`py-32 px-6 md:px-12 transition-colors duration-500 relative ${
        isDark ? 'bg-[#0a0a0f] text-white border-t border-white/10' : 'bg-[#fbf8f5] text-neutral-900 border-t border-neutral-200'
      }`}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Header (Michael Tsirakis style) */}
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b pb-8 border-neutral-700/30">
          <div>
            <span className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-amber-500 font-bold">
              [01 / SELECTED WORK]
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
              Case Studies &amp; <span className="font-playfair italic font-normal text-amber-500">Impact</span>
            </h2>
          </div>
          <p className={`max-w-[36ch] text-right text-sm leading-relaxed hidden md:block ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Projects where data analytics directly translated into product quality, sprint priorities, and retail revenue.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {ayushData.experiences.map((exp) => (
            <div key={exp.id} className="group/card block">
              
              {/* Visual Card Banner */}
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 border ${
                  isDark
                    ? 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-white/10 group-hover/card:border-amber-500/50 shadow-2xl'
                    : 'bg-gradient-to-br from-white via-neutral-50 to-neutral-100 border-neutral-200 group-hover/card:border-amber-500/50 shadow-lg'
                }`}
              >
                {/* Background Ambient Glow */}
                <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl group-hover/card:bg-amber-500/20 transition-all" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  {getCompanyLogo(exp.company)}
                  <span className="font-mono-code text-[11px] text-neutral-400 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>

                {/* Center Metric Highlight Callout */}
                <div className="relative z-10 my-auto py-4">
                  {exp.metrics && exp.metrics.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      <div className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight flex items-center gap-2">
                        <Zap className="w-6 h-6 text-amber-500" />
                        <span>{exp.metrics[0]}</span>
                      </div>
                      {exp.metrics[1] && (
                        <div className="text-sm font-mono-code text-neutral-400 font-semibold">
                          ✦ {exp.metrics[1]}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-neutral-300 tracking-tight flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-amber-500" />
                      <span>{exp.tags[0]}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Tag Pills */}
                <div className="relative z-10 flex flex-wrap gap-2 pt-3 border-t border-neutral-700/20">
                  {exp.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] font-mono-code px-2.5 py-1 rounded-md border ${
                        isDark ? 'bg-black/40 border-white/10 text-neutral-300' : 'bg-neutral-200/60 border-neutral-300 text-neutral-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Trigger Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-xs font-mono-code font-extrabold text-neutral-950 shadow-xl tracking-wider uppercase">
                    View Case Impact
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[11px] uppercase tracking-widest text-amber-500 font-bold">
                    {exp.role}
                  </span>
                  <span className="font-mono-code text-xs text-neutral-500">
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug flex items-center gap-2 group-hover/card:text-amber-500 transition-colors">
                  <span>{exp.description[0]}</span>
                </h3>

                {exp.description[1] && (
                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {exp.description[1]}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
