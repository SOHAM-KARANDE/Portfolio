import React from 'react';

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  skills: string[];
  credentialUrl: string;
}

export interface CoreCompetency {
  name: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: number;
  title: string;
  tagline: string;
  imageUrl: string;
  problem: string;
  role: string;
  solution: string;
  techStack: string[];
  challenges: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  skills: string[];
}

export enum JobType {
    EMPLOYMENT = 'Employment',
    FREELANCE = 'Freelance',
    CERTIFICATION = 'Certification'
}

export interface ProfessionalExperience {
  type: JobType;
  role: string;
  company: string;
  dates: string;
  achievements: string[];
  credentialUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface AiService {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface AiTool {
  name: string;
  description: string;
  toolUrl: string;
  sourceUrl: string;
}

export interface AiResource {
  title:string;
  description: string;
  url: string;
}

export interface Hobby {
  name: string;
  description: string;
  imageUrl: string;
}

export type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

// New types for "Architect's Blueprint"
export interface ImpactStat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Skill {
  name: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface MapHotspot {
  id: string;
  position: { top: string; left: string };
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
}

export interface NavigationGroup {
  group: string;
  items: string[];
}
