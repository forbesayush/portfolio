import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Download, Mail, Linkedin, Globe, ShieldCheck, Briefcase, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { personalInfo, experiences, impactNumbers, education } from '../data/portfolioData';

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
AYUSH CHATTERJEE - EXECUTIVE SUMMARY
Product Strategy • Management Consulting • Technology

CORE POSITIONING:
Product × Strategy × Technology × Data × Global Business

CONTACT:
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinDisplay}
Portfolio: ${personalInfo.portfolioDomain}

EDUCATION:
- MBA: Information Technology & International Business, Regional College of Management (2027)
- BBA: Business Administration, Regional College of Management (2025)

VERIFIED IMPACT METRICS:
- 22% Reduction in post-release software defect recurrence (OnePlus & Innovist)
- 15% Improvement in customer task-flow delivery efficiency
- 20+ Interface bugs evaluated across 4 OS builds
- 35% Improvement in cross-border reporting efficiency (D2C Skincare)
- 66% Internal stakeholder adoption of strategic growth recommendations
- 5 Global storefronts analysed & 8 digital storefront modules audited

PRIMARY CAREER TRACK:
Product Management (Product Strategy, PRDs, UX Diagnostics, GTM, Scrum)
SECONDARY CAREER TRACK:
Management Consulting & Strategy (Market Entry, Competitive Moats, Growth)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-obsidian-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-display font-bold text-xs">
              1P
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                1-Page Executive Brief
              </h2>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Fast-scan summary for hiring managers & recruiters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBriefText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all font-semibold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Header Profile Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/[0.08]">
            <div className="flex items-center gap-4">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent shrink-0 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-display font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
                  Ayush Chatterjee
                </h3>
                <div className="text-xs font-mono text-accent dark:text-accent-dark font-semibold">
                  MBA (IT & International Business) &bull; Product & Strategy
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  India &rarr; Global Markets (Germany, Ireland, Netherlands, Australia)
                </div>
              </div>
            </div>

            <div className="text-xs font-mono space-y-1 sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 dark:border-white/5">
              <div><strong className="text-slate-900 dark:text-white font-semibold">Email:</strong> {personalInfo.email}</div>
              <div><strong className="text-slate-900 dark:text-white font-semibold">LinkedIn:</strong> {personalInfo.linkedinDisplay}</div>
              <div><strong className="text-slate-900 dark:text-white font-semibold">Domain:</strong> {personalInfo.portfolioDomain}</div>
            </div>
          </div>

          {/* Core Verified Metrics Grid */}
          <div>
            <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold mb-2.5">
              Verified Track Record & Key Numbers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 shadow-2xs">
                <div className="text-xl font-display font-extrabold text-slate-950 dark:text-white">22%</div>
                <div className="text-[11px] text-slate-500 font-mono leading-tight">Defect Recurrence Reduction</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 shadow-2xs">
                <div className="text-xl font-display font-extrabold text-slate-950 dark:text-white">15%</div>
                <div className="text-[11px] text-slate-500 font-mono leading-tight">Task-Flow Efficiency Gain</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 shadow-2xs">
                <div className="text-xl font-display font-extrabold text-slate-950 dark:text-white">35%</div>
                <div className="text-[11px] text-slate-500 font-mono leading-tight">Reporting Efficiency Gain</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 shadow-2xs">
                <div className="text-xl font-display font-extrabold text-slate-950 dark:text-white">66%</div>
                <div className="text-[11px] text-slate-500 font-mono leading-tight">Stakeholder Adoption</div>
              </div>
            </div>
          </div>

          {/* Key Roles Overview */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
              Professional Trajectory
            </div>
            
            {/* OnePlus */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-sm font-display font-bold text-slate-950 dark:text-white uppercase">
                  OnePlus & Innovist &bull; UX Analyst (Product Strategy)
                </h4>
                <span className="text-[11px] font-mono text-slate-500">Oct 2025 — Present</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Structured QA diagnostics across 4 OS builds evaluating 20+ bugs. Cut defect recurrence by 22% and boosted user task flow efficiency by 15%.
              </p>
            </div>

            {/* D2C Skincare */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-sm font-display font-bold text-slate-950 dark:text-white uppercase">
                  D2C Skincare Brand Portfolio &bull; Analytics & Global Strategy
                </h4>
                <span className="text-[11px] font-mono text-slate-500">Sept 2024 — Dec 2025</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Analyzed 5 global storefronts, audited 8 digital modules, resolved 17% repeat deficit, and improved cross-border reporting speed by 35%.
              </p>
            </div>

            {/* Retail & Franchise */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-sm font-display font-bold text-slate-950 dark:text-white uppercase">
                  Jewellery Retail & Franchise Operations &bull; Operations & Scaling
                </h4>
                <span className="text-[11px] font-mono text-slate-500">Practical Exposure</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Direct luxury customer interaction, store launch checklists, franchise handling, sales execution, and on-ground problem-solving.
              </p>
            </div>
          </div>

          {/* Education & Core Toolkit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/5">
              <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold mb-2">
                Education
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase">
                MBA — IT & International Business
              </div>
              <div className="text-[11px] text-slate-500 font-mono mb-2">RCM Bhubaneswar (Grad 2027)</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase">
                BBA — Business Administration
              </div>
              <div className="text-[11px] text-slate-500 font-mono">RCM Bhubaneswar (Grad 2025)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/5">
              <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold mb-2">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Product Strategy', 'PRDs', 'Scrum/Agile', 'UX QA', 'Power BI', 'SQL', 'Market Entry', 'Porter’s Five Forces', 'AOV Optimization'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-obsidian-850 px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Ayush Chatterjee &bull; Executive Briefing
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 rounded-lg bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contact Direct
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
