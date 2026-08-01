import React from 'react';
import { Calendar } from 'lucide-react';

interface FinalCtaProps {
  onOpenScheduleModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenScheduleModal }) => {
  return (
    <section className="py-24 px-4 md:px-10 text-center bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01261f] tracking-tight">
          Start reclaiming your harvest's value today.
        </h2>
        <p className="text-base sm:text-lg text-[#414846] max-w-2xl mx-auto leading-relaxed">
          Join the digital transformation of North Bengal's tea heritage. Let's build your direct-to-consumer legacy together.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenScheduleModal}
            className="bg-[#7d562d] text-white px-10 py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:bg-[#ffca98] hover:text-[#7a532a] transition-all active:scale-95 cursor-pointer inline-flex items-center gap-3 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>SCHEDULE YOUR CONSULTATION</span>
          </button>
        </div>
      </div>
    </section>
  );
};
