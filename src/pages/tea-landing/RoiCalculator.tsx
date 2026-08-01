import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditModal }) => {
  const [monthlyOrders, setMonthlyOrders] = useState<number>(500);
  const [avgOrderValueInr, setAvgOrderValueInr] = useState<number>(1500);
  const [marketplaceCutPct, setMarketplaceCutPct] = useState<number>(30);
  const [d2cShiftPct, setD2cShiftPct] = useState<number>(50);

  const totalAnnualSales = monthlyOrders * avgOrderValueInr * 12;
  const d2cAnnualSales = totalAnnualSales * (d2cShiftPct / 100);
  const remainingMarketplaceSales = totalAnnualSales - d2cAnnualSales;

  const traditionalNetRevenue = totalAnnualSales * (1 - marketplaceCutPct / 100);
  const newD2cNetRevenue = d2cAnnualSales * 0.95 + remainingMarketplaceSales * (1 - marketplaceCutPct / 100);

  const extraAnnualProfit = newD2cNetRevenue - traditionalNetRevenue;
  const marginGrowthPct = Math.round((extraAnnualProfit / traditionalNetRevenue) * 100);

  return (
    <section className="py-20 bg-white px-4 md:px-10 border-b border-slate-100" id="roi-calculator">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-7/12 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                Interactive Tea Brand Profit Calculator
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Calculate your tea brand's D2C margin recovery.
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                See how migrating customer orders from third-party marketplaces and distributors to your owned Shopify
                brand store instantly recovers lost profits and increases annual enterprise valuation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-blue-300 tracking-wider flex justify-between">
                    <span>Current Monthly Orders</span>
                    <span className="text-white font-mono">{monthlyOrders.toLocaleString()} orders</span>
                  </label>
                  <input type="range" min="100" max="5000" step="100" value={monthlyOrders} onChange={(e) => setMonthlyOrders(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-blue-300 tracking-wider flex justify-between">
                    <span>Average Order Value (AOV)</span>
                    <span className="text-white font-mono">₹{avgOrderValueInr.toLocaleString()}</span>
                  </label>
                  <input type="range" min="500" max="6000" step="100" value={avgOrderValueInr} onChange={(e) => setAvgOrderValueInr(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-blue-300 tracking-wider flex justify-between">
                    <span>Marketplace / Retail Fee (%)</span>
                    <span className="text-white font-mono">{marketplaceCutPct}%</span>
                  </label>
                  <input type="range" min="15" max="45" step="1" value={marketplaceCutPct} onChange={(e) => setMarketplaceCutPct(Number(e.target.value))} className="w-full accent-amber-500 cursor-pointer" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-blue-300 tracking-wider flex justify-between">
                    <span>Orders Shifted to Owned D2C Store</span>
                    <span className="text-white font-mono">{d2cShiftPct}%</span>
                  </label>
                  <input type="range" min="10" max="90" step="5" value={d2cShiftPct} onChange={(e) => setD2cShiftPct(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 bg-slate-800 p-6 sm:p-8 rounded-xl border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Total Gross Brand Sales</div>
                <div className="text-2xl font-bold text-white font-mono mt-1">
                  ₹{(totalAnnualSales / 100000).toFixed(2)} <span className="text-sm font-normal text-white/70">Lakhs / Year</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-blue-300 uppercase font-semibold">100% Marketplace Net</div>
                  <div className="text-lg font-bold text-white/80 font-mono mt-1">₹{(traditionalNetRevenue / 100000).toFixed(2)} Lakhs</div>
                </div>
                <div>
                  <div className="text-xs text-blue-300 uppercase font-semibold">With {d2cShiftPct}% D2C Store Shift</div>
                  <div className="text-lg font-bold text-amber-300 font-mono mt-1">₹{(newD2cNetRevenue / 100000).toFixed(2)} Lakhs</div>
                </div>
              </div>

              <div className="p-5 bg-slate-950 rounded-xl border border-blue-500/40 space-y-1">
                <div className="text-xs uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Net Additional Annual Profit
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">+₹{(extraAnnualProfit / 100000).toFixed(2)} Lakhs</div>
                <div className="text-xs text-blue-300 pt-1">
                  Net Profit Expansion: <span className="text-amber-300 font-bold">+{marginGrowthPct}% higher retained revenue</span>
                </div>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
              >
                <span>CLAIM THIS STRATEGY FOR YOUR BRAND</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
