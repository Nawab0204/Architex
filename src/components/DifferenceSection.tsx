import React from 'react';
import { DIFFERENCE_ITEMS } from '../data/difference';
import { SectionHeading } from './SectionHeading';

export function DifferenceSection() {
  return (
    <section id="difference-section" className="py-20 sm:py-28 lg:py-32 bg-[#f4f1ea] border-t border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="THE REAL LIFE ARCHITECTURE DIFFERENCE"
          title="Design that balances creativity, practicality and purpose."
          description="We take a deliberate approach to every commission, ensuring every design decision is supported by spatial reason, statutory foresight, and real-world constructability."
        />

        {/* Alternating Editorial Feature Blocks */}
        <div className="space-y-16 sm:space-y-24">
          {DIFFERENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden bg-[#e8e4d8] aspect-[16/10] sm:aspect-[16/9] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.04)] group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 backdrop-blur-sm px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] border border-[#dcd8cc]">
                      {item.tag}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-[#736e65]">
                      {item.number}
                    </span>
                    <span className="h-[1px] w-8 bg-[#dcd8cc]" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#5c5850] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
