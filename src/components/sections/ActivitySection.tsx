import React, { useState, useEffect } from 'react';
import { GitCommit, RefreshCw } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

export const ActivitySection: React.FC = () => {
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
    <section id="activity" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-indigo-600 tracking-wide uppercase block mb-1.5 font-medium">
            Public repositories
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight">
            Recent activity
          </h2>
        </div>
        <div className="flex items-center gap-3 font-sans text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-2 text-indigo-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            GitHub Feed
          </span>
          <button
            onClick={handleRefresh}
            onMouseEnter={() => soundManager.playHover()}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 hover:text-gray-900 transition-colors active:scale-95"
            title="Refresh"
            aria-label="Refresh Repositories"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {repoData.map((repo, idx) => (
          <a
            key={idx}
            href={`https://github.com/forbesayush/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 transition-all duration-200 block text-left shadow-card hover:-translate-y-1"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <GitCommit className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span className="font-serif text-base text-gray-900 hover:text-indigo-600 font-medium transition-colors truncate">
                {repo.name}
              </span>
            </div>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Lang</span>
                <span className="text-gray-700 font-normal">{repo.language}</span>
              </div>
              <div className="flex justify-between">
                <span>Stars</span>
                <span className="text-indigo-600 font-normal">{repo.stars}</span>
              </div>
              <div className="flex justify-between">
                <span>Updated</span>
                <span className="text-gray-600 font-normal">{repo.updated}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
