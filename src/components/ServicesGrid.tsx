import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function ServicesGrid({ limit }: { limit?: number }) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e7eb] w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-[2px] bg-[#D01020]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                OUR ARCHITECTURAL SERVICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111827] tracking-tight">
              Simple, transparent services for homeowners.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
              Complete residential architectural care from initial feasibility and 3D concepts to planning permission and building regulations.
            </p>
          </div>

          <Link
            id="view-all-services-link"
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#111827] hover:text-[#D01020] transition-colors group shrink-0"
          >
            <span>All Architectural Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D01020]" />
          </Link>
        </div>

        {/* Expanded, Clean, Bright Service Cards Layout */}
        <div className="space-y-6 sm:space-y-8">
          {displayedServices.map((service, idx) => (
            <div key={service.id} className="w-full">
              <ServiceCard service={service} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
