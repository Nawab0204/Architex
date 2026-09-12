import React from 'react';

export function StatsSection() {
  const stats = [
    {
      value: '10+',
      label: 'Years of Experience',
      sublabel: 'Guiding UK residential clients'
    },
    {
      value: '150+',
      label: 'Projects Delivered',
      sublabel: 'Extensions, lofts & bespoke builds'
    },
    {
      value: '98%',
      label: 'Planning Approval Rate',
      sublabel: 'First-time council consents'
    },
    {
      value: '100%',
      label: 'Bespoke Architectural Design',
      sublabel: 'Tailored to how you live'
    }
  ];

  return (
    <section id="statistics-section" className="py-16 sm:py-20 bg-[#ffffff] border-y border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#dcd8cc]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1a1a1a] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#1a1a1a] mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#736e65] font-light">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
