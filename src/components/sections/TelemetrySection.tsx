import React, { useState, useEffect } from 'react';
import { Activity, GitCommit, Radio, RefreshCw } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

export const TelemetrySection: React.FC = () => {
  const [repoData, setRepoData] = useState<{ name: string; stars: number; language: string; updated: string }[]>([
    { name: 'portfolio', stars: 0, language: 'TypeScript', updated: 'recently' },
  ]);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/forbesayush/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepoData(
            data.map((r: Record<string, unknown>) => ({
              name: r.name as string,
              stars: r.stargazers_count as number,
              language: (r.language as string) || 'N/A',
              updated: new Date(r.updated_at as string).toLocaleDateString(),
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const handleRefresh = () => {
    soundManager.playClick();
    setPulseKey((k) => k + 1);
    soundManager.playSuccess();
  };

  return (
    <section id="telemetry" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyber-cyan" />
            <span>WHAT I'M WORKING ON</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            RECENT ACTIVITY
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-cyber-neon">
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
            LIVE FROM GITHUB
          </span>
          <button
            onClick={handleRefresh}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2 rounded-lg bg-surface-glass hover:bg-surface-glass-hover border border-white/10 hover:border-cyber-cyan/50 text-slate-300 hover:text-cyber-cyan transition-all"
            title="Refresh"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {repoData.map((repo, idx) => (
          <a
            key={idx}
            href={`https://github.com/forbesayush/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            className="p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl hover:border-cyber-cyan/40 transition-all duration-300 shadow-spatial group"
          >
            <div className="flex items-center gap-2 mb-3">
              <GitCommit className="w-4 h-4 text-cyber-cyan" />
              <span className="font-mono text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors truncate">
                {repo.name}
              </span>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Language</span>
                <span className="text-slate-200">{repo.language}</span>
              </div>
              <div className="flex justify-between">
                <span>Stars</span>
                <span className="text-cyber-amber">{repo.stars}</span>
              </div>
              <div className="flex justify-between">
                <span>Updated</span>
                <span className="text-slate-300">{repo.updated}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
