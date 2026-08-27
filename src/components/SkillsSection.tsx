import React from 'react';
import { ayushData } from '../data/portfolioData';
import { BarChart3, Compass, Cpu, Layers } from 'lucide-react';

interface SectionProps {
  theme?: 'dark' | 'light';
}

export const SkillsSection: React.FC<SectionProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      className={`py-32 px-6 md:px-12 transition-colors duration-500 relative border-t ${
        isDark ? 'bg-[#0a0a0f] text-white border-white/10' : 'bg-[#fbf8f5] text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b pb-8 border-neutral-700/30">
          <div>
            <span className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-amber-500 font-bold">
              [03 / TECHNICAL TOOLKIT]
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
              Skills &amp; <span className="font-playfair italic font-normal text-amber-500">Capabilities</span>
            </h2>
          </div>
          <p className={`max-w-[36ch] text-right text-sm leading-relaxed hidden md:block ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Combining technical analytics rigor (Power BI, SQL, MIS) with strategic execution (GTM, Competitive Benchmarking, Product Roadmapping).
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Analytics */}
          <div
            className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 group ${
              isDark
                ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Data &amp; BI Analytics</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ayushData.skills.analytics.map((skill, idx) => (
                <span
                  key={idx}
                  className={`font-mono-code text-xs px-4 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-neutral-800/80 border-white/10 text-neutral-200 hover:border-amber-500/40'
                      : 'bg-neutral-100/90 border-neutral-200 text-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Product Strategy */}
          <div
            className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 group ${
              isDark
                ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Product Strategy &amp; GTM</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ayushData.skills.strategy.map((skill, idx) => (
                <span
                  key={idx}
                  className={`font-mono-code text-xs px-4 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-neutral-800/80 border-white/10 text-neutral-200 hover:border-amber-500/40'
                      : 'bg-neutral-100/90 border-neutral-200 text-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Domain Expertise */}
          <div
            className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 group ${
              isDark
                ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Domain &amp; Operations</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ayushData.skills.domain.map((skill, idx) => (
                <span
                  key={idx}
                  className={`font-mono-code text-xs px-4 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-neutral-800/80 border-white/10 text-neutral-200 hover:border-amber-500/40'
                      : 'bg-neutral-100/90 border-neutral-200 text-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Stack */}
          <div
            className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 group ${
              isDark
                ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Tools &amp; Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ayushData.skills.tools.map((skill, idx) => (
                <span
                  key={idx}
                  className={`font-mono-code text-xs px-4 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-neutral-800/80 border-white/10 text-neutral-200 hover:border-amber-500/40'
                      : 'bg-neutral-100/90 border-neutral-200 text-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
