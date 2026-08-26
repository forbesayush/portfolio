import React from 'react';
import { Search, Download, FileText, Send, ArrowUp, Command } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function QuickActionsDock({ onOpenBrief, onOpenSpotlight }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-2xl bg-[#0E101A]/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl">
      
      {/* Spotlight Trigger */}
      <button
        onClick={onOpenSpotlight}
        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
        title="Search (⌘K)"
      >
        <Search className="w-4 h-4 text-indigo-400" />
        <span className="hidden sm:inline">⌘K</span>
      </button>

      {/* 1P Audit Brief */}
      <button
        onClick={onOpenBrief}
        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
        title="Open 1-Page ATS Audit Brief"
      >
        <FileText className="w-4 h-4 text-indigo-400" />
        <span className="hidden sm:inline">1P AUDIT</span>
      </button>

      {/* Download Statement CV */}
      <a
        href="/Ayush_Chatterjee_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
        title="Download Official Resume PDF"
      >
        <Download className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline">CV</span>
      </a>

      {/* Settle / Contact */}
      <a
        href="#contact"
        className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all text-xs font-mono font-bold flex items-center gap-1.5 shadow-glow-indigo"
        title="Direct Contact Hub"
      >
        <Send className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">CONNECT</span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
