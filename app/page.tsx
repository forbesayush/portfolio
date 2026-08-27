import dynamic from "next/dynamic";
import Navigation from "@/components/UI/Navigation";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import { PROFILE_CONTENT } from "@/lib/content";

const ExperienceLazy = dynamic(() => import("@/components/sections/Experience"), {
  ssr: true,
  loading: () => <div className="py-24 px-6 max-w-5xl mx-auto" aria-hidden="true" />,
});

const EducationLazy = dynamic(() => import("@/components/sections/Education"), {
  ssr: true,
  loading: () => <div className="py-24 px-6 max-w-5xl mx-auto" aria-hidden="true" />,
});

const ProjectsLazy = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
  loading: () => <div className="py-24 px-6 max-w-6xl mx-auto" aria-hidden="true" />,
});

const SkillsLazy = dynamic(() => import("@/components/sections/Skills"), {
  ssr: true,
  loading: () => <div className="py-24 px-6 max-w-5xl mx-auto" aria-hidden="true" />,
});

const ContactLazy = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
  loading: () => <div className="py-32 px-6 max-w-4xl mx-auto" aria-hidden="true" />,
});

export default function Page() {
  return (
    <main className="relative bg-neutral-950 text-neutral-100 min-h-screen selection:bg-sky-500 selection:text-black">
      <Navigation />

      <div className="relative z-10">
        <Hero />
        <Introduction />
        <ExperienceLazy />
        <EducationLazy />
        <ProjectsLazy />
        <SkillsLazy />
        <ContactLazy />
      </div>

      <footer className="py-8 text-center text-xs text-neutral-600 border-t border-neutral-900 z-10 relative">
        © {new Date().getFullYear()} {PROFILE_CONTENT.person.name}. All rights reserved.
      </footer>
    </main>
  );
}
