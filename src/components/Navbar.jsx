import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { name: 'FUNNEL', href: '#funnel' },
    { name: 'CASEBOOKS', href: '#case-studies' },
    { name: 'MARKETING STACK', href: '#skills' },
    { name: 'STRATEGY', href: '#strategy' },
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
      <AnimatePresence>
        {vipVisitor && showVipBanner && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className="fixed top-0 inset-x-0 z-50 bg-[#12141A] text-zinc-200 text-xs font-mono py-2 px-4 flex items-center justify-between border-b border-white/10 shadow-md"
          >
            <div className="flex items-center gap-2 max-w-7xl mx-auto truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="truncate">
                Marketing Recruiter: <strong className="font-semibold text-white">{vipVisitor.name || 'Executive Guest'}</strong>
                {vipVisitor.company ? ` from ${vipVisitor.company}` : ''} &bull; Verified Session
              </span>
            </div>
            <button 
              onClick={() => setShowVipBanner(false)}
              className="p-1 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`fixed ${vipVisitor && showVipBanner ? 'top-9' : 'top-0'} left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#08090A]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] py-3' 
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
              <div className="relative w-9 h-9 rounded-xl bg-zinc-900 dark:bg-[#14171F] border border-black/10 dark:border-white/[0.12] flex items-center justify-center font-display font-bold text-xs tracking-wider text-white shadow-sm transition-all duration-300">
                <span className="text-zinc-100">AC</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
                  Ayush Chatterjee
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1.5 uppercase font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  GROWTH &bull; MARKETING &bull; D2C
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-0.5 bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-xl px-2 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-colors duration-150 ${
                      isActive
                        ? 'text-zinc-950 dark:text-white font-semibold'
                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-white dark:bg-white/[0.12] rounded-full shadow-sm border border-black/5 dark:border-white/10 -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium hover:bg-black/[0.07] dark:hover:bg-white/[0.09] transition-all shadow-xs"
                title="View ATS & Recruiter 1-Page Brief"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>1P BRIEF</span>
              </button>

              {/* Resume / CV Download Button */}
              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium hover:bg-black/[0.07] dark:hover:bg-white/[0.09] transition-all shadow-xs"
                title="Download / View Official CV"
              >
                <Download className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>RESUME</span>
              </a>

              {/* Theme Toggle Button */}
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

              {/* Connect CTA (Linear style primary button) */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg linear-btn-primary text-xs font-mono font-semibold tracking-wide"
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
                className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#08090A]/95 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.08] shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider ${
                      activeSection === link.href.substring(1)
                        ? 'bg-black/[0.06] dark:bg-white/[0.1] text-zinc-950 dark:text-white font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2">
                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 font-mono font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>DOWNLOAD OFFICIAL CV</span>
                </a>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
                  className="w-full py-2.5 px-4 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 font-mono font-medium text-xs flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-zinc-500" />
                  <span>OPEN 1-PAGE EXECUTIVE BRIEF</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-lg linear-btn-primary font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <span>GET IN TOUCH</span>
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
