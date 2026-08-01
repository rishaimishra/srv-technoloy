import React, { useState } from 'react';
import { REGIONS_DATA } from './data';
import { MapPin, Mountain, Globe, Sparkles, Check } from 'lucide-react';
import teaLeafMacroImg from '../../assets/landing/tea-leaf-macro.webp';

export const RegionSpecialization: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('darjeeling');
  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  return (
    <section className="relative py-28 px-4 md:px-10 bg-slate-900 text-white overflow-hidden" id="regions">
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src={teaLeafMacroImg}
          alt="Macro close up of a vibrant green tea leaf with delicate water droplets"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto text-center max-w-4xl space-y-8">
        <div className="space-y-4">
          <span className="text-blue-300 font-semibold text-xs tracking-[0.2em] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Specialized for Specialty Tea Labels
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Built exclusively for D2C Tea Brands &amp; Artisanal Tea Retailers.
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed text-slate-200">
            We aren't a generic web agency. Headquartered in Siliguri with deep tea heritage links across
            Darjeeling, Dooars, and Assam, we understand consumer tea buying behavior, flavor profiling, and
            global D2C logistics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {REGIONS_DATA.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`p-4 rounded-xl border transition-all backdrop-blur-sm text-center flex flex-col items-center justify-center gap-1 ${
                  isSelected ? 'bg-blue-600 border-blue-400 text-white shadow-xl scale-[1.03]' : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="font-bold text-base sm:text-lg tracking-wide">{region.name}</span>
                <span className="text-[11px] opacity-80 flex items-center gap-1">
                  <Mountain className="w-3 h-3" />
                  {region.elevation}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-left space-y-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/15 pb-4 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <h3 className="text-2xl font-bold text-white">{selectedRegion.name}</h3>
              </div>
              <p className="text-xs text-blue-300 mt-1 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {selectedRegion.d2cGrowthRate}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg border border-white/10">
              <Mountain className="w-4 h-4 text-slate-300" />
              <span className="text-xs text-slate-300 font-mono">{selectedRegion.elevation}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed">{selectedRegion.description}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2 bg-black/20 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Target Tea Brand Segments</span>
              <ul className="space-y-1 text-xs text-white/90">
                {selectedRegion.keyBrands.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 bg-black/20 p-4 rounded-xl border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Hero Products &amp; Collections</span>
              <ul className="space-y-1 text-xs text-white/90">
                {selectedRegion.flushTypes.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 bg-black/20 p-4 rounded-xl border border-white/10 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                Direct Export Destinations
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedRegion.exportDestinations.map((country, idx) => (
                  <span key={idx} className="bg-blue-600/80 text-white px-2.5 py-1 rounded text-[11px] font-semibold border border-blue-400/30">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
