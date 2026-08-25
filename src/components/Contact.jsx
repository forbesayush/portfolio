import React, { useState } from 'react';
import { Mail, Linkedin, Globe, Copy, Check, ArrowUpRight, Send, Sparkles, MessageSquare, Download, FileText } from 'lucide-react';
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
    <section id="contact" className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 13 &bull; Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you represent a product organization, management consulting practice, or global technology venture, I welcome conversations on high-impact opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col justify-between group hover:bg-white dark:hover:bg-obsidian-800 hover:shadow-card-light transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-obsidian-950 border border-blue-200 dark:border-white/10 flex items-center justify-center text-accent dark:text-accent-dark">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-2xs font-semibold"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-base sm:text-lg font-mono font-bold text-slate-950 dark:text-white hover:text-accent dark:hover:text-accent-dark transition-colors mt-1 break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col justify-between group hover:bg-white dark:hover:bg-obsidian-800 hover:shadow-card-light transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-obsidian-950 border border-blue-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-sky-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-2xs font-semibold"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  LinkedIn Profile
                </span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg font-mono font-bold text-slate-950 dark:text-white hover:text-accent dark:hover:text-accent-dark transition-colors mt-1"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
            </div>

            {/* Official Resume / CV Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col justify-between group hover:bg-white dark:hover:bg-obsidian-800 hover:shadow-card-light transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-obsidian-950 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Download className="w-5 h-5" />
                </div>
                <a
                  href="/Ayush_Chatterjee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-2xs font-semibold"
                >
                  <span>Download</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Executive Resume / CV
                </span>
                <div className="text-base sm:text-lg font-mono font-bold text-slate-950 dark:text-white mt-1">
                  Ayush_Chatterjee_CV.pdf
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-3.5 px-5 rounded-xl bg-accent text-white font-bold text-xs tracking-wider uppercase text-center hover:bg-blue-700 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>CONNECT WITH ME</span>
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-slate-100 font-bold text-xs tracking-wider uppercase text-center hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4 text-accent dark:text-accent-dark" />
              </a>
            </div>

          </div>

          {/* Direct Inquiry Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl">
            <h3 className="text-xl font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono mb-6">
              Messages trigger immediate priority routing and inbox notifications.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-950 dark:text-white text-base mb-1">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                  Thank you, {formData.name}. Opening your email client as fallback...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@mckinsey.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                    Discussion Topic
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors font-mono text-xs"
                  >
                    <option value="Product Management Strategy">Product Management Strategy</option>
                    <option value="Management Consulting Engagement">Management Consulting Engagement</option>
                    <option value="Global Ecosystem Advisory">Global Ecosystem Advisory</option>
                    <option value="Full-Time Executive Hiring">Full-Time Executive Hiring</option>
                    <option value="General Professional Inquiry">General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your initiative, mandate, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-mono font-bold text-xs tracking-wider uppercase hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <span>TRANSMIT DIRECT MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
