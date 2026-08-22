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
          <span className="font-mono text-xs sm:text-sm text-cyber-cyan tracking-wider uppercase block mb-1.5 font-bold">
            Career history
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Work experience
          </h2>
        </div>
        <div className="font-mono text-xs sm:text-sm text-slate-400 font-medium">
          Product &bull; Analytics &bull; Operations
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
              className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isExpanded
                  ? 'bg-[#0c0f18] border-cyber-cyan/40 shadow-2xl'
                  : 'bg-[#090b10] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Header Row */}
              <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <span className="text-cyber-cyan font-mono text-sm sm:text-base font-semibold">
                      at {exp.company}
                    </span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-slate-400">
                    <span>{exp.location}</span>, <span className="text-slate-300 font-medium">{exp.period}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200 font-medium">
                    {exp.badge}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-cyber-cyan' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-white/10 space-y-5 animate-in fade-in duration-150">
                  <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs sm:text-sm text-cyber-amber uppercase tracking-wider block font-bold">
                      Key deliverables
                    </span>
                    <ul className="space-y-2 font-sans text-sm sm:text-base text-slate-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-cyber-cyan font-bold text-xs mt-1">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <TrendingUp className="w-5 h-5 text-cyber-neon flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs sm:text-sm text-cyber-neon uppercase font-bold block mb-1">
                        Outcome
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.architecturalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-300"
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
