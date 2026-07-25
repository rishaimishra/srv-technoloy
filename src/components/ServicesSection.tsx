import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuoteForService,
}) => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-700 font-caps text-xs sm:text-sm tracking-widest block mb-3 font-bold uppercase">
            CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
            Solutions Built for Excellence
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From modern web architecture and cross-platform native mobile apps to custom AI vector search engines, we deliver enterprise software engineered for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 bg-white border border-slate-200/80 rounded-2xl flex flex-col h-full group hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full text-left text-blue-700 font-caps text-xs tracking-wider font-bold flex items-center justify-between group/btn py-2 hover:text-blue-800"
                  id={`explore-service-${service.id}`}
                >
                  <span>EXPLORE SERVICE</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1 text-blue-600">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => onRequestQuoteForService(service.title)}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 rounded-xl font-caps text-xs tracking-wider font-bold transition-all text-center border border-slate-200/80 hover:border-blue-600"
                  id={`quote-service-${service.id}`}
                >
                  GET QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
