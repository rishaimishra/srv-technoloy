import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { Navbar } from './hotels-landing/Navbar';
import { Hero } from './hotels-landing/Hero';
import { ProblemSection } from './hotels-landing/ProblemSection';
import { FixSection } from './hotels-landing/FixSection';
import { SpecializedSection } from './hotels-landing/SpecializedSection';
import { RoiCalculator } from './hotels-landing/RoiCalculator';
import { FormSection } from './hotels-landing/FormSection';
import { FaqSection } from './hotels-landing/FaqSection';
import { CtaBanner } from './hotels-landing/CtaBanner';
import { Footer } from './hotels-landing/Footer';
import { AuditResultModal } from './hotels-landing/AuditResultModal';
import { DirectBookingDemoModal } from './hotels-landing/DirectBookingDemoModal';
import { ReviewFormData } from './hotels-landing/data';

export const HotelsBusinessPage: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [auditFormData, setAuditFormData] = useState<ReviewFormData | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [calculatorRooms, setCalculatorRooms] = useState<number | undefined>(undefined);

  const handleScrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (data: ReviewFormData) => {
    setAuditFormData(data);
    setIsAuditModalOpen(true);
  };

  const handleOpenFormWithParams = (rooms: number) => {
    setCalculatorRooms(rooms);
    handleScrollToForm();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <SEO
        title="Direct Bookings, Not OTA Commissions"
        description="Direct-booking website & ad campaigns for independent hotels, resorts and homestays in West Bengal — reduce OTA commission and get guests booking straight with you."
        canonical="https://srvtechnology.com/hotels-business"
        keywords={['direct booking website for hotels', 'hotel website development West Bengal', 'reduce OTA commission', 'hotel digital marketing agency West Bengal', 'resort website development Siliguri', 'homestay booking website']}
      />
      <LocalBusinessSchema />

      <Navbar onOpenForm={handleScrollToForm} onOpenDemo={() => setIsDemoOpen(true)} />

      <main>
        <Hero onOpenForm={handleScrollToForm} />
        <ProblemSection />
        <FixSection />
        <SpecializedSection />
        <RoiCalculator onOpenFormWithParams={handleOpenFormWithParams} />
        <FormSection onFormSubmit={handleFormSubmit} initialRooms={calculatorRooms} />
        <FaqSection />
        <CtaBanner onOpenForm={handleScrollToForm} />
      </main>

      <Footer />

      <AuditResultModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} formData={auditFormData} />
      <DirectBookingDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};
