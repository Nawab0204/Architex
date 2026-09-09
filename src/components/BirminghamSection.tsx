import React from 'react';
import { Link } from '../context/NavigationContext';
import { MapPin, ArrowRight, Building, Landmark, Compass, Trees } from 'lucide-react';

export function BirminghamSection() {
  const boroughs = [
    { name: 'Edgbaston & Harborne', desc: 'Conservation areas & Victorian/Edwardian villa extensions' },
    { name: 'Solihull & Barnt Green', desc: 'Contemporary new builds, bespoke green-belt residences' },
    { name: 'Jewellery Quarter & Digbeth', desc: 'Heritage conversions, commercial studios & loft redevelopments' },
    { name: 'Sutton Coldfield & Four Oaks', desc: 'Large residential remodelling & split-level additions' },
    { name: 'Moseley & Kings Heath', desc: 'Character residential renovations & eco extensions' },
    { name: 'Wider West Midlands', desc: 'Residential masterplanning & site feasibility appraisals' }
  ];

  return (
    <section id="birmingham-services-section" className="py-20 sm:py-28 lg:py-32 bg-[#ffffff] border-y border-[#dcd8cc] w-full">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                LOCAL EXPERTISE • WEST MIDLANDS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.15]">
              Architectural services in Birmingham and the West Midlands.
            </h2>

            <p className="text-base sm:text-lg text-[#4a4740] leading-relaxed font-light">
              RA Architects provides architectural design and related services in Birmingham, working with clients to develop thoughtful solutions for residential, commercial and development projects.
            </p>

            <p className="text-sm sm:text-base text-[#5c5850] leading-relaxed font-light">
              Our working knowledge of Birmingham City Council, Solihull Metropolitan Borough Council, and neighboring planning departments ensures that your project is designed with local policies, heritage contexts, and neighborhood character in mind.
            </p>

            <div className="pt-2">
              <Link
                id="birmingham-start-conversation-cta"
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all group"
              >
                <span>Discuss Your Birmingham Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Service Area Highlights Grid */}
          <div className="lg:col-span-6">
            <div className="bg-[#f4f1ea] border border-[#dcd8cc] p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1a1a1a]" /> Key Locations We Serve
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {boroughs.map((b, idx) => (
                  <div key={idx} className="p-5 bg-white border border-[#dcd8cc] space-y-1.5 shadow-[3px_3px_0px_0px_rgba(26,26,26,0.02)]">
                    <h4 className="font-serif text-base font-normal text-[#1a1a1a] tracking-tight">{b.name}</h4>
                    <p className="text-xs text-[#5c5850] leading-relaxed font-light">{b.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#dcd8cc] flex items-center justify-between text-xs font-mono text-[#736e65]">
                <span>Planning Authority Liaison Available</span>
                <span className="font-mono text-[#1a1a1a] font-bold">West Midlands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
