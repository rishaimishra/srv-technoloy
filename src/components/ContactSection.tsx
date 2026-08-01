import React, { useRef, useState } from 'react';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { getLeadSource } from '../lib/leadSource';
import { CaptchaWidget } from './CaptchaWidget';

interface ContactSectionProps {
  prefilledSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSubject }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: prefilledSubject || 'Custom Software Development',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setError('Please complete the verification check.');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...getLeadSource(), captchaToken }),
      });
      if (!res.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setError('Something went wrong sending your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
      captchaRef.current?.reset();
      setCaptchaToken('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200 font-sans">
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-blue-700 font-caps text-xs sm:text-sm tracking-widest block mb-3 font-bold">
                CONTACT US
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-sans text-slate-900 mb-6">
                Let's get in touch
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                Have an upcoming software project, Syspro ERP, Salesforce, mobile app idea, or AI automation requirement? Reach out to our senior technical consultants for a free architecture review and project estimate.
              </p>

              {/* Direct Info Blocks */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-caps text-slate-500 mb-1 font-bold">CALL US DIRECTLY</p>
                    <p className="text-sm font-bold text-slate-900 hover:text-blue-700">
                      <a href="tel:+917001769472">+91 70017 69472</a>
                    </p>
                    <p className="text-sm font-bold text-slate-900 hover:text-blue-700">
                      <a href="tel:+917063821662">+91 70638 21662</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-caps text-slate-500 mb-1 font-bold">OFFICIAL EMAIL</p>
                    <p className="text-sm font-bold text-slate-900 hover:text-blue-700">
                      <a href="mailto:info@srvtechnology.com">info@srvtechnology.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs font-caps text-slate-500 mb-1 font-bold">ESTIMATED RESPONSE TIME</p>
                    <p className="text-sm font-bold text-slate-900">Under 2 Business Hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500">
              <p>SRV Technology • Enterprise Digital Solutions</p>
            </div>
          </div>

          {/* Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 border border-blue-600 flex items-center justify-center text-blue-700 mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to SRV Technology. Our technical director will review your project details and contact you at <strong className="text-blue-700">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      projectType: 'Custom Software Development',
                      budget: '$5,000 - $15,000',
                      message: '',
                    });
                  }}
                  className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-caps text-xs font-bold hover:bg-blue-700 shadow-md"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request an Architecture Consultation</h3>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">FIRST NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">LAST NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-last-name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">WORK EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PROJECT TYPE</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-project-type"
                    >
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development (React Native, Flutter)</option>
                      <option value="ERP Implementation">Syspro ERP Implementation</option>
                      <option value="Salesforce Development">Salesforce Implementation & Development</option>
                      <option value="E-Commerce Development">Shopify, WordPress & Magento</option>
                      <option value="AI / ML Engineering">AI / ML Development & Implementation</option>
                      <option value="Full Architecture Audit">Full Enterprise Architecture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">ESTIMATED BUDGET</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                      id="contact-budget"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                      <option value="$35,000+">$35,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PROJECT OVERVIEW & REQUIREMENTS *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, preferred timelines, and tech stack requirements..."
                    className="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors"
                    id="contact-message"
                  />
                </div>

                <CaptchaWidget ref={captchaRef} onToken={setCaptchaToken} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold font-caps text-xs tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      SUBMITTING CONSULTATION REQUEST...
                    </>
                  ) : (
                    <>
                      SEND CONSULTATION REQUEST
                      <span className="material-symbols-outlined text-sm">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

