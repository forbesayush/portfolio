import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work & Case Studies', href: '#projects' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Activity', href: '#activity' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 transition-all duration-200">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-white/60 backdrop-blur-sm border border-slate-200/40'
        }`}
      >
        {/* Brand Logo & Persona */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0 font-serif font-bold text-xs">
            AC
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-semibold text-sm sm:text-base text-slate-900 group-hover:text-accent transition-colors">
              Ayush Chatterjee
            </span>
            <span className="text-[11px] font-sans text-slate-500 font-normal">
              Product &bull; Strategy &bull; Analytics
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm font-sans text-slate-600 hover:text-slate-900 transition-colors font-medium relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* AI Case Study Assistant Trigger */}
          <button
            onClick={onOpenAI}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-sans font-medium text-slate-700 hover:text-slate-900 transition-all active:scale-95"
            title="Ask AVA — Interactive Case Study Assistant"
          >
            <Bot className="w-3.5 h-3.5 text-accent" />
            <span>Ask AVA</span>
          </button>

          {/* Direct Consultation / Contact Link */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-sans font-medium transition-all shadow-sm active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 active:scale-95 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-bento-hover flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans text-slate-700 hover:text-slate-900 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-accent text-white text-center text-xs font-sans font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
