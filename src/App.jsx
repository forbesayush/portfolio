import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ImpactMetrics from './components/ImpactMetrics';
import PillarCards from './components/PillarCards';
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
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = window.localStorage.getItem('ayush-theme');
        if (saved !== null) {
          return saved === 'dark';
        }
      } catch (e) {
        console.warn('Storage unavailable:', e);
      }
    }
    return false; // Default to Light Mode as requested
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('ayush-theme', 'dark');
          }
        } catch (e) {}
      } else {
        document.documentElement.classList.remove('dark');
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('ayush-theme', 'light');
          }
        } catch (e) {}
      }
    }
  }, [isDark]);

  useEffect(() => {
    // Track visitor arrival via Telegram Bot
    trackVisitor();
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#08090A] text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-linear-brand/20 selection:text-linear-brand dark:selection:bg-linear-brand/30 dark:selection:text-white transition-colors duration-300 font-sans">
      {/* Sticky Navigation Header */}
      <Navbar 
        isDark={isDark} 
        onToggleTheme={toggleTheme} 
        onOpenBrief={() => setIsBriefOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          isDark={isDark} 
          onOpenBrief={() => setIsBriefOpen(true)} 
        />

        {/* Section 01: About & Career Story Evolution */}
        <About />

        {/* Section 02: Verified Career Journey Timeline */}
        <ExperienceTimeline />

        {/* Section 03: Impact Numbers & Animated Counters */}
        <ImpactMetrics />

        {/* Section 04: What I Work On (3 Pillars) */}
        <PillarCards />

        {/* Section 05: Editorial Case Studies */}
        <CaseStudies />

        {/* Section 06: Product Thinking Framework */}
        <ProductFramework />

        {/* Section 07: Consulting & Problem Solving Framework */}
        <StrategyFramework />

        {/* Section 08: Education Timeline */}
        <Education />

        {/* Section 09: Technical & Professional Toolkit */}
        <SkillsMatrix />

        {/* Section 10: Building For A Global Career */}
        <GlobalCareer />

        {/* Section 11: Dual-Track Career Direction */}
        <CareerPath />

        {/* Stakeholder & Leadership Endorsements */}
        <Testimonials />

        {/* Section 12: High-Impact Brand Statement */}
        <BrandStatement />

        {/* Section 13: Contact & Direct Message Hub */}
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

      {/* 1-Page Executive Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
