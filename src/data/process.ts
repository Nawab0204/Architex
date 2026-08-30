import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    subtitle: 'Understanding your aspirations, budget & site potential',
    description: 'We meet either on site or at our studio to discuss your brief, understand how you wish to live or develop, evaluate feasibility, and outline statutory requirements and fee proposals.',
    deliverables: ['Detailed brief summary', 'Project scope document', 'Clear fee breakdown & timeline estimate']
  },
  {
    number: '02',
    title: 'Site & Brief',
    subtitle: 'Measured survey & context diagnostics',
    description: 'We undertake or commission a measured building and topographical survey of your property, review boundary constraints, local planning history, drainage, and orientation.',
    deliverables: ['As-existing CAD floor plans & elevations', 'Planning constraint analysis', 'Opportunity matrix']
  },
  {
    number: '03',
    title: 'Concept Design',
    subtitle: 'Exploring spatial options & aesthetic direction',
    description: 'We formulate distinct layout options exploring spatial circulation, natural light, material expressions, and relationship to the garden. We refine these through feedback into a preferred design.',
    deliverables: ['Comparative concept layouts', '3D sketch massing & perspectives', 'Material moodboards']
  },
  {
    number: '04',
    title: 'Planning',
    subtitle: 'Statutory approvals & local council submission',
    description: 'We draft the complete planning application package including existing and proposed drawings, Design and Access statements, and manage liaison with local authority planning officers.',
    deliverables: ['Complete statutory drawing package', 'Design & Access Statement', 'Planning portal submission & agent management']
  },
  {
    number: '05',
    title: 'Detailed Design',
    subtitle: 'Technical detailing & Building Regulations compliance',
    description: 'We produce detailed 1:50 and 1:20 technical drawings specifying structural steelwork, thermal insulation (Part L), drainage, acoustic separation, and fire safety for building control approval.',
    deliverables: ['Building Regulations approval package', 'Structural engineer coordination', 'Tender-ready specification notes']
  },
  {
    number: '06',
    title: 'Construction / Delivery',
    subtitle: 'Contractor tendering & site support',
    description: 'We help you invite competitive contractor tenders, answer technical queries from builders, review shop drawings, and provide periodic architectural observations during the build.',
    deliverables: ['Tender review guidance', 'Contractor RFIs & technical clarifications', 'Site observation reports']
  }
];
