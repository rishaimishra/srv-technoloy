import React from 'react';
import { PROCESS_STEPS } from './data';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  return (
    <section className="py-24 bg-white px-4 md:px-10 border-b border-gray-100" id="process">
      <div className="max-w-[1280px] mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#7d562d] font-bold text-xs tracking-[0.2em] uppercase">Proven Growth Roadmap</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#01261f] tracking-tight">
            Our 4-Step Tea Brand Growth Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            From brand &amp; channel audit to direct online sales scaling in under 5 weeks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:border-[#01261f]/30 transition-all hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold text-[#7d562d]/20 group-hover:text-[#7d562d] transition-colors font-mono">{stepItem.step}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#01261f] group-hover:bg-[#01261f] group-hover:text-white transition-colors">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#01261f]">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{stepItem.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-[#7d562d] font-semibold flex items-center gap-1">
                <span>Phase {idx + 1} Execution</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenAuditModal}
            className="bg-[#01261f] text-white px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1a3c34] transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>START STEP 1: FREE BRAND AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
