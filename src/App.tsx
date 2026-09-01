import React, { useState, useEffect, useRef } from 'react';
import { Nav } from './components/Nav';
import { MotionBot } from './components/MotionBot';
import { CyberGridBg } from './components/CyberGridBg';
import { CinematicSection } from './components/CinematicSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { EntranceModal } from './components/EntranceModal';
import { ayushData } from './data/portfolioData';
import { trackNewVisitor, trackUserAction } from './services/tracker';
import { ArrowDown, Sparkles, ChevronRight, Award, Brain, Code, BarChart3, GraduationCap, Mail } from 'lucide-react';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -999, y: -999 });
  const mouseRef = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const smoothRef = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio_theme', next);
      trackUserAction('Theme Toggled', next);
      return next;
    });
  };

  useEffect(() => {
    trackNewVisitor();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (smoothRef.current.x === -999 && mouseRef.current.x !== -999) {
        smoothRef.current = { ...mouseRef.current };
      } else if (mouseRef.current.x !== -999) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.12;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.12;
      }

      setCursorPos({ x: smoothRef.current.x, y: smoothRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    trackUserAction('Section Nav Click', `#${id}`);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden relative ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white selection:bg-cyan-500 selection:text-white'
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900 selection:bg-cyan-600 selection:text-white'
    }`}>
      <CyberGridBg theme={theme} />

      <EntranceModal onStart={() => console.log('Experience started!')} />

      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <CinematicSection />

      <MotionBot theme={theme} />

      <section className='-webkit-overflow-hidden border-b-0 transition-all duration-500' style={{ height: '100dvh' }}>
        <div className='relative w-full max-w-[1600px] z-30 pointer-events-none'>
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-transparent rounded-full filter blur-3xl' />
          </div>

          <h1 className="font-display text-[11vw] md:text-[7vw] font-extrabold leading-[0.92] tracking-[-0.04em] uppercase">
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="block hero-anim hero-reveal" style={{ animationDelay: '0.15s' }}>
                AYUSH CHATTERJEE<span className="text-cyan-400">™</span>
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <span
                  className={`block hero-anim hero-reveal italic font-playfair font-normal ${
                    isDark ? 'text-cyan-300' : 'text-cyan-700'
                  }`}
                  style={{ animationDelay: '0.3s' }}
                >
                  Product Strategist • Business Analyst • Data Visionary
                </span>
              </span>
            </span>
          </h1>

          <div className='mt-8 flex max-w-xl flex-col items-start gap-6 hero-anim hero-reveal pointer-events-auto' style={{ animationDelay: '0.45s' }}>
            <p className={`text-pretty text-base md:text-lg font-medium leading-relaxed ${
              isDark ? 'text-cyan-100' : 'text-slate-700'
            }`}>
              Transforming raw data into strategic product decisions. Specialized in driving growth at OnePlus, Innovist D2C, and D-Dzire Jewels.
            </p>

            <div className='flex flex-wrap items-center gap-3'>
              <button
                type='button'
                onClick={() => scrollToSection('work')}
                className={`${`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider transition-all hover:scale-[1.03] shadow-2xl cursor-pointer`}`}
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)' 
                    : 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  color: isDark ? '#0f172a' : '#ffffff',
                }}
              >
                <span>View My Work</span>
                <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
              </button>

              <button
                type='button'
                onClick={() => scrollToSection('about')}
                className={`${`group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider transition-all`}`}
                style={{
                  border: isDark 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'rgba(0, 0, 0, 0.2)',
                  background: isDark 
                    ? 'rgba(255, 255, 255, 0.05)' 
                    : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span>About Me</span>
              </button>
            </div>
          </div>

          <div className='hidden lg:flex flex-col items-start gap-3 absolute right-12 bottom-20 max-w-[260px] z-30 pointer-events-none p-5 rounded-2xl glass-panel shadow-2xl' style={{
            background: isDark 
              ? 'rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)' 
              : 'rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}>
            <div className='flex items-center gap-2 text-xs font-mono-code tracking-wider uppercase font-bold' style={{ color: '#06b6d4' }}>
              <Sparkles className='w-4 h-4 text-cyan-400 animate-pulse' />
              <span>Interactive 3D Companion</span>
            </div>
            <p className={`text-xs leading-relaxed font-medium ${
              isDark ? 'text-cyan-200' : 'text-slate-600'
            }`}>
              Drag anywhere to rotate your 3D bot in 360°. Move cursor to guide.
            </p>
          </div>
        </div>

        <div className={`-webkit-overflow-hidden border-y backdrop-blur-xl relative z-30 transition-colors ${
          isDark
            ? 'bg-slate-900/80 border-cyan-500/20 text-cyan-400'
            : 'bg-white/90 border-slate-200 text-cyan-700'
        }`}>
          <div className='flex whitespace-nowrap animate-spin-slow' style={{ animationDuration: '35s' }}>
            <span className='font-mono-code text-xs font-bold tracking-[0.25em] uppercase px-8'>
              • PRODUCT STRATEGIST • BUSINESS ANALYST • DATA VISIONARY • ONEPLUS • INNOVIST • D-DZIRE JEWELS • POWER BI • STRATEGIC DECISIONS • MBA CANDIDATE • INTERNATIONAL BUSINESS •
            </span>
            <span className='font-mono-code text-xs font-bold tracking-[0.25em] uppercase px-8'>
              • PRODUCT STRATEGIST • BUSINESS ANALYST • DATA VISIONARY • ONEPLUS • INNOVIST • D-DZIRE JEWELS • POWER BI • STRATEGIC DECISIONS • MBA CANDIDATE • INTERNATIONAL BUSINESS •
            </span>
          </div>
        </div>

        <main className='relative z-30'>
          <ExperienceSection theme={theme} />
          <AboutSection theme={theme} />
          <SkillsSection theme={theme} />
          <EducationSection theme={theme} />
          <ContactSection theme={theme} />
        </main>

        <footer
          className={`${`py-10 px-6 border-t text-center text-xs font-mono-code backdrop-blur-xl relative z-30 transition-colors ${
            isDark
              ? 'bg-slate-900/80 border-cyan-500/20 text-cyan-400'
              : 'bg-white/90 border-slate-200 text-slate-500'
          }`}`}
          style={{
            background: isDark 
              ? 'rgba(15, 23, 42, 0.8)' 
              : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <p className="gradient-text">© {new Date().getFullYear()} {ayushData.name}. Product Strategist &amp; Business Analyst • Data-Driven Decisions • All Rights Reserved</p>
        </footer>
      </section>
    </div>
  );
};

export default App;