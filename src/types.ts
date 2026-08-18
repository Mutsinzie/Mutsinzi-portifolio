export interface SocialLink {
  name: string;
  url: string;
  iconName: 'Github' | 'Linkedin' | 'Instagram' | 'Mail' | 'Phone';
  label: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  roleTitles: string[];
  location: string;
  country: string;
  phone: string;
  phoneRaw: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  shortBio: string;
  aboutStatement: string;
  aboutDetails: string[];
  interests: string[];
  profilePhotoPath: string;
  cvPath: string;
  availability: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'blockchain' | 'tools';
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Backend & Auth' | 'Management Systems' | 'Blockchain & Web3';
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  certificate: string;
  startDate: string;
  graduationDate: string;
  description: string;
  status: 'Completed' | 'In Progress';
  skillsGained: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: 'Internship' | 'Freelance' | 'Personal Projects' | 'Academic' | 'Continuous Learning';
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
