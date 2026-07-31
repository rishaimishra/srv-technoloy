import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { Logo } from '../components/Logo';
import { CheckCircle2, Search, Users2, Award } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/917001769472';

export const TeaBrandsPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/landing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'tea',
          name: data.get('name'),
          businessName: data.get('businessName'),
          phone: data.get('phone'),
          city: data.get('city'),
          detail: data.get('detail'),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SEO
        title="Be Found by Tea Buyers Online"
        description="Export-ready website and buyer-search ad campaigns for tea gardens, estates, D2C brands & exporters in West Bengal — so wholesale and export buyers find you before a competitor."
        canonical="https://srvtechnology.com/tea-brands"
        keywords={['tea export website design', 'tea business website development West Bengal', 'wholesale tea supplier marketing', 'tea garden website design', 'tea estate branding', 'Darjeeling tea exporters website']}
      />
      <LocalBusinessSchema />

      {/* NAV — intentionally minimal, no site nav links, single CTA only */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1120px] mx-auto">
          <Logo size="sm" />
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full font-bold font-caps text-xs tracking-wider transition-all shadow-md"
          >
            GET FREE CONSULTATION
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="px-6 md:px-12 max-w-[1120px] mx-auto pt-16 pb-14">
        <span className="inline-flex items-center gap-2 text-blue-800 font-caps text-xs font-bold mb-6 tracking-widest bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full uppercase">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          For Tea Gardens, Brands, Packers &amp; Exporters in West Bengal
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight max-w-3xl">
          Buyers are already searching for suppliers like you.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Can they find you?</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Export houses, retail chains, and wholesale buyers search online before they ever pick up the phone.
          If your business doesn't show up, they contact a competitor instead — regardless of whose tea is better.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider transition-all active:scale-95 shadow-md shadow-blue-500/20"
          >
            REQUEST A FREE CONSULTATION
          </a>
          <a
            href={WHATSAPP_URL}
            className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider hover:bg-slate-50 hover:border-blue-600 transition-all active:scale-95 shadow-sm"
          >
            💬 CHAT ON WHATSAPP
          </a>
        </div>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-200 text-xs font-caps font-bold text-slate-500 tracking-wide flex-wrap">
          <span>SERVING GARDENS &amp; BRANDS ACROSS</span>
          <span className="text-blue-700">DARJEELING</span> · <span className="text-blue-700">DOOARS</span> · <span className="text-blue-700">TERAI</span> · <span className="text-blue-700">JALPAIGURI</span> · <span className="text-blue-700">KOLKATA TRADE</span>
        </div>
      </header>

      {/* PAIN */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block mb-3">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Great tea, invisible online — while buyers move to whoever they find first
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] gap-4 py-7">
              <Search className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Invisible to online buyers</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Export houses, hotels, and retail chains increasingly search online before reaching out — if you're not there, they never know you exist.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] gap-4 py-7">
              <Users2 className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Growth capped by middlemen</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Trade relationships built over years are valuable, but they also put a ceiling on volume. There's a whole layer of direct buyers you're not reaching.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] gap-4 py-7">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Competitors look more credible online</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A brand with even a basic professional website routinely wins the buyer's attention over one with none — regardless of product quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block mb-3">How We Fix It</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">An export-ready website, in front of buyers who are actively searching</h2>
            <p className="text-base text-slate-600 mb-7 leading-relaxed">
              We build a professional website that presents your estate, brand, or export business credibly to trade
              buyers, then run targeted search campaigns that reach people actively searching for tea suppliers —
              not passive scrollers.
            </p>
            <ul className="space-y-3">
              {[
                'Export-ready website with your certifications, capacity & story',
                'Google Search campaigns targeting active buyer search terms',
                "Simple enquiry capture so buyer contacts don't get lost",
                'Monthly reporting on enquiries and where they came from',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-5">Illustrative Example</span>
            <h3 className="text-xl font-bold mb-2">What a Buyer-Search Campaign Tracks</h3>
            <p className="text-sm text-slate-300 mb-6">A sample of what monthly reporting looks like once your campaign is live.</p>
            <div className="space-y-0 divide-y divide-white/10">
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Buyer search enquiries</span><span className="font-bold text-blue-300">4–6</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Cost per enquiry</span><span className="font-bold text-blue-300">₹250–450</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Top search terms</span><span className="font-bold text-blue-300">Wholesale, export, bulk</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Response window</span><span className="font-bold text-blue-300">Same business day</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="bg-slate-50 py-20 px-6 md:px-12 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Built for every part of the tea trade</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-10">
            Whether you sell direct-to-consumer or trade in bulk, the way buyers find you online is different —
            our approach adapts to which one you are.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Tea Gardens &amp; Estates</h3>
              <p className="text-sm text-slate-600">Present your estate's story, certifications, and harvest to buyers who value provenance and quality.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Organic &amp; D2C Brands</h3>
              <p className="text-sm text-slate-600">Sell direct to consumers with a website and campaigns built for online ordering, not just enquiries.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Exporters &amp; Wholesale Packers</h3>
              <p className="text-sm text-slate-600">Reach procurement managers and export buyers actively searching for suppliers at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-blue-300 font-mono text-xs tracking-widest uppercase font-bold block mb-3">What's Included</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12 max-w-xl">Everything needed to be found by the buyers already searching</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { idx: '01', title: 'Export-Ready Website', desc: 'A professional site that presents your business credibly to trade buyers, exporters, and retail partners.' },
              { idx: '02', title: 'Buyer-Finding Ad Campaigns', desc: 'Google Search campaigns built around the exact terms procurement buyers and exporters use.' },
              { idx: '03', title: 'Instant Enquiry Response', desc: "AI-powered WhatsApp automation ensures no buyer enquiry sits unanswered while you're occupied with operations." },
            ].map((s) => (
              <div key={s.idx} className="border border-white/15 rounded-2xl p-7">
                <div className="text-blue-300 font-mono text-sm mb-4">{s.idx}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 md:px-12" id="contact">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block mb-3">Get Started</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">Request a free consultation</h2>
            <p className="text-base text-slate-600 mb-7 leading-relaxed">
              Tell us about your tea business. We'll show you exactly what buyers see (or don't see) when they search
              for suppliers like you — no cost, no obligation.
            </p>
            <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
              💬 Or message us directly on WhatsApp
            </a>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Request Your Free Consultation</h3>
            <p className="text-sm text-slate-500 mb-6">We'll respond within one business day.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">YOUR NAME</label>
                <input name="name" type="text" placeholder="Full name" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">BUSINESS NAME</label>
                <input name="businessName" type="text" placeholder="Estate / brand / company name" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PHONE / WHATSAPP</label>
                <input name="phone" type="tel" placeholder="+91" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">CITY / LOCATION</label>
                <input name="city" type="text" placeholder="e.g. Darjeeling, Jalpaiguri, Siliguri" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">BUSINESS TYPE</label>
                <select name="detail" required defaultValue="" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors">
                  <option value="" disabled>Select one</option>
                  <option>Tea Garden / Estate</option>
                  <option>Organic / D2C Brand</option>
                  <option>Wholesale Packer</option>
                  <option>Exporter</option>
                  <option>Retail Chain</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold font-caps text-xs tracking-wider transition-all shadow-md disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Get My Free Consultation'}
              </button>
              {status === 'sent' && <p className="text-sm text-center text-emerald-600">Thanks — we'll be in touch within one business day.</p>}
              {status === 'error' && <p className="text-sm text-center text-red-600">Something went wrong. Please try WhatsApp instead.</p>}
            </form>
            <p className="text-xs text-slate-400 mt-4 text-center">We'll never share your details. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10">Common questions from tea businesses</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {[
              { q: "We've always relied on trade relationships — will this actually work for us?", a: "Digital presence doesn't replace trade relationships, it adds a new channel alongside them — reaching buyers who don't yet know your business exists." },
              { q: "Our business isn't very online — is this a big undertaking?", a: 'No. We handle the website and campaigns end-to-end. Your involvement is mainly providing information about your business and responding to buyer enquiries once they come in.' },
              { q: 'How long before we see enquiries?', a: 'Website and campaign setup typically takes 1–2 weeks. Given the more considered nature of B2B tea buying, expect enquiry flow to build gradually over 4–8 weeks.' },
              { q: 'Do you work with both small estates and larger exporters?', a: 'Yes — our approach adapts to your business type and buyer profile, from boutique estates to established export operations.' },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.q}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-white text-center py-20 px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 max-w-xl mx-auto">Let the buyers who are already searching find you first</h2>
        <p className="text-slate-300 mb-8">Get a free, no-obligation consultation on your tea business's online presence.</p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider transition-all shadow-md inline-block"
        >
          REQUEST FREE CONSULTATION
        </a>
      </section>

      <footer className="bg-slate-950 text-slate-500 text-xs text-center py-8 px-6">
        SRV Technology — Digital Marketing · Website Development · AI Development, for the Tea Industry across West Bengal
      </footer>
    </div>
  );
};
