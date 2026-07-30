import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';

interface ProjectsSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'REACT / LARAVEL', 'PYTHON & AI/ML', 'MAGENTO DEVELOPMENT'];

  const filteredStudies = filter === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category.toUpperCase() === filter);

  return (
    <section id="portfolio" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-blue-700 font-caps text-xs sm:text-sm tracking-widest block mb-2 font-bold uppercase">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
              Latest Engineering Work
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-caps font-bold tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-caps text-blue-800 border border-blue-200 font-bold tracking-wider shadow-sm">
                  {study.category}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs font-caps text-blue-600 mb-4 tracking-wider font-bold">
                  {study.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {study.summary}
                </p>

                {/* Key Result Metric Badge */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-6 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-caps font-bold">{study.results[0].label}</span>
                  <span className="text-base font-bold text-blue-700">{study.results[0].metric}</span>
                </div>

                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold font-caps text-xs tracking-wider transition-all flex items-center justify-center gap-2 group/btn shadow-sm shadow-blue-500/20"
                  id={`view-case-study-${study.id}`}
                >
                  VIEW CASE STUDY
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
