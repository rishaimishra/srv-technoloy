import { useState, useEffect } from 'react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/content';

export function useBlogArticles() {
  const [articles, setArticles] = useState<JournalArticle[]>(JOURNAL_ARTICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.ok ? res.json() : [])
      .then((apiArticles: JournalArticle[]) => {
        if (apiArticles.length > 0) {
          const merged = [...JOURNAL_ARTICLES];
          for (const api of apiArticles) {
            const idx = merged.findIndex(a => a.id === api.id);
            if (idx >= 0) {
              merged[idx] = {
                ...merged[idx],
                ...api,
                image: api.image || merged[idx].image,
              };
            } else {
              merged.push(api);
            }
          }
          setArticles(merged);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  function getArticle(slug: string) {
    return articles.find(a => a.id === slug) || null;
  }

  return { articles, getArticle, loading };
}
