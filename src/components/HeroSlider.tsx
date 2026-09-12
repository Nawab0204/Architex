import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_SLIDES } from '../data/heroSlides';
import { Link } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const AUTOPLAY_DURATION = 6500; // 6.5 seconds

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slidesCount = HERO_SLIDES.length;

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slidesCount);
  }, [slidesCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Clean Autoplay without progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      goToNextSlide();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, goToNextSlide]);

  // Touch / Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      goToNextSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="homepage-hero-slider"
      className="relative w-full h-[85vh] min-h-[580px] max-h-[920px] bg-[#111111] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Architectural Showcase Slider"
      role="region"
    >
      {/* Background Slides with bright clean photos and smooth transition */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out will-change-transform brightness-[0.98] contrast-[1.03] ${
                  isActive ? 'scale-[1.03]' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              {/* Luminous, much brighter and cleaner overlay for vivid photography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
            </div>
          );
        })}
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="inline-block w-6 h-[2px] bg-[#D01020]" />
            <span className="text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.25em] uppercase text-white drop-shadow-sm">
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Large Headline */}
          <h1
            key={`title-${currentSlide.id}`}
            className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] sm:leading-[1.1] mb-4 sm:mb-5 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          >
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p
            key={`desc-${currentSlide.id}`}
            className="text-base sm:text-lg lg:text-xl text-[#f3f4f6] font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow-sm"
          >
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              id="hero-primary-cta"
              href={currentSlide.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#D01020] text-white font-mono font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#b00d1b] transition-all shadow-lg active:scale-95"
            >
              <span>{currentSlide.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {currentSlide.secondaryCta && (
              <Link
                id="hero-secondary-cta"
                href={currentSlide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md text-white font-mono font-bold text-xs uppercase tracking-[0.2em] border border-white/40 hover:bg-white hover:text-[#111111] transition-all"
              >
                <span>{currentSlide.secondaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 text-white/90" />
              </Link>
            )}
          </div>
        </div>

        {/* Clean, Minimalist Slide Indicators */}
        <div className="mt-8 sm:mt-10 pt-5 border-t border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide Selection">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                id={`hero-slide-indicator-${idx + 1}`}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-10 bg-[#D01020]'
                    : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-selected={idx === currentIndex}
                role="tab"
              />
            ))}
          </div>

          <div className="text-[11px] font-mono text-white/70 tracking-widest uppercase">
            ACHITEX &bull; UK RESIDENTIAL
          </div>
        </div>
      </div>
    </section>
  );
}
