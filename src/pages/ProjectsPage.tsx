import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { CTASection } from '../components/CTASection';

export function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Top Page Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              PORTFOLIO • ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Our Work
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            A selection of architectural work, residential extensions, bespoke new builds, and conservation projects delivered across Birmingham and the West Midlands.
          </p>
        </div>

        {/* Full Interactive Projects Grid */}
        <ProjectsGrid
          title="All Architectural Projects"
          subtitle="Filter by category to explore specific residential typology, heritage works, or visualisation studies."
          eyebrow="FILTER PORTFOLIO"
          showFilters={true}
        />

        {/* Bottom CTA */}
        <CTASection
          id="projects-page-cta"
          title="Ready to discuss your architectural project?"
          subtitle="Whether you are planning a rear extension, a whole-house remodelling, or a new build development, we are here to help."
        />
      </main>

      <Footer />
    </div>
  );
}
