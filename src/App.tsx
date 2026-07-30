import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
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

// Admin Pages — code-split so JWT auth/editor code isn't in every visitor's bundle
const AdminLogin = React.lazy(() => import('./pages/AdminLogin').then((m) => ({ default: m.AdminLogin })));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then((m) => ({ default: m.AdminDashboard })));
const AdminBlogEditor = React.lazy(() => import('./pages/AdminBlogEditor').then((m) => ({ default: m.AdminBlogEditor })));

// Modals
import { LocalBusinessSchema } from './components/LocalBusinessSchema';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { CaseStudy, ServiceItem, JournalArticle } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MainLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState('');

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const handleRequestQuote = (prefilledText?: string) => {
    if (prefilledText) setQuotePrefill(prefilledText);
    else setQuotePrefill('');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2] selection:bg-[#1163fb] selection:text-white relative flex flex-col justify-between">
      <LocalBusinessSchema />
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenServiceDetail={(s) => setSelectedService(s)} onOpenCaseStudy={(s) => setSelectedCaseStudy(s)} onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services" element={<ServicesPage onOpenServiceDetail={(s) => setSelectedService(s)} onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services/mobile-apps" element={<MobileAppPage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services/erp-salesforce" element={<ErpSalesforcePage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services/ecommerce" element={<EcommercePage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/services/ai-ml" element={<AiMlPage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/portfolio" element={<PortfolioPage onOpenCaseStudy={(s) => setSelectedCaseStudy(s)} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteRequest={() => handleRequestQuote()} />} />
          <Route path="/insights" element={<InsightsPage onOpenArticle={(a) => setSelectedArticle(a)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} onRequestQuoteForCaseStudy={(title) => handleRequestQuote(`Inquiry regarding case study: ${title}`)} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onRequestQuoteForService={(title) => handleRequestQuote(`Quote for Service: ${title}`)} />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <QuoteRequestModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} prefilledNotes={quotePrefill} />
    </div>
  );
}

function AdminRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/blog/new" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
        <Route path="/admin/blog/:id/edit" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
      </Routes>
    </Suspense>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) return <AdminRoutes />;
  return <MainLayout />;
}

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <AppShell />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
