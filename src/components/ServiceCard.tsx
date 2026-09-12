import React from 'react';
import { Service } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowRight, CheckCircle2, Sparkles, FileCheck, Layers, HelpCircle, Compass } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index?: number;
  key?: React.Key;
}

const iconMap: Record<string, React.ElementType> = {
  Compass: Compass,
  HelpCircle: HelpCircle,
  Sparkles: Sparkles,
  FileCheck: FileCheck,
  Layers: Layers
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Compass;

  return (
    <article
      id={`service-card-${service.slug}`}
      className="group bg-[#ffffff] border border-[#e5e7eb] overflow-hidden transition-all duration-300 hover:border-[#111827] hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] rounded-sm flex flex-col md:flex-row w-full h-full"
    >
      {/* Much Larger, Bright, Expanded Image Container */}
      <Link
        href={`/services/${service.slug}`}
        className="block relative overflow-hidden bg-[#f3f4f6] md:w-1/2 lg:w-7/12 shrink-0 aspect-[16/10] md:aspect-auto min-h-[260px] md:min-h-[340px]"
        aria-label={`View ${service.title} architectural details`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[1.02] contrast-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Architectural Index Badge */}
        {index !== undefined && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold text-[#111827] border border-[#e5e7eb] rounded shadow-sm tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D01020]" />
            <span>0{index + 1}</span>
          </div>
        )}

        {/* Floating Quick View Tag */}
        <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-semibold text-white rounded tracking-widest uppercase">
          ACHITEX &bull; {service.deliverables.length} DELIVERABLES
        </div>
      </Link>

      {/* Expanded, Clean, Refined Text Details (Smaller, sharper typography) */}
      <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
              RESIDENTIAL SERVICE
            </span>
            <IconComponent className="w-4 h-4 text-[#9ca3af] group-hover:text-[#D01020] transition-colors" />
          </div>

          <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111827] tracking-tight group-hover:text-[#D01020] transition-colors">
            {service.title}
          </h3>

          <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-light">
            {service.shortDescription}
          </p>

          {/* Key Deliverables Highlights in Compact Sharp Style */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="pt-2 border-t border-[#f3f4f6] space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9ca3af] block">
                WHAT YOU RECEIVE:
              </span>
              {service.deliverables.slice(0, 2).map((del, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#374151]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D01020] shrink-0 mt-0.5" />
                  <span className="line-clamp-1 font-normal text-[11.5px] leading-snug">{del}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between">
          <Link
            id={`service-link-${service.slug}`}
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#111827] group-hover:text-[#D01020] transition-colors"
          >
            <span>Explore Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#D01020]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
