import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] py-10 text-xs font-mono text-slate-500">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">Ayush Chatterjee</span>
          <span>&bull;</span>
          <span>Product & Growth Strategist</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:text-slate-300 transition-colors">Case Studies</a>
          <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <button
            onClick={scrollToTop}
            className="hover:text-slate-300 transition-colors flex items-center gap-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
