import React, { useState } from 'react';
import { Mail, Linkedin, Globe, Copy, Check, ArrowUpRight, Send, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Management Opportunity',
    message: ''
  });

  const copyEmail = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personalInfo.email);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

            {/* Portfolio Domain Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col justify-between group hover:bg-white dark:hover:bg-obsidian-800 hover:shadow-card-light transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-obsidian-950 border border-indigo-200 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-0.5 rounded font-semibold">
                  Live Property
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Verified Portfolio Domain
                </span>
                <div className="text-base sm:text-lg font-mono font-bold text-slate-950 dark:text-white mt-1">
                  {personalInfo.portfolioDomain}
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
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-slate-900 dark:bg-obsidian-850 border border-slate-800 dark:border-white/15 text-white dark:text-slate-200 font-bold text-xs tracking-wider uppercase text-center hover:bg-slate-800 dark:hover:bg-white/10 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>VIEW LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Direct Inquiry Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl">
            <h3 className="text-xl font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-normal">
              Connect directly regarding Product Management, Strategy Advisory, or Global Projects.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-center space-y-3">
                <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-lg font-display font-bold text-slate-950 dark:text-white uppercase">
                  Inquiry Initiated
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Your message has been logged and forwarded directly to {personalInfo.email}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-accent dark:text-accent-dark hover:underline pt-2 font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@venture.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">Topic of Discussion</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors shadow-2xs"
                  >
                    <option value="Product Management Opportunity">Product Management Role / Opportunity</option>
                    <option value="Management Consulting / Strategy Advisory">Management Consulting / Strategy Advisory</option>
                    <option value="International Project Collaboration">International Project / Cross-Border Initiative</option>
                    <option value="Executive Networking">Executive Networking & General Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share brief context regarding your team, challenge, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent dark:focus:border-accent-dark transition-colors resize-none shadow-2xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>SEND DIRECT MESSAGE</span>
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
