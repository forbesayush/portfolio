import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Download, Mail, Linkedin, Globe, ShieldCheck, Briefcase, GraduationCap, Award, ArrowUpRight, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl shadow-dock-light dark:shadow-dock-dark overflow-y-auto flex flex-col linear-card"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0E1015]/95 backdrop-blur-xl px-6 py-3.5 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-linear-brand text-white flex items-center justify-center font-display font-bold text-xs">
              1P
            </div>
            <div className="text-left">
              <h2 className="text-sm font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                1-Page Executive Brief
              </h2>
              <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                Fast-scan summary for hiring managers & recruiters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBriefText}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 text-left">
          
          {/* Header Profile Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-12 h-12 rounded-xl object-cover object-top border border-black/10 dark:border-white/15 shrink-0 bg-zinc-950"
              />
              <div>
                <h3 className="text-base font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                  Ayush Chatterjee
                </h3>
                <div className="text-xs font-mono text-linear-brand dark:text-linear-accent font-medium">
                  MBA (IT & International Business) &bull; Product & Strategy
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  India &rarr; Global Markets (Germany, Ireland, Netherlands, Australia)
                </div>
              </div>
            </div>

            <div className="text-xs font-mono space-y-0.5 sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-black/[0.06] dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400">
              <div><strong className="text-zinc-900 dark:text-white font-medium">Email:</strong> {personalInfo.email}</div>
              <div><strong className="text-zinc-900 dark:text-white font-medium">LinkedIn:</strong> {personalInfo.linkedinDisplay}</div>
              <div><strong className="text-zinc-900 dark:text-white font-medium">Domain:</strong> {personalInfo.portfolioDomain}</div>
            </div>
          </div>

          {/* Core Verified Metrics Grid */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold mb-2">
              Verified Track Record & Key Numbers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 rounded-xl bg-white dark:bg-[#08090A] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-lg font-display font-bold text-zinc-950 dark:text-white">22%</div>
                <div className="text-[10px] text-zinc-500 font-mono leading-tight">Defect Recurrence Reduction</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#08090A] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-lg font-display font-bold text-zinc-950 dark:text-white">15%</div>
                <div className="text-[10px] text-zinc-500 font-mono leading-tight">Task-Flow Efficiency Gain</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#08090A] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-lg font-display font-bold text-zinc-950 dark:text-white">35%</div>
                <div className="text-[10px] text-zinc-500 font-mono leading-tight">Reporting Efficiency Gain</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#08090A] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-lg font-display font-bold text-zinc-950 dark:text-white">66%</div>
                <div className="text-[10px] text-zinc-500 font-mono leading-tight">Stakeholder Adoption</div>
              </div>
            </div>
          </div>

          {/* Key Roles Overview */}
          <div className="space-y-2.5">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
              Professional Trajectory
            </div>
            
            {/* OnePlus */}
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                <h4 className="text-xs font-display font-bold text-zinc-950 dark:text-white uppercase">
                  OnePlus & Innovist &bull; UX Analyst (Product Strategy)
                </h4>
                <span className="text-[10px] font-mono text-zinc-500">Oct 2025 — Present</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Structured QA diagnostics across 4 OS builds evaluating 20+ bugs. Cut defect recurrence by 22% and boosted user task flow efficiency by 15%.
              </p>
            </div>

            {/* D2C Skincare */}
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                <h4 className="text-xs font-display font-bold text-zinc-950 dark:text-white uppercase">
                  D2C Skincare Brand Portfolio &bull; Analytics & Global Strategy
                </h4>
                <span className="text-[10px] font-mono text-zinc-500">Sept 2024 — Dec 2025</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Analyzed 5 global storefronts, audited 8 digital modules, resolved 17% repeat deficit, and improved cross-border reporting speed by 35%.
              </p>
            </div>

            {/* Retail & Franchise */}
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                <h4 className="text-xs font-display font-bold text-zinc-950 dark:text-white uppercase">
                  Jewellery Retail & Franchise Operations &bull; Operations & Scaling
                </h4>
                <span className="text-[10px] font-mono text-zinc-500">Practical Exposure</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Direct luxury customer interaction, store launch checklists, franchise handling, sales execution, and on-ground problem-solving.
              </p>
            </div>
          </div>

          {/* Education & Core Toolkit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold mb-1.5">
                Education
              </div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white uppercase">
                MBA — IT & International Business
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mb-1.5">RCM Bhubaneswar (Grad 2027)</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white uppercase">
                BBA — Business Administration
              </div>
              <div className="text-[10px] text-zinc-500 font-mono">RCM Bhubaneswar (Grad 2025)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold mb-1.5">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-1">
                {['Product Strategy', 'PRDs', 'Scrum/Agile', 'UX QA', 'Power BI', 'SQL', 'Market Entry', 'Porter’s Five Forces', 'AOV Optimization'].map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-white dark:bg-[#0E1015] px-6 py-3.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            Ayush Chatterjee &bull; Executive Briefing
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-3.5 py-1.5 rounded-lg linear-btn-primary font-medium text-xs uppercase tracking-wider"
            >
              Contact Direct
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 font-medium text-xs uppercase tracking-wider hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
