import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'
      } ${className}`}
    >
      {label && (
        <div
          className={`flex items-center gap-2.5 mb-3.5 ${
            align === 'center' ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className={`inline-block w-6 h-[1px] ${dark ? 'bg-[#c5beb3]' : 'bg-[#1a1a1a]'}`} />
          <span
            className={`text-[11px] font-semibold tracking-[0.25em] uppercase ${
              dark ? 'text-[#c5beb3]' : 'text-[#736e65]'
            }`}
          >
            {label}
          </span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.12] text-balance ${
          dark ? 'text-[#f4f1ea]' : 'text-[#1a1a1a]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty font-light ${
            dark ? 'text-[#c5beb3]' : 'text-[#5c5850]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
