import React from 'react';
import { SEO } from '../components/SEO';
import { ContactSection } from '../components/ContactSection';
import { Mail, Phone, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Web Development Agency in Siliguri | SRV Technology"
        description="Contact SRV Technology, the leading web development agency in Siliguri & West Bengal. Get a free consultation for Syspro ERP, Salesforce, mobile apps, e-commerce & AI/ML. Serving Darjeeling & North Bengal."
        canonical="https://srvtechnology.com/contact"
        keywords={['contact web developer Siliguri', 'website development company West Bengal', 'IT agency Darjeeling', 'get quote North Bengal']}
      />
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Header Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-16">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Mail className="w-4 h-4" />
          GET IN TOUCH WITH SRV TECHNOLOGY
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Contact Our Engineering Team
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Ready to kick off your project or need an expert evaluation of your Syspro ERP, Salesforce, Mobile, or AI infrastructure? Connect with our technical leadership directly.
        </p>
      </div>

      {/* Main Contact Form & Info Component */}
      <ContactSection />

      {/* Direct Phone & Channels Grid */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Direct Call / WhatsApp</h3>
              <p className="text-xs text-slate-500 mb-3">24/7 Priority Hotline</p>
              <div className="space-y-1 font-mono text-xs text-blue-700 font-semibold">
                <a href="tel:+917001769472" className="block hover:underline">+91 70017 69472</a>
                <a href="tel:+917063821662" className="block hover:underline">+91 70638 21662</a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Official Email Inquiry</h3>
              <p className="text-xs text-slate-500 mb-3">Proposals & RFP Submissions</p>
              <a href="mailto:info@srvtechnology.com" className="font-mono text-xs text-blue-700 font-semibold hover:underline block">
                info@srvtechnology.com
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Response Time SLA</h3>
              <p className="text-xs text-slate-500 mb-3">Guaranteed Turnaround</p>
              <span className="font-mono text-xs text-blue-700 font-semibold">Under 4 Hours Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

