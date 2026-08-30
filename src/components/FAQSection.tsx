import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { SectionHeading } from './SectionHeading';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from '../context/NavigationContext';

export function FAQSection({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  const displayedFaqs = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section id="faq-section" className="py-20 sm:py-28 lg:py-32 bg-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="FREQUENTLY ASKED QUESTIONS"
          title="Clear answers to common architectural questions."
          description="Everything you need to know about working with Architex, from initial site consultations through to planning approvals and technical drawings."
          align="center"
        />

        {/* Accordion Container */}
        <div className="space-y-3.5 mt-10 sm:mt-14">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`border transition-colors duration-200 bg-[#FFFFFF] ${
                  isOpen ? 'border-[#B08D57]' : 'border-[#E5E2DC] hover:border-[#D0CCC5]'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-medium text-[#171717] tracking-tight">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F7F5F0] border border-[#E5E2DC] flex items-center justify-center shrink-0 text-[#171717]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B08D57]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#6A6A6A] leading-relaxed border-t border-[#F0ECE4] animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#6A6A6A] flex items-center justify-center gap-2">
          <span>Have a question not listed here?</span>
          <Link href="/contact" className="font-semibold text-[#171717] hover:text-[#B08D57] underline">
            Ask our team directly
          </Link>
        </div>
      </div>
    </section>
  );
}
