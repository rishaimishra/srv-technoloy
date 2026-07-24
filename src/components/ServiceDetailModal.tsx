import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuoteForService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <div>
              <span className="text-blue-700 font-mono text-xs tracking-widest font-bold block uppercase">
                CORE EXPERTISE
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          {service.description}
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-600 tracking-widest mb-3 uppercase">
              KEY CAPABILITIES & FEATURES
            </h3>
            <ul className="space-y-2">
              {service.detailedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                  <span className="material-symbols-outlined text-blue-600 text-sm mt-0.5">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-mono font-bold text-slate-600 mb-2 uppercase">TECHNOLOGY STACK</p>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white border border-slate-200 text-blue-700 text-[11px] rounded font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-mono font-bold text-slate-600 mb-2 uppercase">CLIENT DELIVERABLES</p>
              <ul className="space-y-1">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                    <span className="text-blue-600 font-bold">•</span> {del}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:text-slate-900"
          >
            CLOSE
          </button>
          <button
            onClick={() => {
              onRequestQuoteForService(service.title);
              onClose();
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-mono font-bold uppercase transition-all shadow-md"
          >
            REQUEST QUOTE FOR THIS SERVICE
          </button>
        </div>
      </div>
    </div>
  );
};

