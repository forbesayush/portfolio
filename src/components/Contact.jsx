import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Linkedin, Copy, Check, ArrowUpRight, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mandate: 'Product Management / Growth Role',
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
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    const receipt = {
      txId: `TX_INQUIRY_${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleTimeString(),
      name: formData.name,
      email: formData.email,
      status: 'TRANSMITTED • TELEGRAM ENCRYPTED'
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
      const subject = encodeURIComponent(`[Mandate Inquiry] Product & Growth — from ${formData.name}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\nMandate: ${formData.mandate}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050608] text-white relative">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimalist Header (Template 5 Style: "Have an idea? / Let's talk!") */}
        <div className="mb-12">
          <div className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-2 font-semibold">
            Have an opportunity or strategic mandate?
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-syne font-black text-white uppercase tracking-tight">
            Let's talk!
          </h2>
        </div>

        {/* Minimalist Contact Card (Template 5 Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0D12] border border-white/[0.1] shadow-2xl text-left">
          
          <AnimatePresence mode="wait">
            {submittedReceipt ? (
              /* Receipt Modal State */
              <motion.div
                key="receipt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-syne font-bold text-white uppercase">
                    Transmission Dispatched!
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    REF: {submittedReceipt.txId} &bull; {submittedReceipt.timestamp}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-left text-xs font-mono space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sender:</span>
                    <span className="text-white font-medium">{submittedReceipt.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Email:</span>
                    <span className="text-white font-medium">{submittedReceipt.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security:</span>
                    <span className="text-emerald-400">Telegram Bot Encrypted</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300">
                  Thank you! Opening your email client to finalize transmission...
                </p>

                <button
                  onClick={() => setSubmittedReceipt(null)}
                  className="px-6 py-2.5 rounded-full btn-dark-outline text-xs font-mono font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              /* Template 5 Clean Minimal Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="minimal-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="minimal-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the role, project mandate, or key business challenge..."
                    className="minimal-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl btn-orange-glow font-syne font-black text-sm tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND'}</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </AnimatePresence>

          {/* Bottom Direct Connect Options */}
          <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Direct Email:</span>
              <button onClick={copyEmail} className="text-orange-400 hover:underline flex items-center gap-1 font-semibold">
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : personalInfo.email}</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span>&bull;</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Encrypted Telemetry</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
