import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="testimonials-section"
      className="py-20 sm:py-28 bg-[#ffffff] border-b border-[#e5e7eb] w-full relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with Trustpilot Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-[#D01020]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                CLIENT TESTIMONIALS &amp; TRUSTPILOT
              </span>
            </div>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#111827] tracking-tight leading-[1.12]"
            >
              Real stories from homeowners who built with ACHITEX.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4b5563] font-light leading-relaxed">
              Every review is independently verified through Trustpilot from homeowners across the UK.
            </p>
          </div>

          {/* Official Trustpilot Summary Card */}
          <div className="shrink-0 p-5 bg-[#fafafa] border border-[#e5e7eb] rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm">
            {/* Trustpilot Brand & Stars */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/trustpilot/trustpilot-logo.svg"
                  alt="Trustpilot Logo"
                  className="h-6 w-auto"
                />
                <span className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                  Excellent
                </span>
              </div>

              {/* 5 Green Trustpilot Stars */}
              <div className="flex items-center gap-1">
                <img
                  src="/images/trustpilot/trustpilot-5-stars.svg"
                  alt="5 Stars on Trustpilot"
                  className="h-5 w-auto"
                />
                <span className="text-sm font-bold text-[#111827] ml-2">4.9</span>
                <span className="text-xs text-[#6b7280]">/ 5</span>
              </div>
            </div>

            <div className="border-l border-[#e5e7eb] pl-5 hidden sm:block">
              <span className="text-xs font-mono text-[#374151] block font-semibold">
                86 Verified Reviews
              </span>
              <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium mt-0.5">
                <CheckCircle className="w-3.5 h-3.5" /> 100% Homeowners
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (3 Cards per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#fafafa] border border-[#e5e7eb] p-7 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#111827] hover:bg-white transition-all duration-300 shadow-sm group relative"
            >
              <div>
                {/* Card Top: Trustpilot 5 Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  {/* Trustpilot 5 Stars Visual */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-[#00b67a] rounded-[2px] flex items-center justify-center text-white text-[11px]"
                      >
                        &#9733;
                      </div>
                    ))}
                  </div>

                  {/* Verified Checkmark */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-base text-[#1f2937] font-normal leading-relaxed mb-6 font-sans">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#D01020] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6b7280] font-mono mt-0.5">
                    {item.location} &bull; {item.year}
                  </p>
                  <p className="text-[11px] text-[#4b5563] font-medium mt-1">
                    Project: <span className="text-[#111827]">{item.project}</span>
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#111827] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination & Trustpilot Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#e5e7eb]">
          {/* Pagination Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="testimonials-prev-btn"
              onClick={prevPage}
              className="p-3 bg-white border border-[#e5e7eb] rounded hover:border-[#111827] hover:bg-[#111827] hover:text-white transition-all text-[#374151]"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-3 font-mono text-xs text-[#4b5563]">
              <span>Page {currentPage + 1} of {totalPages}</span>
            </div>

            <button
              type="button"
              id="testimonials-next-btn"
              onClick={nextPage}
              className="p-3 bg-white border border-[#e5e7eb] rounded hover:border-[#111827] hover:bg-[#111827] hover:text-white transition-all text-[#374151]"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Trustpilot Profile Link */}
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#111827] hover:text-[#D01020] transition-colors"
          >
            <span>See all 86 verified reviews on Trustpilot</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
