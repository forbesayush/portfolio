import React from 'react';
import { TrendingUp, Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-200 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Career history
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight">
            Work experience
          </h2>
        </div>
        <div className="font-sans text-xs sm:text-sm text-gray-500 font-normal">
          Product Management &bull; Product Analytics &bull; Strategy
        </div>
      </div>

      {/* Experience List: All details visible directly without accordion */}
      <div className="space-y-6">
        {experiences.map((exp, eIdx) => (
          <div
            key={exp.id}
            style={{ animationDelay: `${eIdx * 80}ms` }}
            className="rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 p-6 sm:p-8 space-y-5 transition-all duration-200 shadow-card hover:shadow-card-hover animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards"
          >
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl text-gray-900">
                    {exp.role}
                  </h3>
                  <span className="text-indigo-600 font-sans text-sm sm:text-base font-normal">
                    at {exp.company}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-500">
                  <span>{exp.location}</span> &bull; <span className="text-gray-600 font-normal">{exp.period}</span>
                </p>
              </div>

              <span className="px-3 py-1 rounded-lg text-xs font-sans bg-indigo-50 border border-indigo-100 text-indigo-700 font-normal self-start md:self-center">
                {exp.badge}
              </span>
            </div>

            {/* Summary */}
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {exp.summary}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-2">
              <span className="font-sans text-xs text-indigo-600 uppercase tracking-wider block font-medium">
                Key deliverables
              </span>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-gray-600">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5">
                    <span className="text-indigo-600 text-xs mt-1">▹</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Box */}
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-3.5">
              <TrendingUp className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-sans text-xs text-indigo-600 uppercase font-medium block mb-0.5">
                  Outcome
                </span>
                <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {exp.architecturalImpact}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-sans font-normal bg-gray-100 border border-gray-200 text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Block */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <div className="mb-8">
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Academic foundation
          </span>
          <h3 className="font-serif font-normal text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 space-y-3 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-sans bg-indigo-50 text-indigo-600 border border-indigo-200 font-medium">
                2025 to 2027
              </span>
              <span className="font-sans text-xs text-gray-500 font-normal">Full-Time</span>
            </div>
            <h4 className="font-serif font-medium text-xl text-gray-900">
              Master of Business Administration (MBA)
            </h4>
            <p className="text-sm font-sans text-gray-600 font-normal">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              Specialization in IT and International Business. Coursework in technology management, business strategy, and enterprise information systems.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 space-y-3 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-sans bg-gray-100 text-gray-600 border border-gray-200 font-normal">
                2022 to 2025
              </span>
              <span className="font-sans text-xs text-gray-500 font-normal">Graduated</span>
            </div>
            <h4 className="font-serif font-medium text-xl text-gray-900">
              Bachelor of Business Administration (BBA)
            </h4>
            <p className="text-sm font-sans text-gray-600 font-normal">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              Business statistics, marketing management, and financial accounting fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
