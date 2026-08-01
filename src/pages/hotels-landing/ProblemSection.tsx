import React from 'react';
import { Banknote, Globe, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      icon: Banknote,
      title: 'Commission eats your margin first',
      desc: "Every OTA booking hands over 15–25% of the room rate before you've paid staff, utilities, or upkeep — on every single stay, indefinitely.",
    },
    {
      icon: Globe,
      title: "Your online presence isn't an engine",
      desc: "A Facebook page and an OTA listing don't let a guest book directly. Anyone who'd rather book with you has nowhere to do it.",
    },
    {
      icon: Clock,
      title: 'Late enquiries go cold by morning',
      desc: "A guest messages at 11pm about next week's stay. By the time someone replies, they've already booked elsewhere. You need speed.",
    },
  ];

  return (
    <section id="problem-section" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 tracking-widest uppercase mb-3 block font-mono">THE PROBLEM</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Every night your property loses money it never sees.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
