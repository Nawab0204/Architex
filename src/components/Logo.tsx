import React from 'react';

interface LogoProps {
  isDarkBackground?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ isDarkBackground = false, className = '', showSubtitle = true }: LogoProps) {
  const textColor = isDarkBackground ? '#ffffff' : '#111111';

  return (
    <div
      id="brand-logo-achitex"
      className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}
      title="ACHITEX — Architecture | Design | Engineering"
    >
      {/* Exact Red Stylized R Emblem from the uploaded brand identity */}
      <div className="relative h-8 sm:h-10 aspect-[100/78] shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 78"
          className="h-full w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#D01020">
            {/* Left vertical stem with distinctive 45-degree angled top cut */}
            <path d="M 6 26 L 28 4 L 28 74 L 6 74 Z" />
            {/* Upper loop / bowl of R */}
            <path d="M 28 4 L 56 4 C 74 4 86 14 86 30 C 86 44 74 50 58 50 L 28 50 Z M 28 17 L 52 17 C 62 17 69 21 69 30 C 69 38 62 40 52 40 L 28 40 Z" />
            {/* Lower diagonal leg of R with angled foot */}
            <path d="M 44 46 L 72 74 L 92 74 L 60 44 Z" />
          </g>
        </svg>
      </div>

      {/* Vertical Red Accent Divider with Center Indicator Node */}
      <div className="h-7 sm:h-9 flex items-center shrink-0">
        <div className="w-[1.5px] sm:w-[2px] h-full bg-[#D01020] relative flex items-center justify-center">
          <span className="w-1.5 h-2 sm:h-2.5 bg-[#D01020] rounded-[1px]" />
        </div>
      </div>

      {/* Brand Typography: ACHITEX with 3-bar red E */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center tracking-[0.24em] font-sans font-bold text-base sm:text-lg">
          <span style={{ color: textColor }}>ACHIT</span>
          {/* 3 Red Horizontal Parallel Bars for the 'E' in ACHITEX */}
          <div className="flex flex-col justify-between h-3.5 sm:h-4 w-3 sm:w-3.5 mx-1 shrink-0 py-[1px]">
            <span className="w-full h-[2px] bg-[#D01020] rounded-[0.5px]" />
            <span className="w-full h-[2px] bg-[#D01020] rounded-[0.5px]" />
            <span className="w-full h-[2px] bg-[#D01020] rounded-[0.5px]" />
          </div>
          <span style={{ color: textColor }}>X</span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[7px] sm:text-[8.5px] font-sans font-semibold tracking-[0.2em] uppercase mt-1">
            <span style={{ color: textColor }}>ARCHITECTURE</span>
            <span className="text-[#D01020] font-black">|</span>
            <span style={{ color: textColor }}>DESIGN</span>
            <span className="text-[#D01020] font-black">|</span>
            <span style={{ color: textColor }}>ENGINEERING</span>
          </div>
        )}
      </div>
    </div>
  );
}
