import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenForm: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenForm }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Start reclaiming your margin today.
        </h2>
        <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get a free, no-obligation review of your property's current online presence.
        </p>
        <button
          onClick={onOpenForm}
          className="bg-white hover:bg-slate-100 text-blue-700 font-black text-sm sm:text-base px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider inline-flex items-center gap-3"
        >
          <span>GET MY FREE REVIEW</span>
          <ArrowRight className="w-5 h-5 text-blue-700" />
        </button>
      </div>
    </section>
  );
};
