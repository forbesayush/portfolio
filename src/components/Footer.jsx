import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-black/[0.06] py-14 text-slate-500 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8A6B3D] p-[1px]">
              <div className="w-full h-full bg-[#FFFFFF] rounded-[15px] flex items-center justify-center font-luxury font-bold text-xs text-[#8A6B3D]">
                AC
              </div>
            </div>
            <div className="text-left">
              <div className="font-luxury font-bold text-xs tracking-wider text-[#111318] uppercase">
                {personalInfo.name}
              </div>
              <div className="text-[10px] font-mono text-[#8A6B3D]">
                PRODUCT & GROWTH PRACTICE &bull; 2026
              </div>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#home" className="hover:text-black transition-colors">OVERVIEW</a>
            <span className="text-black/20">&bull;</span>
            <a href="#dashboard" className="hover:text-black transition-colors">DASHBOARD</a>
            <span className="text-black/20">&bull;</span>
            <a href="#projects" className="hover:text-black transition-colors">STAR CASEBOOKS</a>
            <span className="text-black/20">&bull;</span>
            <a href="#experience" className="hover:text-black transition-colors">EXPERIENCE</a>
            <span className="text-black/20">&bull;</span>
            <a href="#about" className="hover:text-black transition-colors">PHILOSOPHY</a>
            <span className="text-black/20">&bull;</span>
            <a href="#contact" className="hover:text-black transition-colors">CONTACT</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-black/[0.08] text-xs font-mono text-slate-700 hover:text-black hover:border-black/20 transition-all"
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
            <span className="text-slate-700 font-medium">{personalInfo.portfolioDomain}</span>
            <span>&bull;</span>
            <span>India &rarr; Global Innovation Practice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
