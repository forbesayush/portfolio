import React, { useState } from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { experiences } from '../../data/experience';
import { soundManager } from '../../audio/soundManager';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    soundManager.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase block mb-1">
            CAREER HISTORY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            WHERE I'VE WORKED
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-400">
          8+ years building production software
        </div>
      </div>

      {/* Asymmetric Timeline List */}
      <div className="space-y-4">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              onClick={() => toggleExpand(exp.id)}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="EXPAND"
              className={`rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isExpanded
                  ? 'bg-[#0c0f18] border-cyber-cyan/40 shadow-xl'
                  : 'bg-[#090b10] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Header Row */}
              <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {exp.role}
                    </h3>
                    <span className="text-cyber-cyan font-mono text-sm font-semibold">
                      at {exp.company}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-slate-400">
                    <span>{exp.location}</span>, <span className="text-slate-300">{exp.period}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {exp.badge}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-cyber-cyan' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10 space-y-4 animate-in fade-in duration-150">
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-cyber-amber uppercase tracking-wider block font-bold">
                      KEY DELIVERABLES
                    </span>
                    <ul className="space-y-1.5 font-sans text-sm text-slate-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-cyber-cyan font-bold text-xs mt-1">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-cyber-neon flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs text-cyber-neon uppercase font-bold block mb-0.5">
                        Outcome
                      </span>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">
                        {exp.architecturalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
