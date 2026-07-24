import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Settings, Smartphone, Database, ShoppingCart, Cpu, Rocket, Users, BookOpen, Mail, X } from 'lucide-react';
import { Logo } from './Logo';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 z-[90] backdrop-blur-sm transition-opacity"
        onClick={onClose}
        id="side-drawer-backdrop"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-[100] flex flex-col p-6 sm:p-8 gap-5 border-l border-slate-200 overflow-y-auto font-sans"
        id="sideDrawer"
      >
        <div className="flex justify-between items-center pb-4 border-b border-slate-200">
          <Logo size="sm" />
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            aria-label="Close Drawer"
            id="close-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => handleNav('/')}
            className="text-left text-blue-700 font-bold bg-blue-50 hover:bg-blue-100 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm border border-blue-200"
          >
            <Home className="w-4 h-4 text-blue-600" /> Home
          </button>

          <button
            onClick={() => handleNav('/services')}
            className="text-left text-slate-700 font-medium hover:text-blue-700 hover:bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm"
          >
            <Settings className="w-4 h-4 text-blue-600" /> Services Catalog
          </button>

          <button
            onClick={() => handleNav('/services/custom-software')}
            className="text-left text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-3 pl-8 rounded-xl flex items-center gap-3 transition-colors text-xs"
          >
            • Custom Software & Web
          </button>

          <button
            onClick={() => handleNav('/services/mobile-apps')}
            className="text-left text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-3 pl-8 rounded-xl flex items-center gap-3 transition-colors text-xs"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-600" /> Mobile Apps (React Native & Flutter)
          </button>

          <button
            onClick={() => handleNav('/services/erp-salesforce')}
            className="text-left text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-3 pl-8 rounded-xl flex items-center gap-3 transition-colors text-xs"
          >
            <Database className="w-3.5 h-3.5 text-blue-600" /> Syspro ERP & Salesforce
          </button>

          <button
            onClick={() => handleNav('/services/ecommerce')}
            className="text-left text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-3 pl-8 rounded-xl flex items-center gap-3 transition-colors text-xs"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-blue-600" /> E-Commerce (Shopify, WP, Magento)
          </button>

          <button
            onClick={() => handleNav('/services/ai-ml')}
            className="text-left text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-3 pl-8 rounded-xl flex items-center gap-3 transition-colors text-xs"
          >
            <Cpu className="w-3.5 h-3.5 text-blue-600" /> AI & Machine Learning
          </button>

          <button
            onClick={() => handleNav('/portfolio')}
            className="text-left text-slate-700 font-medium hover:text-blue-700 hover:bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm"
          >
            <Rocket className="w-4 h-4 text-blue-600" /> Case Studies & Portfolio
          </button>

          <button
            onClick={() => handleNav('/about')}
            className="text-left text-slate-700 font-medium hover:text-blue-700 hover:bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm"
          >
            <Users className="w-4 h-4 text-blue-600" /> About Us
          </button>

          <button
            onClick={() => handleNav('/insights')}
            className="text-left text-slate-700 font-medium hover:text-blue-700 hover:bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4 text-blue-600" /> Articles & Insights
          </button>

          <button
            onClick={() => handleNav('/contact')}
            className="text-left text-slate-700 font-medium hover:text-blue-700 hover:bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 transition-colors text-sm"
          >
            <Mail className="w-4 h-4 text-blue-600" /> Contact Us
          </button>
        </nav>

        <div className="mt-auto space-y-6 pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              onClose();
              handleNav('/contact');
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-full font-bold font-caps tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2"
            id="drawer-contact-btn"
          >
            GET IN TOUCH ↗
          </button>

          <div>
            <p className="font-caps text-[10px] text-slate-500 mb-3 tracking-widest uppercase font-bold">DIRECT CONTACT</p>
            <div className="space-y-1.5 font-mono text-xs text-blue-700 font-semibold">
              <a href="tel:+917001769472" className="block hover:underline">+91 70017 69472</a>
              <a href="tel:+917063821662" className="block hover:underline">+91 70638 21662</a>
              <a href="mailto:info@srvtechnology.com" className="block hover:underline text-slate-600 font-sans">info@srvtechnology.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

