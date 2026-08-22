import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'drag' | 'code'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on pointer-supported devices (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [data-cursor], input, textarea, select');
      const customCursorAttr = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (customCursorAttr) {
        setCursorText(customCursorAttr);
        setCursorVariant('hover');
      } else if (interactive) {
        setCursorText('');
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference hidden md:block">
      {/* Outer Spatial Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/60 flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorVariant === 'hover' ? (cursorText ? 84 : 48) : 24,
          height: cursorVariant === 'hover' ? (cursorText ? 84 : 48) : 24,
          backgroundColor: cursorVariant === 'hover' ? 'rgba(224, 122, 95, 0.12)' : 'rgba(224, 122, 95, 0)',
          borderColor: cursorVariant === 'hover' ? '#e07a5f' : 'rgba(224, 122, 95, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-medium tracking-wide text-accent uppercase select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};
