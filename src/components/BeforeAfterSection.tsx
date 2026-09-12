import React, { useState, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight, MoveHorizontal, Sparkles } from 'lucide-react';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation-section" className="py-16 sm:py-24 bg-[#f4f1ea] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="REAL HOME TRANSFORMATION"
            title="See what is possible for your property."
            description="Good architectural design unlocks space and light you never knew your home had. Drag the slider to compare before and after."
            className="mb-0"
          />

          <Link
            id="view-transformation-case-study"
            href="/projects/harborne-house"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65] transition-colors shrink-0 group"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Comparison Container */}
        <div className="bg-[#ffffff] border border-[#dcd8cc] p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)]">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden select-none cursor-ew-resize border border-[#dcd8cc]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after project comparison slider"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
              if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
            }}
          >
            {/* AFTER Image (Full background) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
              alt="After: Light-filled architectural rear pavilion extension"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-[#1a1a1a] text-[#f4f1ea] px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] pointer-events-none">
              AFTER • ARCHITECTURAL EXTENSION
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85"
                alt="Before: Dark, compartmentalised rear space"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none filter saturate-75 brightness-95"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: containerRef.current ? `${containerRef.current.clientHeight}px` : '100%'
                }}
              />
              <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 text-[#1a1a1a] px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border border-[#dcd8cc] pointer-events-none">
                BEFORE • ORIGINAL 1970s LAYOUT
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#1a1a1a] text-[#f4f1ea] border-2 border-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Context Details Below Slider */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#dcd8cc]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65] block mb-1">
                PROPERTY &amp; LOCATION
              </span>
              <h4 className="font-serif text-lg text-[#1a1a1a]">Victorian Villa, Harborne</h4>
              <p className="text-xs text-[#5c5850] font-light mt-0.5">Birmingham Conservation Area</p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65] block mb-1">
                WHAT WE TRANSFORMED
              </span>
              <p className="text-xs text-[#4a4740] font-light leading-relaxed">
                Replaced cramped, segmented rooms with a 12.4m column-free open-plan pavilion, flush garden sliding glass doors, and a sedum green roof.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65] block mb-1">
                KEY OUTCOMES
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f4f1ea] border border-[#dcd8cc] px-2.5 py-1 text-[11px] font-mono text-[#1a1a1a]">
                  +95m² usable area
                </span>
                <span className="bg-[#f4f1ea] border border-[#dcd8cc] px-2.5 py-1 text-[11px] font-mono text-[#1a1a1a]">
                  Planning approved 1st round
                </span>
                <span className="bg-[#f4f1ea] border border-[#dcd8cc] px-2.5 py-1 text-[11px] font-mono text-[#1a1a1a]">
                  Triple-glazed Part L
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
