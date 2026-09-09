import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface CTASectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: 'dark' | 'neutral';
}

export function CTASection({
  id = 'consultation-cta-section',
  title = 'Turn your ideas into a space worth living in.',
  subtitle = 'Tell us about your project and start a conversation with RA Architects. We are here to guide you through feasibility, design, planning and delivery.',
  primaryButtonText = 'Start a Project',
  secondaryButtonText = 'Contact Us',
  variant = 'dark',
}: CTASectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 lg:py-32 relative overflow-hidden ${
        isDark ? 'bg-[#1a1a1a] text-[#f4f1ea]' : 'bg-[#e8e4d8] text-[#1a1a1a] border-y border-[#dcd8cc]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className={`inline-block w-6 h-[1px] ${isDark ? 'bg-[#f4f1ea]' : 'bg-[#1a1a1a]'}`} />
              <span className={`text-[11px] font-semibold tracking-[0.25em] uppercase ${
                isDark ? 'text-[#c5beb3]' : 'text-[#736e65]'
              }`}>
                COMMENCE YOUR PROJECT
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.12] text-balance">
              {title}
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-light ${
              isDark ? 'text-[#c5beb3]' : 'text-[#4a4740]'
            }`}>
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                id={`${id}-primary-btn`}
                href="/contact"
                className={`inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all group ${
                  isDark
                    ? 'bg-[#f4f1ea] text-[#1a1a1a] hover:bg-white'
                    : 'bg-[#1a1a1a] text-[#f4f1ea] hover:bg-[#333333]'
                }`}
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                id={`${id}-secondary-btn`}
                href="/contact"
                className={`inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] border transition-all ${
                  isDark
                    ? 'border-white/30 text-[#f4f1ea] hover:bg-white/10 hover:border-white'
                    : 'border-[#1a1a1a]/30 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 hover:border-[#1a1a1a]'
                }`}
              >
                <span>{secondaryButtonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Practice Info Card */}
          <div className="lg:col-span-4">
            <div className={`p-8 border shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)] ${
              isDark
                ? 'bg-[#222222] border-[#333333]'
                : 'bg-[#ffffff] border-[#dcd8cc]'
            } space-y-5`}>
              <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#736e65]">
                BIRMINGHAM STUDIO
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-light ${isDark ? 'text-[#c5beb3]' : 'text-[#5c5850]'}`}>
                Serving Birmingham, Solihull, Sutton Coldfield, Edgbaston, Harborne, and the wider West Midlands.
              </p>

              <div className="space-y-3 pt-3 border-t border-[#dcd8cc]/40">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-[#736e65] shrink-0" />
                  <a href="mailto:studio@raarchitects.co.uk" className="hover:underline">
                    studio@raarchitects.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Phone className="w-4 h-4 text-[#736e65] shrink-0" />
                  <a href="tel:+441212000000" className="hover:underline">
                    +44 (0)121 200 0000
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#736e65] shrink-0" />
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
