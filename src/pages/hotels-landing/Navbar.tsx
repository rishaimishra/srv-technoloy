import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSrc from '../../assets/images/srv-tech-board.png';

interface NavbarProps {
  onOpenForm: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm, onOpenDemo }) => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <img src={logoSrc} alt="SRV Technology" className="h-10 w-auto" />

        <nav className="hidden md:flex items-center gap-8 text-xs font-caps font-bold text-slate-700 tracking-widest uppercase">
          <button onClick={() => scrollToSection('problem-section')} className="hover:text-blue-600 transition-colors">
            THE PROBLEM
          </button>
          <button onClick={() => scrollToSection('solution-section')} className="hover:text-blue-600 transition-colors">
            OUR SOLUTION
          </button>
          <button onClick={() => scrollToSection('calculator-section')} className="hover:text-blue-700 transition-colors text-blue-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            ROI CALCULATOR
          </button>
          <button onClick={() => scrollToSection('faq-section')} className="hover:text-blue-600 transition-colors">
            FAQ
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="border border-slate-300 text-slate-700 font-bold font-caps text-xs px-4 py-2.5 rounded-full hover:bg-slate-50 hover:border-blue-600 transition-all"
          >
            VIEW LIVE DEMO
          </button>
          <button
            onClick={onOpenForm}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold font-caps text-xs px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            GET FREE REVIEW
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={onOpenForm} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold font-caps text-xs px-3 py-2 rounded-full">
            FREE REVIEW
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-lg">
          <button onClick={() => scrollToSection('problem-section')} className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 uppercase tracking-wider">
            THE PROBLEM
          </button>
          <button onClick={() => scrollToSection('solution-section')} className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 uppercase tracking-wider">
            OUR SOLUTION
          </button>
          <button onClick={() => scrollToSection('calculator-section')} className="block w-full text-left py-2 text-sm font-semibold text-blue-600 uppercase tracking-wider flex items-center justify-between">
            <span>ROI Calculator</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-normal">Interactive</span>
          </button>
          <button onClick={() => scrollToSection('faq-section')} className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 uppercase tracking-wider">
            FAQ
          </button>
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full text-center border border-slate-300 text-slate-700 text-xs font-bold py-3 rounded-full uppercase tracking-wider"
            >
              View Live Demo
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenForm(); }}
              className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold py-3 rounded-full uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              Get Free Website Review
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
