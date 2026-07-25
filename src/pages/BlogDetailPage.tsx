import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { JOURNAL_ARTICLES } from '../data/content';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = JOURNAL_ARTICLES.find((a) => a.id === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://srvtechnology.com/blog/${article.id}`;

  return (
    <>
      <SEO
        title={article.title}
        description={article.summary}
        canonical={canonicalUrl}
        ogImage={article.image}
        pageType="article"
        publishedTime={article.date}
        tags={article.tags}
        keywords={article.tags}
      />

      <article className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
        <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-bold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/7] rounded-2xl overflow-hidden bg-slate-100 mb-10">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-full mb-3 inline-block">
                  {article.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {article.title}
                </h1>
                <div className="flex items-center gap-3 text-xs text-blue-200 font-mono mt-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  <span>•</span>
                  <span>BY SRV TECH TEAM</span>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <footer className="pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2 mb-10">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                  Need Technical Guidance?
                </h2>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
                  Our engineering team specializes in the technologies discussed in this article.
                  Let's discuss your project requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  CONTACT OUR ENGINEERS ↗
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
};
