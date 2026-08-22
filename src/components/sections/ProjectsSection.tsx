import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { soundManager } from '../../audio/soundManager';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Systems');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All Systems', 'AI Systems', 'Spatial & WebGL', 'Distributed Systems', 'Quantum & Security'];

  const filteredProjects = activeCategory === 'All Systems'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundManager.playClick();
    setActiveCategory(cat);
  };

  const handleOpenModal = (project: Project) => {
    soundManager.playModalOpen();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    soundManager.playModalClose();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6 text-left">
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 ${
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

      {/* Asymmetric Projects Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {filteredProjects.map((project, idx) => {
          const colSpan = idx % 3 === 0 ? 'lg:col-span-7' : idx % 3 === 1 ? 'lg:col-span-5' : 'lg:col-span-12';

          return (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor-text="VIEW"
              className={`${colSpan} group rounded-2xl bg-background-card border border-white/10 hover:border-accent/40 p-7 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-xl`}
            >
              <div className="space-y-4 text-left">
                {/* Header Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-slate-600 text-xs">&bull;</span>
                    <span className="font-sans text-xs text-slate-400 font-medium">{project.year}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-accent font-sans text-xs font-medium transition-colors">
                    <span>Read case</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title & Tagline in Serif */}
                <div>
                  <h3 className="font-serif font-medium text-2xl sm:text-3xl text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1.5 font-normal">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Clean Quantitative Results */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="font-sans text-xs text-slate-400 font-normal block mb-0.5">{m.label}</span>
                      <span className="font-serif font-medium text-base sm:text-lg text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-white/5">
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
          );
        })}
      </div>

      {/* Blueprint Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl bg-[#090b10] border border-white/20 rounded-xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              onMouseEnter={() => soundManager.playHover()}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyber-cyan font-bold uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-slate-600 font-mono text-xs">/</span>
                <span className="font-mono text-xs text-slate-400">{selectedProject.year}</span>
              </div>

              <div>
                <h2 className="font-display font-black text-3xl text-white mb-1">
                  {selectedProject.title}
                </h2>
                <p className="font-mono text-sm text-slate-300">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-cyber-amber uppercase tracking-wider block mb-2 font-bold">
                  HOW IT WORKS
                </span>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {selectedProject.architectureSummary}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3 font-bold">
                  KEY METRICS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <span className="font-mono text-[10px] text-slate-400 block mb-0.5">{m.label}</span>
                      <span className="font-display font-bold text-base text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl || 'https://github.com/forbesayush'}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
