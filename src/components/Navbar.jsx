import React, { useState, useEffect } from 'react';
import { Download, FileText, ArrowUpRight, Menu, X, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenBrief, onOpenOmniroute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Case Studies', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
      isScrolled ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08]' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="font-semibold text-sm text-slate-100 tracking-tight">
            Ayush Chatterjee
          </span>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] hidden sm:inline">
            Product &bull; Growth
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Omniroute Studio Trigger */}
          <button
            onClick={onOpenOmniroute}
            className="text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5"
            title="Open Omniroute Multi-Model Developer Studio"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Omniroute Hub</span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBrief}
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
            title="View 1-Page Executive ATS Brief"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>1P Brief</span>
          </button>

          <a
            href="/Ayush_Chatterjee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="text-xs font-medium text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden p-1.5 text-slate-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1118] border-b border-white/[0.08] px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-slate-300 hover:text-white py-1.5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOmniroute(); }}
              className="text-xs font-medium text-orange-400 py-1.5 text-left flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Omniroute Developer Studio</span>
            </button>
          </nav>
          <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
              className="text-xs text-slate-300 py-1.5 px-3 rounded bg-white/[0.04] flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1P Brief</span>
            </button>
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 py-1.5 px-3 rounded bg-white/[0.04] flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
