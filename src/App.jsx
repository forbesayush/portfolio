import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Send, Check, Download, Mail, Linkedin, Globe, ShieldCheck } from 'lucide-react';
import { 
  personalInfo, 
  careerEvolution, 
  competencies, 
  experiences, 
  caseStudies, 
  education, 
  skillsData, 
  growthFunnelData 
} from './data/portfolioData';
import { trackVisitor, sendContactInquiry } from './utils/telegramTracker';

export default function App() {
  const [activeDrawer, setActiveDrawer] = useState(null); // 'menu', 'story', 'experience', 'casebooks', 'contact', null
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Growth & Marketing Strategy',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Lock body overflow when any drawer is open
    if (activeDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [activeDrawer]);

  useEffect(() => {
    // Track visitor on load via Telegram
    trackVisitor();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      await sendContactInquiry(formData);
    } catch (err) {
      console.warn('Telegram inquiry notification:', err);
    }
    setTimeout(() => {
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.topic} - from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  const navItems = [
    { label: 'Story', key: 'story' },
    { label: 'Experience', key: 'experience' },
    { label: 'Case Studies', key: 'casebooks' },
    { label: 'Contact', key: 'contact' }
  ];

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn text-cream select-none">
      
      {/* 1. Background Image (Full-bleed, behind everything, z-0) */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in pointer-events-none"
      />

      {/* 2. Marquee Name Track (z-10) — Ayush — Chatterjee */}
      <div 
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up pointer-events-none"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">Ayush &mdash; Chatterjee&nbsp;</span>
          <span className="pr-[6vw]">Ayush &mdash; Chatterjee&nbsp;</span>
        </div>
      </div>

      {/* 3. Horizontal Cream Rule (z-10) */}
      <div 
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* 4. Desktop & Mobile Footer (z-30 mobile, sm:z-10 desktop) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream pointer-events-auto">
        <div 
          className="anim-fade-up text-left"
          style={{ animationDelay: '1400ms' }}
        >
          <div>Growth & Marketing Strategist</div>
          <div>MBA &bull; IT & International Business</div>
          <div>D2C & Product Strategy</div>
        </div>
        <div 
          className="anim-fade-up text-right"
          style={{ animationDelay: '1550ms' }}
        >
          <div>India &rarr; Global Practice</div>
          <div>{personalInfo.portfolioDomain}</div>
        </div>
      </footer>

      {/* 5. Front Portrait Cutout (z-20, sits above marquee, pointer-events none) */}
      <img
        src="https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png"
        alt="Portrait"
        className="absolute inset-0 z-20 h-full w-full object-cover pointer-events-none anim-rise-in"
      />

      {/* 6. Header (z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 text-cream pointer-events-auto">
        {/* Brand / Logo */}
        <button 
          onClick={() => setActiveDrawer('story')}
          className="font-hn text-lg tracking-wide text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 text-left focus:outline-none"
          style={{ animationDelay: '800ms' }}
        >
          Ayush
        </button>

        {/* Desktop Cluster (Year, Nav, Social) */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span 
            className="font-hn text-sm text-cream anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2026
          </span>

          {/* Nav Stack */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn text-left">
            {navItems.map((item, idx) => (
              <button
                key={item.key}
                onClick={() => setActiveDrawer(item.key)}
                className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 text-left focus:outline-none"
                style={{ animationDelay: `${1000 + idx * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Stack */}
          <div className="flex flex-col gap-0.5 text-sm font-hn text-left">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 inline-block"
              style={{ animationDelay: '1150ms' }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 inline-block"
              style={{ animationDelay: '1230ms' }}
            >
              Email
            </a>
            <a
              href="/Ayush_Chatterjee_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 inline-block"
              style={{ animationDelay: '1310ms' }}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* 7. Mobile Hamburger Trigger Button (z-50) */}
      <button
        onClick={() => setActiveDrawer(activeDrawer ? null : 'menu')}
        className="sm:hidden fixed top-6 right-6 z-50 h-10 w-10 flex items-center justify-center anim-fade-up cursor-pointer focus:outline-none"
        style={{ animationDelay: '900ms' }}
        aria-label={activeDrawer ? "Close menu" : "Open menu"}
      >
        <div className="relative h-4 w-6 flex flex-col justify-between items-end">
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              activeDrawer ? 'translate-y-[7px] rotate-45' : ''
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-opacity duration-300 ${
              activeDrawer ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              activeDrawer ? '-translate-y-[7px] -rotate-45' : ''
            }`} 
          />
        </div>
      </button>

      {/* 8. Slide-Over Editorial Drawer (z-40) */}
      {/* Backdrop */}
      <div 
        onClick={() => setActiveDrawer(null)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          activeDrawer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-full sm:w-[90%] md:w-[600px] lg:w-[680px] bg-[#141414] text-cream p-6 sm:p-10 flex flex-col justify-between overflow-y-auto transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          activeDrawer ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveDrawer(null)}
          className={`absolute right-6 top-6 text-cream hover:opacity-60 transition-all duration-300 ${
            activeDrawer ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
          }`}
          aria-label="Close drawer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Content based on Active Drawer */}
        <div className="mt-8 text-left space-y-8 select-text">
          
          {/* MENU VIEW (Mobile) */}
          {activeDrawer === 'menu' && (
            <div>
              <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-6">
                Site Index
              </span>
              <nav className="flex flex-col gap-4 mb-10">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveDrawer(item.key)}
                    className="text-4xl font-hn text-cream hover:opacity-60 text-left transition-opacity"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-4">
                Find Me
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">LinkedIn</a>
                <a href={`mailto:${personalInfo.email}`} className="hover:opacity-60">Email</a>
                <a href="/Ayush_Chatterjee_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Resume</a>
              </div>
            </div>
          )}

          {/* STORY VIEW */}
          {activeDrawer === 'story' && (
            <div className="space-y-6">
              <div>
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-2">
                  01 &bull; Narrative & Bio
                </span>
                <h2 className="text-3xl sm:text-4xl font-hn font-bold text-cream uppercase">
                  Ayush Chatterjee
                </h2>
                <p className="text-sm text-cream/70 mt-1 font-mono">
                  {personalInfo.educationBadge}
                </p>
              </div>

              <blockquote className="text-base sm:text-lg italic text-cream/90 border-l-2 border-cream pl-4 py-1 leading-relaxed">
                "{personalInfo.bio}"
              </blockquote>

              {/* Education Highlights */}
              <div className="pt-4 border-t border-cream/10 space-y-3">
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs">
                  Academic Credentials
                </span>
                {education.map((edu, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                    <div className="font-bold text-sm text-cream">{edu.degree}</div>
                    <div className="text-cream/60 font-mono mt-0.5">{edu.institution} &bull; {edu.graduation}</div>
                    <div className="text-cream/80 mt-2 leading-relaxed">{edu.desc}</div>
                  </div>
                ))}
              </div>

              {/* Career Evolution Pathway */}
              <div className="pt-4 border-t border-cream/10 space-y-3">
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs">
                  Career Evolution Pathway
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {careerEvolution.map((item) => (
                    <div key={item.step} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                      <span className="font-mono text-[10px] text-cream/50">#{item.step}</span>
                      <div className="font-bold text-cream uppercase">{item.name}</div>
                      <div className="text-cream/70 text-[11px] mt-1">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* EXPERIENCE VIEW */}
          {activeDrawer === 'experience' && (
            <div className="space-y-6">
              <div>
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-2">
                  02 &bull; Track Record
                </span>
                <h2 className="text-3xl sm:text-4xl font-hn font-bold text-cream uppercase">
                  Verified Experience
                </h2>
              </div>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-cream uppercase">{exp.company}</h3>
                        <div className="text-xs text-cream/70 font-mono">{exp.role} &bull; {exp.period}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cream uppercase">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-xs text-cream/80 leading-relaxed font-normal">
                      {exp.summary}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center p-2 rounded-lg bg-black/40">
                          <div className="text-sm font-bold text-cream">{m.value}</div>
                          <div className="text-[9px] text-cream/50 font-mono leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 pt-2 text-xs text-cream/70">
                      {exp.verifiedPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-cream shrink-0 mt-1.5"></span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CASE STUDIES VIEW */}
          {activeDrawer === 'casebooks' && (
            <div className="space-y-6">
              <div>
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-2">
                  03 &bull; Empirical Casebooks
                </span>
                <h2 className="text-3xl sm:text-4xl font-hn font-bold text-cream uppercase">
                  Marketing & Growth Case Studies
                </h2>
              </div>

              {/* Case Study Cards */}
              <div className="space-y-5">
                {caseStudies.map((cs) => (
                  <div key={cs.id} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cream uppercase">
                        {cs.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-cream uppercase">{cs.title}</h3>
                    <p className="text-xs text-cream/80 leading-relaxed">{cs.summary}</p>

                    {/* Stats */}
                    {cs.keyStats && (
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 text-center">
                        {cs.keyStats.map((st, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-[9px] font-mono text-cream/50 uppercase">{st.label}</div>
                            <div className="text-sm font-bold text-cream mt-0.5">{st.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Breakdown */}
                    <div className="space-y-2 pt-2 text-xs text-cream/70 border-t border-white/10">
                      <div><strong className="text-cream font-medium">Problem:</strong> {cs.problem}</div>
                      <div><strong className="text-cream font-medium">Approach:</strong> {cs.approach}</div>
                      <div><strong className="text-cream font-medium">Result:</strong> {cs.result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT VIEW */}
          {activeDrawer === 'contact' && (
            <div className="space-y-6">
              <div>
                <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-2">
                  04 &bull; Direct Inquiry
                </span>
                <h2 className="text-3xl sm:text-4xl font-hn font-bold text-cream uppercase">
                  Let's Connect
                </h2>
                <p className="text-xs text-cream/70 font-mono mt-1">
                  Direct message triggers instant Telegram notification.
                </p>
              </div>

              {/* Direct Info */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono space-y-1">
                <div><strong className="text-cream">Email:</strong> <a href={`mailto:${personalInfo.email}`} className="underline hover:opacity-60">{personalInfo.email}</a></div>
                <div><strong className="text-cream">LinkedIn:</strong> <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">{personalInfo.linkedinDisplay}</a></div>
                <div><strong className="text-cream">Domain:</strong> {personalInfo.portfolioDomain}</div>
              </div>

              {/* Form */}
              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center space-y-2">
                  <Check className="w-8 h-8 mx-auto text-cream" />
                  <div className="text-base font-bold text-cream">Message Transmitted!</div>
                  <p className="text-xs text-cream/70">Thank you, {formData.name}. Opening your email client...</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block uppercase text-cream/70 font-mono mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Alex Taylor"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/20 text-cream focus:outline-none focus:border-cream"
                    />
                  </div>
                  <div>
                    <label className="block uppercase text-cream/70 font-mono mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/20 text-cream focus:outline-none focus:border-cream"
                    />
                  </div>
                  <div>
                    <label className="block uppercase text-cream/70 font-mono mb-1">Discussion Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/20 text-cream focus:outline-none focus:border-cream font-mono"
                    >
                      <option value="Growth & Marketing Strategy">Growth & Marketing Strategy</option>
                      <option value="D2C Storefront & CRO Audit">D2C Storefront & CRO Audit</option>
                      <option value="Brand Architecture & Positioning">Brand Architecture & Positioning</option>
                      <option value="Full-Time Growth Marketing Role">Full-Time Growth Marketing Role</option>
                      <option value="General Professional Inquiry">General Professional Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block uppercase text-cream/70 font-mono mb-1">Your Message *</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Describe your initiative or mandate..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/20 text-cream focus:outline-none focus:border-cream resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-lg bg-cream text-black font-bold uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Drawer Bottom Metadata */}
        <div className="pt-6 border-t border-cream/10 flex items-center justify-between text-[11px] font-mono text-cream/40">
          <span>&copy; {new Date().getFullYear()} Ayush Chatterjee</span>
          <span>India &rarr; Global Practice</span>
        </div>

      </div>

    </div>
  );
}
