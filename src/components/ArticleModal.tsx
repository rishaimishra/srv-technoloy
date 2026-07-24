import React from 'react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full shadow-2xl relative my-8 overflow-hidden font-sans">
        {/* Banner */}
        <div className="relative aspect-[16/8] bg-slate-100 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-md"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-full mb-2 inline-block">
              {article.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{article.title}</h2>
            <div className="flex items-center gap-3 text-xs text-blue-200 font-mono mt-2">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>BY SRV TECH TEAM</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

