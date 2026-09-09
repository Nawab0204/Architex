import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { Link } from '../context/NavigationContext';
import {
  Search,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  FileCheck2,
  Building,
  Coins,
  Clock,
  ShieldCheck,
  Hammer,
  ArrowRight
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'Planning & Permissions' | 'Fees & Pricing' | 'Timelines & Process' | 'Building Regulations' | 'Conservation & Heritage' | 'Construction & Builders';
  question: string;
  answer: string;
  keyPoints: string[];
}

const FAQ_DATA: FAQItem[] = [
  // 1. Planning & Permissions
  {
    id: 'faq-planning-need',
    category: 'Planning & Permissions',
    question: 'Do I need planning permission for a residential extension in Birmingham?',
    answer: 'Not necessarily. Many single-storey rear extensions and loft dormers fall under Permitted Development (PD) rights granted by the General Permitted Development Order (GPDO). For detached properties, you can often extend up to 4m under standard PD, or up to 8m under the Larger Home Extension Prior Approval procedure (6m for semi-detached or terraced properties). However, if your property is in a designated Conservation Area (e.g., Edgbaston, Moseley, Jewellery Quarter), is a Listed building, is a flat/maisonette, or has had PD rights removed via an Article 4 direction, full planning permission is legally required.',
    keyPoints: [
      'Single-storey rear extensions up to 8m (detached) or 6m (semi-detached) may qualify under Prior Approval.',
      'Conservation Areas and Listed Buildings require statutory planning permission and listed consent.',
      'Flats and apartments do not possess standard Permitted Development rights.'
    ]
  },
  {
    id: 'faq-lawful-development-cert',
    category: 'Planning & Permissions',
    question: 'What is a Certificate of Lawful Development and why do I need one?',
    answer: 'A Certificate of Lawful Development (also known as a Lawful Development Certificate, or LDC) is an official legal determination issued by Birmingham City Council confirming that your proposed extension or alterations are lawful under Permitted Development rules without needing full planning permission. While not strictly mandatory to begin building, an LDC is essential when selling your property or securing a mortgage, as it provides incontestable legal proof that no planning enforcement action can ever be taken.',
    keyPoints: [
      'Provides official council confirmation that build works are 100% lawful.',
      'Protects property value and eliminates transaction delays during future house sales.',
      'Birmingham City Council typically takes 8 weeks to determine an LDC application.'
    ]
  },
  {
    id: 'faq-planning-timeframe',
    category: 'Planning & Permissions',
    question: 'How long does Birmingham City Council take to grant planning permission?',
    answer: 'Statutory householder planning applications have an official determination period of 8 weeks from the date of validation. Prior Approval applications for larger rear extensions have a statutory 42-day (6-week) neighbour consultation window. Complex schemes involving Listed Buildings, conservation consents, or tree preservation orders (TPOs) typically take 8 to 12 weeks. Our practice actively monitors the planning portal and liaises directly with assigned planning case officers to resolve any queries promptly.',
    keyPoints: [
      'Standard Householder Applications: 8 weeks from validation.',
      'Prior Approval Schemes: 42 calendar days.',
      'Pre-application consultations can be undertaken with council officers for sensitive sites.'
    ]
  },

  // 2. Fees & Pricing
  {
    id: 'faq-architect-fees-structure',
    category: 'Fees & Pricing',
    question: 'How do architects calculate their professional fees?',
    answer: 'At Real Life Architecture, we offer transparent fee proposals tailored to project scope. Fees are generally structured as fixed lump-sum stages tied directly to the RIBA Plan of Work (Concept RIBA 1-2, Planning RIBA 3, Technical Detailing & Building Regulations RIBA 4, and Contract Administration RIBA 5-6). For comprehensive architectural services from sketch to completion, architectural fees for bespoke residential projects typically range between 8% to 14% of the net construction budget, depending on project scale, structural complexity, and heritage status.',
    keyPoints: [
      'Staged fixed lump-sum milestones—you only pay for each completed RIBA stage.',
      'Clear transparent written fee proposals detailing exact deliverables and drawings.',
      'No hidden surprise costs: statutory fees and specialist surveys are clearly itemized in advance.'
    ]
  },
  {
    id: 'faq-construction-costs-m2',
    category: 'Fees & Pricing',
    question: 'What is the realistic construction cost per square metre in Birmingham in 2025?',
    answer: 'As of 2025, residential construction costs across Birmingham and the West Midlands typically sit within the following brackets: Standard quality extension: £2,000 to £2,500 per m²; High-specification architect-led bespoke extension: £2,600 to £3,500 per m²; Bespoke one-off new build homes: £3,000 to £4,200+ per m². Key cost drivers include structural steel spans, high-performance minimal-frame glazing systems, kitchen/bathroom specifications, ground condition remediation, and mechanical heating systems (such as heat pumps and MVHR). All figures exclude VAT (20% on extensions, 0% on qualifying new builds).',
    keyPoints: [
      'High-specification architect additions: £2,600–£3,500/m² excluding VAT and finishes.',
      'New builds qualify for 0% VAT on construction labour and materials.',
      'Always retain a 10% to 15% contingency reserve for unforeseen site discoveries.'
    ]
  },
  {
    id: 'faq-other-consultants',
    category: 'Fees & Pricing',
    question: 'What other specialist consultant fees should I budget for?',
    answer: 'In addition to architectural fees, a typical extension or new build requires several statutory specialist appointments: 1) Structural Engineer (for beam sizing, foundation design, and calculations: £1,200–£3,000); 2) Measured Building & Topographical Land Survey (£600–£1,500); 3) Building Control Inspection Fees (£700–£1,500); 4) Party Wall Surveyor (if excavating within 3m or 6m of a neighbour’s foundation: £800–£2,500); 5) Birmingham City Council statutory application fee (£258 for standard householder planning).',
    keyPoints: [
      'Structural engineering calculations are mandatory for Building Control sign-off.',
      'Party Wall Awards are required if building near adjoining owners under the 1996 Act.',
      'We coordinate all secondary consultants seamlessly on your behalf.'
    ]
  },

  // 3. Timelines & Process
  {
    id: 'faq-project-timeline-total',
    category: 'Timelines & Process',
    question: 'How long does a complete architectural project take from concept to move-in?',
    answer: 'For a bespoke residential extension or whole-house remodel, the typical end-to-end timeline is approximately 9 to 14 months: 1) Briefing, Measured Survey & Concept Design (RIBA 1-2): 4 to 6 weeks; 2) Developed Design & Planning Application (RIBA 3): 4 weeks prep + 8 weeks council determination; 3) Detailed Technical Drawings & Building Regs (RIBA 4): 6 to 8 weeks; 4) Contractor Tendering & Mobilisation: 4 to 6 weeks; 5) On-site Construction (RIBA 5): 4 to 8 months depending on scale.',
    keyPoints: [
      'Design & Approvals Phase (pre-construction): approximately 5 to 7 months.',
      'On-site Construction Phase: approximately 4 to 8 months.',
      'Starting design work early avoids costly rushed planning submissions.'
    ]
  },
  {
    id: 'faq-riba-stages-role',
    category: 'Timelines & Process',
    question: 'Can I hire Real Life Architecture for planning only, or do you manage construction too?',
    answer: 'We offer full flexibility. Many of our clients commission us for Full Architectural Services (RIBA Stages 1 through 6), which includes site inspections, builder vetting, JCT contract administration, and sign-off on builder payment certificates. Alternatively, clients may commission us for Partial Services up to Planning (Stages 1–3) or Technical Building Regulations & Tender Drawings (Stage 4), handing over the vetted package to their chosen contractor.',
    keyPoints: [
      'Full Turnkey Service: Concept, Planning, Detailed Specs, Tendering, and Site Contract Administration.',
      'Pre-Construction Package: Stages 1–4 ready for builder pricing.',
      'Contract Administration prevents overpaying builders for incomplete or defective work.'
    ]
  },

  // 4. Building Regulations
  {
    id: 'faq-building-regs-vs-planning',
    category: 'Building Regulations',
    question: 'Why do I need Building Regulations approval if I already have planning permission?',
    answer: 'Planning permission and Building Regulations serve completely different statutory purposes. Planning Permission concerns how a building looks, its volume, land use, and its visual impact on neighbours and the streetscape. Building Regulations concern structural integrity, fire escape safety (Part B), acoustic performance (Part E), ventilation (Part F), damp-proofing (Part C), accessibility (Part M), and thermal efficiency (Part L). Even if your project does not need planning permission, almost all structural alterations legally require Building Regulations approval.',
    keyPoints: [
      'Planning = Visual aesthetic, height, boundary lines, and conservation rules.',
      'Building Regulations = Structural safety, fire separation, thermal insulation, and drainage.',
      'Failure to obtain a Building Regulations Completion Certificate can invalidate home insurance.'
    ]
  },
  {
    id: 'faq-party-wall-act',
    category: 'Building Regulations',
    question: 'Does the Party Wall etc. Act 1996 apply to my home extension?',
    answer: 'The Party Wall Act applies if you are: 1) Building a new wall on or astride the boundary line; 2) Cutting into or modifying a shared party wall (e.g. inserting structural steel beams into a chimney breast or party spine wall during a loft conversion); or 3) Excavating foundations within 3 metres of an adjoining neighbour’s structure that will go deeper than their foundations (or within 6 metres for deep piled foundations). You must serve statutory Party Wall Notice at least 1 to 2 months before commencing works.',
    keyPoints: [
      'Notice must be served 1-2 months in advance of site excavation.',
      'Neighbours can consent to works or request an agreed impartial Party Wall Surveyor.',
      'A formal Schedule of Condition protects both you and your neighbour against dispute.'
    ]
  },

  // 5. Conservation & Heritage
  {
    id: 'faq-calthorpe-estate-edgbaston',
    category: 'Conservation & Heritage',
    question: 'What is the Calthorpe Estate Scheme of Management in Edgbaston?',
    answer: 'The Calthorpe Estate covers roughly 640 hectares of Edgbaston, Harborne, and neighbouring districts, established in the 18th century. To preserve the unique leafy suburban character of the area, properties under the Calthorpe Estate Scheme of Management require formal Estate approval for external alterations, tree felling, extensions, or new builds, completely independent of Birmingham City Council planning permission. Real Life Architecture has an established track record presenting proposals to the Calthorpe Estate Committee.',
    keyPoints: [
      'Dual-approval requirement: Birmingham City Council + Calthorpe Estate approval.',
      'Strict scrutiny of roofing materials, brick matching, boundary hedges, and glazing profiles.',
      'Estate applications run concurrently with planning to minimise delay.'
    ]
  },
  {
    id: 'faq-modern-materials-conservation',
    category: 'Conservation & Heritage',
    question: 'Can I use contemporary materials like charred timber, bronze, or zinc in a Conservation Area?',
    answer: 'Yes, absolutely. Conservation officers and national historic guidelines (HE/Historic England) encourage honest, high-quality contemporary design over cheap pastiche imitation. If an extension clearly expresses the craftsmanship of its time using noble, durable materials—such as standing seam bronze, patinated zinc, or Shou Sugi Ban charred Accoya—it is frequently supported, provided its massing, scale, and detailing respect the primary heritage building.',
    keyPoints: [
      'High-quality contemporary contrast is welcomed when executed with premium materials.',
      'Structural glass links provide a clear, reversible threshold separating old from new.',
      'A robust Heritage Statement justifying material selection is vital for success.'
    ]
  },

  // 6. Construction & Builders
  {
    id: 'faq-finding-builders-tender',
    category: 'Construction & Builders',
    question: 'How do you help us select and vet a reliable building contractor?',
    answer: 'We operate a formal competitive tender process during RIBA Stage 4. We prepare a detailed Schedule of Works, National Building Specification (NBS), and fully dimensioned 1:20/1:10 construction drawings. We invite 3 to 4 vetted, insured, and reputable main contractors to price the exact same set of documents. This produces transparent, itemised tender returns, eliminating vague builder estimates and allowing true like-for-like cost comparison.',
    keyPoints: [
      'Competitive tendering prevents inflated single-source builder quotes.',
      'Comprehensive technical specifications lock in fixed contractual prices before signing.',
      'We check contractor references, public liability insurance, and financial stability.'
    ]
  },
  {
    id: 'faq-contract-administration-site',
    category: 'Construction & Builders',
    question: 'What is Contract Administration and why is it valuable?',
    answer: 'Under a standard JCT (Joint Contracts Tribunal) Building Contract, your architect acts as the impartial Contract Administrator. In this role, we: 1) Conduct periodic site inspections to verify that works comply with the technical drawings and Building Regulations; 2) Value the builder’s progress every month and issue formal Interim Certificates so you only pay for completed, defect-free work; 3) Retain a 5% retention sum until the builder rectifies all snagging defects; 4) Assess any builder claims for extra time or unforeseen variation costs.',
    keyPoints: [
      'Protects your money: Builders only receive payment for satisfactorily completed works.',
      'Enforces statutory quality and prevents unauthorized corner-cutting on site.',
      'A legal contractual dispute-resolution mechanism between homeowner and builder.'
    ]
  }
];

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'faq-planning-need': true,
    'faq-architect-fees-structure': true
  });

  const categories = [
    'All',
    'Planning & Permissions',
    'Fees & Pricing',
    'Timelines & Process',
    'Building Regulations',
    'Conservation & Heritage',
    'Construction & Builders'
  ];

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.keyPoints.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    FAQ_DATA.forEach((item) => {
      allExpanded[item.id] = true;
    });
    setExpandedItems(allExpanded);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

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
                CLIENT ADVISORY • FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#111111] leading-[1.15]">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555550] max-w-3xl font-light leading-relaxed">
              Clear, definitive answers to questions regarding planning permission, architectural fee structures, project timelines, building regulations, and conservation areas across Birmingham and the West Midlands.
            </p>
          </div>
        </section>

        {/* Search & Category Filter Section */}
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
                placeholder="Search questions or keywords..."
                className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#F9F9F7] border border-[#E5E5DF] focus:border-[#111111] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#999990]"
              />
            </div>
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="py-12 sm:py-16 max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E5E5DF]">
            <span className="text-xs font-mono text-[#70706B]">
              Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? 'Question' : 'Questions'}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={expandAll}
                className="text-[11px] font-mono uppercase tracking-wider text-[#70706B] hover:text-[#111111] cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-[#CCCCCC]">•</span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-[11px] font-mono uppercase tracking-wider text-[#70706B] hover:text-[#111111] cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#CCCCCC]">
              <p className="font-mono text-sm text-[#70706B]">No questions matched your search query.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => {
                const isExpanded = !!expandedItems[item.id];
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-[#FFFFFF] border border-[#E5E5DF] transition-all shadow-[0_1px_4px_rgba(0,0,0,0.02)] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FAF9F5] transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#888880] bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF]">
                            {item.category}
                          </span>
                        </div>
                        <h2 className="font-serif text-lg sm:text-xl font-normal text-[#111111] leading-snug">
                          {item.question}
                        </h2>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#888880] shrink-0 mt-1 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#C51B18]' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#F0EFEB] text-sm font-sans text-[#333330] leading-relaxed animate-fade-in">
                        <p className="leading-relaxed mb-4">
                          {item.answer}
                        </p>

                        {/* Key Points */}
                        <div className="bg-[#FAF9F5] p-4 border-l-2 border-[#C51B18] space-y-2">
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#555550] block">
                            KEY PRACTICE TAKEAWAYS
                          </span>
                          {item.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#444440] leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C51B18] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Have a Question Not Listed Here */}
        <section className="py-12 bg-[#F4F4F0] border-t border-[#E5E5DF]">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-normal text-[#111111]">
                Have a specific question about your property?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#70706B]">
                Send us your site address and goals. We conduct initial feasibility assessments free of charge.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#C51B18] transition-colors inline-flex items-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <span>Ask Our Architects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Bottom CTA */}
        <CTASection
          id="faq-cta"
          title="Ready to begin your architectural journey?"
          subtitle="Explore our portfolio of completed projects or arrange a design consultation with our practice directors."
        />
      </main>

      <Footer />
    </div>
  );
}
