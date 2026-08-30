import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_SLIDES } from '../data/heroSlides';
import { Link } from '../context/NavigationContext';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';

const AUTOPLAY_DURATION = 6000; // 6 seconds

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const slidesCount = HERO_SLIDES.length;

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slidesCount);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slidesCount]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slidesCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Progress bar & Autoplay tick
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * AUTOPLAY_DURATION;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        goToNextSlide();
      }
    }, 40);

    progressIntervalRef.current = interval;

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, goToNextSlide, currentIndex]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevSlide, goToNextSlide]);

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
    const isSwipe = Math.abs(distance) > 50;
    if (isSwipe) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="homepage-hero-slider"
      className="relative w-full h-[85vh] min-h-[580px] max-h-[920px] bg-[#171717] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Architectural Showcase Slider"
      role="region"
    >
      {/* Background Slides with smooth crossfade and subtle 100% -> 103% zoom */}
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
                className={`w-full h-full bg-cover bg-center transition-transform duration-[7000ms] ease-out will-change-transform ${
                  isActive ? 'scale-[1.03]' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              {/* Refined subtle gradient overlay to ensure text contrast while letting architecture breathe */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-[#171717]/40 to-[#171717]/40" />
            </div>
          );
        })}
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 h-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="inline-block w-6 h-[1px] bg-[#f4f1ea]" />
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase text-[#e8e4d8]">
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Large Headline */}
          <h1
            key={`title-${currentSlide.id}`}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.08] sm:leading-[1.1] mb-4 sm:mb-6 text-[#f4f1ea] text-balance animate-fade-in"
          >
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p
            key={`desc-${currentSlide.id}`}
            className="text-base sm:text-lg lg:text-xl text-[#d9d4c7] font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl text-pretty"
          >
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              id="hero-primary-cta"
              href={currentSlide.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#f4f1ea] text-[#1a1a1a] font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all group"
            >
              <span>{currentSlide.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {currentSlide.secondaryCta && (
              <Link
                id="hero-secondary-cta"
                href={currentSlide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-transparent text-[#f4f1ea] font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.2em] border border-white/40 hover:border-white hover:bg-white/10 transition-all"
              >
                <span>{currentSlide.secondaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Bar: Slide Counter, Progress Bar, Previous/Next Controls */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          {/* Slide Counter & Indicators */}
          <div className="flex items-center gap-5">
            <div className="font-mono text-xs tracking-widest text-[#f4f1ea] flex items-center gap-1.5">
              <span className="font-semibold text-white">0{currentIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">0{slidesCount}</span>
            </div>

            {/* Direct Slide Navigation Bars */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide Selection">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  id={`hero-slide-indicator-${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1 transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#f4f1ea]'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  aria-selected={idx === currentIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>

          {/* Autoplay Progress Line */}
          <div className="hidden md:block flex-1 max-w-xs mx-6 h-[1px] bg-white/20 overflow-hidden">
            <div
              className="h-full bg-[#f4f1ea] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              id="hero-pause-toggle"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 text-white/70 hover:text-white rounded hover:bg-white/10 transition-colors"
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              title={isPaused ? 'Resume' : 'Pause'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <button
              id="hero-prev-btn"
              onClick={goToPrevSlide}
              className="p-3 text-white border border-white/20 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              id="hero-next-btn"
              onClick={goToNextSlide}
              className="p-3 text-white border border-white/20 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
