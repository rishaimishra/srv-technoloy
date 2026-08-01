import React, { useState } from 'react';
import { CheckCircle2, TrendingUp, RefreshCw, ShoppingBag, DollarSign, Layers } from 'lucide-react';
import { INITIAL_HARVEST_METRICS, SEASON_PRESETS, BrandMetrics } from './data';

export const OurApproach: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const [metrics, setMetrics] = useState<BrandMetrics>(INITIAL_HARVEST_METRICS);
  const [activeSeason, setActiveSeason] = useState<'spring' | 'summer' | 'autumn'>('spring');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSeasonChange = (season: 'spring' | 'summer' | 'autumn') => {
    setActiveSeason(season);
    setMetrics(SEASON_PRESETS[season]);
  };

  const simulateNewOrder = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setMetrics((prev) => ({
        ...prev,
        onlineOrders: prev.onlineOrders + 1,
        inventory: prev.inventory.map((item, idx) => (idx === 0 ? { ...item, soldPercentage: Math.min(item.soldPercentage + 2, 100) } : item)),
      }));
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section className="py-24 bg-white px-4 md:px-10 overflow-hidden border-b border-slate-100" id="approach">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-blue-700 font-semibold text-xs tracking-[0.2em] uppercase font-mono">Our Approach</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-slate-900 leading-tight tracking-tight">
                The Complete Direct-to-Consumer Engine for Tea Brands.
              </h2>
            </div>

            <ul className="space-y-6">
              {[
                { title: 'Mobile-First Shopify Storefront', desc: 'Fast, elegant e-commerce design tailored for tea tasting notes, origin storytelling, and gift boxes.' },
                { title: 'Connoisseur Ads (Meta & Google)', desc: 'High-ROAS campaigns targeting tea lovers, organic food shoppers, and luxury gift buyers.' },
                { title: 'WhatsApp Replenishment Automation', desc: 'Automated subscription re-orders, shipment updates, and instant customer service bots.' },
                { title: 'Global Shipping & Tax Integration', desc: 'Seamless multi-currency checkout, automated DHL/FedEx exports, and customs compliance.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm sm:text-base mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
              >
                REQUEST BRAND GROWTH STRATEGY
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="p-6 sm:p-8 rounded-2xl shadow-xl relative border border-slate-200 bg-white">
              <div className="flex flex-wrap justify-between items-center mb-6 gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    D2C Brand Growth Dashboard
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{metrics.season}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[11px] font-bold tracking-wider uppercase">SAMPLE METRICS</span>
                  <button
                    onClick={simulateNewOrder}
                    disabled={isSimulating}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-all active:rotate-180"
                    title="Simulate an order"
                  >
                    <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-lg mb-6 text-xs font-semibold">
                {(['spring', 'summer', 'autumn'] as const).map((season, idx) => (
                  <button
                    key={season}
                    onClick={() => handleSeasonChange(season)}
                    className={`flex-1 py-1.5 rounded-md transition-all ${activeSeason === season ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {['Direct Flush Drop', 'Festive Campaign', 'Gift Box Season'][idx]}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="text-xs sm:text-sm text-slate-600 mb-1 font-medium flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-blue-600" />
                    D2C Brand Orders
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">{metrics.onlineOrders}</div>
                  <div className="text-xs text-blue-700 mt-2 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +{metrics.orderGrowthVsLastMonth}% vs last month
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="text-xs sm:text-sm text-slate-600 mb-1 font-medium flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    CPA (Cost / Customer)
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">₹{metrics.cpaInr}</div>
                  <div className="text-xs text-slate-500 mt-2 font-medium">Blended Ad Average</div>
                </div>
              </div>

              <div className="space-y-5">
                {metrics.inventory.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-slate-700 font-medium">{item.grade}</span>
                      <span className="font-bold text-slate-900 font-mono">{item.soldPercentage}% Inventory Sold</span>
                    </div>
                    <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-700 ${idx % 2 === 0 ? 'bg-indigo-500' : 'bg-blue-600'}`}
                        style={{ width: `${item.soldPercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Illustrative example — Shopify Store + Meta Ads + Shiprocket</span>
                <span className="text-blue-700 font-semibold">Sample Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
