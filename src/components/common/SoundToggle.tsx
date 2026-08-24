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
      className="group relative flex items-center justify-center gap-2 px-3 py-2 min-w-[44px] min-h-[44px] rounded-xl bg-gray-100 border border-gray-200 hover:border-indigo-300 hover:bg-gray-200 transition-all duration-200 text-xs font-sans active:scale-95"
    >
      <div className="flex items-center gap-0.5 h-3">
        {!isMuted ? (
          <>
            <span className="w-0.5 h-2.5 bg-indigo-500 rounded-full animate-pulse" />
            <span className="w-0.5 h-4 bg-indigo-500 rounded-full animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-150" />
            <span className="w-0.5 h-3 bg-indigo-500 rounded-full animate-pulse delay-100" />
          </>
        ) : (
          <span className="w-0.5 h-2 bg-gray-400 rounded-full" />
        )}
      </div>

      <span className="hidden sm:inline text-gray-600 group-hover:text-indigo-600 transition-colors">
        {isMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}
      </span>

      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
      )}
    </button>
  );
};
