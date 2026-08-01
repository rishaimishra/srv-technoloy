import React from 'react';
import logoSrc from '../../assets/images/srv-tech-board-footer.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <img src={logoSrc} alt="SRV Technology" className="h-14 w-auto" />

        <button
          onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-slate-300 font-semibold hover:text-white transition-colors"
        >
          Contact Us
        </button>

        <p className="text-slate-500 text-[11px] leading-relaxed max-w-2xl">
          © SRV Technology — Digital Marketing · Website Development · AI Development, for Hotels &amp; Hospitality
          across West Bengal
        </p>
      </div>
    </footer>
  );
};
