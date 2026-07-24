import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [filterSource, setFilterSource] = useState<'ALL' | 'CLIENT' | 'UPWORK'>('ALL');
  const [showAddFeedbackModal, setShowAddFeedbackModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({ name: '', company: '', quote: '', rating: 5 });
  const [submittedFeedback, setSubmittedFeedback] = useState<typeof TESTIMONIALS>(TESTIMONIALS);

  const filteredReviews = filterSource === 'ALL'
    ? submittedFeedback
    : submittedFeedback.filter((item) => item.source === filterSource);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.name || !newFeedback.quote) return;
    const reviewItem = {
      id: `custom-${Date.now()}`,
      quote: newFeedback.quote,
      name: newFeedback.name,
      role: newFeedback.company || 'CLIENT',
      source: 'CLIENT' as const,
      initials: newFeedback.name.charAt(0).toUpperCase(),
      rating: newFeedback.rating,
    };
    setSubmittedFeedback([reviewItem, ...submittedFeedback]);
    setNewFeedback({ name: '', company: '', quote: '', rating: 5 });
    setShowAddFeedbackModal(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-700 font-caps text-xs sm:text-sm tracking-widest block mb-2 font-bold uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Source Filter */}
            <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              {(['ALL', 'CLIENT', 'UPWORK'] as const).map((source) => (
                <button
                  key={source}
                  onClick={() => setFilterSource(source)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-caps font-bold tracking-wider transition-all ${
                    filterSource === source
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {source}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddFeedbackModal(true)}
              className="px-4 py-2 rounded-xl bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-caps text-xs font-bold tracking-wider transition-colors border border-slate-200 shadow-sm flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm text-blue-600">rate_review</span>
              LEAVE FEEDBACK
            </button>
          </div>
        </div>

        {/* Rating Summary Banner */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 via-white to-sky-50 p-6 rounded-2xl border border-blue-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Top Rated Enterprise Agency</p>
              <p className="text-xs text-slate-600">Consistently 5-Star Reviews on Long-Term Client Engagements</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-2xl font-extrabold text-blue-700">4.8 / 5.0</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-4xl text-blue-500/30 mb-4 block">
                  format_quote
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm">
                    {item.initials || item.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-caps font-bold">{item.role}</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-caps text-blue-800 border border-slate-200 font-bold">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave Feedback Modal */}
      {showAddFeedbackModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Submit Client Review</h3>
              <button
                onClick={() => setShowAddFeedbackModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  value={newFeedback.name}
                  onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1">ORGANIZATION / ROLE</label>
                <input
                  type="text"
                  value={newFeedback.company}
                  onChange={(e) => setNewFeedback({ ...newFeedback, company: e.target.value })}
                  placeholder="e.g. CTO, Tech Corp"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1">TESTIMONIAL FEEDBACK *</label>
                <textarea
                  required
                  rows={4}
                  value={newFeedback.quote}
                  onChange={(e) => setNewFeedback({ ...newFeedback, quote: e.target.value })}
                  placeholder="Share your experience working with SRV Technology..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:border-blue-600 outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddFeedbackModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-caps text-slate-600 font-bold hover:text-slate-900"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-caps font-bold hover:bg-blue-700 shadow-sm"
                >
                  POST REVIEW
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
