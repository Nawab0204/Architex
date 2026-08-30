import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'harborne-contemporary-residence',
    slug: 'harborne-contemporary-residence',
    title: 'Harborne House',
    subtitle: 'Contemporary residential transformation & rear pavilion extension',
    category: 'Residential',
    location: 'Harborne, Birmingham',
    year: '2025',
    clientType: 'Private Homeowner',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    description: 'A comprehensive architectural overhaul and light-filled rear pavilion for an Edwardian family home in Harborne, establishing seamless dialogue between interior living areas and a landscaped garden.',
    brief: 'The clients wished to unify disconnected ground-floor rooms into an expansive family living, dining, and cooking space while preserving the historical character of the front facade and bringing abundant daylight into the north-facing orientation.',
    approach: 'Our solution introduced a refined timber-and-brick pavilion with expansive slimline glazed apertures, a recessed zinc roof overhang providing passive solar shading, and carefully positioned rooflights illuminating the deep interior floor plate.',
    specifications: {
      area: '245 m²',
      duration: '8 months design & approvals',
      servicesProvided: ['Architectural Design', 'Planning Permission', 'Technical Detailing', '3D Visualisation'],
      localAuthority: 'Birmingham City Council'
    },
    drawings: [
      {
        id: 'drw-1',
        title: 'Ground Floor Plan & Garden Link',
        type: 'Floor Plan',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
        description: 'Open-plan living layout with integrated joinery, utility corridor, and full-width sliding glazing thresholds.',
        scale: '1:50 @ A1'
      },
      {
        id: 'drw-2',
        title: 'South-West Rear Elevation',
        type: 'Elevation',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85',
        description: 'Contrasting tactile engineering brick base with blackened Siberian larch vertical cladding and recessed zinc fascias.',
        scale: '1:50 @ A1'
      },
      {
        id: 'drw-3',
        title: 'Longitudinal Section Through Pavilion',
        type: 'Section',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        description: 'Detailing step-down transitions from original floor levels to flush external patio paving with thermal break thresholds.',
        scale: '1:20 @ A2'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ],
    featured: true,
    latest: true
  },
  {
    id: 'edgbaston-pavilion-extension',
    slug: 'edgbaston-pavilion-extension',
    title: 'Edgbaston Pavilion',
    subtitle: 'Sculptural garden extension in a designated conservation area',
    category: 'Extensions',
    location: 'Edgbaston, Birmingham',
    year: '2024',
    clientType: 'Private Client',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
    description: 'A sensitive yet confident contemporary extension to a heritage Victorian villa in the Edgbaston Conservation Area, balancing conservation policy with modern living requirements.',
    brief: 'Create a distinct dining and reading wing nestled within the mature walled garden, respecting the original brickwork and tree preservation orders (TPOs).',
    approach: 'We developed an architectural language of subtle deference—utilising a lightweight glass link connecting to a sculptural handmade brick pavilion with concealed guttering and bespoke bronze-anodised framing.',
    specifications: {
      area: '160 m²',
      duration: '10 months design & conservation approvals',
      servicesProvided: ['Conservation Planning', 'Architectural Design', 'Building Regulations'],
      localAuthority: 'Birmingham City Council (Conservation Team)'
    },
    drawings: [
      {
        id: 'edg-1',
        title: 'Conservation Site & Root Protection Plan',
        type: 'Site Plan',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
        description: 'Cantilevered pile foundation configuration avoiding critical root protection zones of mature oak and beech trees.',
        scale: '1:100 @ A1'
      },
      {
        id: 'edg-2',
        title: 'West Elevation & Heritage Junction',
        type: 'Elevation',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85',
        description: 'Frameless glass link junction details ensuring reversible contact with historic imperial masonry.',
        scale: '1:50 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85'
    ],
    featured: true
  },
  {
    id: 'solihull-courtyard-villa',
    slug: 'solihull-courtyard-villa',
    title: 'Solihull Courtyard Villa',
    subtitle: 'New-build bespoke private home arranged around a tranquil atrium',
    category: 'New Build',
    location: 'Solihull, West Midlands',
    year: '2024',
    clientType: 'Private Client',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85',
    description: 'A bespoke four-bedroom sustainable new build designed around a central sunken courtyard, delivering privacy from adjacent properties while welcoming natural light into every living space.',
    brief: 'Design a high-performance modern family residence that maximizes passive thermal comfort, privacy, and flexible work-from-home accommodation.',
    approach: 'Adopting an inward-focused courtyard topology, the building utilizes highly insulated monocouche render, charred timber cladding, green roofs, and air-source heat pump integration for exceptional thermal performance.',
    specifications: {
      area: '380 m²',
      duration: '12 months',
      servicesProvided: ['Feasibility', 'Planning Permission', 'Detailed Design', '3D Visualisation'],
      localAuthority: 'Solihull Metropolitan Borough Council'
    },
    drawings: [
      {
        id: 'sol-1',
        title: 'Master Ground Level & Central Courtyard Layout',
        type: 'Floor Plan',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
        description: 'Pinwheel arrangement around a 40m² landscaped water feature and Japanese maple courtyard.',
        scale: '1:50 @ A0'
      },
      {
        id: 'sol-2',
        title: 'Cross Section Showing Passive Ventilation Stack',
        type: 'Section',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        description: 'Clerestory operable glazing enabling stack-effect night cooling and daylight distribution.',
        scale: '1:25 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85'
    ],
    featured: true
  },
  {
    id: 'jewellery-quarter-loft-conversion',
    slug: 'jewellery-quarter-loft-conversion',
    title: 'Jewellery Quarter Lofts',
    subtitle: 'Industrial heritage adaptive reuse into dual live-work duplexes',
    category: 'Renovation',
    location: 'Jewellery Quarter, Birmingham',
    year: '2024',
    clientType: 'Commercial & Residential Developer',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85',
    description: 'Transforming the upper floor of a 19th-century silversmith factory into two atmospheric loft apartments, celebrating exposed brickwork, cast iron trusses, and bespoke steel partitions.',
    brief: 'Convert dilapidated former workshop spaces into high-spec residential units that honour Birmingham’s industrial craftsmanship heritage.',
    approach: 'Carefully restored existing timber roof purlins and crittall-style glazing systems while inserting acoustically isolated mezzanine levels and modern mechanical heat recovery systems.',
    specifications: {
      area: '210 m²',
      duration: '7 months',
      servicesProvided: ['Architectural Design', 'Listed Building Consent', 'Building Regulations'],
      localAuthority: 'Birmingham City Council'
    },
    drawings: [
      {
        id: 'jq-1',
        title: 'Mezzanine & Structural Steel Detailing',
        type: 'Technical Drawing',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85',
        description: 'Independent structural steel frame inserted without imparting additional loads onto historical perimeter masonry.',
        scale: '1:20 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752734-2a0cd66c4293?auto=format&fit=crop&w=1600&q=85'
    ],
    featured: true
  },
  {
    id: 'sutton-coldfield-terrace-redesign',
    slug: 'sutton-coldfield-terrace-redesign',
    title: 'Sutton Coldfield Studio House',
    subtitle: 'Split-level architectural remodelling & garden studio',
    category: 'Residential',
    location: 'Sutton Coldfield, West Midlands',
    year: '2023',
    clientType: 'Private Client',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2200&q=85',
    description: 'A stepped residential remodelling taking advantage of a sloping site, creating double-height volumes and an independent timber garden studio.',
    brief: 'Overcome challenging garden topography to provide level access to outdoor living areas and create dedicated workspace accommodation.',
    approach: 'Terraced retaining landscape walls integrated directly into the architectural envelope, producing cascading daylight across three split floor levels.',
    specifications: {
      area: '275 m²',
      duration: '9 months',
      servicesProvided: ['Architectural Design', 'Planning Drawings', 'Building Regulations'],
      localAuthority: 'Birmingham City Council'
    },
    drawings: [
      {
        id: 'sut-1',
        title: 'Site Section & Topographical Levels',
        type: 'Section',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        description: 'Split level integration working with a 3.2m cross-site ground fall.',
        scale: '1:50 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'barnt-green-sustainable-concept',
    slug: 'barnt-green-sustainable-concept',
    title: 'Barnt Green Passive House',
    subtitle: 'Low-energy timber frame residential visualisations & planning package',
    category: 'Visualisation',
    location: 'Barnt Green, Worcestershire',
    year: '2025',
    clientType: 'Private Self-Builder',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=2200&q=85',
    description: 'High-fidelity architectural visuals and planning drawings for a Passivhaus certified timber home set within mature woodland.',
    brief: 'Provide realistic exterior and interior photorealistic architectural visuals to communicate materials and spatial qualities to planning officers and neighbors.',
    approach: 'Crafted precise material shaders, natural sunlight simulations across seasons, and clear context montages illustrating zero visual harm to Green Belt land.',
    specifications: {
      area: '320 m²',
      duration: '5 months',
      servicesProvided: ['3D Visualisation', 'Planning Permission Support', 'Material Studies'],
      localAuthority: 'Bromsgrove District Council'
    },
    drawings: [
      {
        id: 'bg-1',
        title: 'Environmental Strategy & Solar Angles',
        type: 'Technical Drawing',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85',
        description: 'Equinox solar calculations demonstrating summer shading and winter solar gain capture.',
        scale: '1:100 @ A2'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'moseley-heritage-conversion',
    slug: 'moseley-heritage-conversion',
    title: 'Moseley Arts & Crafts Renovation',
    subtitle: 'Restoration and rear glass box addition for a historic family villa',
    category: 'Renovation',
    location: 'Moseley, Birmingham',
    year: '2024',
    clientType: 'Private Client',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=85',
    description: 'Careful restoration of original Arts & Crafts features combined with an ultra-minimal structural glass rear addition.',
    brief: 'Create open, contemporary cooking and dining spaces without disrupting the ornate plasterwork and leaded windows of the reception rooms.',
    approach: 'Distinct zoning separating classical formal rooms from a transparent structural glass cube overlooking tranquil landscaped gardens.',
    specifications: {
      area: '290 m²',
      duration: '9 months',
      servicesProvided: ['Architectural Design', 'Planning Drawings', 'Technical Detailing'],
      localAuthority: 'Birmingham City Council'
    },
    drawings: [
      {
        id: 'mos-1',
        title: 'Rear Elevation & Structural Glass Details',
        type: 'Elevation',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85',
        description: 'Structural glass fin and roof beam detailing with integrated perimeter drainage channels.',
        scale: '1:20 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'digbeth-creative-studios',
    slug: 'digbeth-creative-studios',
    title: 'Digbeth Creative Studios',
    subtitle: 'Adaptive reuse of brick warehouse into multi-disciplinary workspaces',
    category: 'Commercial',
    location: 'Digbeth, Birmingham',
    year: '2023',
    clientType: 'Commercial Client',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
    description: 'Transforming a disused Victorian red-brick warehouse in Birmingham’s creative quarter into flexible creative studio units and shared event spaces.',
    brief: 'Provide economical, character-rich workspace modules that appeal to creative agencies while meeting modern accessibility and acoustic regulations.',
    approach: 'Exposed services, polished concrete screeds, acoustic acoustic baffle ceilings, and modular steel glazed partitions allowing flexible tenancy configurations.',
    specifications: {
      area: '620 m²',
      duration: '11 months',
      servicesProvided: ['Planning Permission', 'Architectural Design', 'Building Regulations'],
      localAuthority: 'Birmingham City Council'
    },
    drawings: [
      {
        id: 'dig-1',
        title: 'First Floor Commercial Partition Plan',
        type: 'Floor Plan',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
        description: 'Subdivided studio layouts with central circulation street and shared breakout amenities.',
        scale: '1:100 @ A1'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ]
  }
];
