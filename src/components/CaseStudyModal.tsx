import React from 'react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onRequestQuoteForCaseStudy: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onRequestQuoteForCaseStudy,
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-4xl w-full shadow-2xl relative my-8 overflow-hidden font-sans">
        {/* Banner Image */}
        <div className="relative aspect-[21/9] bg-slate-100 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-md"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-full mb-2 inline-block">
              {caseStudy.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{caseStudy.title}</h2>
            <p className="text-sm text-blue-200 font-mono mt-1">{caseStudy.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            {caseStudy.results.map((res, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-700">{res.metric}</p>
                <p className="text-xs text-slate-600 font-mono mt-1 font-semibold">{res.label}</p>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2">PROJECT OVERVIEW</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{caseStudy.overview}</p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2">THE CHALLENGE</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2">OUR ENGINEERING SOLUTION</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Meta Info Sidebar */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6 h-fit">
              <div>
                <p className="text-[11px] font-mono font-semibold text-slate-500">CLIENT</p>
                <p className="text-sm font-bold text-slate-900">{caseStudy.client}</p>
              </div>

              <div>
                <p className="text-[11px] font-mono font-semibold text-slate-500">DURATION & YEAR</p>
                <p className="text-sm font-bold text-slate-900">{caseStudy.duration} • {caseStudy.year}</p>
              </div>

              <div>
                <p className="text-[11px] font-mono font-semibold text-slate-500 mb-2">TECH STACK USED</p>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-blue-700 text-xs font-mono font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onRequestQuoteForCaseStudy(caseStudy.title);
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-mono text-xs font-bold uppercase transition-all shadow-md"
              >
                BUILD SIMILAR APP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

