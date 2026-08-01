import React from 'react';
import interiorImage from '../../assets/landing/hotel-interior.webp';

export const SpecializedSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
              <img
                src={interiorImage}
                alt="Cosy hotel interior with a mountain view, West Bengal"
                loading="lazy"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80">
                <p className="text-xs text-slate-300 font-medium">
                  Tailored specifically for West Bengal tourist hubs like Darjeeling, Digha, Mandarmani, Kalimpong,
                  Dooars &amp; Kolkata.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Built specifically for hotels, resorts &amp; homestays
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              We don't spread ourselves across every industry. Hospitality, tea, and real estate are the only three
              sectors we work with — so our process is built around how travellers actually search and book.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              <div>
                <span className="text-blue-400 font-black text-lg block mb-1">I.</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated to hospitality — not a generalist agency juggling ten industries.
                </p>
              </div>
              <div>
                <span className="text-blue-400 font-black text-lg block mb-1">II.</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Response-time discipline built into every enquiry, day or night.
                </p>
              </div>
              <div>
                <span className="text-blue-400 font-black text-lg block mb-1">III.</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Transparent monthly reporting — you see exactly what your spend produces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
