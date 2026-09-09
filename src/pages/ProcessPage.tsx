import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROCESS_STEPS } from '../data/process';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../context/NavigationContext';

export function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              METHODOLOGY • 6-STAGE FRAMEWORK
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Our Architectural Process
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            A transparent, six-stage framework ensuring creative rigor, cost certainty, and seamless statutory approvals from initial ideas to on-site delivery.
          </p>
        </div>

        {/* In-depth 6-Stage Timeline Breakdown */}
        <div className="py-16 sm:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="bg-white border border-[#dcd8cc] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]"
            >
              <div className="lg:col-span-4 space-y-3 pb-6 lg:pb-0 lg:border-r border-[#dcd8cc] lg:pr-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-4xl font-bold text-[#1a1a1a]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65]">
                    STAGE {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#736e65]">
                  {step.subtitle}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-base text-[#4a4740] leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-[#dcd8cc]/50 space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a] block">
                    Key Outputs & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5c5850]">
                        <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <CTASection
          id="process-page-cta"
          title="Ready to begin Stage 01 with Real Life Architecture?"
          subtitle="Book your initial consultation to review your property brief and discuss feasibility."
        />
      </main>

      <Footer />
    </div>
  );
}
