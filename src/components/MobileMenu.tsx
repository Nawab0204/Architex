import React, { useEffect, useState } from 'react';
import { Link } from '../context/NavigationContext';
import { X, ArrowRight, Phone, Mail, MapPin, ChevronDown, Compass, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const [aboutExpanded, setAboutExpanded] = useState(true);

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
  const isPortfolioActive =
    currentPath === '/portfolio' ||
    currentPath === '/projects' ||
    currentPath === '/index' ||
    currentPath.startsWith('/projects/') ||
    currentPath.startsWith('/project/');
  const isAboutActive =
    currentPath === '/about' ||
    currentPath === '/process' ||
    currentPath === '/insights' ||
    currentPath.startsWith('/insights/') ||
    currentPath === '/blog' ||
    currentPath === '/blogs' ||
    currentPath.startsWith('/blog/') ||
    currentPath === '/faq';
  const isContactActive = currentPath === '/contact';

  const aboutSubItems = [
    { label: 'About Practice', href: '/about', icon: Compass, desc: 'Ethos & RIBA Stages' },
    { label: 'Insights & Guides', href: '/insights', icon: BookOpen, desc: 'Planning & Regulations' },
    { label: 'Architectural Blogs', href: '/blog', icon: FileText, desc: 'Articles & Design Studies' },
    { label: 'Frequently Asked Questions', href: '/faq', icon: HelpCircle, desc: 'Costs & Process' },
  ];

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 flex flex-col bg-[#171717] text-white overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top bar inside mobile overlay */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-[#2A2A2A]">
        <Logo isDarkBackground={true} />
        <button
          id="close-mobile-menu-btn"
          type="button"
          onClick={onClose}
          className="p-2 text-[#f4f1ea]/80 hover:text-white rounded hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation links */}
      <div className="flex-1 px-6 sm:px-10 py-8 flex flex-col justify-between">
        <nav className="space-y-4" aria-label="Mobile Menu Links">
          {/* 1. SERVICES */}
          <div className="border-b border-[#262626] pb-3">
            <Link
              id="mobile-nav-services"
              href="/services"
              onClick={onClose}
              className="flex items-center justify-between group py-1"
            >
              <span className={`font-serif text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                isServicesActive ? 'text-[#f4f1ea] font-medium' : 'text-[#CCCCCC] group-hover:text-[#f4f1ea]'
              }`}>
                SERVICES
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#777777] font-mono">01</span>
                <ArrowRight className="w-4 h-4 text-[#777777] group-hover:text-[#f4f1ea] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>

          {/* 2. PORTFOLIO */}
          <div className="border-b border-[#262626] pb-3">
            <Link
              id="mobile-nav-portfolio"
              href="/portfolio"
              onClick={onClose}
              className="flex items-center justify-between group py-1"
            >
              <span className={`font-serif text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                isPortfolioActive ? 'text-[#f4f1ea] font-medium' : 'text-[#CCCCCC] group-hover:text-[#f4f1ea]'
              }`}>
                PORTFOLIO
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#777777] font-mono">02</span>
                <ArrowRight className="w-4 h-4 text-[#777777] group-hover:text-[#f4f1ea] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>

          {/* 3. ABOUT US (Expandable Accordion) */}
          <div className="border-b border-[#262626] pb-3">
            <button
              type="button"
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="w-full flex items-center justify-between group py-1 text-left"
            >
              <span className={`font-serif text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                isAboutActive ? 'text-[#f4f1ea] font-medium' : 'text-[#CCCCCC] group-hover:text-[#f4f1ea]'
              }`}>
                ABOUT US
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#777777] font-mono">03</span>
                <ChevronDown className={`w-4 h-4 text-[#777777] transition-transform duration-200 ${
                  aboutExpanded ? 'rotate-180 text-[#C51B18]' : ''
                }`} />
              </div>
            </button>

            {aboutExpanded && (
              <div className="mt-3 pl-3 space-y-2 border-l border-[#333333]">
                {aboutSubItems.map((sub) => {
                  const SubIcon = sub.icon;
                  const isSubActive = currentPath === sub.href;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className={`flex items-center gap-2.5 py-1.5 text-xs font-mono tracking-wider transition-colors ${
                        isSubActive ? 'text-[#C51B18] font-bold' : 'text-[#AAAAAA] hover:text-white'
                      }`}
                    >
                      <SubIcon className="w-3.5 h-3.5 shrink-0 text-[#C51B18]" />
                      <span>{sub.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* 4. CONTACT */}
          <div className="border-b border-[#262626] pb-3">
            <Link
              id="mobile-nav-contact"
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between group py-1"
            >
              <span className={`font-serif text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                isContactActive ? 'text-[#f4f1ea] font-medium' : 'text-[#CCCCCC] group-hover:text-[#f4f1ea]'
              }`}>
                CONTACT
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#777777] font-mono">04</span>
                <ArrowRight className="w-4 h-4 text-[#777777] group-hover:text-[#f4f1ea] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </nav>

        {/* Action & Contact Section */}
        <div className="mt-8 pt-6 border-t border-[#262626] space-y-4">
          <div className="space-y-2 text-xs text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C51B18]" />
              <span>Birmingham Studio & West Midlands</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C51B18]" />
              <a href="mailto:studio@reallifearchitecture.co.uk" className="hover:text-white transition-colors">
                studio@reallifearchitecture.co.uk
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C51B18]" />
              <a href="tel:+441212000000" className="hover:text-white transition-colors">
                +44 (0)121 200 0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
