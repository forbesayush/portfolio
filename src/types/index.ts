export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI Systems' | 'Spatial & WebGL' | 'Distributed Systems' | 'Quantum & Security';
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureSummary: string;
  liveUrl?: string;
  githubUrl?: string;
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
    level: number; // 1-100
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

export interface TelemetryData {
  timezones: { city: string; timezone: string; label: string }[];
  uptime: string;
  activeAgents: number;
  memoryUsage: string;
  latency: string;
  coreVersion: string;
}
