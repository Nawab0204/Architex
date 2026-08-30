import React from 'react';
import { CheckCircle2, Shield, FileCheck, Compass } from 'lucide-react';

export function TrustSection() {
  const commitments = [
    {
      title: 'Planning Policy Fluency',
      description: 'Extensive familiarity with Birmingham City Council and West Midlands planning frameworks.',
    },
    {
      title: 'UK Building Regs Compliant',
      description: 'Rigorous technical detailing adhering to current Part L, Part B, and statutory standards.',
    },
    {
      title: 'Structured RIBA Alignment',
      description: 'Phased workflows ensuring transparent deliverables, cost certainty, and design sign-offs.',
    },
    {
      title: 'Client-Centric Collaboration',
      description: 'Dedicated architectural communication and direct principal involvement throughout.',
    },
  ];

  return (
    <section id="trust-section" className="py-14 sm:py-18 bg-[#ffffff] border-y border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Statement */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#dcd8cc] pb-6 lg:pb-0 lg:pr-8">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#736e65] block mb-2">
              PRACTICE STANDARDS • VERIFIED
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight leading-snug">
              Committed to architectural integrity, statutory compliance, and thoughtful craftsmanship.
            </h3>
          </div>

          {/* 4 Clean Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {commitments.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 bg-[#f4f1ea] border border-[#dcd8cc] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5c5850] leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
