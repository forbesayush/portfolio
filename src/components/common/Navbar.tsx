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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Case studies', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Activity', href: '#activity' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-500">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-background-secondary/80 backdrop-blur-xl border border-white/10 shadow-spatial'
            : 'bg-surface-glass/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundManager.playHover()}
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan/20 to-cyber-neon/10 border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan transition-all duration-300 shadow-glow-cyan/20">
            <span className="font-mono font-bold text-cyber-cyan text-sm">AC</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-neon" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
              AYUSH CHATTERJEE
            </span>
            <span className="text-[11px] font-mono text-slate-400 font-medium tracking-wider">
              MBA CANDIDATE &bull; PRODUCT &amp; STRATEGY
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
              className="text-xs sm:text-sm font-mono text-slate-300 hover:text-cyber-cyan transition-colors tracking-wider py-1 relative group font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SoundToggle />

          {/* AI Companion Trigger */}
          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenAI();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="ASK"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/30 hover:border-cyber-cyan text-xs font-mono text-cyber-cyan transition-all duration-300 shadow-glow-cyan/10"
            title="Ask AI about me"
          >
            <Bot className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">ASK AI</span>
            <Sparkles className="w-2.5 h-2.5 animate-pulse text-cyber-neon" />
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundManager.playModalOpen();
              onOpenTerminal();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor-text="CLI"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-glass hover:bg-surface-glass-hover border border-white/10 hover:border-cyber-amber/50 text-xs font-mono text-slate-300 hover:text-cyber-amber transition-all duration-300"
            title="Open CLI Terminal (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden xl:inline text-[9px] bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-slate-400">
              ^K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-surface-glass border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-background-secondary/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono text-slate-300 hover:text-cyber-cyan py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="flex-1 py-2 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs flex items-center justify-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5" /> Ask AI
            </button>
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" /> CLI Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
