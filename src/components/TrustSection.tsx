import React from 'react';
import { Award, ShieldCheck, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export function TrustSection() {
  const credentials = [
    {
      badge: 'ARB',
      label: '[ARB Registered Architects]',
      subtext: 'Regulated statutory practice standards'
    },
    {
      badge: 'MEMBERSHIP',
      label: '[Professional Membership]',
      subtext: 'Committed to architectural excellence'
    },
    {
      badge: 'PLANNING',
      label: '[Planning Expertise]',
      subtext: 'High statutory council approval rate'
    },
    {
      badge: 'EXPERIENCE',
      label: '[10+ Years Experience]',
      subtext: 'Proven UK residential track record'
    }
  ];

  return (
    <section id="trust-section" className="py-8 sm:py-12 bg-[#ffffff] border-y border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Main Statement */}
          <div className="lg:max-w-md text-center lg:text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#736e65] block mb-1.5">
              TRUST &amp; CREDIBILITY
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal tracking-tight leading-snug">
              Architecture, planning and design expertise under one roof.
            </p>
          </div>

          {/* Credentials Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="bg-[#f4f1ea] border border-[#dcd8cc] px-4 py-3 rounded-none flex flex-col justify-center items-center text-center hover:border-[#1a1a1a] transition-colors"
              >
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#736e65] mb-1">
                  {cred.badge}
                </span>
                <span className="text-xs font-semibold text-[#1a1a1a] tracking-tight">
                  {cred.label}
                </span>
                <span className="text-[10px] text-[#5c5850] font-light mt-0.5 hidden sm:block">
                  {cred.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
