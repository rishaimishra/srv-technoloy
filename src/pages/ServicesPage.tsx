import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { Code, Smartphone, Database, Cloud, ShoppingCart, Cpu, ShieldCheck, CheckCircle2, ArrowRight, Layers, FileCode, Terminal } from 'lucide-react';

interface ServicesPageProps {
  onOpenServiceDetail: (service: ServiceItem) => void;
  onOpenQuoteRequest: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenServiceDetail,
  onOpenQuoteRequest,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => {
        if (selectedCategory === 'software') return s.id === 'custom-software' || s.id === 'web-dev';
        if (selectedCategory === 'mobile') return s.id === 'mobile-dev';
        if (selectedCategory === 'enterprise') return s.id === 'erp-syspro' || s.id === 'salesforce';
        if (selectedCategory === 'security') return s.id === 'cybersecurity';
        if (selectedCategory === 'ecommerce') return s.id === 'ecommerce';
        if (selectedCategory === 'aiml') return s.id === 'ai-ml';
        return true;
      });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'custom-software':
        return <Code className="w-8 h-8 text-blue-600" />;
      case 'web-dev':
        return <Layers className="w-8 h-8 text-blue-600" />;
      case 'mobile-dev':
        return <Smartphone className="w-8 h-8 text-blue-600" />;
      case 'erp-syspro':
        return <Database className="w-8 h-8 text-blue-600" />;
      case 'salesforce':
        return <Cloud className="w-8 h-8 text-blue-600" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-8 h-8 text-blue-600" />;
      case 'ecommerce':
        return <ShoppingCart className="w-8 h-8 text-blue-600" />;
      case 'ai-ml':
        return <Cpu className="w-8 h-8 text-blue-600" />;
      default:
        return <Code className="w-8 h-8 text-blue-600" />;
    }
  };

  const getServiceLink = (id: string) => {
    switch (id) {
      case 'mobile-dev':
        return '/services/mobile-apps';
      case 'erp-syspro':
      case 'salesforce':
        return '/services/erp-salesforce';
      case 'ecommerce':
        return '/services/ecommerce';
      case 'ai-ml':
        return '/services/ai-ml';
      default:
        return '/services/custom-software';
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Page Header */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-16">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          SRV TECHNOLOGY SERVICES DIRECTORY
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Engineering & Technical Capabilities
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          From enterprise ERP implementations (Syspro ERP) and Salesforce CRM architecture to high-concurrency mobile apps (React Native & Flutter), custom web applications, e-commerce storefronts, and AI models.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mt-10 pb-4 border-b border-slate-200">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'software', label: 'Custom Software & Web' },
            { id: 'mobile', label: 'Mobile Apps (React Native & Flutter)' },
            { id: 'enterprise', label: 'Syspro ERP & Salesforce' },
            { id: 'security', label: 'Cybersecurity & Compliance' },
            { id: 'ecommerce', label: 'E-Commerce (Shopify, WP, Magento)' },
            { id: 'aiml', label: 'AI & ML Implementation' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Grid */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-slate-200 hover:border-blue-500 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
            id={`service-page-card-${service.id}`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  {getServiceIcon(service.id)}
                </div>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                  {service.techStack.slice(0, 3).join(' • ')}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-700 transition-colors">
                {service.title}
              </h2>

              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-blue-700 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Core Capabilities & Scope
                </h4>
                <ul className="space-y-3">
                  {service.detailedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-slate-500 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <FileCode className="w-4 h-4" /> Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-slate-50 text-slate-800 px-3 py-1 rounded-lg border border-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onOpenServiceDetail(service)}
                className="text-xs font-bold text-blue-700 hover:text-blue-800 tracking-wider uppercase flex items-center gap-1"
              >
                VIEW SPECIFICATIONS ↗
              </button>

              <Link
                to={getServiceLink(service.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                DEDICATED PRACTICE PAGE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Consultation Callout */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Need a Custom Solution or Specialized Architecture?
            </h3>
            <p className="text-sm text-slate-600">
              Our lead technical architects are available for direct scoping and technical discovery calls.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={onOpenQuoteRequest}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-md"
            >
              REQUEST CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

