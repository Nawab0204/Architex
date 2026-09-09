import React, { useState } from 'react';

interface LogoProps {
  isDarkBackground?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ isDarkBackground = false, className = '', showSubtitle = true }: LogoProps) {
  const [customImgLoaded, setCustomImgLoaded] = useState(false);
  const [customImgError, setCustomImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* If user uploaded a custom logo at /custom-logo.png or /custom-logo.svg */}
      {!customImgError && (
        <img
          src="/custom-logo.png"
          alt="Real Life Architecture"
          className={`h-9 sm:h-11 w-auto object-contain ${customImgLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setCustomImgLoaded(true)}
          onError={() => setCustomImgError(true)}
        />
      )}

      {/* Primary SVG Vector Logo - Real Life Architecture */}
      {(!customImgLoaded || customImgError) && (
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Stylized Architectural Monogram Mark */}
          <div className="relative flex items-center justify-center h-8 sm:h-9 aspect-square shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              {/* Outer structural frame */}
              <rect x="6" y="6" width="88" height="88" stroke="#C51B18" strokeWidth="6" />
              {/* Internal diagonal cantilever beam */}
              <line x1="6" y1="6" x2="94" y2="94" stroke="#C51B18" strokeWidth="4" />
              {/* Vertical section datum */}
              <line x1="50" y1="6" x2="50" y2="94" stroke={isDarkBackground ? '#ffffff' : '#1a1a1a'} strokeWidth="3" strokeDasharray="6 4" />
              {/* Solid focal node */}
              <circle cx="50" cy="50" r="8" fill="#C51B18" />
            </svg>
          </div>

          {/* Thin Vertical Accent Divider */}
          <div className="h-7 sm:h-8 flex items-center shrink-0">
            <div className="w-[1.5px] h-full bg-[#C51B18] relative flex items-center justify-center">
              <span className="w-1.5 h-2 bg-[#C51B18] rounded-full" />
            </div>
          </div>

          {/* Brand Typography */}
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs sm:text-sm font-bold tracking-[0.16em] uppercase font-sans transition-colors ${
                  isDarkBackground ? 'text-[#FBFBF9]' : 'text-[#111111]'
                }`}
              >
                REAL LIFE ARCHITECTURE
              </span>
            </div>

            {showSubtitle && (
              <span
                className={`text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase mt-1 transition-colors ${
                  isDarkBackground ? 'text-white/70' : 'text-[#70706B]'
                }`}
              >
                BIRMINGHAM • ARCHITECTURE & PLANNING
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
