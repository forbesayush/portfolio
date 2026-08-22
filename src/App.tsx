import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { HeroScene } from './components/3d/HeroScene';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TelemetrySection } from './components/sections/TelemetrySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { AIChatModal } from './components/ai/AIChatModal';
import { TerminalModal } from './components/terminal/TerminalModal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis 120 FPS inertial smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    lenis.on('scroll', (e: { progress: number }) => {
      setScrollProgress(e.progress);
    });

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 font-sans selection:bg-cyber-cyan selection:text-black overflow-x-hidden bg-noise">
      {/* Dynamic Magnetic Cursor */}
      <CustomCursor />

      {/* 3D WebGL Scene Background Layer */}
      <HeroScene scrollProgress={scrollProgress} />

      {/* Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenAI={() => setIsAIOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <TelemetrySection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Telemetry Footer */}
      <Footer />

      {/* Interactive AI Persona Modal */}
      <AIChatModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

      {/* Cyberpunk CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
