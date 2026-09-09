import React from 'react';
import { Header } from '../components/Header';
import { HeroSlider } from '../components/HeroSlider';
import { IntroSection } from '../components/IntroSection';
import { TrustSection } from '../components/TrustSection';
import { DifferenceSection } from '../components/DifferenceSection';
import { ImageBreak } from '../components/ImageBreak';
import { CTASection } from '../components/CTASection';
import { FeaturedProject } from '../components/FeaturedProject';
import { ServicesGrid } from '../components/ServicesGrid';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { ProcessSection } from '../components/ProcessSection';
import { BirminghamSection } from '../components/BirminghamSection';
import { FAQSection } from '../components/FAQSection';
import { InsightsGrid } from '../components/InsightsGrid';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0]">
      {/* 01 HEADER */}
      <Header isTransparentInitially={true} />

      <main className="flex-1">
        {/* 02 HERO SLIDER */}
        <HeroSlider />

        {/* 03 ABOUT / INTRODUCTION */}
        <IntroSection />

        {/* 04 TRUST / CREDIBILITY */}
        <TrustSection />

        {/* 05 THE ARCHITEX DIFFERENCE */}
        <DifferenceSection />

        {/* 06 LARGE ARCHITECTURAL IMAGE BREAK */}
        <ImageBreak />

        {/* 07 CONSULTATION CTA */}
        <CTASection
          id="homepage-consultation-cta"
          title="Turn your ideas into a space worth living in."
          subtitle="Tell us about your project and start a conversation with Real Life Architecture. We evaluate feasibility, unlock daylight, and handle planning with rigor."
          primaryButtonText="Start a Project"
          secondaryButtonText="Contact Us"
          variant="dark"
        />

        {/* 08 LATEST PROJECT */}
        <FeaturedProject />

        {/* 09 SERVICES */}
        <ServicesGrid limit={6} />

        {/* 10 PORTFOLIO */}
        <ProjectsGrid
          limit={6}
          title="Selected architectural works."
          subtitle="A preview of bespoke residential extensions, heritage conversions, and new build homes delivered across Birmingham and the West Midlands."
          eyebrow="PORTFOLIO"
        />

        {/* 11 TESTIMONIALS */}
        <TestimonialsSection />

        {/* 13 ABOUT / PHILOSOPHY */}
        <PhilosophySection />

        {/* 14 PROCESS */}
        <ProcessSection showCta={true} />

        {/* 15 BIRMINGHAM SECTION */}
        <BirminghamSection />

        {/* 16 FAQ */}
        <FAQSection limit={6} />

        {/* 17 INSIGHTS / ARTICLES */}
        <InsightsGrid limit={3} />

        {/* 18 FINAL CONTACT CTA */}
        <CTASection
          id="homepage-final-cta"
          title="Have an architectural project in mind?"
          subtitle="Let's discuss what could be possible for your home, development site, or commercial building. We look forward to talking through your brief."
          primaryButtonText="Book Initial Consultation"
          secondaryButtonText="Contact Our Studio"
          variant="dark"
        />
      </main>

      {/* 19 FOOTER */}
      <Footer />
    </div>
  );
}
