import React from 'react';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Phone, Mail, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: 'light' | 'white';
}

export function CTASection({
  id = 'final-contact-cta-section',
  title = "Let's talk about what you're planning.",
  subtitle = "Whether you are planning a house extension, loft conversion, whole-house renovation, or bespoke new build, our team is ready to guide you from early ideas through to planning approvals and construction.",
  primaryButtonText = 'Book a Consultation',
  secondaryButtonText = 'Send an Enquiry',
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#ffffff] text-[#111827] border-y border-[#e5e7eb]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-6 h-[2px] bg-[#D01020]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#D01020]">
                HAVE A PROJECT IN MIND?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-[1.12] text-[#111827]">
              {title}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-light text-[#4b5563]">
              {subtitle}
            </p>

            {/* Direct Telephone & Email */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-mono">
              <a
                href="tel:01212854140"
                className="inline-flex items-center gap-2 font-bold text-[#111827] hover:text-[#D01020] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D01020]" />
                <span>0121 285 4140</span>
              </a>

              <a
                href="mailto:studio@achitex.co.uk"
                className="inline-flex items-center gap-2 font-medium text-[#4b5563] hover:text-[#D01020] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D01020]" />
                <span>studio@achitex.co.uk</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                id={`${id}-primary-btn`}
                href="/contact"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#D01020] text-white hover:bg-[#b00d1b] rounded-sm transition-all shadow-md group"
              >
                <Calendar className="w-4 h-4" />
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                id={`${id}-secondary-btn`}
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-xs font-mono font-semibold uppercase tracking-[0.2em] border border-[#e5e7eb] text-[#111827] hover:border-[#111827] hover:bg-[#f9fafb] rounded-sm transition-all"
              >
                <span>{secondaryButtonText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Practice Info Card on White */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-[#fafafa] border border-[#e5e7eb] rounded-sm shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#D01020] block mb-1">
                  PRACTICE LOCATION &bull; UK
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111827]">
                  ACHITEX Studio
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#4b5563]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D01020] shrink-0 mt-0.5" />
                  <div className="font-light">
                    <p className="text-[#111827] font-medium">Victoria House, 114–116 Colmore Row</p>
                    <p>Birmingham B3 3BD, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D01020] shrink-0 mt-0.5" />
                  <div className="font-light space-y-0.5">
                    <p className="text-[#111827] font-medium">Monday – Friday: 08:30 – 17:30</p>
                    <p>Saturday: By prior appointment</p>
                    <p className="text-[#9ca3af]">Sunday &amp; Bank Holidays: Closed</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e5e7eb] flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Free Initial Consultation &amp; Site Feasibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
