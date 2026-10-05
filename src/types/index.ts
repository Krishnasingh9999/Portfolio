export interface Skill {
  name: string;
  iconName: string; // Dynamic icon reference mapping
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github: string;
  live: string;
  liveAdmin?: string;
  image?: string;
  images?: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  type?: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
  grade?: string;
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
