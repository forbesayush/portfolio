import React, { useState, useEffect } from 'react';
import { GitCommit, RefreshCw } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

export const TelemetrySection: React.FC = () => {
  const [repoData, setRepoData] = useState<{ name: string; stars: number; language: string; updated: string }[]>([
    { name: 'portfolio', stars: 0, language: 'TypeScript', updated: 'Recently' },
  ]);

  useEffect(() => {
    fetch('https://api.github.com/users/forbesayush/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepoData(
            data.map((r: Record<string, unknown>) => ({
              name: r.name as string,
              stars: r.stargazers_count as number,
              language: (r.language as string) || 'TypeScript',
              updated: new Date(r.updated_at as string).toLocaleDateString(),
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const handleRefresh = () => {
    soundManager.playClick();
    fetch('https://api.github.com/users/forbesayush/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepoData(
            data.map((r: Record<string, unknown>) => ({
              name: r.name as string,
              stars: r.stargazers_count as number,
              language: (r.language as string) || 'TypeScript',
              updated: new Date(r.updated_at as string).toLocaleDateString(),
            }))
          );
        }
        soundManager.playSuccess();
      })
      .catch(() => {});
  };

  return (
    <section id="telemetry" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase block mb-1">
            OPEN SOURCE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            RECENT ACTIVITY
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-cyber-neon">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon" />
            GitHub Feed
          </span>
          <button
            onClick={handleRefresh}
            onMouseEnter={() => soundManager.playHover()}
            className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="Refresh"
            aria-label="Refresh Repositories"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {repoData.map((repo, idx) => (
          <a
            key={idx}
            href={`https://github.com/forbesayush/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            className="p-5 rounded-xl bg-[#090b10] border border-white/10 hover:border-cyber-cyan/50 transition-all duration-200 block text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <GitCommit className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
              <span className="font-mono text-sm font-bold text-white hover:text-cyber-cyan transition-colors truncate">
                {repo.name}
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Lang</span>
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
