import { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'ACHITEX • ARCHITECTURE & ENGINEERING',
    title: 'Spaces designed around the way you live.',
    description: 'Personal, director-led architectural care from early ideas to planning approval and completed construction.',
    image: '/images/hero/hero-slide-1-contemporary-extension.jpg',
    primaryCta: {
      text: 'Book Your Consultation',
      href: '/contact'
    },
    secondaryCta: {
      text: 'Our Portfolio',
      href: '/projects'
    },
    projectSlug: 'harborne-house'
  },
  {
    id: 'slide-2',
    eyebrow: 'BRIGHT 3D DESIGN & EXTENSIONS',
    title: 'Bright, open living spaces flooded with natural light.',
    description: 'Kitchen extensions, loft conversions, and modern family homes visualised in photorealistic 3D.',
    image: '/images/hero/hero-slide-2-open-plan-living.jpg',
    primaryCta: {
      text: 'Creative Design',
      href: '/services/creative-design'
    },
    secondaryCta: {
      text: 'Our Portfolio',
      href: '/projects'
    },
    projectSlug: 'edgbaston-pavilion'
  },
  {
    id: 'slide-3',
    eyebrow: '100% PLANNING APPROVALS & BUILDING REGULATIONS',
    title: '100% planning approvals with zero stress.',
    description: 'We manage council applications, Permitted Development rights, and building regulation drawings with certainty.',
    image: '/images/hero/hero-slide-3-glazed-pavilion.jpg',
    primaryCta: {
      text: 'Book Your Consultation',
      href: '/contact'
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services'
    },
    projectSlug: 'residential-loft-adaptation'
  },
  {
    id: 'slide-4',
    eyebrow: 'BESPOKE HOMES & SUSTAINABLE ENGINEERING',
    title: 'Transforming UK houses into timeless homes.',
    description: 'Architectural vision aligned with structural engineering precision for seamless, worry-free builds.',
    image: '/images/hero/hero-slide-4-bespoke-villa.jpg',
    primaryCta: {
      text: 'Book Your Consultation',
      href: '/contact'
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services'
    },
    projectSlug: 'solihull-courtyard-villa'
  }
];
