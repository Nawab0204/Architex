import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Check } from 'lucide-react';

export function IntroSection() {
  return (
    <section id="intro-section" className="py-16 sm:py-24 bg-[#f4f1ea] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                ABOUT REAL LIFE ARCHITECTURE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.12] text-[#1a1a1a]">
              Designing spaces that work for real life.
            </h2>

            <p className="text-base sm:text-lg text-[#4a4740] leading-relaxed font-light">
              We are an architectural design and planning consultancy helping homeowners create beautiful, functional, and light-filled spaces. Whether you want to extend your ground floor, convert your loft, or build a new home, we guide you through every step in clear, everyday language.
            </p>

            <p className="text-sm sm:text-base text-[#5c5850] leading-relaxed font-light">
              From creative concept layouts and local council planning permissions to detailed technical drawings for builders, we make the architectural journey straightforward, enjoyable, and reassuringly transparent.
            </p>

            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="text-xs sm:text-sm text-[#1a1a1a] font-medium">Clear, friendly, jargon-free advice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="text-xs sm:text-sm text-[#1a1a1a] font-medium">98% planning application approval rate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="text-xs sm:text-sm text-[#1a1a1a] font-medium">Fixed transparent fee proposals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="text-xs sm:text-sm text-[#1a1a1a] font-medium">End-to-end design &amp; technical support</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                id="intro-learn-more-cta"
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Architectural Image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-[#e8e4d8] aspect-[4/3] sm:aspect-[16/11] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary family home extension designed by Real Life Architecture"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#f4f1ea]/95 backdrop-blur-sm px-4 py-2.5 border border-[#dcd8cc] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#736e65] block">Practice Philosophy</span>
                  <span className="text-xs font-serif font-medium text-[#1a1a1a] block">Thoughtful spaces crafted around everyday life</span>
                </div>
                <span className="text-[10px] font-mono text-[#736e65] uppercase tracking-wider">UK Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
