import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { MapPin, Mail, Phone, Clock, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea] text-[#1a1a1a]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Let’s talk about your project.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            Whether you are planning a rear extension, a loft dormer, a whole-house renovation, or a bespoke new build, we would love to hear from you.
          </p>
        </div>

        {/* Main 2-Column Contact Area */}
        <div className="py-12 sm:py-20 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Practice Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block">
                  PRACTICE DETAILS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
                  Real Life Architecture
                </h2>
                <p className="text-sm text-[#5c5850] leading-relaxed font-light">
                  We guide homeowners across Birmingham, Solihull, Sutton Coldfield, Edgbaston, Harborne, and the wider UK through design, planning, and building regulations.
                </p>
              </div>

              {/* Contact Channels Card */}
              <div className="bg-white border border-[#dcd8cc] p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
                {/* Phone */}
                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/60">
                  <div className="w-9 h-9 rounded bg-[#f4f1ea] border border-[#dcd8cc] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <div className="space-y-0.5 text-sm">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#736e65] block">
                      Telephone
                    </span>
                    <a href="tel:01212854420" className="text-base font-semibold text-[#1a1a1a] hover:underline block">
                      0121 285 4420
                    </a>
                    <p className="text-xs text-[#736e65] font-light">Call for a free initial chat</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/60">
                  <div className="w-9 h-9 rounded bg-[#f4f1ea] border border-[#dcd8cc] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <div className="space-y-0.5 text-sm">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#736e65] block">
                      Direct Email
                    </span>
                    <a href="mailto:studio@reallifearchitecture.co.uk" className="text-sm sm:text-base font-semibold text-[#1a1a1a] hover:underline block break-all">
                      studio@reallifearchitecture.co.uk
                    </a>
                    <p className="text-xs text-[#736e65] font-light">We respond within 1–2 business days</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/60">
                  <div className="w-9 h-9 rounded bg-[#f4f1ea] border border-[#dcd8cc] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <div className="space-y-0.5 text-sm">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#736e65] block">
                      Studio Address
                    </span>
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      Victoria House, 114–116 Colmore Row
                    </p>
                    <p className="text-xs text-[#5c5850]">Birmingham B3 3BD, United Kingdom</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#f4f1ea] border border-[#dcd8cc] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="font-mono font-bold uppercase tracking-wider text-[#736e65] block">
                      Opening Hours
                    </span>
                    <div className="flex justify-between gap-4 text-[#1a1a1a]">
                      <span>Monday – Friday:</span>
                      <span className="font-medium">08:30 – 17:30</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[#1a1a1a]">
                      <span>Saturday:</span>
                      <span className="font-medium">By appointment</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[#736e65]">
                      <span>Sunday &amp; Bank Holidays:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-[#edeae1] border border-[#dcd8cc] p-6 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#1a1a1a]">
                  What happens after you enquire?
                </h3>
                <ul className="space-y-2 text-xs text-[#5c5850] font-light">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0 text-[10px] mt-0.5">1</span>
                    <span>We review your property details, planning history, and goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0 text-[10px] mt-0.5">2</span>
                    <span>We arrange a 20-minute phone or video consultation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0 text-[10px] mt-0.5">3</span>
                    <span>You receive a clear, fixed-fee architectural proposal with itemized stages.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Clean Reassuring Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FAQSection limit={6} />
      </main>

      <Footer />
    </div>
  );
}
