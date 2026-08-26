import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, ChevronRight, CheckCircle2, Target, Zap, TrendingUp, HelpCircle, Layers } from 'lucide-react';
import { starCaseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expandedStarTab, setExpandedStarTab] = useState({}); // { [caseId]: 'all' | 'S' | 'T' | 'A' | 'R' }

  const categories = ['ALL', 'FinTech & D2C Growth', 'Product UX & Conversion', 'Consulting & Brand Strategy'];

  const filteredStudies = selectedCategory === 'ALL'
    ? starCaseStudies
    : starCaseStudies.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || c.category === selectedCategory);

  const getActiveTab = (id) => expandedStarTab[id] || 'all';

  const setTabForCase = (id, tab) => {
    setExpandedStarTab(prev => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="projects" className="py-24 relative bg-[#07080B] border-t border-b border-white/[0.08] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>STAR METHOD CASEBOOKS & PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            Commercial Projects & Product Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Deconstructed using the structured <strong className="text-white font-semibold">STAR Method</strong> (Situation &bull; Task &bull; Action &bull; Result) with verifiable unit economics telemetry.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-fintech-glow'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* STAR Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((project, idx) => {
            const currentTab = getActiveTab(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between relative overflow-hidden shadow-2xl group"
              >
                <div>
                  
                  {/* Top Meta: Badge & Category */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-blue-400 font-bold uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      CASE #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {project.summary}
                  </p>

                  {/* STAR Method Mode Switcher Tabs */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10 mb-5 overflow-x-auto text-[11px] font-mono font-bold">
                    <button
                      onClick={() => setTabForCase(project.id, 'all')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        currentTab === 'all' ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      ALL (STAR)
                    </button>
                    <button
                      onClick={() => setTabForCase(project.id, 'S')}
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                        currentTab === 'S' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>[S]</span> Situation
                    </button>
                    <button
                      onClick={() => setTabForCase(project.id, 'T')}
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                        currentTab === 'T' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>[T]</span> Task
                    </button>
                    <button
                      onClick={() => setTabForCase(project.id, 'A')}
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                        currentTab === 'A' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>[A]</span> Action
                    </button>
                    <button
                      onClick={() => setTabForCase(project.id, 'R')}
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                        currentTab === 'R' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>[R]</span> Result
                    </button>
                  </div>

                  {/* STAR Method Deep Dive Content Blocks */}
                  <div className="space-y-3 mb-6">
                    
                    {/* [S] SITUATION */}
                    {(currentTab === 'all' || currentTab === 'S') && (
                      <div className="p-4 rounded-2xl bg-black/40 border border-blue-500/20 text-xs">
                        <div className="flex items-center gap-2 font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span>[S] Situation</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-normal">
                          {project.star.situation}
                        </p>
                      </div>
                    )}

                    {/* [T] TASK */}
                    {(currentTab === 'all' || currentTab === 'T') && (
                      <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 text-xs">
                        <div className="flex items-center gap-2 font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>[T] Task & Objective</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-normal">
                          {project.star.task}
                        </p>
                      </div>
                    )}

                    {/* [A] ACTION */}
                    {(currentTab === 'all' || currentTab === 'A') && (
                      <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/20 text-xs">
                        <div className="flex items-center gap-2 font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          <span>[A] Action & Execution</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-normal">
                          {project.star.action}
                        </p>
                      </div>
                    )}

                    {/* [R] RESULT */}
                    {(currentTab === 'all' || currentTab === 'R') && (
                      <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/30 text-xs">
                        <div className="flex items-center gap-2 font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>[R] Quantifiable Result & ROI</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-normal">
                          {project.star.result}
                        </p>
                      </div>
                    )}

                  </div>

                </div>

                {/* Bottom Stats & Deliverables */}
                <div>
                  {/* KPI Telemetry Numbers */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/60 border border-white/10 mb-4">
                    {project.keyStats.map((st, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-[10px] font-mono text-slate-400 uppercase truncate">
                          {st.label}
                        </div>
                        <div className="text-base sm:text-lg font-display font-bold text-white mt-0.5">
                          {st.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
