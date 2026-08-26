import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Download, Mail, Linkedin, Globe, ShieldCheck, Briefcase, GraduationCap, Award, ArrowUpRight, Sparkles } from 'lucide-react';
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
AYUSH CHATTERJEE — PRODUCT MANAGER & GROWTH STRATEGIST
MBA (IT & International Business) • BBA in Marketing
Website: https://${personalInfo.portfolioDomain}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}

CORE POSITIONING:
Product Management × Unit Economics (CAC:LTV) × Funnel CRO × D2C Analytics

VERIFIED IMPACT METRICS:
- 35% Acceleration in Cross-Border Storefront MIS Reporting Speed
- 24% Average Order Value (AOV) Increase via Dynamic Volume Tiering
- 3.4x CAC:LTV Multiplier achieved across 5 International Markets
- 22% Reduction in UX Defect Tickets across User Journey Task Flows
- 15% Increase in Core Exploratory Task Flow Completion Velocity

PROFESSIONAL EXPERIENCE:
1. OnePlus & Innovist — UX Analyst & Product Strategy (2024)
   - Heuristic evaluation and user journey telemetry for consumer tech flows.
2. Innovist D2C Skincare Portfolio — Growth & Retention Analytics Lead (2023–2024)
   - Cross-border MIS automation, Klaviyo replenishment CRM, and AOV optimization.
3. D-DZIRE Jewels — Retail Operations & Clienteling Strategist (2022–2023)
   - Consultative high-ticket clienteling scripts and real-time inventory MIS.
4. Swash Consulting Limited — Media & Strategy Consultant (2021–2022)
   - Management consulting issue trees (MECE), executive decision decks.

ACADEMIC CREDENTIALS:
- MBA: Information Technology & International Business, RCM Bhubaneswar (2024–2026)
- BBA: Marketing Management & Consumer Behavior, RCM / Utkal University (2021–2024)

TECHNICAL & STRATEGIC TOOLKIT:
Conversion Rate Optimization (CRO), User Journey Mapping, SQL, Power BI, Google Analytics 4, Mixpanel, Klaviyo Automation, Shopify Plus, Figma, MECE Framework, Porter's Five Forces, STP Segmentation.
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0D0E15] border border-white/[0.15] rounded-3xl shadow-2xl overflow-y-auto flex flex-col text-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#0D0E15]/95 backdrop-blur-xl px-6 sm:px-8 py-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>1-PAGE EXECUTIVE ATS BRIEF</span>
            </div>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase tracking-tight">
              Ayush Chatterjee &bull; Product & Growth Dossier
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBriefText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy Brief'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          
          {/* Executive Overview */}
          <div className="p-5 rounded-2xl bg-black/50 border border-white/[0.08] space-y-2">
            <div className="text-xs font-mono uppercase text-blue-400 font-bold">
              Core Candidate Profile
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              MBA candidate specializing in Product Management, Quantitative Unit Economics (CAC:LTV), Full-Funnel CRO, and Cross-Border D2C Growth. Combines structured management consulting frameworks with analytical telemetry to eliminate UX friction and drive measurable commercial scale.
            </p>
          </div>

          {/* Key Verified Metrics */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              Verified ROI Telemetry
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroTelemetry.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-left">
                  <div className="text-base sm:text-lg font-display font-bold text-white">
                    {m.value}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5 truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Milestones */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              Experience Milestones
            </div>
            <div className="space-y-3">
              {experienceLedger.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 text-left space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-white uppercase">{exp.company}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono text-blue-400">{exp.role}</div>
                  <div className="text-xs text-slate-300 pt-1 leading-relaxed font-normal">{exp.summary}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              Degrees & Honors
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {academicCredentials.map((ac, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 text-left space-y-1">
                  <div className="text-xs font-display font-bold text-white uppercase">{ac.degree}</div>
                  <div className="text-xs font-mono text-slate-400">{ac.institution} ({ac.duration})</div>
                  <div className="text-[11px] font-mono text-emerald-400">{ac.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl fintech-btn-primary text-xs font-mono font-bold uppercase"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume PDF</span>
            </a>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
              <span>&bull;</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
