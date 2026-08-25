import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, X, Mail, Linkedin, FileText, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ImpactMetrics from './components/ImpactMetrics';
import PillarCards from './components/PillarCards';
import FunnelVisualizer from './components/FunnelVisualizer';
import CaseStudies from './components/CaseStudies';
import ProductFramework from './components/ProductFramework';
import StrategyFramework from './components/StrategyFramework';
import Education from './components/Education';
import SkillsMatrix from './components/SkillsMatrix';
import GlobalCareer from './components/GlobalCareer';
import CareerPath from './components/CareerPath';
import Testimonials from './components/Testimonials';
import BrandStatement from './components/BrandStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExecutiveBriefModal from './components/ExecutiveBriefModal';
import QuickActionsDock from './components/QuickActionsDock';
import { personalInfo } from './data/portfolioData';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to Dark Mode for the editorial black/cream look
    document.documentElement.classList.add('dark');
    trackVisitor();
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const navLinks = [
    { label: 'Story', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Funnel', href: '#funnel' },
    { label: 'Casebooks', href: '#case-studies' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-cream selection:bg-cream/20 selection:text-cream font-hn relative">
      
      {/* ======================================================== */}
      {/* 1. PIXEL-FAITHFUL FULL-VIEWPORT EDITORIAL HERO (100dvh) */}
      {/* ======================================================== */}
      <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black select-none">
        
        {/* Layer 1: Background Image (z-0) */}
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover anim-fade-in pointer-events-none"
        />

        {/* Layer 2: Giant Marquee Name Track (z-10) */}
        <div 
          className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up pointer-events-none"
          style={{ animationDelay: '500ms' }}
        >
          <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
            <span className="pr-[6vw]">Ayush &mdash; Chatterjee&nbsp;</span>
            <span className="pr-[6vw]">Ayush &mdash; Chatterjee&nbsp;</span>
          </div>
        </div>

        {/* Layer 3: Horizontal Cream Rule (z-10) */}
        <div 
          className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
          style={{ animationDelay: '1200ms' }}
        />

        {/* Layer 4: Desktop & Mobile Footer (z-30 mobile, sm:z-10 desktop) */}
        <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream pointer-events-auto">
          <div 
            className="anim-fade-up text-left"
            style={{ animationDelay: '1400ms' }}
          >
            <div>Growth & Marketing Strategist</div>
            <div>MBA &bull; IT & International Business</div>
            <div>D2C & Product Strategy</div>
          </div>

          {/* Scroll Down Trigger */}
          <a
            href="#about"
            className="hidden md:flex flex-col items-center gap-1.5 text-cream/70 hover:text-cream transition-colors text-xs font-mono group"
          >
            <span>EXPLORE FULL DOSSIER</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>

          <div 
            className="anim-fade-up text-right"
            style={{ animationDelay: '1550ms' }}
          >
            <div>India &rarr; Global Practice</div>
            <div>{personalInfo.portfolioDomain}</div>
          </div>
        </footer>

        {/* Layer 5: Front Transparent Portrait Cutout (z-20) */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none anim-rise-in overflow-hidden">
          <img
            src="/ayush-cutout.png"
            alt="Ayush Chatterjee"
            className="h-[80vh] sm:h-[88vh] w-auto max-w-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Layer 6: Header (z-30) */}
        <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 text-cream pointer-events-auto">
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="font-hn text-lg tracking-wide text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300"
            style={{ animationDelay: '800ms' }}
          >
            Ayush
          </a>

          {/* Desktop Cluster (Year, Nav, Social) */}
          <div className="hidden sm:flex items-start gap-12 lg:gap-20">
            {/* Year */}
            <span 
              className="font-hn text-sm text-cream anim-fade-up"
              style={{ animationDelay: '900ms' }}
            >
              2026
            </span>

            {/* Nav Stack */}
            <nav className="flex flex-col gap-0.5 text-sm font-hn text-left">
              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 inline-block"
                  style={{ animationDelay: `${1000 + idx * 70}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Social / Direct Action Stack */}
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
              <button
                onClick={() => setIsBriefOpen(true)}
                className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 text-left focus:outline-none"
                style={{ animationDelay: '1310ms' }}
              >
                1P Brief
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Hamburger Trigger Button (z-50) */}
        <button
          onClick={() => setIsDrawerOpen(prev => !prev)}
          className="sm:hidden fixed top-6 right-6 z-50 h-10 w-10 flex items-center justify-center anim-fade-up cursor-pointer focus:outline-none"
          style={{ animationDelay: '900ms' }}
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-4 w-6 flex flex-col justify-between items-end">
            <span 
              className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? 'translate-y-[7px] rotate-45' : ''
              }`} 
            />
            <span 
              className={`h-[2px] w-6 bg-cream transition-opacity duration-300 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            <span 
              className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`} 
            />
          </div>
        </button>

        {/* Mobile Drawer (z-40) */}
        <div 
          onClick={() => setIsDrawerOpen(false)}
          className={`sm:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        <div 
          className={`sm:hidden fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-8">
            <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-6">
              Site Index
            </span>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-3xl font-hn text-cream hover:opacity-60 text-left transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="block uppercase tracking-[0.2em] text-cream/50 text-xs mb-4">
              Find Me
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className="hover:opacity-60">Email</a>
              <button onClick={() => { setIsDrawerOpen(false); setIsBriefOpen(true); }} className="hover:opacity-60 text-left">1P Brief</button>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. COMPREHENSIVE EDITORIAL SECTIONS (ALL HISTORICAL DATA)*/}
      {/* ======================================================== */}
      <main className="bg-black text-cream">
        
        {/* Section 01: About & Career Evolution */}
        <About />

        {/* Section 02: Verified Career Journey & Roles */}
        <ExperienceTimeline />

        {/* Section 03: Marketing Telemetry & Performance Metrics */}
        <ImpactMetrics />

        {/* Section 04: The 4 Modern Growth Pillars */}
        <PillarCards />

        {/* Section 05: Interactive Full-Funnel & CRO Simulator */}
        <FunnelVisualizer />

        {/* Section 06: Empirical Campaign Casebooks */}
        <CaseStudies />

        {/* Section 07: 5-Stage Go-To-Market Lifecycle Framework */}
        <ProductFramework />

        {/* Section 08: Strategic Problem Solving & Advisory Framework */}
        <StrategyFramework />

        {/* Section 09: Modern Marketing & Growth Stack */}
        <SkillsMatrix />

        {/* Section 10: Academic Credentials & Education */}
        <Education />

        {/* Section 11: International Growth & Global Roadmap */}
        <GlobalCareer />

        {/* Section 12: Dual-Track Marketing Career Trajectory */}
        <CareerPath />

        {/* Section 13: Leadership Endorsements */}
        <Testimonials />

        {/* Section 14: Core Philosophy & Editorial Brand Statement */}
        <BrandStatement />

        {/* Section 15: Contact & Growth Inquiry Hub */}
        <Contact />

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Quick Actions Dock */}
      <QuickActionsDock
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      {/* 1-Page Executive ATS Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

    </div>
  );
}
