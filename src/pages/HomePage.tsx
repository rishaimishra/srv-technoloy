import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { TechAndClientsSection } from '../components/TechAndClientsSection';
import { Carousel } from '../components/Carousel';
import { ProcessSection } from '../components/ProcessSection';
import { SERVICES_DATA, CASE_STUDIES, TESTIMONIALS } from '../data/content';
import { ServiceItem, CaseStudy } from '../types';
import { SEO } from '../components/SEO';
import { Code, Smartphone, Database, Cloud, ShoppingCart, Cpu, ShieldCheck, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';

interface HomePageProps {
  onOpenServiceDetail: (service: ServiceItem) => void;
  onOpenCaseStudy: (study: CaseStudy) => void;
  onOpenQuoteRequest: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenServiceDetail,
  onOpenCaseStudy,
  onOpenQuoteRequest,
}) => {
  const navigate = useNavigate();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'custom-software':
        return <Code className="w-8 h-8 text-blue-600" />;
      case 'web-dev':
        return <Code className="w-8 h-8 text-blue-600" />;
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

  const getServiceRoute = (id: string) => {
    switch (id) {
      case 'mobile-dev':
        return '/services/mobile-apps';
      case 'erp-syspro':
      case 'salesforce':
        return '/services/erp-salesforce';
      case 'cybersecurity':
      case 'ecommerce':
        return '/services/ecommerce';
      case 'ai-ml':
        return '/services/ai-ml';
      default:
        return '/services/custom-software';
    }
  };

  return (
    <>
      <SEO
        title="SRV Technology - Leading Software Development Company in Siliguri, West Bengal"
        description="SRV Technology is the best website development company in West Bengal and Siliguri. We offer custom software, Syspro ERP, Salesforce CRM, mobile apps, e-commerce & AI/ML development. Web development agency serving Darjeeling & North Bengal since 2018."
        canonical="https://srvtechnology.com"
        keywords={['website development company West Bengal', 'web development agency Siliguri', 'best web developers Darjeeling', 'software company North Bengal', 'IT company Siliguri', 'web development Darjeeling']}
      />
      <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Main Hero */}
      <Hero
        onRequestQuote={onOpenQuoteRequest}
        onViewPortfolio={() => navigate('/portfolio')}
      />

      {/* Client Logos & Technology Showcase Section */}
      <TechAndClientsSection />

      {/* Metrics & Proof Stats */}
      <StatsSection />

      {/* Primary Engineering Capabilities Carousel */}
      <section className="py-24 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto bg-white" id="home-capabilities">
        <Carousel
          id="services-carousel"
          autoPlay={true}
          autoPlayInterval={6000}
          itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
          badge={
            <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              FULL-STACK ENGINEERING & ENTERPRISE SOLUTIONS
            </div>
          }
          title="Our Core Technical Practices"
          subtitle="Tailored software engineering, enterprise ERP/CRM systems, mobile apps, and AI/ML microservices built to scale."
          headerAction={
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold group transition-colors text-xs uppercase font-mono mr-2"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          }
          items={SERVICES_DATA}
          renderItem={(service) => {
            const serviceImages: Record<string, string> = {
              'custom-software': 'src/assets/articles/custom-software.webp',
              'web-dev': 'src/assets/articles/web-dev.webp',
              'mobile-dev': 'src/assets/articles/mobile-dev.webp',
              'erp-syspro': 'src/assets/articles/erp-syspro.webp',
              'salesforce': 'src/assets/articles/salesforce.webp',
              'cybersecurity': 'src/assets/articles/cybersecurity.webp',
              'ecommerce': 'src/assets/articles/ecommerce.webp',
              'ai-ml': 'src/assets/articles/ai-ml.webp',
            };

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl h-full"
                id={`home-service-card-${service.id}`}
              >
                {/* Service Visual Banner */}
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={serviceImages[service.id] || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {service.detailedFeatures.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenServiceDetail(service)}
                      className="text-xs font-bold font-mono text-blue-700 hover:text-blue-900 tracking-wider uppercase flex items-center gap-1"
                    >
                      Quick Specs
                    </button>
                    <Link
                      to={getServiceRoute(service.id)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </section>

      {/* Engineering Development & Delivery Lifecycle Process */}
      <ProcessSection
        onRequestQuote={onOpenQuoteRequest}
      />

      {/* Featured Case Studies Spotlight Carousel */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-6 md:px-12 xl:px-16" id="home-featured-work">
        <div className="max-w-[1450px] mx-auto">
          <Carousel
            id="case-studies-carousel"
            autoPlay={true}
            autoPlayInterval={5000}
            itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
            badge={
              <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block">
                PROVEN RESULTS & ENTERPRISE DELIVERABLES
              </span>
            }
            title="Featured Engineering Case Studies"
            subtitle="Explore real-world technical breakthroughs delivered for global manufacturing, logistics, and healthcare organizations."
            headerAction={
              <Link
                to="/portfolio"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md uppercase mr-2"
              >
                VIEW ALL CASE STUDIES ↗
              </Link>
            }
            items={CASE_STUDIES}
            renderItem={(study) => (
              <div
                key={study.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-xl h-full"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-blue-700 border border-slate-200 shadow-sm">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 mb-3">
                      Client: {study.client} • {study.year}
                    </p>
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      {study.results.slice(0, 2).map((res, i) => (
                        <div key={i}>
                          <div className="text-base font-extrabold text-blue-700 font-mono">
                            {res.metric}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium line-clamp-1">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(study)}
                    className="w-full py-2.5 bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white rounded-xl text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2 border border-slate-200 uppercase"
                  >
                    READ CASE STUDY
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* Client Endorsements & Long-Term Trust Carousel */}
      <section className="py-24 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto bg-white" id="home-testimonials">
        <Carousel
          id="testimonials-carousel"
          autoPlay={true}
          autoPlayInterval={5000}
          itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
          badge={
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block">
              CLIENT SATISFACTION & VERIFIED FEEDBACK
            </span>
          }
          title="Trusted by Enterprise Leaders"
          subtitle="Building long-term partnerships through technical excellence, transparent communication, and 100% on-time delivery."
          items={TESTIMONIALS}
          renderItem={(t) => (
            <div
              key={t.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all h-full"
            >
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-mono text-xs shadow-sm shrink-0">
                  {t.initials || 'SRV'}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role} • Verified Partnership</p>
                </div>
              </div>
            </div>
          )}
        />
      </section>

      {/* Banner Call to Action */}
      <section className="py-20 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-blue-800">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Have a Complex Technical Project in Mind?
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              From Syspro ERP implementation and Salesforce CRM customizations to custom React Native apps and AI microservices, our senior engineering team is ready to accelerate your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenQuoteRequest}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-lg text-center"
            >
              REQUEST A QUOTE ↗
            </button>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all text-center border border-white/20"
            >
              TALK TO AN ENGINEER
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

