import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from './data';
import { X, CheckCircle, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface CaseStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuditModal: () => void;
}

export const CaseStudiesModal: React.FC<CaseStudiesModalProps> = ({ isOpen, onClose, onOpenAuditModal }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('castleton-d2c');
  if (!isOpen) return null;

  const selectedCase = CASE_STUDIES_DATA.find((c) => c.id === selectedCaseId) || CASE_STUDIES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-4xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-8">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors" aria-label="Close">
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-2 border-b border-slate-100 pb-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Illustrative Growth Scenarios
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Direct-to-Consumer Growth Scenarios for Specialty Tea Brands</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Examples of how specialty tea labels and boutique D2C brands can build owned sales engines, reduce
            marketplace commissions, and acquire global subscribers with this approach.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {CASE_STUDIES_DATA.map((study) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {study.brandName}
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-6 rounded-xl border border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-700 font-bold">
                <MapPin className="w-3.5 h-3.5" />
                {selectedCase.category} • {selectedCase.timeframe}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedCase.brandName}</h3>
            </div>
            <div className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-xl text-center border border-emerald-200">
              <div className="text-xs uppercase tracking-wider font-semibold">Example Growth</div>
              <div className="text-xl font-black">{selectedCase.growth}</div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">{selectedCase.summary}</p>

          <div className="grid grid-cols-3 gap-4">
            {selectedCase.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1 font-mono">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Growth Implementations:</h4>
            <ul className="space-y-2">
              {selectedCase.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">Want similar direct-to-consumer growth for your tea brand?</p>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-lg hover:bg-slate-50">
              Close
            </button>
            <button
              onClick={() => { onClose(); onOpenAuditModal(); }}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center gap-1.5"
            >
              <span>Get Audit for Your Tea Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
