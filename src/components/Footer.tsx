import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import logoSrc from '../assets/images/srv-tech-board.png';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitting(true);
    setNewsletterError(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (!res.ok) throw new Error('Request failed');
      setNewsletterSubscribed(true);
    } catch {
      setNewsletterError('Something went wrong. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-300 font-sans">
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              id="footer-logo"
            >
              <img src={logoSrc} alt="SRV Technology" className="h-14 w-auto" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering global enterprises with custom software engineering, Syspro ERP implementation, Salesforce CRM development, mobile applications (React Native/Flutter), e-commerce engines, and AI/ML models.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="mailto:info@srvtechnology.com"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917001769472"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-caps text-xs text-blue-400 tracking-widest font-bold uppercase">TECHNICAL PRACTICES</p>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/services/custom-software" className="text-slate-400 hover:text-white transition-colors">
                  Custom Software & Web
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-slate-400 hover:text-white transition-colors">
                  Mobile Apps (React Native, Flutter)
                </Link>
              </li>
              <li>
                <Link to="/services/erp-salesforce" className="text-slate-400 hover:text-white transition-colors">
                  Syspro ERP Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/erp-salesforce" className="text-slate-400 hover:text-white transition-colors">
                  Salesforce CRM & LWC Apex
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-slate-400 hover:text-white transition-colors">
                  Shopify, WordPress & Magento
                </Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="text-slate-400 hover:text-white transition-colors">
                  AI / ML & Gemini Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Pages (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-caps text-xs text-blue-400 tracking-widest font-bold uppercase">AGENCY</p>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li><Link to="/" className="hover:text-white">Home Page</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/insights" className="hover:text-white">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Box (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <p className="font-caps text-xs text-blue-400 tracking-widest font-bold uppercase">TECH INSIGHTS DIGEST</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe for technical engineering guides on Syspro ERP, Salesforce Apex, React Native, and AI models.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-blue-600/20 border border-blue-400/40 rounded-xl text-center text-xs text-blue-400 font-bold">
                ✓ Subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                {newsletterError && (
                  <div className="p-2 bg-red-900/30 border border-red-700/50 rounded-lg text-center text-xs text-red-400">
                    {newsletterError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-blue-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded-xl text-xs font-caps font-bold transition-all shadow-md disabled:opacity-60"
                >
                  {newsletterSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2018 - 2026 SRV Technology. All rights reserved.</p>

          <div className="flex items-center gap-6 font-caps text-[11px] tracking-wider text-blue-400 font-bold">
            <span>RELIABILITY</span>
            <span>•</span>
            <span>INNOVATION</span>
            <span>•</span>
            <span>INTEGRITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

