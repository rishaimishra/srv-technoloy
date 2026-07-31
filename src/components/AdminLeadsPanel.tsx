import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

interface Lead {
  id: string;
  type: 'contact' | 'landing' | 'quote' | 'subscribe';
  formType?: string;
  sourcePage: string;
  sourceUrl: string;
  name: string;
  email?: string;
  phone?: string;
  businessName?: string;
  city?: string;
  projectType?: string;
  budget?: string;
  service?: string;
  detail?: string;
  message?: string;
  notes?: string;
  createdAt: string;
}

interface LeadSummary {
  total: number;
  bySource: { sourcePage: string; count: number }[];
  byType: Record<string, number>;
}

const TYPE_LABELS: Record<string, string> = {
  contact: 'Consultation',
  landing: 'Landing Page',
  quote: 'Quote Request',
  subscribe: 'Newsletter',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function AdminLeadsPanel({ token }: { token: string }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [summary, setSummary] = useState<LeadSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [source, setSource] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('newest');
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setPage(1), 350);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [q]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (source) params.set('source', source);
      if (type) params.set('type', type);
      if (q.trim()) params.set('q', q.trim());
      params.set('sort', sort);
      params.set('page', String(page));
      params.set('limit', '50');
      const res = await fetch(`/api/leads?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to load leads');
      const data = await res.json();
      setLeads(data.leads);
      setSummary(data.summary);
      setTotalPages(data.totalPages);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  }, [token, source, type, q, sort, page]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  async function handleDelete(lead: Lead) {
    if (!confirm(`Delete this lead from ${lead.sourcePage}?`)) return;
    setDeleting(lead.id);
    try {
      const res = await fetch(`/api/leads/${lead.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      fetchLeads();
    } catch {
      alert('Failed to delete lead');
    } finally {
      setDeleting(null);
    }
  }

  const detailFields = (lead: Lead) => {
    const rows: [string, string][] = [];
    if (lead.businessName) rows.push(['Business / Property', lead.businessName]);
    if (lead.city) rows.push(['City / Location', lead.city]);
    if (lead.projectType) rows.push(['Project Type', lead.projectType]);
    if (lead.budget) rows.push(['Budget', lead.budget]);
    if (lead.service) rows.push(['Service', lead.service]);
    if (lead.detail) rows.push([lead.type === 'landing' && lead.formType === 'hotel' ? 'Property Size' : 'Business Type', lead.detail]);
    if (lead.message) rows.push(['Message', lead.message]);
    if (lead.notes) rows.push(['Notes', lead.notes]);
    return rows;
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{error}</div>
      )}

      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Leads</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{summary.total}</p>
          </div>
          {(summary.bySource[0] || { sourcePage: '-', count: 0 }) && summary.bySource.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Source</p>
              <p className="text-lg font-bold text-slate-900 mt-1 truncate">{summary.bySource[0].sourcePage}</p>
              <p className="text-xs text-slate-500">{summary.bySource[0].count} leads</p>
            </div>
          )}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Landing Leads</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{summary.byType.landing || 0}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Consultations</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{summary.byType.contact || 0}</p>
          </div>
        </div>
      )}

      {summary && summary.bySource.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Leads by Source Page</p>
          <div className="flex flex-wrap gap-2">
            {summary.bySource.map((s) => (
              <span key={s.sourcePage} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-xs">
                <span className="font-mono text-slate-700">{s.sourcePage}</span>
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full px-2 py-0.5">{s.count}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row gap-3">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, email, phone, message..."
            className="flex-1 min-w-[200px] bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-600 outline-none"
          />
          <select
            value={source}
            onChange={(e) => { setSource(e.target.value); setPage(1); }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-600 outline-none"
          >
            <option value="">All source pages</option>
            {(summary?.bySource || []).map((s) => (
              <option key={s.sourcePage} value={s.sourcePage}>{s.sourcePage} ({s.count})</option>
            ))}
          </select>
          <select
            value={type}
            onChange={(e) => { setType(e.target.value); setPage(1); }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-600 outline-none"
          >
            <option value="">All types</option>
            {Object.entries(TYPE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value); setPage(1); }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-600 outline-none"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="source">Sort by source page</option>
            <option value="name">Sort by name</option>
          </select>
        </div>

        {loading ? (
          <p className="p-6 text-slate-500 text-sm">Loading leads...</p>
        ) : leads.length === 0 ? (
          <p className="p-6 text-slate-400 text-sm text-center">No leads match your filters yet.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source Page</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Type</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <Fragment key={lead.id}>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{lead.name || lead.email || 'Anonymous'}</p>
                      <p className="text-xs text-slate-400">
                        {[lead.email, lead.phone].filter(Boolean).join(' · ') || '\u00A0'}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full font-mono">{lead.sourcePage}</span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium">
                        {TYPE_LABELS[lead.type] || lead.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium transition"
                        >
                          {expandedId === lead.id ? 'Hide' : 'View'}
                        </button>
                        <button
                          onClick={() => handleDelete(lead)}
                          disabled={deleting === lead.id}
                          className="text-xs text-red-600 hover:text-red-800 font-medium transition disabled:opacity-50"
                        >
                          {deleting === lead.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedId === lead.id && (
                    <tr className="border-b border-slate-100 bg-slate-50/60">
                      <td colSpan={5} className="px-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                          <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase">Source URL</span>
                            <p className="text-slate-800 font-mono text-xs break-all">{lead.sourceUrl || lead.sourcePage}</p>
                          </div>
                          {detailFields(lead).map(([label, value]) => (
                            <div key={label}>
                              <span className="text-xs font-semibold text-slate-400 uppercase">{label}</span>
                              <p className="text-slate-800 break-words">{value}</p>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        )}

        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="text-sm text-blue-600 hover:text-blue-800 disabled:text-slate-300 disabled:cursor-not-allowed transition"
            >
              ← Prev
            </button>
            <span className="text-sm text-slate-500">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="text-sm text-blue-600 hover:text-blue-800 disabled:text-slate-300 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
