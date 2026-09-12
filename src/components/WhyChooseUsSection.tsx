import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Users, HeartHandshake, MessageSquare, Lightbulb, Compass, Layers } from 'lucide-react';

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Practical knowledge from years of architectural experience across extensions, lofts, and new builds.'
    },
    {
      icon: HeartHandshake,
      title: 'Personal Approach',
      description: 'We listen carefully to how you live before we start designing, ensuring the space fits your routine.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'You always know what is happening and what comes next, with zero confusing architectural jargon.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'We look beyond the obvious to find better ways to unlock natural light, space, and garden flow.'
    },
    {
      icon: Compass,
      title: 'Planning Knowledge',
      description: 'We help guide your project smoothly through local council planning permission and permitted development.'
    },
    {
      icon: Layers,
      title: 'End-to-End Support',
      description: 'From your first ideas through to detailed building regulation drawings, we support your entire project.'
    }
  ];

  return (
    <section id="why-choose-us-section" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="WHY CHOOSE US"
          title="Architectural expertise made approachable and straightforward."
          description="We combine thoughtful design with practical construction experience so you feel supported and confident at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#f4f1ea] border border-[#dcd8cc] p-6 sm:p-8 hover:border-[#1a1a1a] transition-all hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.06)] group"
              >
                <div className="w-10 h-10 bg-[#1a1a1a] text-[#f4f1ea] flex items-center justify-center mb-5 group-hover:bg-[#333333] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1a1a] tracking-tight mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#5c5850] leading-relaxed font-light">
                  "{benefit.description}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
