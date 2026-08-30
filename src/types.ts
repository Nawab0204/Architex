export type ProjectCategory = 
  | 'All'
  | 'Residential'
  | 'Extensions'
  | 'New Build'
  | 'Renovation'
  | 'Commercial'
  | 'Visualisation'
  | 'Planning';

export interface TechnicalDrawing {
  id: string;
  title: string;
  type: 'Floor Plan' | 'Elevation' | 'Section' | 'Technical Drawing' | 'Site Plan';
  image: string;
  description: string;
  scale?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  year: string;
  clientType?: string;
  image: string;
  heroImage: string;
  description: string;
  brief: string;
  approach: string;
  specifications: {
    area?: string;
    duration?: string;
    servicesProvided: string[];
    localAuthority?: string;
  };
  gallery: string[];
  drawings: TechnicalDrawing[];
  featured?: boolean;
  latest?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  heroImage: string;
  deliverables: string[];
  processStages: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  project: string;
  location: string;
  year?: string;
}

export interface DifferenceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    leadParagraph: string;
    sections: {
      heading: string;
      text: string[];
      quote?: string;
      image?: string;
      caption?: string;
    }[];
    conclusion: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  projectSlug?: string;
}
