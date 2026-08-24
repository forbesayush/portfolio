import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { soundManager } from '../../audio/soundManager';
import { CohortRetentionChart } from '../analytics/CohortRetentionChart';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Product Management', 'Business Analytics', 'Product Strategy', 'Strategy & Consulting'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundManager.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-200 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Case studies
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight">
            Selected work
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              onMouseEnter={() => soundManager.playHover()}
              className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 active:scale-95 flex items-center justify-center ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-gradient'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: All information visible directly without modals */}
      <div className="space-y-8">
        {filteredProjects.map((project, pIdx) => (
          <div
            key={project.id}
            style={{ animationDelay: `${pIdx * 80}ms` }}
            className="rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 p-6 sm:p-8 transition-all duration-300 shadow-card hover:shadow-card-hover space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards"
          >
            {/* Header Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="font-sans text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  {project.category}
                </span>
                {project.role && (
                  <>
                    <span className="text-gray-300 text-xs">&bull;</span>
                    <span className="font-sans text-xs text-gray-700 font-medium">{project.role}</span>
                  </>
                )}
                <span className="text-gray-300 text-xs">&bull;</span>
                <span className="font-sans text-xs text-gray-500 font-medium">{project.year}</span>
              </div>

              <a
                href={project.githubUrl || 'https://github.com/forbesayush'}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 min-h-[44px] py-1 text-gray-400 hover:text-indigo-600 font-sans text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub repository</span>
              </a>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900">
                {project.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-indigo-600 mt-1 font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Core Narrative with embedded metrics */}
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Implementation & Approach */}
            <div className="p-4 sm:p-5 rounded-xl bg-indigo-50 border border-indigo-100 space-y-1.5">
              <span className="font-sans text-xs text-indigo-700 uppercase tracking-wider block font-medium">
                Analysis &amp; outcome
              </span>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            {/* Interactive Cohort Retention Chart Embedded Directly (No modal required) */}
            {project.id === 'd2c-cohort-analytics' && (
              <div className="pt-2 border-t border-gray-100 space-y-3">
                <span className="font-sans text-xs text-accent uppercase tracking-wider block font-medium">
                  Interactive cohort retention model
                </span>
                <CohortRetentionChart />
              </div>
            )}

            {/* Metrics & Deliverables */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="font-sans text-xs text-gray-500 font-sans block mb-0.5">{m.label}</span>
                  <span className="font-serif font-medium text-base sm:text-lg text-gray-900">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Tools & Frameworks */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-sans text-indigo-700 bg-indigo-50 border border-indigo-100 font-normal"
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
