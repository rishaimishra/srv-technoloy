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
        isScrolled ? 'py-2.5 shadow-sm border-b border-slate-200' : 'py-4 border-b border-slate-100'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 max-w-[1280px] mx-auto w-full">
        <img src={logoSrc} alt="SRV Technology" className="h-10 w-auto" />

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <button
            onClick={() => scrollToSection('approach')}
            className={`transition-colors py-1 ${activeSection === 'approach' ? 'text-blue-700 font-bold border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-700'}`}
          >
            D2C Services
          </button>
          <button onClick={onOpenCaseStudies} className="text-slate-600 hover:text-blue-700 transition-colors py-1 flex items-center gap-1">
            Brand Studies
            <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">3 NEW</span>
          </button>
          <button
            onClick={() => scrollToSection('regions')}
            className={`transition-colors py-1 ${activeSection === 'regions' ? 'text-blue-700 font-bold border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-700'}`}
          >
            Specializing Regions
          </button>
          <button onClick={() => scrollToSection('process')} className="text-slate-600 hover:text-blue-700 transition-colors py-1">
            Process
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-slate-600 hover:text-blue-700 transition-colors py-1">
            FAQ
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAuditModal}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center gap-1.5"
          >
            GET BRAND AUDIT
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={onOpenAuditModal} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            GET AUDIT
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-3 font-medium text-slate-900">
            <button onClick={() => scrollToSection('approach')} className="text-left py-2 border-b border-slate-100 hover:text-blue-700">
              D2C Brand Services
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCaseStudies(); }}
              className="text-left py-2 border-b border-slate-100 hover:text-blue-700 flex items-center justify-between"
            >
              Brand Case Studies
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">3 Studies</span>
            </button>
            <button onClick={() => scrollToSection('regions')} className="text-left py-2 border-b border-slate-100 hover:text-blue-700">
              Tea Brand Regions (Darjeeling, Siliguri, Dooars)
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left py-2 border-b border-slate-100 hover:text-blue-700">
              4-Step Brand Growth Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 border-b border-slate-100 hover:text-blue-700">
              Frequently Asked Questions
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-blue-700">
              Contact Us
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuditModal(); }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
