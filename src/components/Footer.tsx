import React from 'react';
import { Link } from '../context/NavigationContext';
import { Mail, Phone, MapPin, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES } from '../data/services';

export function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'All Architectural Services', href: '/services/all-architectural-services' },
    { label: 'Planning Advice', href: '/services/planning-advice' },
    { label: 'Creative Design', href: '/services/creative-design' },
    { label: 'Planning Permissions', href: '/services/planning-permissions' },
    { label: 'Building Regulations', href: '/services/building-regulations' },
    { label: 'Our Portfolio', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer id="main-footer" className="bg-[#ffffff] text-[#111827] border-t border-[#e5e7eb] w-full">
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block focus:outline-none" aria-label="ACHITEX Homepage">
              <Logo isDarkBackground={false} />
            </Link>

            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-sm font-light">
              ACHITEX is a residential architectural and engineering practice dedicated to turning home ideas into bright, comfortable, and beautifully crafted living spaces.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#6b7280]">
              <span className="w-1.5 h-1.5 bg-[#D01020] rounded-full animate-pulse" />
              <span>CONSULTATIONS OPEN &bull; BIRMINGHAM &amp; NATIONWIDE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#111827]">
              Residential Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4b5563]">
              {SERVICES.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-[#D01020] transition-colors block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#111827]">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4b5563]">
              <li>
                <Link href="/about" className="hover:text-[#D01020] transition-colors">
                  About the Business
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#D01020] transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#D01020] transition-colors">
                  Blogs &amp; Advice
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#D01020] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D01020] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#111827]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#4b5563] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D01020] shrink-0 mt-0.5" />
                <span>Victoria House, 114–116 Colmore Row, Birmingham B3 3BD</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D01020] shrink-0" />
                <a href="mailto:studio@achitex.co.uk" className="hover:text-[#D01020] transition-colors">
                  studio@achitex.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D01020] shrink-0" />
                <a href="tel:01212854140" className="hover:text-[#D01020] font-mono font-semibold text-[#111827]">
                  0121 285 4140
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D01020] hover:bg-[#b00d1b] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
          <p>&copy; {currentYear} ACHITEX. All rights reserved. Architecture | Design | Engineering.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#D01020] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#D01020] transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
