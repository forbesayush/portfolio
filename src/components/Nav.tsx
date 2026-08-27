import React, { useState } from 'react';
import { Menu, Moon, Sun, VolumeX, X, ArrowUpRight, Award, ChevronDown } from 'lucide-react';
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
          
          <div
            className="group flex items-center gap-3 cursor-pointer"
            onClick={() => {
              soundManager.playClickSound();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => soundManager.playHoverSound()}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110 shadow-lg"
              style={{
                background: isDark ? 'rgba(6, 182, 214, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                color: isDark ? '#06b6d4' : '#2563eb',
              }}
            >
              A
            </div>
            <span className={`font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] bg-clip-text ${
              isDark
                ? 'text-white bg-gradient-to-r from-white via-cyan-200 to-cyan-400'
                : 'text-slate-900 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500'
            }`}>
              {ayushData.name.split(' ').map((word, i) => (
                <span key={i}>
                  {i > 0 && ' '}
                  <span className="bg-clip-text text-transparent font-bold">{word}</span>
                </span>
              ))}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1 rounded-2xl px-4 py-2 backdrop-blur-xl border transition-all duration-300 group" style={{
            background: isDark 
              ? 'rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.6)'
              : 'rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)',
            border: isDark 
              ? 'rgba(103, 232, 249, 0.2)'
              : 'rgba(209, 213, 219, 0.3)',
            boxShadow: isDark 
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)'
              : '0 8px 32px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.02)',
          }}>
            {[
              { id: 'work', label: 'Work', icon: Award },
              { id: 'about', label: 'About', icon: Award },
              { id: 'skills', label: 'Toolkit', icon: Brain },
              { id: 'education', label: 'Academics', icon: GraduationCap },
              { id: 'contact', label: 'Contact', icon: Mail },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="group/item flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-mono-code tracking-wider uppercase transition-all duration-300"
              >
                <item.icon className="w-3 h-3 opacity-60 group-last:hover:opacity-100 transition-opacity duration-300" />
                <span className="bg-clip-text text-transparent group-hover/item:scale-105 transition-transform duration-300 font-semibold" 
                  style={{
                    background: isDark 
                      ? 'linear-gradient(90deg, #ffffff, #06b6d4, #0e7490)'
                      : 'linear-gradient(90deg, #475569, #0f172a, #334155)'
                  }}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
              <span className="text-xs font-mono-code tracking-wider text-cyan-400/60 hidden sm:inline" style={{ color: isDark ? '#06b6d4' : '#2563eb' }}>
                Explorer
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                soundManager.playClickSound();
                onToggleTheme();
              }}
              onMouseEnter={() => soundManager.playHoverSound()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono-code tracking-wider border transition-all duration-300 backdrop-blur-xl group"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.7)'
                  : 'rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)',
                border: isDark 
                  ? 'rgba(103, 232, 249, 0.3)'
                  : 'rgba(209, 213, 219, 0.5)',
                boxShadow: isDark 
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)'
                  : '0 8px 32px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.02)',
              }}
              title="Toggle Dark/Light Mode"
            >
              <div className="p-1.5 rounded-lg transition-all duration-300" style={{
                background: isDark 
                  ? 'rgba(6, 182, 214, 0.2)'
                  : 'rgba(59, 130, 246, 0.2)',
              }}>
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </div>
              <span className={`font-bold text-xs tracking-wider transition-all duration-300 ${
                isDark ? 'text-cyan-300' : 'text-slate-700'
              }`}>{isDark ? 'DARK' : 'LIGHT'}</span>
            </button>

            <button
              type="button"
              onClick={handleToggleSound}
              onMouseEnter={() => soundManager.playHoverSound()}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code border transition-all backdrop-blur-xl group"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.4)'
                  : 'rgba(255, 255, 255, 0.8)',
                border: isDark 
                  ? 'rgba(103, 232, 249, 0.2)'
                  : 'rgba(209, 213, 219, 0.3)',
              }}
              title="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-cyan-400 animate-pulse" />
                  <span className="w-0.5 h-2/3 bg-cyan-400 animate-ping" />
                  <span className="w-0.5 h-4/5 bg-cyan-400 animate-pulse" />
                </div>
              )}
              <span className={`font-bold text-xs tracking-wider transition-all duration-300 ${
                isDark ? 'text-cyan-300' : 'text-slate-700'
              }`}>{isMuted ? 'Muted' : 'Sound'}</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundManager.playHoverSound()}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold font-mono-code tracking-wider transition-all duration-300 shadow-lg group"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, #06b6d4 0%, #0d9488 100%)'
                  : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              }}
            >
              <span className="font-bold">Say Hi</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playClickSound();
                setIsMenuOpen(!isMenuOpen);
              }}
              onMouseEnter={() => soundManager.playHoverSound()}
              className="md:hidden p-3 rounded-2xl border transition-all duration-300 group"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.9)',
                border: isDark 
                  ? 'rgba(103, 232, 249, 0.3)'
                  : 'rgba(209, 213, 219, 0.5)',
              }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-[90] backdrop-blur-3xl flex flex-col items-center justify-center p-8 transition-all duration-500 ${
            isDark ? 'bg-slate-950/98 text-white' : 'bg-slate-50/95 text-slate-900'
          }`}
          style={{
            background: isDark 
              ? 'radial-gradient(ellipse at top left, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.98) 50%, rgba(15, 23, 42, 1) 100%)'
              : 'radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(255, 255, 255, 1) 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-12 text-center">
            <span className="text-xs font-mono-code text-cyan-500 tracking-[0.4em] uppercase border border-cyan-500/30 px-6 py-2 rounded-2xl" style={{
              background: isDark 
                ? 'rgba(6, 182, 214, 0.1)'
                : 'rgba(59, 130, 246, 0.1)',
            }}>
              NAVIGATION
            </span>
            <div className="flex flex-col gap-8 text-4xl sm:text-5xl font-bold tracking-[0.08em] uppercase font-display">
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
                  className="group transition-all duration-300"
                >
                  <span className={`bg-clip-text text-transparent transition-all duration-300 font-extrabold ${
                    isDark 
                      ? 'bg-gradient-to-r from-white via-cyan-200 to-cyan-400 group-hover:from-cyan-400 group-hover:to-cyan-200'
                      : 'bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 group-hover:from-slate-500 group-hover:to-slate-700'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-12 text-xs font-mono-code tracking-widest uppercase opacity-50" style={{ color: isDark ? '#06b6d4' : '#2563eb' }}>
              Ayush Chatterjee • Product Strategist • Data-Driven Decisions
            </div>
          </div>
        </div>
      )}
    </>
  );
};