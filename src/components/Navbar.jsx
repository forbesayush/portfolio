import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, onToggleTheme, onOpenBrief }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                PRODUCT &bull; STRATEGY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-obsidian-900/60 p-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] shadow-sm backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white/10 dark:text-white shadow-sm dark:border dark:border-white/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Persistent Actions & Theme Switcher */}
          <div className="flex items-center gap-2.5">
            
            {/* Quick 1P Brief Trigger */}
            <button
              onClick={onOpenBrief}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold hover:border-accent hover:text-accent transition-all"
              title="Open 1-Page Summary"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1P Brief</span>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs tracking-wider uppercase hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-obsidian-950 transition-all duration-200 shadow-sm group"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/98 dark:bg-obsidian-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-6 transition-all shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-accent/15 text-accent border border-blue-200 dark:border-accent/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-obsidian-850 text-slate-900 dark:text-white font-bold text-xs tracking-wider uppercase border border-slate-200 dark:border-white/10"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW 1-PAGE EXECUTIVE BRIEF</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-accent text-white dark:text-obsidian-950 font-bold text-xs tracking-wider uppercase shadow-md"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
