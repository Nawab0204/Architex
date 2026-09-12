import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function ProjectTypesSection() {
  const types = [
    {
      title: 'House Extensions',
      category: 'Extensions',
      description: 'Single-storey, double-storey, and wrap-around rear extensions designed to flood homes with natural light.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      href: '/services/house-extensions',
      tag: 'Rear & Side Extensions'
    },
    {
      title: 'Loft Conversions',
      category: 'Loft Conversions',
      description: 'Dormer, mansard, and hip-to-gable roof transformations creating master suites and quiet home offices.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      href: '/services/loft-conversions',
      tag: 'Attic & Roof Suites'
    },
    {
      title: 'New Builds',
      category: 'New Builds',
      description: 'Bespoke contemporary houses and sustainable homes tailored specifically to your plot and lifestyle.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      href: '/services/new-builds',
      tag: 'Bespoke Residences'
    },
    {
      title: 'Renovations',
      category: 'Renovations',
      description: 'Whole-house remodelling, structural wall removals, and sensitive restoration of period properties.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      href: '/projects',
      tag: 'Whole-House Remodels'
    },
    {
      title: 'Interiors',
      category: 'Interiors',
      description: 'Bespoke open-plan kitchen architecture, custom timber joinery, and continuous garden flow.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      href: '/services/interior-design',
      tag: 'Kitchen & Living Spaces'
    },
    {
      title: 'Commercial',
      category: 'Commercial',
      description: 'Creative studio workspaces, boutique retail, and community gathering environments.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      href: '/projects',
      tag: 'Workplaces & Studios'
    }
  ];

  return (
    <section id="project-types-section" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="PROJECT TYPES"
            title="What types of projects do we work on?"
            description="From Victorian house extensions and modern loft dormers to bespoke private new builds, we deliver thoughtful residential design across the UK."
            className="mb-0"
          />

          <Link
            id="view-all-project-types-link"
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65] transition-colors shrink-0 group"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {types.map((type, idx) => (
            <Link
              key={idx}
              id={`project-type-${type.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              href={type.href}
              className="group bg-[#f4f1ea] border border-[#dcd8cc] overflow-hidden flex flex-col hover:border-[#1a1a1a] transition-all hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e4d8]">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#f4f1ea]/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] border border-[#dcd8cc]">
                  {type.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#736e65] transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c5850] font-light leading-relaxed mt-1.5">
                    {type.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dcd8cc] flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-[#736e65] transition-colors inline-flex items-center gap-1.5">
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
