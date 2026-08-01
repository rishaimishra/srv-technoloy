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
      icon: <TrendingDown className="w-6 h-6 text-[#01261f] group-hover:text-white transition-colors" />,
      title: 'Marketplace fees erode your margins.',
      description: 'Selling tea via Amazon, Flipkart, or multi-brand aggregators forces you to surrender 25% to 35% in platform commissions, ad fees, and forced discount wars.',
      bulkImpact: 'On a ₹1,000 tea tin, marketplaces eat ₹320 in commissions, ad spend, and referral fees—leaving your tea brand with slim net margins and delayed payouts.',
      d2cSolution: 'Your own Shopify brand store keeps 100% of revenue, captures direct customer data, and increases net profit margins to 50%+ with automated subscription options.',
    },
    {
      id: 'zero-data-ownership',
      icon: <EyeOff className="w-6 h-6 text-[#01261f] group-hover:text-white transition-colors" />,
      title: 'Distributors & retail keep your buyer data.',
      description: 'When tea lovers buy your brand through offline distributors or generic portals, you get zero customer emails, phone numbers, or repeat order insight.',
      bulkImpact: 'Your premium tea buyers get targeted by competing brands on third-party portals while your brand spends more money starting from scratch every month.',
      d2cSolution: 'Your brand-owned store builds a high-value customer list, enabling automated WhatsApp replenishment reminders that drive 40%+ repeat customer lifetime value.',
    },
    {
      id: 'lost-global-enquiries',
      icon: <AlertCircle className="w-6 h-6 text-[#01261f] group-hover:text-white transition-colors" />,
      title: 'High drop-off on global tea orders.',
      description: 'International buyers in Tokyo, London, or New York bounce from clunky websites or slow manual email quote flows due to currency friction and high shipping costs.',
      bulkImpact: 'Over 65% of international tea connoisseurs abandon their carts when faced with manual currency conversions, missing local payment options, or unclear shipping taxes.',
      d2cSolution: 'SRV Technology builds seamless multi-currency checkout, automated DHL export shipping, and instant WhatsApp chat support that converts global leads.',
    },
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-10 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#7d562d] font-semibold text-xs tracking-[0.2em] uppercase">The E-Commerce Challenge</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-[#01261f] tracking-tight">
            Why tea brands struggle on third-party sales channels.
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Click any problem area below to compare marketplace sales versus building a direct-to-consumer brand engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problemCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="p-8 sm:p-10 bg-white border border-gray-200/80 shadow-sm rounded-2xl hover:shadow-xl hover:border-[#01261f]/30 transition-all duration-300 group cursor-pointer relative hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#1a3c34]/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#01261f] transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#01261f]">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#7d562d] group-hover:text-[#01261f] transition-colors">
                <span>View Channel Comparison</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button onClick={() => setSelectedCard(null)} className="absolute top-4 right-4 text-gray-500 hover:text-[#01261f] p-1 rounded-full hover:bg-gray-100" aria-label="Close">
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#01261f] text-white rounded-lg">{selectedCard.icon}</div>
              <h3 className="text-xl font-bold text-[#01261f]">{selectedCard.title}</h3>
            </div>

            <p className="text-sm text-[#414846]">{selectedCard.description}</p>

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
              <button onClick={() => setSelectedCard(null)} className="px-4 py-2 border border-[#c1c8c4] text-xs font-semibold rounded hover:bg-[#e4e2dd]">
                Close
              </button>
              <button
                onClick={() => { setSelectedCard(null); onOpenAuditModal(); }}
                className="px-5 py-2 bg-[#01261f] text-white text-xs font-semibold rounded hover:bg-[#1a3c34]"
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
