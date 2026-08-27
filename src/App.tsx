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
import { trackNewVisitor } from './services/tracker';
import { ArrowDown, Sparkles } from 'lucide-react';

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
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden relative ${
        isDark
          ? 'bg-[#0a0a0f] text-white selection:bg-amber-500 selection:text-neutral-950'
          : 'bg-[#fbf8f5] text-neutral-900 selection:bg-amber-100 selection:text-amber-900'
      }`}
    >
      {/* Background Motion Engine */}
      <CyberGridBg theme={theme} />

      {/* Entrance Modal */}
      <EntranceModal onStart={() => console.log('Experience started!')} />

      {/* Header Nav */}
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <CinematicSection />

      {/* Motion Bot Companion */}
      <MotionBot theme={theme} />

      {/* ── HERO SECTION ──────────────── */}
      <section
        className='-webkit-overflow-hidden border-b-0 transition-all duration-500'
        style={{ height: '100dvh' }}
      >
        <div className='relative w-full max-w-[1600px] z-30 pointer-events-none'>
          <h1 className='font-display text-[11vw] md:text-[7vw] font-extrabold leading-[0.92] tracking-[-0.04em] uppercase'>
            <span className='block overflow-hidden pb-[0.05em]'>
              <span className='block hero-anim hero-reveal' style={{ animationDelay: '0.15s' }}>
                AYUSH CHATTERJEE<span className='text-amber-500'>.'</span>
              </span>
              <span className='block overflow-hidden pb-[0.05em]'>
                <span
                  className={`block hero-anim hero-reveal italic font-playfair font-normal ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                  style={{ animationDelay: '0.3s' }}
                >
                  Product &amp; Business Analyst.
                </span>
              </span>
            </span>
          </h1>

          <div className='mt-8 flex max-w-xl flex-col items-start gap-6 hero-anim hero-reveal pointer-events-auto' style={{ animationDelay: '0.45s' }}>
            <p className={`text-pretty text-base md:text-lg font-medium leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Turning raw data into strategic product decisions across OnePlus, Innovist D2C, and D-Dzire Jewels. MBA Candidate at RCM Bhubaneswar.
            </p>

            <div className='flex flex-wrap items-center gap-3'>
              <button
                type='button'
                onClick={() => scrollToSection('work')}
                className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider transition-all hover:scale-[1.03] shadow-lg cursor-pointer ${
                  isDark
                    ? 'bg-white text-neutral-950 hover:bg-amber-400'
                    : 'bg-neutral-950 text-white hover:bg-amber-600'
                }`}
              >
                <span>View Selected Work</span>
                <ArrowDown className='w-4 h-4 animate-bounce' />
              </button>

              <button
                type='button'
                onClick={() => scrollToSection('about')}
                className={`group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/30 text-white hover:bg-white hover:text-neutral-950'
                    : 'border-neutral-300 text-neutral-900 hover:bg-neutral-950 hover:text-white'
                }`}
              >
                <span>About Me</span>
              </button>
            </div>
          </div>

          <div className='hidden lg:flex flex-col items-start gap-3 absolute right-12 bottom-20 max-w-[260px] z-30 pointer-events-none p-5 rounded-2xl glass-panel shadow-lg'>
            <div className='flex items-center gap-2 text-xs font-mono-code tracking-wider uppercase font-bold text-amber-500'>
              <Sparkles className='w-4 h-4 text-amber-500 animate-pulse' />
              <span>Interactive 3D Companion</span>
            </div>
            <p className={`text-xs leading-relaxed font-medium ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Drag anywhere to rotate your 3D bot in 360°. Move cursor to guide.
            </p>
          </div>
        </div>

        {/* ── KINETIC MARQUEE TICKER ───────────────────────── */}
        <div
          className={`-webkit-overflow-hidden border-y backdrop-blur-md relative z-30 transition-colors ${
            isDark
              ? 'bg-neutral-950/90 border-white/10 text-amber-400'
              : 'bg-white/90 border-neutral-200 text-amber-700'
          }`}
        >
          <div className='flex whitespace-nowrap animate-spin-slow' style={{ animationDuration: '35s' }}>
            <span className='font-mono-code text-xs font-bold tracking-[0.25em] uppercase px-8'>
              • PRODUCT MANAGER • BUSINESS ANALYST • POWER BI • STRATEGY • ONEPLUS • INNOVIST • D-DZIRE JEWELS • SYSTEM MANAGEMENT • INTERNATIONAL BUSINESS
            </span>
            <span className='font-mono-code text-xs font-bold tracking-[0.25em] uppercase px-8'>
              • PRODUCT MANAGER • BUSINESS ANALYST • POWER BI • STRATEGY • ONEPLUS • INNOVIST • D-DZIRE JEWELS • SYSTEM MANAGEMENT • INTERNATIONAL BUSINESS
            </span>
          </div>
        </div>

        {/* Main Portfolio Sections */}
        <main className='relative z-30'>
          <ExperienceSection theme={theme} />
          <AboutSection theme={theme} />
          <SkillsSection theme={theme} />
          <EducationSection theme={theme} />
          <ContactSection theme={theme} />
        </main>

        {/* Footer */}
        <footer
          className={`py-10 px-6 border-t text-center text-xs font-mono-code backdrop-blur-md relative z-30 transition-colors ${
            isDark
              ? 'bg-neutral-950/90 border-white/10 text-neutral-400'
              : 'bg-white/90 border-neutral-200/80 text-neutral-500'
          }`}
        >
          <p>© {new Date().getFullYear()} {ayushData.name}. Designed &amp; Built for Product &amp; Business Analytics • Telegram Live.</p>
        </footer>
      </section>
    </div>
  );
};

export default App;
