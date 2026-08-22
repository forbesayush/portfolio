import React from 'react';
import { Layers, BarChart3, Compass } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const icons = [Layers, BarChart3, Compass];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Capabilities
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Skills and frameworks
          </h2>
        </div>
        <div className="font-sans text-xs sm:text-sm text-slate-400 font-normal">
          Structured execution across product, data, and strategy
        </div>
      </div>

      {/* 3 Core Capability Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        {skillCategories.map((cat, sIdx) => {
          const IconComponent = icons[sIdx] || Layers;
          return (
            <div
              key={cat.category}
              style={{ animationDelay: `${sIdx * 80}ms` }}
              className="rounded-2xl bg-background-card border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards"
            >
              <div className="space-y-4">
                {/* Pillar Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-xl text-white">
                      {cat.category}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif font-medium text-white text-sm sm:text-base">
                          {skill.name}
                        </h4>
                        <span className="font-sans text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded font-normal">
                          {skill.experience}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar Applied Artifact Preview */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-amber-200/90 leading-relaxed overflow-x-auto">
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

