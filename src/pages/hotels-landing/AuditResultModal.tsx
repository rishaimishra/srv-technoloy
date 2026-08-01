import React from 'react';
import { X, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { ReviewFormData } from './data';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from './constants';

interface AuditResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: ReviewFormData | null;
}

export const AuditResultModal: React.FC<AuditResultModalProps> = ({ isOpen, onClose, formData }) => {
  if (!isOpen || !formData) return null;

  let roomCount = 10;
  if (formData.propertySize.includes('1–5')) roomCount = 4;
  if (formData.propertySize.includes('6–15')) roomCount = 10;
  if (formData.propertySize.includes('16–30')) roomCount = 22;
  if (formData.propertySize.includes('30+')) roomCount = 40;

  const estimatedYearlyLoss = roomCount * 30 * 0.65 * 3500 * 0.75 * 0.18 * 12;
  const estimatedSavings = estimatedYearlyLoss * 0.6;

  const formatRupees = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Audit Report Generated</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Review for {formData.propertyName}
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            {formData.location} · {formData.propertySize}
          </p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>OTA Over-reliance Score</span>
              </div>
              <div className="text-3xl font-black text-red-700 font-mono">78 / 100</div>
              <p className="text-xs text-red-800 mt-1">High vulnerability to OTA commission cuts</p>
            </div>

            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Est. Reclaim Potential</span>
              </div>
              <div className="text-3xl font-black text-emerald-700 font-mono">{formatRupees(estimatedSavings)}</div>
              <p className="text-xs text-emerald-800 mt-1">Yearly margin saved with direct engine</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">3 Immediate Easy Wins for {formData.propertyName}:</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">1. Implement Instant WhatsApp Booking Link</strong>
                  <span className="text-xs text-slate-600">
                    Replace passive contact forms with an automated WhatsApp instant rate &amp; photo responder for
                    guests searching in {formData.location}.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">2. Geo-Targeted Meta Ads for Travelers to {formData.location}</strong>
                  <span className="text-xs text-slate-600">
                    Target weekend travelers from Kolkata, Siliguri, and neighboring hubs actively looking for
                    homestays/hotels.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">3. Commission-Free Mobile Direct Engine</strong>
                  <span className="text-xs text-slate-600">
                    A 100% mobile-optimised web engine allowing guests to confirm bookings with advance token payments
                    directly into your account.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <a
            href={WHATSAPP_URL}
            className="flex-1 bg-[#25d366] hover:bg-[#20ba5a] text-slate-950 font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>Discuss Audit on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <span>We'll Call You Within 1 Business Day</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
