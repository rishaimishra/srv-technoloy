import React, { useState } from 'react';
import { Check, TrendingUp } from 'lucide-react';
import { PROPERTY_PRESETS } from './data';

export const FixSection: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('darjeeling-homestay');
  const currentPreset = PROPERTY_PRESETS.find((p) => p.id === selectedPresetId) || PROPERTY_PRESETS[0];

  const checklist = [
    'Mobile-first website with direct enquiry & booking capture',
    'Targeted ads to travellers actively planning a West Bengal stay',
    'Instant WhatsApp auto-response so no enquiry sits unanswered',
    'Simple monthly reporting — bookings, cost per enquiry, ROI',
  ];

  return (
    <section id="solution-section" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-blue-700 tracking-widest uppercase mb-3 block font-mono">HOW WE FIX IT</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              A direct-booking website guests actually use
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We design and build a website with a working booking or enquiry engine, then run Meta &amp; Google ads
              to bring qualified travellers straight to it — so a growing share of your bookings stop going through
              commission-taking platforms.
            </p>

            <ul className="space-y-4 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/80 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">Sample Monthly Snapshot</h3>
                  <p className="text-xs text-slate-400">Live property metrics demo</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  LIVE DATA
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
                  Select Property Preset:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PROPERTY_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPresetId(p.id)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg text-left transition-all border ${
                        selectedPresetId === p.id
                          ? 'bg-blue-600 text-white border-blue-400 shadow'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      <div className="truncate font-bold">{p.name}</div>
                      <div className="text-[10px] opacity-80">{p.rooms} rooms · {p.location}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-sm text-slate-300 font-medium">Website enquiries</span>
                  <span className="text-2xl font-black text-white">{currentPreset.websiteEnquiries}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-sm text-slate-300 font-medium">Cost per enquiry</span>
                  <span className="text-lg font-bold text-slate-100">{currentPreset.costPerEnquiry}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-sm text-slate-300 font-medium">Avg. response time</span>
                  <span className="text-base font-bold text-blue-300">{currentPreset.avgResponseTime}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-slate-300 font-medium">OTA commission avoided</span>
                  <span className="text-base font-extrabold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {currentPreset.commissionAvoided}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                Illustrative example of what a property's dashboard tracks once campaigns are running. Performance
                varies by location and property type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
