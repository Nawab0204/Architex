import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServicesGrid } from '../components/ServicesGrid';
import { ProcessSection } from '../components/ProcessSection';
import { TrustSection } from '../components/TrustSection';
import { CTASection } from '../components/CTASection';

export function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              ARCHITECTURAL SERVICES • PRACTICE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Our Services
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            From early feasibility and spatial planning to statutory planning permissions, building regulations, and 3D visualisations across Birmingham and the West Midlands.
          </p>
        </div>

        {/* All Services */}
        <ServicesGrid />

        {/* Practice Trust & Standards */}
        <TrustSection />

        {/* 6 Stage Roadmap */}
        <ProcessSection showCta={false} />

        {/* CTA */}
        <CTASection
          id="services-page-cta"
          title="Discuss your project requirements with Architex."
          subtitle="We tailor our architectural scope to suit your exact stage of development and project goals."
        />
      </main>

      <Footer />
    </div>
  );
}
