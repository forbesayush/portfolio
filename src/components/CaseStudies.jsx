import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Target, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { starCaseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  const [activeStarTab, setActiveStarTab] = useState({});

  const getTab = (id) => activeStarTab[id] || 'all';
  const setTab = (id, tab) => setActiveStarTab(prev => ({ ...prev, [id]: tab }));

  return (
    <section id="projects" className="py-20 bg-[#050608] text-white overflow-hidden">
      
      {/* Editorial Marquee Ticker Header (Template 4 Style: "Works * Works * Works") */}
      <div className="w-full bg-[#F4F2EB] text-black py-4 overflow-hidden mb-16 select-none border-t border-b border-black">
        <div className="flex w-max whitespace-nowrap font-syne font-black text-2xl sm:text-4xl tracking-tight uppercase animate-marquee-slow">
          <span className="pr-12">Works &bull; Casebooks &bull; Works &bull; Casebooks &bull; Works &bull; Casebooks &bull; Works &bull; Casebooks &nbsp;</span>
          <span className="pr-12">Works &bull; Casebooks &bull; Works &bull; Casebooks &bull; Works &bull; Casebooks &bull; Works &bull; Casebooks &nbsp;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            <span>STRUCTURED STAR METHOD CASEBOOKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-black text-white uppercase tracking-tight mb-4">
            Proven Commercial Results.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed font-normal">
            Every initiative is deconstructed through the <strong className="text-white font-semibold">STAR Method</strong> (Situation &bull; Task &bull; Action &bull; Result) with verified percentage ROI.
          </p>
        </div>

        {/* Checkerboard Project Grid (Template 4 Style) */}
        <div className="space-y-12">
          {starCaseStudies.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const currentTab = getTab(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-[#0B0D12] border border-white/[0.1] overflow-hidden hover:border-orange-500/40 transition-colors shadow-2xl"
              >
                
                {/* Visual / Highlight Panel (5 Cols) */}
                <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#121520] to-[#0B0D12] border-b lg:border-b-0 ${
                  isEven ? 'lg:border-r border-white/[0.08]' : 'lg:order-last lg:border-l border-white/[0.08]'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        CASE #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white uppercase tracking-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Key Stats Chips */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/60 border border-white/10 mb-5">
                      {project.keyStats.map((st, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <div className="text-[9px] font-mono text-slate-400 uppercase truncate">{st.label}</div>
                          <div className="text-base sm:text-lg font-syne font-bold text-orange-400 mt-0.5">{st.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/[0.06]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* STAR Method Breakdown Panel (7 Cols) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    
                    {/* Vertical Meta Header & Tabs */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                      <div className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-widest">
                        [ {project.category} ] &bull; [ VERIFIED ROI ]
                      </div>

                      {/* Tab Switcher */}
                      <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono font-bold">
                        <button
                          onClick={() => setTab(project.id, 'all')}
                          className={`px-3 py-1 rounded-lg transition-colors ${
                            currentTab === 'all' ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          ALL
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'S')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'S' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          [S]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'T')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'T' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          [T]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'A')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'A' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          [A]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'R')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'R' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          [R]
                        </button>
                      </div>
                    </div>

                    {/* STAR Method Breakdown Blocks */}
                    <div className="space-y-3.5 text-xs font-sans">
                      {(currentTab === 'all' || currentTab === 'S') && (
                        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                          <div className="font-mono font-bold text-orange-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                            <span>[S] Situation</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed font-normal">{project.star.situation}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'T') && (
                        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                          <div className="font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>[T] Task & Targets</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed font-normal">{project.star.task}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'A') && (
                        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                          <div className="font-mono font-bold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            <span>[A] Action & Systems</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed font-normal">{project.star.action}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'R') && (
                        <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/25">
                          <div className="font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>[R] Verified Quantifiable Result</span>
                          </div>
                          <p className="text-slate-200 leading-relaxed font-normal">{project.star.result}</p>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 mt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-2">
                      Key Deliverables Built:
                    </div>
                    <div className="space-y-1">
                      {project.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="text-[11px] font-sans text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
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
