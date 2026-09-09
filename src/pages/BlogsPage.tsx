import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { Link } from '../context/NavigationContext';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  Share2,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  category: 'Materiality' | 'Heritage' | 'Architecture' | 'Process' | 'Interiors';
  title: string;
  subtitle: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'shou-sugi-ban-charred-timber-architecture',
    slug: 'shou-sugi-ban-charred-timber-architecture',
    category: 'Materiality',
    title: 'Shou Sugi Ban: Charred Timber Aesthetics & Fire Performance in UK Climates',
    subtitle: 'Why ancient Japanese charring techniques are defining modern residential extensions and garden pavilions',
    author: 'Alexander Wright',
    role: 'Partner & Principal Architect',
    date: 'February 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'The deep, tactile charcoal patina of Yakisugi (Shou Sugi Ban) timber offers superior rot resistance, UV stability, and natural fire-retardant properties, making it an extraordinary external rainscreen for British weather.',
    content: [
      'Originating in 18th-century Japan, Yakisugi (popularly known in the West as Shou Sugi Ban) is the traditional technique of charring cedar or Accoya timber to preserve and protect it against moisture, insects, and decay.',
      'During the controlled combustion process, the soft cellular exterior of the timber is converted into carbon. This charcoal layer performs as a natural inert shield: it is impervious to fungal attack, repels subterranean termites, and dramatically decelerates fire ignition compared to untreated softwood.',
      'In our recent Harborne House project, we specified deeply charred Accoya timber with an alligator scale texture. The dark matte surface reflects ambient northern skylight with subtle silver undertones, creating a striking dialog with the restored Edwardian red brickwork.',
      'From a maintenance perspective, high-grade charred Accoya carries a 50-year above-ground durability guarantee without requiring re-staining, oiling, or chemical treatments, representing a truly circular, non-toxic building envelope.'
    ],
    tags: ['Charred Timber', 'Accoya', 'Shou Sugi Ban', 'Sustainable Materials', 'Exterior Cladding']
  },
  {
    id: 'frameless-glass-links-heritage-architecture',
    slug: 'frameless-glass-links-heritage-architecture',
    category: 'Heritage',
    title: 'The Structural Glass Link: Connecting Modern Pavilions to Victorian Brickwork',
    subtitle: 'How architectural transparency satisfies conservation officers while preserving historic masonry integrity',
    author: 'Elena Rostova',
    role: 'Conservation & Heritage Lead',
    date: 'January 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'One of the greatest challenges in historic residential renovation is expanding living space without confusing historic fabric with new construction. A structural glass link solves this dilemma with sublime elegance.',
    content: [
      'When working within conservation areas such as Edgbaston or Moseley, planning officers adhere to the principle of architectural legibility: new interventions should be distinctly legible from historic fabric rather than mimicking historic ornamentation poorly.',
      'A structural glass corridor serves as a neutral, crystalline threshold. By utilizing low-iron structural glass fins and countersunk stainless steel spider fittings, the extension physically touches the existing masonry through silicone flashing rather than destructive mechanical fixings.',
      'This achieves two critical outcomes: first, it allows the original external brick wall to become an interior architectural feature with historic lime mortar exposed to view; second, the intervention is legally reversible, fulfilling the core tenets of the ICOMOS Burra Charter.',
      'Modern silicone structural glazing also achieves exceptional thermal U-values down to 1.1 W/m²K when specified with warm-edge spacers and soft-coat low-emissivity argon cavities.'
    ],
    tags: ['Conservation Areas', 'Glass Link', 'Heritage Architecture', 'Victorian Renovation', 'Calthorpe Estate']
  },
  {
    id: 'riba-plan-of-work-stages-explained',
    slug: 'riba-plan-of-work-stages-explained',
    category: 'Process',
    title: 'Demystifying RIBA Stages 0 to 7: How the Architect’s Plan Protects Your Budget',
    subtitle: 'Why jumping straight to building without technical drawings causes contractor disputes and budget overruns',
    author: 'Marcus Vance',
    role: 'Technical Director',
    date: 'January 14, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'The Royal Institute of British Architects (RIBA) Plan of Work is the UK construction industry standard framework. Here is how each stage de-risks your capital and ensures flawless build execution.',
    content: [
      'Stage 0 & 1 (Strategic Definition & Preparation): Defining the brief, boundary easements, budget parameters, topographical site surveys, and drainage constraints before drawing a single concept sketch.',
      'Stage 2 (Concept Design): Translating client aspirations into spatial volumes, 3D daylight diagrams, and preliminary planning appraisal.',
      'Stage 3 (Spatial Coordination & Planning Submission): Preparing the detailed planning drawings, heritage statements, design and access statements, and liaising with local council planning case officers.',
      'Stage 4 (Technical Design): This is the most crucial stage for cost control. Complete 1:20 and 1:10 architectural junctions, structural engineering schedules, NBS specifications, and electrical schematics are produced to enable competitive builder tendering.',
      'Stage 5 to 7 (Manufacturing, Handover & In Use): Administering the JCT Building Contract, inspecting works on site, issuing valuation certificates, and ensuring zero contractor deviations from statutory drawings.'
    ],
    tags: ['RIBA Stages', 'Architectural Fees', 'JCT Contracts', 'Technical Detailing', 'Project Management']
  },
  {
    id: 'crittall-steel-vs-anodised-aluminium-glazing',
    slug: 'crittall-steel-vs-anodised-aluminium-glazing',
    category: 'Architecture',
    title: 'Crittall Steel vs Anodised Aluminium: Selecting the Optimal Glazing Profile',
    subtitle: 'Comparing sightlines, thermal breaks, weight, acoustic attenuation, and architectural impact',
    author: 'Alexander Wright',
    role: 'Partner & Principal Architect',
    date: 'December 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Both Crittall steel and ultra-slim aluminium systems offer timeless architectural character, but each excels in different thermal and structural applications.',
    content: [
      'Crittall steel profiles provide the slimmest sightlines available in traditional fenestration. The cold-rolled high-tensile steel delivers unparalleled strength, allowing massive floor-to-ceiling glass screens with narrow 20mm horizontal glazing bars.',
      'However, steel requires thermal barrier polyamides to prevent thermal bridging in external envelopes. For internal acoustic partitions or live-work loft mezzanines—such as our Jewellery Quarter project—Crittall is peerless in its historic industrial elegance.',
      'For expansive external sliding patio systems spanning 8 to 14 metres, thermally-broken architectural aluminium (such as Reynaers or Schuco) is often superior due to lighter structural weight, integrated floor-flush drainage tracks, and superior weather tightness.',
      'We guide clients through the physical sample mock-ups during RIBA Stage 4 to assess tactile feel, finish patinas, and budget suitability.'
    ],
    tags: ['Crittall Windows', 'Aluminium Glazing', 'Sliding Doors', 'Industrial Lofts', 'Fenestration']
  },
  {
    id: 'polished-concrete-thermal-mass-underfloor-heating',
    slug: 'polished-concrete-thermal-mass-underfloor-heating',
    category: 'Interiors',
    title: 'Thermal Mass & Polished Concrete: The Science of Passive Comfort',
    subtitle: 'How exposed structural slabs store solar energy and maintain steady internal temperatures year-round',
    author: 'Marcus Vance',
    role: 'Technical Director',
    date: 'November 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Far from being merely an industrial aesthetic trend, polished concrete acts as a functional thermal battery, dampening diurnal temperature swings and cutting winter heating loads.',
    content: [
      'Thermal mass describes a material’s capacity to absorb, store, and slowly release heat energy. High-density materials like concrete, brick, and stone have high volumetric heat capacity.',
      'When incorporated into a south-facing extension with large glazed apertures, a 100mm polished concrete screed absorbs solar radiation throughout daytime hours, preventing the living space from overheating.',
      'As evening temperatures drop, the stored thermal energy radiates naturally into the living room, significantly reducing the demand on boiler or heat pump systems.',
      'Combined with water-based low-temperature underfloor heating (UFH) driven by an air-source heat pump (ASHP), polished concrete provides uniform radiant warmth without dry convection currents or wall-cluttering radiators.'
    ],
    tags: ['Polished Concrete', 'Thermal Mass', 'Underfloor Heating', 'Passive Solar', 'Heat Pumps']
  },
  {
    id: 'eliminating-dead-corridor-space-floorplans',
    slug: 'eliminating-dead-corridor-space-floorplans',
    category: 'Interiors',
    title: 'The Art of Spatial Flow: Eliminating Dead Corridors in Residential Remodelling',
    subtitle: 'Creating visual axes and dual-aspect living rooms without sacrificing acoustic zoning or storage',
    author: 'Elena Rostova',
    role: 'Conservation & Heritage Lead',
    date: 'October 30, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Traditional British housing often wastes up to 25% of its internal footprint on dark, enclosed hallways. Architectural re-planning unlocks this hidden volume.',
    content: [
      'In Victorian and Edwardian domestic layouts, houses were compartmentalised into strict formal zones: the front parlour, rear dining room, and disconnected scullery linked by long dark corridors.',
      'Our spatial remodelling strategy introduces double pocket doors and concealed ceiling-height sliders. Rather than treating circulation as dead transit corridors, we transform halls into gallery libraries, daylight corridors, and secondary reading nooks.',
      'By aligning doorway thresholds on direct sightlines towards the garden, light penetrates deep into the core of the house, creating an immediate sense of spaciousness from the moment the front door opens.',
      'Acoustic separation is maintained through concealed drop-down acoustic threshold seals (Part E compliant) integrated within bespoke flush doors.'
    ],
    tags: ['Floor Plan Design', 'Spatial Planning', 'Interior Architecture', 'Light Wells', 'Pocket Doors']
  }
];

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const categories = ['All', 'Materiality', 'Heritage', 'Architecture', 'Process', 'Interiors'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#111111]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#E5E5DF] bg-[#F4F4F0] py-12 sm:py-16">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C51B18]" />
              <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#70706B]">
                PRACTICE JOURNAL • ARCHITECTURAL BLOGS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#111111] leading-[1.15]">
              Architectural Blogs & Design Studies
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555550] max-w-3xl font-light leading-relaxed">
              Thought leadership, material investigations, construction case studies, and practical design essays written by the registered architects of Real Life Architecture.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-6 bg-[#FFFFFF] border-b border-[#E5E5DF]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#111111] text-[#FFFFFF] border-[#111111]'
                      : 'bg-[#F9F9F7] text-[#70706B] border-[#E5E5DF] hover:text-[#111111] hover:border-[#CCCCCC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#888880] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, materials, RIBA..."
                className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#F9F9F7] border border-[#E5E5DF] focus:border-[#111111] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#999990]"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          {filteredPosts.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#CCCCCC]">
              <p className="font-mono text-sm text-[#70706B]">No articles found matching your query.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  className="bg-[#FFFFFF] border border-[#E5E5DF] hover:border-[#111111] transition-all flex flex-col justify-between overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    {/* Feature Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE8E3]">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#111111]/85 backdrop-blur-sm text-white text-[10px] font-mono tracking-widest uppercase">
                        {post.category}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] font-mono text-[#888880] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#C51B18] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2 text-xs text-[#70706B] font-sans leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author Tag */}
                      <div className="mt-4 pt-3 border-t border-[#F0EFEB] flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#E5E5DF] flex items-center justify-center text-[10px] font-mono font-bold text-[#555550]">
                          {post.author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-sans font-medium text-[#222220]">{post.author}</span>
                          <span className="text-[9px] font-mono text-[#888880]">{post.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Button */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => setActiveBlog(post)}
                      className="w-full py-2.5 px-4 bg-[#F4F4F0] hover:bg-[#111111] hover:text-white text-[#111111] border border-[#E5E5DF] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Full Article Modal */}
        {activeBlog && (
          <div
            id="blog-modal-backdrop"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#FFFFFF] max-w-3xl w-full border border-[#E5E5DF] shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
              {/* Modal Top */}
              <div className="flex items-center justify-between border-b border-[#E5E5DF] pb-4 mb-6">
                <span className="px-2.5 py-1 bg-[#F4F4F0] border border-[#E5E5DF] text-[10px] font-mono uppercase tracking-widest text-[#555550]">
                  {activeBlog.category}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveBlog(null)}
                  className="px-3 py-1 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#333333] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] leading-tight">
                {activeBlog.title}
              </h2>
              <p className="mt-3 text-sm text-[#70706B] font-sans leading-relaxed">
                {activeBlog.subtitle}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between flex-wrap gap-4 py-4 my-4 border-y border-[#E5E5DF] text-xs font-mono text-[#70706B]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs font-bold font-mono">
                    {activeBlog.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111] block">{activeBlog.author}</span>
                    <span className="text-[10px] text-[#888880]">{activeBlog.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span>{activeBlog.date}</span>
                  <span>•</span>
                  <span>{activeBlog.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE8E3] mb-6">
                <img
                  src={activeBlog.image}
                  alt={activeBlog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base font-sans text-[#2B2B28] leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed border-l-2 border-[#C51B18] pl-4 italic">
                  {activeBlog.excerpt}
                </p>

                {activeBlog.content.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-[#E5E5DF]">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#70706B] block mb-2">
                  ARTICLE KEYWORDS & TOPICS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeBlog.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono bg-[#F4F4F0] px-2.5 py-1 border border-[#E5E5DF] text-[#444440]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire CTA */}
              <div className="mt-8 p-6 bg-[#F4F4F0] border border-[#E5E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-base font-bold text-[#111111] block">Discuss this topic with our design team</span>
                  <span className="text-xs text-[#70706B]">We provide tailored architectural consultancy across Birmingham and the West Midlands.</span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setActiveBlog(null)}
                  className="px-5 py-2.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#C51B18] transition-colors inline-flex items-center gap-2 shrink-0"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <CTASection
          id="blogs-cta"
          title="Looking to realise an ambitious architectural project?"
          subtitle="Explore our portfolio of completed works or get in touch to schedule an initial design consultation."
        />
      </main>

      <Footer />
    </div>
  );
}
