import React from 'react';
import { Award, ShieldCheck, Globe, Terminal, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteRequest: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Hero Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Award className="w-4 h-4" />
          ABOUT SRV TECHNOLOGY
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Engineering Trust & Innovation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Since 2018</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          SRV Technology is a full-service software development agency. Founded with a commitment to technical precision, transparent client communication, and zero-compromise code quality, we help enterprises scale their digital infrastructure with confidence.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            SCHEDULE A CALL WITH LEADERSHIP ↗
          </button>
        </div>
      </div>

      {/* Highlights Grid */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-center p-4">
            <div className="text-4xl font-extrabold text-blue-700 font-mono mb-2">2018</div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">ESTABLISHED</div>
          </div>
          <div className="text-center p-4 border-t md:border-t-0 md:border-l border-slate-200">
            <div className="text-4xl font-extrabold text-blue-700 font-mono mb-2">100+</div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">PROJECTS DELIVERED</div>
          </div>
          <div className="text-center p-4 border-t md:border-t-0 md:border-l border-slate-200">
            <div className="text-4xl font-extrabold text-blue-700 font-mono mb-2">99.9%</div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">UPTIME SLA GUARANTEE</div>
          </div>
          <div className="text-center p-4 border-t md:border-t-0 md:border-l border-slate-200">
            <div className="text-4xl font-extrabold text-blue-700 font-mono mb-2">100%</div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">ON-TIME DELIVERY</div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mb-24">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
          Our Engineering Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency & Integrity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No hidden fees, no scope surprises. We provide direct access to repository commits, sprint boards, and daily standup notes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <Terminal className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Code & Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict static typing, modular design patterns, thorough automated unit tests, and comprehensive OpenAPI documentation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <HeartHandshake className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Long-Term Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We treat your product as our own. Many of our enterprise clients have been working continuously with us for 4+ years.
            </p>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 px-6 md:px-12 xl:px-16 mb-20">
        <div className="max-w-[1280px] mx-auto text-center">
          <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Serving Global Enterprise Clients
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-10">
            With delivery centers in India and client engagement leads in North America, Europe, Australia, and UAE, we provide 24/7 continuous engineering coverage.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-slate-700 font-semibold">
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇺🇸 United States</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇬🇧 United Kingdom</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇮🇳 India</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇦🇺 Australia</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇦🇪 United Arab Emirates</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">🇩🇪 Germany</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Work with SRV Technology?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Get in touch with our team today to start building your next enterprise solution.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          CONTACT LEADERSHIP ↗
        </button>
      </div>
    </div>
  );
};

