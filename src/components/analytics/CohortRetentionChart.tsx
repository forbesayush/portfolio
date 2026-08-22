import React, { useState } from 'react';
import { Users, TrendingDown, Clock, BarChart3, Grid3X3, Filter } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface CohortData {
  cohort: string;
  customers: number;
  rates: number[]; // Index 0 = Month 0 (100%), Index 1 = Month 1, etc.
  aov: string;
  avgRepurchaseDays: number;
}

const SAMPLE_COHORTS: CohortData[] = [
  { cohort: 'Jan 2025', customers: 1450, rates: [100, 28.4, 19.1, 15.2, 12.8, 11.2, 10.4], aov: '$42.50', avgRepurchaseDays: 44 },
  { cohort: 'Feb 2025', customers: 1620, rates: [100, 27.8, 18.5, 14.8, 12.1, 10.8], aov: '$43.20', avgRepurchaseDays: 45 },
  { cohort: 'Mar 2025', customers: 1840, rates: [100, 29.1, 19.8, 15.6, 13.0], aov: '$41.80', avgRepurchaseDays: 43 },
  { cohort: 'Apr 2025', customers: 1750, rates: [100, 30.2, 20.4, 16.1], aov: '$44.10', avgRepurchaseDays: 42 },
  { cohort: 'May 2025', customers: 1980, rates: [100, 31.5, 21.2], aov: '$45.00', avgRepurchaseDays: 41 },
  { cohort: 'Jun 2025', customers: 2150, rates: [100, 32.1], aov: '$45.80', avgRepurchaseDays: 40 },
];

export const CohortRetentionChart: React.FC = () => {
  const [selectedCohort, setSelectedCohort] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'chart' | 'matrix'>('chart');
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  // Compute aggregated averages
  const activeCohorts = selectedCohort === 'ALL' 
    ? SAMPLE_COHORTS 
    : SAMPLE_COHORTS.filter((c) => c.cohort === selectedCohort);

  const months = ['Month 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];

  const getAggregatedRate = (monthIdx: number): number => {
    const eligible = activeCohorts.filter((c) => c.rates.length > monthIdx);
    if (eligible.length === 0) return 0;
    const sum = eligible.reduce((acc, c) => acc + c.rates[monthIdx], 0);
    return Math.round((sum / eligible.length) * 10) / 10;
  };

  const aggregatedRates = [0, 1, 2, 3, 4, 5, 6].map(getAggregatedRate);
  const totalCustomers = activeCohorts.reduce((acc, c) => acc + c.customers, 0);

  // Calculate Heatmap Color
  const getCellColor = (rate: number | undefined) => {
    if (rate === undefined) return 'bg-transparent text-slate-600';
    if (rate >= 90) return 'bg-accent text-white font-medium';
    if (rate >= 28) return 'bg-accent/70 text-white';
    if (rate >= 18) return 'bg-accent/40 text-slate-100';
    if (rate >= 13) return 'bg-accent/25 text-slate-200';
    return 'bg-accent/15 text-slate-300';
  };

  return (
    <div className="rounded-2xl bg-background-card border border-white/10 p-6 sm:p-7 space-y-6 shadow-xl text-left">
      {/* Required One-Sentence Disclaimer / Caption */}
      <div className="border-b border-white/10 pb-4">
        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          Interactive cohort retention analysis using anonymized sample data structured to illustrate customer repurchase decay across monthly acquisition cohorts.
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Cohort Selector */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-accent flex-shrink-0" />
          <span className="font-sans text-xs text-slate-400 font-medium">Cohort:</span>
          <select
            value={selectedCohort}
            onChange={(e) => {
              soundManager.playClick();
              setSelectedCohort(e.target.value);
            }}
            className="px-3 py-2 min-h-[44px] rounded-xl bg-white/5 border border-white/10 text-base sm:text-xs font-sans text-white focus:border-accent outline-none"
          >
            <option value="ALL" className="bg-[#0f172a]">All Cohorts (Aggregated)</option>
            {SAMPLE_COHORTS.map((c) => (
              <option key={c.cohort} value={c.cohort} className="bg-[#0f172a]">
                {c.cohort} ({c.customers.toLocaleString()} users)
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center rounded-xl bg-white/5 p-1 border border-white/10">
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('chart');
            }}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-xs font-sans font-medium transition-all ${
              viewMode === 'chart' ? 'bg-accent text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Retention Curve</span>
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('matrix');
            }}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-xs font-sans font-medium transition-all ${
              viewMode === 'matrix' ? 'bg-accent text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Heatmap Matrix</span>
          </button>
        </div>
      </div>

      {/* Metric Callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/5">
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs text-slate-400">Total Cohort Users</span>
          </div>
          <span className="font-serif font-medium text-lg text-white">
            {totalCustomers.toLocaleString()}
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs text-slate-400">Month 1 Retention</span>
          </div>
          <span className="font-serif font-medium text-lg text-white">
            {aggregatedRates[1] || 0}%
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs text-slate-400">Month 5 Retention</span>
          </div>
          <span className="font-serif font-medium text-lg text-white">
            ~10.8%
          </span>
        </div>
      </div>

      {/* Chart View */}
      {viewMode === 'chart' ? (
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-slate-400 gap-1">
            <span>Customer Retention Rate (%) over 6 Months</span>
            <span className="text-accent font-medium">Repurchase Plateau: Month 4+</span>
          </div>

          {/* SVG Line / Bar Retention Visualization */}
          <div className="h-48 w-full bg-black/40 rounded-xl p-4 border border-white/5 flex items-end justify-between gap-2 sm:gap-4 relative">
            {/* Grid Guidelines */}
            <div className="absolute inset-x-4 top-4 border-b border-white/5 text-[10px] text-slate-500">100%</div>
            <div className="absolute inset-x-4 top-1/2 border-b border-white/5 text-[10px] text-slate-500">50%</div>

            {aggregatedRates.map((rate, idx) => {
              const heightPercent = Math.max(8, rate);
              const isHovered = hoveredMonth === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setHoveredMonth(idx);
                  }}
                  onMouseLeave={() => setHoveredMonth(null)}
                  onClick={() => {
                    soundManager.playClick();
                    setHoveredMonth(hoveredMonth === idx ? null : idx);
                  }}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer relative z-10 select-none min-h-[44px]"
                >
                  {/* Tooltip on touch / hover */}
                  {isHovered && (
                    <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-accent text-white font-sans text-xs shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 z-20">
                      {months[idx]}: {rate}% retained
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full max-w-[48px] rounded-t-md transition-all duration-300 ${
                      idx === 0 
                        ? 'bg-white/20' 
                        : isHovered 
                        ? 'bg-accent' 
                        : 'bg-accent/80 group-hover:bg-accent'
                    }`}
                  />

                  {/* Label */}
                  <span className={`font-sans text-[11px] transition-colors ${
                    isHovered ? 'text-white font-medium' : 'text-slate-400'
                  }`}>
                    M{idx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Matrix Heatmap Table View */
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-sans border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-left">
                <th className="py-2.5 px-3 font-medium">Cohort</th>
                <th className="py-2.5 px-3 font-medium">Users</th>
                <th className="py-2.5 px-3 font-medium text-center">M0</th>
                <th className="py-2.5 px-3 font-medium text-center">M1</th>
                <th className="py-2.5 px-3 font-medium text-center">M2</th>
                <th className="py-2.5 px-3 font-medium text-center">M3</th>
                <th className="py-2.5 px-3 font-medium text-center">M4</th>
                <th className="py-2.5 px-3 font-medium text-center">M5</th>
                <th className="py-2.5 px-3 font-medium text-center">M6</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {activeCohorts.map((c) => (
                <tr key={c.cohort} className="hover:bg-white/5 transition-colors">
                  <td className="py-2 px-3 font-medium text-white">{c.cohort}</td>
                  <td className="py-2 px-3 text-slate-400">{c.customers.toLocaleString()}</td>
                  {[0, 1, 2, 3, 4, 5, 6].map((mIdx) => {
                    const rate = c.rates[mIdx];
                    return (
                      <td key={mIdx} className="py-1 px-1.5 text-center">
                        <div className={`py-1 rounded-md text-[11px] ${getCellColor(rate)}`}>
                          {rate !== undefined ? `${rate}%` : '-'}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
