import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustSection } from '../components/TrustSection';
import { DifferenceSection } from '../components/DifferenceSection';
import { CTASection } from '../components/CTASection';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Compass, Layers, ShieldCheck, MapPin } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea] w-full">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28 w-full">
        {/* Banner */}
        <div className="w-full border-b border-[#dcd8cc]">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                PRACTICE PROFILE • MONOGRAPH
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
              About Real Life Architecture
            </h1>

            <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
              An architectural design studio based in Birmingham, United Kingdom, crafting spaces shaped around people, place and purpose.
            </p>
          </div>
        </div>

        {/* Narrative & Image Split */}
        <div className="py-16 sm:py-24 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                    OUR PHILOSOPHY
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] tracking-[-0.02em] leading-[1.18]">
                  Architecture that combines character, function, and enduring craftsmanship.
                </h2>

                <p className="text-base sm:text-lg text-[#4a4740] leading-relaxed font-light">
                  Real Life Architecture approaches every commission with clarity, creativity, and close attention to the lifestyle of those who will use the building. We understand that a home is more than an arrangement of rooms—it is where daily memories unfold.
                </p>

                <p className="text-sm sm:text-base text-[#5c5850] leading-relaxed font-light">
                  Whether guiding a family through a light-filled kitchen extension in Harborne, restoring a Victorian villa in Edgbaston, or designing a high-performance new build in Solihull, we unite aesthetic vision with the practical realities of construction and planning.
                </p>

                <div className="pt-2">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all group"
                  >
                    <span>Explore Our Portfolio</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden bg-[#e8e4d8] aspect-[4/3] sm:aspect-[16/11] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Real Life Architecture practice workspace and architecture"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Standards */}
        <TrustSection />

        {/* The Real Life Architecture Difference */}
        <DifferenceSection />

        {/* CTA */}
        <CTASection
          id="about-page-cta"
          title="Work with Real Life Architecture on your next project."
          subtitle="Book an initial consultation to review your property and discuss spatial opportunities."
        />
      </main>

      <Footer />
    </div>
  );
}
