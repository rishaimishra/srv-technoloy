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
    <section className="py-24 px-4 md:px-10 bg-white border-b border-gray-100" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-gray-50 flex flex-col justify-between space-y-8 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="space-y-6">
              <span className="text-[#7d562d] font-bold text-xs tracking-[0.2em] uppercase">Tea Brand Growth Consultation</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#01261f] leading-tight">
                Get your free D2C tea brand growth strategy.
              </h2>
              <p className="text-[#414846] text-base leading-relaxed">
                We'll audit your current e-commerce store, marketplace channels, and ad accounts to deliver a
                customized 3-step roadmap to scale your direct online brand sales.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#e4e2dd]">
              <div onClick={handleCopyPhone} className="flex items-center gap-4 cursor-pointer group hover:bg-white/60 p-2.5 rounded-xl transition-colors" title="Click to copy number">
                <div className="w-10 h-10 rounded-full bg-[#01261f]/10 flex items-center justify-center text-[#01261f] group-hover:bg-[#01261f] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-widest text-[#414846] font-semibold">Local Tea Desk</p>
                  <p className="font-bold text-[#01261f] flex items-center gap-2 font-mono">
                    +91 70017 69472
                    {copiedPhone ? (
                      <span className="text-xs text-emerald-600 font-normal flex items-center gap-1 font-sans">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#717976] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2.5">
                <div className="w-10 h-10 rounded-full bg-[#01261f]/10 flex items-center justify-center text-[#01261f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#414846] font-semibold">HQ Office</p>
                  <p className="font-bold text-[#01261f]">Siliguri, West Bengal, India</p>
                </div>
              </div>
            </div>

            <div className="bg-[#01261f]/5 p-4 rounded-xl border border-[#01261f]/10 text-xs text-[#01261f] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7d562d] shrink-0" />
              <span>Response Time: Within 4 hours on business days</span>
            </div>
          </div>

          <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-white relative">
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-[#c5eadf] text-[#00201a] rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#01261f]">Strategy Request Received!</h3>
                  <p className="text-sm text-[#414846] max-w-md">
                    Thank you, <span className="font-semibold text-[#01261f]">{formData.name}</span>. Our D2C tea
                    marketing strategists will audit <span className="font-semibold text-[#01261f]">{formData.brandName}</span> and
                    WhatsApp the growth strategy directly to <span className="font-semibold text-[#01261f] font-mono">{formData.phone}</span>.
                  </p>
                </div>

                <div className="p-4 bg-[#f0eee9] rounded-xl text-left text-xs space-y-2 w-full max-w-sm border border-[#e4e2dd]">
                  <div className="font-bold text-[#01261f] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#7d562d]" />
                    What happens next:
                  </div>
                  <ul className="space-y-1.5 text-[#414846] list-disc list-inside">
                    <li>1. We analyze your website speed &amp; checkout conversion</li>
                    <li>2. We identify high-ROAS Meta &amp; Google ad opportunities</li>
                    <li>3. We deliver a custom WhatsApp replenishment workflow preview</li>
                  </ul>
                </div>

                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', brandName: '', phone: '', monthlyRevenue: '₹5L - ₹25L / month' }); }}
                  className="px-6 py-2.5 bg-[#01261f] text-white rounded text-xs font-semibold hover:bg-[#1a3c34] cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#414846] block">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b-2 border-[#c1c8c4] bg-transparent py-3 text-sm font-medium text-[#1b1c19] focus:outline-none focus:border-[#01261f] transition-colors"
                      placeholder="e.g. Vikramaditya Sen"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#414846] block">
                      Tea Brand / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full border-b-2 border-[#c1c8c4] bg-transparent py-3 text-sm font-medium text-[#1b1c19] focus:outline-none focus:border-[#01261f] transition-colors"
                      placeholder="e.g. Vedic Leaf Tea Co."
                    />
                    {errors.brandName && <p className="text-xs text-red-500 mt-1">{errors.brandName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#414846] block">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b-2 border-[#c1c8c4] bg-transparent py-3 text-sm font-medium text-[#1b1c19] focus:outline-none focus:border-[#01261f] transition-colors"
                    placeholder="+91 98000 00000"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#414846] block">Current Monthly Revenue</label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                    className="w-full border-b-2 border-[#c1c8c4] bg-transparent py-3 text-sm font-medium text-[#1b1c19] focus:outline-none focus:border-[#01261f] transition-colors cursor-pointer"
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
                  className="w-full bg-[#01261f] text-white py-4 rounded-lg font-bold hover:bg-[#1a3c34] hover:text-[#83a69c] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
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

                <p className="text-[11px] text-[#717976] text-center">
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
