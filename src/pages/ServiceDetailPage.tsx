import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { Link } from '../context/NavigationContext';
import { CTASection } from '../components/CTASection';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDrawingsViewer } from '../components/ProjectDrawingsViewer';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  Phone,
  Image as ImageIcon,
  Compass,
  FileCheck,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-[#ffffff] w-full">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 bg-white border border-[#e5e7eb] max-w-md mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Service Not Found</h2>
            <p className="text-sm text-[#4b5563] mb-6 font-light">The requested architectural service could not be located.</p>
            <Link href="/services" className="px-7 py-3.5 bg-[#111827] text-white text-xs font-mono font-bold uppercase tracking-wider">
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => service.relatedProjectSlugs.includes(p.slug));
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] w-full text-[#111827]">
      <Header isTransparentInitially={true} />

      <main className="flex-1 w-full">
        {/* Large Luminous Service Hero */}
        <div className="relative w-full h-[65vh] min-h-[480px] max-h-[700px] bg-[#0f172a] text-white overflow-hidden select-none">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center brightness-95 contrast-[1.02]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

          {/* Hero Content */}
          <div className="absolute inset-0 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between pt-28 pb-12">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white/90 hover:text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20 transition-all rounded-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-[#D01020]" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-white/90">
                  ACHITEX RESIDENTIAL SERVICE
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-4 leading-[1.08] drop-shadow-md">
                {service.title}
              </h1>

              <p className="text-base sm:text-xl text-[#f3f4f6] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative, What We Do & Deliverables Grid */}
        <div className="py-16 sm:py-24 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Narrative & What We Do */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-[2px] bg-[#D01020]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                    HOW WE WORK
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-[#111827] tracking-tight leading-snug">
                  {service.fullDescription}
                </h2>
              </div>

              {/* What We Do */}
              {service.whatWeDo && service.whatWeDo.length > 0 && (
                <div className="pt-8 border-t border-[#e5e7eb] space-y-5">
                  <h3 className="text-xl font-sans font-bold text-[#111827]">
                    What We Do For Your Home
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.whatWeDo.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#f9fafb] border border-[#e5e7eb] p-4 flex items-start gap-3 rounded-sm shadow-sm"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#D01020] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </span>
                        <span className="text-xs sm:text-[13px] text-[#374151] font-normal leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Process Stages (Detailed & Expanded) */}
              <div className="pt-8 border-t border-[#e5e7eb] space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-sans font-bold text-[#111827]">
                    Step-by-Step Delivery Stages
                  </h3>
                  <span className="text-xs font-mono text-[#6b7280]">
                    {service.processStages.length} Milestones
                  </span>
                </div>

                <div className="space-y-4">
                  {service.processStages.map((stg, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-[#e5e7eb] p-6 space-y-2 rounded-sm shadow-sm hover:border-[#111827] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#D01020] bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                          STAGE 0{idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-[#111827]">
                          {stg.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light pl-2">
                        {stg.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comprehensive FAQs Accordion */}
              {service.faq && service.faq.length > 0 && (
                <div className="pt-8 border-t border-[#e5e7eb] space-y-5">
                  <h3 className="text-xl font-sans font-bold text-[#111827]">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {service.faq.map((item, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className="border border-[#e5e7eb] rounded-sm overflow-hidden bg-[#f9fafb]"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-bold text-[#111827]">
                              {item.question}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#D01020] transition-transform duration-200 shrink-0 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 py-4 border-t border-[#e5e7eb] bg-[#fafafa]">
                              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Key Benefits & Deliverables Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Key Deliverables Card */}
              <div className="bg-[#ffffff] border border-[#e5e7eb] p-6 sm:p-8 space-y-6 rounded-sm shadow-md sticky top-28">
                <div className="pb-4 border-b border-[#e5e7eb]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#D01020] block mb-1">
                    INCLUDED IN THIS SERVICE
                  </span>
                  <h3 className="text-2xl font-sans font-bold text-[#111827]">
                    Key Deliverables
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#D01020] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="pt-5 border-t border-[#e5e7eb] space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6b7280] block">
                      WHY HOMEOWNERS CHOOSE ACHITEX
                    </span>
                    <ul className="space-y-3">
                      {service.benefits.map((b, idx) => (
                        <li key={idx} className="text-xs text-[#4b5563] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#D01020] rounded-full shrink-0 mt-1.5" />
                          <div>
                            <span className="font-bold text-[#111827] block">{b.title}</span>
                            <span className="text-[#4b5563] font-light leading-relaxed">{b.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-[#e5e7eb] space-y-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#D01020] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#b00d1b] transition-all rounded-sm shadow active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Consultation</span>
                  </Link>

                  <a
                    href="tel:01212854140"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#f9fafb] border border-[#d1d5db] text-[#111827] text-xs font-mono font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D01020]" />
                    <span>Call Direct: 0121 285 4140</span>
                  </a>

                  <p className="text-center text-[11px] font-mono text-[#6b7280]">
                    Itemized fixed-fee quote provided with no obligation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Rich Photographic Gallery Section with Many Bright Photos */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <div className="py-16 sm:py-24 bg-[#f9fafb] border-y border-[#e5e7eb] w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-[2px] bg-[#D01020]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                      PROJECT PHOTOGRAPHY &amp; 3D RENDERS
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111827] tracking-tight">
                    Visual Gallery: {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4b5563] max-w-md font-light">
                  Explore bright, completed extensions, 3D visualisations, and light-filled layouts delivered for UK homeowners.
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-sm border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow-md hover:border-[#111827] transition-all"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e7eb]">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 brightness-[1.02] contrast-[1.02]"
                        loading="lazy"
                      />
                      {img.tag && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#111827] rounded shadow-sm">
                          {img.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[#374151] font-medium leading-snug">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Relevant Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="py-16 sm:py-24 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-[2px] bg-[#D01020]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                    PORTFOLIO EXAMPLES
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#111827] tracking-tight">
                  Related Case Studies
                </h3>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#111827] hover:text-[#D01020] transition-colors"
              >
                <span>View All Works</span>
                <ArrowRight className="w-4 h-4 text-[#D01020]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.slice(0, 2).map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        )}

        {/* Other 4 Services Quick Links */}
        <div className="py-12 bg-[#ffffff] border-t border-[#e5e7eb] w-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#6b7280] block mb-6">
              EXPLORE OTHER SERVICES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="p-4 bg-[#f9fafb] border border-[#e5e7eb] hover:border-[#111827] hover:bg-white transition-all rounded-sm flex items-center justify-between group"
                >
                  <span className="text-xs font-bold text-[#111827] group-hover:text-[#D01020] transition-colors">
                    {srv.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6b7280] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <CTASection
          id="service-detail-cta"
          title={`Ready to begin your ${service.title.toLowerCase()}?`}
          subtitle="Speak directly with our architectural directors to evaluate feasibility, planning routes, and estimated construction timelines."
        />
      </main>

      <Footer />
    </div>
  );
}
