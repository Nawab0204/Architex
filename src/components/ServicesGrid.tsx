import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function ServicesGrid({ limit }: { limit?: number }) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services-section" className="py-20 sm:py-28 lg:py-32 bg-[#F7F5F0] w-full">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="OUR SERVICES"
            title="Comprehensive architectural & statutory services."
            description="Discover how Real Life Architecture can guide and develop your project from initial concept through to planning approvals and construction detailing."
            className="mb-0"
          />

          {limit && (
            <Link
              id="view-all-services-link"
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#B08D57] transition-colors group shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* 3 Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
