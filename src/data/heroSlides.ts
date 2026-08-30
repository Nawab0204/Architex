import { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'ARCHITECTURAL DESIGN',
    title: 'Spaces designed around the way people live.',
    description: 'Thoughtful architectural design combining function, character and careful attention to detail for homes and developments.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    primaryCta: {
      text: 'Explore Our Projects',
      href: '/projects'
    },
    secondaryCta: {
      text: 'Start a Project',
      href: '/contact'
    },
    projectSlug: 'harborne-contemporary-residence'
  },
  {
    id: 'slide-2',
    eyebrow: 'RESIDENTIAL DESIGN',
    title: 'Transforming ideas into considered spaces.',
    description: 'From bespoke rear extensions and whole-house renovations to distinct contemporary new-build residential concepts.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    primaryCta: {
      text: 'View Residential Work',
      href: '/projects?category=Residential'
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services'
    },
    projectSlug: 'edgbaston-pavilion-extension'
  },
  {
    id: 'slide-3',
    eyebrow: 'PLANNING & DEVELOPMENT',
    title: 'Clear design. Practical thinking. Strong foundations.',
    description: 'Architectural solutions developed around the opportunities and constraints of each site, navigating local planning with confidence.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    primaryCta: {
      text: 'Planning & Feasibility',
      href: '/services/planning-permission'
    },
    secondaryCta: {
      text: 'View Case Studies',
      href: '/projects'
    },
    projectSlug: 'solihull-courtyard-villa'
  },
  {
    id: 'slide-4',
    eyebrow: 'VISUALISATION',
    title: 'See the idea before it becomes reality.',
    description: 'High-quality architectural visuals, material studies and spatial drawings that make design decisions easier to understand.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
    primaryCta: {
      text: 'Discover Visualisation',
      href: '/services/3d-visualisation'
    },
    secondaryCta: {
      text: 'Start a Project',
      href: '/contact'
    },
    projectSlug: 'jewellery-quarter-loft-conversion'
  }
];
