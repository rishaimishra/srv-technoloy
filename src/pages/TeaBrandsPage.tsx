import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import styles from './TeaBrandsPage.module.css';
import { Navbar } from './tea-landing/Navbar';
import { Hero } from './tea-landing/Hero';
import { MarketReality } from './tea-landing/MarketReality';
import { OurApproach } from './tea-landing/OurApproach';
import { RoiCalculator } from './tea-landing/RoiCalculator';
import { RegionSpecialization } from './tea-landing/RegionSpecialization';
import { ProcessSection } from './tea-landing/ProcessSection';
import { LeadForm } from './tea-landing/LeadForm';
import { FaqSection } from './tea-landing/FaqSection';
import { FinalCta } from './tea-landing/FinalCta';
import { Footer } from './tea-landing/Footer';
import { CaseStudiesModal } from './tea-landing/CaseStudiesModal';
import { ScheduleModal } from './tea-landing/ScheduleModal';

export const TeaBrandsPage: React.FC = () => {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['approach', 'regions', 'process', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-[#111827] font-sans selection:bg-[#c5eadf] selection:text-[#00201a] ${styles.page}`}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <SEO
        title="Stop Losing Tea Brand Margin to Marketplace Fees"
        description="D2C Shopify storefronts, Meta & Google ad campaigns, and WhatsApp replenishment automation for specialty tea brands in West Bengal moving off Amazon & Flipkart."
        canonical="https://srvtechnology.com/tea-brands"
        keywords={['D2C tea brand website', 'Shopify store for tea brand', 'reduce Amazon Flipkart commission tea brand', 'tea brand digital marketing West Bengal', 'D2C e-commerce agency Siliguri', 'tea brand Meta ads']}
      />
      <LocalBusinessSchema />

      <Navbar onOpenAuditModal={scrollToContact} onOpenCaseStudies={() => setIsCaseStudiesOpen(true)} activeSection={activeSection} />

      <main>
        <Hero onOpenAuditModal={scrollToContact} />
        <MarketReality onOpenAuditModal={scrollToContact} />
        <OurApproach onOpenAuditModal={scrollToContact} />
        <RoiCalculator onOpenAuditModal={scrollToContact} />
        <RegionSpecialization />
        <ProcessSection onOpenAuditModal={scrollToContact} />
        <LeadForm />
        <FaqSection onOpenAuditModal={scrollToContact} />
        <FinalCta onOpenScheduleModal={() => setIsScheduleOpen(true)} />
      </main>

      <Footer onOpenAuditModal={scrollToContact} onOpenCaseStudies={() => setIsCaseStudiesOpen(true)} />

      <CaseStudiesModal isOpen={isCaseStudiesOpen} onClose={() => setIsCaseStudiesOpen(false)} onOpenAuditModal={scrollToContact} />
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </div>
  );
};
