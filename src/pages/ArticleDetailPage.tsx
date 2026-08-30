import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ARTICLES } from '../data/articles';
import { Link } from '../context/NavigationContext';
import { CTASection } from '../components/CTASection';
import { ArticleCard } from '../components/ArticleCard';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';

export function ArticleDetailPage({ slug }: { slug: string }) {
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 bg-white border border-[#dcd8cc] max-w-md mx-auto shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]">
            <h2 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">Article Not Found</h2>
            <p className="text-sm text-[#5c5850] mb-6 font-light">The requested insight article could not be found.</p>
            <Link href="/insights" className="px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em]">
              Back to Insights
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Article Header & Title */}
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 py-10 sm:py-16">
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#736e65] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Insights
            </Link>
          </div>

          <div className="flex items-center gap-2.5 mb-4">
            <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
              {article.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.16] mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#736e65] pb-6 border-b border-[#dcd8cc]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1a1a1a]" /> {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1a1a1a]" /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#1a1a1a]" /> {article.author.name}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1080px] mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
          <div className="relative overflow-hidden bg-[#e8e4d8] aspect-[16/9] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.06)]">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Editorial Body (Width 720px for optimal readability) */}
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 space-y-10">
          {/* Lead Paragraph */}
          <p className="text-lg sm:text-xl text-[#1a1a1a] font-normal leading-relaxed border-l-2 border-[#1a1a1a] pl-5">
            {article.content.leadParagraph}
          </p>

          {/* Sections */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
                {sec.heading}
              </h2>

              {sec.text.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-[#4a4740] leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}

              {sec.quote && (
                <blockquote className="my-6 p-6 sm:p-8 bg-white border border-[#dcd8cc] border-l-4 border-l-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)]">
                  <p className="font-serif text-lg sm:text-xl text-[#1a1a1a] italic leading-relaxed">
                    "{sec.quote}"
                  </p>
                </blockquote>
              )}

              {sec.image && (
                <figure className="my-6 space-y-2">
                  <div className="overflow-hidden bg-[#e8e4d8] aspect-[16/10] border border-[#dcd8cc] shadow-[4px_4px_0px_0px_rgba(26,26,26,0.04)]">
                    <img src={sec.image} alt={sec.caption || ''} className="w-full h-full object-cover" />
                  </div>
                  {sec.caption && (
                    <figcaption className="text-xs text-[#736e65] font-mono">
                      {sec.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-8 border-t border-[#dcd8cc]">
            <h3 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">Summary</h3>
            <p className="text-base text-[#4a4740] leading-relaxed font-light">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="py-16 sm:py-24 bg-[#ffffff] border-y border-[#dcd8cc]">
            <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                  Related Architectural Insights
                </h3>
                <Link href="/insights" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65]">
                  View All Insights →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <CTASection
          id="article-detail-cta"
          title="Discuss your ideas with our design practice."
          subtitle="We welcome initial conversations about planning feasibility, extensions, and bespoke architecture."
        />
      </main>

      <Footer />
    </div>
  );
}
