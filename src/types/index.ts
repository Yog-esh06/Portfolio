export type ProjectCategory = 
  | 'All'
  | 'Agentic AI'
  | 'Operations Research'
  | 'Causal AI'
  | 'FinTech & Full-Stack'
  | 'Systems & Infra';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectArchitectureStep {
  name: string;
  role: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitectureStep[];
  technologies: string[];
  metrics?: ProjectMetric[];
  featured: boolean;
  featuredOrder?: number;
  badge?: string;
  githubUrl?: string;
  demoUrl?: string;
  status: 'Production Prototype' | 'Live Deployed' | 'Research Prototype' | 'Benchmarked';
  highlights: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  track: string;
  venue: string;
  year: number;
  collaborators?: string[];
  abstract: string;
  problem: string;
  methodology: string;
  results: {
    metric: string;
    value: string;
    comparison?: string;
  }[];
  tags: string[];
  repoUrl?: string;
  status: 'Presented' | 'Completed Research';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  division: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  badges: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  competition: string;
  ranking: string;
  scale: string;
  associatedProject: string;
  projectUrl?: string;
  description: string;
  year: string;
  evidence: string;
  badgeType: 'finalist' | 'winner' | 'presentation';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & ML' | 'Data & Analytics' | 'Deloitte Exclusive' | 'Hackathons & Awards' | 'NPTEL' | 'Job Simulations' | 'Systems & Dev';
  year?: string;
  verified: boolean;
  description?: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

