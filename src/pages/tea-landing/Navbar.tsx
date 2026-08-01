import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSrc from '../../assets/images/srv-tech-board.png';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onOpenCaseStudies: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal, onOpenCaseStudies, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'py-2.5 shadow-sm border-b border-gray-200/80' : 'py-4 border-b border-gray-100'
      }`}
      id="nav"
    >
      <div className="flex justify-between items-center px-4 md:px-10 max-w-[1280px] mx-auto w-full">
        <a href="#" className="hover:opacity-90 transition-opacity flex items-center gap-2">
          <img src={logoSrc} alt="SRV Technology" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <button
            onClick={() => scrollToSection('approach')}
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'approach' ? 'text-[#01261f] font-bold border-b-2 border-[#01261f]' : 'text-[#414846] hover:text-[#01261f]'
            }`}
          >
            D2C Services
          </button>
          <button onClick={onOpenCaseStudies} className="text-[#414846] hover:text-[#01261f] transition-colors py-1 flex items-center gap-1 cursor-pointer">
            Brand Studies
            <span className="text-[10px] bg-[#ffca98] text-[#7a532a] font-bold px-1.5 py-0.5 rounded">3 NEW</span>
          </button>
          <button
            onClick={() => scrollToSection('regions')}
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'regions' ? 'text-[#01261f] font-bold border-b-2 border-[#01261f]' : 'text-[#414846] hover:text-[#01261f]'
            }`}
          >
            Specializing Regions
          </button>
          <button onClick={() => scrollToSection('process')} className="text-[#414846] hover:text-[#01261f] transition-colors py-1 cursor-pointer">
            Process
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-[#414846] hover:text-[#01261f] transition-colors py-1 cursor-pointer">
            FAQ
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAuditModal}
            className="bg-[#01261f] text-white px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#1a3c34] hover:text-[#83a69c] transition-all active:scale-95 duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            GET BRAND AUDIT
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={onOpenAuditModal} className="bg-[#01261f] text-white px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider">
            GET AUDIT
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#01261f] hover:bg-[#f0eee9] rounded-lg transition-colors cursor-pointer" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-3 font-medium text-gray-900">
            <button onClick={() => scrollToSection('approach')} className="text-left py-2 border-b border-gray-100 hover:text-[#01261f]">
              D2C Brand Services
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCaseStudies(); }}
              className="text-left py-2 border-b border-gray-100 hover:text-[#01261f] flex items-center justify-between"
            >
              Brand Case Studies
              <span className="text-[10px] bg-[#ffca98] text-[#7a532a] font-bold px-2 py-0.5 rounded">3 Studies</span>
            </button>
            <button onClick={() => scrollToSection('regions')} className="text-left py-2 border-b border-gray-100 hover:text-[#01261f]">
              Tea Brand Regions (Darjeeling, Siliguri, Dooars)
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left py-2 border-b border-gray-100 hover:text-[#01261f]">
              4-Step Brand Growth Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 border-b border-gray-100 hover:text-[#01261f]">
              Frequently Asked Questions
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-[#01261f]">
              Contact Us
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuditModal(); }}
              className="w-full bg-[#01261f] text-white py-3 rounded text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              GET FREE BRAND AUDIT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
