import React, { useState, useEffect } from 'react';
import { GitCommit, RefreshCw, ArrowUpRight } from 'lucide-react';

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
  };

  return (
    <section id="activity" className="space-y-8 text-left scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Open Source &amp; Research
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Recent Repositories
          </h2>
        </div>
        <div className="flex items-center gap-3 font-sans text-xs sm:text-sm text-slate-500">
          <span className="flex items-center gap-1.5 text-accent font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            GitHub Feed
          </span>
          <button
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 active:scale-95 transition-colors"
            title="Refresh feed"
            aria-label="Refresh Repositories"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {repoData.map((repo, idx) => (
          <a
            key={idx}
            href={`https://github.com/forbesayush/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all block text-left shadow-[0_2px_16px_rgba(0,0,0,0.03)] group"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 truncate">
                <GitCommit className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-serif font-semibold text-base text-slate-900 group-hover:text-accent transition-colors truncate">
                  {repo.name}
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors flex-shrink-0" />
            </div>
            <div className="space-y-1.5 font-sans text-xs text-slate-500">
              <div className="flex justify-between">
                <span>Stack</span>
                <span className="text-slate-700 font-medium">{repo.language}</span>
              </div>
              <div className="flex justify-between">
                <span>Stars</span>
                <span className="text-amber-600 font-medium">{repo.stars}</span>
              </div>
              <div className="flex justify-between">
                <span>Updated</span>
                <span className="text-slate-600 font-normal">{repo.updated}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
