import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Calendar } from 'lucide-react';

export function MidPageCTA() {
  return (
    <section id="mid-page-cta" className="py-20 sm:py-24 lg:py-28 bg-[#ffffff] text-[#111827] border-y border-[#e5e7eb] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-[2px] bg-[#D01020]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#D01020]">
            READY TO START?
          </span>
          <span className="w-6 h-[2px] bg-[#D01020]" />
        </div>

        <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] max-w-3xl mx-auto mb-6 text-[#111827]">
          Let's turn your ideas into a place you will love.
        </h2>

        <p className="text-base sm:text-lg text-[#4b5563] font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Tell us about your project and our team will help you understand the next steps, statutory planning potential, and realistic construction timeframes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="mid-page-book-consultation-btn"
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D01020] text-white text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-[#b00d1b] rounded-sm transition-all shadow-md group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            id="mid-page-view-projects-btn"
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#e5e7eb] text-[#111827] text-xs font-mono font-bold uppercase tracking-[0.2em] hover:border-[#111827] hover:bg-[#f9fafb] rounded-sm transition-all"
          >
            <span>View Our Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
