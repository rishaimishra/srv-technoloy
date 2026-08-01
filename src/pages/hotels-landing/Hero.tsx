import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from './constants';
import heroImage from '../../assets/landing/hotel-hero.webp';

interface HeroProps {
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950 text-white min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cosy hotel lobby with a panoramic mountain view"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-bold tracking-wider uppercase mb-8 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>FOR INDEPENDENT HOTELS &amp; HOMESTAYS IN WEST BENGAL</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
          Stop handing{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 underline decoration-blue-500/60 underline-offset-4">
            20% of every booking
          </span>{' '}
          to third-party booking sites.
        </h1>

        <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-3xl mb-10 text-center">
          We build high-performance direct-booking websites and run hyper-targeted ads that bring guests straight to
          you — not to booking sites like Booking.com and Expedia that take a cut of every stay you host.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 uppercase tracking-wider group"
          >
            <span>GET A FREE WEBSITE &amp; MARKETING REVIEW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={WHATSAPP_URL}
            className="w-full sm:w-auto bg-[#25d366] hover:bg-[#20ba5a] text-slate-950 font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-5 h-5 text-slate-950" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-white/15">
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-white">15–25%</span>
            <span className="text-xs text-slate-300 font-medium mt-1">Typical commission reclaimed</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-white">3-in-1</span>
            <span className="text-xs text-slate-300 font-medium mt-1">Site, ads &amp; WhatsApp</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-white">West Bengal</span>
            <span className="text-xs text-slate-300 font-medium mt-1">Local focus</span>
          </div>
        </div>
      </div>
    </section>
  );
};
