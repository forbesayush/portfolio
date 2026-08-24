import React, { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { CohortRetentionChart } from '../analytics/CohortRetentionChart';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Product Management', 'Business Analytics', 'Product Strategy', 'Strategy & Consulting'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="space-y-8 text-left scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Case Studies &amp; Teardowns
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 transition-all hover:border-slate-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-6"
          >
            {/* Header Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="font-sans text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                {project.role && (
                  <>
                    <span className="text-slate-300 text-xs">&bull;</span>
                    <span className="font-sans text-xs text-slate-700 font-medium">{project.role}</span>
                  </>
                )}
                <span className="text-slate-300 text-xs">&bull;</span>
                <span className="font-sans text-xs text-slate-500 font-medium">{project.year}</span>
              </div>

              <a
                href={project.githubUrl || 'https://github.com/forbesayush'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 font-sans text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1">
              <h3 className="font-serif font-medium text-2xl sm:text-3xl text-slate-900">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-accent font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Core Narrative */}
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Implementation & Approach Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
              <span className="font-sans text-xs text-slate-700 uppercase tracking-wider block font-semibold">
                Strategic Architecture &amp; Execution
              </span>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            {/* Interactive Cohort Retention Chart Embedded Directly */}
            {project.id === 'd2c-cohort-analytics' && (
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="font-sans text-xs text-slate-700 uppercase tracking-wider block font-semibold">
                  Live Interactive Retention Cohort Model (Select Brand):
                </span>
                <CohortRetentionChart />
              </div>
            )}

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <span className="font-sans text-[11px] text-slate-500 block mb-0.5 font-medium">{m.label}</span>
                  <span className="font-serif font-semibold text-base sm:text-lg text-slate-900">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Framework Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-sans text-slate-600 bg-slate-100 font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
