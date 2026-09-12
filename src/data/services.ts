import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'all-architectural-services',
    slug: 'all-architectural-services',
    title: 'Architecture services',
    shortDescription: 'Complete residential architectural care from initial feasibility and 3D concepts to statutory planning permission and builder-ready building regulations.',
    fullDescription: 'We provide end-to-end residential architectural services under one roof. We guide UK homeowners seamlessly through every milestone: from your initial in-person consultation and precision 3D digital laser survey, to collaborative concept design, planning permissions, structural calculations, and millimeter-accurate Building Regulations technical construction drawing packs.',
    iconName: 'Compass',
    image: '/images/services/architecture-services.jpg',
    heroImage: '/images/services/architecture-services.jpg',
    whatWeDo: [
      'Comprehensive in-person measured survey using precision digital laser scanners',
      'Site feasibility appraisal evaluating local council planning policies and precedents',
      'Photorealistic 3D external and interior digital models with real sun path studies',
      'Full management of council planning applications, statements, and officer negotiations',
      'Millimeter-accurate Building Regulations technical construction drawing packs for builders',
      'Structural engineering coordination integrating steel portal frames and load calculations'
    ],
    deliverables: [
      'Statutory 1:50 and 1:100 architectural drawing sets (plans, elevations, sections)',
      'Immersive 3D perspective visualisations of internal spaces and exterior facades',
      'Ordnance Survey 1:1250 location plans and 1:500 block layout drawings',
      'Design & Access Statements and Heritage Statements for conservation areas',
      'Full Building Regulations compliance specification and structural engineer liaison',
      'Contractor tender documentation enabling transparent, comparable builder quotes'
    ],
    benefits: [
      {
        title: 'Everything Handled Under One Roof',
        description: 'No managing separate draughtsmen, planning consultants, or structural engineers. We coordinate design, planning, structural calculations, and building control in one unified process.'
      },
      {
        title: '100% Planning Approval Track Record',
        description: 'Our thorough understanding of local council policies and former planning officer insights ensures schemes are designed for immediate validation and smooth council approval.'
      },
      {
        title: 'Photorealistic 3D Exploration',
        description: 'Walk around and experience your future home before construction begins. Test room flow, sunlight orientation, window placements, and kitchen island layouts.'
      },
      {
        title: 'Builder-Ready Certainty',
        description: 'Our detailed technical specifications eliminate ambiguity on site, preventing unexpected builder extras, delay penalties, and contractual variations.'
      }
    ],
    processStages: [
      {
        title: '01 — Feasibility & Measured Laser Survey',
        description: 'We visit your property, listen to your family lifestyle needs, and perform a millimeter-accurate digital laser survey of existing floor plans, roof heights, and boundary datum.'
      },
      {
        title: '02 — Creative 3D Concept Design',
        description: 'We explore creative layouts, daylighting solutions, and vaulted extensions, presenting photorealistic 3D models and dimensioned plans so you can test options collaboratively.'
      },
      {
        title: '03 — Statutory Council Planning Application',
        description: 'We assemble all statutory drawings, write persuasive planning statements, submit directly through the Planning Portal, and proactively liaise with council officers to approval.'
      },
      {
        title: '04 — Building Regulations & Structural Pack',
        description: 'We produce comprehensive technical construction drawings, coordinate structural engineering calculations, and achieve statutory Building Control approval.'
      },
      {
        title: '05 — Contractor Tender & Construction Support',
        description: 'We assist with builder tender comparisons and answer technical on-site contractor queries throughout the physical build.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Sunlit open-plan kitchen and dining extension opening seamlessly to the garden',
        tag: 'REAR EXTENSION'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Vaulted living space with flush threshold glazing and integrated architectural lighting',
        tag: 'INTERIOR FLOW'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        caption: 'Contemporary glazed timber pavilion extension harmonising with heritage brickwork',
        tag: 'MATERIAL PAIRING'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bright double-height entrance hall and staircase remodelling with rooflight illumination',
        tag: 'DAYLIGHT OPTIMIZATION'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        caption: 'Minimalist kitchen island with bespoke flush cabinetry and garden panoramic views',
        tag: 'FAMILY LIVING'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bespoke contemporary dwelling with courtyard gardens and private entertaining terraces',
        tag: 'NEW BUILD'
      }
    ],
    faq: [
      {
        question: 'What architectural services do you provide for residential homeowners?',
        answer: 'We provide end-to-end residential architectural consultancy: measured site surveys, concept designs, 3D modelling, planning advice, planning permission applications, Certificate of Lawfulness for Permitted Development, and full Building Regulations technical packages.'
      },
      {
        question: 'Do you work on both small home extensions and large bespoke new builds?',
        answer: 'Yes. We cater to private homeowners on projects ranging from open-plan kitchen extensions, rear wraparounds, and dormer loft conversions to whole-house deep remodelling and bespoke one-off new build dwellings.'
      },
      {
        question: 'How do you coordinate with builders and structural engineers?',
        answer: 'We collaborate directly with reputable structural engineers to integrate steel beam sizes and padstone calculations into our drawings, ensuring contractors have a clear, comprehensive pack to build from.'
      },
      {
        question: 'How much do your architectural packages cost?',
        answer: 'We work on transparent, fixed itemized fees divided into clear milestone stages. Following your initial consultation, you receive a written proposal outlining exact costs for survey, concept design, planning submission, and building regulations.'
      }
    ],
    relatedProjectSlugs: ['harborne-house', 'edgbaston-pavilion', 'residential-loft-adaptation', 'solihull-courtyard-villa']
  },
  {
    id: 'planning-advice',
    slug: 'planning-advice',
    title: 'Planning advice',
    shortDescription: 'Straightforward planning feasibility advice to help you understand what is possible on your property before you spend.',
    fullDescription: 'Navigating local council policies does not need to be daunting. Backed by in-depth knowledge of local authority planning guidelines and former planning officer insights, we provide honest, strategic planning advice. We analyze Permitted Development rights, local precedent approvals, Conservation Area restrictions, and Green Belt policies so you can proceed with total certainty.',
    iconName: 'HelpCircle',
    image: '/images/services/planning-advice.jpg',
    heroImage: '/images/services/planning-advice.jpg',
    whatWeDo: [
      'Comprehensive property boundary, zoning, and historical council planning research',
      'Evaluation of General Permitted Development Order (GPDO) Class A, B, and E rights',
      'Assessment of 45-degree light codes, neighbor overlooking, and boundary setbacks',
      'Advice on Conservation Areas, Article 4 Directions, and Listed Building controls',
      'Strategic roadmap recommending the fastest, lowest-risk route to council sign-off'
    ],
    deliverables: [
      'Written planning feasibility review detailing development potential and constraints',
      'Clear comparison between Permitted Development and Full Planning routes',
      'Council precedent analysis of approved extensions on neighboring streets',
      'Pre-application advice package formulation for complex or contentious sites'
    ],
    benefits: [
      {
        title: 'Save Money Early',
        description: 'Identify potential council objections before committing thousands to full architectural drawings or non-refundable planning fees.'
      },
      {
        title: 'Plain English Guidance',
        description: 'No confusing legal jargon. We give you clear, actionable advice on what can realistically be built on your plot.'
      },
      {
        title: 'Former Planning Officer Insight',
        description: 'We understand how local authority case officers assess applications, daylight angles, and streetscape character from the inside out.'
      },
      {
        title: 'Accelerate Project Timelines',
        description: 'Designing strictly within council policy constraints from day one prevents costly revisions, resubmissions, and planning appeals.'
      }
    ],
    processStages: [
      {
        title: '01 — Initial Property Review',
        description: 'Provide your address and outline your aspirations for an extension, loft conversion, or remodelling.'
      },
      {
        title: '02 — Local Council Precedents & Policy Check',
        description: 'We review local planning history, Permitted Development allowances, Tree Preservation Orders (TPOs), and council design guides.'
      },
      {
        title: '03 — Strategic Roadmap & Recommendation',
        description: 'We deliver clear advice on whether to proceed via Prior Approval, Lawful Development Certificate, or Full Planning Permission.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
        caption: 'Detailed planning feasibility and boundary setback analysis on UK residential plots',
        tag: 'FEASIBILITY STUDY'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Approved single-storey extension adhering to 45-degree daylight codes',
        tag: 'PERMITTED DEVELOPMENT'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Conservation area home extension designed with sensitive materials and heritage rooflines',
        tag: 'CONSERVATION AREA'
      }
    ],
    faq: [
      {
        question: 'Can I extend my house without applying for planning permission?',
        answer: 'Yes! Many single-storey rear extensions up to 8m (subject to Prior Approval) and loft conversions up to 40-50m³ fall under Permitted Development rights, provided specific dimension and material criteria are met. We assess your home to confirm compliance.'
      },
      {
        question: 'What is a Certificate of Lawfulness?',
        answer: 'A Certificate of Lawfulness is a formal decision issued by the council confirming that your proposed extension complies with Permitted Development and is legally protected against future enforcement action.'
      }
    ],
    relatedProjectSlugs: ['edgbaston-pavilion', 'harborne-house', 'solihull-courtyard-villa']
  },
  {
    id: 'creative-design',
    slug: 'creative-design',
    title: 'Creative design',
    shortDescription: 'Inspiring, light-filled layouts and photorealistic 3D visualisations tailored to your family’s everyday living.',
    fullDescription: 'Great domestic architecture is not merely about adding floor area; it is about transforming how your home feels and functions every single day. We bring curious creativity, daylight-led space planning, and photorealistic 3D walkthroughs to resolve awkward layouts, create seamless garden transitions, and design warm, uplifting spaces where your family loves to gather.',
    iconName: 'Sparkles',
    image: '/images/services/creative-design.jpg',
    heroImage: '/images/services/creative-design.jpg',
    whatWeDo: [
      'Tailored lifestyle interviews to map your family morning, cooking, and hosting routines',
      'Creation of bespoke open-plan living, dining, and kitchen zones with quiet retreat nooks',
      'Solar orientation and daylight optimization utilizing vaulted ceilings and roof lanterns',
      'Seamless flush threshold connections opening living areas directly onto garden terraces',
      'Photorealistic 3D exterior and interior visualizations allowing you to walk around your home'
    ],
    deliverables: [
      'Multiple distinct creative layout concepts with fully dimensioned floor plans',
      'Photorealistic 3D digital model views capturing materials, textures, and lighting',
      'Solar orientation diagrams showing morning and evening sunlight penetration',
      'Material specification palettes (charred timber, brick, zinc, slimline glazing)'
    ],
    benefits: [
      {
        title: 'Walk Around Before You Build',
        description: 'Our photorealistic 3D models let you step inside and explore proportions, ceiling heights, and sightlines with complete clarity.'
      },
      {
        title: 'Flooded with Natural Daylight',
        description: 'We position skylights, clerestory glazing, and sliding doors to track the sun path, filling your home with warmth and light throughout the day.'
      },
      {
        title: 'Spaces Tailored to Family Habits',
        description: 'Smart storage, discreet walk-in larders, practical boot rooms, and dedicated home-working spaces designed for real family life.'
      },
      {
        title: 'Substantial Property Value Creation',
        description: 'Bespoke, high-quality architectural design dramatically enhances aesthetic appeal, livability, and long-term market value.'
      }
    ],
    processStages: [
      {
        title: '01 — Lifestyle Briefing',
        description: 'We explore how you use your current spaces, what feels cramped, and what your dream family lifestyle looks like.'
      },
      {
        title: '02 — Concept Generation',
        description: 'We generate innovative architectural options exploring varied rooflines, window placements, and kitchen-living configurations.'
      },
      {
        title: '03 — 3D Walkthrough & Refinement',
        description: 'We present high-definition 3D views and refine the selected concept iteratively until you are 100% in love with the design.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'High-definition 3D visualization of interior flow and vaulted timber ceilings',
        tag: '3D VISUALIZATION'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bespoke kitchen island with integrated breakfast bar and panoramic garden views',
        tag: 'KITCHEN ARCHITECTURE'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        caption: 'Flush floor-to-ceiling glass sliding doors merging interior and outdoor living',
        tag: 'GARDEN LIVING'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        caption: 'Atmospheric natural lighting study capturing morning sun across dining zones',
        tag: 'LIGHTING STUDY'
      }
    ],
    faq: [
      {
        question: 'Will I be able to see realistic 3D models of my project?',
        answer: 'Yes! We create immersive 3D digital visuals for every project. You can inspect the exterior volume, roof profiles, interior room relationships, and how daylight fills the space.'
      },
      {
        question: 'Can we adjust the concept if we want to change something?',
        answer: 'Absolutely. Our creative process is completely collaborative. We explore alternatives and refine the scheme until it perfectly matches your vision and budget.'
      }
    ],
    relatedProjectSlugs: ['harborne-house', 'solihull-courtyard-villa', 'monolith-veil-house']
  },
  {
    id: 'planning-permissions',
    slug: 'planning-permissions',
    title: 'Planning permission',
    shortDescription: 'Stress-free management of your full planning application, securing local council approvals with precision and care.',
    fullDescription: 'Applying for planning permission should never be a stressful ordeal. We act as your official planning agent, managing the entire statutory process from start to finish. We prepare millimeter-precise scaled architectural drawings, author persuasive Design & Access Statements, coordinate with council planning officers, and secure statutory approval with our proven 100% success rate.',
    iconName: 'FileCheck',
    image: '/images/services/planning-permission.jpg',
    heroImage: '/images/services/planning-permission.jpg',
    whatWeDo: [
      'Produce statutory 1:50 and 1:100 existing and proposed plans, elevations, and roofscapes',
      'Prepare Ordnance Survey 1:1250 site location plans and 1:500 block layout drawings',
      'Draft detailed Design & Access Statements (DAS) and Heritage Statements for conservation sites',
      'Submit the complete application online via the official UK Planning Portal',
      'Act as authorized agent, liaising with council case officers throughout the 8-week determination period'
    ],
    deliverables: [
      'Full statutory council architectural drawing package',
      'Ordnance Survey licensed site boundary map pack',
      'Comprehensive Planning & Heritage Statement documentation',
      'Official Planning Portal submission confirmation and validation notice',
      'Formal Council Decision Notice and conditions management'
    ],
    benefits: [
      {
        title: '100% Planning Approval Record',
        description: 'Every scheme is designed in strict compliance with local residential design guides, minimizing rejection risks.'
      },
      {
        title: 'Zero Paperwork or Bureaucracy Stress',
        description: 'We handle all council forms, certificates of ownership, fee calculations, and administrative queries on your behalf.'
      },
      {
        title: 'Immediate Validation',
        description: 'Accurate, complete documentation prevents frustrating administrative delays and bounces at council validation.'
      },
      {
        title: 'Proactive Case Officer Negotiation',
        description: 'If case officers request minor clarifications or revisions during the 8-week period, we resolve them immediately to secure approval.'
      }
    ],
    processStages: [
      {
        title: '01 — Drawing Package Assembly',
        description: 'We draft statutory 1:50 and 1:100 floor plans, roof layouts, cross-sections, and contextual street elevations.'
      },
      {
        title: '02 — Formal Planning Portal Submission',
        description: 'We submit the application directly to your local planning authority and ensure rapid validation.'
      },
      {
        title: '03 — Officer Liaison to Decision Notice',
        description: 'We monitor progress across the statutory 8-week timeline, answer officer queries, and secure your Decision Notice.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
        caption: 'Full Planning Permission granted for a contemporary double-storey side and rear extension',
        tag: 'COUNCIL CONSENT'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Contextual streetscape elevation preserving conservation area symmetry',
        tag: 'STREET ELEVATION'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Rear courtyard extension achieving planning consent with zero neighbor objections',
        tag: 'PLANNING PORTAL'
      }
    ],
    faq: [
      {
        question: 'How long does a council take to make a planning decision?',
        answer: 'By statutory law, UK local planning authorities have 8 weeks from the date of formal validation to issue a decision notice. We ensure your application is submitted flawlessly so the clock starts immediately without delay.'
      },
      {
        question: 'What happens if a neighbor objects to our planning application?',
        answer: 'Planning decisions are made based on planning policies, not popularity. We design strictly within council 45-degree daylight codes and overlooking distance guidelines, allowing case officers to approve compliant schemes despite neighbor comments.'
      }
    ],
    relatedProjectSlugs: ['edgbaston-pavilion', 'harborne-house', 'solihull-courtyard-villa']
  },
  {
    id: 'building-regulations',
    slug: 'building-regulations',
    title: 'Building regulation',
    shortDescription: 'Technical construction drawing packages ensuring structural safety, thermal warmth, fire safety, and building control sign-off.',
    fullDescription: 'While planning permission establishes what your home looks like externally, Building Regulations ensure it is constructed safely, warmly, solidly, and legally. We produce comprehensive technical construction drawing packages detailing foundations, structural steelwork, Part L thermal insulation, fire separation, and acoustic dampening for full Building Control sign-off and accurate contractor pricing.',
    iconName: 'Layers',
    image: '/images/services/building-regulations.jpg',
    heroImage: '/images/services/building-regulations.jpg',
    whatWeDo: [
      'Draft detailed 1:50 technical construction drawings and 1:10 critical junction details',
      'Coordinate structural steel beam sizing, column positions, and padstone details with structural engineers',
      'Specify high-performance insulation, vapor control layers, and thermal bridges complying with Part L',
      'Detail fire safety escape routes, FD30 fire doors, smoke detection, and compartmentation (Part B)',
      'Manage Full Plans application submission to Local Authority Building Control (LABC) or approved private inspectors'
    ],
    deliverables: [
      'Complete 1:50 Building Regulations construction drawing set',
      '1:20 and 1:10 structural junction details for foundations, roofs, and eaves',
      'Integrated structural engineering calculations and loading layouts',
      'Building Control Full Plans approval certificate for your permanent records'
    ],
    benefits: [
      {
        title: 'Accurate, Fixed Contractor Pricing',
        description: 'Builders receive explicit material specifications, eliminating ambiguous guesswork and expensive unexpected variations during construction.'
      },
      {
        title: 'Exceptional Thermal Comfort & Efficiency',
        description: 'Detailed to current Part L energy conservation regulations, resulting in warm, draft-free living and lower annual energy costs.'
      },
      {
        title: 'Total Structural & Fire Safety Compliance',
        description: 'Complete peace of mind knowing your home satisfies all statutory UK safety codes for structural stability, fire protection, and ventilation.'
      },
      {
        title: 'Essential for Future Property Resale',
        description: 'Securing a formal Building Control Completion Certificate protects your property legal value and ensures frictionless future conveyancing.'
      }
    ],
    processStages: [
      {
        title: '01 — Technical Detailing & Specification',
        description: 'We draft detailed construction sections detailing foundation depths, insulation layers, thermal breaks, and roof venting.'
      },
      {
        title: '02 — Structural Engineering Integration',
        description: 'We collaborate with structural engineers to coordinate steel beam schedules and padstones directly onto architectural drawings.'
      },
      {
        title: '03 — Building Control Full Plans Approval',
        description: 'We submit the pack to Building Control, manage plan checks, and secure statutory approval before building work commences.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85',
        caption: 'Structural steel RSJ framework and cavity wall construction complying with Building Regulations',
        tag: 'STRUCTURAL STEEL'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Part L energy-efficient glazed extension with underfloor heating screed',
        tag: 'THERMAL EFFICIENCY'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Completed residential extension with formal Building Control completion certificate',
        tag: 'FINAL SIGN-OFF'
      }
    ],
    faq: [
      {
        question: 'Why do I need Building Regulations if I already have planning permission?',
        answer: 'Planning permission grants legal authority for how a building looks and affects the local area. Building Regulations are separate statutory standards ensuring structural safety, fire resistance, energy efficiency, damp-proofing, and sanitation.'
      },
      {
        question: 'Can builders use these drawings directly on site?',
        answer: 'Yes. Our Building Regulations packages are complete technical construction drawing sets containing exact dimensions, materials, structural steel notes, and junction details that contractors use to quote and build.'
      }
    ],
    relatedProjectSlugs: ['residential-loft-adaptation', 'harborne-house', 'solihull-courtyard-villa']
  }
];
