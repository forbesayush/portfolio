import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import FigmaMultiplayerLayer from './components/FigmaMultiplayerLayer';
import FigmaHUD from './components/FigmaHUD';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [showCursors, setShowCursors] = useState(true);
  const [isDesignMode, setIsDesignMode] = useState(true);
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
    return false; // Default to Light Mode
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

  const toggleCursors = () => {
    setShowCursors(prev => !prev);
  };

  const toggleDesignMode = () => {
    setIsDesignMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#08090A] text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-rose-500/20 selection:text-rose-500 dark:selection:bg-rose-500/30 dark:selection:text-white transition-colors duration-300 font-sans figma-canvas-grid relative">
      
      {/* Figma Multiplayer Collaborative Cursors & Comment Pins */}
      <FigmaMultiplayerLayer 
        showCursors={showCursors} 
        isDesignMode={isDesignMode} 
      />

      {/* Floating Figma Canvas Top Toolbar */}
      <FigmaHUD
        showCursors={showCursors}
        onToggleCursors={toggleCursors}
        isDesignMode={isDesignMode}
        onToggleDesignMode={toggleDesignMode}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

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

        {/* Section 03: Marketing Performance Telemetry */}
        <ImpactMetrics />

        {/* Section 04: The Modern Growth Stack (4 Pillars) */}
        <PillarCards />

        {/* Section 05: Marketing & Growth Campaign Casebooks */}
        <CaseStudies />

        {/* Section 06: Interactive Growth & Funnel Simulator */}
        <FunnelVisualizer />

        {/* Section 07: Go-To-Market Lifecycle Framework */}
        <ProductFramework />

        {/* Section 08: Strategic Problem Solving & Advisory Framework */}
        <StrategyFramework />

        {/* Section 09: Academic Foundation & Credentials */}
        <Education />

        {/* Section 10: Marketing & Growth Stack Toolkit */}
        <SkillsMatrix />

        {/* Section 11: International Growth & Global Roadmap */}
        <GlobalCareer />

        {/* Section 12: Dual-Track Marketing Career Trajectory */}
        <CareerPath />

        {/* Section 13: Stakeholder & Leadership Endorsements */}
        <Testimonials />

        {/* Section 14: High-Impact Marketing Brand Statement */}
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

      {/* 1-Page Executive Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
