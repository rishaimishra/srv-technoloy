import React, { useState } from 'react';
import { TrendingDown, EyeOff, AlertCircle, ArrowUpRight, CheckCircle, XCircle } from 'lucide-react';

interface ProblemCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bulkImpact: string;
  d2cSolution: string;
}

export const MarketReality: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const [selectedCard, setSelectedCard] = useState<ProblemCard | null>(null);

  const problemCards: ProblemCard[] = [
    {
      id: 'marketplace-commissions',
      icon: <TrendingDown className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />,
      title: 'Marketplace fees erode your margins.',
      description: 'Selling tea via Amazon, Flipkart, or multi-brand aggregators forces you to surrender 25% to 35% in platform commissions, ad fees, and forced discount wars.',
      bulkImpact: 'On a ₹1,000 tea tin, marketplaces eat ₹320 in commissions, ad spend, and referral fees — leaving your tea brand with slim net margins and delayed payouts.',
      d2cSolution: 'Your own Shopify brand store keeps 100% of revenue, captures direct customer data, and increases net profit margins to 50%+ with automated subscription options.',
    },
    {
      id: 'zero-data-ownership',
      icon: <EyeOff className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />,
      title: 'Distributors & retail keep your buyer data.',
      description: 'When tea lovers buy your brand through offline distributors or generic portals, you get zero customer emails, phone numbers, or repeat order insight.',
      bulkImpact: 'Your premium tea buyers get targeted by competing brands on third-party portals while your brand spends more money starting from scratch every month.',
      d2cSolution: 'Your brand-owned store builds a high-value customer list, enabling automated WhatsApp replenishment reminders that drive 40%+ repeat customer lifetime value.',
    },
    {
      id: 'lost-global-enquiries',
      icon: <AlertCircle className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />,
      title: 'High drop-off on global tea orders.',
      description: 'International buyers in Tokyo, London, or New York bounce from clunky websites or slow manual email quote flows due to currency friction and high shipping costs.',
      bulkImpact: 'Over 65% of international tea connoisseurs abandon their carts when faced with manual currency conversions, missing local payment options, or unclear shipping taxes.',
      d2cSolution: 'SRV Technology builds seamless multi-currency checkout, automated DHL export shipping, and instant WhatsApp chat support that converts global leads.',
    },
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-10 border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-blue-700 font-semibold text-xs tracking-[0.2em] uppercase font-mono">The E-Commerce Challenge</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4 text-slate-900 tracking-tight">
            Why tea brands struggle on third-party sales channels.
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Click any problem area below to compare marketplace sales versus building a direct-to-consumer brand engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problemCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="p-8 sm:p-10 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl mb-6 group-hover:bg-blue-600 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                <span>View Channel Comparison</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button onClick={() => setSelectedCard(null)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100" aria-label="Close">
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 text-white rounded-xl">{selectedCard.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{selectedCard.title}</h3>
            </div>

            <p className="text-sm text-slate-600">{selectedCard.description}</p>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-red-600" />
                  Marketplace / Wholesale Distributor Model
                </div>
                <p className="text-xs text-red-900 leading-relaxed">{selectedCard.bulkImpact}</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  SRV Technology Direct-to-Consumer Brand Engine
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">{selectedCard.d2cSolution}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setSelectedCard(null)} className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-lg hover:bg-slate-50">
                Close
              </button>
              <button
                onClick={() => { setSelectedCard(null); onOpenAuditModal(); }}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700"
              >
                Audit Your Brand Channel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
