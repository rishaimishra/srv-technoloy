import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, Copy, Check } from 'lucide-react';
import { StrategyLead } from './data';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<StrategyLead>({
    name: '',
    brandName: '',
    phone: '',
    monthlyRevenue: '₹5L - ₹25L / month',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.brandName.trim()) errs.brandName = 'Tea brand name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone/WhatsApp number required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/landing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'tea',
          name: formData.name,
          businessName: formData.brandName,
          phone: formData.phone,
          detail: formData.monthlyRevenue,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('idle');
      setSubmitted(true);
    } catch {
      setStatus('error');
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 70017 69472');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-10 bg-white border-b border-slate-100" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-slate-50 flex flex-col justify-between space-y-8 border-b md:border-b-0 md:border-r border-slate-200">
            <div className="space-y-6">
              <span className="text-blue-700 font-bold text-xs tracking-[0.2em] uppercase font-mono">Tea Brand Growth Consultation</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Get your free D2C tea brand growth strategy.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We'll audit your current e-commerce store, marketplace channels, and ad accounts to deliver a
                customized 3-step roadmap to scale your direct online brand sales.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div onClick={handleCopyPhone} className="flex items-center gap-4 cursor-pointer group hover:bg-white p-2.5 rounded-xl transition-colors" title="Click to copy number">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Local Tea Desk</p>
                  <p className="font-bold text-slate-900 flex items-center gap-2 font-mono">
                    +91 70017 69472
                    {copiedPhone ? (
                      <span className="text-xs text-emerald-600 font-normal flex items-center gap-1 font-sans">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2.5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">HQ Office</p>
                  <p className="font-bold text-slate-900">Siliguri, West Bengal, India</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Response Time: Within 4 hours on business days</span>
            </div>
          </div>

          <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-white relative">
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Strategy Request Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our D2C tea
                    marketing strategists will audit <span className="font-semibold text-slate-900">{formData.brandName}</span> and
                    WhatsApp the growth strategy directly to <span className="font-semibold text-slate-900 font-mono">{formData.phone}</span>.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl text-left text-xs space-y-2 w-full max-w-sm border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    What happens next:
                  </div>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>1. We analyze your website speed &amp; checkout conversion</li>
                    <li>2. We identify high-ROAS Meta &amp; Google ad opportunities</li>
                    <li>3. We deliver a custom WhatsApp replenishment workflow preview</li>
                  </ul>
                </div>

                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', brandName: '', phone: '', monthlyRevenue: '₹5L - ₹25L / month' }); }}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-semibold hover:from-blue-700 hover:to-indigo-700"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-300'} bg-transparent py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition-colors`}
                      placeholder="e.g. Vikramaditya Sen"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Tea Brand / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className={`w-full border-b-2 ${errors.brandName ? 'border-red-500' : 'border-slate-300'} bg-transparent py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition-colors`}
                      placeholder="e.g. Vedic Leaf Tea Co."
                    />
                    {errors.brandName && <p className="text-xs text-red-500">{errors.brandName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full border-b-2 ${errors.phone ? 'border-red-500' : 'border-slate-300'} bg-transparent py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition-colors`}
                    placeholder="+91 98000 00000"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Current Monthly Revenue</label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                    className="w-full border-b-2 border-slate-300 bg-transparent py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition-colors cursor-pointer"
                  >
                    <option value="Starting Out / Pre-launch">Starting Out / Pre-launch</option>
                    <option value="Under ₹5 Lakhs / month">Under ₹5 Lakhs / month</option>
                    <option value="₹5L - ₹25L / month">₹5L - ₹25L / month</option>
                    <option value="₹25L - ₹1 Crore / month">₹25L - ₹1 Crore / month</option>
                    <option value="₹1 Crore+ / month">₹1 Crore+ / month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <span>GENERATING BRAND STRATEGY...</span>
                  ) : (
                    <>
                      <span>GET FREE D2C BRAND STRATEGY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'error' && <p className="text-xs text-red-600 text-center">Something went wrong. Please try WhatsApp instead.</p>}

                <p className="text-[11px] text-slate-500 text-center">
                  100% confidential. No spam. We respect your tea brand's proprietary sales and customer data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
