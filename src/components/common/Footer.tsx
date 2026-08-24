import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white mt-20 sm:mt-28 py-12 px-4 sm:px-8 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-[10px]">
              AC
            </div>
            <span className="font-serif font-semibold text-base text-slate-900">
              Ayush Chatterjee
            </span>
          </div>
          <p className="text-xs text-slate-500 font-sans">
            MBA Candidate (2027) &bull; Regional College of Management, Bhubaneswar
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-slate-600">
          <a
            href="mailto:ayushchatterjee.edu@gmail.com"
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/ayushmba"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-accent" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/forbesayush"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-accent" />
            <span>GitHub</span>
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-900 pl-2 border-l border-slate-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
