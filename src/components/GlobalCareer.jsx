import React, { useState } from 'react';
import { Globe2, ArrowRight, MapPin, Compass, ShieldCheck, CheckCircle2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { globalRoadmap, targetCountries, additionalMarkets } from '../data/portfolioData';

export default function GlobalCareer() {
  const [showMoreMarkets, setShowMoreMarkets] = useState(false);

  return (
    <section id="global" className="py-24 relative bg-slate-50 dark:bg-obsidian-950 overflow-hidden transition-colors duration-300">
      
      {/* Background subtle glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-blue-500/5 dark:bg-accent-dark/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 10 &bull; International Ambition
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Building For A Global Career.
          </h2>
          <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-300 font-medium italic border-l-4 border-accent dark:border-accent-dark pl-4 mb-4">
            "Building a globally transferable career."
          </blockquote>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            A methodical, value-driven progression engineered to build rigorous execution foundations in India, scale cross-border collaboration, and transition into international product strategy leadership.
          </p>
        </div>

        {/* 3-Stage Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {globalRoadmap.map((stage) => (
            <div
              key={stage.num}
              className="p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-accent/60 dark:hover:border-accent-dark/40 transition-all duration-300 shadow-card-light dark:shadow-card-dark hover:shadow-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark">
                    STAGE {stage.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-obsidian-950 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5 font-semibold">
                    {stage.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight mb-1">
                  {stage.title}
                </h3>
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300 mb-4 font-bold">
                  {stage.phase}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6 flex items-center gap-2 text-xs font-mono font-bold text-accent dark:text-accent-dark">
                <span>Phase {stage.num} Milestone</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Target Markets Exploration Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-900/80 border border-slate-200 dark:border-white/10 shadow-card-light dark:shadow-2xl">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-obsidian-950 border border-blue-200 dark:border-white/10 flex items-center justify-center text-accent dark:text-accent-dark">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                  Target Global Innovation Ecosystems
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Strategic international markets for long-term product and technology strategy leadership.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-obsidian-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 font-medium">
                Global Transferability
              </span>
            </div>
          </div>

          {/* 5-Column Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {targetCountries.map((c, idx) => {
              const isAndMore = idx === targetCountries.length - 1;
              return (
                <div
                  key={c.name}
                  onClick={() => isAndMore && setShowMoreMarkets(!showMoreMarkets)}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isAndMore
                      ? 'bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 dark:from-accent-dark/10 dark:via-obsidian-850 dark:to-obsidian-850 border-blue-200 dark:border-accent-dark/30 hover:border-accent dark:hover:border-accent-dark cursor-pointer shadow-sm hover:shadow-card-hover group'
                      : 'bg-slate-50 dark:bg-obsidian-850 border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-obsidian-800 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-sm sm:text-base font-display font-bold uppercase tracking-tight ${
                        isAndMore ? 'text-accent dark:text-accent-dark flex items-center gap-1.5' : 'text-slate-900 dark:text-white'
                      }`}>
                        {isAndMore && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
                        <span>{c.name}</span>
                      </h4>
                      <MapPin className={`w-3.5 h-3.5 ${
                        isAndMore ? 'text-accent dark:text-accent-dark' : 'text-slate-400'
                      }`} />
                    </div>

                    <div className={`text-xs font-mono mb-2 font-semibold ${
                      isAndMore ? 'text-slate-900 dark:text-slate-200' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {c.hub}
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {c.focus}
                    </p>
                  </div>

                  {isAndMore && (
                    <div className="pt-3 mt-3 border-t border-blue-200/60 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-accent dark:text-accent-dark font-bold">
                      <span>{showMoreMarkets ? 'Hide Extra Hubs' : 'Explore All Hubs'}</span>
                      {showMoreMarkets ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Expandable Extra Hubs Drawer */}
          {showMoreMarkets && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in">
              {additionalMarkets.map((m) => (
                <div
                  key={m.name}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-white/5"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-xs uppercase text-slate-900 dark:text-white">
                      {m.name}
                    </span>
                    <span className="text-[10px] font-mono text-accent">Active Cluster</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">
                    {m.hub}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-relaxed">
                    {m.focus}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
