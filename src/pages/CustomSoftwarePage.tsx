import React from 'react';
import { Code, Globe, CheckCircle2, Server } from 'lucide-react';

interface CustomSoftwarePageProps {
  onOpenQuoteRequest: () => void;
}

export const CustomSoftwarePage: React.FC<CustomSoftwarePageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Code className="w-4 h-4" />
          FULL-STACK & WEB PRACTICE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Custom Software & <br />
          <span className="text-blue-600">Website Development</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          SRV Technology architects bespoke software platforms, microservices, and web applications. We build resilient Node.js, Python, and React applications backed by scalable PostgreSQL databases and containerized CI/CD pipelines.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            TALK TO A SOFTWARE ARCHITECT ↗
          </button>
        </div>
      </div>

      {/* Grid Features */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          What We Architect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Server className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Enterprise SaaS & Cloud Backends</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Multi-tenant software platforms engineered with high concurrency, distributed Redis caching, role-based access control (RBAC), and SOC2 audit readiness.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Microservices & REST/GraphQL API Design</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> PostgreSQL, MongoDB & Redis Database Layer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Docker & Kubernetes Container Deployment</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Globe className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">React & Next.js Web Platforms</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Modern single-page applications and server-side rendered portals with sub-second page performance, accessibility compliance, and polished Tailwind CSS layouts.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> React 19 & Next.js Server Components</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Tailwind CSS UI Design</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> WCAG 2.1 AA Accessibility & SEO Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Build Your Custom Platform?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Get in touch with SRV Technology for a full proposal and technical specification review.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          REQUEST A QUOTE NOW ↗
        </button>
      </div>
    </div>
  );
};

