import React from 'react';
import { Download, FileText, Send, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function QuickActionsDock({ onOpenBrief }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-full bg-[#FFFFFF]/90 backdrop-blur-2xl border border-black/[0.1] shadow-xl">
      
      {/* 1P Audit Brief */}
      <button
        onClick={onOpenBrief}
        className="p-2.5 rounded-full bg-[#FAFAF8] hover:bg-[#F4EFE6] text-slate-700 hover:text-black transition-all text-xs font-mono flex items-center gap-1.5 border border-black/[0.04]"
        title="Open 1-Page ATS Audit Brief"
      >
        <FileText className="w-4 h-4 text-[#8A6B3D]" />
        <span className="hidden sm:inline font-semibold">1P BRIEF</span>
      </button>

      {/* Download Statement CV */}
      <a
        href="/Ayush_Chatterjee_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-[#FAFAF8] hover:bg-[#F4EFE6] text-slate-700 hover:text-black transition-all text-xs font-mono flex items-center gap-1.5 border border-black/[0.04]"
        title="Download Official Resume PDF"
      >
        <Download className="w-4 h-4 text-[#8A6B3D]" />
        <span className="hidden sm:inline font-semibold">CV</span>
      </a>

      {/* Settle / Contact */}
      <a
        href="#contact"
        className="p-2.5 px-4 rounded-full btn-luxury-dark text-white transition-all text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm"
        title="Direct Contact Hub"
      >
        <Send className="w-3.5 h-3.5 text-amber-300" />
        <span className="hidden sm:inline">INQUIRE</span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-full bg-[#FAFAF8] hover:bg-[#F4EFE6] text-slate-500 hover:text-black transition-all border border-black/[0.04]"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
