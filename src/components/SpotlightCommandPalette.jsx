import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Download, FileText, Mail, Linkedin, Sparkles, X, Check, Globe, Layers, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { personalInfo, starCaseStudies } from '../data/portfolioData';

export default function SpotlightCommandPalette({ isOpen, onClose, onOpenBrief }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedAction, setCopiedAction] = useState('');

  const commandItems = [
    {
      id: 'projects',
      category: 'Navigation',
      title: 'STAR Method Projects & Casebooks',
      subtitle: 'View D2C Skincare, OnePlus UX, and Consulting Case Studies',
      icon: Layers,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'ledger',
      category: 'Navigation',
      title: 'Verified Experience Ledger',
      subtitle: 'Inspect OnePlus, Innovist, D-DZIRE & Swash timeline entries',
      icon: Briefcase,
      action: () => {
        document.getElementById('ledger')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'stack',
      category: 'Navigation',
      title: 'Product & Analytics Capability Stack',
      subtitle: 'Explore SQL, Power BI, GA4, Klaviyo, and Strategy Toolkits',
      icon: Zap,
      action: () => {
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      category: 'Navigation',
      title: 'Direct Communication Terminal',
      subtitle: 'Send an encrypted transmission to Ayush via Telegram bot',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'brief',
      category: 'Actions',
      title: 'Open 1-Page Executive ATS Audit Brief',
      subtitle: 'Instant candidate briefing with verified metrics & keywords',
      icon: FileText,
      action: () => {
        onClose();
        onOpenBrief();
      }
    },
    {
      id: 'download-cv',
      category: 'Actions',
      title: 'Download Official Resume Statement (PDF)',
      subtitle: 'Download verified CV statement for Ayush Chatterjee',
      icon: Download,
      action: () => {
        window.open('/Ayush_Chatterjee_CV.pdf', '_blank');
        onClose();
      }
    },
    {
      id: 'copy-email',
      category: 'Actions',
      title: 'Copy Direct Email Address',
      subtitle: personalInfo.email,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedAction('Email Copied!');
        setTimeout(() => {
          setCopiedAction('');
          onClose();
        }, 1200);
      }
    },
    {
      id: 'linkedin',
      category: 'Actions',
      title: 'Visit Verified LinkedIn Profile',
      subtitle: personalInfo.linkedinDisplay,
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedinUrl, '_blank');
        onClose();
      }
    },
  ];

  const filteredItems = query.trim() === ''
    ? commandItems
    : commandItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null; // Handled by App trigger
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
        } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
          e.preventDefault();
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/75 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl bg-[#0F121C] border border-white/[0.14] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden text-left text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Bar Input Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08] bg-black/40">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder="Type a command, search projects, or jump to section..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none font-sans"
          />
          {copiedAction ? (
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>{copiedAction}</span>
            </span>
          ) : (
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                    isSelected 
                      ? 'bg-indigo-600/20 border border-indigo-500/40 text-white' 
                      : 'hover:bg-white/[0.04] text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-white/[0.05] text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-display font-bold text-white uppercase tracking-tight truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-sans text-slate-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {item.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-indigo-400 translate-x-0.5' : 'text-slate-600'
                    }`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="px-5 py-2.5 bg-black/60 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span><span className="app-kbd mr-1">&uarr;</span><span className="app-kbd mr-1">&darr;</span> Navigate</span>
            <span><span className="app-kbd mr-1">&crarr;</span> Select</span>
            <span><span className="app-kbd mr-1">ESC</span> Close</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3 h-3" />
            <span>AyushOS v2.6</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
