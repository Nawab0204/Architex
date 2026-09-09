import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/drawings');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Coombe Fields Substation Site Plan
const coombeFieldsSitePlan = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EAEAE5" stroke-width="0.75"/>
    </pattern>
    <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#1C3B52" stroke-width="0.8" opacity="0.4" />
    </pattern>
    <pattern id="gravel" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.75" fill="#888880"/>
      <circle cx="8" cy="7" r="0.75" fill="#888880"/>
      <circle cx="5" cy="10" r="0.75" fill="#888880"/>
    </pattern>
  </defs>

  <!-- Background Grid -->
  <rect width="1600" height="1100" fill="url(#grid)"/>

  <!-- Border Frame -->
  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block (Top Right) -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: COOMBE FIELDS 33kV SUBSTATION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: GENERAL SUBSTATION MASTER SITE PLAN &amp; ELEVATIONS</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: DWG-01 / REV C | SCALE 1:500 &amp; 1:200 @ A1</text>
    <text x="15" y="76" font-size="8" fill="#777770">LOCATION: COOMBE FIELDS ROAD, ANSTY / COVENTRY, WARWICKSHIRE</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">STATUS: TECHNICAL DESIGN &amp; STATUTORY APPROVALS</text>
  </g>

  <!-- North Arrow -->
  <g transform="translate(1480, 200)">
    <circle cx="0" cy="0" r="24" fill="none" stroke="#111111" stroke-width="1"/>
    <polygon points="0,-22 -6,0 0,-4" fill="#111111"/>
    <polygon points="0,-22 6,0 0,-4" fill="none" stroke="#111111" stroke-width="0.75"/>
    <line x1="0" y1="-22" x2="0" y2="22" stroke="#111111" stroke-width="0.75"/>
    <text x="-4" y="-28" font-size="12" font-weight="bold" fill="#111111">N</text>
  </g>

  <!-- Master Site Boundary Plan (Upper Half) -->
  <g transform="translate(80, 80)">
    <text x="20" y="20" font-size="12" font-weight="bold" fill="#111111" letter-spacing="1">OVERALL SUBSTATION COMPOUND SETTING OUT PLAN</text>
    <text x="20" y="36" font-size="9" fill="#777770">SCALE 1:500 (METRIC mm)</text>

    <!-- Adjacent ROLLS ROYCE Land Boundary -->
    <line x1="40" y1="360" x2="820" y2="360" stroke="#111111" stroke-width="2" stroke-dasharray="10,5,2,5"/>
    <text x="120" y="385" font-size="11" font-weight="bold" fill="#777770" letter-spacing="2">BOUNDARY TO ROLLS-ROYCE LAND</text>

    <!-- Site Perimeter Poly -->
    <polygon points="80,120 780,60 880,320 80,360" fill="url(#gravel)" stroke="#111111" stroke-width="1.5"/>
    
    <!-- 2400mm Palisade Fencing Line -->
    <polygon points="120,140 740,90 830,310 120,340" fill="#FFFFFF" stroke="#1C3B52" stroke-width="1" stroke-dasharray="6,3"/>
    <text x="140" y="130" font-size="8" fill="#1C3B52">PROPOSED 2400mm HIGH GALVANISED STEEL PALISADE FENCE</text>
    <text x="320" y="80" font-size="8" fill="#555550">PROPOSED 1800mm OPEN MESH STEEL FENCE (BS 1722 PART 14)</text>

    <!-- Coombe Fields Road Alignment -->
    <path d="M 860,20 Q 940,240 1020,440" fill="none" stroke="#111111" stroke-width="2.5"/>
    <path d="M 920,20 Q 1000,240 1080,440" fill="none" stroke="#111111" stroke-width="1" stroke-dasharray="8,4"/>
    <text x="960" y="220" font-size="11" font-weight="bold" fill="#111111" transform="rotate(68 960 220)" letter-spacing="2">COOMBE FIELDS ROAD</text>

    <!-- Bellmouth Entrance Splay -->
    <path d="M 830,240 C 880,250 890,260 920,280" fill="none" stroke="#1C3B52" stroke-width="1.5"/>
    <path d="M 830,300 C 880,310 930,340 960,370" fill="none" stroke="#1C3B52" stroke-width="1.5"/>
    <text x="840" y="270" font-size="8" fill="#1C3B52">15m RADIUS BELLMOUTH SPLAY WITH 125x255 HB2 KERBS</text>

    <!-- Primary 33kV Switch House Footprint -->
    <rect x="220" y="230" width="220" height="80" fill="url(#hatch)" stroke="#111111" stroke-width="2"/>
    <rect x="220" y="230" width="220" height="80" fill="none" stroke="#111111" stroke-width="0.5"/>
    <text x="235" y="265" font-size="10" font-weight="bold" fill="#111111">33kV SWITCH HOUSE</text>
    <text x="235" y="280" font-size="8" fill="#1C3B52">FFL: * 101.30m AOD (17.765m x 6.16m)</text>
    <text x="235" y="295" font-size="7.5" fill="#555550">REF TO DWGS 01, 02, 03, 04, 05 &amp; 11</text>

    <!-- 2No Transformer Bays -->
    <g transform="translate(480, 150)">
      <rect x="0" y="0" width="100" height="90" fill="#F4F4F0" stroke="#111111" stroke-width="1.5"/>
      <rect x="15" y="15" width="70" height="60" fill="none" stroke="#1C3B52" stroke-width="1"/>
      <circle cx="50" cy="45" r="18" fill="none" stroke="#111111" stroke-width="1"/>
      <text x="20" y="48" font-size="7.5" font-weight="bold" fill="#111111">33/11kV TX 1</text>
      <text x="5" y="105" font-size="7.5" fill="#555550">BUNDED ENCLOSURE</text>
    </g>
    <g transform="translate(610, 150)">
      <rect x="0" y="0" width="100" height="90" fill="#F4F4F0" stroke="#111111" stroke-width="1.5"/>
      <rect x="15" y="15" width="70" height="60" fill="none" stroke="#1C3B52" stroke-width="1"/>
      <circle cx="50" cy="45" r="18" fill="none" stroke="#111111" stroke-width="1"/>
      <text x="20" y="48" font-size="7.5" font-weight="bold" fill="#111111">33/11kV TX 2</text>
      <text x="5" y="105" font-size="7.5" fill="#555550">BUNDED ENCLOSURE</text>
    </g>

    <!-- Cable Route Vectors -->
    <path d="M 440,270 L 530,240" fill="none" stroke="#C51B18" stroke-width="1.2" stroke-dasharray="4,2"/>
    <path d="M 440,270 L 660,240" fill="none" stroke="#C51B18" stroke-width="1.2" stroke-dasharray="4,2"/>
    <text x="460" y="290" font-size="8" fill="#C51B18">UNDERFLOOR 33kV CABLE DUCTING CORRIDOR</text>
  </g>

  <!-- Orthographic Context Elevations (Lower Section) -->
  <g transform="translate(80, 520)">
    <line x1="0" y1="0" x2="1420" y2="0" stroke="#111111" stroke-width="1"/>
    <text x="20" y="30" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">CONTEXT BOUNDARY &amp; SITE ELEVATIONS</text>
    <text x="20" y="45" font-size="8" fill="#777770">SCALE 1:200</text>

    <!-- North Elevation -->
    <g transform="translate(40, 70)">
      <text x="0" y="0" font-size="9" font-weight="bold" fill="#111111">NORTH ELEVATION (COMPOUND BOUNDARY)</text>
      <!-- Ground line -->
      <line x1="0" y1="50" x2="640" y2="50" stroke="#111111" stroke-width="1.5"/>
      <!-- Palisade Fence -->
      <line x1="0" y1="16" x2="640" y2="16" stroke="#888880" stroke-width="0.8" stroke-dasharray="2,2"/>
      <text x="50" y="35" font-size="7.5" fill="#888880">2400mm GALVANISED STEEL PALISADE</text>
      <!-- Switch house silhouette in background -->
      <polygon points="180,50 180,10 400,18 400,50" fill="#E8E8E2" stroke="#111111" stroke-width="1"/>
      <text x="240" y="35" font-size="8" fill="#111111">SWITCH HOUSE REAR</text>
    </g>

    <!-- South Elevation -->
    <g transform="translate(740, 70)">
      <text x="0" y="0" font-size="9" font-weight="bold" fill="#111111">SOUTH ELEVATION (FACING ROLLS-ROYCE LAND)</text>
      <line x1="0" y1="50" x2="640" y2="50" stroke="#111111" stroke-width="1.5"/>
      <!-- Switch house front elevation -->
      <polygon points="120,50 120,18 340,10 340,50" fill="#F4F4F0" stroke="#111111" stroke-width="1.2"/>
      <!-- Doors & highline gutter -->
      <rect x="140" y="24" width="22" height="26" fill="#1C3B52"/>
      <rect x="300" y="24" width="22" height="26" fill="#1C3B52"/>
      <line x1="120" y1="18" x2="340" y2="10" stroke="#1C3B52" stroke-width="2"/>
      <text x="170" y="35" font-size="8" fill="#111111">KINGSPAN RW1000 ROOF (MERLIN GREY)</text>
    </g>

    <!-- East Elevation -->
    <g transform="translate(40, 240)">
      <text x="0" y="0" font-size="9" font-weight="bold" fill="#111111">EAST ELEVATION (FACING COOMBE FIELDS ROAD)</text>
      <line x1="0" y1="50" x2="640" y2="50" stroke="#111111" stroke-width="1.5"/>
      <polygon points="200,50 200,15 280,10 280,50" fill="#E8E8E2" stroke="#111111" stroke-width="1"/>
      <text x="210" y="35" font-size="7.5" fill="#111111">GABLE MONOPITCH</text>
    </g>

    <!-- West Elevation -->
    <g transform="translate(740, 240)">
      <text x="0" y="0" font-size="9" font-weight="bold" fill="#111111">WEST ELEVATION</text>
      <line x1="0" y1="50" x2="640" y2="50" stroke="#111111" stroke-width="1.5"/>
      <polygon points="200,50 200,10 280,15 280,50" fill="#E8E8E2" stroke="#111111" stroke-width="1"/>
      <text x="210" y="35" font-size="7.5" fill="#111111">WEST WALL MONOPITCH</text>
    </g>

    <!-- Scale Bar -->
    <g transform="translate(580, 420)">
      <rect x="0" y="0" width="240" height="6" fill="#FFFFFF" stroke="#111111" stroke-width="0.8"/>
      <rect x="0" y="0" width="60" height="6" fill="#111111"/>
      <rect x="120" y="0" width="60" height="6" fill="#111111"/>
      <text x="0" y="-4" font-size="8" fill="#111111">0</text>
      <text x="56" y="-4" font-size="8" fill="#111111">5m</text>
      <text x="114" y="-4" font-size="8" fill="#111111">10m</text>
      <text x="174" y="-4" font-size="8" fill="#111111">15m</text>
      <text x="234" y="-4" font-size="8" fill="#111111">20m</text>
      <text x="80" y="20" font-size="8" font-weight="bold" fill="#111111">SCALE BAR 1:500</text>
    </g>
  </g>
</svg>`;

// 2. Coombe Fields Bellmouth Civil Engineering DWG
const coombeFieldsBellmouth = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <defs>
    <pattern id="asphalt" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="0.5" fill="#333333"/>
      <circle cx="4.5" cy="4.5" r="0.5" fill="#555555"/>
    </pattern>
    <pattern id="hardcore" width="12" height="12" patternUnits="userSpaceOnUse">
      <polygon points="2,2 5,1 4,4" fill="#999990"/>
      <polygon points="8,8 11,7 9,10" fill="#AAAAA0"/>
    </pattern>
  </defs>

  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: COOMBE FIELDS 33kV SUBSTATION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: HIGHWAY BELLMOUTH CONSTRUCTION &amp; ROAD SECTIONS</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: DWG-02 / REV B | SCALE 1:100 &amp; 1:20</text>
    <text x="15" y="76" font-size="8" fill="#777770">CIVIL ENGINEERING &amp; HIGHWAYS ADOPTION PACKAGE</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">APPROVED FOR HIGHWAY CONSTRUCTION</text>
  </g>

  <!-- Bellmouth Splay Layout Plan (Left Side) -->
  <g transform="translate(80, 80)">
    <text x="20" y="20" font-size="12" font-weight="bold" fill="#111111" letter-spacing="1">BELLMOUTH ENTRANCE CONSTRUCTION PLAN (SCALE 1:100)</text>
    
    <!-- Coombe Fields Road Main Carriageway -->
    <path d="M 60,100 L 760,100" fill="none" stroke="#111111" stroke-width="3"/>
    <path d="M 60,180 L 760,180" fill="none" stroke="#111111" stroke-width="1.5" stroke-dasharray="12,6"/>
    <path d="M 60,260 L 760,260" fill="none" stroke="#111111" stroke-width="3"/>
    <text x="260" y="145" font-size="12" font-weight="bold" fill="#777770" letter-spacing="2">COOMBE FIELDS ROAD CARRIAGEWAY</text>

    <!-- Entrance Radii 15m -->
    <path d="M 280,260 C 350,260 380,300 400,440" fill="none" stroke="#1C3B52" stroke-width="2.5"/>
    <path d="M 580,260 C 510,260 480,300 460,440" fill="none" stroke="#1C3B52" stroke-width="2.5"/>

    <!-- Access Road to Substation -->
    <rect x="400" y="440" width="60" height="200" fill="url(#asphalt)" stroke="#111111" stroke-width="1.5"/>

    <!-- Annotations -->
    <g transform="translate(100, 310)">
      <line x1="0" y1="0" x2="260" y2="-20" stroke="#1C3B52" stroke-width="1"/>
      <circle cx="260" cy="-20" r="3" fill="#1C3B52"/>
      <text x="0" y="-8" font-size="8.5" font-weight="bold" fill="#1C3B52">INSTALL 125x255 HB2 &amp; 125x150BN</text>
      <text x="0" y="6" font-size="8" fill="#555550">EXTERNAL RADIUS DROPPER KERBS (LH &amp; RH)</text>
      <text x="0" y="18" font-size="8" fill="#555550">15m RADIUS TRANSITIONS BOTH SIDES ENTRANCE SPLAY</text>
    </g>

    <!-- Protected Cables Note -->
    <g transform="translate(80, 480)">
      <rect x="0" y="0" width="280" height="60" fill="#FFF4F2" stroke="#C51B18" stroke-width="1"/>
      <text x="12" y="20" font-size="8.5" font-weight="bold" fill="#C51B18">2No. EXISTING 33kV CABLES &amp; PILOTS</text>
      <text x="12" y="34" font-size="8" fill="#555550">To be protected with concrete split-ducts</text>
      <text x="12" y="48" font-size="8" fill="#555550">during bellmouth &amp; civil works phase</text>
    </g>

    <!-- Gates & Palisade -->
    <line x1="370" y1="520" x2="490" y2="520" stroke="#111111" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="350" y="540" font-size="8.5" font-weight="bold" fill="#111111">PROPOSED PALISADE ENTRANCE GATES (2400mm)</text>
  </g>

  <!-- Civil Cross Sections (Right Side) -->
  <g transform="translate(900, 200)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">ROAD SECTION B-B: CARRIAGEWAY BUILD-UP</text>
    <text x="0" y="16" font-size="8" fill="#777770">SCALE 1:20 (DETAIL)</text>

    <!-- Section Profile Drawing -->
    <g transform="translate(0, 40)">
      <!-- 40mm Wearing Course -->
      <rect x="0" y="0" width="560" height="24" fill="#222222" stroke="#111111" stroke-width="0.8"/>
      <text x="575" y="16" font-size="8" font-weight="bold" fill="#111111">40mm Dense Surface Course (14mm nominal aggregate)</text>

      <!-- 70mm Dense Bitumen Macadam Binder -->
      <rect x="0" y="24" width="560" height="42" fill="#555555" stroke="#111111" stroke-width="0.8"/>
      <text x="575" y="48" font-size="8" fill="#333333">70mm Dense Bitumen Macadam Binder Course (28mm agg)</text>

      <!-- 130mm Roadbase -->
      <rect x="0" y="66" width="560" height="78" fill="#888880" stroke="#111111" stroke-width="0.8"/>
      <text x="575" y="110" font-size="8" fill="#555550">130mm Dense Bitumen Macadam Roadbase</text>

      <!-- 150mm Type 1 Sub-base -->
      <rect x="0" y="144" width="560" height="90" fill="url(#hardcore)" stroke="#111111" stroke-width="0.8"/>
      <text x="575" y="195" font-size="8" fill="#555550">150mm Type 1 Crushed Limestone Sub-base</text>

      <!-- Capping Layer -->
      <rect x="0" y="234" width="560" height="90" fill="#E8E8E2" stroke="#111111" stroke-width="0.8"/>
      <text x="575" y="280" font-size="8" fill="#777770">Min 450mm Total Construction Depth on Prepared Subgrade</text>
    </g>

    <!-- Kerb Detail -->
    <g transform="translate(0, 420)">
      <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">KERB INSTALLATION SPECIFICATION</text>
      <!-- Half-battered kerb cross section -->
      <polygon points="40,80 40,20 60,20 75,45 75,80" fill="#E0E0DB" stroke="#111111" stroke-width="1.5"/>
      <!-- Concrete bedding & backing -->
      <polygon points="10,110 10,80 40,80 40,50 75,50 90,80 110,80 110,110" fill="#C5C5C0" stroke="#111111" stroke-width="1"/>
      <text x="130" y="35" font-size="8.5" font-weight="bold" fill="#111111">125x255 HB2 Half Battered Precast Concrete Kerb</text>
      <text x="130" y="55" font-size="8" fill="#555550">Bedded on 100mm ST4 concrete bedding</text>
      <text x="130" y="70" font-size="8" fill="#555550">with continuous concrete haunching to within 25mm of top</text>
    </g>
  </g>
</svg>`;

// 3. Coombe Fields Switch House Elevations & Plan
const coombeFieldsSwitchHouse = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <defs>
    <pattern id="brick" width="20" height="10" patternUnits="userSpaceOnUse">
      <rect width="20" height="10" fill="#F0EFEA"/>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#D0CFC8" stroke-width="0.75"/>
      <line x1="0" y1="5" x2="20" y2="5" stroke="#D0CFC8" stroke-width="0.75"/>
      <line x1="10" y1="0" x2="10" y2="5" stroke="#D0CFC8" stroke-width="0.75"/>
      <line x1="0" y1="5" x2="0" y2="10" stroke="#D0CFC8" stroke-width="0.75"/>
    </pattern>
    <pattern id="roof" width="15" height="15" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="15" stroke="#7A8B99" stroke-width="1.2"/>
    </pattern>
  </defs>

  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: COOMBE FIELDS 33kV SUBSTATION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: SWITCH HOUSE ELEVATIONS, SECTIONS &amp; GA PLAN</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: DWG-03 / REV D | SCALE 1:50 &amp; 1:100 @ A1</text>
    <text x="15" y="76" font-size="8" fill="#777770">ROOF: KINGSPAN RW1000 MERLIN GREY (BS 18B-25)</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">PRIMARY DATUM: FFL * 101.30m AOD</text>
  </g>

  <!-- Elevation A (Long Front Elevation) -->
  <g transform="translate(80, 80)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">ELEVATION A (FACING ENTRANCE FORECOURT)</text>
    <text x="0" y="15" font-size="8" fill="#777770">SCALE 1:50</text>

    <!-- Ground datum line -->
    <line x1="-20" y1="180" x2="880" y2="180" stroke="#111111" stroke-width="1.5"/>
    <text x="-20" y="195" font-size="8" font-weight="bold" fill="#111111">FFL * 101.30</text>

    <!-- Wall massing 17,765mm representation -->
    <rect x="0" y="40" width="840" height="140" fill="url(#brick)" stroke="#111111" stroke-width="1.5"/>

    <!-- Kingspan RW1000 Roof Slope -->
    <polygon points="0,40 840,15 840,25 0,48" fill="#7A8B99" stroke="#1C3B52" stroke-width="1.5"/>
    <text x="240" y="10" font-size="8.5" font-weight="bold" fill="#1C3B52">ROOF: KINGSPAN RW1000 INSULATED PANELS (MERLIN GREY BS 18B-25)</text>

    <!-- Highline gutter trim -->
    <line x1="0" y1="48" x2="840" y2="25" stroke="#111111" stroke-width="2"/>
    <text x="20" y="32" font-size="7.5" fill="#555550">PROPRIETARY TRIM WITH HIGHLINE GUTTERS</text>

    <!-- Double Steel Security Doors (Personnel & Equipment) -->
    <!-- Switch Room Equipment Doors -->
    <rect x="60" y="70" width="80" height="110" fill="#244C66" stroke="#111111" stroke-width="1"/>
    <line x1="100" y1="70" x2="100" y2="180" stroke="#FFFFFF" stroke-width="0.8"/>
    <text x="65" y="64" font-size="7.5" font-weight="bold" fill="#111111">SWITCH ROOM ACCESS</text>

    <!-- Control Room Personnel Door -->
    <rect x="580" y="75" width="45" height="105" fill="#244C66" stroke="#111111" stroke-width="1"/>
    <text x="570" y="68" font-size="7.5" font-weight="bold" fill="#111111">CONTROL ROOM</text>

    <!-- Downpipes in Goosewing Grey BS 10-A-05 -->
    <line x1="5" y1="48" x2="5" y2="180" stroke="#99A3A4" stroke-width="3"/>
    <line x1="835" y1="25" x2="835" y2="180" stroke="#99A3A4" stroke-width="3"/>
    <text x="845" y="100" font-size="7" fill="#777770">SQUARE DOWNPIPE (GOOSEWING GREY BS 10-A-05)</text>

    <!-- String course -->
    <line x1="0" y1="130" x2="840" y2="130" stroke="#C51B18" stroke-width="1"/>
    <text x="360" y="142" font-size="7" fill="#C51B18">CONTRASTING ENGINEERING BRICK STRING COURSE</text>
  </g>

  <!-- Elevation B (Gable Elevation) & Section A-A -->
  <g transform="translate(980, 200)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">ELEVATION B &amp; SECTION A-A</text>
    <text x="0" y="15" font-size="8" fill="#777770">SCALE 1:50</text>

    <!-- Elevation B Monopitch Gable -->
    <polygon points="20,180 20,40 280,10 280,180" fill="url(#brick)" stroke="#111111" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="300" y2="180" stroke="#111111" stroke-width="1.5"/>
    <text x="60" y="100" font-size="8" fill="#111111">ELEVATION B (GABLE PROFILE)</text>
    <text x="60" y="115" font-size="7.5" fill="#555550">Eaves: ~3210mm | Ridge: ~4150mm</text>

    <!-- Section A-A through Switch Room Trench -->
    <g transform="translate(320, 0)">
      <polygon points="20,180 20,40 220,10 220,180" fill="#FFFFFF" stroke="#111111" stroke-width="1.5"/>
      <!-- Trench cutout -->
      <rect x="50" y="180" width="120" height="60" fill="#E8E8E2" stroke="#111111" stroke-width="1"/>
      <line x1="50" y1="180" x2="170" y2="180" stroke="#111111" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="60" y="215" font-size="7.5" font-weight="bold" fill="#C51B18">CABLE TRENCH BASEMENT</text>
      <!-- Switchboard inside -->
      <rect x="60" y="90" width="100" height="90" fill="#1C3B52"/>
      <text x="70" y="140" font-size="7.5" fill="#FFFFFF">33kV SWITCHGEAR</text>
    </g>
  </g>

  <!-- GA Floor Plan (Lower Half) -->
  <g transform="translate(80, 420)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">GENERAL ARRANGEMENT GROUND FLOOR PLAN</text>
    <text x="0" y="15" font-size="8" fill="#777770">SCALE 1:50 | OVERALL INTERNAL DIMENSIONS: 17,765mm x 6,160mm</text>

    <!-- Outer Walls -->
    <rect x="0" y="40" width="880" height="280" fill="#FFFFFF" stroke="#111111" stroke-width="2.5"/>
    <rect x="12" y="52" width="856" height="256" fill="#FFFFFF" stroke="#111111" stroke-width="0.8"/>

    <!-- Room Partitions -->
    <!-- Switch Room (Left side) -->
    <line x1="520" y1="52" x2="520" y2="308" stroke="#111111" stroke-width="2"/>
    <text x="180" y="110" font-size="12" font-weight="bold" fill="#111111">SWITCH ROOM (84.0 m²)</text>
    <text x="180" y="130" font-size="8.5" fill="#555550">12-PANEL 33kV VACUUM CIRCUIT BREAKER SWITCHBOARD</text>

    <!-- Switchgear Floor Trench with Chequer Plates -->
    <rect x="60" y="150" width="400" height="60" fill="url(#hatch)" stroke="#1C3B52" stroke-width="1.2"/>
    <text x="120" y="185" font-size="8.5" font-weight="bold" fill="#1C3B52">CABLE TRENCH WITH REMOVABLE CHEQUER PLATES</text>

    <!-- Control Room -->
    <line x1="520" y1="180" x2="740" y2="180" stroke="#111111" stroke-width="1.5"/>
    <text x="540" y="90" font-size="10" font-weight="bold" fill="#111111">CONTROL &amp; RELAY ROOM</text>
    <text x="540" y="110" font-size="8" fill="#777770">SCADA &amp; TELEMETRY RACKS</text>

    <!-- Meter Room -->
    <line x1="740" y1="52" x2="740" y2="308" stroke="#111111" stroke-width="1.5"/>
    <text x="750" y="90" font-size="8.5" font-weight="bold" fill="#111111">METER RM</text>

    <!-- Store Room & WC -->
    <line x1="520" y1="240" x2="740" y2="240" stroke="#111111" stroke-width="1.2"/>
    <text x="540" y="215" font-size="8.5" font-weight="bold" fill="#111111">STORE ROOM</text>
    
    <text x="540" y="280" font-size="8.5" font-weight="bold" fill="#111111">PERSONNEL WC</text>
    <text x="540" y="295" font-size="7" fill="#555550">50mm DUCTED WATER ENTRY</text>

    <!-- Dimension Strings -->
    <!-- Overall Width String -->
    <g transform="translate(0, 340)">
      <line x1="0" y1="0" x2="880" y2="0" stroke="#111111" stroke-width="0.8"/>
      <line x1="0" y1="-8" x2="0" y2="8" stroke="#111111" stroke-width="0.8"/>
      <line x1="880" y1="-8" x2="880" y2="8" stroke="#111111" stroke-width="0.8"/>
      <text x="400" y="-6" font-size="9" font-weight="bold" fill="#111111">17,765 mm OVERALL LENGTH</text>
    </g>
    <!-- Bay Spacing Grid Strings -->
    <g transform="translate(0, 365)">
      <text x="80" y="0" font-size="7.5" fill="#555550">3453 mm</text>
      <text x="240" y="0" font-size="7.5" fill="#555550">3453 mm</text>
      <text x="400" y="0" font-size="7.5" fill="#555550">3453 mm</text>
      <text x="560" y="0" font-size="7.5" fill="#555550">3453 mm</text>
      <text x="720" y="0" font-size="7.5" fill="#555550">3453 mm</text>
    </g>
  </g>
</svg>`;

// 4. Coombe Fields Sub-Floor Duct Details
const coombeFieldsDuctDetails = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <defs>
    <pattern id="concrete" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.5" fill="#999990"/>
      <circle cx="7" cy="8" r="0.5" fill="#999990"/>
    </pattern>
  </defs>

  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: COOMBE FIELDS 33kV SUBSTATION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: FOUNDATION, SUB-FLOOR DUCTS &amp; DETAILS A–E</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: DWG-04 / REV C | SCALE 1:50 &amp; 1:20 @ A1</text>
    <text x="15" y="76" font-size="8" fill="#777770">STRUCTURAL WATERPROOFING &amp; CABLE BASEMENT</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">WATERPROOFING: BITUTHENE 8000 MEMBRANE</text>
  </g>

  <!-- Plan: Sub Floor Duct Setting Out (Left) -->
  <g transform="translate(80, 80)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">SUB FLOOR DUCT SETTING OUT PLAN (SCALE 1:50)</text>
    <rect x="0" y="30" width="800" height="420" fill="url(#concrete)" stroke="#111111" stroke-width="1.5"/>

    <!-- High-Voltage Cable Duct Openings -->
    <g transform="translate(60, 80)">
      <text x="0" y="-10" font-size="8" font-weight="bold" fill="#C51B18">33kV INCOMING DUCT ENTRIES (150mm DIA PVC PIPES)</text>
      <circle cx="20" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
      <circle cx="60" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
      <circle cx="100" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
      <circle cx="140" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
      <circle cx="180" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
      <circle cx="220" cy="20" r="14" fill="#FFFFFF" stroke="#C51B18" stroke-width="1.5"/>
    </g>

    <!-- Longitudinal Trench Network -->
    <rect x="60" y="150" width="680" height="90" fill="#FFFFFF" stroke="#1C3B52" stroke-width="2"/>
    <text x="240" y="200" font-size="10" font-weight="bold" fill="#1C3B52">MAIN CONTINUOUS REINFORCED CONCRETE CABLE TRENCH</text>
    <text x="260" y="220" font-size="8" fill="#555550">FALL TO SUMP 1:100 (AUTOMATIC DISCHARGE DUCT)</text>

    <!-- Sump Pit Location -->
    <rect x="650" y="160" width="70" height="70" fill="#E8E8E2" stroke="#C51B18" stroke-width="1.5"/>
    <text x="660" y="200" font-size="8" font-weight="bold" fill="#C51B18">SUMP PIT</text>

    <!-- Details Callout Markers -->
    <circle cx="70" cy="30" r="16" fill="#FFFFFF" stroke="#111111" stroke-width="1.5"/>
    <text x="63" y="35" font-size="9" font-weight="bold" fill="#111111">A</text>

    <circle cx="400" cy="150" r="16" fill="#FFFFFF" stroke="#111111" stroke-width="1.5"/>
    <text x="393" y="155" font-size="9" font-weight="bold" fill="#111111">C</text>

    <circle cx="740" cy="240" r="16" fill="#FFFFFF" stroke="#111111" stroke-width="1.5"/>
    <text x="733" y="245" font-size="9" font-weight="bold" fill="#111111">D</text>
  </g>

  <!-- Technical Waterproofing Details A to E (Right & Lower) -->
  <g transform="translate(940, 200)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">TECHNICAL WATERPROOFING DETAILS (SCALE 1:20 / 1:10)</text>

    <!-- Detail A: Foundation / External Wall Interface -->
    <g transform="translate(0, 30)">
      <rect x="0" y="0" width="280" height="180" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="12" y="20" font-size="9" font-weight="bold" fill="#111111">DETAIL A: EXTERNAL WALL TANKING</text>
      <!-- Brick outer, cavity, block inner -->
      <rect x="20" y="40" width="30" height="100" fill="#E8E8E2" stroke="#111111"/>
      <rect x="55" y="40" width="20" height="100" fill="#FFFFFF" stroke="#111111"/>
      <rect x="80" y="40" width="40" height="100" fill="#D0D0C8" stroke="#111111"/>
      <!-- Membrane blue line -->
      <path d="M 50,140 L 75,140 L 75,40" fill="none" stroke="#1C3B52" stroke-width="2.5"/>
      <text x="130" y="60" font-size="7.5" fill="#1C3B52">Continuous Bituthene DPC</text>
      <text x="130" y="75" font-size="7.5" fill="#1C3B52">lapped with floor slab</text>
      <text x="130" y="90" font-size="7.5" fill="#1C3B52">tanking membrane</text>
    </g>

    <!-- Detail C: Duct Penetration Waterproofing -->
    <g transform="translate(300, 30)">
      <rect x="0" y="0" width="280" height="180" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="12" y="20" font-size="9" font-weight="bold" fill="#111111">DETAIL C: DUCT SLEEVE SEALING</text>
      <circle cx="80" cy="90" r="35" fill="#E8E8E2" stroke="#111111" stroke-width="1.5"/>
      <circle cx="80" cy="90" r="25" fill="#1C3B52" stroke="#111111" stroke-width="1"/>
      <text x="130" y="70" font-size="7.5" fill="#111111">150mm PVC Duct</text>
      <text x="130" y="85" font-size="7.5" fill="#1C3B52">Hydrophilic Waterstop</text>
      <text x="130" y="100" font-size="7.5" fill="#1C3B52">gasket ring around pipe</text>
      <text x="130" y="115" font-size="7.5" fill="#555550">Non-shrink structural grout</text>
    </g>

    <!-- Detail D: Column Base Footing Isolation -->
    <g transform="translate(0, 230)">
      <rect x="0" y="0" width="280" height="180" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="12" y="20" font-size="9" font-weight="bold" fill="#111111">DETAIL D: STEELWORK INTERFACE</text>
      <rect x="40" y="40" width="30" height="80" fill="#1C3B52"/>
      <rect x="25" y="120" width="60" height="12" fill="#111111"/>
      <rect x="10" y="132" width="90" height="30" fill="#E0E0DA" stroke="#111111"/>
      <text x="120" y="60" font-size="7.5" fill="#111111">Universal Column 203x203</text>
      <text x="120" y="75" font-size="7.5" fill="#555550">Holding down bolts M24</text>
      <text x="120" y="90" font-size="7.5" fill="#1C3B52">25mm flowable cementitious</text>
      <text x="120" y="105" font-size="7.5" fill="#1C3B52">high-strength grout</text>
    </g>

    <!-- Detail E: Structural Movement Joint -->
    <g transform="translate(300, 230)">
      <rect x="0" y="0" width="280" height="180" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="12" y="20" font-size="9" font-weight="bold" fill="#111111">DETAIL E: MOVEMENT JOINT</text>
      <rect x="20" y="40" width="45" height="100" fill="#E8E8E2" stroke="#111111"/>
      <rect x="80" y="40" width="45" height="100" fill="#E8E8E2" stroke="#111111"/>
      <!-- Joint with waterstop -->
      <line x1="67" y1="40" x2="67" y2="140" stroke="#C51B18" stroke-width="3"/>
      <circle cx="67" cy="90" r="8" fill="#C51B18"/>
      <text x="140" y="60" font-size="7.5" fill="#C51B18">Centre-bulb PVC</text>
      <text x="140" y="75" font-size="7.5" fill="#C51B18">waterstop expansion joint</text>
      <text x="140" y="90" font-size="7.5" fill="#555550">Polysulphide sealant</text>
    </g>
  </g>
</svg>`;

// 5. Cauldon Lowe Substation Compound Plan
const cauldonLoweCompound = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: CAULDON LOWE 33kV SUBSTATION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: OVERALL SITE PLAN &amp; LANDSCAPE ELEVATIONS X &amp; Y</text>
    <text x="15" y="60" font-size="8" fill="#777770">LOCATION: CAULDON LOWE TO WATERHOUSES, STAFFORDSHIRE</text>
    <text x="15" y="76" font-size="8" fill="#777770">TYPOLOGY: RURAL ELECTRICITY DISTRIBUTION FACILITY</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">PLANNING &amp; ENVIRONMENTALLY SENSITIVE DESIGN</text>
  </g>

  <!-- Highway Direction Arrows -->
  <g transform="translate(80, 80)">
    <line x1="100" y1="50" x2="900" y2="50" stroke="#111111" stroke-width="2"/>
    <polygon points="90,50 115,42 115,58" fill="#111111"/>
    <polygon points="910,50 885,42 885,58" fill="#111111"/>
    <text x="130" y="40" font-size="10" font-weight="bold" fill="#111111">&lt;-- TO CAULDON LOWE</text>
    <text x="730" y="40" font-size="10" font-weight="bold" fill="#111111">TO WATERHOUSES --&gt;</text>

    <!-- Substation Compound Outline -->
    <rect x="240" y="90" width="600" height="340" fill="#FFFFFF" stroke="#111111" stroke-width="2"/>
    <text x="260" y="120" font-size="10" font-weight="bold" fill="#111111">33kV SUBSTATION COMPOUND EXTENSION</text>

    <!-- Proposed 33kV Switchroom (Tiled Pitched Roof) -->
    <g transform="translate(300, 150)">
      <rect x="0" y="0" width="180" height="90" fill="#E8E8E2" stroke="#C51B18" stroke-width="2"/>
      <text x="12" y="30" font-size="9" font-weight="bold" fill="#C51B18">PROPOSED 33kV SWITCHROOM</text>
      <text x="12" y="46" font-size="8" fill="#111111">(TILED PITCHED ROOF CONSTRUCTION)</text>
      <text x="12" y="62" font-size="7.5" fill="#555550">Contextual Brick Outer Skin</text>
      <text x="12" y="76" font-size="7.5" fill="#555550">Ridge Height: 4720mm</text>
    </g>

    <!-- Existing 11kV Building & Telecommunications Radio Mast -->
    <g transform="translate(560, 150)">
      <rect x="0" y="0" width="140" height="80" fill="#F4F4F0" stroke="#111111" stroke-width="1.2"/>
      <text x="15" y="30" font-size="8.5" font-weight="bold" fill="#111111">EXISTING 11kV</text>
      <text x="15" y="45" font-size="8.5" font-weight="bold" fill="#111111">BUILDING</text>
    </g>
    <g transform="translate(720, 260)">
      <polygon points="20,0 0,40 40,40" fill="none" stroke="#111111" stroke-width="1.5"/>
      <circle cx="20" cy="0" r="4" fill="#C51B18"/>
      <text x="-15" y="55" font-size="7.5" font-weight="bold" fill="#111111">RADIO MAST</text>
    </g>

    <!-- 2400mm Palisade Fencing with Landscaping Hedge -->
    <rect x="230" y="80" width="620" height="360" fill="none" stroke="#1C3B52" stroke-width="1" stroke-dasharray="6,3"/>
    <text x="260" y="420" font-size="8" fill="#1C3B52">2.4m HIGH REMOVABLE SECURITY PALISADE FENCE PANELS</text>
  </g>

  <!-- Proposed Elevations X & Y (Lower Section) -->
  <g transform="translate(80, 560)">
    <!-- Elevation X -->
    <g transform="translate(0, 0)">
      <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROPOSED ELEVATION X: LANDSCAPE ROADSIDE INTEGRATION</text>
      <text x="0" y="16" font-size="8" fill="#777770">SCALE 1:150 | VIEW FROM HIGHWAY</text>

      <!-- Rural stone wall & hedgerow buffer -->
      <line x1="0" y1="120" x2="680" y2="120" stroke="#111111" stroke-width="1.5"/>
      <!-- Stone wall representation -->
      <rect x="0" y="90" width="680" height="30" fill="#D6D6CE" stroke="#111111" stroke-width="1"/>
      <text x="15" y="110" font-size="8" fill="#555550">TRADITIONAL STAFFORDSHIRE DRYSTONE BOUNDARY WALL</text>

      <!-- Hedgerow trees -->
      <circle cx="120" cy="70" r="35" fill="#4B6F44" opacity="0.3"/>
      <circle cx="180" cy="65" r="40" fill="#4B6F44" opacity="0.3"/>
      <circle cx="540" cy="60" r="45" fill="#4B6F44" opacity="0.3"/>

      <!-- Switchroom pitched roof peaking over hedge -->
      <polygon points="260,90 260,40 330,10 400,40 400,90" fill="#C5A059" stroke="#111111" stroke-width="1.5"/>
      <text x="275" y="45" font-size="8" font-weight="bold" fill="#111111">TILED PITCHED ROOF</text>
      <text x="280" y="60" font-size="7.5" fill="#555550">(CLAY PANTILE EFFECT)</text>
    </g>

    <!-- Elevation Y -->
    <g transform="translate(740, 0)">
      <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROPOSED ELEVATION Y: COMPOUND ENCLOSURE ELEVATION</text>
      <text x="0" y="16" font-size="8" fill="#777770">SCALE 1:150</text>

      <line x1="0" y1="120" x2="680" y2="120" stroke="#111111" stroke-width="1.5"/>
      <polygon points="140,120 140,50 240,20 340,50 340,120" fill="#F4F4F0" stroke="#111111" stroke-width="1.5"/>
      <rect x="220" y="70" width="40" height="50" fill="#244C66"/>
      <text x="160" y="60" font-size="8" font-weight="bold" fill="#111111">33kV SWITCHROOM</text>
      <text x="150" y="75" font-size="7.5" fill="#555550">45mm Zinc-Coated Steel Doors</text>
      <line x1="0" y1="65" x2="680" y2="65" stroke="#1C3B52" stroke-width="0.8" stroke-dasharray="4,2"/>
      <text x="360" y="60" font-size="7.5" fill="#1C3B52">2.4m Palisade Fencing Screen</text>
    </g>
  </g>
</svg>`;

// 6. Cauldon Lowe Switchroom Building Drawings & Location Plan
const cauldonLoweSwitchroom = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: CAULDON LOWE 33kV SWITCHROOM</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: FLOOR PLAN, ELEVATIONS A–D &amp; LOCATION PLAN</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: DWG-01 | SCALE 1:100 &amp; 1:1250 @ A1</text>
    <text x="15" y="76" font-size="8" fill="#777770">STAFFORDSHIRE MOORLANDS DISTRICT COUNCIL</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">PLANNING &amp; STATUTORY APPROVAL PACKAGE</text>
  </g>

  <!-- Location Plan 1:1250 (Upper Left) -->
  <g transform="translate(80, 80)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">LOCATION PLAN (SCALE 1:1250)</text>
    <rect x="0" y="20" width="360" height="300" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <!-- Ordnance Survey roads and field boundaries -->
    <path d="M 20,280 C 80,240 180,180 340,60" fill="none" stroke="#111111" stroke-width="2"/>
    <path d="M 40,300 C 100,260 200,200 360,80" fill="none" stroke="#111111" stroke-width="1.5"/>
    <!-- Red line site boundary -->
    <polygon points="140,160 220,110 240,140 160,190" fill="#FFEEEE" stroke="#C51B18" stroke-width="2"/>
    <text x="150" y="150" font-size="8" font-weight="bold" fill="#C51B18">SITE AREA</text>
    <text x="10" y="310" font-size="8" fill="#777770">ORDNANCE SURVEY CROWN COPYRIGHT RESERVED</text>
  </g>

  <!-- Technical Notes 1–11 (Upper Middle) -->
  <g transform="translate(480, 80)">
    <rect x="0" y="0" width="640" height="320" fill="#FBFBF9" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="10" font-weight="bold" fill="#111111" letter-spacing="1">TECHNICAL NOTES &amp; MATERIAL SPECIFICATIONS</text>
    <g transform="translate(15, 45)" font-size="8" fill="#333330">
      <text x="0" y="0">1. ALL DIMENSIONS IN MILLIMETRES UNLESS OTHERWISE STATED.</text>
      <text x="0" y="18">2. OVERALL WALL THICKNESS TO BE 350mm WITH 100mm CLEAR CAVITY.</text>
      <text x="0" y="36">3. EXTERNAL WALLS: FACING BRICK TO MATCH EXISTING SITE BUILDINGS.</text>
      <text x="0" y="54">4. CAVITY WALL INNER SKIN: LIGHT COLOUR, FAIR FACE CONCRETE BLOCKS.</text>
      <text x="0" y="72">5. DPC: APPROVED TWO PLY HESSIAN BASED BITUMEN DPC TO BS 6398.</text>
      <text x="0" y="90">6. DOORS: HEAVY DUTY 45mm DOUBLE SKIN ZINC-COATED SHEET STEEL.</text>
      <text x="0" y="108">7. DOOR FINISH: FACTORY POLYESTER POWDER COATED (COLOUR DARK GREY).</text>
      <text x="0" y="126">8. SLAB: REINFORCED CONCRETE FLOAT FINISH TO EQUIPMENT LOADINGS.</text>
      <text x="0" y="144">9. LINTELS: PRESTRESSED CONCRETE COMPOSITE LINTELS WITH MIN 150mm END BEARING.</text>
      <text x="0" y="162" font-weight="bold" fill="#1C3B52">10. ROOF: TRADITIONAL TILED PITCHED ROOF ON TIMBER TRUSSES.</text>
      <text x="0" y="180">11. RAINWATER GOODS: 110mm HALF ROUND GUTTERS WITH 68mm DOWNPIPES.</text>
    </g>
  </g>

  <!-- Elevations A, B, C, D (Lower Half) -->
  <g transform="translate(80, 440)">
    <!-- Elevation A (Front) -->
    <g transform="translate(0, 0)">
      <text x="0" y="0" font-size="10" font-weight="bold" fill="#111111">ELEVATION A (FRONT ELEVATION) @ 1:100</text>
      <line x1="0" y1="140" x2="320" y2="140" stroke="#111111" stroke-width="1.5"/>
      <!-- Pitch roof -->
      <polygon points="40,90 160,20 280,90" fill="#D6804A" stroke="#111111" stroke-width="1.5"/>
      <rect x="40" y="90" width="240" height="50" fill="#C59B6A" stroke="#111111" stroke-width="1.5"/>
      <rect x="140" y="90" width="40" height="50" fill="#244C66"/>
      <text x="90" y="115" font-size="7.5" fill="#111111">FACING BRICKWORK</text>
    </g>

    <!-- Elevation B (Rear) -->
    <g transform="translate(360, 0)">
      <text x="0" y="0" font-size="10" font-weight="bold" fill="#111111">ELEVATION B (REAR ELEVATION) @ 1:100</text>
      <line x1="0" y1="140" x2="320" y2="140" stroke="#111111" stroke-width="1.5"/>
      <polygon points="40,90 160,20 280,90" fill="#D6804A" stroke="#111111" stroke-width="1.5"/>
      <rect x="40" y="90" width="240" height="50" fill="#C59B6A" stroke="#111111" stroke-width="1.5"/>
      <!-- Louvred vents -->
      <rect x="70" y="100" width="30" height="20" fill="#555550"/>
      <rect x="220" y="100" width="30" height="20" fill="#555550"/>
      <text x="110" y="115" font-size="7.5" fill="#111111">AIR VENTS</text>
    </g>

    <!-- Elevation C (Side) -->
    <g transform="translate(720, 0)">
      <text x="0" y="0" font-size="10" font-weight="bold" fill="#111111">ELEVATION C (SIDE ELEVATION)</text>
      <line x1="0" y1="140" x2="260" y2="140" stroke="#111111" stroke-width="1.5"/>
      <polygon points="30,90 130,20 230,90" fill="#D6804A" stroke="#111111" stroke-width="1.5"/>
      <rect x="30" y="90" width="200" height="50" fill="#C59B6A" stroke="#111111" stroke-width="1.5"/>
      <text x="80" y="70" font-size="8" fill="#111111">GABLE END</text>
    </g>

    <!-- Elevation D (Side) -->
    <g transform="translate(1040, 0)">
      <text x="0" y="0" font-size="10" font-weight="bold" fill="#111111">ELEVATION D (SIDE ELEVATION)</text>
      <line x1="0" y1="140" x2="260" y2="140" stroke="#111111" stroke-width="1.5"/>
      <polygon points="30,90 130,20 230,90" fill="#D6804A" stroke="#111111" stroke-width="1.5"/>
      <rect x="30" y="90" width="200" height="50" fill="#C59B6A" stroke="#111111" stroke-width="1.5"/>
      <text x="80" y="70" font-size="8" fill="#111111">GABLE END</text>
    </g>
  </g>
</svg>`;

// 7. Residential Loft Extension & Dormer Technical Package
const residentialLoftDormer = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="100%" height="100%" style="background:#FCFCF9; font-family:'Courier New', monospace, sans-serif;">
  <rect x="30" y="30" width="1540" height="1040" fill="none" stroke="#111111" stroke-width="1.5"/>
  <rect x="36" y="36" width="1528" height="1028" fill="none" stroke="#111111" stroke-width="0.5"/>

  <!-- Title Block -->
  <g transform="translate(1160, 48)">
    <rect x="0" y="0" width="390" height="120" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
    <text x="15" y="24" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROJECT: CONTEMPORARY LOFT CONVERSION</text>
    <text x="15" y="44" font-size="9" fill="#555550">DRAWING: REAR/SIDE ELEVATIONS &amp; 1:10 VERGE DETAIL</text>
    <text x="15" y="60" font-size="8" fill="#777770">DRAWING REF: LOFT-01 / REV A | SCALE 1:100 &amp; 1:10 @ A1</text>
    <text x="15" y="76" font-size="8" fill="#777770">UK BUILDING REGULATIONS COMPLIANCE (PARTS B, E, F, K, P)</text>
    <line x1="0" y1="88" x2="390" y2="88" stroke="#111111" stroke-width="0.5"/>
    <text x="15" y="106" font-size="9" font-weight="bold" fill="#1C3B52">FULL PLANS BUILDING CONTROL APPROVAL</text>
  </g>

  <!-- Proposed Rear Elevation (Upper Left) -->
  <g transform="translate(80, 80)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROPOSED REAR ELEVATION (SCALE 1:100)</text>
    <!-- Pitched roof envelope -->
    <polygon points="40,240 240,40 440,240" fill="#EAEAE5" stroke="#111111" stroke-width="1.5"/>
    <!-- Large contemporary flat-roof dormer -->
    <rect x="80" y="70" width="320" height="150" fill="#3B4652" stroke="#111111" stroke-width="2"/>
    <text x="90" y="60" font-size="8.5" font-weight="bold" fill="#111111">ANTHRACITE ZINC / WEATHERBOARD CLADDING</text>
    
    <!-- Dormer Windows -->
    <!-- Bedroom casements -->
    <rect x="110" y="100" width="160" height="90" fill="#E8F1F5" stroke="#111111" stroke-width="1.5"/>
    <line x1="190" y1="100" x2="190" y2="190" stroke="#111111" stroke-width="1"/>
    <!-- Obscure glazed ensuite window -->
    <rect x="300" y="100" width="70" height="90" fill="#D2E2EA" stroke="#111111" stroke-width="1.5"/>
    <text x="290" y="90" font-size="7.5" fill="#C51B18">OBSCURE GLASS (ENSUITE)</text>
    <text x="120" y="210" font-size="8" fill="#FFFFFF">30m² USABLE LOFT LIVING AREA</text>
  </g>

  <!-- Proposed Side Elevation (Upper Middle) -->
  <g transform="translate(560, 80)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">PROPOSED SIDE ELEVATION (SCALE 1:100)</text>
    <!-- Gable profile -->
    <polygon points="40,260 160,40 280,260" fill="#F4F4F0" stroke="#111111" stroke-width="1.5"/>
    <!-- Dormer cheek projection -->
    <polygon points="160,60 270,60 270,200 230,200" fill="#3B4652" stroke="#111111" stroke-width="1.5"/>
    <text x="180" y="50" font-size="8" font-weight="bold" fill="#111111">FLAT ROOF DORMER</text>
  </g>

  <!-- Verge Detail 1:10 (Lower Left) -->
  <g transform="translate(80, 420)">
    <text x="0" y="0" font-size="11" font-weight="bold" fill="#111111" letter-spacing="1">FLAT ROOF VERGE DETAIL (SCALE 1:10)</text>
    <rect x="0" y="30" width="460" height="340" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>

    <!-- Architectural timber, felt & fascia assembly -->
    <g transform="translate(40, 70)">
      <!-- Decking: 18mm Plywood -->
      <rect x="60" y="60" width="300" height="18" fill="#E6C280" stroke="#111111" stroke-width="1"/>
      <text x="180" y="50" font-size="8" fill="#111111">18mm WBP Exterior Plywood Decking</text>

      <!-- 125mm Tilting Fillet -->
      <polygon points="60,60 120,60 60,10" fill="#C59B6A" stroke="#111111" stroke-width="1"/>
      <text x="70" y="20" font-size="7.5" fill="#111111">125mm Tilting Fillet</text>

      <!-- 3-Layer High Performance Torch-On Felt -->
      <path d="M 60,0 L 50,78 L 380,78" fill="none" stroke="#222222" stroke-width="3"/>
      <text x="120" y="100" font-size="8" font-weight="bold" fill="#1C3B52">3-Layer High Performance Mineral Felt Dressing</text>

      <!-- UPVC Fascia & Ventilated Soffit -->
      <rect x="25" y="60" width="15" height="120" fill="#EEEEEE" stroke="#111111"/>
      <rect x="40" y="170" width="80" height="10" fill="#CCCCCC" stroke="#111111"/>
      <text x="45" y="195" font-size="7.5" fill="#555550">Ventilated Soffit (Continuous 25mm air gap)</text>
    </g>
  </g>

  <!-- Statutory Building Regulations Compliance Schedule (Right Half) -->
  <g transform="translate(600, 420)">
    <rect x="0" y="0" width="940" height="580" fill="#F8F8F5" stroke="#111111" stroke-width="1.5"/>
    <text x="25" y="30" font-size="12" font-weight="bold" fill="#111111" letter-spacing="1">UK BUILDING REGULATIONS COMPLIANCE SCHEDULE</text>

    <!-- Part B: Fire Safety Box -->
    <g transform="translate(25, 55)">
      <rect x="0" y="0" width="430" height="150" fill="#FFF5F5" stroke="#C51B18" stroke-width="1.2"/>
      <text x="15" y="22" font-size="9" font-weight="bold" fill="#C51B18">APPROVED DOCUMENT B : FIRE INTEGRITY &amp; ESCAPE</text>
      <g transform="translate(15, 42)" font-size="8" fill="#333330">
        <text x="0" y="0">• FD30S FIRE DOORS: Fitted to all habitable rooms opening</text>
        <text x="0" y="16">  onto protected stairway (BS 476 Part 22:1987 / BS 5588 Part 3).</text>
        <text x="0" y="34">• ROCKWOOL FIRE BARRIERS: Continuous wire-reinforced mineral</text>
        <text x="0" y="50">  wool fire stops fitted to cavity openings and within 300mm of corners.</text>
        <text x="0" y="68">• SMOKE DETECTION: Mains wired optical detectors with battery backup</text>
        <text x="0" y="84">  interlinked to BS 5839 Part 6 Grade D1 on each landing datum.</text>
      </g>
    </g>

    <!-- Part E: Sound Acoustic Box -->
    <g transform="translate(475, 55)">
      <rect x="0" y="0" width="440" height="150" fill="#F0F4F8" stroke="#1C3B52" stroke-width="1.2"/>
      <text x="15" y="22" font-size="9" font-weight="bold" fill="#1C3B52">APPROVED DOCUMENT E : INTERNAL ACOUSTIC STUDWORK</text>
      <g transform="translate(15, 42)" font-size="8" fill="#333330">
        <text x="0" y="0">• GYPROC 70mm metal stud partitions at 400mm centers.</text>
        <text x="0" y="16">• 25mm ISOVER mineral wool acoustic quilt (density min 10kg/m³).</text>
        <text x="0" y="34">• 2 layers of 12.5mm GYPROC SoundBloc plasterboard each side</text>
        <text x="0" y="50">  with staggered joints and perimeter acoustic sealant bead.</text>
        <text x="0" y="68">• Airborne sound insulation performance meets &amp; exceeds Rw 45dB</text>
        <text x="0" y="84">  criteria for bathroom-to-bedroom partition walls.</text>
      </g>
    </g>

    <!-- Part F & Part K -->
    <g transform="translate(25, 225)">
      <rect x="0" y="0" width="430" height="150" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="15" y="22" font-size="9" font-weight="bold" fill="#111111">PART F (VENTILATION) &amp; PART K (SAFETY GLAZING)</text>
      <g transform="translate(15, 42)" font-size="8" fill="#333330">
        <text x="0" y="0">• Trickle ventilators: min 8,000mm² free area to habitable rooms.</text>
        <text x="0" y="16">• Mechanical extract: Ensuite shower 15 l/s with 15-min overrun timer.</text>
        <text x="0" y="34">• SAFETY GLAZING: All glazing below 800mm finished floor level</text>
        <text x="0" y="50">  must be Toughened Safety Glass (BS EN 12600 Class 1).</text>
        <text x="0" y="68">• Guarding / Balustrade: 1100mm min height, max 100mm sphere gap.</text>
      </g>
    </g>

    <!-- Part P & Part L -->
    <g transform="translate(475, 225)">
      <rect x="0" y="0" width="440" height="150" fill="#FFFFFF" stroke="#111111" stroke-width="1"/>
      <text x="15" y="22" font-size="9" font-weight="bold" fill="#111111">PART P (ELECTRICS) &amp; PART L (ENERGY EFFICIENCY)</text>
      <g transform="translate(15, 42)" font-size="8" fill="#333330">
        <text x="0" y="0">• NICEIC / ELECSA certified electrician installation under BS 7671.</text>
        <text x="0" y="16">• 100% low-energy LED lighting with min 75 lm/W efficacy.</text>
        <text x="0" y="34">• Flat roof U-value target: 0.15 W/m²K via 120mm PIR warm-roof board</text>
        <text x="0" y="50">  over timber joists, with continuous vapour control layer (VCL).</text>
        <text x="0" y="68">• Dormer cheeks: 100mm PIR insulation achieving U-value 0.18 W/m²K.</text>
      </g>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, 'coombe-fields-substation-site-plan.svg'), coombeFieldsSitePlan);
fs.writeFileSync(path.join(outDir, 'coombe-fields-bellmouth-civil-dwg.svg'), coombeFieldsBellmouth);
fs.writeFileSync(path.join(outDir, 'coombe-fields-switch-house-elevations.svg'), coombeFieldsSwitchHouse);
fs.writeFileSync(path.join(outDir, 'coombe-fields-subfloor-duct-details.svg'), coombeFieldsDuctDetails);
fs.writeFileSync(path.join(outDir, 'cauldon-lowe-substation-compound-plan.svg'), cauldonLoweCompound);
fs.writeFileSync(path.join(outDir, 'cauldon-lowe-switchroom-building-drawings.svg'), cauldonLoweSwitchroom);
fs.writeFileSync(path.join(outDir, 'residential-loft-dormer-technical-elevations.svg'), residentialLoftDormer);

console.log('Successfully generated 7 architectural SVG drawings in public/drawings/');
