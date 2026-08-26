import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceLedger } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 section-divider text-left">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
            Track Record &bull; Career Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Work Experience & Mandates
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Product management, full-funnel CRO, retention analytics, and management consulting engagements.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceLedger.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F1118] border border-white/[0.07] hover:border-white/[0.14] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/[0.06] mb-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-100">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 shrink-0">
                  <span>{exp.period}</span>
                  <span>&bull;</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {exp.summary}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-4">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="pt-3 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                {exp.tags.map((t, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[11px] font-mono text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
