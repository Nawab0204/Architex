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
  CheckCircle2,
  FileCheck2,
  Building2,
  Scale,
  Compass,
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface InsightArticle {
  id: string;
  slug: string;
  category: 'Planning & Legal' | 'Technical & Regs' | 'Conservation & Heritage' | 'Cost & Budget' | 'Sustainability';
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  summary: string;
  highlights: string[];
  keyTakeaways: string[];
  seoKeywords: string[];
}

const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'birmingham-planning-permission-guide',
    slug: 'birmingham-planning-permission-guide',
    category: 'Planning & Legal',
    title: 'Birmingham Planning Permission & Permitted Development Guide (2025/2026)',
    subtitle: 'Everything homeowners need to know about Class A extensions, prior approvals, and council validation',
    readTime: '8 min read',
    date: 'February 2025',
    summary: 'Navigating Birmingham City Council planning policy requires understanding the boundary between Permitted Development (PD) rights and full planning permission. Learn the critical thresholds for single-storey rear extensions, two-storey additions, and loft conversions.',
    highlights: [
      'Single-storey rear extensions up to 8m for detached houses (under the Larger Home Extension Prior Approval scheme) and 6m for semi-detached/terraced homes.',
      'Maximum 4m height for single-storey rear extensions under Permitted Development; 3m eaves height if within 2m of any boundary.',
      'Crucial differences between Birmingham City Council local planning guidelines and national GPDO (General Permitted Development Order) legislation.',
      'Why obtaining a Lawful Development Certificate (LDC) is essential before commencing any PD build project.'
    ],
    keyTakeaways: [
      'Always commission a measured building survey before submitting drawings to avoid validation delays.',
      'Check if your property has had Permitted Development rights removed by an Article 4 Direction or historic planning condition.',
      'Expect standard householder planning applications to take between 8 to 12 weeks from validation to determination.'
    ],
    seoKeywords: [
      'Birmingham planning permission',
      'permitted development Birmingham',
      'house extension planning rules UK',
      'Birmingham City Council planning portal',
      'Lawful Development Certificate West Midlands'
    ]
  },
  {
    id: 'building-regulations-compliance-guide',
    slug: 'building-regulations-compliance-guide',
    category: 'Technical & Regs',
    title: 'Building Regulations Compliance: Parts B, E, F, L & P Explained',
    subtitle: 'How architectural technical detailing guarantees statutory approval and structural performance',
    readTime: '10 min read',
    date: 'January 2025',
    summary: 'While planning permission covers how a building looks and impacts its neighbours, Building Regulations govern health, safety, thermal efficiency, and accessibility. Here is how our technical drawing packages secure unconditional approval from local authority and approved inspectors.',
    highlights: [
      'Part L (Conservation of fuel and power): Stringent U-values required for new walls (0.18 W/m²K or better), roofs (0.15 W/m²K), and high-performance glazing.',
      'Part B (Fire safety): Means of escape, 30-minute fire-resistant doors (FD30S), cavity barriers, and interlinked smoke detection.',
      'Part E (Resistance to sound): Acoustic insulation in party walls, timber floor build-ups, and resilient bar detailing.',
      'Part F (Ventilation): Mechanical extract ventilation rates, trickle vent sizing, and continuous MVHR heat recovery systems.'
    ],
    keyTakeaways: [
      'Building Regulations approval is mandatory for all structural alterations, load-bearing wall removals, and extensions.',
      'Detailed 1:10 and 1:20 junction drawings eliminate contractor guesswork and avoid costly site rebuilds.',
      'Technical specifications must integrate structural engineer calculations and SAP thermal calculations seamlessly.'
    ],
    seoKeywords: [
      'building regulations approval Birmingham',
      'Part L thermal U-values 2025',
      'architectural construction detailing UK',
      'structural calculations building control',
      'building inspector West Midlands'
    ]
  },
  {
    id: 'edgbaston-conservation-calthorpe-estate-guide',
    slug: 'edgbaston-conservation-calthorpe-estate-guide',
    category: 'Conservation & Heritage',
    title: 'Architectural Design in Birmingham Conservation Areas & Calthorpe Estate',
    subtitle: 'Balancing contemporary architectural interventions with sensitive historic urban fabric',
    readTime: '9 min read',
    date: 'November 2024',
    summary: 'Designing extensions or remodelling properties in Edgbaston, Moseley, Bournville, or the Jewellery Quarter requires an informed heritage strategy. Learn how to secure both Birmingham City Council conservation consent and Calthorpe Estate Scheme of Management approvals.',
    highlights: [
      'Understanding Article 4 Directions that remove standard Permitted Development rights for porches, replacement windows, and boundary walls.',
      'How frameless structural glass links create an honest, reversible separation between historic Victorian brick and contemporary garden pavilions.',
      'Material palettes favoured by conservation officers: Petersen Kolumba bricks, zinc standing seam, patinated bronze, and lime mortars.',
      'The two-tier approval procedure: Calthorpe Estate Committee approvals running concurrently with Birmingham City Council planning officers.'
    ],
    keyTakeaways: [
      'Prepare a comprehensive Heritage Statement assessing the significance of existing historic fabric before submitting plans.',
      'Avoid faux-period pastiche; conservation officers frequently support high-quality contemporary contrast over poor replication.',
      'Allow an additional 4 to 6 weeks for estate stewardship consultations.'
    ],
    seoKeywords: [
      'Edgbaston conservation architect',
      'Calthorpe Estate planning approval',
      'Moseley conservation area guidelines',
      'heritage architect Birmingham',
      'listed building consent West Midlands'
    ]
  },
  {
    id: 'passivhaus-low-carbon-retrofit-principles',
    slug: 'passivhaus-low-carbon-retrofit-principles',
    category: 'Sustainability',
    title: 'Passivhaus Principles & EnerPHit Retrofitting for West Midlands Homes',
    subtitle: 'Slashing space heating demand by up to 90% through thermal bridging elimination and airtightness',
    readTime: '7 min read',
    date: 'October 2024',
    summary: 'True sustainable architecture is not about bolting on solar panels as an afterthought; it is about rigorous fabric-first design. We unpack the five foundational pillars of Passivhaus and EnerPHit retrofitting for residential properties across Birmingham and Worcestershire.',
    highlights: [
      'Continuous thermal insulation wrapping without cold bridges (thermal breaks at foundation perimeters and parapets).',
      'Airtight building envelopes achieving under 0.6 air changes per hour (ACH @ 50Pa) verified by blower-door pressure testing.',
      'Triple-glazed low-emissivity argon-filled windows with insulated frames oriented to optimize seasonal solar gain.',
      'Mechanical Ventilation with Heat Recovery (MVHR) supplying fresh filtered air while recovering over 85% of internal thermal energy.'
    ],
    keyTakeaways: [
      'Fabric-first retrofits future-proof homes against rising energy costs and impending UK decarbonisation legislation.',
      'Super-insulation must always be paired with intelligent vapour-permeable membranes to prevent interstitial condensation.',
      'Passive solar shading (brise-soleil and cantilevered soffits) prevents summer overheating while embracing winter warmth.'
    ],
    seoKeywords: [
      'Passivhaus architect Birmingham',
      'EnerPHit retrofit West Midlands',
      'low energy house design UK',
      'airtightness detailing architecture',
      'sustainable residential architect'
    ]
  },
  {
    id: 'architectural-costs-budgeting-2025',
    slug: 'architectural-costs-budgeting-2025',
    category: 'Cost & Budget',
    title: 'Architectural Construction Costs & Budgeting in Birmingham (2025 Benchmark)',
    subtitle: 'Realistic square-metre pricing, statutory fees, professional disbursements, and contingency buffers',
    readTime: '11 min read',
    date: 'December 2024',
    summary: 'A transparent, realistic guide to budgeting for residential extensions, bespoke remodels, and one-off new builds in the West Midlands. We break down the exact cost breakdown from preliminary site surveys to final handover.',
    highlights: [
      'Current construction cost metrics: Standard extension (£2,000–£2,500/m²), High-specification architect-led build (£2,800–£3,600/m²), Bespoke new build (£3,000–£4,200/m²).',
      'Professional fee breakdowns: Architectural design (RIBA 1-4), Structural engineering calculations, Party wall surveyor awards, Building control inspection fees.',
      'The VAT dilemma: Why new builds enjoy 0% VAT on construction labour and materials, while domestic extensions attract standard 20% VAT.',
      'Managing cost volatility through competitive tendering with a rigorous National Building Specification (NBS) and Schedule of Works.'
    ],
    keyTakeaways: [
      'Never embark on site works with less than a 10% to 15% contingency reserve for unforeseen ground conditions and existing fabric defects.',
      'Detailed technical drawings before tendering produce fixed-price builder quotes, preventing costly mid-project price spikes.',
      'A phased procurement strategy protects client capital throughout every construction milestone.'
    ],
    seoKeywords: [
      'extension cost per m2 Birmingham 2025',
      'architect fees Birmingham',
      'house extension budget calculator UK',
      'cost of building bespoke house West Midlands',
      'RIBA architect pricing guide'
    ]
  }
];

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Planning & Legal', 'Technical & Regs', 'Conservation & Heritage', 'Cost & Budget', 'Sustainability'];

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.highlights.some((h) => h.toLowerCase().includes(q)) ||
        article.seoKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#111111]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Hero Header */}
        <section className="border-b border-[#E5E5DF] bg-[#F4F4F0] py-12 sm:py-16">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C51B18]" />
              <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#70706B]">
                PRACTICE INSIGHTS • ARCHITECTURAL GUIDANCE
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#111111] leading-[1.15]">
              Insights & Planning Guides
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555550] max-w-3xl font-light leading-relaxed">
              Authoritative, SEO-optimised technical intelligence on planning permission, building regulations compliance, conservation area guidelines, and architectural budgeting across Birmingham and the West Midlands.
            </p>

            {/* Quick Stat Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5DF]">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#111111]">100%</span>
                <span className="text-[11px] font-mono text-[#70706B] uppercase tracking-wider">Planning Feasibility Focus</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#111111]">RIBA 0–7</span>
                <span className="text-[11px] font-mono text-[#70706B] uppercase tracking-wider">Full Stages Guidance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#111111]">Parts B–P</span>
                <span className="text-[11px] font-mono text-[#70706B] uppercase tracking-wider">Building Regs Compliance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#111111]">BCC & Calthorpe</span>
                <span className="text-[11px] font-mono text-[#70706B] uppercase tracking-wider">Local Heritage Expertise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-8 bg-[#FFFFFF] border-b border-[#E5E5DF]">
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
                placeholder="Search regulations, planning, costs..."
                className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#F9F9F7] border border-[#E5E5DF] focus:border-[#111111] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#999990]"
              />
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-12 sm:py-16 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#CCCCCC]">
              <p className="font-mono text-sm text-[#70706B]">No insights found matching your search criteria.</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  id={`insight-card-${article.id}`}
                  className="bg-[#FFFFFF] border border-[#E5E5DF] hover:border-[#111111] transition-all flex flex-col justify-between p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    {/* Meta Top */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-block px-2.5 py-1 bg-[#F4F4F0] border border-[#E5E5DF] text-[10px] font-mono tracking-widest uppercase text-[#555550]">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-[11px] font-mono text-[#888880]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] group-hover:text-[#C51B18] transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm font-sans text-[#70706B] leading-relaxed">
                      {article.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-sm font-sans text-[#333330] leading-relaxed">
                      {article.summary}
                    </p>

                    {/* Highlights Box */}
                    <div className="mt-5 p-4 bg-[#FAF9F5] border-l-2 border-[#C51B18] space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#555550] block">
                        KEY REGULATORY PROVISIONS
                      </span>
                      {article.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#444440] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C51B18] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-5 border-t border-[#F0EFEB] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {article.seoKeywords.slice(0, 2).map((kw, i) => (
                        <span key={i} className="text-[9px] font-mono text-[#888880] bg-[#F4F4F0] px-2 py-0.5">
                          #{kw.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] group-hover:text-[#C51B18] font-bold cursor-pointer"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Article Full Detail Modal */}
        {activeArticle && (
          <div
            id="insight-modal-backdrop"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#FFFFFF] max-w-3xl w-full border border-[#E5E5DF] shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#E5E5DF] pb-4 mb-6">
                <span className="px-2.5 py-1 bg-[#F4F4F0] border border-[#E5E5DF] text-[10px] font-mono uppercase tracking-widest text-[#555550]">
                  {activeArticle.category}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-3 py-1 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#333333] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-[#111111] leading-tight">
                {activeArticle.title}
              </h2>
              <p className="mt-2 text-sm text-[#70706B] font-sans leading-relaxed">
                {activeArticle.subtitle}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-[#888880] my-4 pb-4 border-b border-[#E5E5DF]">
                <span>Date: {activeArticle.date}</span>
                <span>•</span>
                <span>Reading Time: {activeArticle.readTime}</span>
                <span>•</span>
                <span>Real Life Architecture Technical Office</span>
              </div>

              {/* Main Content Body */}
              <div className="space-y-6 text-sm font-sans text-[#222220] leading-relaxed">
                <p className="text-base text-[#111111] font-medium leading-relaxed">
                  {activeArticle.summary}
                </p>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-3">
                    Detailed Statutory & Practical Analysis
                  </h3>
                  <div className="space-y-3">
                    {activeArticle.highlights.map((item, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF9F5] border-l-2 border-[#C51B18] text-xs sm:text-sm text-[#333330]">
                        <span className="font-bold font-mono text-[10px] text-[#C51B18] block mb-1">
                          CLAUSE / ITEM 0{idx + 1}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-3">
                    Practice Key Takeaways & Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {activeArticle.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444440]">
                        <CheckCircle2 className="w-4 h-4 text-[#C51B18] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#F4F4F0] border border-[#E5E5DF]">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#70706B] block mb-2">
                    RELEVANT STATUTORY REFERENCES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.seoKeywords.map((kw, i) => (
                      <span key={i} className="text-xs font-mono bg-white px-2.5 py-1 border border-[#E5E5DF] text-[#444440]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-8 pt-6 border-t border-[#E5E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#111111] block">Need specific advice for your site?</span>
                  <span className="text-[11px] text-[#70706B]">Our registered architects review feasibility, planning policies, and easements.</span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#C51B18] transition-colors inline-flex items-center gap-2 shrink-0"
                >
                  <span>Book Initial Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <CTASection
          id="insights-cta"
          title="Have a site in Birmingham or the West Midlands?"
          subtitle="Speak directly with our architects regarding planning feasibility, conservation consent, or permitted development potential."
        />
      </main>

      <Footer />
    </div>
  );
}
