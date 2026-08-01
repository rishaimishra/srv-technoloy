import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from './constants';
import heroImage from '../../assets/landing/tea-hero-original.webp';

interface HeroProps {
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lush green tea plantations in Darjeeling at sunrise with snow-capped Himalayan peaks in misty morning light"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(1, 38, 31, 0.95) 0%, rgba(1, 38, 31, 0.45) 100%)' }} />
      </div>

      <div className="relative z-10 px-4 md:px-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-10 lg:col-span-8 text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#7d562d]/90 text-[#ffdcbd] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-[#ffdcbd]/30">
            <ShieldCheck className="w-4 h-4 text-[#ffdcbd]" />
            D2C E-COMMERCE &amp; MARKETING FOR TEA BRANDS
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.15] tracking-tight text-white">
            Stop losing your tea brand's margin to marketplaces &amp; distributors.
          </h1>

          <p className="text-base sm:text-lg text-[#f0eee9]/90 max-w-2xl leading-relaxed">
            We build high-converting direct-to-consumer websites, subscriber engines, and performance ad campaigns
            for specialty tea brands sourcing from Darjeeling, Siliguri, Dooars, Assam, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenAuditModal}
              className="bg-[#7d562d] text-white px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2.5 hover:bg-[#ffca98] hover:text-[#7a532a] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] group cursor-pointer"
            >
              <span>GET FREE BRAND GROWTH AUDIT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={WHATSAPP_URL}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#ffdcbd] tracking-tight flex items-center gap-1">
                <span>35-50%</span>
                <TrendingUp className="w-5 h-5 text-[#ffdcbd] hidden sm:inline" />
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/70 mt-1 font-semibold">D2C Gross Margin</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#ffdcbd] tracking-tight">D2C</div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/70 mt-1 font-semibold">Tea Brand Engines</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#ffdcbd] tracking-tight">3.4x</div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/70 mt-1 font-semibold">Average ROAS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
