import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, FileText, Menu, X, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenBrief }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects (STAR)', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050608]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram Logo (Template 1 & 2 Style) */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-[1px] shadow-glow-orange-sm">
            <div className="w-full h-full bg-[#0B0D12] rounded-[15px] flex items-center justify-center font-syne font-black text-base text-orange-400 group-hover:text-white transition-colors">
              AC
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <div className="font-syne font-bold text-sm text-white uppercase tracking-wider">
              {personalInfo.name}
            </div>
            <div className="text-[10px] font-mono text-orange-400 font-semibold tracking-wide">
              PRODUCT & GROWTH
            </div>
          </div>
        </a>

        {/* Center Floating Pill Navigation (Template 3 Style) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0D0F16]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/[0.08] shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-sans font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions Cluster */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenBrief}
            className="px-3.5 py-2 rounded-full btn-dark-outline text-xs font-mono font-semibold flex items-center gap-1.5"
            title="Open 1-Page ATS Audit Brief"
          >
            <FileText className="w-3.5 h-3.5 text-orange-400" />
            <span>1P BRIEF</span>
          </button>

          <a
            href="/Ayush_Chatterjee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-full btn-dark-outline text-xs font-mono font-semibold flex items-center gap-1.5"
            title="Download Official CV PDF"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full btn-orange-glow text-xs font-sans font-bold flex items-center gap-1.5 tracking-wider uppercase"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0D12] border-b border-white/10 px-6 py-6 space-y-4"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-sans font-medium text-slate-200 hover:bg-white/[0.06] text-left"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                className="w-full py-2.5 rounded-full btn-dark-outline text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>1-PAGE ATS BRIEF</span>
              </button>
              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full btn-dark-outline text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>DOWNLOAD RESUME CV</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full btn-orange-glow text-xs font-sans font-bold flex items-center justify-center gap-2 uppercase"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
