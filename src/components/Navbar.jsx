import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Download, FileText, ArrowUpRight, Menu, X, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenBrief, onOpenSpotlight }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#home' },
    { label: 'STAR Projects', href: '#projects' },
    { label: 'Experience Ledger', href: '#ledger' },
    { label: 'Capability Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top OS Chrome Bar */}
      <div className="w-full bg-[#06070B] border-b border-white/[0.06] text-[11px] font-mono text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Window Traffic Lights & Studio Version */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-white/20">&bull;</span>
            <span className="text-slate-300 font-semibold flex items-center gap-1">
              <Terminal className="w-3 h-3 text-indigo-400" />
              <span>AyushOS &bull; Product & Growth Studio v2.6</span>
            </span>
          </div>

          {/* Right Status Indicator & Clock */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE & OPEN TO GLOBAL ROLES</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="text-slate-300">{timeString} (LOCAL)</span>
          </div>

        </div>
      </div>

      {/* Main Sticky App Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08090E]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-[#08090E]/60 backdrop-blur-md border-b border-white/[0.04] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* App Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-[1px] shadow-glow-indigo">
              <div className="w-full h-full bg-[#0D0F18] rounded-[15px] flex items-center justify-center font-display font-black text-sm text-white group-hover:bg-transparent transition-colors">
                AC
              </div>
            </div>
            <div className="text-left">
              <div className="font-display font-extrabold text-sm tracking-wide text-white uppercase flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
              </div>
              <div className="text-[10px] font-mono text-indigo-400">
                PRODUCT & GROWTH OS
              </div>
            </div>
          </a>

          {/* Segmented Controller Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E101A] p-1.5 rounded-2xl border border-white/[0.06] shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster & Spotlight Trigger */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Spotlight Command Palette Trigger */}
            <button
              onClick={onOpenSpotlight}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all group"
              title="Search Spotlight (⌘K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-indigo-400" />
              <span>Search</span>
              <span className="app-kbd group-hover:border-indigo-400/40">⌘K</span>
            </button>

            {/* 1-Page ATS Audit */}
            <button
              onClick={onOpenBrief}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl app-btn-secondary text-xs font-mono font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>1P AUDIT</span>
            </button>

            {/* CV Download */}
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl app-btn-secondary text-xs font-mono font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV / RESUME</span>
            </a>

            {/* Direct Connect */}
            <a
              href="#contact"
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl app-btn-primary text-xs font-mono font-bold uppercase tracking-wider"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0D0F18] border-b border-white/10 px-4 py-6 space-y-4"
            >
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSpotlight(); }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-indigo-400" />
                  <span>Spotlight Command Search</span>
                </div>
                <span className="app-kbd">⌘K</span>
              </button>

              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                  className="w-full py-2.5 rounded-xl app-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>1-PAGE ATS AUDIT BRIEF</span>
                </button>
                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl app-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>DOWNLOAD VERIFIED RESUME</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl app-btn-primary text-xs font-mono font-bold flex items-center justify-center gap-2"
                >
                  <span>CONNECT DIRECTLY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
