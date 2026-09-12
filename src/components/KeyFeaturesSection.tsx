import React, { useState } from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import {
  Compass,
  Sparkles,
  Zap,
  Clock,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Sun,
  ShieldCheck,
  Check,
  Maximize2
} from 'lucide-react';

export function KeyFeaturesSection() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section
      id="key-features-section"
      className="py-20 sm:py-28 bg-[#fafafa] border-b border-[#e5e7eb] relative overflow-hidden"
      aria-labelledby="key-features-heading"
    >
      {/* Subtle Architectural Drafting Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-[#D01020]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                WHY HOMEOWNERS CHOOSE US
              </span>
            </div>
            <h2
              id="key-features-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#111827] tracking-tight leading-[1.12]"
            >
              Simple, thoughtful architecture designed around the way you live.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4b5563] font-light leading-relaxed max-w-2xl">
              We combine creative spatial problem-solving with rigorous technical delivery. Every home scheme is backed by chartered council know-how and photorealistic 3D clarity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e7eb] rounded text-xs font-mono text-[#374151] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>100% PLANNING APPROVAL RECORD</span>
            </div>
          </div>
        </div>

        {/* 6 Truly Unique, High-Craft Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* CARD 01: Planning Expertise */}
          <div
            id="feature-card-planning"
            onMouseEnter={() => setActiveTab(0)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            {/* Architectural Crosshair Corners */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [01 / REGULATORY]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  100% APPROVALS
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <Compass className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Planning Expertise
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Zero guesswork with local council authorities. We master Permitted Development, Conservation Areas, and complex committee approvals across the UK.
              </p>
            </div>

            {/* Special Blueprint Interactive Tag */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Council Policy Check</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Approved First Time
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Permitted Dev</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Listed Buildings</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Green Belt</span>
              </div>
            </div>
          </div>

          {/* CARD 02: Curious Creativity */}
          <div
            id="feature-card-creativity"
            onMouseEnter={() => setActiveTab(1)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [02 / SPATIAL]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                  SOLAR &amp; DAYLIGHT
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <Sparkles className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Curious Creativity
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Fresh architectural thinking that transforms awkward, dark Victorian or 1930s layouts into uplifting, light-filled spaces customized for real daily family life.
              </p>
            </div>

            {/* Special Solar & Spatial Indicator */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Sun Orientation Simulation</span>
                <span className="text-[#D01020] font-bold flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5" /> +45% Natural Lux
                </span>
              </div>
              <div className="w-full bg-[#f3f4f6] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-[#D01020] h-full w-[85%]" />
              </div>
            </div>
          </div>

          {/* CARD 03: Speedy Design & Workflow */}
          <div
            id="feature-card-speed"
            onMouseEnter={() => setActiveTab(2)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [03 / BIM &amp; 3D]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
                  &lt; 10-DAY DRAFTS
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <Zap className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Speedy Design &amp; 3D Workflow
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Rapid, responsive iterations using photorealistic 3D CAD walk-throughs. You step inside your new kitchen extension before a single brick is laid.
              </p>
            </div>

            {/* Special Iteration Metric */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Photorealistic Model Delivery</span>
                <span className="text-blue-600 font-bold">Fast-Track Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#374151]">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100 font-semibold">3D Virtual Walkthrough Included</span>
              </div>
            </div>
          </div>

          {/* CARD 04: Clear Timelines */}
          <div
            id="feature-card-timelines"
            onMouseEnter={() => setActiveTab(3)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [04 / CERTAINTY]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                  FIXED MILESTONES
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <Clock className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Clear Timelines &amp; Fixed Fees
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Transparent milestones with guaranteed delivery dates. You always know what is being drafted, when council documents are filed, and when builders can start.
              </p>
            </div>

            {/* Special 4-Stage Architectural Roadmap */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#4b5563]">
                <span className="font-semibold text-[#111827]">Survey</span>
                <span>&rarr;</span>
                <span className="font-semibold text-[#111827]">Concepts</span>
                <span>&rarr;</span>
                <span className="font-semibold text-[#111827]">Planning</span>
                <span>&rarr;</span>
                <span className="font-semibold text-[#D01020]">Build Regs</span>
              </div>
              <div className="w-full bg-[#f3f4f6] h-1.5 rounded-full overflow-hidden flex">
                <div className="w-1/4 bg-teal-500 h-full border-r border-white" />
                <div className="w-1/4 bg-teal-500 h-full border-r border-white" />
                <div className="w-1/4 bg-teal-500 h-full border-r border-white" />
                <div className="w-1/4 bg-[#D01020] h-full" />
              </div>
            </div>
          </div>

          {/* CARD 05: Pre-Planning Advice */}
          <div
            id="feature-card-preplanning"
            onMouseEnter={() => setActiveTab(4)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [05 / APPRAISAL]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded">
                  FREE FEASIBILITY
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <HelpCircle className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Pre-Planning Advice
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Honest, direct guidance before you commit financial resources. We evaluate site constraints, flood risk, tree orders, and boundary easements up front.
              </p>
            </div>

            {/* Special Feasibility Stamp */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Risk-Free Consultation</span>
                <span className="text-purple-700 font-bold">100% Impartial</span>
              </div>
              <div className="text-[11px] font-mono text-[#4b5563] bg-purple-50/70 p-2 rounded border border-purple-100 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Zero obligation feasibility appraisal</span>
              </div>
            </div>
          </div>

          {/* CARD 06: Ideas & Endless Concepts */}
          <div
            id="feature-card-concepts"
            onMouseEnter={() => setActiveTab(5)}
            className="group relative bg-white border border-[#e5e7eb] p-7 sm:p-8 rounded-sm transition-all duration-300 hover:border-[#111827] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#d1d5db] group-hover:text-[#D01020] transition-colors">+</span>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-[#9ca3af] tracking-wider">
                  [06 / BESPOKE]
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded">
                  MULTIPLE SCHEMES
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-6 group-hover:bg-[#D01020] group-hover:scale-105 transition-all duration-300 shadow-md">
                <Lightbulb className="w-7 h-7" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-sans font-bold text-[#111827] group-hover:text-[#D01020] transition-colors mb-2.5">
                Endless Bespoke Concepts
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                Never settled on the first standard sketch. We provide multiple creative design directions—from open-plan wraps to cantilevered balconies and courtyard atriums.
              </p>
            </div>

            {/* Special Typology Tag Row */}
            <div className="pt-4 border-t border-[#f3f4f6] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Options Explored</span>
                <span className="text-rose-600 font-bold">3+ Layout Options</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Wraparound</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Vaulted Dormer</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] rounded">Crittall Glass</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white border border-[#e5e7eb] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#111827]">
              Want to see how these advantages apply to your home?
            </h4>
            <p className="text-xs sm:text-sm text-[#6b7280]">
              Book an initial discovery consultation with an ACHITEX chartered residential architect.
            </p>
          </div>
          <Link
            id="features-book-consultation"
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-[#D01020] text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#b00d1b] transition-all shadow-sm active:scale-95 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
