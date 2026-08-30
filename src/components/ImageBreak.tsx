import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function ImageBreak() {
  return (
    <section
      id="image-break-section"
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden bg-[#1a1a1a] select-none border-y border-[#dcd8cc]"
      aria-label="Architectural Visual Experience"
    >
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
        alt="Full width architectural atmosphere"
        className="w-full h-full object-cover object-center brightness-90"
        loading="lazy"
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-transparent to-[#1a1a1a]/25" />

      {/* Subtle overlay content */}
      <div className="absolute inset-0 flex items-end justify-between p-6 sm:p-12 lg:p-16 max-w-[1360px] mx-auto w-full">
        <div className="max-w-xl text-[#f4f1ea]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="inline-block w-6 h-[1px] bg-[#f4f1ea]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8e4d8]">
              ARCHITECTURAL EXCELLENCE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#f4f1ea] mb-5">
            Designing spaces with purpose.
          </h2>
          <Link
            id="image-break-explore-work-cta"
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f4f1ea] text-[#1a1a1a] font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all group"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
