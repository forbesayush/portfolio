import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

export const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundManager.isSoundMuted());

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((muted) => {
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    soundManager.playClick();
    soundManager.toggleMute();
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => soundManager.playHover()}
      aria-label={isMuted ? 'Unmute Audio Engine' : 'Mute Audio Engine'}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-glass border border-white/10 hover:border-cyber-cyan/50 hover:bg-surface-glass-hover transition-all duration-300 backdrop-blur-md text-xs font-mono"
    >
      <div className="flex items-center gap-0.5 h-3">
        {!isMuted ? (
          <>
            <span className="w-0.5 h-2.5 bg-cyber-cyan rounded-full animate-pulse" />
            <span className="w-0.5 h-4 bg-cyber-cyan rounded-full animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse delay-150" />
            <span className="w-0.5 h-3 bg-cyber-cyan rounded-full animate-pulse delay-100" />
          </>
        ) : (
          <span className="w-0.5 h-2 bg-slate-500 rounded-full" />
        )}
      </div>

      <span className="hidden sm:inline text-slate-300 group-hover:text-cyber-cyan transition-colors">
        {isMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}
      </span>

      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-cyber-cyan" />
      )}
    </button>
  );
};
