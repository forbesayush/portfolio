import React from 'react';
import { ArrowUp, ShieldCheck, Lock, Globe2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] py-14 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-display font-bold text-xs text-white">
              AC
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-xs tracking-wider text-white uppercase">
                {personalInfo.name}
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                PRODUCT & GROWTH ENGINE &bull; 2026
              </div>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <span className="text-white/20">&bull;</span>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <span className="text-white/20">&bull;</span>
            <a href="#projects" className="hover:text-white transition-colors">STAR PROJECTS</a>
            <span className="text-white/20">&bull;</span>
            <a href="#ledger" className="hover:text-white transition-colors">CAREER LEDGER</a>
            <span className="text-white/20">&bull;</span>
            <a href="#stack" className="hover:text-white transition-colors">STACK</a>
            <span className="text-white/20">&bull;</span>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Ayush Chatterjee. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-medium">{personalInfo.portfolioDomain}</span>
            <span>&bull;</span>
            <span>India &rarr; Global Innovation Practice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
