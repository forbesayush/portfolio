import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { soundManager } from '../../audio/soundManager';
import { CohortRetentionChart } from '../analytics/CohortRetentionChart';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Product Management', 'Business Analytics', 'Operations & Strategy', 'Strategy & Consulting'];

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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Case studies
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
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
                  ? 'bg-accent text-white shadow-accent'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
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
            className="rounded-2xl bg-background-card border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards"
          >
            {/* Header Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-sans text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-slate-600 text-xs">&bull;</span>
                <span className="font-sans text-xs text-slate-400 font-medium">{project.year}</span>
              </div>

              <a
                href={project.githubUrl || 'https://github.com/forbesayush'}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 min-h-[44px] py-1 text-slate-400 hover:text-accent font-sans text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub repository</span>
              </a>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-accent mt-1 font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Core Narrative with embedded metrics */}
            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Implementation & Approach */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="font-sans text-xs text-accent uppercase tracking-wider block font-medium">
                Analysis &amp; outcome
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            {/* Interactive Cohort Retention Chart Embedded Directly (No modal required) */}
            {project.id === 'd2c-cohort-analytics' && (
              <div className="pt-2 border-t border-white/5 space-y-3">
                <span className="font-sans text-xs text-accent uppercase tracking-wider block font-medium">
                  Interactive cohort retention model
                </span>
                <CohortRetentionChart />
              </div>
            )}

            {/* Metrics & Deliverables */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-sans text-xs text-slate-400 font-normal block mb-0.5">{m.label}</span>
                  <span className="font-serif font-medium text-base sm:text-lg text-white">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Tools & Frameworks */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-sans text-slate-300 bg-white/5 border border-white/5 font-normal"
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

