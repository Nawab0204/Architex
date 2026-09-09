import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServicesGrid } from '../components/ServicesGrid';
import { ProcessSection } from '../components/ProcessSection';
import { TrustSection } from '../components/TrustSection';
import { CTASection } from '../components/CTASection';
import { ProjectDrawingsViewer } from '../components/ProjectDrawingsViewer';
import { SERVICES } from '../data/services';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../context/NavigationContext';

export function ServicesPage() {
  // Aggregate sample planning drawings from all services
  const allPlanningDrawings = SERVICES.flatMap((s) => s.planningDrawings || []).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea] w-full">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28 w-full">
        {/* Banner */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              ARCHITECTURAL SERVICES • RA ARCHITECTS
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Our Services & Planning Deliverables
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-3xl font-light leading-relaxed">
            From initial measured surveys and spatial planning to statutory planning permissions, building regulations, and 3D visualisations across Birmingham and the West Midlands.
          </p>
        </div>

        {/* All Services Grid */}
        <ServicesGrid />

        {/* FEATURED PLANNING DRAWINGS & TECHNICAL BLUEPRINTS SHOWCASE */}
        <section className="py-20 sm:py-28 bg-white border-y border-[#dcd8cc] w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-[#C51B18]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                    PLANNING DRAWINGS & SUBMISSIONS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a]">
                  Technical Planning Documentation
                </h2>
              </div>
              <p className="text-sm text-[#5c5850] max-w-xl font-light">
                Every application we submit to local planning authorities is supported by high-precision measured drawings, statutory site block plans, and coordinated construction details.
              </p>
            </div>

            {/* Drawing Viewer */}
            <ProjectDrawingsViewer
              drawings={allPlanningDrawings}
              projectTitle="RA Architects Planning & Technical Packages"
            />
          </div>
        </section>

        {/* Practice Trust & Standards */}
        <TrustSection />

        {/* 6 Stage Roadmap */}
        <ProcessSection showCta={false} />

        {/* CTA */}
        <CTASection
          id="services-page-cta"
          title="Discuss your project requirements with RA Architects."
          subtitle="We tailor our architectural scope to suit your exact stage of development and project goals."
        />
      </main>

      <Footer />
    </div>
  );
}
