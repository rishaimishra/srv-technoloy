import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { JOURNAL_ARTICLES } from '../data/content';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

export const BlogListPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog | Web Development Company in Siliguri & West Bengal"
        description="Technical articles from SRV Technology, the best website development company in West Bengal & Siliguri. Learn about Syspro ERP, Salesforce, React Native & AI from our engineering team."
        canonical="https://srvtechnology.com/blog"
        keywords={['web development blog Siliguri', 'software company West Bengal blog', 'tech insights Darjeeling']}
      />

      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
        <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-16">
          <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
            <BookOpen className="w-4 h-4" />
            SRV TECHNOLOGY KNOWLEDGE BASE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
            Blog & Technical Articles
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            In-depth technical guides on Syspro ERP e.net customization, Salesforce Apex & LWC development, React Native mobile optimization, and enterprise AI implementations.
          </p>
        </div>

        <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
            >
              <Link to={`/blog/${article.id}`} className="relative h-52 overflow-hidden bg-slate-100 block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-700 border border-slate-200 uppercase shadow-sm">
                  {article.category}
                </div>
              </Link>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <header>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-3 font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-blue-600" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-600" /> {article.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </header>

                <Link
                  to={`/blog/${article.id}`}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  READ FULL ARTICLE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Need Custom Architecture Guidance for Your System?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Our senior lead engineers are available to review your technical specs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            CONTACT OUR ENGINEERS ↗
          </Link>
        </div>
      </div>
    </>
  );
};
