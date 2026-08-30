import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'architectural-design',
    slug: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Comprehensive concept-to-detail design shaping bespoke residential and commercial spaces with thoughtful clarity.',
    fullDescription: 'Our architectural design service turns spatial ambitions into refined, buildable reality. We balance spatial flow, light, materials, context, and structural efficiency to design buildings and extensions that elevate daily life.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'Site analysis, measured survey review & spatial zoning',
      'Iterative concept options with floor plans, sections & sketches',
      'Material palettes and architectural elevations',
      'Coordinated architectural drawing packages for tender and construction',
      'Interior spatial planning and joinery coordination'
    ],
    processStages: [
      {
        title: 'Briefing & Spatial Exploration',
        description: 'We listen closely to your lifestyle requirements, aesthetic goals, and project budget before generating distinct conceptual layouts.'
      },
      {
        title: 'Design Development',
        description: 'Refining the chosen concept with precise dimensions, window placements, light studies, and material selections.'
      },
      {
        title: 'Technical Integration',
        description: 'Ensuring structural grids, mechanical requirements, and construction practicalities are integrated seamlessly.'
      }
    ],
    faq: [
      {
        question: 'When should I appoint an architectural designer for my project?',
        answer: 'As early as possible in your thinking. Early architectural involvement helps establish realistic budgets, unlocks creative spatial solutions, and identifies planning constraints before time and money are spent.'
      },
      {
        question: 'Do you work on both small home extensions and large new builds?',
        answer: 'Yes. Every project is approached with the exact same rigor, craftsmanship, and attention to detail, whether a focused kitchen extension or a multi-unit development.'
      }
    ],
    relatedProjectSlugs: ['harborne-contemporary-residence', 'solihull-courtyard-villa', 'sutton-coldfield-terrace-redesign']
  },
  {
    id: 'planning-permission',
    slug: 'planning-permission',
    title: 'Planning Permission',
    shortDescription: 'Navigating local planning policy, permitted development rights, conservation constraints, and full planning applications.',
    fullDescription: 'Planning success requires a thorough understanding of local authority policies, urban context, and clear architectural drawings. We prepare thorough planning packages and act as your agent throughout the statutory determination period.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'Permitted Development (PD) vs Full Planning appraisal',
      'Existing and proposed floor plans, elevations, sections & roof plans',
      'Site location plans & Ordnance Survey block plans (1:500 / 1:1250)',
      'Design and Access Statements (DAS) & Heritage Impact statements',
      'Direct coordination with local planning officers & submission management'
    ],
    processStages: [
      {
        title: 'Policy Appraisal & Pre-Application',
        description: 'Analyzing local council policies, neighborhood precedents, Green Belt guidelines, or Conservation Area restrictions.'
      },
      {
        title: 'Application Package Compilation',
        description: 'Drafting compliant technical drawings and persuasive written statements supporting the proposal.'
      },
      {
        title: 'Liaison & Determination',
        description: 'Monitoring progress through the statutory 8-week period, responding to case officer queries and managing revisions.'
      }
    ],
    faq: [
      {
        question: 'How long does a planning application take in Birmingham and the West Midlands?',
        answer: 'Standard householder and minor planning applications have a statutory determination period of 8 weeks from validation by the local council.'
      },
      {
        question: 'Can you advise if my project can be built under Permitted Development?',
        answer: 'Yes. Many single-storey rear extensions, loft conversions, and outbuildings can be completed under Permitted Development rights without full planning permission. We prepare Lawful Development Certificate packages for total peace of mind.'
      }
    ],
    relatedProjectSlugs: ['edgbaston-pavilion-extension', 'moseley-heritage-conversion', 'barnt-green-sustainable-concept']
  },
  {
    id: 'building-regulations',
    slug: 'building-regulations',
    title: 'Building Regulations',
    shortDescription: 'Detailed technical drawing packages ensuring compliance with UK Building Regulations, structural safety, and energy standards.',
    fullDescription: 'Once planning is secured, your scheme must satisfy national Building Regulations covering structural stability, thermal insulation (Part L), fire safety (Part B), drainage (Part H), and ventilation (Part F). We produce comprehensive technical packages for building control approval and builder tendering.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'Full technical Building Regulations drawing package at 1:50 & 1:20 scales',
      'Construction details for foundations, roof junctions, damp proofing & insulation',
      'Coordination with Structural Engineers and SAP/Energy Assessors',
      'Building Control application submission (Local Authority or Approved Inspector)',
      'Accurate specification notes for builder tendering'
    ],
    processStages: [
      {
        title: 'Engineering & Specialist Coordination',
        description: 'Aligning architectural drawings with structural calculations, beam sizes, and soil report findings.'
      },
      {
        title: 'Detailing & Part L Optimization',
        description: 'Specifying thermal continuity, airtightness layers, acoustic separations, and fire stopping systems.'
      },
      {
        title: 'Building Control Approval',
        description: 'Submitting the full plans package for formal plan-check approval prior to breaking ground.'
      }
    ],
    faq: [
      {
        question: 'Why are Building Regulations drawings necessary if I already have planning approval?',
        answer: 'Planning permission only approves the external appearance and use of the building. Building Regulations drawings specify the actual construction methods, thermal performance, fire safety, and structural integrity required by UK law.'
      },
      {
        question: 'Can builders quote accurately from Building Regulations drawings?',
        answer: 'Yes. A comprehensive Building Regs package provides builders with the exact specifications, steelwork, and insulation requirements, minimizing variations and unexpected costs during construction.'
      }
    ],
    relatedProjectSlugs: ['harborne-contemporary-residence', 'jewellery-quarter-loft-conversion', 'solihull-courtyard-villa']
  },
  {
    id: '3d-visualisation',
    slug: '3d-visualisation',
    title: '3D Visualisation',
    shortDescription: 'Realistic architectural visuals and spatial renderings that bring proposals to life before construction begins.',
    fullDescription: 'Visualisation bridges the gap between technical two-dimensional architectural drawings and physical reality. We produce photorealistic exterior and interior perspectives to help you visualize light, materials, and volumes with total confidence.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'High-resolution exterior day, twilight, and seasonal renderings',
      'Interior spatial perspectives showcasing finishes, joinery & lighting',
      'Context photo-montages for planning applications in sensitive settings',
      'Material and textural comparison studies',
      '3D floor plans and axonometric views'
    ],
    processStages: [
      {
        title: 'Digital Modeling',
        description: 'Building an accurate 3D digital model from verified CAD drawings and site survey data.'
      },
      {
        title: 'Lighting & Texturing',
        description: 'Applying physically accurate material textures (brick, timber, zinc, stone) and real geographical sun positions.'
      },
      {
        title: 'Final High-Res Post-Production',
        description: 'Refining atmospheric tones, reflections, and landscape integration for publication or planning presentation.'
      }
    ],
    faq: [
      {
        question: 'Do visualisations help with difficult planning applications?',
        answer: 'Significantly. Planning officers and committee members can instantly comprehend the scale, massing, and materiality of the scheme in its real context, reducing misconceptions and delays.'
      },
      {
        question: 'Can visualisations be updated as our material choices change?',
        answer: 'Yes. Our digital models allow swift adjustments to brick colors, window frame finishes, and interior layouts during the design phase.'
      }
    ],
    relatedProjectSlugs: ['barnt-green-sustainable-concept', 'solihull-courtyard-villa', 'jewellery-quarter-loft-conversion']
  },
  {
    id: 'extensions-renovations',
    slug: 'extensions-renovations',
    title: 'Extensions & Renovations',
    shortDescription: 'Tailored architectural solutions for rear extensions, wrap-arounds, loft conversions, and full house remodelling.',
    fullDescription: 'Extending or reconfiguring an existing property requires careful spatial diagnosis. We specialize in unlocking underutilized footprints, creating open-plan kitchen and living areas, and improving daylight and garden connectivity.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'Feasibility study assessing structural wall removals and layout options',
      'Single-storey rear, side-return, and wrap-around extension drawings',
      'Dormer, hip-to-gable, and mansard loft conversion design',
      'Internal reconfiguration plans and glazed door/window schedules',
      'Building regulations and structural engineer liaison'
    ],
    processStages: [
      {
        title: 'Home Walkthrough & Diagnostic',
        description: 'Evaluating how your family uses the current home, pinpointing dark corridors, pinch points, and garden connections.'
      },
      {
        title: 'Layout Optimization',
        description: 'Creating distinct options for open-plan living, utility spaces, pantries, boot rooms, and bedrooms.'
      },
      {
        title: 'Consents & Approvals',
        description: 'Managing Permitted Development certificates or planning permissions and producing full technical drawings.'
      }
    ],
    faq: [
      {
        question: 'How much value can a well-designed extension add to a home?',
        answer: 'Beyond financial equity, thoughtful architectural design transforms daily functionality, natural light levels, and thermal efficiency for decades.'
      }
    ],
    relatedProjectSlugs: ['harborne-contemporary-residence', 'edgbaston-pavilion-extension', 'moseley-heritage-conversion']
  },
  {
    id: 'development-site-design',
    slug: 'development-site-design',
    title: 'Development & Site Design',
    shortDescription: 'Strategic site layout, density optimization, and planning feasibility for residential developers and landowners.',
    fullDescription: 'We assist private landowners, property investors, and developers in unlocking site potential. From backland plots and infill developments to multi-unit schemes and commercial conversions, we provide clear architectural strategy grounded in commercial realities.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    deliverables: [
      'Site capacity & density massing options',
      'Planning policy constraints appraisal (highways, overlooking, daylight angles)',
      'Schematic masterplans and floor plates (Gross Internal Area calculations)',
      'Pre-application presentation documents for planning authority engagement',
      'Commercial viability and phasing guidance'
    ],
    processStages: [
      {
        title: 'Site Analysis & Policy Review',
        description: 'Investigating access, topography, boundary setbacks, local housing mix policies, and infrastructure easements.'
      },
      {
        title: 'Massing & Density Studies',
        description: 'Testing multiple footprint and height scenarios to maximize site yield while respecting context.'
      },
      {
        title: 'Pre-App & Formal Strategy',
        description: 'Preparing rigorous documentation to support formal council engagement and mitigate planning risk.'
      }
    ],
    faq: [
      {
        question: 'Do you work with land buyers and small developers?',
        answer: 'Yes. We frequently conduct rapid feasibility reviews to assess whether a potential land acquisition or commercial property conversion is commercially viable before purchase.'
      }
    ],
    relatedProjectSlugs: ['digbeth-creative-studios', 'jewellery-quarter-loft-conversion', 'solihull-courtyard-villa']
  }
];
