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
    <footer className="relative z-10 border-t border-white/10 bg-background-secondary/80 backdrop-blur-xl mt-24">
      {/* Top Status Ribbon */}
      <div className="border-b border-white/5 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-cyber-neon">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
              PORTFOLIO: ONLINE
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
              BUILT WITH REACT + THREE.JS
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-cyber-amber" />
              TYPESCRIPT + TAILWIND
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-300">
              <Activity className="w-3 h-3 text-cyber-neon" />
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
              <div className="w-7 h-7 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center font-mono font-bold text-cyber-cyan text-xs">
                AC
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                AYUSH CHATTERJEE
              </span>
            </div>
            <p className="text-sm text-slate-400 font-sans max-w-md leading-relaxed">
              MBA candidate focusing on product management, business analytics, and strategy. Interested in building products backed by customer research and data.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/forbesayush"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyber-cyan/10 border border-white/10 hover:border-cyber-cyan/40 text-slate-400 hover:text-cyber-cyan transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/forbesayush"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyber-cyan/10 border border-white/10 hover:border-cyber-cyan/40 text-slate-400 hover:text-cyber-cyan transition-all"
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
                className="p-2 rounded-lg bg-white/5 hover:bg-cyber-cyan/10 border border-white/10 hover:border-cyber-cyan/40 text-slate-400 hover:text-cyber-cyan transition-all"
                aria-label="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Timezones */}
          <div>
            <h4 className="font-mono text-xs text-cyber-cyan tracking-wider uppercase mb-3">
              Time zones
            </h4>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">San Francisco:</span>
                <span>{times.sf || '04:14:00 SFO'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Tokyo:</span>
                <span>{times.tokyo || '20:14:00 TYO'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Bengaluru:</span>
                <span>{times.blr || '16:44:00 BLR'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Universal UTC:</span>
                <span className="text-cyber-neon">{times.utc || '11:14:00 UTC'}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs text-cyber-amber tracking-wider uppercase mb-3">
                Navigation
              </h4>
              <ul className="space-y-1.5 font-mono text-xs text-slate-400">
                <li><a href="#activity" className="hover:text-cyber-cyan transition-colors">Activity</a></li>
                <li><a href="#projects" className="hover:text-cyber-cyan transition-colors">Case studies</a></li>
                <li><a href="#skills" className="hover:text-cyber-cyan transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-cyber-cyan transition-colors">Experience</a></li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundManager.playHover()}
              className="mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-cyber-cyan/10 border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-all group"
            >
              <span>Return to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <p>© 2025 Ayush Chatterjee</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
