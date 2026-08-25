import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Sparkles, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { getIdentifiedVisitor } from '../utils/telegramTracker';

export default function Navbar({ isDark, onToggleTheme, onOpenBrief }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vipVisitor, setVipVisitor] = useState(null);
  const [showVipBanner, setShowVipBanner] = useState(true);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CASE STUDIES', href: '#case-studies' },
    { name: 'STRATEGY', href: '#strategy' },
    { name: 'PRODUCT', href: '#product' },
    { name: 'GLOBAL', href: '#global' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const identified = getIdentifiedVisitor();
    if (identified && (identified.name || identified.company)) {
      setVipVisitor(identified);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* VIP Recruiter Personalized Welcome Bar */}
      {vipVisitor && showVipBanner && (
        <div className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-xs font-mono py-1.5 px-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 max-w-7xl mx-auto truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 animate-pulse" />
            <span className="truncate">
              Welcome, <strong className="font-bold text-amber-200">{vipVisitor.name || 'VIP Guest'}</strong>
              {vipVisitor.company ? ` (${vipVisitor.company})` : ''} &bull; Viewing Ayush Chatterjee's Executive Portfolio
            </span>
          </div>
          <button 
            onClick={() => setShowVipBanner(false)}
            className="p-1 hover:bg-white/20 rounded text-white/80 hover:text-white transition-colors"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <header className={`fixed ${vipVisitor && showVipBanner ? 'top-8' : 'top-0'} left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-obsidian-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-card-dark py-3.5' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Monogram & Title */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Ayush Chatterjee Home"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-obsidian-800 border border-slate-800 dark:border-white/10 flex items-center justify-center font-display font-bold text-sm tracking-wider text-white dark:text-slate-100 group-hover:bg-accent dark:group-hover:text-accent transition-all shadow-sm">
                AC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-accent dark:group-hover:text-white transition-colors uppercase">
                  Ayush Chatterjee
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 dark:emerald-400 animate-pulse"></span>
                  PRODUCT &bull; STRATEGY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/70 dark:bg-obsidian-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 shadow-2xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-obsidian-950 font-bold shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="hidden sm:flex items-center gap-2">
              
              {/* 1-Page Brief Modal Trigger */}
              <button
                onClick={onOpenBrief}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 text-accent dark:text-accent-dark text-xs font-mono font-bold hover:bg-blue-100 dark:hover:bg-accent-dark/20 transition-all shadow-2xs"
                title="View ATS & Recruiter 1-Page Brief"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>1P BRIEF</span>
              </button>

              {/* Resume / CV Download Button beside Connect */}
              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:text-slate-950 dark:hover:text-white transition-all duration-200 shadow-2xs group"
                title="Download / View Official CV"
              >
                <Download className="w-3.5 h-3.5 text-accent dark:text-accent-dark group-hover:translate-y-0.5 transition-transform" />
                <span>RESUME</span>
              </a>

              {/* Theme Toggle Button */}
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

              {/* Connect CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-200 shadow-sm"
              >
                <span>CONNECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider ${
                    activeSection === link.href.substring(1)
                      ? 'bg-accent/10 text-accent dark:text-accent-dark font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-obsidian-850'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-2xs"
              >
                <Download className="w-4 h-4 text-accent dark:text-accent-dark" />
                <span>DOWNLOAD OFFICIAL CV / RESUME</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 text-accent dark:text-accent-dark font-mono font-bold text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>OPEN 1-PAGE EXECUTIVE BRIEF</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
