import React from 'react';
import { Quote, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-obsidian-950 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Endorsements & Collaborative Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Stakeholder Endorsements.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Reflections from engineering collaborators, growth leaders, and academic mentors on analytical rigor, product execution, and problem solving.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-accent/50 dark:hover:border-accent-dark/40 transition-all duration-300 shadow-card-light dark:shadow-card-dark hover:shadow-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-obsidian-950 border border-blue-200 dark:border-white/10 flex items-center justify-center text-accent dark:text-accent-dark">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    Verified Feedback
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="font-display font-bold text-slate-950 dark:text-white text-sm uppercase tracking-wide">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-accent dark:text-accent-dark font-semibold mt-0.5">
                  {t.title}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {t.domain}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
