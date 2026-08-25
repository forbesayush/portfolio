import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Globe, Copy, Check, ArrowUpRight, Send, Sparkles, MessageSquare, Download, FileText, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Management Strategy',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Send instant Telegram Alert to Bot
    try {
      await sendContactInquiry(formData);
    } catch (err) {
      console.warn('Telegram inquiry notification error:', err);
    }

    setTimeout(() => {
      // open mailto fallback
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.topic} - from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 15 &bull; Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Let's Scale Something Meaningful.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Whether you represent a high-growth D2C brand, consumer tech venture, digital marketing agency, or global enterprise, I welcome conversations on high-impact growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col justify-between group linear-card">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all font-medium"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-base font-mono font-semibold text-zinc-950 dark:text-white hover:text-linear-brand dark:hover:text-linear-accent transition-colors mt-0.5 break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col justify-between group linear-card">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                  <Linkedin className="w-4 h-4" />
                </div>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all font-medium"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium">
                  LinkedIn Profile
                </span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-mono font-semibold text-zinc-950 dark:text-white hover:text-linear-brand dark:hover:text-linear-accent transition-colors mt-0.5"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
            </div>

            {/* Official Resume / CV Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col justify-between group linear-card">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                  <Download className="w-4 h-4" />
                </div>
                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all font-medium"
                >
                  <span>Download</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium">
                  Executive Resume / CV
                </span>
                <div className="text-base font-mono font-semibold text-zinc-950 dark:text-white mt-0.5">
                  Ayush_Chatterjee_CV.pdf
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-3 px-4 rounded-xl linear-btn-primary font-mono font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2"
              >
                <span>CONNECT WITH ME</span>
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 font-mono font-semibold text-xs tracking-wider uppercase text-center hover:bg-black/[0.07] dark:hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Direct Inquiry Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark linear-card">
            <h3 className="text-lg font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-5">
              Messages trigger immediate priority routing and inbox notifications.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto mb-2">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-zinc-950 dark:text-white text-base mb-0.5">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  Thank you, {formData.name}. Opening your email client as fallback...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-linear-brand transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-linear-brand transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                    Discussion Topic
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 transition-colors font-mono"
                  >
                    <option value="Growth & Marketing Strategy">Growth & Marketing Strategy</option>
                    <option value="D2C Storefront & CRO Audit">D2C Storefront & CRO Audit</option>
                    <option value="Brand Architecture & Positioning">Brand Architecture & Positioning</option>
                    <option value="Performance Marketing & Paid Acquisition">Performance Marketing & Paid Acquisition</option>
                    <option value="Full-Time Growth Marketing Role">Full-Time Growth Marketing Role</option>
                    <option value="General Professional Inquiry">General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your initiative, mandate, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-linear-brand transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg linear-btn-primary font-mono font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <span>TRANSMIT DIRECT MESSAGE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
