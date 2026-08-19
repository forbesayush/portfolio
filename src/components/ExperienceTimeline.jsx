import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, TrendingUp, Sparkles, Shield, Layers, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-24 relative bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 02 &bull; Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Verified Professional Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Real-world product diagnostics, cross-border analytics, and frontline business operations with verified metrics and defensible impact.
          </p>
        </div>

        {/* Experience Layout: Selector on Left, Detail on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation / Role Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {experiences.map((exp) => {
              const isSelected = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-white dark:bg-obsidian-850 border-accent dark:border-accent-dark shadow-card-light dark:shadow-card-dark ring-1 ring-accent dark:ring-accent-dark'
                      : exp.featured
                      ? 'bg-white/90 dark:bg-obsidian-900/90 border-blue-200 dark:border-white/15 hover:border-accent shadow-sm'
                      : 'bg-white/60 dark:bg-obsidian-900/60 border-slate-200 dark:border-white/[0.06] hover:bg-white dark:hover:bg-obsidian-850 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  {/* Featured Spotlight Badge */}
                  {exp.featured && (
                    <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-accent dark:text-accent-dark uppercase mb-2 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-pulse"></span>
                      Direct Product Strategy Anchor
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`text-base font-display font-bold uppercase tracking-tight transition-colors ${
                      isSelected ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <ChevronRight className={`w-4 h-4 transition-transform shrink-0 mt-1 ${
                      isSelected ? 'text-accent dark:text-accent-dark translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400'
                    }`} />
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mb-3 line-clamp-1">
                    {exp.role}
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-accent dark:bg-accent-dark rounded-r"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Display Card */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-card-light dark:shadow-2xl transition-all relative ${
              activeExp.featured ? 'ring-1 ring-blue-200 dark:ring-accent-dark/30' : ''
            }`}>
              
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                    {activeExp.type}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight uppercase">
                    {activeExp.company}
                  </h3>
                  <div className="text-sm font-bold text-accent dark:text-accent-dark mt-1">
                    {activeExp.role}
                  </div>
                </div>

                <div className="text-right text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
                  <div>{activeExp.period}</div>
                  <div className="text-slate-400 dark:text-slate-500">{activeExp.location}</div>
                </div>
              </div>

              {/* Summary Tagline */}
              <div className="py-5">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-accent dark:border-accent-dark pl-3">
                  "{activeExp.summary}"
                </p>
              </div>

              {/* Verified Metrics Pills */}
              {activeExp.metrics && activeExp.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {activeExp.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-950/70 border border-slate-200 dark:border-white/[0.06]">
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{m.label}</div>
                      <div className="text-lg font-display font-bold text-slate-950 dark:text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Verified Impact Points */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  Key Responsibilities & Verified Outcomes
                </div>
                <ul className="space-y-3">
                  {activeExp.verifiedPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-accent-dark/15 text-accent dark:text-accent-dark flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competency & Skill Tags */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08]">
                <div className="text-[11px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2 font-semibold">
                  Applied Competencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeExp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
