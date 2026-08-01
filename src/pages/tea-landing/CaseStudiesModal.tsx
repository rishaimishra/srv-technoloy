import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from './data';
import { X, CheckCircle, Award, MapPin, ArrowRight } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-8">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-[#01261f] p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Close">
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-2 border-b border-gray-100 pb-4">
          <div className="inline-flex items-center gap-2 bg-[#ffca98] text-[#7a532a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Verified Tea Brand Growth Studies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#01261f]">Direct-to-Consumer Growth Stories for Specialty Tea Brands</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            See how specialty tea labels and boutique D2C brands built owned sales engines, reduced marketplace
            commissions, and acquired global subscribers.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4">
          {CASE_STUDIES_DATA.map((study) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${isSelected ? 'bg-[#01261f] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#01261f]'}`}
              >
                {study.brandName}
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-gray-50 p-6 rounded-xl border border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#7d562d] font-bold">
                <MapPin className="w-3.5 h-3.5" />
                {selectedCase.category} • {selectedCase.timeframe}
              </div>
              <h3 className="text-xl font-bold text-[#01261f] mt-1">{selectedCase.brandName}</h3>
            </div>
            <div className="px-4 py-2 bg-[#c5eadf] text-[#00201a] rounded-xl text-center">
              <div className="text-xs uppercase tracking-wider font-semibold">Verified Growth</div>
              <div className="text-xl font-black">{selectedCase.growth}</div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 p-5 rounded-xl border border-gray-200">{selectedCase.summary}</p>

          <div className="grid grid-cols-3 gap-4">
            {selectedCase.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#c1c8c4]/30 text-center">
                <div className="text-xs text-[#414846] font-medium">{m.label}</div>
                <div className="text-lg sm:text-xl font-bold text-[#01261f] mt-1 font-mono">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#01261f]">Key Growth Implementations:</h4>
            <ul className="space-y-2">
              {selectedCase.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#414846]">
                  <CheckCircle className="w-4 h-4 text-[#7d562d] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#e4e2dd] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#717976]">Want similar direct-to-consumer growth for your tea brand?</p>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-[#c1c8c4] text-xs font-semibold rounded hover:bg-[#e4e2dd] cursor-pointer">
              Close
            </button>
            <button
              onClick={() => { onClose(); onOpenAuditModal(); }}
              className="px-5 py-2.5 bg-[#01261f] text-white text-xs font-bold rounded hover:bg-[#1a3c34] flex items-center gap-1.5 cursor-pointer"
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
