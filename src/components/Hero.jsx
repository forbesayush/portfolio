import React, { memo } from 'react';
import { ArrowDown, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Memoized metric card sub-component
const MetricCard = memo(function MetricCard({ value, label }) {
  return (
    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
      <div className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight font-mono">{value}</div>
      <div className="text-[11px] font-mono text-slate-400 mt-0.5">{label}</div>
    </div>
  );
});

// Memoized portrait card sub-component
const PortraitCard = memo(function PortraitCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#0F1118] border border-white/[0.08] p-3 shadow-xl">
      <div className="relative rounded-xl overflow-hidden aspect-[4/4.6] bg-black/40">
        <img
          src="/ayush-portrait.jpg"
          alt="Ayush Chatterjee - Digital Marketing & Growth Strategist"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="text-xs font-semibold text-white">
            Ayush Chatterjee
          </div>
          <div className="text-[11px] text-slate-300 font-mono">
            MBA (IT & International Business) &bull; RCM
          </div>
        </div>
      </div>

      <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Scope: India &rarr; Global</span>
        <span className="text-emerald-400">● Open to roles</span>
      </div>
    </div>
  );
});

function Hero({ onOpenBrief }) {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 text-left">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Marketing Positioning & Telemetry (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{personalInfo.educationBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-[1.15]">
              Scaling digital marketing engines with paid efficiency, CRO & retention psychology.
            </h1>

            {/* Narrative Body */}
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl">
              Digital marketing and growth strategist specializing in full-funnel acquisition, D2C unit economics (CAC:LTV), conversion rate optimization (CRO), and automated lifecycle CRM.
            </p>

            {/* Quantitative Telemetry Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <MetricCard value="$4.2M+" label="Attributed Commerce" />
              <MetricCard value="3.4x" label="CAC:LTV Ratio" />
              <MetricCard value="+24%" label="AOV Lift via CRO" />
            </div>

            {/* Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold tracking-wide transition-colors inline-flex items-center gap-1.5"
              >
                <span>View campaigns (STAR)</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 text-xs font-medium transition-colors"
              >
                <span>Get in touch</span>
              </a>

              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>CV (PDF)</span>
              </a>

              <button
                onClick={onOpenBrief}
                className="px-3.5 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>1P Brief</span>
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PortraitCard />
          </div>

        </div>

      </div>
    </section>
  );
}

export default memo(Hero);
