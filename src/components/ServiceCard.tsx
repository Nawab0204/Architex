import React from 'react';
import { Service } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index?: number;
  key?: React.Key;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      id={`service-card-${service.slug}`}
      className="group flex flex-col bg-[#ffffff] border border-[#dcd8cc] overflow-hidden transition-all duration-300 hover:border-[#1a1a1a] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]"
    >
      {/* Large Card Image */}
      <Link
        href={`/services/${service.slug}`}
        className="block relative overflow-hidden bg-[#e8e4d8] aspect-[16/10] sm:aspect-[4/3]"
        aria-label={`View ${service.title} details`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {index !== undefined && (
          <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-bold text-[#1a1a1a] border border-[#dcd8cc]">
            0{index + 1}
          </div>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#736e65] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#5c5850] leading-relaxed font-light">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-[#dcd8cc] flex items-center justify-between">
          <Link
            id={`service-link-${service.slug}`}
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-[#736e65] transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <span className="text-[10px] font-mono text-[#736e65] uppercase tracking-wider">
            {service.deliverables.length} Scope Items
          </span>
        </div>
      </div>
    </article>
  );
}
