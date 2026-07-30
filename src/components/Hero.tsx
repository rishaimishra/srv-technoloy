import React from 'react';
import { ArrowRight, Zap, CheckCircle2, ShieldCheck, Cpu, Code, Layers } from 'lucide-react';
import heroFluidPattern from '../assets/images/hero_fluid_pattern_1784809845809.webp';

interface HeroProps {
  onRequestQuote: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onViewPortfolio }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 sm:pt-36 pb-20 overflow-hidden font-sans bg-white text-slate-900"
    >
      {/* Background Ambient Glows & Subtle Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Full-bleed background 3D Ribbon Wave Image with smooth dual gradient blend */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-75">
          <img
            src={heroFluidPattern}
            alt="3D Organic Ribbon Wave Pattern"
            className="w-full h-full object-cover object-right transition-transform duration-1000 scale-100"
            referrerPolicy="no-referrer"
          />
          {/* Dual gradient fade so it blends seamlessly into white on both left and bottom edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 lg:via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none z-10" />
      </div>

      <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1440px] mx-auto w-full">
        {/* Hero Content Block */}
        <div className="max-w-3xl flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-blue-800 font-caps text-xs font-bold mb-6 tracking-widest bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-sm uppercase backdrop-blur-md self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            ENTERPRISE ENGINEERING & DEVELOPMENT • EST. 2018
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-sans text-slate-900 mb-6 leading-[1.06] tracking-tight">
            Your Digital Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">Starts Here.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-sans font-normal">
            SRV Technology empowers global organizations through custom software engineering, mobile applications (React Native & Flutter), Syspro ERP & Salesforce CRM, e-commerce engines, cybersecurity, and high-performance AI/ML systems.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 mb-10">
            <button
              onClick={onRequestQuote}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold font-caps text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2.5 active:scale-95 shadow-xl shadow-blue-500/20 group uppercase"
              id="hero-request-quote-btn"
            >
              REQUEST FOR QUOTE{' '}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onViewPortfolio}
              className="border border-slate-300 bg-white/90 backdrop-blur-md text-slate-800 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold font-caps text-xs sm:text-sm tracking-wider hover:bg-slate-50 hover:border-blue-600 transition-all active:scale-95 shadow-sm uppercase"
              id="hero-view-portfolio-btn"
            >
              VIEW PORTFOLIO
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-caps font-bold text-slate-600">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-600" /> ISO & SOC2 Certified</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-600" /> 100% IP NDA Protected</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-blue-600" /> 99.9% Uptime SLA</span>
          </div>
        </div>

        {/* Quick Highlights Bar - Spans Full Container Width Perfectly */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-slate-700">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm sm:text-base">100+ Projects</p>
              <p className="text-xs text-slate-500">Delivered Worldwide</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <span className="material-symbols-outlined text-xl">code_off</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm sm:text-base">99.9% Quality</p>
              <p className="text-xs text-slate-500">Bug-Free Code SLA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <span className="material-symbols-outlined text-xl">speed</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm sm:text-base">Agile Sprints</p>
              <p className="text-xs text-slate-500">Rapid Turnaround</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <span className="material-symbols-outlined text-xl">support_agent</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm sm:text-base">24/7 Support</p>
              <p className="text-xs text-slate-500">Global SLA Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
