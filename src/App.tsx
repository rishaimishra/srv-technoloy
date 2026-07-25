import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { SideDrawer } from './components/SideDrawer';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { MobileAppPage } from './pages/MobileAppPage';
import { ErpSalesforcePage } from './pages/ErpSalesforcePage';
import { EcommercePage } from './pages/EcommercePage';
import { AiMlPage } from './pages/AiMlPage';
import { CustomSoftwarePage } from './pages/CustomSoftwarePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

// Modals
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { CaseStudy, ServiceItem, JournalArticle } from './types';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState('');

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const handleRequestQuote = (prefilledText?: string) => {
    if (prefilledText) {
      setQuotePrefill(prefilledText);
    } else {
      setQuotePrefill('');
    }
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#131313] text-[#e2e2e2] selection:bg-[#1163fb] selection:text-white relative flex flex-col justify-between">
        {/* Top App Header */}
        <Header
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />

        {/* Main Route Views */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenServiceDetail={(service) => setSelectedService(service)}
                  onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenServiceDetail={(service) => setSelectedService(service)}
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services/custom-software"
              element={
                <CustomSoftwarePage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services/mobile-apps"
              element={
                <MobileAppPage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services/erp-salesforce"
              element={
                <ErpSalesforcePage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services/ecommerce"
              element={
                <EcommercePage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/services/ai-ml"
              element={
                <AiMlPage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenQuoteRequest={() => handleRequestQuote()}
                />
              }
            />

            <Route
              path="/insights"
              element={
                <InsightsPage
                  onOpenArticle={(article) => setSelectedArticle(article)}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage />
              }
            />

            <Route
              path="/blog"
              element={
                <BlogListPage />
              }
            />

            <Route
              path="/blog/:slug"
              element={
                <BlogDetailPage />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Side Drawer */}
        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        {/* Case Study Detail Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onRequestQuoteForCaseStudy={(title) => handleRequestQuote(`Inquiry regarding case study: ${title}`)}
        />

        {/* Service Detail Modal */}
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestQuoteForService={(title) => handleRequestQuote(`Quote for Service: ${title}`)}
        />

        {/* Article Reader Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        {/* Quote Request Modal */}
        <QuoteRequestModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          prefilledNotes={quotePrefill}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
