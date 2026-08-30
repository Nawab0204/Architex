import React from 'react';
import { Link } from '../context/NavigationContext';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Projects Portfolio', href: '/projects' },
    { label: 'Architectural Services', href: '/services' },
    { label: 'About Practice', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Insights & Guides', href: '/insights' },
    { label: 'Contact & Consultations', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Architectural Design', href: '/services/architectural-design' },
    { label: 'Planning Permission', href: '/services/planning-permission' },
    { label: 'Building Regulations', href: '/services/building-regulations' },
    { label: '3D Visualisation', href: '/services/3d-visualisation' },
    { label: 'Extensions & Renovations', href: '/services/extensions-renovations' },
    { label: 'Development & Site Design', href: '/services/development-site-design' },
  ];

  return (
    <footer id="main-footer" className="bg-[#1a1a1a] text-[#f4f1ea] border-t border-[#333333]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block focus:outline-none" aria-label="Architex Homepage">
              <span className="font-serif text-3xl font-semibold uppercase tracking-[-0.02em] text-[#f4f1ea] block">
                ARCHITEX
              </span>
              <span className="text-[10px] font-mono text-[#c5beb3] uppercase tracking-[0.2em] block mt-1">
                ARCHITECTURAL PRACTICE • BIRMINGHAM
              </span>
            </Link>

            <p className="text-sm text-[#a8a29e] leading-relaxed max-w-sm font-light">
              Thoughtful architectural design for bespoke residential homes, extensions, heritage renovations, and developments across Birmingham and the West Midlands.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8c857b]">
              <span className="w-1.5 h-1.5 bg-[#f4f1ea]" />
              <span>ACCEPTING COMMISSIONS FOR 2025/2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c5beb3]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.15em] text-[#a8a29e]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c5beb3]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.15em] text-[#a8a29e]">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c5beb3]">
              Studio
            </h4>
            <div className="space-y-3 text-xs text-[#a8a29e] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5beb3] shrink-0 mt-0.5" />
                <span>Birmingham & West Midlands, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5beb3] shrink-0" />
                <a href="mailto:studio@architex.co.uk" className="hover:text-white transition-colors">
                  studio@architex.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5beb3] shrink-0" />
                <a href="tel:+441212000000" className="hover:text-white transition-colors">
                  +44 (0)121 200 0000
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f1ea] border-b border-[#f4f1ea] pb-1 hover:text-white transition-colors"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#333333] py-6 text-[11px] font-mono text-[#8c857b]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} ARCHITEX. ALL RIGHTS RESERVED. REGISTERED IN ENGLAND & WALES.</p>

          <div className="flex items-center gap-6 uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-[#f4f1ea] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-[#f4f1ea] transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-[#f4f1ea] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
