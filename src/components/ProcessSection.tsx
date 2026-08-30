import React from 'react';
import { PROCESS_STEPS } from '../data/process';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProcessSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="process-section" className="py-20 sm:py-28 lg:py-32 bg-[#F7F5F0]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="OUR PROCESS"
            title="A structured, six-stage architectural roadmap."
            description="From your first sketch to on-site handover, we guide every stage of design and approvals with transparent clarity."
            className="mb-0"
          />

          {showCta && (
            <Link
              id="process-view-details-link"
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#B08D57] transition-colors group shrink-0"
            >
              <span>Explore Process Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* 6 Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] border border-[#E5E2DC] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#D4CFC5] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4]">
                  <span className="font-mono text-2xl font-light text-[#B08D57]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#888888]">
                    Stage {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-normal text-[#171717] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#B08D57]">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#6A6A6A] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-[#F0ECE4] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] block">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#555555]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
