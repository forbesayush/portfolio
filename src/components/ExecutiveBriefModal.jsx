import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Download } from 'lucide-react';
import { personalInfo, experienceLedger, heroTelemetry, academicCredentials } from '../data/portfolioData';

export default function ExecutiveBriefModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyBriefText = () => {
    const text = `
AYUSH CHATTERJEE — DIGITAL MARKETING & GROWTH STRATEGIST
MBA (IT & International Business) • BBA in Marketing & Consumer Behavior
Website: https://${personalInfo.portfolioDomain}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}

CORE COMPETENCIES:
Full-Funnel Paid Acquisition × Unit Economics (CAC:LTV) × Conversion Rate Optimization (CRO) × Lifecycle CRM (Klaviyo)

VERIFIED CAMPAIGN METRICS:
- $4.2M+ Attributed E-Commerce Volume Analyzed
- 35% Acceleration in Cross-Border MIS Reporting Speed
- 24% Average Order Value (AOV) Increase via Dynamic Cart Tiering
- 3.4x CAC:LTV Multiplier achieved across 5 International Markets
- 22% Reduction in Funnel Friction Defects across User Task Flows
- 15% Increase in Core Exploratory Flow Completion Velocity

PROFESSIONAL EXPERIENCE:
1. OnePlus & Innovist — Growth & UX Analytics Lead (2024)
2. Innovist D2C Skincare Portfolio — Growth & Retention Marketing Lead (2023–2024)
3. D-DZIRE Jewels — Retail Operations & Clienteling Strategist (2022–2023)
4. Swash Consulting Limited — Media & Strategy Consultant (2021–2022)

ACADEMIC CREDENTIALS:
- MBA: Information Technology & International Business, RCM Bhubaneswar (2024–2026)
- BBA: Marketing Management & Consumer Behavior, RCM / Utkal University (2021–2024)
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0F1118] border border-white/[0.1] rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0F1118]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-orange-400 font-semibold">
              Executive Brief
            </span>
            <h2 className="text-base font-semibold text-white">
              Ayush Chatterjee &bull; Digital Marketing & Growth Dossier
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBriefText}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs">
          
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
            <div className="font-mono text-slate-400 font-medium">Marketing Profile</div>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              MBA professional specializing in Full-Funnel Digital Marketing, Paid Media Efficiency, Unit Economics (CAC:LTV), Conversion Rate Optimization (CRO), and D2C Lifecycle Retention. Combines consumer buying psychology with data telemetry to drive measurable, high-margin commercial growth.
            </p>
          </div>

          <div>
            <div className="font-mono text-slate-400 font-medium mb-2.5">Key Performance Metrics</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {heroTelemetry.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-base font-bold text-white font-mono">{m.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-slate-400 font-medium mb-2.5">Experience History</div>
            <div className="space-y-2">
              {experienceLedger.map((exp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-0.5">
                  <div className="flex justify-between text-slate-200 font-medium">
                    <span>{exp.company}</span>
                    <span className="font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-orange-400 font-mono">{exp.role}</div>
                  <div className="text-slate-400 pt-0.5">{exp.summary}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-slate-400 font-medium mb-2.5">Academic Background</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {academicCredentials.map((ac, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-0.5">
                  <div className="text-slate-200 font-medium">{ac.degree}</div>
                  <div className="text-slate-400 font-mono">{ac.institution} ({ac.duration})</div>
                  <div className="text-emerald-400 font-mono">{ac.grade}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>
            <span className="text-slate-500 font-mono">{personalInfo.email}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
