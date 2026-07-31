import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminLeadsPanel } from '../components/AdminLeadsPanel';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  updatedAt?: string;
}

type Tab = 'leads' | 'blog';

export function AdminDashboard() {
  const { token, username, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('leads');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Delete this article?')) return;
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setArticles(prev => prev.filter(a => a.id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch {
      alert('Failed to delete');
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">SRV Admin Panel</h1>
          <p className="text-sm text-slate-500">Logged in as {username}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 transition">
            View Site
          </Link>
          <button
            onClick={() => { logout(); navigate('/admin/login'); }}
            className="text-sm text-red-600 hover:text-red-800 transition"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2.5 text-sm font-semibold transition border-b-2 -mb-px ${
              activeTab === 'leads'
                ? 'text-blue-600 border-blue-600'
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2.5 text-sm font-semibold transition border-b-2 -mb-px ${
              activeTab === 'blog'
                ? 'text-blue-600 border-blue-600'
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            Blog
          </button>
          <div className="ml-auto flex items-center gap-2">
            {activeTab === 'blog' && (
              <Link
                to="/admin/blog/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                + New Article
              </Link>
            )}
          </div>
        </div>

        {activeTab === 'leads' && token && <AdminLeadsPanel token={token} />}

        {activeTab === 'blog' && (
          loading ? (
            <p className="text-slate-500">Loading articles...</p>
          ) : articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg mb-4">No articles yet</p>
              <Link
                to="/admin/blog/new"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Create your first article
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Category</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map(article => (
                    <tr key={article.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-900">{article.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">/{article.id}</p>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">{article.category}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500 hidden md:table-cell">{article.date}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/admin/blog/${article.id}/edit`}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium transition"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-xs text-red-600 hover:text-red-800 font-medium transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </main>
    </div>
  );
}
