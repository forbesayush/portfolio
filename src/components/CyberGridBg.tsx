import React, { useEffect, useRef } from 'react';

interface CyberGridBgProps {
  theme?: 'dark' | 'light';
}

export const CyberGridBg: React.FC<CyberGridBgProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // ── 1. Motion Graphics Floating Geometric Shapes ─────────────────────
    const shapes = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 45 + 20,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      type: i % 3, // 0: Ring, 1: Polygon, 2: Cross/Plus
      hue: i % 2 === 0 ? 38 : 265, // Amber or Violet
      alpha: Math.random() * 0.25 + 0.1,
    }));

    // ── 2. Motion Graphics Particle Trail System ──────────────────────
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      hue: Math.random() > 0.5 ? 38 : 270,
    }));

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // ── Background Base Gradient ──
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        bgGrad.addColorStop(0, '#0a0a0f');
        bgGrad.addColorStop(0.5, '#050508');
        bgGrad.addColorStop(1, '#0c0712');
      } else {
        bgGrad.addColorStop(0, '#fbf8f5');
        bgGrad.addColorStop(0.5, '#f5f0eb');
        bgGrad.addColorStop(1, '#faf4fc');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 3. Kinetic Ambient Motion Orbs ──
      const orbColor1 = isDark ? 'rgba(217, 119, 6, 0.22)' : 'rgba(254, 243, 199, 0.6)';
      const orbColor2 = isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(243, 232, 255, 0.5)';

      const orb1X = width * 0.2 + Math.sin(time * 0.8) * 80;
      const orb1Y = height * 0.3 + Math.cos(time * 0.6) * 60;
      const g1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 450);
      g1.addColorStop(0, orbColor1);
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.8 + Math.cos(time * 0.7) * 70;
      const orb2Y = height * 0.7 + Math.sin(time * 0.5) * 80;
      const g2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 500);
      g2.addColorStop(0, orbColor2);
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // ── 4. Kinetic Motion Waves (Ribbon Motion Graphics) ──
      ctx.save();
      const waveLines = 5;
      for (let w = 0; w < waveLines; w++) {
        ctx.beginPath();
        const baseAlpha = isDark ? 0.15 - w * 0.02 : 0.2 - w * 0.03;
        ctx.strokeStyle = w % 2 === 0
          ? `rgba(217, 119, 6, ${baseAlpha})`
          : `rgba(139, 92, 246, ${baseAlpha})`;
        ctx.lineWidth = 2.5 - w * 0.3;

        for (let x = 0; x <= width; x += 15) {
          const y = height * (0.4 + w * 0.08) +
            Math.sin(x * 0.003 + time * 1.5 + w * 0.8) * (35 + w * 8) +
            Math.cos(x * 0.006 - time * 1.2) * 20 +
            (mouseY - height / 2) * 0.05;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // ── 5. Motion Graphics Floating Geometric Shapes ──
      ctx.save();
      shapes.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        if (s.x < -60) s.x = width + 60;
        if (s.x > width + 60) s.x = -60;
        if (s.y < -60) s.y = height + 60;
        if (s.y > height + 60) s.y = -60;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);

        const strokeColor = isDark
          ? `hsla(${s.hue}, 85%, 65%, ${s.alpha})`
          : `hsla(${s.hue}, 80%, 45%, ${s.alpha * 1.2})`;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;

        if (s.type === 0) {
          // Concentric Ring
          ctx.beginPath();
          ctx.arc(0, 0, s.size * 0.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, s.size * 0.25, 0, Math.PI * 2);
          ctx.stroke();
        } else if (s.type === 1) {
          // Polygon Triangle
          ctx.beginPath();
          for (let i = 0; i < 3; i++) {
            const angle = (i * 2 * Math.PI) / 3;
            const px = Math.cos(angle) * s.size * 0.6;
            const py = Math.sin(angle) * s.size * 0.6;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        } else {
          // Kinetic Cross +
          const h = s.size * 0.4;
          ctx.beginPath();
          ctx.moveTo(-h, 0);
          ctx.lineTo(h, 0);
          ctx.moveTo(0, -h);
          ctx.lineTo(0, h);
          ctx.stroke();
        }
        ctx.restore();
      });
      ctx.restore();

      // ── 6. Kinetic Particle Attractor Field ──
      ctx.save();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }

        ctx.fillStyle = isDark
          ? `hsla(${p.hue}, 90%, 65%, ${dist < 140 ? 0.8 : 0.35})`
          : `hsla(${p.hue}, 85%, 45%, ${dist < 140 ? 0.7 : 0.25})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (dist < 140 ? 1.8 : 1), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // ── 7. Interactive Cursor Spotlight Radial ──
      ctx.save();
      const mGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
      mGrad.addColorStop(0, isDark ? 'rgba(217, 119, 6, 0.16)' : 'rgba(217, 119, 6, 0.08)');
      mGrad.addColorStop(0.5, isDark ? 'rgba(139, 92, 246, 0.06)' : 'rgba(139, 92, 246, 0.03)');
      mGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = mGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className={`fixed inset-0 pointer-events-none z-[1] bg-noise ${theme === 'dark' ? 'opacity-40' : 'opacity-70'}`} />
    </>
  );
};
