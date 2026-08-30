import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InsightsGrid } from '../components/InsightsGrid';
import { CTASection } from '../components/CTASection';

export function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              EDITORIAL • WRITING & RESEARCH
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Insights & Architectural Guides
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            Practical advice, design perspectives, and planning guides for homeowners and developers across Birmingham and the UK.
          </p>
        </div>

        {/* All Articles */}
        <InsightsGrid />

        {/* CTA */}
        <CTASection
          id="insights-page-cta"
          title="Have a question about planning or extending your home?"
          subtitle="Speak directly with an architectural designer to discuss your ideas."
        />
      </main>

      <Footer />
    </div>
  );
}
