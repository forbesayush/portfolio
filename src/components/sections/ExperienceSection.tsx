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
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Career history
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Work experience
          </h2>
        </div>
        <div className="font-sans text-xs sm:text-sm text-slate-400 font-normal">
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
                  ? 'bg-background-card border-accent/40 shadow-2xl'
                  : 'bg-background-card border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Header Row */}
              <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-serif font-medium text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <span className="text-accent font-sans text-sm sm:text-base font-normal">
                      at {exp.company}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-400">
                    <span>{exp.location}</span> &bull; <span className="text-slate-300 font-normal">{exp.period}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-white/5 border border-white/10 text-slate-300 font-normal">
                    {exp.badge}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-accent' : ''
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
                    <span className="font-sans text-xs text-accent uppercase tracking-wider block font-medium">
                      Key deliverables
                    </span>
                    <ul className="space-y-2 font-sans text-sm sm:text-base text-slate-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-accent text-xs mt-1">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-xs text-accent uppercase font-medium block mb-1">
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
                        className="px-2.5 py-1 rounded-md text-xs font-sans font-normal bg-white/5 border border-white/10 text-slate-300"
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

      {/* Education Block */}
      <div className="mt-16 pt-12 border-t border-white/10">
        <div className="mb-8">
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Academic foundation
          </span>
          <h3 className="font-serif font-normal text-3xl sm:text-4xl text-white tracking-tight">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-sans bg-accent/10 text-accent border border-accent/30 font-medium">
                2025 to 2027
              </span>
              <span className="font-sans text-xs text-slate-400 font-normal">Full-Time</span>
            </div>
            <h4 className="font-serif font-medium text-xl text-white">
              Master of Business Administration (MBA)
            </h4>
            <p className="text-sm font-sans text-slate-300 font-normal">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Specialization in Information Technology and International Business. Coursework in technology management, business strategy, and enterprise information systems.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-sans bg-white/5 text-slate-300 border border-white/10 font-normal">
                2022 to 2025
              </span>
              <span className="font-sans text-xs text-slate-400 font-normal">Graduated</span>
            </div>
            <h4 className="font-serif font-medium text-xl text-white">
              Bachelor of Business Administration (BBA)
            </h4>
            <p className="text-sm font-sans text-slate-300 font-normal">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Focus on business administration, quantitative business statistics, marketing management, and financial accounting fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
