import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'coombe-fields-substation',
    slug: 'coombe-fields-33kv-substation',
    projectNumber: '01',
    title: 'Coombe Fields 33kV Primary Substation & Switch House',
    subtitle: 'Mission-critical electricity distribution infrastructure adjacent to Rolls-Royce Aerospace',
    category: 'Infrastructure',
    location: 'Coombe Fields Road, Ansty, Coventry',
    country: 'United Kingdom',
    year: '2025',
    status: 'Technical Design & Statutory Approvals',
    clientType: 'Distribution Network Operator (DNO)',
    area: 'Building: 110 m² | Site Compound: ~4,500 m²',
    ffl: '101.30 m AOD',
    eavesHeight: '3,210 mm',
    ridgeHeight: '4,150 mm',
    image: '/drawings/coombe-fields-switch-house-elevations.svg',
    heroImage: '/drawings/coombe-fields-substation-site-plan.svg',
    heroType: 'vector-drawing',
    description: 'A critical 33kV primary power distribution switch house and dual transformer substation compound adjacent to the Rolls-Royce aerospace facility, featuring engineered sub-floor cable basements, comprehensive waterproofing systems, and dedicated highway bellmouth access infrastructure.',
    brief: 'Provide full architectural and civil documentation for a replacement primary 33kV switch house to house 12-panel high-voltage switchgear boards, SCADA control suites, battery storage, and an expansive sub-floor cable basement, while securing highway adoption approvals for an engineered bellmouth off Coombe Fields Road.',
    approach: 'Our technical scheme established an elevated finished floor datum (* 101.30 m AOD) with extensive underfloor cable basement trenches, Kingspan RW1000 insulated roof panels in Merlin Grey (BS 18B-25), Highline architectural gutters, Goosewing Grey (BS 10-A-05) downpipes, Bituthene 8000 tanking, and a dedicated 15m radius highway bellmouth junction using 125x255 HB2 kerbs.',
    specifications: {
      area: 'Building: 110 m² | Site: ~4,500 m²',
      duration: '14 months design & highways package',
      servicesProvided: [
        'Civil Engineering Coordination',
        'Switch House Architectural Design',
        'Highways Bellmouth (S278) Detailing',
        'Cable Trench & Basement Detailing',
        'Structural Waterproofing Specification'
      ],
      localAuthority: 'Warwickshire County Council & Rugby Borough Council',
      dimensions: {
        width: '17.765m',
        depth: '6.16m',
        height: '4.15m',
        ceiling: '3.20m',
        cantilever: '0.45m eaves trim'
      },
      materials: [
        'Kingspan RW1000 composite insulated roof panels in Merlin Grey (BS 18B-25)',
        'Proprietary Highline trim gutters in Merlin Grey (BS 18B-25)',
        'Square profile rainwater downpipes in Goosewing Grey (BS 10-A-05)',
        'High-density engineering facing brickwork with contrasting string course',
        'Bituthene 8000 tanking membrane & hydrophilic waterstop penetration seals',
        '125x255 HB2 & 125x150 BN precast concrete highway kerbs',
        '1,800mm open mesh steel fencing (BS 1722 Part 14) & 2,400mm palisade compound gates'
      ],
      technicalSpecifications: [
        'Finished Floor Level: * 101.30 m AOD',
        'Modular structural column bay grid: 3,453 mm centers',
        'Reinforced sub-floor cable trench with galvanized removable chequer plates',
        'Positive fall to internal sump pit with automated discharge ducting',
        '15m radius entrance splay designed to DB32 & DMRB highway junction standards'
      ],
      codesCompliance: [
        'BS 1722 Part 14 (Open Mesh Steel Fencing Specification)',
        'BS 7671 (Electrical Installations & Earthing Substation Grid)',
        'BS 6398 (Damp-Proof Courses in Masonry Construction)',
        'DMRB CD 123 (Geometric Design of At-Grade Highway Intersections)'
      ]
    },
    gallery: [
      {
        source: '/drawings/coombe-fields-substation-site-plan.svg',
        caption: 'Comprehensive Substation Compound Masterplan, Security Perimeters & Boundary Elevations',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      },
      {
        source: '/drawings/coombe-fields-bellmouth-civil-dwg.svg',
        caption: 'Highway Bellmouth Civil Engineering, Kerb Geometry & Road Sections A & B-B',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      },
      {
        source: '/drawings/coombe-fields-switch-house-elevations.svg',
        caption: 'Switch House Orthographic Elevations A–D, Sections A-A & B-B, and GA Floor Plan',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      },
      {
        source: '/drawings/coombe-fields-subfloor-duct-details.svg',
        caption: 'Foundation, Sub-Floor Ducting Setting Out & Waterproofing Details A through E',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      }
    ],
    drawings: [
      {
        id: 'dwg-cf-01',
        drawingNumber: 'DWG-01',
        title: 'General Substation Master Site Plan & Elevations',
        scale: '1:500 & 1:200 @ A1',
        fileSource: 'coombe-fields-substation-site-plan.pdf',
        type: 'Site Plan',
        image: '/drawings/coombe-fields-substation-site-plan.svg',
        description: 'Master site setting out plan, North/South/East/West elevations, boundary to Rolls-Royce land, 2400mm palisade fencing, and dual transformer bay enclosures.',
        caption: 'Boundary alignment to Rolls-Royce land with dual transformer bunds and palisade enclosure.',
        annotations: [
          'ROLLS ROYCE LAND BOUNDARY',
          '2400mm HIGH PALISADE FENCE TO COMPOUND',
          '1800mm OPEN MESH STEEL FENCE (BS 1722 PART 14)',
          'FFL * 101.30m AOD'
        ]
      },
      {
        id: 'dwg-cf-02',
        drawingNumber: 'DWG-02',
        title: 'Highway Bellmouth Civil Engineering & Splay Geometry',
        scale: '1:100 & 1:20 @ A1',
        fileSource: 'coombe-fields-bellmouth-civil-dwg.pdf',
        type: 'Technical Drawing',
        image: '/drawings/coombe-fields-bellmouth-civil-dwg.svg',
        description: 'Civil engineering junction plan, 15m radius entrance splay, road cross section B-B detailing asphalt wearing course, roadbase, and sub-base depth.',
        caption: 'Bellmouth construction detailing 125x255 HB2 kerbs and 450mm carriageway build-up.',
        annotations: [
          'BELLMOUTH CONSTRUCTION',
          '125x255HB2 & 125x150BN EXTERNAL RADIUS DROPPER KERBS',
          '2No. EXISTING 33kV CABLES & PILOTS TO BE PROTECTED',
          'MIN 450mm ROAD CONSTRUCTION DEPTH'
        ]
      },
      {
        id: 'dwg-cf-03',
        drawingNumber: 'DWG-03',
        title: 'Switch House Elevations A–D, Sections & Floor Plan',
        scale: '1:50 & 1:100 @ A1',
        fileSource: 'coombe-fields-switch-house-elevations.pdf',
        type: 'Elevation',
        image: '/drawings/coombe-fields-switch-house-elevations.svg',
        description: '1:50 general arrangement floor plan (17,765mm x 6,160mm), four external elevations, and cross sections through switchroom cable trench.',
        caption: 'Switch house elevations specifying Kingspan RW1000 panels in Merlin Grey (BS 18B-25).',
        annotations: [
          'KINGSPAN RW1000 INSULATED ROOF PANELS (MERLIN GREY BS 18B-25)',
          'HIGHLINE GUTTERS & GOOSEWING GREY BS 10-A-05 DOWNPIPES',
          'LEVEL * 101.30m AOD',
          '17,765mm OVERALL BUILDING LENGTH'
        ]
      },
      {
        id: 'dwg-cf-04',
        drawingNumber: 'DWG-04',
        title: 'Foundation, Sub-Floor Duct Setting Out & Details A–E',
        scale: '1:50 & 1:20 @ A1',
        fileSource: 'coombe-fields-subfloor-duct-details.pdf',
        type: 'Detail',
        image: '/drawings/coombe-fields-subfloor-duct-details.svg',
        description: 'Cable trench duct setting out plan, trench steelwork support interface, and tanking waterproofing details A, B, C, D, and E.',
        caption: 'Structural waterproofing details including Bituthene tanking and hydrophilic duct seals.',
        annotations: [
          'SUB FLOOR DUCT SETTING OUT PLAN',
          'DETAIL A: WALL TANKING LAPPED WITH SLAB',
          'DETAIL C: 150mm PVC DUCT PENETRATION WATERSTOP',
          'DETAIL D: UNIVERSAL COLUMN 203x203 HOLDING DOWN BOLTS'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'cauldon-lowe-switchroom',
    slug: 'cauldon-lowe-switchroom',
    projectNumber: '02',
    title: 'Cauldon Lowe to Waterhouses 33kV Switchroom Facility',
    subtitle: 'Context-responsive utility architecture integrated into rural Staffordshire Moorlands',
    category: 'Infrastructure',
    location: 'Between Cauldon Lowe & Waterhouses, Staffordshire',
    country: 'United Kingdom',
    year: '2024',
    status: 'Planning Approved & Construction Package',
    clientType: 'Regional Energy Infrastructure Provider',
    area: '~60 m² switchroom building',
    ridgeHeight: '4,720 mm',
    eavesHeight: '3,100 mm',
    image: '/drawings/cauldon-lowe-switchroom-building-drawings.svg',
    heroImage: '/drawings/cauldon-lowe-substation-compound-plan.svg',
    heroType: 'vector-drawing',
    description: 'A context-responsive 33kV electricity distribution switchroom building integrated into a rural hillside landscape setting, utilizing traditional masonry, a dual-pitched tiled roof, and a secure compound adjacent to an existing 11kV facility and telecommunications mast.',
    brief: 'Design a resilient 33kV switchroom building replacing outdated rural infrastructure. Local planning policy required the exterior to respect the agricultural and vernacular character of the Staffordshire Moorlands, rejecting industrial flat roof aesthetics.',
    approach: 'We developed a dual-pitched gable design detailed with contextual facing brick cavity walls matching local masonry, traditional roofing tiles, and 45mm powder-coated zinc-coated steel security doors. The compound incorporates removable 2.4m palisade security panels and roadside drystone screening.',
    specifications: {
      area: '~60 m² (11.0m x 5.4m footprint)',
      duration: '9 months planning & technical approval',
      servicesProvided: [
        'Vernacular Architectural Design',
        'Planning Permission (Staffordshire Moorlands DC)',
        'Building Regulations Compliance',
        'Compound & Security Detailing'
      ],
      localAuthority: 'Staffordshire Moorlands District Council',
      dimensions: {
        width: '11.00m',
        depth: '5.40m',
        height: '4.72m ridge',
        ceiling: '3.10m eaves'
      },
      materials: [
        'Contextual local facing brickwork cavity walling (350mm overall thickness with 100mm cavity)',
        'Traditional pitched tiled roof construction on engineered timber trusses',
        'Fair-faced concrete blockwork inner skin (light colour)',
        'Heavy-duty 45mm double skin zinc-coated sheet steel security doors (polyester powder-coated)',
        '110mm half round UPVC gutters with 68mm rainwater downpipes',
        '2,400mm removable galvanized security palisade compound fence'
      ],
      technicalSpecifications: [
        'Reinforced concrete float finish slab designed for equipment loadings',
        'Prestressed concrete composite lintels with minimum 150mm end bearing',
        'Two-ply hessian based bitumen DPC to BS 6398',
        'Passive wall louvres and high-security personnel access suite'
      ],
      codesCompliance: [
        'BS 6398 (Bitumen Damp-Proof Courses)',
        'BS EN 1996 (Eurocode 6: Design of Masonry Structures)',
        'BS 1722 Part 12 (Steel Palisade Fences for High Security)'
      ]
    },
    gallery: [
      {
        source: '/drawings/cauldon-lowe-substation-compound-plan.svg',
        caption: 'Overall Substation Enclosure Plan and Landscape Elevations X & Y',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      },
      {
        source: '/drawings/cauldon-lowe-switchroom-building-drawings.svg',
        caption: '33kV Switchroom Building - Plan, Elevations A–D & 1:1250 Location Plan',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      }
    ],
    drawings: [
      {
        id: 'dwg-cl-01',
        drawingNumber: 'DWG-01',
        title: '33kV Switchroom Building - Plan & Elevations A–D',
        scale: '1:100 & 1:1250 @ A1',
        fileSource: 'cauldon-lowe-switchroom-building-drawings.pdf',
        type: 'Elevation',
        image: '/drawings/cauldon-lowe-switchroom-building-drawings.svg',
        description: 'Elevations A (Front), B (Rear), C and D (Side Gables), Floor Plan, 1:1250 Location Plan, and 11 statutory technical notes.',
        caption: 'Detailed architectural elevations, site location plan, and schedule of 11 materials notes.',
        annotations: [
          'FACING BRICK TO OUTER SKIN TO CAVITY TO MATCH EXISTING',
          'ROOF TO BE TILED PITCHED ROOF CONSTRUCTION',
          '45mm THICK DOUBLE SKIN ZINC-COATED STEEL DOORS',
          'LOCATION PLAN SCALE 1:1250'
        ]
      },
      {
        id: 'dwg-cl-02',
        drawingNumber: 'DWG-02',
        title: 'Overall Site Plan & Compound Elevations X & Y',
        scale: '1:150 @ A1',
        fileSource: 'cauldon-lowe-substation-compound-plan.pdf',
        type: 'Site Plan',
        image: '/drawings/cauldon-lowe-substation-compound-plan.svg',
        description: 'Compound layout between Cauldon Lowe and Waterhouses, roadside boundary walling, 2.4m palisade fencing, and contextual landscape elevations X & Y.',
        caption: 'Overall substation compound showing highway orientation and rural stone wall buffer.',
        annotations: [
          'TO CAULDON LOWE <-- | --> TO WATERHOUSES',
          'PROPOSED 33kV SWITCHROOM BUILDING (TILED PITCHED ROOF)',
          'PROPOSED ELEVATION X & Y',
          'EXISTING 11kV BUILDING & RADIO MAST'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'al-waha-civic-oasis',
    slug: 'al-waha-civic-oasis',
    projectNumber: '03',
    title: 'Al-Waha Civic Oasis & Parametric Canopy Park',
    subtitle: 'Contemporary public landscape, double-curved membrane canopy & civic gathering park',
    category: 'Civic & Landscape',
    location: 'Arabian Peninsula Context',
    country: 'Saudi Arabia / Gulf Region',
    year: '2025',
    status: 'Design Visualization & Spatial Masterplanning',
    clientType: 'Municipal Public Authority',
    area: '14,200 m² Masterplan Park',
    ridgeHeight: '9.80 m canopy crest',
    image: '/images/projects/civic-oasis-pavilion-approach-render.jpg',
    heroImage: '/images/projects/civic-oasis-park-aerial-overview.jpg',
    heroType: 'render',
    description: 'A community park structured by an organic anticlastic canopy and a radial vertical timber fin colonnade, forming a shaded microclimate for civic gatherings, family recreation, and pedestrian promenades in an arid climate.',
    brief: 'Create a landmark civic park and community gathering pavilion that balances dramatic contemporary architectural expression with climatic mitigation, passive solar shading, and cultural gathering traditions.',
    approach: 'The centerpiece is an undulating, anticlastic double-curved shell canopy reflecting regional dune geomorphology, supported on cylindrical concrete columns. An interior circular colonnade of slender vertical glulam timber fins encloses a central circular amphitheater lawn, surrounded by formal gravel promenades, clipped evergreen hedgerows, and olive tree planter courts.',
    specifications: {
      area: '14,200 m² Total Site Area | 650 m² Shaded Pavilion',
      duration: 'Concept & Spatial Visualization',
      servicesProvided: [
        'Public Realm Masterplanning',
        'Parametric Canopy Geometry',
        'Landscape & Promenade Design',
        '3D Visualisation & Lighting Simulation'
      ],
      localAuthority: 'Regional Municipal Authority',
      dimensions: {
        width: '32.0m canopy diameter',
        depth: '24.0m canopy width',
        height: '9.80m peak crest',
        ceiling: '4.50m - 7.20m variable undercroft'
      },
      materials: [
        'Double-curved reinforced concrete / tensile membrane shell (matte white mineral finish)',
        'Engineered glulam vertical timber solar-shading fins',
        'Fair-faced white architectural concrete circular columns (600mm diameter)',
        'Stabilized decomposed granite & crushed limestone pedestrian paving',
        'Formal clipped Buxus microphylla hedgerows & drought-tolerant Olea europaea trees',
        'Classical multi-globe black cast-iron civic luminaires'
      ],
      technicalSpecifications: [
        'Anticlastic shell geometry engineered for optimal air circulation & wind-scoop cooling',
        'Radial timber fin spacing optimized for solar cutoff during peak summer midday hours',
        'Sub-surface drip irrigation fed from recycled municipal stormwater cisterns',
        'Integrated surface parking with permeable paving and shaded pedestrian crossing axis'
      ],
      codesCompliance: [
        'Universal Accessibility Guidelines (ADA / GSO Standards for Public Spaces)',
        'Sustainable Public Realm Standards (Water-Sensitive Urban Design)'
      ]
    },
    gallery: [
      {
        source: '/images/projects/civic-oasis-park-aerial-overview.jpg',
        caption: 'Aerial Masterplan Perspective: Canopy, Civic Lawns, Olive Planters & Public Parking',
        type: 'render',
        aspectRatio: '16:9'
      },
      {
        source: '/images/projects/civic-oasis-pavilion-approach-render.jpg',
        caption: 'Promenade Approach: Shaded Pavilion, Linear Hedge Axis & Traditional Attire Figures',
        type: 'render',
        aspectRatio: '16:9'
      },
      {
        source: '/images/projects/civic-oasis-pavilion-interior-canopy.jpg',
        caption: 'Under-Canopy Oculus: Radial Timber Louvres Framing Central Gathering Lawn',
        type: 'render',
        aspectRatio: '16:9'
      }
    ],
    drawings: [],
    featured: true,
    latest: true
  },
  {
    id: 'monolith-veil-facility',
    slug: 'monolith-veil-facility',
    projectNumber: '04',
    title: 'The Monolith & Veil: Cultural / Educational Facility',
    subtitle: 'Minimalist mineral massing counterbalanced by parametric twisted solar-shading screens',
    category: 'Institutional',
    location: 'Undisclosed Location',
    country: 'Undisclosed',
    year: '2025',
    status: 'Design Development & Façade Studies',
    clientType: 'Cultural Foundation',
    area: '2,800 m²',
    ridgeHeight: '12.00 m parapet',
    image: '/images/projects/monolith-veil-front-elevation-100.jpg',
    heroImage: '/images/projects/monolith-veil-front-elevation-100.jpg',
    heroType: 'render',
    description: 'An institutional building counterbalancing heavy textured mineral-wash stone massing against delicate, twisted blue-gray solar-shading louvre systems, documented via orthographic 1:100 scale elevations.',
    brief: 'Formulate an architectural expression that conveys institutional permanence and environmental sensitivity, providing robust passive solar protection for expansive daylight apertures without sacrificing views or façade articulation.',
    approach: 'The building is structured as an austere mineral plaster monolith grounded by landscape boulders. Punctured rectangular apertures contrast with an ethereal entry portal clad in vertical timber battens, crowned by an array of twisted blue aerofoil aluminium louvres (brise-soleil) that modulate incoming daylight as sun angles shift.',
    specifications: {
      area: '2,800 m² Gross Internal Area',
      duration: 'Schematic Design & Façade Engineering',
      servicesProvided: [
        'Architectural Concept Design',
        'Parametric Façade Engineering',
        'Solar Radiation Analysis',
        '1:100 Orthographic Documentation'
      ],
      dimensions: {
        width: '36.00m',
        depth: '22.00m',
        height: '12.00m parapet',
        ceiling: '3.80m typical floor-to-ceiling'
      },
      materials: [
        'Fair-faced mineral plaster / textured architectural concrete with off-white wash',
        'Twisted aerofoil aluminium louvres in Aegean / Slate Blue finish',
        'Natural vertical timber batten cladding to portal bays',
        'Deep-set anodized bronze-finish thermally broken window frames',
        'Rough-cut monolithic limestone landscape boulders'
      ],
      technicalSpecifications: [
        'Twisted louvre rotation calibrated to cut direct solar heat gain by 68% on south-facing glass',
        'Concealed mechanical head tracks permitting modular fin maintenance',
        'Orthographically drafted at 1:100 scale with standardized human scale figures',
        'Thermally broken rainscreen envelope achieving target U-value of 0.14 W/m²K'
      ],
      codesCompliance: [
        'Building Envelope Thermal Performance (Part L / ASHRAE 90.1)',
        'Solar Heat Gain Coefficient (SHGC < 0.25 compliant)'
      ]
    },
    gallery: [
      {
        source: '/images/projects/monolith-veil-front-elevation-100.jpg',
        caption: 'Front Elevation @ 1:100: Monolithic Stone Facade, Landscape Boulders & Twisted Blue Louvre Screen',
        type: 'render',
        aspectRatio: '16:9'
      },
      {
        source: '/images/projects/monolith-veil-rear-elevation-100.jpg',
        caption: 'Rear Elevation @ 1:100: Dual Twisted Shading Veil Assemblies & Vertical Slot Window',
        type: 'render',
        aspectRatio: '16:9'
      }
    ],
    drawings: [],
    featured: true
  },
  {
    id: 'residential-loft-adaptation',
    slug: 'residential-loft-adaptation',
    projectNumber: '05',
    title: 'Contemporary Dormer Loft Extension & Residence Adaptation',
    subtitle: 'Domestic roof conversion with zinc-clad dormer and UK Building Regulations compliance package',
    category: 'Residential',
    location: 'West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Building Regulations Full Plans Approval',
    clientType: 'Private Homeowner',
    area: '30 m² usable loft floor plate',
    image: '/drawings/residential-loft-dormer-technical-elevations.svg',
    heroImage: '/drawings/residential-loft-dormer-technical-elevations.svg',
    heroType: 'vector-drawing',
    description: 'A domestic roof space conversion and contemporary dormer extension with full technical documentation for UK Building Regulations compliance across Parts B (Fire), E (Acoustics), F (Ventilation), K (Safety Glazing), L (Thermal), and P (Electrical).',
    brief: 'Transform an underutilised domestic roof space into a master bedroom and ensuite bathroom, maximising head height and daylight while ensuring strict compliance with all statutory building regulations and structural load distributions.',
    approach: 'The design incorporates a full-width flat-roof rear dormer clad in anthracite weatherboarding, detailed with a 1:10 verge assembly (18mm exterior plywood, 125mm tilting fillet, and 3-layer mineral felt). Part E acoustic partitions feature Gyproc SoundBloc and Isover quilt, backed by FD30S fire door compartmentalization.',
    specifications: {
      area: '30 m² Usable Floor Area',
      duration: '4 months technical design & Building Control approval',
      servicesProvided: [
        'Measured Building Survey',
        'Building Regulations Technical Package',
        'Structural Steel Beam Sizing & Trimming',
        'Acoustic & Fire Compartmentalization Specification'
      ],
      localAuthority: 'Approved Building Control Inspectorate / Local Authority',
      dimensions: {
        width: '6.40m dormer width',
        depth: '3.60m internal depth',
        height: '2.45m internal headroom'
      },
      materials: [
        'Anthracite horizontal weatherboard / zinc-look composite cladding',
        'Three-layer high-performance torch-on mineral felt flat roof covering',
        '18mm WBP exterior-grade plywood decking & 125mm timber tilting fillet',
        'UPVC eaves fascia with continuous 25mm ventilated soffit strip',
        'Gyproc 70mm metal stud partitions with 2 layers of 12.5mm SoundBloc plasterboard each side',
        '25mm Isover mineral wool acoustic quilt (min 10 kg/m³ density)',
        'Rockwool wire-reinforced fire stop barriers in all concealed openings'
      ],
      technicalSpecifications: [
        'FD30S fire-resisting doors (30 min fire & smoke) fitted to protected stairway',
        'Internal stud partitions achieving airborne sound reduction exceeding Rw 45 dB (Part E Type E-ST-2)',
        'Flat roof U-value of 0.15 W/m²K via 120mm PIR warm-roof insulation over joists',
        'Ensuite mechanical extract ventilation: 15 l/s with 15-minute overrun timer',
        'Safety glazing below 800mm finished floor level specified as Toughened Safety Glass (Part K)'
      ],
      codesCompliance: [
        'UK Building Regulations Approved Document B (Fire Safety)',
        'UK Building Regulations Approved Document E (Resistance to Sound)',
        'UK Building Regulations Approved Document F (Ventilation)',
        'UK Building Regulations Approved Document K (Protection from Falling)',
        'UK Building Regulations Approved Document L (Conservation of Fuel & Power)',
        'UK Building Regulations Approved Document P (Electrical Safety - BS 7671)'
      ]
    },
    gallery: [
      {
        source: '/drawings/residential-loft-dormer-technical-elevations.svg',
        caption: 'Technical Drawing Package: Proposed Rear/Side Elevations, 1:10 Verge Detail & Statutory Schedules',
        type: 'vector-drawing',
        aspectRatio: '16:9'
      }
    ],
    drawings: [
      {
        id: 'dwg-res-01',
        drawingNumber: 'LOFT-01',
        title: 'Proposed Elevations, 1:10 Verge Detail & Compliance Schedule',
        scale: '1:100 & 1:10 @ A1',
        fileSource: 'residential-loft-dormer-technical-elevations.pdf',
        type: 'Detail',
        image: '/drawings/residential-loft-dormer-technical-elevations.svg',
        description: 'Proposed rear elevation, side gable elevation, 1:10 flat-roof verge construction, and statutory compliance schedules for Parts B, E, F, K, L, and P.',
        caption: 'Full plans building control approval drawing with 1:10 structural roof verge construction.',
        annotations: [
          'PROPOSED REAR ELEVATION (30m² LOFT AREA)',
          'FLAT ROOF VERGE CONSTRUCTION SCALE 1:10',
          'FD30S NOTE & ROCKWOOL FIRE BARRIERS',
          'INTERNAL STUDWORK WALLS : PART E SOUND',
          'PART P ELECTRICS & PART F VENTILATION'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'harborne-house',
    slug: 'harborne-house',
    projectNumber: '06',
    title: 'Harborne House',
    subtitle: 'Contemporary residential transformation & rear pavilion extension',
    category: 'Residential',
    location: 'Harborne, Birmingham',
    country: 'United Kingdom',
    year: '2025',
    status: 'Planning Approved & Technical Detailing',
    clientType: 'Private Residential Homeowner',
    area: '265 m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A comprehensive architectural remodelling and single-storey rear pavilion extension to an Edwardian villa in Harborne. The design connects the historic front living rooms to an expansive light-filled kitchen and garden pavilion framed in charred timber and ultra-slim structural glazing.',
    brief: 'Redesign the ground floor layout to eliminate compartmentalised dark living spaces, incorporate a high-specification chef kitchen with central breakfast island, and create a seamless transition to a sunken landscaped south-facing garden terrace.',
    approach: 'We introduced an exposed steel portal frame enabling a 12.4m column-free rear aperture. A cantilevered sedum-green warm roof overhangs the terrace to prevent summer solar overheating while allowing low-angle winter sun to naturally warm the polished concrete thermal mass floor.',
    specifications: {
      area: '265 m² total (95 m² new extension)',
      duration: '8 months design, planning & technical documentation',
      servicesProvided: [
        'Full Architectural Design (RIBA Stages 1-4)',
        'Birmingham City Council Planning Permission',
        'Structural Steel Frame Engineering Coordination',
        'Detailed Interior Architectural Joinery Package',
        'Landscape & Sunken Terrace Integration'
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
      },
      {
        id: 'dwg-hh-03',
        drawingNumber: 'HH-03',
        title: 'Structural Steel Portal & Cantilever Detail Section A-A',
        scale: '1:20 @ A1',
        fileSource: 'harborne-house-structural-section.pdf',
        type: 'Section',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Technical construction section showing thermal breaks, steel beam encasement, and warm-roof insulation build-up.',
        annotations: [
          'FABRICATED PFC BEAMS WITH SCHÖCK ISOKORB THERMAL BREAKS',
          '160mm PIR RIGID FOAM ROOF INSULATION',
          'TRIPLE GLAZED SOLAR CONTROL COATING (g-value 0.38)'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'edgbaston-pavilion',
    slug: 'edgbaston-pavilion',
    projectNumber: '07',
    title: 'Edgbaston Pavilion',
    subtitle: 'Sculptural garden extension in a designated conservation area',
    category: 'Extensions',
    location: 'Edgbaston, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Client',
    area: '145 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Located in the historic Edgbaston Conservation Area under the stewardship of the Calthorpe Estate, this extension introduces a sculptural garden room connected to an imposing Victorian brick villa via a delicate frameless structural glass link.',
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
      },
      {
        id: 'dwg-ep-02',
        drawingNumber: 'EP-02',
        title: 'Garden Elevation & Conservation Material Specification',
        scale: '1:50 @ A1',
        fileSource: 'edgbaston-pavilion-elevation.pdf',
        type: 'Elevation',
        image: '/drawings/edgbaston-pavilion-plan.svg',
        description: 'Orthographic elevation detailing bronze standing seam rhythms and recessed clerestory glazing.',
        annotations: [
          'STANDING SEAM BRONZE CLADDING (38mm PROFILES)',
          'LOW-E SOLAR GLAZING WITH HIDDEN HEAD TRACK',
          'NATURAL HYDRAULIC LIME POINTING TO BRICKWORK'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'solihull-courtyard-villa',
    slug: 'solihull-courtyard-villa',
    projectNumber: '08',
    title: 'Solihull Courtyard Villa',
    subtitle: 'New-build bespoke private home arranged around a tranquil atrium',
    category: 'New Build',
    location: 'Solihull, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Client',
    area: '420 m²',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A bespoke contemporary single-family home in Solihull, arranged in a quadrant around a central contemplative water courtyard. The design achieves total privacy from surrounding suburban plots while flooding every living space with changing natural light.',
    brief: 'Create a private, peaceful family sanctuary incorporating five ensuite bedrooms, open-plan entertaining wings, a dedicated home office, and an integrated wellness lap pool.',
    approach: 'By orienting primary living functions around an internal glazed atrium cloister with a specimen Japanese Maple and reflecting pool, we eliminated the need for street-facing windows, creating a fortress of calm insulated by massive insulated stone walls and deep overhangs.',
    specifications: {
      area: '420 m² internal floor area',
      duration: '16 months turnkey design & delivery',
      servicesProvided: [
        'Site Feasibility & Topographical Analysis',
        'New-Build Full Planning Permission (Solihull MBC)',
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
      },
      {
        id: 'dwg-scv-02',
        drawingNumber: 'SCV-02',
        title: 'Longitudinal Section Through Central Atrium & Solar Overhang',
        scale: '1:50 @ A1',
        fileSource: 'solihull-courtyard-villa-section.pdf',
        type: 'Section',
        image: '/drawings/solihull-villa-courtyard-plan.svg',
        description: 'Detailed section showing solar shading geometry, sedum roof buildup, and underfloor ground-source heat collector connections.',
        annotations: [
          '1.8m CEDAR SOFFIT OVERHANG CALCULATED FOR SUMMER SHADING',
          'GROUND SOURCE HEAT PUMP BOREHOLE CONNECTION (180m DEPTH)',
          'TRIPLE SEAL AIRTIGHT MEMBRANE ENVELOPE'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'jewellery-quarter-lofts',
    slug: 'jewellery-quarter-lofts',
    projectNumber: '09',
    title: 'Jewellery Quarter Lofts',
    subtitle: 'Industrial heritage adaptive reuse into dual live-work duplexes',
    category: 'Renovation',
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
    approach: 'We exposed the magnificent pitch-pine king-post trusses and stabilized the lime-mortared brickwork. A new black raw-steel spiral staircase and cantilevered steel mezzanine float within the voluminous shell, celebrating industrial craftsmanship with crisp contemporary detailing.',
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
          'ACOUSTIC TWIN-LEAF STUDWORK PARTITIONS',
          'THERMALLY-BROKEN CRITTALL PROFILE WINDOWS'
        ]
      }
    ]
  },
  {
    id: 'sutton-coldfield-studio-house',
    slug: 'sutton-coldfield-studio-house',
    projectNumber: '10',
    title: 'Sutton Coldfield Studio House',
    subtitle: 'Split-level architectural remodelling & garden studio',
    category: 'Residential',
    location: 'Sutton Coldfield, West Midlands',
    country: 'United Kingdom',
    year: '2023',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '290 m²',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming a tired 1960s suburban home into an open split-level architectural residence with an auxiliary timber-clad garden design studio, maximising garden views and northern daylight.',
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
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Split-Level Floor Plan & Spatial Transition Details',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-scs-01',
        drawingNumber: 'SCS-01',
        title: 'Split-Level Spatial Plan & Garden Pavilion Footprint',
        scale: '1:50 @ A1',
        fileSource: 'sutton-coldfield-studio-house-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Level shifts, integrated storage staircases, and standalone garden studio positioning.',
        annotations: [
          'CASCADE LEVEL TRANSITION WITH THREE RISERS',
          'CORNER MINIMAL-FRAME PICTURE WINDOW',
          'OFF-GRID FIBRE-OPTIC & POWER DUCT TO STUDIO'
        ]
      }
    ]
  },
  {
    id: 'barnt-green-passive-house',
    slug: 'barnt-green-passive-house',
    projectNumber: '11',
    title: 'Barnt Green Passive House',
    subtitle: 'Low-energy timber frame residential visualisations & planning package',
    category: 'Visualisation',
    location: 'Barnt Green, Worcestershire',
    country: 'United Kingdom',
    year: '2025',
    status: 'Design Stage / Visualisation Package',
    clientType: 'Private Self-Builder',
    area: '350 m²',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'An advanced Passivhaus-certified detached dwelling nestled into the wooded hillside of Barnt Green. The design employs a super-insulated cross-laminated timber (CLT) structure with triple glazing and integrated earth-tube geothermal cooling.',
    brief: 'Deliver photorealistic 3D visualisations, sunlight shadow studies, and a comprehensive planning submission demonstrating low landscape impact within a green belt setting.',
    approach: 'We sculpted the building form into the natural contours of the hill with a low-slung sedum roof. High-fidelity rendering and parametric solar ray-tracing proved that the design harmonised with the woodland canopy without compromising winter solar gain.',
    specifications: {
      area: '350 m²',
      duration: '6 months visualization, PHPP energy modeling & planning package',
      servicesProvided: [
        'Photorealistic 3D Architectural Visualisation & VR Tours',
        'Passivhaus Planning Package (PHPP) Energy Simulation',
        'Green Belt Exceptional Design Justification',
        'Daylight & Sunlight Assessment (BRE 209)'
      ],
      localAuthority: 'Bromsgrove District Council',
      materials: [
        'Cross-Laminated Timber (CLT) superstructure',
        'Dark treated vertical spruce timber siding',
        'Triple-glazed Passivhaus certified timber-aluminium windows (U-value 0.68 W/m²K)',
        'Extensive bio-diverse wildflower living roof'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Passivhaus Woodland Elevation Render in Autumn Twilight',
        type: 'photo'
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Passivhaus Solar Envelope & Air-tightness Membrane Layout',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-bgp-01',
        drawingNumber: 'BGP-01',
        title: 'Passive Solar Envelope & Hillside Setting Out Plan',
        scale: '1:100 @ A1',
        fileSource: 'barnt-green-passive-house-plan.pdf',
        type: 'Site Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Solar orientation, earth-sheltered north wall, and southern solar collection glazing.',
        annotations: [
          'TRUE SOUTH SOLAR SOLAR GAIN WALL',
          'EARTH-SHELTERED NORTH RETAINING WALL (U-value 0.10)',
          'CONTINUOUS AIR-TIGHTNESS LINE (0.4 ACH @ 50Pa)'
        ]
      }
    ]
  },
  {
    id: 'moseley-arts-crafts-renovation',
    slug: 'moseley-arts-crafts-renovation',
    projectNumber: '12',
    title: 'Moseley Arts & Crafts Renovation',
    subtitle: 'Restoration and rear glass box addition for a historic family villa',
    category: 'Renovation',
    location: 'Moseley, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Family',
    area: '380 m²',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A delicate conservation and contemporary adaptation of an important Arts and Crafts villa in Moseley. Original leaded casements, carved timber inglenooks, and decorative plaster ceilings were meticulously restored alongside an ultra-minimal glass box addition.',
    brief: 'Restore decorative Arts & Crafts heritage features, repair decayed roof timbers, and introduce a modern family dining pavilion directly opening into the historic walled orchard.',
    approach: 'We worked alongside specialist heritage plasterers and blacksmiths to preserve original Morris & Co. details, contrasting this rich decorative tradition with an austere frameless glass box that dissolves the boundary between interior and orchard.',
    specifications: {
      area: '380 m²',
      duration: '14 months conservation & extension delivery',
      servicesProvided: [
        'Conservation Area Planning Application',
        'Historic Timber & Stained Glass Restoration Schedule',
        'Structural Glass Box Engineering Specification',
        'Breathable Internal Lime Plaster Insulation (Diathonite)'
      ],
      localAuthority: 'Birmingham City Council (Moseley Conservation Area)',
      materials: [
        'Handmade terracotta hanging wall tiles',
        'Restored leaded oak casement windows with bespoke brass hardware',
        'Cantilevered structural silicone glazed glass roof',
        'Diathonite cork and lime insulating plaster'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
        caption: 'Arts & Crafts Street Elevation with Restored Leaded Casements',
        type: 'photo'
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Heritage Restoration & Glass Box Floor Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-mar-01',
        drawingNumber: 'MAR-01',
        title: 'Ground Floor Conservation & Rear Glass Box Plan',
        scale: '1:50 @ A1',
        fileSource: 'moseley-arts-crafts-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Restored original rooms and the new structural glass dining extension opening to the historic orchard.',
        annotations: [
          'RESTORED ARTS & CRAFTS INGLENOOK FIREPLACE',
          'STRUCTURAL GLASS BOX CORNER CANOPY',
          'BREATHABLE CORK-LIME INSULATING PLASTER (DIATHONITE)'
        ]
      }
    ]
  },
  {
    id: 'digbeth-creative-studios',
    slug: 'digbeth-creative-studios',
    projectNumber: '13',
    title: 'Digbeth Creative Studios',
    subtitle: 'Adaptive reuse of brick warehouse into multi-disciplinary workspaces',
    category: 'Commercial',
    location: 'Digbeth, Birmingham',
    country: 'United Kingdom',
    year: '2023',
    status: 'Completed',
    clientType: 'Commercial Property Group',
    area: '780 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming a disused Victorian manufacturing warehouse in Digbeth into vibrant creative agency studios, photography bays, and exhibition galleries. Raw industrial materials are paired with acoustic felt pods and dynamic energy-efficient climate control.',
    brief: 'Create flexible commercial office and makerspace units that attract leading media and tech businesses to Birmingham’s creative quarter while preserving the atmospheric industrial patina.',
    approach: 'We celebrated the original steel trusses, exposed brickwork, and timber floorboards. Modular birch-plywood meeting rooms and steel catwalks were inserted like furniture into the voluminous space, providing flexible sub-division without permanently altering the historic shell.',
    specifications: {
      area: '780 m² over two levels',
      duration: '10 months planning, commercial building regs & completion',
      servicesProvided: [
        'Commercial Change of Use Planning Permission',
        'Building Regulations Part B (Fire Safety) Strategy',
        'Bespoke Plywood Pod Spatial Architecture',
        'EPC Rating A Energy Optimization'
      ],
      localAuthority: 'Birmingham City Council',
      materials: [
        'Exposed blue engineering brickwork',
        'CNC-cut sustainable birch plywood modular pods',
        'Galvanised steel spiral staircases & mezzanine catwalks',
        'Polished concrete floor with underfloor heating'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Open Studio Space with Plywood Pods and Exposed Trusses',
        type: 'photo'
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Commercial Studio Spatial Layout & Fire Strategy Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-dcs-01',
        drawingNumber: 'DCS-01',
        title: 'Commercial Studio Master Plan & Compartmentation',
        scale: '1:100 @ A1',
        fileSource: 'digbeth-creative-studios-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Open-plan creative studio layout, modular meeting pods, and fire-escape circulation routes.',
        annotations: [
          'MODULAR CNC BIRCH PLYWOOD POD CLUSTER',
          'CONTINUOUS ACCESSIBLE ENTRANCE RAMP',
          'PART B FIRE ESCAPE CORRIDOR & SMOKE VENTS'
        ]
      }
    ]
  }
];
