import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { Logo } from '../components/Logo';
import { CheckCircle2, TrendingDown, Clock, Globe2 } from 'lucide-react';
import hotelHero from '../assets/landing/hotel-hero.webp';
import hotelInterior from '../assets/landing/hotel-interior.webp';

const WHATSAPP_URL = 'https://wa.me/917001769472';

export const HotelsBusinessPage: React.FC = () => {
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
          formType: 'hotel',
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
        title="Direct Bookings, Not OTA Commissions"
        description="Direct-booking website & ad campaigns for independent hotels, resorts and homestays in West Bengal — reduce OTA commission and get guests booking straight with you."
        canonical="https://srvtechnology.com/hotels-business"
        keywords={['direct booking website for hotels', 'hotel website development West Bengal', 'reduce OTA commission', 'hotel digital marketing agency West Bengal', 'resort website development Siliguri', 'homestay booking website']}
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
            GET FREE REVIEW
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="px-6 md:px-12 max-w-[1120px] mx-auto pt-16 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-blue-800 font-caps text-xs font-bold mb-6 tracking-widest bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              For Independent Hotels, Resorts &amp; Homestays in West Bengal
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Stop handing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">20% of every booking</span> to OTAs.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              We build a direct-booking website and run targeted ads that bring guests straight to you —
              not to a platform that takes a cut of every stay you host.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider transition-all active:scale-95 shadow-md shadow-blue-500/20"
              >
                GET A FREE WEBSITE &amp; MARKETING REVIEW
              </a>
              <a
                href={WHATSAPP_URL}
                className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider hover:bg-slate-50 hover:border-blue-600 transition-all active:scale-95 shadow-sm"
              >
                💬 CHAT ON WHATSAPP
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={hotelHero}
              alt="Cosy hotel lobby with a panoramic mountain view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <p className="font-extrabold text-2xl text-slate-900">15–25%</p>
            <p className="text-xs text-slate-500 mt-1">Typical OTA commission you could reclaim</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <p className="font-extrabold text-2xl text-slate-900">3-in-1</p>
            <p className="text-xs text-slate-500 mt-1">Site, ads &amp; instant WhatsApp reply</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <p className="font-extrabold text-2xl text-slate-900">West Bengal</p>
            <p className="text-xs text-slate-500 mt-1">Focused on properties across the state, not just Kolkata</p>
          </div>
        </div>
      </header>

      {/* PAIN */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block mb-3">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Every night your property loses money it never even sees
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <TrendingDown className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Commission eats your margin first</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Every OTA booking hands over 15–25% of the room rate before you've paid staff, utilities, or upkeep — on every single stay, indefinitely.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <Globe2 className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Your online presence isn't a booking engine</h3>
              <p className="text-sm text-slate-600 leading-relaxed">A Facebook page and an OTA listing don't let a guest book directly. Anyone who'd rather book with you has nowhere to do it.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Late enquiries go cold by morning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">A guest messages at 11pm about next week's stay. By the time someone replies, they've already booked elsewhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-bold block mb-3">How We Fix It</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">A direct-booking website guests actually use</h2>
            <p className="text-base text-slate-600 mb-7 leading-relaxed">
              We design and build a website with a working booking or enquiry engine, then run Meta &amp; Google ads
              to bring qualified travellers straight to it — so a growing share of your bookings stop going through
              commission-taking platforms.
            </p>
            <ul className="space-y-3">
              {[
                'Mobile-first website with direct enquiry & booking capture',
                'Targeted ads to travellers actively planning a West Bengal stay',
                'Instant WhatsApp auto-response so no enquiry sits unanswered',
                'Simple monthly reporting — bookings, cost per enquiry, ROI',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-5">Sample Monthly Snapshot</span>
            <h3 className="text-xl font-bold mb-2">Direct Booking Performance</h3>
            <p className="text-sm text-slate-300 mb-6">Illustrative example of what a property's dashboard tracks once campaigns are running.</p>
            <div className="space-y-0 divide-y divide-white/10">
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Website enquiries</span><span className="font-bold text-blue-300">24</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Cost per enquiry</span><span className="font-bold text-blue-300">₹180–280</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">Avg. response time</span><span className="font-bold text-blue-300">Under 15 min</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-300">OTA commission avoided</span><span className="font-bold text-blue-300">Grows monthly</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] order-2 lg:order-1">
              <img
                src={hotelInterior}
                alt="Cosy homestay interior overlooking the hills"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Built specifically for hotels, resorts &amp; homestays</h2>
              <p className="text-slate-600 max-w-xl">
                We don't spread ourselves across every industry. Hospitality, tea, and real estate are the only three
                sectors we work with — so our process is built around how travellers actually search and book.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600"><span className="block text-blue-600 font-bold font-caps text-xs tracking-widest mb-2">I.</span>Dedicated to hospitality — not a generalist agency juggling ten industries</p>
            <p className="text-sm text-slate-600"><span className="block text-blue-600 font-bold font-caps text-xs tracking-widest mb-2">II.</span>Response-time discipline built into every enquiry, day or night</p>
            <p className="text-sm text-slate-600"><span className="block text-blue-600 font-bold font-caps text-xs tracking-widest mb-2">III.</span>Transparent monthly reporting — you see exactly what your spend produces</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-blue-300 font-mono text-xs tracking-widest uppercase font-bold block mb-3">What's Included</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12 max-w-xl">Everything you need to reduce OTA dependency, in one engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { idx: '01', title: 'Direct-Booking Website', desc: 'A fast, mobile-first site designed to convert browsers into direct enquiries — not just a digital brochure.' },
              { idx: '02', title: 'Buyer-Finding Ad Campaigns', desc: 'Meta & Google campaigns targeted at travellers actively planning trips to your region.' },
              { idx: '03', title: 'Instant Enquiry Response', desc: 'AI-powered WhatsApp automation that acknowledges every enquiry immediately, any hour of the day.' },
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">Get a free website &amp; marketing review</h2>
            <p className="text-base text-slate-600 mb-7 leading-relaxed">
              Tell us a little about your property. We'll review your current online presence and show you specifically
              where you're likely losing direct bookings — no cost, no obligation.
            </p>
            <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
              💬 Or message us directly on WhatsApp
            </a>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Request Your Free Review</h3>
            <p className="text-sm text-slate-500 mb-6">We'll respond within one business day.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">YOUR NAME</label>
                <input name="name" type="text" placeholder="Full name" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PROPERTY NAME</label>
                <input name="businessName" type="text" placeholder="Hotel / resort / homestay name" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PHONE / WHATSAPP</label>
                <input name="phone" type="tel" placeholder="+91" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">CITY / LOCATION</label>
                <input name="city" type="text" placeholder="e.g. Darjeeling, Digha, Siliguri" required className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-caps text-slate-600 font-bold mb-1.5">PROPERTY SIZE</label>
                <select name="detail" required defaultValue="" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 outline-none transition-colors">
                  <option value="" disabled>Select one</option>
                  <option>Under 15 rooms</option>
                  <option>15–40 rooms</option>
                  <option>40+ rooms</option>
                  <option>Multiple properties</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold font-caps text-xs tracking-wider transition-all shadow-md disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Get My Free Review'}
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10">Common questions from property owners</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {[
              { q: 'Will this actually reduce our OTA dependency, or just add another cost?', a: "The goal is direct bookings that don't carry a commission. Most properties see the effect gradually over 60–90 days as the website and ads mature — we report on this monthly so you can see it happening." },
              { q: "We're a small homestay — is this only for big hotels?", a: 'No. Independent homestays and boutique properties are exactly who this is built for — you don\'t need an in-house marketing team to benefit.' },
              { q: 'How long before we see results?', a: 'Website and campaign setup typically takes 1–2 weeks. Meaningful enquiry flow usually builds over the following 4–8 weeks as campaigns are optimised.' },
              { q: 'Is there a long-term contract?', a: 'We start with a short initial engagement so you can evaluate results before committing longer-term.' },
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
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 max-w-xl mx-auto">Stop handing your margin to booking platforms</h2>
        <p className="text-slate-300 mb-8">Get a free, no-obligation review of your property's current online presence.</p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold font-caps text-xs tracking-wider transition-all shadow-md inline-block"
        >
          GET MY FREE REVIEW
        </a>
      </section>

      <footer className="bg-slate-950 text-slate-500 text-xs text-center py-8 px-6">
        SRV Technology — Digital Marketing · Website Development · AI Development, for Hotels &amp; Hospitality across West Bengal
      </footer>
    </div>
  );
};
