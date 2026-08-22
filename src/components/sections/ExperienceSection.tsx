import React, { useState } from 'react';
import { Briefcase, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { experiences } from '../../data/experience';
import { soundManager } from '../../audio/soundManager';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    soundManager.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            WHERE I'VE WORKED
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-400">
          8+ YEARS BUILDING SOFTWARE
        </div>
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              onClick={() => toggleExpand(exp.id)}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="EXPAND"
              className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl ${
                isExpanded
                  ? 'bg-surface-glass-hover border-cyber-cyan/50 shadow-spatial'
                  : 'bg-surface-glass border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Header Row */}
              <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center font-mono font-bold text-cyber-cyan text-sm flex-shrink-0 mt-1 md:mt-0">
                    →
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-xl text-white">
                        {exp.role}
                      </h3>
                      <span className="text-cyber-cyan font-mono text-sm font-bold">
                        at {exp.company}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-slate-400">
                      {exp.location} • <span className="text-slate-300">{exp.period}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {exp.badge}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 text-cyber-cyan' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-white/10 space-y-6 animate-in fade-in duration-200">
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Achievements bullet list */}
                  <div>
                    <h4 className="font-mono text-xs text-cyber-amber uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyber-amber" />
                      HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2 font-sans text-sm text-slate-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-cyber-cyan font-bold text-xs mt-1">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architectural Impact Box */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyber-neon flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[11px] text-cyber-neon uppercase font-bold block mb-1">
                        Impact:
                      </span>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">
                        {exp.architecturalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
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
