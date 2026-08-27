import React, { useEffect, useRef, useState } from 'react';
import { ThreeBotCanvas } from './ThreeBotCanvas';

interface AnimatedBotProps {
  cursorX: number;
  cursorY: number;
  theme?: 'dark' | 'light';
}

export const AnimatedBot: React.FC<AnimatedBotProps> = ({ cursorX, cursorY, theme = 'dark' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollVel, setScrollVel] = useState(0);
  const [currentSection, setCurrentSection] = useState('Hero');
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  const [botPos, setBotPos] = useState<{ x: number; y: number }>({ x: 300, y: 300 });
  const [petSpeed, setPetSpeed] = useState(0);
  const [tiltZ, setTiltZ] = useState(0);

  const posRef = useRef({ x: 300, y: 300 });
  const velRef = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const isDark = theme === 'dark';

  useEffect(() => {
    const updatePetPosition = () => {
      if (cursorX < 0 || cursorY < 0) {
        rafId.current = requestAnimationFrame(updatePetPosition);
        return;
      }
      const offsetSide = window.innerWidth > 768 ? 95 : 40;
      const targetX = cursorX + offsetSide;
      const targetY = cursorY - 40;

      const dx = targetX - posRef.current.x;
      const dy = targetY - posRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      setPetSpeed(speed);

      posRef.current.x += dx * 0.07;
      posRef.current.y += dy * 0.07;
      velRef.current = { x: dx * 0.07, y: dy * 0.07 };

      const bankAngle = Math.max(-18, Math.min(18, velRef.current.x * 0.6));
      setTiltZ(bankAngle);
      setBotPos({ x: posRef.current.x, y: posRef.current.y });

      rafId.current = requestAnimationFrame(updatePetPosition);
    };

    rafId.current = requestAnimationFrame(updatePetPosition);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      setScrollY(currentY);
      setScrollVel(delta);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => setScrollVel(0), 150);

      const sections = ['about', 'experience', 'skills', 'education', 'contact'];
      let activeSection = 'Hero';

      for (const sec of sections) {
        const elem = document.getElementById(sec);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            activeSection = sec.charAt(0).toUpperCase() + sec.slice(1);
            break;
          }
        }
      }

      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const isScrolled = scrollY > 400;

  const getSectionBadge = () => {
    switch (currentSection) {
      case 'About': return '01 / STRATEGY & IMPACT';
      case 'Experience': return '02 / CAREER TIMELINE';
      case 'Skills': return '03 / TECHNICAL TOOLKIT';
      case 'Education': return '04 / ACADEMIC BACKGROUND';
      case 'Contact': return '05 / GET IN TOUCH';
      default: return '3D AI COMPANION DRONE';
    }
  };

  const useCursorFollow = cursorX >= 0 && cursorY >= 0;

  return (
    <div
      className="fixed z-40 pointer-events-none"
      style={{
        transform: useCursorFollow
          ? `translate3d(${botPos.x - 160}px, ${botPos.y - 160}px, 0) rotate(${tiltZ}deg)`
          : `translate3d(calc(100vw - ${isScrolled ? '210px' : '350px'}), calc(100vh - ${isScrolled ? '210px' : '350px'}), 0)`,
        width: isScrolled ? '180px' : '320px',
        height: isScrolled ? '180px' : '320px',
        transition: useCursorFollow ? 'none' : 'transform 0.7s cubic-bezier(0.22,1,0.36,1), width 0.5s ease, height 0.5s ease',
        willChange: 'transform',
      }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Section Badge */}
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 flex items-center gap-2 z-20 pointer-events-none border backdrop-blur-md transition-all duration-300 ${
            isDark
              ? 'bg-neutral-900/90 border-amber-500/30 text-amber-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
              : 'bg-white/90 border-black/10 text-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          } ${isScrolled ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span className="text-[10px] font-semibold tracking-wider uppercase font-mono-code">
            {getSectionBadge()}
          </span>
        </div>

        {/* 3D WebGL Canvas with glow */}
        <div className="w-full h-full pointer-events-auto drop-shadow-[0_0_40px_rgba(217,119,6,0.3)]">
          <ThreeBotCanvas
            cursorX={cursorX}
            cursorY={cursorY}
            scrollVel={scrollVel}
            isScrolled={isScrolled}
            petSpeed={petSpeed}
            theme={theme}
          />
        </div>

        {/* Drag hint — only when docked */}
        {isScrolled && (
          <div
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-[9px] font-mono-code tracking-wider uppercase z-20 pointer-events-none border backdrop-blur-md ${
              isDark
                ? 'bg-neutral-900/90 border-white/10 text-neutral-400'
                : 'bg-white/90 border-black/10 text-neutral-500'
            }`}
          >
            360° Drag
          </div>
        )}
      </div>
    </div>
  );
};
