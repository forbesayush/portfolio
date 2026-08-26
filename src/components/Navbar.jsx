import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, FileText, Menu, X, Sparkles } from 'lucide-react';
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
    { label: 'Overview', href: '#home' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'STAR Casebooks', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-xl border-b border-black/[0.06] py-3.5 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Luxury Gold Monogram Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#B38F5B] to-[#8A6B3D] p-[1px] shadow-sm">
            <div className="w-full h-full bg-[#FFFFFF] rounded-[15px] flex items-center justify-center font-luxury font-bold text-base text-[#8A6B3D] group-hover:bg-transparent group-hover:text-white transition-all">
              AC
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <div className="font-luxury font-bold text-base text-[#111318] tracking-wider uppercase">
              {personalInfo.name}
            </div>
            <div className="text-[10px] font-mono text-[#8A6B3D] font-semibold tracking-widest uppercase">
              Product & Growth Practice
            </div>
          </div>
        </a>

        {/* Center Floating Pill Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF] px-5 py-2 rounded-full border border-black/[0.06] shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-sans font-semibold text-slate-600 hover:text-[#8A6B3D] hover:bg-[#FAFAF8] rounded-full transition-all tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions Cluster */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenBrief}
            className="px-4 py-2 rounded-full btn-luxury-outline text-xs font-mono font-semibold flex items-center gap-1.5"
            title="Open 1-Page ATS Audit Brief"
          >
            <FileText className="w-3.5 h-3.5 text-[#B38F5B]" />
            <span>1P BRIEF</span>
          </button>

          <a
            href="/Ayush_Chatterjee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full btn-luxury-outline text-xs font-mono font-semibold flex items-center gap-1.5"
            title="Download Official Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#B38F5B]" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full btn-luxury-dark text-xs font-sans font-bold flex items-center gap-1.5 tracking-wider uppercase"
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="lg:hidden p-2 rounded-xl bg-white border border-black/10 text-slate-700 hover:text-black"
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
            className="lg:hidden bg-[#FFFFFF] border-b border-black/10 px-6 py-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-sans font-medium text-slate-800 hover:bg-[#FAFAF8] text-left"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-black/10 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                className="w-full py-2.5 rounded-full btn-luxury-outline text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#B38F5B]" />
                <span>1-PAGE EXECUTIVE BRIEF</span>
              </button>
              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full btn-luxury-outline text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#B38F5B]" />
                <span>DOWNLOAD RESUME CV</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full btn-luxury-dark text-xs font-sans font-bold flex items-center justify-center gap-2 uppercase"
              >
                <span>COMMISSION / INQUIRE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
