import React, { useEffect, useState, useRef } from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

export function Header({ isTransparentInitially = false }: { isTransparentInitially?: boolean }) {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dropdown states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Timeout refs to ensure rock-solid, flicker-free hover transitions
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services hover handlers with graceful leave buffer
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(false);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  // About Us hover handlers with graceful leave buffer
  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(false);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 180);
  };

  // Close menus on path change
  useEffect(() => {
    setServicesOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const isDarkHeroText = !isScrolled && isTransparentInitially;

  const isServicesActive = currentPath === '/services' || currentPath.startsWith('/services/');
  const isPortfolioActive = currentPath === '/projects' || currentPath.startsWith('/projects/') || currentPath === '/portfolio';
  const isAboutActive = currentPath === '/about' || currentPath === '/about-us' || currentPath === '/insights' || currentPath === '/faq';
  const isContactActive = currentPath === '/contact';

  // Exactly the 5 requested services - zero clutter
  const servicesList = [
    { title: 'Architecture services', href: '/services/all-architectural-services' },
    { title: 'Planning advice', href: '/services/planning-advice' },
    { title: 'Creative design', href: '/services/creative-design' },
    { title: 'Planning permission', href: '/services/planning-permissions' },
    { title: 'Building regulation', href: '/services/building-regulations' }
  ];

  // About us items with 'Our Portfolio' removed
  const aboutList = [
    { title: 'About the Business', href: '/about' },
    { title: 'Blogs', href: '/insights' },
    { title: 'Frequently Asked Questions', href: '/faq' }
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e2d9] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : isTransparentInitially
            ? 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4 lg:py-5'
            : 'bg-[#ffffff] border-b border-[#e5e2d9] py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between w-full">
          {/* ACHITEX Official Logo linking to Home Page */}
          <Link
            id="header-home-logo-link"
            href="/"
            className="flex items-center group transition-transform active:scale-95"
            aria-label="ACHITEX Home Page"
          >
            <Logo isDarkBackground={isDarkHeroText} />
          </Link>

          {/* Desktop Navigation Links positioned on the rightmost side */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Main Navigation"
          >
            {/* 1. Our Services (Dropdown) */}
            <div
              id="nav-container-services"
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                id="nav-services-btn"
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`text-xs font-mono uppercase tracking-[0.18em] py-2 px-1 flex items-center gap-1.5 cursor-pointer transition-colors relative ${
                  isServicesActive
                    ? isDarkHeroText
                      ? 'text-white font-bold'
                      : 'text-[#111111] font-bold'
                    : isDarkHeroText
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#3d3a33] hover:text-[#111111]'
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#D01020]' : ''
                  }`}
                />
                {isServicesActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      isDarkHeroText ? 'bg-[#D01020]' : 'bg-[#D01020]'
                    }`}
                  />
                )}
              </button>

              {/* Clean, Clutter-free Dropdown - Only the 5 items */}
              <div
                className={`absolute right-0 top-full pt-2 w-[240px] transition-all duration-200 z-50 ${
                  servicesOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div
                  id="services-dropdown-panel"
                  className="bg-[#ffffff] text-[#111111] border border-[#e5e2d9] rounded-sm shadow-[0_16px_36px_rgba(0,0,0,0.08)] p-1.5 divide-y divide-[#f5f2eb]"
                  role="menu"
                >
                  <div className="flex flex-col py-0.5">
                    {servicesList.map((item, idx) => (
                      <Link
                        key={item.href}
                        id={`header-dropdown-service-${idx}`}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-sm hover:bg-[#fbfaf7] transition-colors"
                        role="menuitem"
                      >
                        <span className="text-xs font-sans font-medium text-[#111111] group-hover:text-[#D01020] transition-colors capitalize">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#b0aca2] group-hover:text-[#D01020] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Our Portfolio (Direct Button) */}
            <Link
              id="nav-link-portfolio"
              href="/projects"
              className={`text-xs font-mono uppercase tracking-[0.18em] py-2 px-1 transition-colors relative ${
                isPortfolioActive
                  ? isDarkHeroText
                    ? 'text-white font-bold'
                    : 'text-[#111111] font-bold'
                  : isDarkHeroText
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#3d3a33] hover:text-[#111111]'
              }`}
            >
              Our Portfolio
              {isPortfolioActive && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isDarkHeroText ? 'bg-[#D01020]' : 'bg-[#D01020]'
                  }`}
                />
              )}
            </Link>

            {/* 3. About Us (Dropdown - without Our Portfolio) */}
            <div
              id="nav-container-about"
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                id="nav-about-btn"
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-expanded={aboutOpen}
                aria-haspopup="true"
                className={`text-xs font-mono uppercase tracking-[0.18em] py-2 px-1 flex items-center gap-1.5 cursor-pointer transition-colors relative ${
                  isAboutActive
                    ? isDarkHeroText
                      ? 'text-white font-bold'
                      : 'text-[#111111] font-bold'
                    : isDarkHeroText
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#3d3a33] hover:text-[#111111]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutOpen ? 'rotate-180 text-[#D01020]' : ''
                  }`}
                />
                {isAboutActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      isDarkHeroText ? 'bg-[#D01020]' : 'bg-[#D01020]'
                    }`}
                  />
                )}
              </button>

              {/* Clean About Dropdown - no portfolio */}
              <div
                className={`absolute right-0 top-full pt-2 w-[240px] transition-all duration-200 z-50 ${
                  aboutOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div
                  id="about-dropdown-panel"
                  className="bg-[#ffffff] text-[#111111] border border-[#e5e2d9] rounded-sm shadow-[0_16px_36px_rgba(0,0,0,0.08)] p-1.5 divide-y divide-[#f5f2eb]"
                  role="menu"
                >
                  <div className="flex flex-col py-0.5">
                    {aboutList.map((item, idx) => (
                      <Link
                        key={item.href}
                        id={`header-dropdown-about-${idx}`}
                        href={item.href}
                        onClick={() => setAboutOpen(false)}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-sm hover:bg-[#fbfaf7] transition-colors"
                        role="menuitem"
                      >
                        <span className="text-xs font-sans font-medium text-[#111111] group-hover:text-[#D01020] transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#b0aca2] group-hover:text-[#D01020] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Contact Us (Direct Button) */}
            <Link
              id="nav-link-contact"
              href="/contact"
              className={`text-xs font-mono uppercase tracking-[0.18em] py-2 px-1 transition-colors relative ${
                isContactActive
                  ? isDarkHeroText
                    ? 'text-white font-bold'
                    : 'text-[#111111] font-bold'
                  : isDarkHeroText
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#3d3a33] hover:text-[#111111]'
              }`}
            >
              Contact Us
              {isContactActive && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isDarkHeroText ? 'bg-[#D01020]' : 'bg-[#D01020]'
                  }`}
                />
              )}
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded transition-colors focus:outline-none ${
              isDarkHeroText
                ? 'text-white hover:bg-white/10'
                : 'text-[#111111] hover:bg-[#f0ede6]'
            }`}
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Synchronized Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}
