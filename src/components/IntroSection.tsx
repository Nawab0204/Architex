import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Compass, Layers, ShieldCheck } from 'lucide-react';

export function IntroSection() {
  return (
    <section id="intro-section" className="py-20 sm:py-28 lg:py-32 bg-[#f4f1ea]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                ABOUT ARCHITEX
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.12] text-[#1a1a1a] text-balance">
              Architecture designed around people, place and purpose.
            </h2>

            <p className="text-base sm:text-lg text-[#4a4740] leading-relaxed font-light">
              Architex develops architectural ideas into thoughtful, practical and visually distinctive spaces. Each project is approached with clarity, creativity and close attention to the needs of the people who will use it.
            </p>

            <p className="text-base sm:text-lg text-[#5c5850] leading-relaxed font-light">
              Based in Birmingham, we collaborate with homeowners, developers, and commercial clients across the West Midlands to create residential extensions, bespoke new-build houses, and heritage transformations that stand the test of time.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#dcd8cc]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">01 / People</span>
                <span className="text-xs text-[#5c5850] leading-relaxed block">Spaces tailored around personal daily routines.</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">02 / Context</span>
                <span className="text-xs text-[#5c5850] leading-relaxed block">Sensitive response to light, orientation and heritage.</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">03 / Buildability</span>
                <span className="text-xs text-[#5c5850] leading-relaxed block">Designs grounded in constructability & clear detail.</span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                id="intro-discover-approach-cta"
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all group"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#e8e4d8] aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Contemporary architectural home designed by Architex"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#f4f1ea]/95 backdrop-blur-sm p-4 border border-[#dcd8cc] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65] block">Featured Practice</span>
                  <span className="text-sm font-serif font-medium text-[#1a1a1a] block">Birmingham & West Midlands Practice</span>
                </div>
                <span className="text-[11px] font-mono text-[#736e65] uppercase tracking-wider">Est. 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
