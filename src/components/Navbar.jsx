import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Download, FileText, ArrowUpRight, Menu, X, Check, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenBrief }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS (STAR)', href: '#projects' },
    { name: 'CAREER LEDGER', href: '#ledger' },
    { name: 'STACK', href: '#stack' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Security & Verification Status Bar */}
      <div className="w-full bg-[#050608] border-b border-white/[0.06] text-[11px] font-mono text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>VERIFIED FINTECH LEDGER</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="text-slate-400">TELEMETRY ID: AYUSH-2026-MBA-PROD</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <Lock className="w-3 h-3 text-blue-400" />
              <span>256-BIT ENCRYPTED TELEGRAM API</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span>UPTIME: 99.98%</span>
          </div>
        </div>
      </div>

      {/* Main Sticky FinTech Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07080B]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-[#07080B]/60 backdrop-blur-md border-b border-white/[0.04] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px] shadow-fintech-glow">
              <div className="w-full h-full bg-[#0D0E15] rounded-[11px] flex items-center justify-center font-display font-black text-sm text-white group-hover:bg-transparent transition-colors">
                AC
              </div>
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-sm tracking-wide text-white uppercase flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                PRODUCT & GROWTH ENGINE
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E1017] p-1.5 rounded-2xl border border-white/[0.06] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* 1-Page Audit Brief */}
            <button
              onClick={onOpenBrief}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold"
              title="Open 1-Page ATS Executive Brief"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>1P AUDIT</span>
            </button>

            {/* Download Statement (CV) */}
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold"
              title="Download Verified Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV / RESUME</span>
            </a>

            {/* Execute Settlement (Contact CTA) */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl fintech-btn-primary text-xs font-mono font-bold tracking-wider uppercase"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
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
              className="lg:hidden bg-[#0D0E15] border-b border-white/10 px-4 py-6 space-y-4"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                  className="w-full py-2.5 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>1-PAGE ATS AUDIT</span>
                </button>
                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>DOWNLOAD CV STATEMENT</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl fintech-btn-primary text-xs font-mono font-bold flex items-center justify-center gap-2"
                >
                  <span>EXECUTE SETTLEMENT (CONTACT)</span>
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
