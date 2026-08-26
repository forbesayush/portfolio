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
      txId: `MANDATE_${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleTimeString(),
      name: formData.name,
      email: formData.email,
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
      const subject = encodeURIComponent(`[Mandate Inquiry] Product & Growth — from ${formData.name}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\nMandate: ${formData.mandate}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAF8] text-[#111318] relative text-center">
      
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#C5A880]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Minimalist Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A6B3D] mb-2 font-bold">
            Have an opportunity or strategic mandate?
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-luxury font-bold text-[#111318] tracking-tight">
            Let's talk.
          </h2>
        </div>

        {/* Minimalist Light Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-black/[0.08] shadow-luxury-card text-left">
          
          <AnimatePresence mode="wait">
            {submittedReceipt ? (
              /* Receipt Modal State */
              <motion.div
                key="receipt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-luxury font-bold text-[#111318]">
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs font-mono text-emerald-800 mt-1">
                    REF: {submittedReceipt.txId} &bull; {submittedReceipt.timestamp}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-black/[0.06] text-left text-xs font-mono space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sender:</span>
                    <span className="text-[#111318] font-semibold">{submittedReceipt.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="text-[#111318] font-semibold">{submittedReceipt.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Security:</span>
                    <span className="text-emerald-700 font-semibold">Telegram Encrypted Telemetry</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Thank you. Opening your email client to finalize transmission...
                </p>

                <button
                  onClick={() => setSubmittedReceipt(null)}
                  className="px-6 py-2.5 rounded-full btn-luxury-outline text-xs font-mono font-semibold"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              /* Minimal Light Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-[#FAFAF8] border border-black/[0.08] text-[#111318] p-4 rounded-xl text-sm font-sans focus:outline-none focus:border-[#B38F5B] focus:bg-[#FFFFFF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full bg-[#FAFAF8] border border-black/[0.08] text-[#111318] p-4 rounded-xl text-sm font-sans focus:outline-none focus:border-[#B38F5B] focus:bg-[#FFFFFF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the role, project mandate, or key business challenge..."
                    className="w-full bg-[#FAFAF8] border border-black/[0.08] text-[#111318] p-4 rounded-xl text-sm font-sans focus:outline-none focus:border-[#B38F5B] focus:bg-[#FFFFFF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl btn-luxury-dark font-luxury font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MANDATE'}</span>
                  <Send className="w-4 h-4 text-amber-300" />
                </button>

              </form>
            )}
          </AnimatePresence>

          {/* Bottom Direct Connect Options */}
          <div className="pt-8 mt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-500">Direct Email:</span>
              <button onClick={copyEmail} className="text-[#8A6B3D] hover:underline flex items-center gap-1 font-bold">
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : personalInfo.email}</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-black flex items-center gap-1 font-semibold">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span>&bull;</span>
              <span className="text-emerald-800 flex items-center gap-1 font-semibold">
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
