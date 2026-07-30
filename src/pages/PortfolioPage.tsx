import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { SEO } from '../components/SEO';
import { ArrowRight, Trophy } from 'lucide-react';

interface PortfolioPageProps {
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenCaseStudy,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => {
        if (activeFilter === 'web') return s.category.includes('REACT') || s.category.includes('LARAVEL');
        if (activeFilter === 'ai') return s.category.includes('AI') || s.category.includes('PYTHON');
        if (activeFilter === 'commerce') return s.category.includes('MAGENTO') || s.category.includes('COMMERCE');
        return true;
      });

  return (
    <>
      <SEO
        title="Portfolio & Case Studies | Web Development Agency Siliguri"
        description="Explore real-world enterprise projects by SRV Technology, the best web development company in Siliguri & West Bengal. Syspro ERP, Salesforce, AI/ML, mobile & e-commerce case studies."
        canonical="https://srvtechnology.com/portfolio"
        keywords={['web development portfolio Siliguri', 'software case studies West Bengal', 'ERP projects Darjeeling', 'IT portfolio North Bengal']}
      />
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Header Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-16">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Trophy className="w-4 h-4" />
          FEATURED ENGINEERING DELIVERABLES
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Case Studies & Portfolio
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Detailed breakdowns of real-world enterprise projects delivered by SRV Technology. Review challenges, technical architectures, and verified metric outcomes.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mt-10 pb-4 border-b border-slate-200">
          {[
            { id: 'all', label: 'All Case Studies' },
            { id: 'web', label: 'React / Laravel / SaaS' },
            { id: 'ai', label: 'Python & AI/ML' },
            { id: 'commerce', label: 'Magento & E-Commerce' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
          >
            <div className="relative h-60 overflow-hidden bg-slate-100">
              <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-700 border border-slate-200 shadow-sm">
                {study.category}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {study.title}
                </h2>
                <p className="text-xs font-mono text-slate-500 mb-4 font-semibold">
                  Client: {study.client} • {study.year}
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {study.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {study.results.map((res, i) => (
                    <div key={i}>
                      <div className="text-lg font-extrabold text-blue-700 font-mono">
                        {res.metric}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {study.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(study)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                EXPLORE CASE STUDY SPECS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Want Similar Benchmark Results for Your Enterprise?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Let’s discuss your technical goals and scope out an architecture roadmap.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          CONTACT OUR TEAM ↗
        </Link>
      </div>
    </div>
    </>
  );
};

