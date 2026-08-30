import React, { useEffect } from 'react';
import { Link } from '../context/NavigationContext';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, currentPath }: MobileMenuProps) {
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

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 flex flex-col bg-[#171717] text-white overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top bar inside mobile overlay */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-2.5">
          <span className="font-serif text-2xl font-semibold uppercase tracking-tight text-[#f4f1ea]">ARCHITEX</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A0A0A0] px-2 py-0.5 border border-[#333333]">
            Birmingham
          </span>
        </div>
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
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
            return (
              <div key={link.href} className="border-b border-[#262626] pb-3">
                <Link
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between group py-1"
                >
                  <span className={`font-serif text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                    isActive ? 'text-[#f4f1ea] font-medium' : 'text-[#CCCCCC] group-hover:text-[#f4f1ea]'
                  }`}>
                    {link.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#777777] font-mono">0{idx + 1}</span>
                    <ArrowRight className="w-4 h-4 text-[#777777] group-hover:text-[#f4f1ea] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Action & Contact Section */}
        <div className="mt-8 pt-6 border-t border-[#262626] space-y-6">
          <Link
            id="mobile-start-project-cta"
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#f4f1ea] text-[#1a1a1a] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-2.5 text-xs text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Birmingham & West Midlands, United Kingdom</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
              <a href="mailto:studio@architex.co.uk" className="hover:text-white transition-colors">
                studio@architex.co.uk
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
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
