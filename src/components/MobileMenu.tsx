import React, { useEffect, useState } from 'react';
import { Link } from '../context/NavigationContext';
import { X, ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isServicesActive = currentPath === '/services' || currentPath.startsWith('/services/');
  const isPortfolioActive = currentPath === '/projects' || currentPath.startsWith('/projects/');
  const isAboutActive = currentPath === '/about' || currentPath === '/about-us' || currentPath === '/insights' || currentPath === '/faq';
  const isContactActive = currentPath === '/contact';

  const services = [
    { title: 'Architecture services', href: '/services/all-architectural-services' },
    { title: 'Planning advice', href: '/services/planning-advice' },
    { title: 'Creative design', href: '/services/creative-design' },
    { title: 'Planning permission', href: '/services/planning-permissions' },
    { title: 'Building regulation', href: '/services/building-regulations' }
  ];

  const aboutItems = [
    { title: 'About the Business', href: '/about' },
    { title: 'Blogs', href: '/insights' },
    { title: 'Frequently Asked Questions', href: '/faq' }
  ];

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 flex flex-col bg-[#ffffff] text-[#111111] overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top bar inside mobile overlay with logo */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e2d9] bg-[#ffffff]">
        <Link
          id="mobile-logo-link"
          href="/"
          onClick={onClose}
          className="flex items-center"
        >
          <Logo isDarkBackground={false} />
        </Link>
        <button
          id="close-mobile-menu-btn"
          type="button"
          onClick={onClose}
          className="p-2 text-[#111111] rounded hover:bg-[#f5f2eb] transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation links */}
      <div className="flex-1 px-6 py-6 flex flex-col justify-between space-y-6">
        <nav className="space-y-4" aria-label="Mobile Menu Links">
          {/* 1. Our Services (Accordion) */}
          <div className="border-b border-[#e5e2d9] pb-3">
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between py-2 text-left group"
              aria-expanded={servicesExpanded}
            >
              <span
                className={`font-sans text-xl font-medium tracking-tight transition-colors ${
                  isServicesActive ? 'text-[#D01020]' : 'text-[#111111]'
                }`}
              >
                Our Services
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#8c887f] transition-transform duration-200 ${
                  servicesExpanded ? 'rotate-180 text-[#D01020]' : ''
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#D01020]">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-1.5 text-sm text-[#4a4740] hover:text-[#D01020] transition-colors"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#a8a49a]" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 2. Our Portfolio (Direct) */}
          <div className="border-b border-[#e5e2d9] pb-3">
            <Link
              id="mobile-nav-portfolio"
              href="/projects"
              onClick={onClose}
              className="flex items-center justify-between group py-2"
            >
              <span
                className={`font-sans text-xl font-medium tracking-tight transition-colors ${
                  isPortfolioActive ? 'text-[#D01020]' : 'text-[#111111]'
                }`}
              >
                Our Portfolio
              </span>
              <ArrowRight className="w-4 h-4 text-[#8c887f] group-hover:text-[#D01020] transition-all" />
            </Link>
          </div>

          {/* 3. About Us (Accordion) */}
          <div className="border-b border-[#e5e2d9] pb-3">
            <button
              type="button"
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="w-full flex items-center justify-between py-2 text-left group"
              aria-expanded={aboutExpanded}
            >
              <span
                className={`font-sans text-xl font-medium tracking-tight transition-colors ${
                  isAboutActive ? 'text-[#D01020]' : 'text-[#111111]'
                }`}
              >
                About Us
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#8c887f] transition-transform duration-200 ${
                  aboutExpanded ? 'rotate-180 text-[#D01020]' : ''
                }`}
              />
            </button>

            {aboutExpanded && (
              <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#D01020]">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-1.5 text-sm text-[#4a4740] hover:text-[#D01020] transition-colors"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#a8a49a]" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Contact Us (Direct) */}
          <div className="border-b border-[#e5e2d9] pb-3">
            <Link
              id="mobile-nav-contact"
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between group py-2"
            >
              <span
                className={`font-sans text-xl font-medium tracking-tight transition-colors ${
                  isContactActive ? 'text-[#D01020]' : 'text-[#111111]'
                }`}
              >
                Contact Us
              </span>
              <ArrowRight className="w-4 h-4 text-[#8c887f] group-hover:text-[#D01020] transition-all" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
