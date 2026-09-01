import React, { useState } from 'react';
import { ayushData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { trackContactForm, trackUserAction } from '../services/tracker';

interface SectionProps {
  theme?: 'dark' | 'light';
}

export const ContactSection: React.FC<SectionProps> = ({ theme = 'dark' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });

  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Dispatch form securely through backend proxy (Honeypot + validation handled server-side)
    trackContactForm(formData.name, formData.email, formData.message, undefined, formData._gotcha);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className={`py-32 px-6 md:px-16 border-t backdrop-blur-md transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-neutral-950 border-white/10 text-white' : 'bg-[#fbf8f5] border-neutral-200/60 text-neutral-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Giant Editorial Callout (Inspired by Michael Tsirakis / Still Making Stuff) */}
        <div className="mb-20">
          <a
            href={`mailto:${ayushData.email}`}
            onClick={() => trackUserAction('Hero Callout Email Click', ayushData.email)}
            className="group block"
          >
            <div className="flex flex-wrap items-baseline gap-x-6 text-[12vw] sm:text-[8vw] font-black tracking-[-0.04em] uppercase leading-[0.9]">
              <span className={`transition-colors duration-300 ${isDark ? 'group-hover:text-amber-400' : 'group-hover:text-amber-600'}`}>
                SAY HELLO
              </span>
              <ArrowUpRight className="w-[8vw] h-[8vw] stroke-[2.5] text-amber-500 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 inline-block" />
            </div>
          </a>
          <p className={`mt-4 text-sm sm:text-base font-mono-code ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Let's connect on product strategy, data analytics, or executive roles starting 2025/2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Contact Info Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className={`text-xs font-mono-code font-bold tracking-[0.25em] uppercase ${isDark ? 'text-amber-400' : 'text-neutral-500'}`}>
                [05] DIRECT CONTACT
              </span>
            </div>

            <a
              href={`mailto:${ayushData.email}`}
              onClick={() => trackUserAction('Email Click', ayushData.email)}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/40 text-neutral-200 hover:text-white'
                  : 'bg-white/80 border-neutral-200 hover:border-amber-500/40 text-neutral-800 hover:text-neutral-950'
              }`}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono-code uppercase tracking-wider text-amber-500 font-semibold">Email</span>
                <span className="text-sm font-medium">{ayushData.email}</span>
              </div>
            </a>

            <a
              href={ayushData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackUserAction('LinkedIn Click', ayushData.linkedin)}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/40 text-neutral-200 hover:text-white'
                  : 'bg-white/80 border-neutral-200 hover:border-amber-500/40 text-neutral-800 hover:text-neutral-950'
              }`}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono-code uppercase tracking-wider text-amber-500 font-semibold">LinkedIn</span>
                <span className="text-sm font-medium">linkedin.com/in/ayushmba</span>
              </div>
            </a>

            <div
              className={`flex items-center gap-4 p-5 rounded-2xl border ${
                isDark ? 'bg-neutral-900/70 border-white/10 text-neutral-200' : 'bg-white/80 border-neutral-200 text-neutral-800'
              }`}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono-code uppercase tracking-wider text-amber-500 font-semibold">Phone</span>
                <span className="text-sm font-medium">{ayushData.phone}</span>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 p-5 rounded-2xl border ${
                isDark ? 'bg-neutral-900/70 border-white/10 text-neutral-200' : 'bg-white/80 border-neutral-200 text-neutral-800'
              }`}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono-code uppercase tracking-wider text-amber-500 font-semibold">Location</span>
                <span className="text-sm font-medium">{ayushData.location} (Kolkata / Bhubaneswar)</span>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form (Hardened Server-Side Proxy Dispatch) */}
          <div
            className={`lg:col-span-7 rounded-3xl p-8 sm:p-10 border shadow-2xl transition-colors ${
              isDark ? 'bg-neutral-900/80 border-white/10 text-white' : 'bg-white/90 border-neutral-200 text-neutral-900'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Send a Direct Message</h3>
            <p className={`text-sm mb-8 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Whether you have an opportunity or want to connect about D2C &amp; PM strategy, drop a line below.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/40 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
                <p className={`text-sm max-w-md ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  Thank you for reaching out! Ayush will review your message and respond to {formData.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Honeypot Anti-Spam Field - Invisible to humans, filled by spam bots */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono-code font-semibold uppercase tracking-wider text-amber-500">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`border rounded-xl px-4 py-3.5 text-sm transition-colors focus:outline-none focus:border-amber-500 ${
                      isDark
                        ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono-code font-semibold uppercase tracking-wider text-amber-500">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className={`border rounded-xl px-4 py-3.5 text-sm transition-colors focus:outline-none focus:border-amber-500 ${
                      isDark
                        ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono-code font-semibold uppercase tracking-wider text-amber-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let's talk product strategy..."
                    className={`border rounded-xl px-4 py-3.5 text-sm transition-colors resize-none focus:outline-none focus:border-amber-500 ${
                      isDark
                        ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`font-bold text-sm px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                    isDark
                      ? 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
                      : 'bg-neutral-900 text-white hover:bg-amber-600'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
