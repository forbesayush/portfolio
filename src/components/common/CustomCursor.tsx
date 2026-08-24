import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on pointer-supported devices (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animId: number;
    let isTicking = false;

    const moveMouse = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(() => {
          const target = e.target as HTMLElement | null;
          if (target) {
            const customCursorAttr = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
            const interactive = target.closest('button, a, [data-cursor], input, textarea, select');

            if (customCursorAttr) {
              setCursorText(customCursorAttr);
              setIsHovered(true);
            } else if (interactive) {
              setCursorText('');
              setIsHovered(true);
            } else {
              setCursorText('');
              setIsHovered(false);
            }
          }
          isTicking = false;
        });
      }
    };

    // Smooth trailing ring via 60/120fps RAF lerp (GPU translate3d)
    const renderLoop = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.25;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.25;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block" aria-hidden="true">
      {/* Outer Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,background-color] duration-150 ease-out flex items-center justify-center pointer-events-none ${
          isHovered
            ? cursorText
              ? 'w-20 h-20 bg-accent/15 border-accent/80'
              : 'w-10 h-10 bg-accent/10 border-accent'
            : 'w-6 h-6 bg-transparent border-accent/40'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-medium tracking-wider text-accent uppercase select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
