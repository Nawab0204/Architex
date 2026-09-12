import React from 'react';
import arbLogo from '../assets/images/Architects-registration-board-300x79.png';
import smarterPlanningLogo from '../assets/images/smarter-planning.png';
import charteredTownPlannersLogo from '../assets/images/chartered-town-planners-300x96.png';

export function AccreditationsBar() {
  const logos = [
    {
      id: 'arb-logo',
      name: 'Architects Registration Board',
      src: arbLogo,
      alt: 'Architects Registration Board Logo',
      link: 'https://arb.org.uk',
      maxWidth: 'max-w-[210px] sm:max-w-[240px]'
    },
    {
      id: 'smarter-planning-logo',
      name: 'Smarter Planning Champion',
      src: smarterPlanningLogo,
      alt: 'Smarter Planning Champion Logo',
      link: 'https://www.planningportal.co.uk',
      maxWidth: 'max-w-[170px] sm:max-w-[195px]'
    },
    {
      id: 'chartered-town-planners-logo',
      name: 'RTPI Chartered Town Planner',
      src: charteredTownPlannersLogo,
      alt: 'Chartered Town Planners RTPI Logo',
      link: 'https://www.rtpi.org.uk',
      maxWidth: 'max-w-[210px] sm:max-w-[240px]'
    }
  ];

  return (
    <section
      id="official-accreditations-bar"
      className="bg-[#ffffff] border-y border-[#e5e7eb] py-8 sm:py-10 w-full relative z-10"
      aria-label="Official UK Architectural and Town Planning Accreditations"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 sm:gap-10 lg:gap-16">
          {logos.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 opacity-90 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#D01020] focus:ring-offset-2 rounded"
              title={item.name}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`h-12 sm:h-14 lg:h-16 w-auto ${item.maxWidth} object-contain`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
