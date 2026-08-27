import React, { useState } from 'react';
import { soundManager } from '../services/sound';
import { Volume2, Monitor } from 'lucide-react';

interface EntranceModalProps {
  onStart: () => void;
}

export const EntranceModal: React.FC<EntranceModalProps> = ({ onStart }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleStart = () => {
    soundManager.playStartChime();
    setIsOpen(false);
    onStart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center gap-8 border border-white/10 bg-slate-950/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl">
        {/* Counter Badge */}
        <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full">
          0 0 1 :: AYUSH PORTFOLIO
        </span>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-white font-playfair italic">
            Ayush Chatterjee
          </h2>
          <p className="text-xs tracking-[0.25em] text-cyan-400 font-mono uppercase">
            Product &amp; Business Analyst
          </p>
        </div>

        {/* Experience Instructions */}
        <div className="flex flex-col gap-4 text-xs text-slate-400 tracking-widest font-mono uppercase border-t border-b border-white/10 py-6 w-full">
          <p className="text-slate-200 font-semibold tracking-[0.2em]">FOR THE BEST EXPERIENCE</p>
          <div className="flex items-center justify-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-cyan-400" /> TURN SOUND ON
            </span>
            <span className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-cyan-400" /> DESKTOP READY
            </span>
          </div>
        </div>

        {/* Glowing Start Button */}
        <button
          onClick={handleStart}
          onMouseEnter={() => soundManager.playHoverSound()}
          className="group relative px-10 py-4 rounded-full bg-white text-slate-950 font-bold text-xs tracking-[0.25em] uppercase hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] cursor-pointer"
        >
          <span>START EXPERIENCE</span>
        </button>

        <p className="text-[10px] text-slate-500 font-mono tracking-wider">
          Interactive 3D Companion • Web Audio Synth Enabled
        </p>
      </div>
    </div>
  );
};
