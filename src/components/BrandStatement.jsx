import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Quote } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section className="py-28 relative bg-slate-50 dark:bg-obsidian-950 overflow-hidden transition-colors duration-300">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-500/6 dark:bg-accent-dark/8 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-8 font-semibold">
          <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
          Section 12 &bull; Core Philosophy
        </div>

        {/* Large Typography Statement */}
        <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight uppercase mb-10 max-w-4xl mx-auto">
          "{personalInfo.brandStatementLead}"
        </blockquote>

        {/* Secondary Supporting Manifesto */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-850/70 border border-slate-200 dark:border-white/10 shadow-card-light dark:shadow-2xl">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
            {personalInfo.brandStatementBody}
          </p>
          
          <div className="pt-6 border-t border-slate-100 dark:border-white/[0.08] mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent dark:border-accent-dark shadow-md shrink-0">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Ayush Chatterjee
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                MBA (IT & International Business) &bull; Product & Strategy
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
