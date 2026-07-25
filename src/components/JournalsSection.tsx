import React from 'react';
import { JOURNAL_ARTICLES } from '../data/content';
import { JournalArticle } from '../types';

interface JournalsSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalsSection: React.FC<JournalsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journals" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-700 font-caps text-xs sm:text-sm tracking-widest block mb-2 font-bold uppercase">
              ARTICLES & INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
              Latest Creative Thinking
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            In-depth perspectives on artificial intelligence, technical SEO, cloud architecture, and modern e-commerce trends from our senior engineering team.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden cursor-pointer group hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Article Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-caps text-blue-800 border border-blue-200 font-bold tracking-wider shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-caps font-bold mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center gap-2 text-blue-700 font-caps text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform">
                  READ ARTICLE
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
