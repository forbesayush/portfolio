import profile from "@/content/profile.json";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  metrics?: string[];
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const PROFILE_CONTENT = {
  person: profile.person,
  experiences: profile.experiences as ExperienceItem[],
  education: profile.education as EducationItem[],
  certifications: profile.certifications as CertificationItem[],
  projects: profile.projects as ProjectItem[],
  skills: profile.skills as SkillCategory[],
};
