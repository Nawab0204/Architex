import React from 'react';
import { ContactForm } from './ContactForm';
import { MapPin, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function HomeContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e2d9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-[2px] bg-[#D01020]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111111] tracking-tight">
                Let's talk about what you're planning.
              </h2>

              <p className="text-sm sm:text-base text-[#5c5850] font-light leading-relaxed">
                Whether you have an exact vision or just want to explore what is possible on your site, our residential architects are ready to guide you.
              </p>
            </div>

            {/* Direct Studio Details Card */}
            <div className="bg-[#fbfaf7] border border-[#e5e2d9] p-6 sm:p-7 space-y-5 rounded-sm">
              {/* Telephone */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-[#e5e2d9]">
                <div className="w-9 h-9 rounded-sm bg-white border border-[#e5e2d9] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D01020]" />
                </div>
                <div className="space-y-0.5 text-sm">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#706c64] block">
                    Direct Telephone
                  </span>
                  <a href="tel:01212854140" className="text-base font-bold text-[#111111] hover:text-[#D01020] block">
                    0121 285 4140
                  </a>
                  <p className="text-xs text-[#706c64]">Free initial phone consultation</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-[#e5e2d9]">
                <div className="w-9 h-9 rounded-sm bg-white border border-[#e5e2d9] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#D01020]" />
                </div>
                <div className="space-y-0.5 text-sm">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#706c64] block">
                    Email Address
                  </span>
                  <a href="mailto:studio@realisearchitecture.co.uk" className="text-sm font-semibold text-[#111111] hover:text-[#D01020] block break-all">
                    studio@realisearchitecture.co.uk
                  </a>
                  <p className="text-xs text-[#706c64]">We respond within 1–2 business days</p>
                </div>
              </div>

              {/* Studio Location */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-[#e5e2d9]">
                <div className="w-9 h-9 rounded-sm bg-white border border-[#e5e2d9] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D01020]" />
                </div>
                <div className="space-y-0.5 text-sm">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#706c64] block">
                    Studio Address
                  </span>
                  <p className="text-sm font-medium text-[#111111]">
                    Victoria House, 114–116 Colmore Row
                  </p>
                  <p className="text-xs text-[#5c5850]">Birmingham B3 3BD, United Kingdom</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-white border border-[#e5e2d9] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#D01020]" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-mono font-bold uppercase tracking-wider text-[#706c64] block">
                    Working Hours
                  </span>
                  <div className="flex justify-between gap-4 text-[#111111]">
                    <span>Monday – Friday:</span>
                    <span className="font-semibold">08:30 – 17:30</span>
                  </div>
                  <div className="flex justify-between gap-4 text-[#111111]">
                    <span>Saturday:</span>
                    <span className="font-medium text-[#706c64]">By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Google reCAPTCHA */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
