import React from 'react';
import { Layers, ArrowDown, ChevronRight, Target, Sparkles, Compass } from 'lucide-react';
import { careerTracks } from '../data/portfolioData';

export default function CareerPath() {
  const { primary, secondary } = careerTracks;

  return (
    <section className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 11 &bull; Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Dual-Track Career Direction.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Calibrated for high-velocity product organizations while maintaining deep executive problem-solving rigor for management consulting.
          </p>
        </div>

        {/* Dual Track Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Track: Product Management */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-blue-200 dark:border-accent-dark/40 shadow-card-light dark:shadow-2xl relative overflow-hidden ring-1 ring-accent/30 dark:ring-accent-dark/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 dark:bg-accent-dark/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-accent-dark/15 border border-blue-200 dark:border-accent-dark/30 text-xs font-mono text-accent dark:text-accent-dark uppercase font-bold tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-ping"></span>
                {primary.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
                {primary.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-normal">
                {primary.tagline}
              </p>
            </div>

            {/* Progression Steps */}
            <div className="space-y-4">
              {primary.path.map((step, idx) => {
                const isFinal = idx === primary.path.length - 1;
                return (
                  <div key={step.level} className="flex items-start gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isFinal
                          ? 'bg-accent dark:bg-accent-dark text-white dark:text-obsidian-950 shadow-md dark:shadow-glow-cyan'
                          : 'bg-slate-100 dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 group-hover:border-accent'
                      }`}>
                        {step.level}
                      </div>
                      {!isFinal && (
                        <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10 my-1"></div>
                      )}
                    </div>

                    <div className="flex-1 pt-1 pb-2">
                      <h4 className={`text-sm sm:text-base font-display font-bold uppercase tracking-tight ${
                        isFinal ? 'text-accent dark:text-accent-dark' : 'text-slate-950 dark:text-white'
                      }`}>
                        {step.role}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-normal mt-0.5">
                        {step.focus}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary Track: Strategy & Consulting */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-semibold tracking-wider mb-3 shadow-2xs">
                  {secondary.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
                  {secondary.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-normal">
                  {secondary.tagline}
                </p>
              </div>

              {/* Progression Steps */}
              <div className="space-y-4">
                {secondary.path.map((step, idx) => {
                  const isFinal = idx === secondary.path.length - 1;
                  return (
                    <div key={step.level} className="flex items-start gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isFinal
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                        }`}>
                          {step.level}
                        </div>
                        {!isFinal && (
                          <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10 my-1"></div>
                        )}
                      </div>

                      <div className="flex-1 pt-1 pb-2">
                        <h4 className={`text-sm sm:text-base font-display font-bold uppercase tracking-tight ${
                          isFinal ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-900 dark:text-white'
                        }`}>
                          {step.role}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-normal mt-0.5">
                          {step.focus}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] mt-6 text-xs font-mono text-slate-500 font-medium">
              High Strategic Rigor & Structured Advisory
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
