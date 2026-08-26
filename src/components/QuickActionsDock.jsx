import React from 'react';
import { Download, FileText, Send, ArrowUp, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function QuickActionsDock({ onOpenBrief }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-2xl bg-[#0D0E15]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl">
      
      {/* 1P Audit Brief */}
      <button
        onClick={onOpenBrief}
        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
        title="Open 1-Page ATS Audit Brief"
      >
        <FileText className="w-4 h-4 text-blue-400" />
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
        className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-mono font-bold flex items-center gap-1.5 shadow-fintech-glow"
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
