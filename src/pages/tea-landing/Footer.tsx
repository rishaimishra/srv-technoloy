import React from 'react';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenCaseStudies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal, onOpenCaseStudies }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-900 text-xs w-full border-t border-gray-200 py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xl font-black text-[#01261f] tracking-tight">SRV Technology</div>
          <p className="max-w-xs text-gray-500 text-xs leading-relaxed">
            © 2026 SRV Technology. Cultivating D2C Brand Excellence for Specialty Tea Brands &amp; Retailers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-semibold text-gray-600">
          <button
            onClick={() => alert('SRV Technology Privacy Policy: We prioritize tea brand data confidentiality and proprietary customer data protection.')}
            className="hover:text-[#7d562d] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => alert('Terms of Service: End-to-end direct D2C platform implementation terms for registered tea brands and tea companies.')}
            className="hover:text-[#7d562d] transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          <button onClick={() => scrollToSection('regions')} className="hover:text-[#7d562d] transition-colors cursor-pointer">
            Specialized Regions
          </button>
          <button onClick={onOpenCaseStudies} className="hover:text-[#7d562d] transition-colors cursor-pointer">
            Brand Case Studies
          </button>
          <button onClick={onOpenAuditModal} className="text-[#01261f] font-bold underline hover:text-[#7d562d] transition-colors cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};
