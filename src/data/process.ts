import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    subtitle: 'Understanding your home, ideas & budget',
    description: 'We meet at your property or speak via video to discuss your ideas, requirements, and budget. We listen carefully to how you live, assess what is feasible, and explain what to expect.',
    deliverables: [
      'Comprehensive project brief',
      'Initial feasibility & permitted development check',
      'Fixed-fee transparent quotation'
    ]
  },
  {
    number: '02',
    title: 'Concept Design',
    subtitle: 'Exploring spatial layouts & daylight flow',
    description: 'We measure your property and create multiple architectural design options. We explore spatial flow, natural light, and garden connections, refining the design together until you love it.',
    deliverables: [
      'Measured building survey drawings',
      'Comparative floor plan options',
      '3D sketches and material palette ideas'
    ]
  },
  {
    number: '03',
    title: 'Planning Permission',
    subtitle: 'Preparing & managing your council submission',
    description: 'We prepare and submit all required architectural drawings, location plans, and planning statements to your local council, acting as your agent and managing communications with planning officers.',
    deliverables: [
      'Existing & proposed scale drawings',
      'Design & Access Statement',
      'Council planning portal management through to decision'
    ]
  },
  {
    number: '04',
    title: 'Technical Design',
    subtitle: 'Building regulations & structural detailing',
    description: 'We produce detailed drawings for building regulations approval and builders. This covers structural steel beams, thermal insulation (Part L), fire escape safety, and drainage.',
    deliverables: [
      'Full Plans Building Regulations package',
      'Structural engineering coordination',
      'Construction details at 1:20 and 1:10 scale'
    ]
  },
  {
    number: '05',
    title: 'Ready for Building',
    subtitle: 'Tendering & contractor support',
    description: 'Everything you need to begin construction with confidence. You receive a complete drawing and specification package ready to give to builders for accurate quotes.',
    deliverables: [
      'Tender-ready construction drawing pack',
      'Builder tender evaluation advice',
      'Support during initial builder site queries'
    ]
  }
];
