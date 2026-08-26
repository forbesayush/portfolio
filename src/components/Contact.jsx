import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../utils/telegramTracker';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    try {
      await sendContactInquiry(formData);
    } catch (err) {
      console.warn('Telegram inquiry notification:', err);
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Fallback mailto trigger
    setTimeout(() => {
      const subject = encodeURIComponent(`[Inquiry] Product & Growth — from ${formData.name}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 section-divider text-left">
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Contact &bull; Direct Mandate Inquiry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Available for full-time product management roles, growth strategy mandates, and advisory.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/[0.08]">
            
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    Message Dispatched
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Opening your email client to complete transmission...
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="clean-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="clean-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share role details, scope, or business challenges..."
                    className="clean-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Send message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Direct Connect Options */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Email:</span>
                <button
                  onClick={copyEmail}
                  className="text-slate-300 hover:text-white flex items-center gap-1 font-medium"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedEmail ? 'Copied' : personalInfo.email}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
