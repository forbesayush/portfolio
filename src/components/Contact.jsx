import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Linkedin, Globe, Copy, Check, ArrowUpRight, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mandate: 'Product Management Strategy',
    budget: '$5,000 - $25,000 / Full-Time Role',
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
    e.preventDefault();
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
      const subject = encodeURIComponent(`[Executive Inquiry] ${formData.mandate} — from ${formData.name}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\nMandate: ${formData.mandate}\nScope: ${formData.budget}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07080B] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SECTION 05 &bull; INSTANT COMMUNICATION SETTLEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            Execute A High-Impact Mandate.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Direct transmissions trigger an encrypted, real-time Telegram telemetry alert. Whether hiring for full-time product management or strategic advisory, I respond within 12 hours.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Settlement Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Account Card */}
            <div className="p-7 rounded-3xl bg-[#0D0E15] border border-white/[0.08] shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>BENEFICIARY DETAILS</span>
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
                  <span className="text-slate-400">Primary Channel:</span>
                  <span className="text-white font-medium">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Location Base:</span>
                  <span className="text-white font-medium">India &rarr; Global Remote</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Role:</span>
                  <span className="text-blue-400 font-medium">Product / Growth Strategy</span>
                </div>
              </div>

              {/* Quick Copy Email Button */}
              <div className="pt-3">
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 px-4 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Direct Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Network</div>
                  <div className="text-sm font-display font-bold text-white uppercase">LinkedIn</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Mail</div>
                  <div className="text-sm font-display font-bold text-white uppercase">Email</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive FinTech Settlement Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0D0E15] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submittedReceipt ? (
                  /* Instant Settlement Receipt Modal */
                  <motion.div
                    key="receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white uppercase">
                        Transmission Settled!
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 mt-1">
                        REF: {submittedReceipt.txId} &bull; {submittedReceipt.timestamp}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-left text-xs font-mono space-y-2">
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
                        <span className="text-blue-400 font-medium">{submittedReceipt.mandate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Security:</span>
                        <span className="text-emerald-400">256-Bit Telegram Encrypted</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300">
                      Thank you for reaching out. Opening your local email client to finalize transmission...
                    </p>

                    <button
                      onClick={() => setSubmittedReceipt(null)}
                      className="px-6 py-2.5 rounded-xl fintech-btn-secondary text-xs font-mono font-semibold"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                ) : (
                  /* Standard Transmission Form */
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight">
                          Transmission Terminal
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Enter your project mandate or hiring parameters
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <Lock className="w-3 h-3" />
                        <span>SECURE</span>
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
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 transition-colors"
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
                          placeholder="e.g. sarah@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Mandate / Role Type
                        </label>
                        <select
                          name="mandate"
                          value={formData.mandate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Full-Time Product Management">Full-Time Product Management</option>
                          <option value="D2C & Growth Marketing Strategy">D2C & Growth Marketing Strategy</option>
                          <option value="Conversion Rate Optimization (CRO) Audit">Conversion Rate Optimization (CRO) Audit</option>
                          <option value="Management Consulting Engagement">Management Consulting Engagement</option>
                          <option value="General Professional Inquiry">General Professional Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                          Scope / Timeline
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                          <option value="Q3/Q4 2026 Hiring Cycle">Q3/Q4 2026 Hiring Cycle</option>
                          <option value="Project Advisory / Consulting">Project Advisory / Consulting</option>
                          <option value="Exploratory Discussion">Exploratory Discussion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Mandate Description *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe the opportunity, business challenge, or product initiative..."
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl fintech-btn-primary font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? 'TRANSMITTING ENCRYPTED TELEMETRY...' : 'TRANSMIT MANDATE INQUIRY'}</span>
                      <Send className="w-4 h-4" />
                    </button>
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
