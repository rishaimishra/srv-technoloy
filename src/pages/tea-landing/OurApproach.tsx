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
    <section className="py-24 bg-white px-4 md:px-10 overflow-hidden border-b border-gray-100" id="approach">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#7d562d] font-semibold text-xs tracking-[0.2em] uppercase">Our Approach</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-[#01261f] leading-tight">
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
                  <CheckCircle2 className="w-6 h-6 text-[#7d562d] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#01261f] text-base sm:text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="bg-[#01261f] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-[#1a3c34] transition-all shadow-md cursor-pointer"
              >
                REQUEST BRAND GROWTH STRATEGY
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="p-6 sm:p-8 rounded-2xl shadow-xl relative border border-gray-200 bg-white">
              <div className="flex flex-wrap justify-between items-center mb-6 gap-3 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="font-bold text-[#01261f] text-lg sm:text-xl flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#7d562d]" />
                    D2C Brand Growth Dashboard
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{metrics.season}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#01261f]/10 text-[#01261f] rounded-full text-[11px] font-bold tracking-wider uppercase">LIVE SALES METRICS</span>
                  <button
                    onClick={simulateNewOrder}
                    disabled={isSimulating}
                    className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-[#01261f] transition-all active:rotate-180 cursor-pointer"
                    title="Simulate live order"
                  >
                    <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="flex bg-gray-100 p-1 rounded-lg mb-6 text-xs font-semibold">
                {(['spring', 'summer', 'autumn'] as const).map((season, idx) => (
                  <button
                    key={season}
                    onClick={() => handleSeasonChange(season)}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${activeSeason === season ? 'bg-[#01261f] text-white shadow-sm' : 'text-gray-600 hover:text-[#01261f]'}`}
                  >
                    {['Direct Flush Drop', 'Festive Campaign', 'Gift Box Season'][idx]}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="p-5 sm:p-6 bg-gray-50 border border-gray-100 rounded-xl relative overflow-hidden">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 font-medium flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-[#7d562d]" />
                    D2C Brand Orders
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#01261f] tracking-tight font-mono">{metrics.onlineOrders}</div>
                  <div className="text-xs text-[#7d562d] mt-2 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +{metrics.orderGrowthVsLastMonth}% vs last month
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-gray-50 border border-gray-100 rounded-xl">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 font-medium flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-[#7d562d]" />
                    CPA (Cost / Customer)
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#01261f] tracking-tight font-mono">₹{metrics.cpaInr}</div>
                  <div className="text-xs text-gray-500 mt-2 font-medium">Blended Ad Average</div>
                </div>
              </div>

              <div className="space-y-5">
                {metrics.inventory.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-700 font-medium">{item.grade}</span>
                      <span className="font-bold text-[#01261f] font-mono">{item.soldPercentage}% Inventory Sold</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-700 ${idx % 2 === 0 ? 'bg-[#7d562d]' : 'bg-[#01261f]'}`}
                        style={{ width: `${item.soldPercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Syncing: Shopify Store + Meta Ads + Shiprocket</span>
                <span className="text-[#01261f] font-semibold">Live Data Feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
