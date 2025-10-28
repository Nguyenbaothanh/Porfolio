import type React from 'react';

export interface Skill {
  name: string;
  icon: string; // Changed from React.ReactNode to string to hold SVG markup
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface PortfolioContent {
  header: {
    name: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    description: string;
  };
  about: {
    image: string;
    p1: string;
    p2: string;
    p3: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  footer: {
    name: string;
  }
}
