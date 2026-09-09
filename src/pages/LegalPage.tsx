import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from '../context/NavigationContext';

export function LegalPage({ type }: { type: 'privacy' | 'cookies' | 'terms' }) {
  const titles = {
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms & Conditions',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8 py-10 sm:py-16">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              LEGAL & COMPLIANCE • PRACTICE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#1a1a1a] mb-8">
            {titles[type]}
          </h1>

          <div className="bg-white border border-[#dcd8cc] p-8 sm:p-12 space-y-6 text-sm sm:text-base text-[#4a4740] leading-relaxed font-light shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
            <p className="font-mono text-xs text-[#736e65]">Last updated: January 2026</p>

            {type === 'privacy' && (
              <>
                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">1. Information We Collect</h2>
                <p>
                  Real Life Architecture collects personal information that you voluntarily provide when submitting enquiry forms through our website (such as your name, email address, telephone number, site location, and project briefs).
                </p>

                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">2. How We Use Your Information</h2>
                <p>
                  We use your contact details solely to evaluate your architectural enquiry, respond to questions, schedule site consultations, and provide tailored fee proposals. We do not sell or distribute your data to third parties for marketing purposes.
                </p>

                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">3. Data Security & Retention</h2>
                <p>
                  All project documents and personal data are handled in strict accordance with UK GDPR and Data Protection regulations.
                </p>
              </>
            )}

            {type === 'cookies' && (
              <>
                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files placed on your device to ensure basic website functionality, navigation preferences, and anonymous performance analytics.
                </p>

                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">2. Managing Cookies</h2>
                <p>
                  You may configure your browser settings to decline cookies if preferred. Essential cookies required for basic navigation will continue to function.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">1. Website Terms of Use</h2>
                <p>
                  All architectural drawings, project photographs, renders, and written content displayed on this website are the intellectual property of Real Life Architecture or used with client consent. No content may be reproduced without prior written permission.
                </p>

                <h2 className="font-serif text-xl font-normal text-[#1a1a1a] pt-4">2. Architectural Consultations & Proposals</h2>
                <p>
                  Information on this website is for general informational purposes. Formal architectural appointments and statutory services are governed by written appointment contracts agreed with individual clients.
                </p>
              </>
            )}

            <div className="pt-6 border-t border-[#dcd8cc] text-xs font-mono text-[#736e65]">
              For any questions regarding our policies, please contact <a href="mailto:studio@architex.co.uk" className="underline text-[#1a1a1a]">studio@architex.co.uk</a>.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
