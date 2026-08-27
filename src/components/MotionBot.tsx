import React, { useEffect, useRef, useState, useCallback } from 'react';

interface MotionBotProps {
  theme: 'dark' | 'light';
}

const SECTION_LABELS: Record<string, string> = {
  Hero:       '👋 Hi! I\'m your AI guide.',
  About:      '💡 Strategy & impact ahead!',
  Experience: '📅 Career timeline loading…',
  Skills:     '🛠️ Tech toolkit unlocked.',
  Education:  '🎓 Knowledge base accessed.',
  Contact:    '📬 Let\'s connect!',
};

const useCurrentSection = () => {
  const [section, setSection] = useState('Hero');
  useEffect(() => {
    const ids = ['about', 'experience', 'skills', 'education', 'contact'];
    const onScroll = () => {
      let found = 'Hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= window.innerHeight * 0.55 && bottom >= window.innerHeight * 0.2) {
            found = id.charAt(0).toUpperCase() + id.slice(1);
            break;
          }
        }
      }
      setSection(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return section;
};

export const MotionBot: React.FC<MotionBotProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  // ── Cursor follow ────────────────────────────────────────────────────────
  const mouseRef  = useRef({ x: -1, y: -1 });
  const posRef    = useRef({ x: window.innerWidth - 140, y: window.innerHeight - 140 });
  const velRef    = useRef({ x: 0, y: 0 });
  const rafRef    = useRef<number | null>(null);
  const botRef    = useRef<HTMLDivElement | null>(null);
  const hasMouseRef = useRef(false);

  // ── State ────────────────────────────────────────────────────────────────
  const [isBlinking, setIsBlinking]     = useState(false);
  const [isExcited, setIsExcited]       = useState(false);
  const [showBubble, setShowBubble]     = useState(false);
  const [tilt, setTilt]                 = useState(0);
  const bubbleTimerRef                  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const section                         = useCurrentSection();

  // ── Mouse tracking ───────────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      hasMouseRef.current = true;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // ── Smooth physics loop ──────────────────────────────────────────────────
  useEffect(() => {
    const SIZE = 110;
    const OFFSET_X = 80;
    const OFFSET_Y = -70;
    const LERP = 0.09;

    const tick = () => {
      if (hasMouseRef.current) {
        const tx = mouseRef.current.x + OFFSET_X;
        const ty = mouseRef.current.y + OFFSET_Y;

        const dx = tx - posRef.current.x;
        const dy = ty - posRef.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        posRef.current.x += dx * LERP;
        posRef.current.y += dy * LERP;

        const bank = Math.max(-20, Math.min(20, dx * 0.18));
        setTilt(bank);
        setIsExcited(speed > 22);
      }

      if (botRef.current) {
        const x = Math.max(0, Math.min(window.innerWidth - SIZE, posRef.current.x - SIZE / 2));
        const y = Math.max(0, Math.min(window.innerHeight - SIZE, posRef.current.y - SIZE / 2));
        botRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${
          hasMouseRef.current
            ? tilt
            : 0
        }deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tilt]);

  // ── Blinking ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const doBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    };
    const schedule = () => {
      const delay = 2800 + Math.random() * 2400;
      return setTimeout(() => { doBlink(); schedule(); }, delay);
    };
    const t = schedule();
    return () => clearTimeout(t);
  }, []);

  // ── Speech bubble on section change ──────────────────────────────────────
  useEffect(() => {
    setShowBubble(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => setShowBubble(false), 3200);
    return () => { if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current); };
  }, [section]);

  // ── Eye shape ────────────────────────────────────────────────────────────
  const eyeRy   = isBlinking ? 1.5 : isExcited ? 10 : 9;
  const eyeRx   = isExcited ? 11 : 9;
  const pupilRy = isBlinking ? 0 : 5;

  // ── Colors ───────────────────────────────────────────────────────────────
  const bodyFill  = isDark ? '#1c1917' : '#fafaf9';
  const bodyStroke= '#d97706';
  const eyeColor  = isExcited ? '#fcd34d' : '#fbbf24';
  const pupilColor= isDark ? '#0c0a09' : '#1c1917';

  return (
    <>
      {/* Inject keyframes once */}
      <style>{`
        @keyframes bot-float {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: -10px; }
        }
        @keyframes bot-glow-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%       { opacity: 0.9;  transform: scale(1.18); }
        }
        @keyframes bubble-in {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
        @keyframes bubble-out {
          from { opacity: 1; }
          to   { opacity: 0; transform: scale(0.9) translateY(-4px); }
        }
        @keyframes core-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Wrapper — positioned via JS transform for performance */}
      <div
        ref={botRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 110,
          height: 110,
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        {/* Speech bubble */}
        {showBubble && (
          <div
            style={{
              position: 'absolute',
              bottom: 118,
              left: '50%',
              transform: 'translateX(-50%)',
              background: isDark ? 'rgba(28,25,23,0.95)' : 'rgba(255,255,255,0.97)',
              border: `1.5px solid ${isDark ? 'rgba(217,119,6,0.4)' : 'rgba(217,119,6,0.3)'}`,
              borderRadius: 12,
              padding: '7px 13px',
              fontSize: 11,
              fontFamily: 'ui-monospace, monospace',
              fontWeight: 600,
              color: isDark ? '#fcd34d' : '#92400e',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              animation: 'bubble-in 0.25s ease forwards',
              letterSpacing: '0.02em',
            }}
          >
            {SECTION_LABELS[section] ?? '🤖 I\'m here with you!'}
            {/* Tail */}
            <span style={{
              position: 'absolute',
              bottom: -7,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderTop: `7px solid ${isDark ? 'rgba(28,25,23,0.95)' : 'rgba(255,255,255,0.97)'}`,
            }} />
          </div>
        )}

        {/* Bot body — floats up and down */}
        <div style={{ animation: 'bot-float 3.2s ease-in-out infinite' }}>
          <svg
            viewBox="0 0 110 130"
            width={110}
            height={130}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Drop shadow */}
            <ellipse cx="55" cy="127" rx="28" ry="5"
              fill="rgba(0,0,0,0.18)"
              style={{ animation: 'bot-glow-pulse 3.2s ease-in-out infinite' }}
            />

            {/* Antenna stem */}
            <line x1="55" y1="4" x2="55" y2="20"
              stroke={bodyStroke} strokeWidth="3" strokeLinecap="round" />

            {/* Antenna orb */}
            <circle cx="55" cy="4" r="5" fill={bodyStroke} />
            <circle cx="55" cy="4" r="3" fill="#fcd34d"
              style={{ animation: 'bot-glow-pulse 1.8s ease-in-out infinite' }}
            />

            {/* Head */}
            <rect x="12" y="20" width="86" height="62" rx="20" ry="20"
              fill={bodyFill} stroke={bodyStroke} strokeWidth="2.5"
            />

            {/* Left eye socket */}
            <ellipse cx="36" cy="50" rx={eyeRx + 3} ry={eyeRy + 3}
              fill={isDark ? '#09090b' : '#e7e5e4'}
            />
            {/* Left eye */}
            <ellipse cx="36" cy="50" rx={eyeRx} ry={eyeRy}
              fill={eyeColor}
              style={{ transition: 'ry 0.08s ease' }}
            />
            {/* Left pupil */}
            <ellipse cx="37" cy="51" rx={4} ry={pupilRy}
              fill={pupilColor}
              style={{ transition: 'ry 0.08s ease' }}
            />
            {/* Left eye shine */}
            <ellipse cx="39" cy="45" rx="2.5" ry="2" fill="rgba(255,255,255,0.85)" />

            {/* Right eye socket */}
            <ellipse cx="74" cy="50" rx={eyeRx + 3} ry={eyeRy + 3}
              fill={isDark ? '#09090b' : '#e7e5e4'}
            />
            {/* Right eye */}
            <ellipse cx="74" cy="50" rx={eyeRx} ry={eyeRy}
              fill={eyeColor}
              style={{ transition: 'ry 0.08s ease' }}
            />
            {/* Right pupil */}
            <ellipse cx="75" cy="51" rx={4} ry={pupilRy}
              fill={pupilColor}
              style={{ transition: 'ry 0.08s ease' }}
            />
            {/* Right eye shine */}
            <ellipse cx="77" cy="45" rx="2.5" ry="2" fill="rgba(255,255,255,0.85)" />

            {/* Mouth — excited arc vs calm smile */}
            {isExcited ? (
              <ellipse cx="55" cy="71" rx="14" ry="6"
                fill={bodyStroke} opacity="0.85"
              />
            ) : (
              <path d="M 38 68 Q 55 78 72 68"
                stroke={bodyStroke} strokeWidth="3"
                fill="none" strokeLinecap="round"
              />
            )}

            {/* Cheek blush */}
            <ellipse cx="22" cy="60" rx="6" ry="4" fill="#f87171" opacity="0.28" />
            <ellipse cx="88" cy="60" rx="6" ry="4" fill="#f87171" opacity="0.28" />

            {/* Body / torso */}
            <rect x="22" y="87" width="66" height="36" rx="14" ry="14"
              fill={bodyFill} stroke={bodyStroke} strokeWidth="2.5"
            />

            {/* Core reactor ring */}
            <circle cx="55" cy="105" r="11"
              fill="none" stroke={isDark ? '#3f3f46' : '#d4d4d0'} strokeWidth="3"
            />
            {/* Core spinner arc */}
            <path d="M 55 94 A 11 11 0 0 1 66 105"
              fill="none" stroke={bodyStroke} strokeWidth="3"
              strokeLinecap="round"
              style={{ animation: 'core-spin 1.6s linear infinite', transformOrigin: '55px 105px' }}
            />
            {/* Core center dot */}
            <circle cx="55" cy="105" r="4" fill={bodyStroke} />
            <circle cx="55" cy="105" r="2.2" fill="#fcd34d"
              style={{ animation: 'bot-glow-pulse 1.2s ease-in-out infinite' }}
            />

            {/* Side ear-nubs */}
            <rect x="4" y="38" width="10" height="20" rx="5"
              fill={bodyFill} stroke={bodyStroke} strokeWidth="2"
            />
            <rect x="96" y="38" width="10" height="20" rx="5"
              fill={bodyFill} stroke={bodyStroke} strokeWidth="2"
            />

            {/* Amber glow halo (behind head) */}
            <ellipse cx="55" cy="51" rx="52" ry="40"
              fill="none"
              stroke={bodyStroke}
              strokeWidth="1"
              opacity="0.12"
              strokeDasharray="4 6"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
