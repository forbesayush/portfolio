import Navigation from "@/components/UI/Navigation";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Page() {
  return (
    <main className="relative bg-neutral-950 text-neutral-100 min-h-screen selection:bg-sky-500 selection:text-black">
      <Navigation />

      <div className="relative z-10">
        <Hero />
        <Introduction />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <footer className="py-8 text-center text-xs text-neutral-600 border-t border-neutral-900 z-10 relative">
        © {new Date().getFullYear()} {PROFILE_CONTENT.person.name}. All rights reserved.
      </footer>
    </main>
  );
}
