import React from 'react';
import { SEO } from '../components/SEO';
import { ShoppingCart, CheckCircle2, ShieldCheck, Zap, Layers, CreditCard } from 'lucide-react';

interface EcommercePageProps {
  onOpenQuoteRequest: () => void;
}

export const EcommercePage: React.FC<EcommercePageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <>
      <SEO
        title="E-Commerce Development in Siliguri | SRV Technology"
        description="Scalable e-commerce stores on Shopify, WooCommerce & Magento in Siliguri & West Bengal. Custom plugins, payment gateways, and ERP inventory sync. E-commerce agency serving Darjeeling."
        canonical="https://srvtechnology.com/services/ecommerce"
        keywords={['e-commerce development Siliguri', 'Shopify developer West Bengal', 'Magento agency Darjeeling', 'WooCommerce North Bengal']}
      />
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Header Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <ShoppingCart className="w-4 h-4" />
          E-COMMERCE ENGINEERING PRACTICE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          E-Commerce Store Development <br />
          <span className="text-blue-600">Shopify, WordPress & Magento</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          We engineer high-volume online storefronts designed for speed, high conversion rates, and seamless inventory management. Whether you operate on Shopify Plus, custom WordPress/WooCommerce, or enterprise Magento 2 (Adobe Commerce), SRV Technology builds solutions that handle millions in annual transaction volume.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            BOOK E-COMMERCE CONSULTATION ↗
          </button>
        </div>
      </div>

      {/* Platform Breakdown */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          Supported E-Commerce Ecosystems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shopify & Shopify Plus */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold text-xs">
                SHOPIFY
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Shopify & Shopify Plus</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Bespoke Shopify theme development (Liquid), headless Hydrogen storefronts, custom public/private Shopify apps, and checkout extensions.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom Shopify Liquid & Hydrogen (React)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Private Node.js / GraphQL API Apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Syspro ERP & Salesforce inventory sync
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200 text-[11px] font-mono text-blue-700 font-bold">
              Best for: Fast-growing D2C & B2B Brands
            </div>
          </div>

          {/* WordPress & WooCommerce */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold text-xs">
                WP / WOO
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">WordPress & WooCommerce</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Custom WordPress theme and WooCommerce plugin engineering. High-performance database query caching, sub-second checkout speeds, and custom payment integrations.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom PHP 8.2 plugin development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Redis & Object Cache Pro tuning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom shipping & tax calculation engines
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200 text-[11px] font-mono text-blue-700 font-bold">
              Best for: Flexible Content + Commerce Sites
            </div>
          </div>

          {/* Magento 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold text-xs">
                MAGENTO
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Magento 2 (Adobe Commerce)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Heavyweight enterprise Magento 2 engineering built for massive SKU catalogs, multi-warehouse shipping, custom tiered B2B pricing, and Elasticsearch integrations.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> 50,000+ SKU Catalog optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Headless PWA Studio & GraphQL APIs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Syspro ERP automated order processing
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200 text-[11px] font-mono text-blue-700 font-bold">
              Best for: Large-Scale B2B & Enterprise Suppliers
            </div>
          </div>
        </div>
      </section>

      {/* Feature Standards */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 px-6 md:px-12 xl:px-16 mb-20">
        <div className="max-w-[1450px] mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            E-Commerce Engineering Features Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Multi-Currency Payments</h3>
              <p className="text-xs text-slate-600">
                Stripe, PayPal, Apple Pay, Google Pay, Razorpay, and BNPL (Klarna / Affirm) integration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Sub-Second Load Times</h3>
              <p className="text-xs text-slate-600">
                Core Web Vitals optimization, image WebP compression, and Varnish/Redis CDN caching.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Layers className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Syspro ERP & CRM Sync</h3>
              <p className="text-xs text-slate-600">
                Automated order dispatching, stock updates, tracking number push, and customer account mapping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">PCI-DSS Security</h3>
              <p className="text-xs text-slate-600">
                Compliant checkout flows, tokenized payment handling, and zero-knowledge database security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Elevate Your Online Storefront?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Speak with our e-commerce engineering team for a platform migration assessment or custom store build.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          TALK TO AN E-COMMERCE ARCHITECT
        </button>
      </div>
    </div>
    </>
  );
};

