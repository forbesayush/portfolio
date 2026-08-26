import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { starCaseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  return (
    <section id="projects" className="py-20 section-divider text-left">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
            Selected Work &bull; STAR Method Casebooks
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Case Studies & Measurable Impact
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Deconstructed through Situation, Task, Action, and Result with verified commercial telemetry.
          </p>
        </div>

        {/* Case Study Cards List */}
        <div className="space-y-8">
          {starCaseStudies.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/[0.07] hover:border-white/[0.15] transition-colors shadow-sm"
            >
              
              {/* Top Row: Category + Case Index + Title */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-white/[0.06] mb-6">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400 mb-1.5">
                    <span className="text-orange-400 font-semibold">0{idx + 1}</span>
                    <span>&bull;</span>
                    <span className="uppercase tracking-wider">{project.badge}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-100 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Key Metric Tags Row */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {project.keyStats.map((st, sIdx) => (
                    <div key={sIdx} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-right">
                      <div className="text-sm font-bold text-slate-100 font-mono leading-none">{st.value}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {project.summary}
              </p>

              {/* Structured STAR Method Grid (2x2 Clean Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                
                {/* [S] Situation */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-mono font-semibold text-slate-300 mb-1">
                    [S] Situation
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {project.star.situation}
                  </p>
                </div>

                {/* [T] Task */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-mono font-semibold text-slate-300 mb-1">
                    [T] Task & Objective
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {project.star.task}
                  </p>
                </div>

                {/* [A] Action */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-mono font-semibold text-slate-300 mb-1">
                    [A] Action & Systems Built
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {project.star.action}
                  </p>
                </div>

                {/* [R] Result */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-orange-500/20 bg-orange-500/[0.02]">
                  <div className="text-xs font-mono font-semibold text-orange-400 mb-1">
                    [R] Quantifiable Result
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {project.star.result}
                  </p>
                </div>

              </div>

              {/* Deliverables & Stack Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                
                {/* Deliverables */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold">Key Deliverables:</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
                    {project.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
