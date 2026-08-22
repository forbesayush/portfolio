export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Product Management' | 'Business Analytics' | 'Operations & Strategy' | 'Strategy & Consulting';
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureSummary: string;
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  featured: boolean;
  year: string;
  accentColor: string;
  glslPreset?: 'particles' | 'mesh' | 'core' | 'quantum';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    description: string;
    codeSnippet?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  architecturalImpact: string;
}

export interface ActivityData {
  timezones: { city: string; timezone: string; label: string }[];
  status: string;
}
