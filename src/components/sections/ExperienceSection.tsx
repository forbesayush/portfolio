import React from 'react';
import { TrendingUp } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-8 text-left scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Track Record
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Work Experience
          </h2>
        </div>
        <div className="font-sans text-xs text-slate-500 font-normal">
          Product Management &bull; Product Analytics &bull; Strategy
        </div>
      </div>

      {/* Experience Bento Cards */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 space-y-5 transition-all hover:border-slate-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
          >
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif font-semibold text-xl sm:text-2xl text-slate-900">
                    {exp.role}
                  </h3>
                  <span className="text-accent font-sans text-sm sm:text-base font-medium">
                    at {exp.company}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-500">
                  <span>{exp.location}</span> &bull; <span className="text-slate-700 font-medium">{exp.period}</span>
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-sans bg-slate-100 border border-slate-200/80 text-slate-700 font-medium self-start md:self-center">
                {exp.badge}
              </span>
            </div>

            {/* Summary */}
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {exp.summary}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-2">
              <span className="font-sans text-xs text-slate-700 uppercase tracking-wider block font-semibold">
                Key Deliverables
              </span>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-600">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Box */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-sans text-xs text-accent uppercase font-semibold block mb-0.5">
                  Business &amp; Product Impact
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {exp.architecturalImpact}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-sans font-normal bg-slate-100 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Block */}
      <div className="pt-8 border-t border-slate-200/80">
        <div className="mb-6">
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Academic Background
          </span>
          <h3 className="font-serif font-medium text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 space-y-3 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-sans bg-blue-50 text-accent border border-blue-200/60 font-semibold">
                2025 – 2027
              </span>
              <span className="font-sans text-xs text-slate-500 font-medium">Full-Time</span>
            </div>
            <h4 className="font-serif font-semibold text-xl text-slate-900">
              Master of Business Administration (MBA)
            </h4>
            <p className="text-sm font-sans text-slate-600 font-medium">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
              Specialization in IT and International Business. Focused on digital transformation, technology strategy, operations, and enterprise analytics.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 space-y-3 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-sans bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                2022 – 2025
              </span>
              <span className="font-sans text-xs text-slate-500 font-medium">Graduated</span>
            </div>
            <h4 className="font-serif font-semibold text-xl text-slate-900">
              Bachelor of Business Administration (BBA)
            </h4>
            <p className="text-sm font-sans text-slate-600 font-medium">
              Regional College of Management, Bhubaneswar
            </p>
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
              Core foundation in business statistics, quantitative techniques, financial accounting, and organizational marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
