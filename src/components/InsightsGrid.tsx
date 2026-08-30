import React from 'react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export function InsightsGrid({ limit }: { limit?: number }) {
  const displayed = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  return (
    <section id="insights-section" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="INSIGHTS"
            title="Ideas, advice and architectural inspiration."
            description="Practical guidance on UK planning permissions, historic home renovations, Passivhaus principles, and daylight design."
            className="mb-0"
          />

          {limit && (
            <Link
              id="view-all-insights-link"
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#B08D57] transition-colors group shrink-0"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayed.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>
      </div>
    </section>
  );
}
