import React from 'react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function InsightsGrid({ limit = 3 }: { limit?: number }) {
  const displayed = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  return (
    <section id="insights-section" className="py-20 sm:py-28 lg:py-32 bg-[#ffffff] border-b border-[#dcd8cc]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="INSIGHTS"
            title="Useful advice for your next project."
            description="Practical guides on UK planning permission, domestic extensions, building control, and contemporary architectural design."
            className="mb-0"
          />

          {limit && (
            <Link
              id="view-all-insights-link"
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#1a1a1a] hover:text-[#736e65] transition-colors group shrink-0"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>
      </div>
    </section>
  );
}
