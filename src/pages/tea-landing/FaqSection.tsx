import React, { useState } from 'react';
import { FAQ_DATA } from './data';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export const FaqSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-10 bg-white border-b border-gray-100" id="faq">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#7d562d] font-bold text-xs tracking-[0.2em] uppercase">Got Questions?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#01261f] tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">Everything you need to know about setting up a direct garden store for your harvest.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all hover:border-[#01261f]/30">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer font-bold text-[#01261f] hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#7d562d] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#01261f]/10 text-[#01261f]">
            <MessageCircleQuestion className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#01261f] text-base">Have a specific question about your estate?</h3>
          <p className="text-xs text-[#414846]">Speak directly with our Darjeeling &amp; Siliguri estate marketing advisors.</p>
          <button onClick={onOpenAuditModal} className="px-5 py-2.5 bg-[#01261f] text-white rounded-lg text-xs font-bold hover:bg-[#1a3c34] transition-colors">
            Ask Our Tea Specialists
          </button>
        </div>
      </div>
    </section>
  );
};
