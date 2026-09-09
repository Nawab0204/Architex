import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { MapPin, Mail, Phone, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              GET IN TOUCH • STUDIO DIALOGUE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
            Start a Conversation
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
            Tell us about your property, development site, or architectural ideas. We will arrange a consultation to discuss feasibility, planning, and design options.
          </p>
        </div>

        {/* Main 2-Column Contact Area */}
        <div className="py-16 sm:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Direct Studio Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                    BIRMINGHAM STUDIO
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
                  RA Architects
                </h2>
                <p className="text-sm sm:text-base text-[#5c5850] leading-relaxed font-light">
                  We work with homeowners, landowners, and developers across Birmingham, Solihull, Sutton Coldfield, and the wider West Midlands.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="bg-white border border-[#dcd8cc] p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/50">
                  <MapPin className="w-5 h-5 text-[#1a1a1a] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <span className="font-semibold text-[#1a1a1a] block">Practice Location</span>
                    <p className="text-[#5c5850]">Birmingham, United Kingdom</p>
                    <p className="text-xs font-mono text-[#736e65]">Covering West Midlands & surrounding counties</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/50">
                  <Mail className="w-5 h-5 text-[#1a1a1a] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <span className="font-semibold text-[#1a1a1a] block">Email Studio</span>
                    <a href="mailto:studio@architex.co.uk" className="text-[#1a1a1a] hover:text-[#736e65] underline underline-offset-4">
                      studio@architex.co.uk
                    </a>
                    <p className="text-xs font-mono text-[#736e65]">Direct principal review for all enquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-5 border-b border-[#dcd8cc]/50">
                  <Phone className="w-5 h-5 text-[#1a1a1a] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <span className="font-semibold text-[#1a1a1a] block">Telephone</span>
                    <a href="tel:+441212000000" className="text-[#1a1a1a] hover:text-[#736e65]">
                      +44 (0)121 200 0000
                    </a>
                    <p className="text-xs font-mono text-[#736e65]">Monday – Friday: 09:00 – 17:30</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#1a1a1a] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <span className="font-semibold text-[#1a1a1a] block">Consultations</span>
                    <p className="text-xs text-[#5c5850]">Initial site visits arranged across Birmingham & Solihull.</p>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-[#edeae1] border border-[#dcd8cc] p-6 space-y-3">
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                  What to Expect Next
                </h3>
                <ul className="space-y-2 text-xs text-[#5c5850]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a]" />
                    <span>Response from an architectural designer within 24–48 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a]" />
                    <span>Initial desktop planning and satellite site review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a]" />
                    <span>Clear, transparent fee breakdown tailored to your scope</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Full Functional Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
