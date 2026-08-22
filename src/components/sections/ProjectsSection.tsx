import React, { useState } from 'react';
import { ExternalLink, Github, Layers, X, Activity } from 'lucide-react';
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
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-amber font-mono text-xs tracking-widest uppercase mb-2">
            <Layers className="w-3.5 h-3.5 text-cyber-amber" />
            <span>PROJECTS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            THINGS I'VE BUILT
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              onMouseEnter={() => soundManager.playHover()}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyber-cyan text-black font-bold shadow-glow-cyan/30'
                  : 'bg-surface-glass hover:bg-surface-glass-hover text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => handleOpenModal(project)}
            data-cursor-text="VIEW"
            className="group relative rounded-2xl bg-surface-glass border border-white/10 hover:border-cyber-cyan/50 backdrop-blur-xl p-7 transition-all duration-500 hover:shadow-spatial hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: project.accentColor }}
            />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider"
                    style={{
                      backgroundColor: `${project.accentColor}20`,
                      color: project.accentColor,
                      borderColor: `${project.accentColor}50`,
                      borderWidth: '1px',
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{project.year}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  <span className="font-mono text-xs hidden sm:inline">BLUEPRINT</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyber-cyan transition-colors mb-2">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mb-4 leading-normal">
                {project.tagline}
              </p>
              <p className="font-sans text-sm text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-black/40 border border-white/5">
                {project.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx}>
                    <span className="font-mono text-[10px] text-slate-500 uppercase block">{m.label}</span>
                    <span className="font-display font-bold text-base text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags footer */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl bg-background-secondary/95 border border-white/20 rounded-2xl shadow-spatial p-6 sm:p-8 overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              onMouseEnter={() => soundManager.playHover()}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold"
                  style={{
                    backgroundColor: `${selectedProject.accentColor}20`,
                    color: selectedProject.accentColor,
                    borderColor: `${selectedProject.accentColor}60`,
                    borderWidth: '1px',
                  }}
                >
                  {selectedProject.category}
                </span>
                <span className="font-mono text-xs text-slate-400">STATUS: DEPLOYED ({selectedProject.year})</span>
              </div>

              <div>
                <h2 className="font-display font-black text-3xl text-white mb-1">
                  {selectedProject.title}
                </h2>
                <p className="font-mono text-sm text-cyber-cyan">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="font-mono text-xs text-cyber-amber uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyber-amber" />
                  HOW IT WORKS
                </h4>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {selectedProject.architectureSummary}
                </p>
              </div>

              {/* Verified Production Metrics */}
              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                  KEY METRICS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-surface-glass border border-white/10 text-center">
                      <span className="font-mono text-[10px] text-slate-400 block mb-1">{m.label}</span>
                      <span className="font-display font-bold text-lg text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playClick()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW ON GITHUB</span>
                </a>
                <a
                  href={selectedProject.liveUrl || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playClick()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-cyan hover:bg-cyber-neon text-black font-mono font-bold text-xs transition-all shadow-glow-cyan/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW DEMO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
