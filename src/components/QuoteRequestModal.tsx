import React, { useRef, useState } from 'react';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { getLeadSource } from '../lib/leadSource';
import { CaptchaWidget } from './CaptchaWidget';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Website Development');
  const [notes, setNotes] = useState(prefilledNotes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef<TurnstileInstance>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setError('Please complete the verification check.');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, notes, ...getLeadSource(), captchaToken }),
      });
      if (!res.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setError('Something went wrong sending your request. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
      captchaRef.current?.reset();
      setCaptchaToken('');
    }
  };

  return (
    <div className="fixed inset-0 z-[120] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">description</span>
            <h3 className="text-xl font-bold text-slate-900">Request For Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-600 flex items-center justify-center text-blue-600 mx-auto">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">Quote Request Received!</h4>
            <p className="text-xs text-slate-600">
              We have dispatched your quote details to our engineering team. You will receive a response within 2 business hours at <strong className="text-blue-700">{email}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-caps font-bold uppercase shadow-sm"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-caps font-bold text-slate-600 mb-1 uppercase">FULL NAME *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-caps font-bold text-slate-600 mb-1 uppercase">WORK EMAIL *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-caps font-bold text-slate-600 mb-1 uppercase">PRIMARY SERVICE</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 outline-none"
              >
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="ERP Implementation (Syspro ERP)">ERP Implementation (Syspro ERP)</option>
                <option value="Salesforce Implementation & Development">Salesforce Implementation & Development</option>
                <option value="E-Commerce (Shopify, WordPress, Magento)">E-Commerce (Shopify, WordPress, Magento)</option>
                <option value="AI / ML Development">AI / ML Development</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-caps font-bold text-slate-600 mb-1 uppercase">PROJECT SCOPE / NOTES</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Details, timelines, or specifications..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:border-blue-600 outline-none"
              />
            </div>

            <CaptchaWidget ref={captchaRef} onToken={setCaptchaToken} />

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-caps font-semibold text-slate-600 hover:text-slate-900"
              >
                CANCEL
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-caps font-bold uppercase transition-all shadow-md disabled:opacity-60"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

