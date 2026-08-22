import React, { useState, useEffect } from 'react';
import { Terminal, Bot, Sparkles, Menu, X } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';
import { SoundToggle } from './SoundToggle';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Case studies', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Diagnostics', href: '#diagnostics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-background-secondary/90 backdrop-blur-xl border border-white/10 shadow-spatial'
            : 'bg-surface-glass/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundManager.playHover()}
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-3 group min-h-[44px]"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors flex-shrink-0">
            <span className="font-serif font-medium text-accent text-sm">AC</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-medium text-sm sm:text-base text-white group-hover:text-accent transition-colors">
              Ayush Chatterjee
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans text-slate-400 font-normal">
              MBA Candidate &bull; Product &amp; Strategy
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              className="text-sm font-sans text-slate-300 hover:text-white transition-colors py-2 px-1 relative group font-medium min-h-[44px] flex items-center"
            >
              {link.label}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <SoundToggle />

          {/* AI Companion Trigger */}
          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenAI();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="ASK"
            className="flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-200 hover:text-white transition-colors active:scale-95"
            title="Ask AI about me"
            aria-label="Ask AI about me"
          >
            <Bot className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenTerminal();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="CLI"
            className="flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 hover:text-white transition-colors active:scale-95"
            title="Toggle Interactive CLI Terminal"
            aria-label="Toggle Interactive CLI Terminal"
          >
            <Terminal className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* Mobile Menu Button: min 44x44px */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with safe tap areas */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 rounded-2xl bg-background-secondary/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm font-sans text-slate-200 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all min-h-[44px] flex items-center font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-accent text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 shadow-accent"
            >
              <Bot className="w-4 h-4" /> Ask AVA (AI)
            </button>
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95"
            >
              <Terminal className="w-4 h-4 text-slate-400" /> CLI Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
