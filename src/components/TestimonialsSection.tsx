import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { SectionHeading } from './SectionHeading';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrentIndex((idx) => (idx - 1 + total) % total);
  const next = () => setCurrentIndex((idx) => (idx + 1) % total);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials-section" className="py-20 sm:py-28 lg:py-32 bg-[#F7F5F0] border-t border-[#E5E2DC]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-6 h-[1.5px] bg-[#B08D57]" />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#6A6A6A]">
                CLIENT TESTIMONIALS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#171717] leading-[1.15]">
              Real feedback from clients we work with.
            </h2>

            <p className="text-sm sm:text-base text-[#6A6A6A] leading-relaxed font-light">
              We take pride in fostering close collaborative partnerships with homeowners and developers from initial concept sketches through statutory approvals.
            </p>
          </div>

          {/* Right Column: Interactive Testimonial Carousel */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E5E2DC] p-8 sm:p-12 space-y-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative">
              <Quote className="w-10 h-10 text-[#B08D57]/30" />

              {/* Quote text */}
              <blockquote className="min-h-[120px] sm:min-h-[140px] flex items-center">
                <p className="text-lg sm:text-2xl font-light text-[#222222] leading-relaxed tracking-tight">
                  "{current.quote}"
                </p>
              </blockquote>

              {/* Client Info & Counter/Controls */}
              <div className="pt-6 border-t border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#171717]">{current.name}</h4>
                  <p className="text-xs text-[#6A6A6A]">{current.project} • {current.location}</p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Counter */}
                  <span className="font-mono text-xs text-[#888888]">
                    0{currentIndex + 1} / 0{total}
                  </span>

                  {/* Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      id="testimonial-prev-btn"
                      type="button"
                      onClick={prev}
                      className="p-2.5 border border-[#E5E2DC] hover:border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="testimonial-next-btn"
                      type="button"
                      onClick={next}
                      className="p-2.5 border border-[#E5E2DC] hover:border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
