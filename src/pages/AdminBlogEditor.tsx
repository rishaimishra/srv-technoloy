import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function AdminBlogEditor() {
  const { id } = useParams();
  const isEditing = !!id;
  const { token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    title: '',
    category: '',
    date: '',
    readTime: '',
    image: '',
    summary: '',
    contentText: '',
    tags: '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      fetch(`/api/blog/${id}`)
        .then(res => res.json())
        .then(article => {
          setForm({
            id: article.id,
            title: article.title || '',
            category: article.category || '',
            date: article.date || '',
            readTime: article.readTime || '',
            image: article.image || '',
            summary: article.summary || '',
            contentText: (article.content || []).join('\n\n'),
            tags: (article.tags || []).join(', '),
          });
        })
        .catch(() => navigate('/admin'));
    }
  }, [id, isEditing, navigate]);

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('image', file);
    try {
      const res = await fetch('/api/blog/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (res.ok) {
        update('image', data.url);
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSaving(true);

    const slug = isEditing ? id : form.id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const today = new Date();
    const defaultDate = today.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

    const body = {
      id: slug,
      title: form.title,
      category: form.category || 'GENERAL',
      date: form.date || defaultDate,
      readTime: form.readTime || `${Math.max(1, Math.ceil(form.contentText.split(' ').length / 200))} min read`,
      image: form.image || '',
      summary: form.summary,
      content: form.contentText.split('\n\n').filter(Boolean),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    };

    try {
      const res = await fetch(isEditing ? `/api/blog/${id}` : '/api/blog', {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/admin');
      } else {
        setError(data.error || 'Failed to save');
      }
    } catch {
      setError('Failed to save');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">{isEditing ? 'Edit Article' : 'New Article'}</h1>
          <p className="text-sm text-slate-500">SRV Technology Blog CMS</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin')}
            className="text-sm text-slate-600 hover:text-blue-600 transition"
          >
            Back
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-6">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isEditing && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL Slug (id) *</label>
              <input
                type="text"
                value={form.id}
                onChange={e => update('id', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="my-article-slug"
                required
              />
              <p className="text-xs text-slate-400 mt-1">Used in the URL: /blog/{form.id || 'my-article-slug'}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => update('title', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <input
                type="text"
                value={form.category}
                onChange={e => update('category', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="ENTERPRISE SYSTEMS"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input
                type="text"
                value={form.date}
                onChange={e => update('date', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="15 JAN 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Read Time</label>
              <input
                type="text"
                value={form.readTime}
                onChange={e => update('readTime', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="6 min read"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={form.image}
                onChange={e => update('image', e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="/uploads/filename.webp or /src/assets/articles/seo.webp"
              />
              <label className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg text-sm text-slate-600 cursor-pointer hover:bg-slate-200 transition flex items-center gap-1">
                {uploading ? 'Uploading...' : 'Upload'}
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Summary *</label>
            <textarea
              value={form.summary}
              onChange={e => update('summary', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-20 resize-y"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content *</label>
            <p className="text-xs text-slate-400 mb-2">Separate paragraphs with a blank line. This is plain text (not HTML).</p>
            <textarea
              value={form.contentText}
              onChange={e => update('contentText', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-64 resize-y font-mono text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={e => update('tags', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Syspro ERP, Salesforce, Enterprise Integration"
            />
            <p className="text-xs text-slate-400 mt-1">Comma-separated</p>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {saving ? 'Saving...' : isEditing ? 'Update Article' : 'Create Article'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
