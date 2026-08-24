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
            ? 'bg-white/90 backdrop-blur-xl border border-gray-200 shadow-subtle'
            : 'bg-white/60 backdrop-blur-md border border-gray-100'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundManager.playHover()}
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-3 group min-h-[44px]"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-0 flex items-center justify-center transition-colors flex-shrink-0">
            <span className="font-serif font-medium text-white text-sm">AC</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-medium text-sm sm:text-base text-gray-900 group-hover:text-indigo-600 transition-colors">
              Ayush Chatterjee
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans text-gray-500 font-normal">
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
              className="text-sm font-sans text-gray-600 hover:text-gray-900 transition-colors py-2 px-1 relative group font-medium min-h-[44px] flex items-center"
            >
              {link.label}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-200 group-hover:w-full" />
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
            className="flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-sans text-indigo-700 hover:text-indigo-800 transition-colors active:scale-95"
            title="Ask AI about me"
            aria-label="Ask AI about me"
          >
            <Bot className="w-4 h-4 flex-shrink-0" />
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
            className="flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-sans text-gray-600 hover:text-gray-900 transition-colors active:scale-95"
            title="Toggle Interactive CLI Terminal"
            aria-label="Toggle Interactive CLI Terminal"
          >
            <Terminal className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* Mobile Menu Button: min 44x44px */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 active:scale-95 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with safe tap areas */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 rounded-2xl bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-card-hover flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm font-sans text-gray-700 hover:text-gray-900 py-3 px-4 rounded-xl hover:bg-gray-100 transition-all min-h-[44px] flex items-center font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-gray-200 flex gap-2">
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 shadow-gradient"
            >
              <Bot className="w-4 h-4" /> Ask AVA (AI)
            </button>
            <button
              onClick={() => {
                soundManager.playModalOpen();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-colors"
            >
              <Terminal className="w-4 h-4 text-gray-500" /> CLI Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
