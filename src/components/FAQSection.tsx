import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { Plus, Minus } from 'lucide-react';
import { Link } from '../context/NavigationContext';

export function FAQSection({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  const displayedFaqs = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-[#fbfaf7] border-b border-[#e5e2d9]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-[2px] bg-[#D01020]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-2.5 h-[2px] bg-[#D01020]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111111] tracking-tight">
            Clear answers to common questions.
          </h2>
          <p className="mt-2 text-sm text-[#5c5850] font-light">
            Simple, honest answers about residential planning, drawings, timescales, and building regulations.
          </p>
        </div>

        {/* Numbered Accordion Container */}
        <div className="space-y-3">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const numberString = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <div
                key={faq.id}
                className={`border transition-all duration-200 bg-[#ffffff] rounded-sm ${
                  isOpen
                    ? 'border-[#D01020]/50 shadow-[0_4px_16px_rgba(0,0,0,0.04)]'
                    : 'border-[#e5e2d9] hover:border-[#111111]/30'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#D01020] shrink-0">
                      {numberString}
                    </span>
                    <span className="text-base sm:text-lg font-sans font-semibold text-[#111111] tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`w-7 h-7 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#D01020] text-white border-[#D01020]' : 'bg-[#f4f1ea] border-[#e5e2d9] text-[#111111]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#5c5850] leading-relaxed border-t border-[#f0ede6] pl-10 sm:pl-14"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer prompt */}
        <div className="mt-10 text-center text-xs sm:text-sm text-[#706c64] flex items-center justify-center gap-1.5">
          <span>Have a question about your property?</span>
          <Link href="/contact" className="font-bold text-[#D01020] hover:underline">
            Ask our architects directly &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
