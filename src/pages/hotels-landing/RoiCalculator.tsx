import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenFormWithParams: (rooms: number, estSavings: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenFormWithParams }) => {
  const [rooms, setRooms] = useState<number>(12);
  const [adr, setAdr] = useState<number>(3500);
  const [occupancy, setOccupancy] = useState<number>(65);
  const [otaPercent, setOtaPercent] = useState<number>(75);
  const [otaCommission, setOtaCommission] = useState<number>(18);

  const totalRoomNightsPerMonth = rooms * 30 * (occupancy / 100);
  const totalMonthlyRoomRevenue = totalRoomNightsPerMonth * adr;
  const otaRevenuePerMonth = totalMonthlyRoomRevenue * (otaPercent / 100);
  const monthlyOtaCommissionPaid = otaRevenuePerMonth * (otaCommission / 100);
  const yearlyOtaCommissionPaid = monthlyOtaCommissionPaid * 12;

  const reclaimTargetPercent = 0.6;
  const yearlySavingsReclaimed = yearlyOtaCommissionPaid * reclaimTargetPercent;

  const formatRupees = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  return (
    <section id="calculator-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Margin Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How much money are you giving away to OTAs?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Calculate your exact monthly commission leak and see how much revenue you can reclaim with direct bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between border-b border-slate-700 pb-3">
              <span>Enter Property Parameters</span>
              <span className="text-xs text-blue-400 font-normal">Adjust sliders</span>
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">Total Rooms / Inventory:</label>
                  <span className="text-base font-extrabold text-blue-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {rooms} rooms
                  </span>
                </div>
                <input type="range" min={2} max={60} step={1} value={rooms} onChange={(e) => setRooms(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">Average Daily Room Rate (ADR):</label>
                  <span className="text-base font-extrabold text-blue-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {formatRupees(adr)} / night
                  </span>
                </div>
                <input type="range" min={1000} max={15000} step={250} value={adr} onChange={(e) => setAdr(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">Average Monthly Occupancy Rate:</label>
                  <span className="text-base font-extrabold text-blue-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {occupancy}%
                  </span>
                </div>
                <input type="range" min={20} max={95} step={5} value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">
                    Share of Bookings from OTAs (Booking.com, MakeMyTrip, Agoda, Goibibo):
                  </label>
                  <span className="text-base font-extrabold text-amber-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {otaPercent}%
                  </span>
                </div>
                <input type="range" min={30} max={95} step={5} value={otaPercent} onChange={(e) => setOtaPercent(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">Average OTA Commission Cut Rate:</label>
                  <span className="text-base font-extrabold text-red-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {otaCommission}%
                  </span>
                </div>
                <input type="range" min={12} max={28} step={1} value={otaCommission} onChange={(e) => setOtaCommission(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Estimated Margin Leak</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-6">Your Property Loss &amp; Reclaim Analysis</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Monthly OTA Commission Paid</div>
                  <div className="text-2xl font-black text-red-400 font-mono">
                    {formatRupees(monthlyOtaCommissionPaid)}
                    <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Yearly OTA Commission Handed Over</div>
                  <div className="text-3xl font-black text-red-500 font-mono">
                    {formatRupees(yearlyOtaCommissionPaid)}
                    <span className="text-xs text-slate-400 font-normal ml-1">/ year</span>
                  </div>
                </div>

                <div className="bg-blue-950/60 p-5 rounded-xl border-2 border-blue-500/60 shadow-lg">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Potential Margin Reclaimed</span>
                  </div>
                  <div className="text-3xl font-black text-emerald-400 font-mono">
                    {formatRupees(yearlySavingsReclaimed)}
                    <span className="text-xs text-slate-300 font-normal ml-1">/ year</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                    By shifting ~60% of OTA bookings to your own direct-booking engine &amp; WhatsApp setup.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenFormWithParams(rooms, yearlySavingsReclaimed)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <span>Reclaim This Margin Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
