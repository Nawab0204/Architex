import React from 'react';
import { Header } from '../components/Header';
import { HeroSlider } from '../components/HeroSlider';
import { AccreditationsBar } from '../components/AccreditationsBar';
import { DesignVideoSection } from '../components/DesignVideoSection';
import { KeyFeaturesSection } from '../components/KeyFeaturesSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { HomeContactSection } from '../components/HomeContactSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#111111]">
      {/* 01 HEADER WITH 4 OPTIONS & CLEAN NAVIGATION */}
      <Header isTransparentInitially={true} />

      <main className="flex-1">
        {/* 02 HERO SLIDER (Bright, cinematic, on-point residential copy) */}
        <HeroSlider />

        {/* 03 BIG ACCREDITATION LOGOS & REGULATORY BODIES */}
        <AccreditationsBar />

        {/* 04 SINGLE BUILDING TIMELAPSE (Under 1 minute) */}
        <DesignVideoSection />

        {/* 05 WHY HOMEOWNERS CHOOSE US */}
        <KeyFeaturesSection />

        {/* 06 OUR SERVICES (Rectangular shaped cards, clean & representative) */}
        <ServicesGrid limit={5} />

        {/* 07 OUR WORK (Left-to-right, well-mannered panoramic rectangular cards, no wording below) */}
        <ProjectsGrid
          limit={6}
          title="A selection of our residential projects."
          subtitle="Bespoke home extensions, loft conversions, and new build houses delivered with precision."
          eyebrow="OUR WORK"
        />

        {/* 08 CLIENT REVIEWS (Continuous automated carousel) */}
        <TestimonialsSection />

        {/* 09 FREQUENTLY ASKED QUESTIONS */}
        <FAQSection limit={6} />

        {/* 10 CONTACT US */}
        <HomeContactSection />
      </main>

      {/* 11 FOOTER */}
      <Footer />
    </div>
  );
}
