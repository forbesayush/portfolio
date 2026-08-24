import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ActivitySection } from './components/sections/ActivitySection';
import { ContactSection } from './components/sections/ContactSection';
import { AIChatModal } from './components/ai/AIChatModal';

export function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans selection:bg-accent selection:text-white overflow-x-hidden bg-editorial-grid">
      {/* Editorial Navigation Bar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 py-8 sm:py-12">
        <HeroSection onOpenAI={() => setIsAIOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ActivitySection />
        <ContactSection />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Executive Portfolio Assistant Modal */}
      <AIChatModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
}

export default App;
