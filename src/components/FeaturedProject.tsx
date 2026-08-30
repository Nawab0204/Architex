import React from 'react';
import { PROJECTS } from '../data/projects';
import { Link } from '../context/NavigationContext';
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';

export function FeaturedProject() {
  const latestProject = PROJECTS.find((p) => p.latest) || PROJECTS[0];

  return (
    <section id="latest-project-section" className="py-20 sm:py-28 lg:py-32 bg-[#ffffff] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                OUR LATEST PROJECT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#1a1a1a]">
              See what we've been working on.
            </h2>
          </div>

          <Link
            id="view-all-projects-header-link"
            href="/projects"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Large Featured Project Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f4f1ea] border border-[#dcd8cc] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.04)]">
          {/* Large Image Showcase */}
          <div className="lg:col-span-7">
            <Link
              id="latest-project-image-link"
              href={`/projects/${latestProject.slug}`}
              className="block relative overflow-hidden bg-[#e8e4d8] aspect-[16/10] sm:aspect-[16/9] border border-[#dcd8cc] group"
            >
              <img
                src={latestProject.image}
                alt={latestProject.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 backdrop-blur-sm px-3.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] border border-[#dcd8cc]">
                {latestProject.category}
              </div>
            </Link>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-4 text-[11px] font-mono text-[#736e65]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1a1a1a]" />
                  {latestProject.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1a1a1a]" />
                  {latestProject.year}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1a1a1a] tracking-tight">
                {latestProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-[#736e65]">
                {latestProject.subtitle}
              </p>
            </div>

            <p className="text-base text-[#5c5850] leading-relaxed font-light">
              {latestProject.description}
            </p>

            {/* Quick Specs */}
            <div className="space-y-2.5 pt-4 border-t border-[#dcd8cc]">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] block">Services Provided</span>
              <div className="flex flex-wrap gap-2">
                {latestProject.specifications.servicesProvided.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-[#ffffff] border border-[#dcd8cc] text-[#4a4740]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                id="latest-project-view-btn"
                href={`/projects/${latestProject.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all group"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
