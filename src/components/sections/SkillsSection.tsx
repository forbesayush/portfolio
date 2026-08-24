import React from 'react';
import { Layers, BarChart3, Compass } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const icons = [Layers, BarChart3, Compass];

  return (
    <section id="skills" className="space-y-8 text-left scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Strategic Capabilities
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Core Competencies
          </h2>
        </div>
        <div className="font-sans text-xs text-slate-500 font-normal">
          Structured frameworks across product lifecycle, funnel analytics, and growth
        </div>
      </div>

      {/* 3 Core Capability Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, sIdx) => {
          const IconComponent = icons[sIdx] || Layers;
          return (
            <div
              key={cat.category}
              className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                {/* Pillar Header */}
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-accent">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg sm:text-xl text-slate-900">
                      {cat.category}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif font-medium text-slate-900 text-sm">
                          {skill.name}
                        </h4>
                        <span className="font-sans text-[11px] text-slate-500 px-2 py-0.5 rounded bg-white border border-slate-200/60 font-medium">
                          {skill.experience}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Framework Logic Snippet */}
              <div className="p-3.5 rounded-2xl bg-slate-900 text-slate-200 font-mono text-[11px] leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap font-mono">
                  <code>{cat.skills[0].codeSnippet}</code>
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
