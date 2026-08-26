import React from 'react';
import { Award, Target, Zap, RefreshCw } from 'lucide-react';
import { personalInfo, corePillars, academicCredentials } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 section-divider text-left">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
            Strategic Mindset & Disciplines
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Marketing Philosophy & Capabilities
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Bridging analytical telemetry with consumer buying behavior to build defensible commercial growth.
          </p>
        </div>

        {/* 2-Column Grid: Manifesto on Left, Academic Background on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Manifesto Card (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/[0.07] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Operating Philosophy
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-snug border-l-2 border-orange-500 pl-4 py-1">
                "{personalInfo.brandStatementLead}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-1">
                {personalInfo.brandStatementBody}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ayush Chatterjee</span>
              <span className="text-emerald-400">● Verified Growth Track Record</span>
            </div>
          </div>

          {/* Academic Background Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/[0.07] flex flex-col justify-between space-y-6">
            <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              Academic Credentials
            </div>

            <div className="space-y-4">
              {academicCredentials.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{edu.degree}</span>
                    <span className="text-slate-500">{edu.duration}</span>
                  </div>
                  <div className="text-xs text-slate-400">{edu.specialization}</div>
                  <div className="text-[11px] text-slate-500">{edu.institution}</div>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.06] flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>STEM-Aligned Business & Marketing Curriculum</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Core Growth Disciplines
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((p, idx) => (
              <div key={p.id} className="p-5 rounded-xl bg-[#0F1118] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">0{idx + 1}</span>
                    <span className="text-[10px] font-mono text-orange-400">{p.metric}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-200 mb-1.5">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] space-y-1">
                  {p.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
