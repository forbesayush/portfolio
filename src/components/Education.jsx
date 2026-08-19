import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 08 &bull; Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Education.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Specialized academic foundation in Information Technology systems, enterprise strategy, and international trade dynamics.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-card-light dark:shadow-card-dark hover:shadow-card-hover flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-accent dark:group-hover:text-accent-dark dark:group-hover:bg-obsidian-950 group-hover:text-white transition-colors shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-accent dark:text-accent-dark bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 px-3 py-1 rounded-full font-bold">
                    {edu.graduation}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  {edu.institution}
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-300 mb-6 font-semibold">
                  {edu.specialization}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {edu.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-500">
                <span>RCM Bhubaneswar</span>
                <span>Verified Curriculum</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
