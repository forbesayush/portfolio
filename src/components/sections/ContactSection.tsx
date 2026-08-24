import React, { useState } from 'react';
import { Send, Mail, Linkedin, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Management Opportunity',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (honeypot.trim().length > 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields.');
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          topic: formData.topic,
          message: formData.message.trim(),
          honeypot,
        }),
      });
    } catch {
      // Fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 40,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#2563EB', '#10B981', '#D97706'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="space-y-8 text-left scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="font-sans text-xs text-accent tracking-wide uppercase block mb-1 font-semibold">
            Get In Touch
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Start a Conversation
          </h2>
        </div>
        <div className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
          Direct inquiries &bull; Usually replies within 24 hours
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 space-y-6 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <div className="space-y-2">
              <h3 className="font-serif font-semibold text-xl text-slate-900">
                Direct Channels
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Available for Product Management (APM/PM), Business &amp; Product Analytics, and Strategy Consulting opportunities across India.
              </p>
            </div>

            <div className="space-y-3 font-sans text-sm">
              {/* Email */}
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 text-slate-700 hover:text-slate-900 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[11px] text-slate-500 font-medium">Direct Email</span>
                  <span className="text-slate-900 font-medium text-xs sm:text-sm truncate">ayushchatterjee.edu@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ayushmba"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 text-slate-700 hover:text-slate-900 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 font-medium">LinkedIn Profile</span>
                  <span className="text-slate-900 font-medium text-xs sm:text-sm">linkedin.com/in/ayushmba</span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100 font-sans text-xs text-slate-500">
              <span>Location: Bhubaneswar &bull; Open to relocation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-slate-900">
                  Message Sent Successfully
                </h3>
                <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Product Management Opportunity', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-sans text-slate-700 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="b_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden opacity-0 pointer-events-none absolute -left-[9999px] w-0 h-0"
                  aria-hidden="true"
                />

                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 font-sans text-xs text-left">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="block font-sans text-xs text-slate-700 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-accent text-slate-900 font-sans text-sm placeholder-slate-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="block font-sans text-xs text-slate-700 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-accent text-slate-900 font-sans text-sm placeholder-slate-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-xs text-slate-700 font-medium">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-accent text-slate-900 font-sans text-sm outline-none transition-colors"
                  >
                    <option value="Product Management Opportunity">Full-Time Product / APM Role</option>
                    <option value="Strategy Consulting Role">Strategy / Consulting Opportunity</option>
                    <option value="Product Analytics Role">Product &amp; Business Analytics Role</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-xs text-slate-700 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, team, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-accent text-slate-900 font-sans text-sm placeholder-slate-400 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-sans font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
