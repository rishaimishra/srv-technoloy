import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ReviewFormData } from './data';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from './constants';

interface FormSectionProps {
  onFormSubmit: (data: ReviewFormData) => void;
  initialRooms?: number;
}

export const FormSection: React.FC<FormSectionProps> = ({ onFormSubmit, initialRooms }) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    fullName: '',
    propertyName: '',
    phone: '',
    location: 'Darjeeling',
    propertySize: initialRooms ? `${initialRooms} rooms` : '6–15 rooms',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.propertyName.trim()) errs.propertyName = 'Property name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone/WhatsApp number required';
    if (!formData.location.trim()) errs.location = 'Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/landing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'hotel',
          name: formData.fullName,
          businessName: formData.propertyName,
          phone: formData.phone,
          city: formData.location,
          detail: formData.propertySize,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('idle');
      onFormSubmit(formData);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="form-section" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-blue-700 tracking-widest uppercase mb-3 block font-mono">GET STARTED</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Get a free website &amp; marketing review
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Tell us a little about your property. We'll review your current online presence and show you
                  specifically where you're likely losing direct bookings — no cost, no obligation.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3">What you'll get:</span>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-medium">Current Site Performance Audit</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-medium">OTA Over-reliance Score</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-medium">3 Immediate "Easy Wins" for Direct Bookings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Or message us directly on WhatsApp</span>
              </a>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                Request Your Free Review
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 block">YOUR NAME</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 block">PROPERTY NAME</label>
                  <input
                    type="text"
                    placeholder="Hotel / resort / homestay name"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border ${errors.propertyName ? 'border-red-500' : 'border-slate-300'} rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                  />
                  {errors.propertyName && <p className="text-xs text-red-500 mt-1">{errors.propertyName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 block">PHONE / WHATSAPP</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="e.g. 98310 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-3 bg-white border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-r-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 block">CITY / LOCATION</label>
                    <input
                      type="text"
                      placeholder="e.g. Darjeeling, Digha, Siliguri"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border ${errors.location ? 'border-red-500' : 'border-slate-300'} rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                    />
                    {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 block">PROPERTY SIZE</label>
                  <select
                    value={formData.propertySize}
                    onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    <option value="1–5 rooms">1–5 rooms (Boutique Homestay)</option>
                    <option value="6–15 rooms">6–15 rooms (Standard Resort / Hotel)</option>
                    <option value="16–30 rooms">16–30 rooms (Mid-size Hotel)</option>
                    <option value="30+ rooms">30+ rooms (Large Hotel / Heritage Stay)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <span>Generating Your Audit...</span>
                  ) : (
                    <>
                      <span>GET MY FREE REVIEW</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-xs text-red-600 text-center">Something went wrong. Please try WhatsApp instead.</p>
                )}

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  We'll respond within one business day. We'll never share your details. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
