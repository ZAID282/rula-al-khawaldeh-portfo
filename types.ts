export interface ExperienceItem {
  id: number;
  role: string;
  period: string;
  institution: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  role: string;
  description: string;
  type: 'election' | 'conference' | 'training';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}