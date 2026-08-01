import React from 'react';
import logoSrc from '../../assets/images/srv-tech-board-footer.png';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenCaseStudies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal, onOpenCaseStudies }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs w-full border-t border-slate-800 py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
          <img src={logoSrc} alt="SRV Technology" className="h-12 w-auto" />
          <p className="max-w-xs text-slate-500 text-xs leading-relaxed">
            © 2026 SRV Technology. Cultivating D2C Brand Excellence for Specialty Tea Brands &amp; Retailers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-semibold text-slate-300">
          <button onClick={() => scrollToSection('regions')} className="hover:text-white transition-colors">
            Specialized Regions
          </button>
          <button onClick={onOpenCaseStudies} className="hover:text-white transition-colors">
            Brand Case Studies
          </button>
          <button onClick={onOpenAuditModal} className="text-white font-bold underline hover:text-blue-300 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};
