import React from 'react';
import { Article } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  key?: React.Key;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      id={`article-card-${article.slug}`}
      className="group flex flex-col bg-[#ffffff] border border-[#dcd8cc] overflow-hidden transition-all duration-300 hover:border-[#1a1a1a] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]"
    >
      {/* Image */}
      <Link
        href={`/insights/${article.slug}`}
        className="block relative overflow-hidden bg-[#e8e4d8] aspect-[16/10]"
        aria-label={`Read article: ${article.title}`}
      >
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover object-center transition-transform duration-600 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 backdrop-blur-sm px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] border border-[#dcd8cc]">
          {article.category}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-[11px] font-mono text-[#736e65]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#1a1a1a]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#1a1a1a]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-serif text-xl font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#736e65] transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5c5850] leading-relaxed line-clamp-3 font-light">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#dcd8cc] flex items-center justify-between">
          <Link
            id={`article-read-more-${article.slug}`}
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-[#736e65] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
