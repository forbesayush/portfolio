import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Layers, FileText, BarChart3, Target, Check, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
      
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl shadow-dock-light dark:shadow-dock-dark overflow-y-auto flex flex-col linear-card"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0E1015]/95 backdrop-blur-xl px-6 py-4 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <div className="space-y-0.5 text-left">
            <span className="text-[10px] font-mono text-linear-brand dark:text-linear-accent uppercase tracking-widest font-semibold">
              {caseStudy.badge}
            </span>
            <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
              {caseStudy.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation Filter Bar */}
        <div className="px-6 pt-3 pb-2 bg-black/[0.01] dark:bg-white/[0.01] border-b border-black/[0.06] dark:border-white/[0.08] flex items-center gap-1.5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-md text-xs font-mono font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
                  : 'text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-left">
          
          {/* Executive Overview & Key Stats */}
          {(activeTab === 'all' || activeTab === 'impact') && (
            <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1.5 font-medium">
                Executive Brief
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                {caseStudy.summary}
              </p>

              {caseStudy.keyStats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.08]">
                  {caseStudy.keyStats.map((stat, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-[#08090A] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase font-medium">{stat.label}</div>
                      <div className="text-lg font-display font-bold text-zinc-950 dark:text-white mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Structured Case Study Sections */}
          <div className="space-y-4">
            
            {/* The Problem */}
            {(activeTab === 'all' || activeTab === 'problem') && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  01. Problem & Context
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.problem}
                </div>
              </div>
            )}

            {/* Approach */}
            {(activeTab === 'all' || activeTab === 'approach') && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-linear-brand"></span>
                  02. Approach & Method
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.approach}
                </div>
              </div>
            )}

            {/* Analysis & Diagnostics */}
            {(activeTab === 'all' || activeTab === 'approach') && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                  03. Analysis & Diagnostics
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.analysis}
                </div>
              </div>
            )}

            {/* Product & Strategic Impact */}
            {(activeTab === 'all' || activeTab === 'impact') && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  04. Product & Strategic Impact
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.productImpact}
                </div>
              </div>
            )}

            {/* Verified Results */}
            {(activeTab === 'all' || activeTab === 'impact') && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  05. Measurable Results
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-medium leading-relaxed">
                  {caseStudy.result}
                </div>
              </div>
            )}

          </div>

          {/* Applied Tags */}
          <div className="pt-3.5 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase mr-1">Tags:</span>
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-white dark:bg-[#0E1015] px-6 py-3.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            Ayush Chatterjee &bull; Case Studies
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 font-medium text-xs uppercase tracking-wider hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors"
          >
            Close Summary
          </button>
        </div>

      </motion.div>
    </div>
  );
}
