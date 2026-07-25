import React, { useState } from 'react';
import { Cpu, Database, Smartphone, Cloud, Code, ShoppingBag, ShieldCheck, Award, Layers } from 'lucide-react';
import { Carousel } from './Carousel';

import bhutanechosImg from '../assets/partners/bhutanechos.jpeg';
import bizspiceImg from '../assets/partners/bizspice.jpeg';
import deeplogicImg from '../assets/partners/deeplogic.jpeg';
import fccImg from '../assets/partners/fcc.jpeg';
import jobdaddyImg from '../assets/partners/jobdaddy.png';
import revenueVaultImg from '../assets/partners/revenue-vault.png';
import scanbhutanImg from '../assets/partners/scanbhutan.jpeg';
import successResourcesImg from '../assets/partners/success-resources.jpeg';
import wardcImg from '../assets/partners/wardc.jpeg';

interface TechLogoItem {
  id: string;
  name: string;
  category: 'erp_crm' | 'mobile' | 'cloud' | 'ecommerce' | 'ai' | 'security';
  categoryLabel: string;
  logoSvg: React.ReactNode;
  brandColor: string;
  bgGlow: string;
  tagline: string;
}

interface ClientLogo {
  id: string;
  name: string;
  description: string;
  logoSrc: string;
}

export const TechAndClientsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const clients: ClientLogo[] = [
    { id: 'jobdaddy', name: 'JobDaddy', description: 'AI-Powered Recruitment Platform', logoSrc: jobdaddyImg },
    { id: 'revenue-vault', name: 'Revenue Vault', description: 'Revenue Intelligence & Analytics', logoSrc: revenueVaultImg },
    { id: 'deeplogic', name: 'DeepLogic', description: 'Deep Technology Solutions', logoSrc: deeplogicImg },
    { id: 'bizspice', name: 'BizSpice', description: 'Business Growth & Consulting', logoSrc: bizspiceImg },
    { id: 'scanbhutan', name: 'ScanBhutan', description: 'Digital Solutions for Bhutan', logoSrc: scanbhutanImg },
    { id: 'bhutanechos', name: 'Bhutan Echoes', description: 'Media & Publishing', logoSrc: bhutanechosImg },
    { id: 'success-resources', name: 'Success Resources', description: 'Training & Development', logoSrc: successResourcesImg },
    { id: 'fcc', name: 'FCC', description: 'Financial & Corporate Consulting', logoSrc: fccImg },
    { id: 'wardc', name: 'WARDC', description: 'Development & Consulting', logoSrc: wardcImg },
  ];

  const techLogos: TechLogoItem[] = [
    {
      id: 'syspro',
      name: 'Syspro ERP',
      category: 'erp_crm',
      categoryLabel: 'ERP Engine',
      brandColor: 'border-blue-600 text-blue-700',
      bgGlow: 'bg-blue-50',
      tagline: 'Enterprise Manufacturing & Finance ERP',
      logoSvg: <Database className="w-9 h-9 text-blue-700" />,
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'erp_crm',
      categoryLabel: 'CRM & LWC',
      brandColor: 'border-sky-500 text-sky-600',
      bgGlow: 'bg-sky-50',
      tagline: 'Sales Cloud, Service Cloud & Apex',
      logoSvg: <Cloud className="w-9 h-9 text-sky-600" />,
    },
    {
      id: 'react_native',
      name: 'React Native',
      category: 'mobile',
      categoryLabel: 'Mobile Framework',
      brandColor: 'border-cyan-500 text-cyan-600',
      bgGlow: 'bg-cyan-50',
      tagline: 'Cross-Platform iOS & Android Apps',
      logoSvg: <Smartphone className="w-9 h-9 text-cyan-600" />,
    },
    {
      id: 'flutter',
      name: 'Flutter & Dart',
      category: 'mobile',
      categoryLabel: 'Mobile UI',
      brandColor: 'border-blue-500 text-blue-600',
      bgGlow: 'bg-blue-50',
      tagline: '60FPS Native UI Engine',
      logoSvg: <Code className="w-9 h-9 text-blue-600" />,
    },
    {
      id: 'gemini',
      name: 'Gemini AI',
      category: 'ai',
      categoryLabel: 'Multimodal LLM',
      brandColor: 'border-purple-600 text-purple-700',
      bgGlow: 'bg-purple-50',
      tagline: 'Enterprise AI Agents & GenAI',
      logoSvg: <Cpu className="w-9 h-9 text-purple-600" />,
    },
    {
      id: 'shopify',
      name: 'Shopify Plus',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      brandColor: 'border-emerald-600 text-emerald-700',
      bgGlow: 'bg-emerald-50',
      tagline: 'Headless E-Commerce & Hydrogen',
      logoSvg: <ShoppingBag className="w-9 h-9 text-emerald-600" />,
    },
    {
      id: 'react_node',
      name: 'React & Node.js',
      category: 'cloud',
      categoryLabel: 'Full-Stack Web',
      brandColor: 'border-blue-700 text-blue-800',
      bgGlow: 'bg-blue-50',
      tagline: 'TypeScript Web Apps & Microservices',
      logoSvg: <Code className="w-9 h-9 text-blue-700" />,
    },
    {
      id: 'aws',
      name: 'AWS Cloud',
      category: 'cloud',
      categoryLabel: 'Infrastructure',
      brandColor: 'border-amber-500 text-amber-700',
      bgGlow: 'bg-amber-50',
      tagline: 'EC2, Lambda, S3 & Kubernetes',
      logoSvg: <Cloud className="w-9 h-9 text-amber-600" />,
    },
    {
      id: 'security',
      name: 'Cloudflare & OWASP',
      category: 'security',
      categoryLabel: 'Cybersecurity',
      brandColor: 'border-emerald-600 text-emerald-700',
      bgGlow: 'bg-emerald-50',
      tagline: 'WAF, Zero-Trust & SOC2 Compliance',
      logoSvg: <ShieldCheck className="w-9 h-9 text-emerald-600" />,
    },
  ];

  const filteredLogos = activeCategory === 'all'
    ? techLogos
    : techLogos.filter(t => t.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 font-sans relative overflow-hidden" id="tech-and-clients">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* CAROUSEL 1: CLIENTS WE HAVE WORKED WITH */}
        <div className="mb-24">
          <Carousel
            id="clients-carousel"
            autoPlay={true}
            autoPlayInterval={4500}
            itemsPerPage={{ mobile: 2, tablet: 3, desktop: 4 }}
            badge={
              <div className="inline-flex items-center gap-2 text-blue-700 font-caps text-xs tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 uppercase">
                <Award className="w-3.5 h-3.5" /> PROVEN GLOBAL TRACK RECORD
              </div>
            }
            title={
              <>
                Clients We Have <span className="text-blue-600">Worked With</span>
              </>
            }
            subtitle="Trusted by enterprise leaders worldwide across manufacturing, logistics, healthcare, FinTech, and e-commerce."
            items={clients}
            renderItem={(client) => (
              <div className="flex flex-col items-center justify-center h-full px-4 py-2 text-center">
                <div className="w-24 h-24 rounded-xl bg-white flex items-center justify-center p-3 mb-3">
                  <img
                    src={client.logoSrc}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                  {client.name}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {client.description}
                </p>
              </div>
            )}
          />

          {/* Trust Guarantee Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-sky-300 flex-shrink-0 border border-white/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">100% Quality Assurance & Enterprise SLA Guarantee</h4>
                <p className="text-xs sm:text-sm text-slate-300">Dedicated engineering teams with full source code ownership, strict IP NDAs, and 24/7 technical support.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 font-caps text-xs sm:text-sm text-sky-200 font-bold whitespace-nowrap">
              <span>✓ 8+ Years Experience</span>
              <span>•</span>
              <span>✓ 100+ Projects</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: TECHNOLOGIES LOGO SHOWCASE */}
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'erp_crm', label: 'Syspro ERP & Salesforce' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'cloud', label: 'Cloud & Full-Stack' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'ai', label: 'AI & ML' },
              { id: 'security', label: 'Cybersecurity' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-caps uppercase transition-all ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Carousel
            id="technologies-carousel"
            autoPlay={true}
            autoPlayInterval={4000}
            itemsPerPage={{ mobile: 2, tablet: 3, desktop: 4 }}
            badge={
              <div className="inline-flex items-center gap-2 text-sky-700 font-caps text-xs tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 uppercase">
                <Layers className="w-3.5 h-3.5" /> OFFICIAL BRAND LOGOS
              </div>
            }
            title={
              <>
                Technologies We <span className="text-blue-600">Mastered & Deploy</span>
              </>
            }
            subtitle="Production-proven frameworks, ERP engines, mobile platforms, cloud infrastructure, and AI models."
            items={filteredLogos}
            renderItem={(tech) => (
              <div
                key={tech.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center text-center group cursor-pointer h-full justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Brand Logo Icon Badge */}
                  <div className={`w-16 h-16 rounded-2xl ${tech.bgGlow} border ${tech.brandColor} flex items-center justify-center p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {tech.logoSvg}
                  </div>

                  <span className="text-[10px] font-bold font-caps uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-2 border border-slate-200">
                    {tech.categoryLabel}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-sans mb-1">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                    {tech.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center text-[11px] font-caps font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  Enterprise SLA ↗
                </div>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
};

