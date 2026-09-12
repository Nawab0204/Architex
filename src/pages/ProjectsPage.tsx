import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { CTASection } from '../components/CTASection';

export function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Top Clean Header Banner */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 border-b border-[#e5e7eb]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-[#D01020]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                ACHITEX PORTFOLIO
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111827]">
              Our Portfolio
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
              Bespoke residential architecture, modern open-plan extensions, loft transformations, and new build dwellings.
            </p>
          </div>
        </div>

        {/* Gallery View with Clean Dropdown Filter Button */}
        <ProjectsGrid
          title="Featured Architectural Works"
          subtitle=""
          eyebrow=""
          showFilters={true}
        />

        {/* Bottom Consultation CTA */}
        <CTASection
          id="projects-page-cta"
          title="Ready to discuss your architectural project?"
          subtitle="Whether you are planning a rear extension, a whole-house remodelling, or a new build development, our team is ready to help."
        />
      </main>

      <Footer />
    </div>
  );
}
