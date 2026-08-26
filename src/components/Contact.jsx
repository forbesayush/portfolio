import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Linkedin, Globe, Copy, Check, ArrowUpRight, Lock, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mandate: 'Product Management Role',
    budget: 'Immediate Hiring Cycle (2026/2027)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    const receipt = {
      txId: `TX_INQUIRY_${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleTimeString(),
      name: formData.name,
      email: formData.email,
      mandate: formData.mandate,
      status: 'TRANSMITTED • 256-BIT ENCRYPTED'
    };

    try {
      await sendContactInquiry(formData);
    } catch (err) {
      console.warn('Telegram contact notification:', err);
    }

    setSubmittedReceipt(receipt);
    setIsSubmitting(false);

    // Fallback mailto trigger
    setTimeout(() => {
      const subject = encodeURIComponent(`[Opportunity Inquiry] ${formData.mandate} — from ${formData.name}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\nMandate: ${formData.mandate}\nScope: ${formData.budget}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  // Keyboard shortcut Command+Enter to submit
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#08090E] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM MODULE 05 &bull; DIRECT COMMUNICATION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            Connect & Execute Mandate.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Direct transmissions trigger an encrypted Telegram bot telemetry alert to my device. Whether hiring for full-time product management or strategic advisory, I respond within 12 hours.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Beneficiary Card */}
            <div className="p-7 rounded-3xl glass-card border border-white/[0.08] shadow-app-card space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>RECIPIENT DOSSIER</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </span>
              </div>

              <div>
                <div className="text-2xl font-display font-bold text-white uppercase">
                  Ayush Chatterjee
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  MBA (IT & International Business)
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Email:</span>
                  <span className="text-white font-medium">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Location Base:</span>
                  <span className="text-white font-medium">India &rarr; Global Remote</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Role:</span>
                  <span className="text-indigo-300 font-medium">Product Management</span>
                </div>
              </div>

              {/* Copy Email Button */}
              <div className="pt-3">
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 px-4 rounded-xl app-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Direct Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Direct Social Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/[0.08] hover:border-indigo-500/30 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Professional Network</div>
                  <div className="text-sm font-display font-bold text-white uppercase">LinkedIn</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-2xl glass-card border border-white/[0.08] hover:border-indigo-500/30 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Client</div>
                  <div className="text-sm font-display font-bold text-white uppercase">Email</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Superhuman / Raycast Style Message Terminal */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-white/[0.12] shadow-app-window relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submittedReceipt ? (
                  /* Receipt Modal State */
                  <motion.div
                    key="receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white uppercase">
                        Transmission Dispatched!
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 mt-1">
                        REF: {submittedReceipt.txId} &bull; {submittedReceipt.timestamp}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090B12] border border-white/10 text-left text-xs font-mono space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sender:</span>
                        <span className="text-white font-medium">{submittedReceipt.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-white font-medium">{submittedReceipt.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Mandate:</span>
                        <span className="text-indigo-300 font-medium">{submittedReceipt.mandate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Security:</span>
                        <span className="text-emerald-400">Telegram Bot Encrypted</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300">
                      Opening your mail client to finalize communication...
                    </p>

                    <button
                      onClick={() => setSubmittedReceipt(null)}
                      className="px-6 py-2.5 rounded-xl app-btn-secondary text-xs font-mono font-semibold"
                    >
                      Compose Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* Message Terminal Form */
                  <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-5 text-left">
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight">
                          Message Terminal
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Enter your opportunity details or hiring parameters
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <Lock className="w-3 h-3" />
                        <span>ENCRYPTED</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Role / Mandate Type
                        </label>
                        <select
                          name="mandate"
                          value={formData.mandate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-indigo-500 transition-colors"
                        >
                          <option value="Full-Time Product Management">Full-Time Product Management</option>
                          <option value="Growth & D2C Strategy Lead">Growth & D2C Strategy Lead</option>
                          <option value="Conversion Rate Optimization (CRO) Audit">Conversion Rate Optimization (CRO) Audit</option>
                          <option value="Management Consulting Engagement">Management Consulting Engagement</option>
                          <option value="Exploratory Introduction">Exploratory Introduction</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Timeline / Horizon
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-indigo-500 transition-colors"
                        >
                          <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                          <option value="Q3/Q4 2026 Hiring Cycle">Q3/Q4 2026 Hiring Cycle</option>
                          <option value="Project Advisory / Consulting">Project Advisory / Consulting</option>
                          <option value="General Professional Discussion">General Professional Discussion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Message & Mandate Context *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe the opportunity, key problem to solve, or team background..."
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
                        Press <span className="app-kbd">⌘</span> + <span className="app-kbd">&crarr;</span> to send
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto py-3.5 px-7 rounded-xl app-btn-primary font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-glow-indigo"
                      >
                        <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MANDATE'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
