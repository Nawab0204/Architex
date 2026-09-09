import { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'RA ARCHITECTS // ARCHIVE',
    title: 'Precision Infrastructure, Civic Landscapes & Resilient Architecture.',
    description: 'Statutory planning approvals, mission-critical engineering documentation, and contemporary civic public realm masterplanning executed to construction precision.',
    image: '/drawings/coombe-fields-switch-house-elevations.svg',
    primaryCta: {
      text: 'Examine Case Studies',
      href: '/projects'
    },
    secondaryCta: {
      text: 'Index Archive',
      href: '/index'
    },
    projectSlug: 'coombe-fields-33kv-substation'
  },
  {
    id: 'slide-2',
    eyebrow: 'CIVIC & PUBLIC REALM',
    title: 'Al-Waha Civic Oasis & Parametric Canopy Park.',
    description: 'An undulating anticlastic canopy and radial vertical glulam timber colonnade framing a protected microclimate gathering lawn and public promenade.',
    image: '/images/projects/civic-oasis-park-aerial-overview.jpg',
    primaryCta: {
      text: 'View Project Dossier',
      href: '/projects/al-waha-civic-oasis'
    },
    secondaryCta: {
      text: 'All Works',
      href: '/projects'
    },
    projectSlug: 'al-waha-civic-oasis'
  },
  {
    id: 'slide-3',
    eyebrow: 'INSTITUTIONAL FACILITY',
    title: 'The Monolith & Veil: Cultural / Educational Architecture.',
    description: 'A monolithic mineral plaster massing counterbalanced by calibrated twisted aerofoil louvre systems, modulating incoming daylight and passive thermal loads.',
    image: '/images/projects/monolith-veil-front-elevation-100.jpg',
    primaryCta: {
      text: 'View Façade Studies',
      href: '/projects/monolith-veil-facility'
    },
    secondaryCta: {
      text: 'Explore Archive',
      href: '/index'
    },
    projectSlug: 'monolith-veil-facility'
  },
  {
    id: 'slide-4',
    eyebrow: 'MISSION-CRITICAL INFRASTRUCTURE',
    title: 'Coombe Fields 33kV Primary Substation & Switch House.',
    description: 'Engineered sub-floor cable trenches, Kingspan RW1000 insulated panels, and Section 278 highway bellmouth junction designed directly adjacent to Rolls-Royce.',
    image: '/drawings/coombe-fields-substation-site-plan.svg',
    primaryCta: {
      text: 'Inspect Technical Package',
      href: '/projects/coombe-fields-33kv-substation'
    },
    secondaryCta: {
      text: 'Consult Studio',
      href: '/contact'
    },
    projectSlug: 'coombe-fields-33kv-substation'
  }
];
