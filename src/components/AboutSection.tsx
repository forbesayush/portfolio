import React from 'react';
import { ayushData } from '../data/portfolioData';
import { Award, Target, TrendingUp, ShieldCheck } from 'lucide-react';

interface SectionProps {
  theme?: 'dark' | 'light';
}

export const AboutSection: React.FC<SectionProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const getIcon = (index: number) => {
    const cls = 'w-5 h-5 text-amber-500';
    switch (index) {
      case 0: return <Award className={cls} />;
      case 1: return <ShieldCheck className={cls} />;
      case 2: return <TrendingUp className={cls} />;
      default: return <Target className={cls} />;
    }
  };

  return (
    <section
      id="about"
      className={`py-32 px-6 md:px-12 transition-colors duration-500 relative border-t ${
        isDark ? 'bg-neutral-950 text-white border-white/10' : 'bg-[#faf8f5] text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-amber-500 font-bold">
            [02 / ABOUT &amp; STRATEGY]
          </span>
        </div>

        {/* Giant Manifesto Headline (Michael Tsirakis style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>I turn raw metrics into</span>{' '}
              <span className="text-amber-500 italic font-playfair font-normal">strategic decisions</span>{' '}
              <span className={isDark ? 'text-white' : 'text-neutral-900'}>that move consumer electronics, D2C brands, &amp; retail forward.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 pt-2">
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Bridging technical data analytics (Power BI, SQL, MIS) with high-level executive decision-making.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="font-mono-code text-xs text-amber-500 font-semibold uppercase tracking-wider">
                ⚡ MBA Candidate • Class of 2027
              </span>
            </div>
          </div>
        </div>

        {/* Story Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Narrative Card */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all ${
              isDark
                ? 'bg-neutral-900/80 border-white/10 text-neutral-300 shadow-2xl'
                : 'bg-white border-neutral-200 text-neutral-700 shadow-lg'
            }`}
          >
            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Over the last 2 years, I've worked across three distinct industry environments —{' '}
                <strong className={isDark ? 'text-white font-bold' : 'text-neutral-950 font-bold'}>consumer electronics (OnePlus)</strong>,{' '}
                <strong className={isDark ? 'text-white font-bold' : 'text-neutral-950 font-bold'}>D2C beauty (Innovist)</strong>, and{' '}
                <strong className={isDark ? 'text-white font-bold' : 'text-neutral-950 font-bold'}>retail jewellery (D-Dzire Jewels)</strong>.
              </p>
              <p>
                At <strong className="text-amber-500 font-semibold">OnePlus</strong>, I conducted Android OS quality assurance and UI/UX defect tracking, learning how product teams translate user feedback into sprint priorities. At{' '}
                <strong className="text-amber-500 font-semibold">Innovist</strong>, I analyzed D2C brand funnels to identify conversion drop-offs. At{' '}
                <strong className="text-amber-500 font-semibold">D-Dzire Jewels</strong>, I built retail KPI dashboards that reduced manual reporting errors by 8–10% and improved forecast accuracy by 10% across 5,000+ records.
              </p>
            </div>

            <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs ${
              isDark ? 'border-white/10 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}>
              <span>Regional College of Management (RCM), Bhubaneswar</span>
              <span className="text-amber-500 font-bold">System Management &amp; Int'l Business</span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ayushData.keyMetrics.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 ${
                  isDark
                    ? 'bg-neutral-900/80 border-white/10 hover:border-amber-500/50 shadow-xl'
                    : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className={`text-3xl sm:text-4xl font-black tracking-tight mb-1 group-hover:text-amber-500 transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {item.value}
                  </div>
                  <div className={`text-xs font-medium leading-snug ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
