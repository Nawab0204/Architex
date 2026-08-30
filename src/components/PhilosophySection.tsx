import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Compass, Shield, Check } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section id="philosophy-section" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#E8E5DF] aspect-[4/3] sm:aspect-[16/10] border border-[#E5E2DC]">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"
                alt="Architex architectural philosophy and studio ethos"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Small floating detail card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F7F5F0] border border-[#E5E2DC] p-6 max-w-xs shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B08D57] block mb-1">
                Studio Philosophy
              </span>
              <p className="text-xs text-[#555555] leading-relaxed">
                "Good architecture is quiet, contextually grounded, and enduring."
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-6 h-[1.5px] bg-[#B08D57]" />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#6A6A6A]">
                STUDIO ETHOS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#171717] leading-[1.15]">
              A thoughtful approach to architecture.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
              At Architex, we believe great architecture is born from deep listening, rigorous technical inquiry, and respect for natural light. We design homes and developments that reflect the specific context of their environment and the daily rhythms of those who inhabit them.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#B08D57]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#B08D57]" />
                </div>
                <p className="text-sm text-[#444444] leading-relaxed">
                  <strong className="font-semibold text-[#171717]">Rigorous Spatial Diagnostics:</strong> Unlocking daylight, cross-ventilation, and effortless interior circulation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#B08D57]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#B08D57]" />
                </div>
                <p className="text-sm text-[#444444] leading-relaxed">
                  <strong className="font-semibold text-[#171717]">Statutory Fluency:</strong> De-risking planning and building regulations through precision documentation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#B08D57]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#B08D57]" />
                </div>
                <p className="text-sm text-[#444444] leading-relaxed">
                  <strong className="font-semibold text-[#171717]">Material Honesty:</strong> Crafting compositions of timber, brick, stone, and zinc that weather gracefully.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                id="philosophy-about-cta"
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-xs sm:text-sm font-semibold tracking-tight hover:bg-[#2C2C2C] transition-all group"
              >
                <span>About Architex</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
