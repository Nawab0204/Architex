import React, { useEffect, useState, useRef } from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import { Menu, ChevronDown, BookOpen, Compass, HelpCircle, FileText } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { PROJECTS } from '../data/projects';

export function Header({ isTransparentInitially = false }: { isTransparentInitially?: boolean }) {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to dismiss dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const isDarkHeroText = !isScrolled && isTransparentInitially;

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

  const aboutDropdownItems = [
    {
      label: 'About Practice',
      subtitle: 'Ethos, Leadership, RIBA Stages & Heritage',
      href: '/about',
      icon: Compass
    },
    {
      label: 'Insights & Guides',
      subtitle: 'Planning, Conservation & Building Regulations',
      href: '/insights',
      icon: BookOpen
    },
    {
      label: 'Architectural Blogs',
      subtitle: 'Articles, Contemporary Trends & Case Studies',
      href: '/blog',
      icon: FileText
    },
    {
      label: 'Frequently Asked Questions',
      subtitle: 'Planning, Fees, Timelines & Structural Engineering',
      href: '/faq',
      icon: HelpCircle
    }
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E5E5DF] py-3.5 shadow-[0_1px_8px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-4 lg:py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Mark / Logo on leftmost corner */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              id="header-logo"
              href="/"
              className="group flex items-center focus:outline-none"
              aria-label="Real Life Architecture Homepage"
            >
              <Logo isDarkBackground={isDarkHeroText} />
            </Link>

            <span className={`hidden md:inline-block h-4 w-[1px] ${isDarkHeroText ? 'bg-white/30' : 'bg-[#E5E5DF]'}`} />

            {/* Live project count indicator */}
            <div
              id="header-catalogue-count"
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] border transition-colors ${
                isDarkHeroText
                  ? 'bg-black/30 text-white/90 border-white/20'
                  : 'bg-[#F4F4F0] text-[#70706B] border-[#E5E5DF]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#C51B18] rounded-full animate-pulse" />
              <span>[ {PROJECTS.length} WORKS CATALOGUED ]</span>
            </div>
          </div>

          {/* Desktop Navigation Links: Services -> Portfolio -> About Us (Dropdown) -> Contact */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
            {/* 1. SERVICES */}
            <Link
              id="nav-link-services"
              href="/services"
              className={`text-[11px] xl:text-[12px] font-mono tracking-[0.18em] uppercase transition-colors py-1 relative ${
                isServicesActive
                  ? isDarkHeroText
                    ? 'text-white font-semibold'
                    : 'text-[#111111] font-bold'
                  : isDarkHeroText
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#70706B] hover:text-[#111111]'
              }`}
            >
              SERVICES
              {isServicesActive && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-colors ${
                    isDarkHeroText ? 'bg-white' : 'bg-[#C51B18]'
                  }`}
                />
              )}
            </Link>

            {/* 2. PORTFOLIO */}
            <Link
              id="nav-link-portfolio"
              href="/portfolio"
              className={`text-[11px] xl:text-[12px] font-mono tracking-[0.18em] uppercase transition-colors py-1 relative ${
                isPortfolioActive
                  ? isDarkHeroText
                    ? 'text-white font-semibold'
                    : 'text-[#111111] font-bold'
                  : isDarkHeroText
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#70706B] hover:text-[#111111]'
              }`}
            >
              PORTFOLIO
              {isPortfolioActive && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-colors ${
                    isDarkHeroText ? 'bg-white' : 'bg-[#C51B18]'
                  }`}
                />
              )}
            </Link>

            {/* 3. ABOUT US (Dropdown Button) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-link-about-us"
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
                className={`text-[11px] xl:text-[12px] font-mono tracking-[0.18em] uppercase transition-colors py-1 flex items-center gap-1.5 cursor-pointer relative ${
                  isAboutActive
                    ? isDarkHeroText
                      ? 'text-white font-semibold'
                      : 'text-[#111111] font-bold'
                    : isDarkHeroText
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#70706B] hover:text-[#111111]'
                }`}
              >
                <span>ABOUT US</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-[#C51B18]' : ''
                  }`}
                />
                {isAboutActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-colors ${
                      isDarkHeroText ? 'bg-white' : 'bg-[#C51B18]'
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu Panel */}
              {aboutDropdownOpen && (
                <div
                  id="about-us-dropdown-panel"
                  className="absolute left-0 mt-2 w-80 bg-[#FFFFFF] text-[#111111] border border-[#E5E5DF] shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-2 animate-fade-in z-50"
                  role="menu"
                >
                  <div className="px-3 py-2 border-b border-[#F0EFEB] mb-1">
                    <span className="text-[9px] font-mono font-bold tracking-[0.22em] uppercase text-[#888880]">
                      ABOUT REAL LIFE ARCHITECTURE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {aboutDropdownItems.map((item) => {
                      const ItemIcon = item.icon;
                      const isItemActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
                      return (
                        <Link
                          key={item.href}
                          id={`dropdown-item-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          href={item.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-none transition-all group ${
                            isItemActive
                              ? 'bg-[#F4F4F0] border-l-2 border-[#C51B18]'
                              : 'hover:bg-[#F9F9F7] border-l-2 border-transparent'
                          }`}
                          role="menuitem"
                        >
                          <ItemIcon className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${
                            isItemActive ? 'text-[#C51B18]' : 'text-[#70706B] group-hover:text-[#C51B18]'
                          }`} />
                          <div className="flex flex-col">
                            <span className="text-xs font-sans font-semibold tracking-wide text-[#111111] group-hover:text-[#C51B18] transition-colors">
                              {item.label}
                            </span>
                            <span className="text-[10px] font-sans text-[#70706B] leading-tight mt-0.5">
                              {item.subtitle}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 4. CONTACT */}
            <Link
              id="nav-link-contact"
              href="/contact"
              className={`text-[11px] xl:text-[12px] font-mono tracking-[0.18em] uppercase transition-colors py-1 relative ${
                isContactActive
                  ? isDarkHeroText
                    ? 'text-white font-semibold'
                    : 'text-[#111111] font-bold'
                  : isDarkHeroText
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#70706B] hover:text-[#111111]'
              }`}
            >
              CONTACT
              {isContactActive && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-colors ${
                    isDarkHeroText ? 'bg-white' : 'bg-[#C51B18]'
                  }`}
                />
              )}
            </Link>
          </nav>

          {/* Mobile Menu Toggle (Black square button removed as requested) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 focus:outline-none transition-colors border cursor-pointer ${
                isDarkHeroText
                  ? 'text-white border-white/30 hover:bg-white/10'
                  : 'text-[#111111] border-[#E5E5DF] hover:bg-[#F4F4F0]'
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
        currentPath={currentPath}
      />
    </>
  );
}
