import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Activity, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    utc: '',
    sf: '',
    tokyo: '',
    blr: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        utc: now.toUTCString().split(' ')[4] + ' UTC',
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour12: false }) + ' SFO',
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: false }) + ' TYO',
        blr: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' BLR',
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-gray-200 bg-background-secondary/80 backdrop-blur-xl mt-24">
      {/* Top Status Ribbon */}
      <div className="border-b border-gray-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-indigo-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              PORTFOLIO: ONLINE
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-1 text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              BUILT WITH REACT + THREE.JS
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-1 text-gray-600">
              <Cpu className="w-3.5 h-3.5 text-gray-500" />
              TYPESCRIPT + TAILWIND
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-gray-600">
              <Activity className="w-3 h-3 text-indigo-600" />
              <span>STATUS: LIVE</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-0 flex items-center justify-center font-serif font-medium text-xs">
                AC
              </div>
              <span className="font-serif font-medium text-lg text-gray-900 tracking-wide">
                Ayush Chatterjee
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-md leading-relaxed">
              Targeting full-time Product Management (APM/PM), Business Analytics, and Strategy Consulting roles starting 2027. MBA Candidate, Regional College of Management, Bhubaneswar.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/forbesayush"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-50 border border-gray-200 text-gray-500 hover:text-indigo-600 transition-all active:scale-95"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ayushmba"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-50 border border-gray-200 text-gray-500 hover:text-indigo-600 transition-all active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/forbesayush"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-50 border border-gray-200 text-gray-500 hover:text-indigo-600 transition-all active:scale-95"
                aria-label="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Timezones */}
          <div>
            <h4 className="font-sans text-xs text-indigo-600 tracking-wide uppercase mb-3 font-medium">
              Time zones
            </h4>
            <div className="space-y-2 font-sans text-xs text-gray-600">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">San Francisco:</span>
                <span>{times.sf || '04:14:00 SFO'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Tokyo:</span>
                <span>{times.tokyo || '20:14:00 TYO'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Bengaluru:</span>
                <span>{times.blr || '16:44:00 BLR'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Universal UTC:</span>
                <span className="text-indigo-600">{times.utc || '11:14:00 UTC'}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-xs text-indigo-600 tracking-wide uppercase mb-3 font-medium">
                Navigation
              </h4>
              <ul className="space-y-1 font-sans text-xs text-gray-500">
                <li><a href="#projects" className="py-1.5 inline-block hover:text-gray-900 transition-colors">Case studies</a></li>
                <li><a href="#skills" className="py-1.5 inline-block hover:text-gray-900 transition-colors">Skills</a></li>
                <li><a href="#experience" className="py-1.5 inline-block hover:text-gray-900 transition-colors">Experience</a></li>
                <li><a href="#diagnostics" className="py-1.5 inline-block hover:text-gray-900 transition-colors">Diagnostics</a></li>
                <li><a href="#contact" className="py-1.5 inline-block hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundManager.playHover()}
              className="mt-6 flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-sans text-gray-500 hover:text-gray-900 transition-all group active:scale-95"
            >
              <span>Return to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500">
          <p>© 2025 Ayush Chatterjee</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 hover:text-gray-600 cursor-pointer py-2">Privacy</span>
            <span className="text-gray-400 hover:text-gray-600 cursor-pointer py-2">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
