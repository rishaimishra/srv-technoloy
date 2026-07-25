import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logoSrc from '../assets/images/srv-tech-board.png';

interface HeaderProps {
  onOpenDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/90 shadow-md text-slate-900'
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60 text-slate-900'
      }`}
      id="main-header"
    >
      <div className="flex justify-between items-center px-6 md:px-12 xl:px-16 w-full max-w-[1450px] mx-auto">
        {/* Brand Logo */}
        <Link
          to="/"
          id="header-logo-btn"
        >
          <img src={logoSrc} alt="SRV Technology" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <Link
            to="/"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            HOME
          </Link>

          {/* Services Menu with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              to="/services"
              className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold flex items-center gap-1 ${
                isActive('/services')
                  ? 'text-blue-700 border-b-2 border-blue-600'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              SERVICES <ChevronDown className="w-3 h-3" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl space-y-1 mt-1 text-slate-800 backdrop-blur-xl">
                <Link
                  to="/services/custom-software"
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Custom Software Development
                </Link>
                <Link
                  to="/services/mobile-apps"
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Mobile Apps (React Native & Flutter)
                </Link>
                <Link
                  to="/services/erp-salesforce"
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Syspro ERP & Salesforce
                </Link>
                <Link
                  to="/services/ecommerce"
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  E-Commerce (Shopify, WP, Magento)
                </Link>
                <Link
                  to="/services/ai-ml"
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  AI / ML Development
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/services/erp-salesforce"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/services/erp-salesforce')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            ERP & CRM
          </Link>

          <Link
            to="/portfolio"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/portfolio')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            CASE STUDIES
          </Link>

          <Link
            to="/about"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/about')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            ABOUT US
          </Link>

          <Link
            to="/insights"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/insights')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            BLOG
          </Link>

          <Link
            to="/contact"
            className={`font-caps text-xs tracking-widest py-2 transition-colors relative font-bold ${
              isActive('/contact')
                ? 'text-blue-700 border-b-2 border-blue-600'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full font-bold font-caps text-xs tracking-wider transition-all active:scale-95 shadow-md shadow-blue-500/20 border border-blue-500/20"
            id="header-contact-btn"
          >
            GET IN TOUCH ↗
          </Link>

          <button
            onClick={onOpenDrawer}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
            aria-label="Open menu drawer"
            id="header-drawer-toggle"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
