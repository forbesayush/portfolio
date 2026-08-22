import React, { useState } from 'react';
import { Send, Mail, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../audio/soundManager';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Job Opportunity',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Honeypot check: silently simulate success for spam bots
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

    soundManager.playClick();
    setIsSubmitting(true);

    try {
      // Attempt backend dispatch
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
    soundManager.playSuccess();

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#e07a5f', '#f4a261', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium">
            Contact
          </span>
          <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Start a conversation
          </h2>
        </div>
        <div className="font-sans text-xs sm:text-sm text-slate-400 font-normal">
          I usually reply within a day
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-7 sm:p-8 rounded-2xl bg-background-card border border-white/10 space-y-6 shadow-2xl">
            <h3 className="font-serif font-medium text-xl sm:text-2xl text-white">
              Direct channels
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Open to PM, APM, and consulting analyst roles, MBA internships, and project work. Replies within a day.
            </p>

            <div className="space-y-3 font-sans text-sm">
              {/* Email */}
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-normal">Email</span>
                  <span className="text-white font-medium text-sm sm:text-base">ayushchatterjee.edu@gmail.com</span>
                </div>
              </a>

              {/* Calendar Sync */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-white/10 text-slate-300 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-normal">Schedule Intro Call</span>
                  <span className="text-slate-200 font-medium text-sm sm:text-base">30-minute chat</span>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-white/5 font-sans text-xs text-slate-400">
              <span>Location: Bhubaneswar &bull; Open to relocation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-8 rounded-2xl bg-background-card border border-white/10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent border border-accent/30 mx-auto flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-medium text-2xl text-white">
                  Message sent
                </h3>
                <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Job Opportunity', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Spam Protection Field - Hidden from humans, traps bots */}
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
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 font-sans text-xs text-left animate-in fade-in duration-150">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input: 16px on mobile to avoid iOS Safari auto-zoom */}
                  <div className="space-y-1.5 text-left">
                    <label className="block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input: 16px on mobile */}
                  <div className="space-y-1.5 text-left">
                    <label className="block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Topic Select: 16px on mobile */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0f172a] border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm outline-none transition-colors"
                  >
                    <option value="Job Opportunity">Full-Time Product / APM Role</option>
                    <option value="Internship Opportunity">MBA Summer Internship (2026)</option>
                    <option value="Consulting Role">Strategy / Management Consulting Role</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                </div>

                {/* Message Input: 16px on mobile */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider">
                    Your message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me what you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-full py-3.5 min-h-[48px] rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-accent disabled:opacity-50 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
