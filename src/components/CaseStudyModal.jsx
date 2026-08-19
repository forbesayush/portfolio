import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Layers, FileText, BarChart3, Target, Check } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose }) {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!caseStudy) return null;

  const tabs = [
    { id: 'all', label: 'Full Casebook' },
    { id: 'problem', label: 'Problem & Context' },
    { id: 'approach', label: 'Method & Analysis' },
    { id: 'impact', label: 'Product Impact & Results' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-obsidian-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-mono text-accent dark:text-accent-dark uppercase tracking-widest font-bold">
              {caseStudy.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
              {caseStudy.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Filter Bar */}
        <div className="px-6 sm:px-8 pt-4 pb-2 bg-slate-50/80 dark:bg-obsidian-850/80 border-b border-slate-200 dark:border-white/5 flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Executive Overview & Key Stats */}
          {(activeTab === 'all' || activeTab === 'impact') && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                Executive Brief
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                {caseStudy.summary}
              </p>

              {caseStudy.keyStats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  {caseStudy.keyStats.map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 shadow-sm">
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">{stat.label}</div>
                      <div className="text-xl font-display font-bold text-slate-950 dark:text-white mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Structured Case Study Sections */}
          <div className="space-y-6">
            
            {/* The Problem */}
            {(activeTab === 'all' || activeTab === 'problem') && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400"></span>
                  01. Problem & Context
                </div>
                <div className="p-4 rounded-xl bg-red-50/50 dark:bg-obsidian-850/60 border border-red-200/60 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.problem}
                </div>
              </div>
            )}

            {/* Approach */}
            {(activeTab === 'all' || activeTab === 'approach') && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-sky-400 uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400"></span>
                  02. Approach & Method
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-obsidian-850/60 border border-blue-200/60 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.approach}
                </div>
              </div>
            )}

            {/* Analysis & Diagnostics */}
            {(activeTab === 'all' || activeTab === 'approach') && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                  03. Analysis & Diagnostics
                </div>
                <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-obsidian-850/60 border border-indigo-200/60 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.analysis}
                </div>
              </div>
            )}

            {/* Product & Strategic Impact */}
            {(activeTab === 'all' || activeTab === 'impact') && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                  04. Product & Strategic Impact
                </div>
                <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-obsidian-850/60 border border-amber-200/60 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.productImpact}
                </div>
              </div>
            )}

            {/* Verified Results */}
            {(activeTab === 'all' || activeTab === 'impact') && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                  05. Measurable Results
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-semibold leading-relaxed">
                  {caseStudy.result}
                </div>
              </div>
            )}

          </div>

          {/* Applied Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 uppercase mr-2 font-semibold">Tags:</span>
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-obsidian-850 px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Ayush Chatterjee &bull; Case Studies
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors shadow-sm"
          >
            Close Summary
          </button>
        </div>

      </div>
    </div>
  );
}
