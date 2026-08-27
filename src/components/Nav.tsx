import React, { useState } from 'react';
import { Menu, Moon, Sun, VolumeX, X, ArrowUpRight } from 'lucide-react';
import { ayushData } from '../data/portfolioData';
import { soundManager } from '../services/sound';

interface NavProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Nav: React.FC<NavProps> = ({ theme, onToggleTheme }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const scrollToSection = (id: string) => {
    soundManager.playClickSound();
    setIsMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] p-4 sm:p-6 transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo (Michael Tsirakis style monogram) */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => {
              soundManager.playClickSound();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => soundManager.playHoverSound()}
          >
            <span aria-hidden="true" className="inline-block text-xl leading-none transition-transform duration-300 group-hover:rotate-45 text-amber-500">
              ✦
            </span>
            <span className={`font-display text-lg sm:text-xl font-bold tracking-[-0.02em] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              {ayushData.name}<span className="text-amber-500">.</span>
            </span>
          </div>

          {/* Center Navigation Pill */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 backdrop-blur-xl border transition-colors ${
              isDark
                ? 'bg-neutral-900/70 border-white/15 text-white/80'
                : 'bg-white/80 border-black/10 text-neutral-700 shadow-sm'
            }`}
          >
            {[
              { id: 'work', label: 'Work' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Toolkit' },
              { id: 'education', label: 'Academics' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => soundManager.playHoverSound()}
                className={`relative rounded-full px-4 py-1.5 text-xs font-mono-code tracking-wider uppercase transition-all ${
                  isDark
                    ? 'hover:text-white hover:bg-white/10'
                    : 'hover:text-neutral-950 hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Control Stack */}
          <div className="flex items-center gap-2.5">
            
            {/* Dark/Light Switcher */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClickSound();
                onToggleTheme();
              }}
              onMouseEnter={() => soundManager.playHoverSound()}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code tracking-wider border transition-all duration-300 backdrop-blur-md ${
                isDark
                  ? 'bg-neutral-900/80 border-amber-500/30 text-amber-300 hover:border-amber-500'
                  : 'bg-white/90 border-neutral-300 text-neutral-800 hover:border-amber-600'
              }`}
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
              )}
              <span className="text-[10px] font-bold uppercase">{isDark ? 'DARK' : 'LIGHT'}</span>
            </button>

            {/* Sound Equalizer Toggle */}
            <button
              type="button"
              onClick={handleToggleSound}
              onMouseEnter={() => soundManager.playHoverSound()}
              className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code border transition-all backdrop-blur-md ${
                isDark
                  ? 'bg-neutral-900/80 border-white/15 text-white/80 hover:text-white'
                  : 'bg-white/90 border-neutral-300 text-neutral-700 hover:text-neutral-900'
              }`}
              title="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400" />
              ) : (
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-amber-500 animate-pulse" />
                  <span className="w-0.5 h-2/3 bg-amber-500 animate-ping" />
                  <span className="w-0.5 h-4/5 bg-amber-500 animate-pulse" />
                </div>
              )}
              <span className="text-[10px] font-bold uppercase">{isMuted ? 'Muted' : 'Sound'}</span>
            </button>

            {/* Say Hi Button */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundManager.playHoverSound()}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold font-mono-code tracking-wider uppercase transition-all shadow-md ${
                isDark
                  ? 'bg-white text-neutral-950 hover:bg-amber-400 hover:text-neutral-950'
                  : 'bg-neutral-900 text-white hover:bg-amber-600 hover:text-white'
              }`}
            >
              <span>Say Hi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClickSound();
                setIsMenuOpen(!isMenuOpen);
              }}
              onMouseEnter={() => soundManager.playHoverSound()}
              className={`md:hidden p-2 rounded-full border transition-colors ${
                isDark
                  ? 'bg-neutral-900/80 border-white/15 text-white'
                  : 'bg-white/90 border-neutral-300 text-neutral-900'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-[90] backdrop-blur-2xl flex flex-col items-center justify-center p-8 transition-all ${
            isDark ? 'bg-neutral-950/95 text-white' : 'bg-white/95 text-neutral-900'
          }`}
        >
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="text-xs font-mono-code text-amber-500 tracking-[0.3em] uppercase border border-amber-500/40 px-4 py-1 rounded-full">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-6 text-3xl font-bold tracking-[0.05em] uppercase font-display">
              {[
                { id: 'work', label: 'Work' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Toolkit' },
                { id: 'education', label: 'Academics' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-amber-500 transition-colors uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-8 text-xs font-mono-code tracking-widest uppercase opacity-60">
              Ayush Chatterjee • Product &amp; Business Analyst
            </div>
          </div>
        </div>
      )}
    </>
  );
};
