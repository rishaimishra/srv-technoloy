import React, { useState } from 'react';
import spaceWallpaper from '../assets/images/space-wallpaper.jpg';

export const StatsSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'all' | 'americas' | 'asia' | 'europe'>('all');

  const regionalData = {
    all: { clients: '100+', responseTime: '< 2 hrs', satisfaction: '99%' },
    americas: { clients: '45+', responseTime: '< 1 hr', satisfaction: '100%' },
    asia: { clients: '35+', responseTime: '< 30 mins', satisfaction: '98%' },
    europe: { clients: '20+', responseTime: '< 2 hrs', satisfaction: '99%' },
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Stats Numbers */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-7xl sm:text-8xl md:text-[110px] font-extrabold leading-none text-blue-700">
                50+
              </span>
              <div className="stat-line h-1 flex-grow bg-blue-200 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-slate-900 mb-6">
              Global Support Coverage
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Empowering businesses to achieve more through innovative software solutions, intelligent design, and expert consulting. Our team of experts is dedicated to helping you achieve your digital goals from all over the world.
            </p>

            {/* Interactive Region Selector */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-caps text-slate-500 mb-3 tracking-widest font-bold">
                SELECT REGION PERFORMANCE METRICS:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {(['all', 'americas', 'asia', 'europe'] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-caps font-semibold tracking-wider transition-all ${
                      activeRegion === reg
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {reg.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-center">
                <div>
                  <p className="text-xs text-slate-500">Active Clients</p>
                  <p className="text-lg font-bold text-blue-700">{regionalData[activeRegion].clients}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Avg SLA Response</p>
                  <p className="text-lg font-bold text-slate-900">{regionalData[activeRegion].responseTime}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Client Retention</p>
                  <p className="text-lg font-bold text-slate-900">{regionalData[activeRegion].satisfaction}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Stylized World Map & Badges */}
          <div className="relative aspect-[1.5/1] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg group" style={{ backgroundImage: `url(${spaceWallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* World Map SVG / Symbol Graphic */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <span className="material-symbols-outlined text-[200px] sm:text-[300px] text-blue-600 animate-pulse">
                public
              </span>
            </div>

            <div className="relative p-6 sm:p-8 h-full flex flex-col justify-between bg-gradient-to-t from-slate-50 via-white/80 to-transparent">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-caps text-blue-800 font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  LIVE SUPPORT AGENTS ONLINE
                </span>
                <span className="text-xs text-white font-caps font-bold">24/7 MONITORING</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-caps text-blue-700 font-bold mb-1 tracking-wider">COUNTRIES</p>
                  <p className="text-3xl font-bold text-slate-900">12+</p>
                  <p className="text-[11px] text-slate-500 mt-1">USA, UK, India, Aus, Canada & more</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-caps text-blue-700 font-bold mb-1 tracking-wider">UPWORK RATING</p>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold text-slate-900">4.8/5</p>
                    <span className="material-symbols-outlined text-amber-500 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">100% Job Success Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

