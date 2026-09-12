import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'harborne-house',
    slug: 'harborne-house',
    projectNumber: '01',
    title: 'Victorian House Extension & Garden Pavilion',
    subtitle: 'Extension • Renovation • Interior',
    category: 'Extensions',
    location: 'Harborne, Birmingham',
    country: 'United Kingdom',
    year: '2025',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '265 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A comprehensive architectural remodelling and single-storey rear pavilion extension to a Victorian home. The design unlocks dark, compartmentalised living spaces into an expansive light-filled kitchen and garden pavilion framed in charred timber and ultra-slim structural glazing.',
    brief: 'Redesign the ground floor layout to eliminate compartmentalised dark living spaces, incorporate a high-specification chef kitchen with central breakfast island, and create a seamless flush transition to a south-facing landscaped garden terrace.',
    approach: 'We introduced an exposed steel portal frame enabling a 12.4m column-free rear aperture. A cantilevered sedum green roof overhangs the terrace to prevent summer solar overheating while allowing low-angle winter sun to naturally warm the polished concrete thermal mass floor.',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Before: Compartmentalised, dark 1970s rear addition. After: Open-plan charred timber pavilion with flush garden threshold.'
    },
    specifications: {
      area: '265 m² total (95 m² new extension)',
      duration: '8 months design, planning & construction',
      servicesProvided: [
        'Architectural Design',
        'Planning Permission (Birmingham City Council)',
        'Building Regulations Technical Package',
        'Interior Kitchen Architecture & Lighting',
        'Landscape & Terrace Integration'
      ],
      localAuthority: 'Birmingham City Council',
      materials: [
        'Shou Sugi Ban charred Accoya timber cladding',
        'Reynaers Hi-Finity minimal frame sliding glass doors',
        'Bio-diverse sedum green roof with zinc capping trim',
        'Continuous polished microcement flooring over underfloor heating',
        'Handmade Petersen Kolumba brick piers matching original masonry'
      ],
      technicalSpecifications: [
        'Whole-house thermal upgrade achieving U-values of 0.14 W/m²K for external walls',
        'Acoustic ceiling baffles integrated within recessed architectural lighting slots',
        'Mechanical Ventilation with Heat Recovery (MVHR) throughout the new pavilion',
        'Flush threshold drainage system with continuous linear slot channels'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Rear Garden Pavilion Elevation with Charred Accoya Cladding & Green Roof',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Open-Plan Kitchen & Dining Suite with Central Monolithic Island',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Evening Twilight Perspective: Seamless Living Room to Terrace Transition',
        type: 'photo'
      },
      {
        source: '/drawings/harborne-house-plans.svg',
        caption: 'Technical Drawing Package: Ground Floor General Arrangement & Structural Grid',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-hh-01',
        drawingNumber: 'HH-01',
        title: 'Proposed Ground Floor Plan & Landscape Terrace Setting Out',
        scale: '1:50 @ A1',
        fileSource: 'harborne-house-ground-floor-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Comprehensive ground floor layout showing the 12.4m structural portal opening, utility/pantry sequence, and flush transition to the south-facing terrace.',
        annotations: [
          '12.4m MINIMAL-FRAME SLIDING GLASS APERTURE',
          'POLISHED MICROCEMENT FLOOR DATUM WITH UNDERFLOOR HEATING',
          'RECESSED SEDUM GREEN ROOF DRAINAGE & INTEGRATED CAPPING',
          'ACOUSTIC BUFFER ZONE TO UTILITY & PLANT ROOM'
        ]
      },
      {
        id: 'dwg-hh-02',
        drawingNumber: 'HH-02',
        title: 'North Garden Elevation & Sunken Terrace Cross-Section',
        scale: '1:50 @ A1',
        fileSource: 'harborne-house-elevations.pdf',
        type: 'Elevation',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Detailed garden elevation illustrating the relationship between charred timber cladding, Petersen brickwork, and the sedum roof verge.',
        annotations: [
          'SHOU SUGI BAN TIMBER RAINSCREEN CLADDING',
          'ZINC VERGE FLASHING TO BIODIVERSE ROOF',
          'SLOT DRAINAGE DETAIL AT FLUSH PATIO INTERFACE'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'edgbaston-pavilion',
    slug: 'edgbaston-pavilion',
    projectNumber: '02',
    title: 'Edgbaston Conservation Pavilion',
    subtitle: 'Sculptural garden extension in a designated conservation area',
    category: 'Extensions',
    location: 'Edgbaston, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '145 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Located in the historic Edgbaston Conservation Area under the stewardship of the Calthorpe Estate, this extension introduces a sculptural garden room connected to a substantial Victorian brick villa via a delicate frameless structural glass link.',
    brief: 'Design an extension that celebrates the lush private walled garden while respecting strict conservation guidelines requiring high-quality traditional materials paired with contemporary architectural expression.',
    approach: 'We utilised patinated bronze standing seam cladding and bespoke Petersen terracotta brickwork that echoes the historic lime-mortared brick of the main villa. A 4.2m glass link serves as an acoustic and architectural buffer, leaving the original external brick facade intact as an internal feature wall.',
    specifications: {
      area: '145 m² addition',
      duration: '11 months design, Calthorpe Estate approvals & build',
      servicesProvided: [
        'Conservation Area Planning Application & Heritage Statement',
        'Calthorpe Estate Scheme of Management Approval',
        'Structural Glass Link Detailing',
        'Patinated Bronze Cladding Specification'
      ],
      localAuthority: 'Birmingham City Council & Calthorpe Estate',
      materials: [
        'Pre-patinated Nordic Bronze standing seam roofing and fascias',
        'Restored Victorian red engineering brickwork with hydraulic lime pointing',
        'Structural double-laminated low-iron glass link corridor',
        'End-grain English oak block flooring',
        'Integrated anodised bronze louvres for passive natural ventilation'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
        caption: 'Garden Elevation with Folded Bronze Canopy & Historic Villa Context',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Frameless Structural Glass Link Connecting Villa to New Garden Pavilion',
        type: 'photo'
      },
      {
        source: '/drawings/edgbaston-pavilion-plan.svg',
        caption: 'Conservation Setting Out Plan & Frameless Glass Link Geometry',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-ep-01',
        drawingNumber: 'EP-01',
        title: 'Conservation Ground Floor Plan & Glass Link Detail',
        scale: '1:50 @ A1',
        fileSource: 'edgbaston-pavilion-ground-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/edgbaston-pavilion-plan.svg',
        description: 'Setting out the relation between original Victorian masonry and the bronze pavilion connected by the structural glass corridor.',
        annotations: [
          'RETAINED HISTORIC RED BRICK MASONRY',
          'FRAMELESS STRUCTURAL GLASS LINK (4.2m SPAN)',
          'PATINATED BRONZE FOLDED CANOPY ROOF',
          'CALTHORPE ESTATE CONSERVATION ENVELOPE'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'residential-loft-adaptation',
    slug: 'residential-loft-adaptation',
    projectNumber: '03',
    title: 'Contemporary Dormer Loft & Master Suite',
    subtitle: 'Domestic roof conversion with zinc-clad dormer and UK Building Regulations package',
    category: 'Loft Conversions',
    location: 'Solihull, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '38 m² usable floor plate',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming an underutilised roof space into a luxurious master bedroom suite with walk-in dressing wardrobe and private ensuite bathroom, fully compliant with UK Building Regulations Parts B (Fire), E (Acoustics), and L (Thermal).',
    brief: 'Maximize natural light and headroom in the attic without dominating the roofline, providing an ensuite bathroom and dedicated quiet work area while preserving existing landing circulation.',
    approach: 'We designed a crisp flat-roof rear dormer clad in standing-seam zinc with a frameless floor-to-ceiling Juliet window. Flanked by high-performance acoustic stud walls, the suite provides complete sound privacy from the active family bedrooms below.',
    specifications: {
      area: '38 m² usable loft floor area',
      duration: '4 months design, Building Control sign-off & build',
      servicesProvided: [
        'Measured Building Survey',
        'Building Regulations Full Plans Package',
        'Structural Steel Beam Sizing & Trimming',
        'Acoustic & Fire Compartmentalization Specification'
      ],
      localAuthority: 'Solihull Metropolitan Borough Council',
      materials: [
        'Anthracite standing-seam zinc dormer cladding',
        'Warm-roof construction with 140mm PIR rigid insulation',
        'Gyproc SoundBloc dual-layer acoustic stud partitions',
        'Frameless glass Juliet balcony and aluminum casements',
        'Concealed pocket doors to ensuite and dressing room'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Master Loft Bedroom with Integrated Eaves Joinery & Juliet Glazing',
        type: 'photo'
      },
      {
        source: '/drawings/residential-loft-dormer-technical-elevations.svg',
        caption: 'Technical Drawing Package: Proposed Rear/Side Elevations & Verge Details',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-res-01',
        drawingNumber: 'LOFT-01',
        title: 'Proposed Elevations, 1:10 Verge Detail & Statutory Schedules',
        scale: '1:100 & 1:10 @ A1',
        fileSource: 'residential-loft-dormer-technical-elevations.pdf',
        type: 'Detail',
        image: '/drawings/residential-loft-dormer-technical-elevations.svg',
        description: 'Proposed rear elevation, side gable elevation, 1:10 flat-roof verge construction, and statutory compliance schedules for Parts B, E, F, K, L, and P.',
        annotations: [
          'PROPOSED REAR ELEVATION (38m² LOFT AREA)',
          'FLAT ROOF VERGE CONSTRUCTION SCALE 1:10',
          'FD30S NOTE & ROCKWOOL FIRE BARRIERS',
          'INTERNAL STUDWORK WALLS : PART E SOUND'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'solihull-courtyard-villa',
    slug: 'solihull-courtyard-villa',
    projectNumber: '04',
    title: 'Solihull Courtyard Villa',
    subtitle: 'New-build bespoke private home arranged around a tranquil central atrium',
    category: 'New Builds',
    location: 'Solihull, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Client',
    area: '420 m²',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A bespoke contemporary single-family home in Solihull, arranged in a quadrant around a central contemplative water courtyard. The design achieves total privacy from surrounding plots while flooding every living space with changing natural light.',
    brief: 'Create a private, peaceful family sanctuary incorporating five ensuite bedrooms, open-plan entertaining wings, a dedicated home office, and an integrated wellness garden.',
    approach: 'By orienting primary living functions around an internal glazed atrium cloister with a specimen Japanese Maple and reflecting pool, we eliminated the need for street-facing windows, creating a fortress of calm insulated by thick stone walls and deep overhangs.',
    specifications: {
      area: '420 m² internal floor area',
      duration: '16 months turnkey design & delivery',
      servicesProvided: [
        'Site Feasibility & Topographical Analysis',
        'New-Build Full Planning Permission',
        'Building Regulations & Full Technical Construction Package',
        'Passive Solar Envelope & Renewable Energy Strategy'
      ],
      localAuthority: 'Solihull Metropolitan Borough Council',
      materials: [
        'Split-face Cotswold limestone masonry',
        'Dark anodised architectural aluminium fenestration',
        'Green sedum roof with integrated 14kW solar PV array',
        'Continuous poured terrazzo flooring',
        'Cedar soffits with concealed perimeter linear illumination'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'South-facing Living Wing opening onto Landscaped Courtyard',
        type: 'photo'
      },
      {
        source: '/drawings/solihull-villa-courtyard-plan.svg',
        caption: 'Atrium Layout & Quadrant Circulation Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-scv-01',
        drawingNumber: 'SCV-01',
        title: 'Quadrant Ground Floor Plan & Atrium Water Feature',
        scale: '1:100 @ A1',
        fileSource: 'solihull-courtyard-villa-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/solihull-villa-courtyard-plan.svg',
        description: 'Complete spatial organization showing North gallery, East wellness wing, West sleeping quarter, and South open-plan entertaining pavilion.',
        annotations: [
          'CENTRAL CONTEMPLATIVE WATER CLOISTER',
          'CRAFTSMAN LIMESTONE WALL WITH INTEGRATED REVEALS',
          'TERRAZZO FINISHED FLOOR DATUM THROUGHOUT',
          'CONCEALED POCKET SLIDING SCREEN APERTURES'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'jewellery-quarter-lofts',
    slug: 'jewellery-quarter-lofts',
    projectNumber: '05',
    title: 'Jewellery Quarter Heritage Lofts',
    subtitle: 'Industrial heritage adaptive reuse into dual live-work duplexes',
    category: 'Renovations',
    location: 'Jewellery Quarter, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Developer & Craft Maker',
    area: '310 m²',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Sensitively converting a Grade II curtilage 19th-century silversmith workshop in Birmingham’s historic Jewellery Quarter into two multi-level live-work artist studios and residential duplexes, preserving original timber roof trusses and crittall windows.',
    brief: 'Restore original brick and cast-iron industrial components, secure listed building and conservation approvals, and create light-filled double-height residences with mezzanine creative workspaces.',
    approach: 'We exposed the pitch-pine king-post trusses and stabilized the lime-mortared brickwork. A new black raw-steel spiral staircase and cantilevered steel mezzanine float within the voluminous shell, celebrating industrial craftsmanship with crisp contemporary detailing.',
    specifications: {
      area: '310 m² total across 2 duplexes',
      duration: '12 months listed building consent & fit-out',
      servicesProvided: [
        'Listed Building Consent & Conservation Area Application',
        'Historic Fabric Condition Survey & Structural Consolidation',
        'Acoustic Separation Design for Live-Work Typologies (Part E)',
        'Custom Steel Mezzanine & Staircase Architectural Detailing'
      ],
      localAuthority: 'Birmingham City Council Conservation Department',
      materials: [
        'Original sand-blasted 1890s Birmingham red brickwork',
        'Restored pitch-pine structural roof trusses',
        'Hot-rolled mild steel plates with beeswax protective seal',
        'Slimline thermally-broken Crittall steel double-glazed windows',
        'Cast iron column supports with original foundry stamps'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        caption: 'Double-Height Studio Interior with Restored King-Post Trusses',
        type: 'photo'
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Mezzanine & Heritage Loft Layout Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-jql-01',
        drawingNumber: 'JQL-01',
        title: 'Heritage Mezzanine Plan & Structural Steel Interventions',
        scale: '1:50 @ A1',
        fileSource: 'jewellery-quarter-lofts-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'General arrangement showing the independent structural steel mezzanine floating clear of historic brick perimeter walls.',
        annotations: [
          'RESTORED HISTORIC SILVERSMITH WORKSHOP SHELL',
          'SUSPENDED HOT-ROLLED STEEL MEZZANINE FLOOR',
          'ACOUSTIC TWIN-LEAF STUDWORK PARTITIONS'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'bournville-interior-architecture',
    slug: 'bournville-interior-architecture',
    projectNumber: '06',
    title: 'Bournville Open-Plan Kitchen & Living Architecture',
    subtitle: 'Bespoke joinery, architectural lighting & garden threshold design',
    category: 'Interiors',
    location: 'Bournville, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '120 m²',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'An interior architectural transformation creating a cohesive culinary and entertaining heart for an arts-influenced family home in Bournville. Custom fluted timber cabinetry, monolithic quartzite island, and concealed architectural LED coves deliver tactile elegance.',
    brief: 'Design a bespoke kitchen, hidden pantry, cocktail cabinet, and dining space that connects effortlessly with an outdoor garden dining terrace, utilizing natural organic materials.',
    approach: 'We positioned a 3.8m Taj Mahal quartzite island as the social anchor of the room, flanked by floor-to-ceiling smoked oak cabinetry that conceals secondary preparation pantries. Continuous microcement floors extend through minimal sliding glass doors to the exterior.',
    specifications: {
      area: '120 m² ground floor suite',
      duration: '5 months interior design & execution',
      servicesProvided: [
        'Interior Architectural Space Planning',
        'Bespoke Cabinetry & Joinery Detailing',
        'Architectural Lighting & Switching Schedule',
        'Material & Sanitaryware Specification'
      ],
      materials: [
        'Taj Mahal polished natural quartzite',
        'Smoked European oak bespoke joinery',
        'Warm white lime-wash plaster walls',
        'Brushed patinated brass tapware and handles'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
        caption: 'Monolithic Island and Smoked Oak Joinery with Integrated Lighting',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Dining Perspective looking towards Garden Patio',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-bia-01',
        drawingNumber: 'BIA-01',
        title: 'Kitchen Joinery Elevations & Lighting Layout Plan',
        scale: '1:20 @ A1',
        type: 'Detail',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Millimeter-accurate elevations detailing drawer internals, appliance integration, and lighting recess profiles.'
      }
    ],
    featured: true
  },
  {
    id: 'barnt-green-passive-house',
    slug: 'barnt-green-passive-house',
    projectNumber: '07',
    title: 'Barnt Green Eco Residence',
    subtitle: 'Low-energy timber frame new-build home in a wooded green belt setting',
    category: 'New Builds',
    location: 'Barnt Green, Worcestershire',
    country: 'United Kingdom',
    year: '2025',
    status: 'Planning Approved',
    clientType: 'Private Self-Builder',
    area: '350 m²',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'An advanced eco-home nestled into the wooded hillside of Barnt Green. The design employs a super-insulated cross-laminated timber (CLT) structure with triple glazing and integrated earth-tube geothermal heating and cooling.',
    brief: 'Deliver an energy-positive bespoke home with low landscape impact within a green belt setting, maximizing south-facing woodland views.',
    approach: 'We sculpted the building form into the natural contours of the hill with a low-slung sedum wildflower roof, earning planning approval by demonstrating exceptional architectural quality under Green Belt policy.',
    specifications: {
      area: '350 m²',
      duration: '6 months planning & Passivhaus energy modeling',
      servicesProvided: [
        'New-Build Architectural Design',
        'Green Belt Planning Justification',
        'Photorealistic 3D Visualisations',
        'Passivhaus Energy Performance Specification'
      ],
      localAuthority: 'Bromsgrove District Council',
      materials: [
        'Cross-Laminated Timber (CLT) superstructure',
        'Dark treated vertical spruce timber siding',
        'Triple-glazed Passivhaus certified timber-aluminium windows',
        'Extensive bio-diverse wildflower living roof'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Woodland Elevation Render in Autumn Twilight',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-bgp-01',
        drawingNumber: 'BGP-01',
        title: 'Passive Solar Envelope & Hillside Setting Out Plan',
        scale: '1:100 @ A1',
        type: 'Site Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Solar orientation, earth-sheltered north wall, and southern solar collection glazing.'
      }
    ],
    featured: true
  },
  {
    id: 'sutton-coldfield-studio-house',
    slug: 'sutton-coldfield-studio-house',
    projectNumber: '08',
    title: 'Sutton Coldfield Split-Level Remodel',
    subtitle: 'Mid-century residential remodelling & timber garden studio',
    category: 'Renovations',
    location: 'Sutton Coldfield, West Midlands',
    country: 'United Kingdom',
    year: '2023',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '290 m²',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming a tired 1960s suburban home into an open split-level architectural residence with an auxiliary timber-clad garden design studio, maximising garden views and natural daylight.',
    brief: 'Reorganise disjointed floor levels, expand kitchen and family living areas towards the private rear woodland, and build a standalone home office studio with separate client access.',
    approach: 'We created cascading internal terraces connecting the upper living room down to an expansive kitchen-diner. A separate pavilion clad in vertical Siberian larch sits amongst mature trees, serving as a dedicated creative workspace.',
    specifications: {
      area: '290 m² total (240 m² house, 50 m² garden studio)',
      duration: '9 months planning & construction',
      servicesProvided: [
        'Architectural Concept & Spatial Restructuring',
        'Permitted Development & Planning Approvals',
        'Building Regulations Compliance Package',
        'Garden Studio Off-Grid Electrics & Solar Detailing'
      ],
      localAuthority: 'Birmingham City Council (Sutton Coldfield)',
      materials: [
        'Off-white smooth architectural render & blackened timber',
        'Anthracite aluminium picture windows with deep timber sills',
        'Solid engineered white oak flooring',
        'Siberian larch open-jointed rainscreen cladding'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
        caption: 'Split-level Living Volume with Full-Height Garden Picture Windows',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-scs-01',
        drawingNumber: 'SCS-01',
        title: 'Split-Level Spatial Plan & Garden Pavilion Footprint',
        scale: '1:50 @ A1',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Level shifts, integrated storage staircases, and standalone garden studio positioning.'
      }
    ],
    featured: false
  },
  {
    id: 'monolith-veil-house',
    slug: 'monolith-veil-house',
    projectNumber: '09',
    title: 'The Monolith & Veil Residence',
    subtitle: 'Bespoke contemporary residential dwelling with sculptural brickwork and slatted timber veil',
    category: 'New Builds',
    location: 'Sutton Coldfield, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '385 m²',
    image: '/images/projects/monolith-veil-front-elevation-100.jpg',
    heroImage: '/images/projects/monolith-veil-front-elevation-100.jpg',
    heroType: 'photo',
    description: 'A bespoke contemporary single-family residence balancing solid monolithic brick massing with a lightweight slatted timber solar veil. The architecture creates ultimate privacy from the street while opening expansively to private landscaped rear gardens.',
    brief: 'Design an iconic yet private modern family home that navigates a sloping site, provides generous daylight throughout, and achieves exceptional energy efficiency with zero carbon ambitions.',
    approach: 'We composed the front elevation with bold textured Petersen brick piers and a recessed entrance courtyard. The rear elevation opens completely through multi-panel slimline sliding glass walls, shaded by an integrated architectural cedar brise-soleil.',
    specifications: {
      area: '385 m² internal floor area',
      duration: '14 months design, planning & construction',
      servicesProvided: [
        'All Architectural Services',
        'Creative Design & 3D Visualisations',
        'Full Planning Permission',
        'Building Regulations & Statutory Sign-off'
      ],
      localAuthority: 'Birmingham City Council (Sutton Coldfield)',
      materials: [
        'Petersen Kolumba charcoal brickwork',
        'Vertical charred cedar timber veil cladding',
        'Minimal-frame triple-glazed structural aluminium apertures',
        'Seamless poured mineral floor datum'
      ]
    },
    gallery: [
      {
        source: '/images/projects/monolith-veil-front-elevation-100.jpg',
        caption: 'Front Street Elevation: Monolithic Brick and Slatted Architectural Veil',
        type: 'photo'
      },
      {
        source: '/images/projects/monolith-veil-rear-elevation-100.jpg',
        caption: 'Rear Garden Elevation: Full-Height Glazing and Cantilevered Upper Terrace',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-mv-01',
        drawingNumber: 'MV-01',
        title: 'Front & Rear Architectural Elevation Drawing Set',
        scale: '1:100 @ A1',
        fileSource: 'monolith-veil-elevations.pdf',
        type: 'Elevation',
        image: '/images/projects/monolith-veil-front-elevation-100.jpg',
        description: 'Complete 1:100 architectural elevations illustrating masonry datum lines, solar veil spacing, and window reveals.',
        annotations: [
          'PETERSEN CHARCOAL BRICK FACADE DATUM',
          'VERTICAL CEDAR TIMBER SOLAR VEIL (50x30mm)',
          'RECESSED MINIMALIST ENTRANCE THRESHOLD'
        ]
      }
    ],
    featured: true
  }
];
