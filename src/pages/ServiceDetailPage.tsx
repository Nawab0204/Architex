import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { Link, useNavigation } from '../context/NavigationContext';
import { CTASection } from '../components/CTASection';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDrawingsViewer } from '../components/ProjectDrawingsViewer';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  FileCheck,
  FileText,
  Compass,
} from 'lucide-react';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f4f1ea] w-full">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 bg-white border border-[#dcd8cc] max-w-md mx-auto shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]">
            <h2 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">Service Not Found</h2>
            <p className="text-sm text-[#5c5850] mb-6 font-light">The requested architectural service could not be located.</p>
            <Link href="/services" className="px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em]">
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => service.relatedProjectSlugs.includes(p.slug));

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea] w-full">
      <Header isTransparentInitially={true} />

      <main className="flex-1 w-full">
        {/* Large Service Hero */}
        <div className="relative w-full h-[65vh] min-h-[460px] max-h-[700px] bg-[#1a1a1a] text-[#f4f1ea] overflow-hidden select-none">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center brightness-90"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/40 to-black/30" />

          {/* Hero Content */}
          <div className="absolute inset-0 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between pt-28 pb-12">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#f4f1ea] hover:text-white bg-black/50 backdrop-blur-sm px-4 py-2 border border-white/20 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-6 h-[1px] bg-[#f4f1ea]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#e8e4d8]">
                  ARCHITECTURAL DISCIPLINE • RA ARCHITECTS
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#f4f1ea] mb-3 leading-[1.1]">
                {service.title}
              </h1>

              <p className="text-base sm:text-xl text-[#d9d4c7] font-light leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative & Deliverables Grid */}
        <div className="py-16 sm:py-24 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                    SERVICE SCOPE & OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight leading-snug">
                  {service.fullDescription}
                </h2>
              </div>

              {/* Service Process Stages */}
              <div className="pt-8 border-t border-[#dcd8cc] space-y-6">
                <h3 className="font-serif text-2xl font-normal text-[#1a1a1a]">
                  How We Deliver This Service
                </h3>

                <div className="space-y-4">
                  {service.processStages.map((stg, idx) => (
                    <div key={idx} className="bg-white border border-[#dcd8cc] p-6 space-y-2 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.04)]">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#C51B18]">0{idx + 1}</span>
                        <h4 className="text-base font-semibold text-[#1a1a1a]">{stg.title}</h4>
                      </div>
                      <p className="text-sm text-[#5c5850] leading-relaxed font-light pl-7">
                        {stg.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#ffffff] border border-[#dcd8cc] p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
                <div className="pb-4 border-b border-[#dcd8cc]">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block mb-1">
                    WHAT THIS SERVICE INCLUDES
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1a1a1a]">
                    Key Deliverables
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4a4740] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-[#dcd8cc] space-y-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-colors"
                  >
                    <span>Request Service Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <p className="text-center text-[11px] font-mono text-[#736e65]">
                    Clear, itemized fee proposals following initial consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PLANNING DRAWINGS & TECHNICAL SPECIFICATIONS SECTION FOR THIS SERVICE */}
        {service.planningDrawings && service.planningDrawings.length > 0 && (
          <div className="py-16 sm:py-24 bg-[#ffffff] border-y border-[#dcd8cc] w-full">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-[#C51B18]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                      TECHNICAL DRAWINGS & STATUTORY SHEETS
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1a1a1a]">
                    Sample Planning Drawings & Details
                  </h3>
                </div>
                <p className="text-xs font-mono text-[#5c5850] max-w-md">
                  High-precision architectural plans and technical elevations produced for planning submission and building control sign-off.
                </p>
              </div>

              <ProjectDrawingsViewer
                drawings={service.planningDrawings}
                projectTitle={service.title}
              />
            </div>
          </div>
        )}

        {/* Relevant Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="py-20 sm:py-28 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block mb-1">
                  PROJECT APPLICATIONS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                  Relevant Case Studies
                </h3>
              </div>

              <Link href="/projects" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65]">
                View All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* Service FAQ */}
        {service.faq && service.faq.length > 0 && (
          <div className="py-16 sm:py-24 w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block mb-1">
                FAQ
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                Questions About {service.title}
              </h3>
            </div>

            <div className="space-y-4">
              {service.faq.map((f, idx) => (
                <div key={idx} className="bg-white border border-[#dcd8cc] p-6 space-y-2 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)]">
                  <h4 className="font-serif text-lg font-normal text-[#1a1a1a]">{f.question}</h4>
                  <p className="text-sm text-[#5c5850] leading-relaxed font-light">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <CTASection
          id="service-detail-cta"
          title={`Ready to start your project with ${service.title}?`}
          subtitle="Get in touch with Real Life Architecture to discuss your property, timeline, and statutory requirements."
        />
      </main>

      <Footer />
    </div>
  );
}
