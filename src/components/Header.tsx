import React, { useEffect, useState } from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header({ isTransparentInitially = false }: { isTransparentInitially?: boolean }) {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  const isLightHero = !isTransparentInitially || isScrolled;

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f4f1ea]/95 backdrop-blur-md border-b border-[#dcd8cc] py-3.5 shadow-[0_2px_12px_rgba(26,26,26,0.04)]'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            id="header-logo"
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="ARCHITEX Architectural Design Homepage"
          >
            <span className={`font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.02em] uppercase transition-colors ${
              !isScrolled && isTransparentInitially ? 'text-[#f4f1ea]' : 'text-[#1a1a1a]'
            }`}>
              ARCHITEX
            </span>
            <span className={`hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 border transition-colors ${
              !isScrolled && isTransparentInitially
                ? 'text-[#f4f1ea]/80 border-white/20 bg-white/5'
                : 'text-[#736e65] border-[#dcd8cc] bg-[#f4f1ea]'
            }`}>
              BIRMINGHAM • ARCHITECTURE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.18em] transition-colors py-1 relative ${
                    isActive
                      ? !isScrolled && isTransparentInitially
                        ? 'text-white font-semibold'
                        : 'text-[#1a1a1a] font-semibold'
                      : !isScrolled && isTransparentInitially
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#736e65] hover:text-[#1a1a1a]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] transition-colors ${
                      !isScrolled && isTransparentInitially ? 'bg-white' : 'bg-[#1a1a1a]'
                    }`} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3.5">
            <Link
              id="header-start-project-btn"
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200 border ${
                !isScrolled && isTransparentInitially
                  ? 'bg-[#f4f1ea] text-[#1a1a1a] border-[#f4f1ea] hover:bg-[#e8e4d8] shadow-sm'
                  : 'bg-[#1a1a1a] text-[#f4f1ea] border-[#1a1a1a] hover:bg-[#333333]'
              }`}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 focus:outline-none transition-colors border ${
                !isScrolled && isTransparentInitially
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-[#1a1a1a] border-[#dcd8cc] hover:bg-[#1a1a1a]/5'
              }`}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={currentPath}
      />
    </>
  );
}
