import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import styles from './HotelsBusinessPage.module.css';

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
    <div className={styles.page}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO
        title="Direct Bookings, Not OTA Commissions"
        description="We build direct-booking websites and run targeted ads for independent hotels, resorts & homestays in West Bengal — so fewer of your bookings go through commission-taking platforms."
        canonical="https://srvtechnology.com/hotels-business"
        keywords={['direct booking website for hotels', 'reduce OTA commission', 'hotel marketing West Bengal', 'resort website development', 'homestay booking website']}
      />
      <LocalBusinessSchema />

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>SRV<span>TECH</span> · Hospitality</div>
          <a href="#contact" className={styles.navCta}>Get Free Review</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <span className={styles.eyebrow}>For Independent Hotels, Resorts &amp; Homestays in West Bengal</span>
          <h1>Stop handing <em>20% of every booking</em> to OTAs.</h1>
          <p className={styles.sub}>
            We build a direct-booking website and run targeted ads that bring guests straight to you —
            not to a platform that takes a cut of every stay you host.
          </p>
          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.btnPrimary}>Get a Free Website &amp; Marketing Review</a>
            <a href={WHATSAPP_URL} className={styles.btnGhost}>💬 Chat on WhatsApp</a>
          </div>
          <div className={styles.statStrip}>
            <div><div className={styles.num}>15–25%</div><div className={styles.lbl}>Typical OTA commission you could reclaim</div></div>
            <div><div className={styles.num}>3</div><div className={styles.lbl}>Services in one place — site, ads &amp; instant WhatsApp reply</div></div>
            <div><div className={styles.num}>West Bengal</div><div className={styles.lbl}>Focused on properties across the state, not just Kolkata</div></div>
          </div>
        </div>
      </header>

      <section className={`${styles.pain} ${styles.section}`}>
        <div className={styles.wrap}>
          <div className={styles.painHead}>
            <span className={styles.kicker}>The Problem</span>
            <h2>Every night your property loses money it never even sees</h2>
          </div>
          <div className={styles.painGrid}>
            <div className={styles.painCard}>
              <div className={styles.mark}>"</div>
              <h3>Commission eats your margin first</h3>
              <p>Every OTA booking hands over 15–25% of the room rate before you've paid staff, utilities, or upkeep — on every single stay, indefinitely.</p>
            </div>
            <div className={styles.painCard}>
              <div className={styles.mark}>"</div>
              <h3>Your online presence isn't a booking engine</h3>
              <p>A Facebook page and an OTA listing don't let a guest book directly. Anyone who'd rather book with you has nowhere to do it.</p>
            </div>
            <div className={styles.painCard}>
              <div className={styles.mark}>"</div>
              <h3>Late enquiries go cold by morning</h3>
              <p>A guest messages at 11pm about next week's stay. By the time someone replies, they've already booked elsewhere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.section}`}>
        <div className={`${styles.wrap} ${styles.solInner}`}>
          <div className={styles.solText}>
            <span className={styles.kicker}>How We Fix It</span>
            <h2>A direct-booking website guests actually use</h2>
            <p>
              We design and build a website with a working booking or enquiry engine, then run Meta &amp; Google ads
              to bring qualified travellers straight to it — so a growing share of your bookings stop going through
              commission-taking platforms.
            </p>
            <ul className={styles.checklist}>
              <li><span className={styles.num}>01</span> Mobile-first website with direct enquiry &amp; booking capture</li>
              <li><span className={styles.num}>02</span> Targeted ads to travellers actively planning a West Bengal stay</li>
              <li><span className={styles.num}>03</span> Instant WhatsApp auto-response so no enquiry sits unanswered</li>
              <li><span className={styles.num}>04</span> Simple monthly reporting — bookings, cost per enquiry, ROI</li>
            </ul>
          </div>
          <div className={styles.mockcard}>
            <span className={styles.tag}>Sample Monthly Snapshot</span>
            <h3>Direct Booking Performance</h3>
            <p>Illustrative example of what a property's dashboard tracks once campaigns are running.</p>
            <div className={styles.miniStat}><span>Website enquiries</span><span>24</span></div>
            <div className={styles.miniStat}><span>Cost per enquiry</span><span>₹180–280</span></div>
            <div className={styles.miniStat}><span>Avg. response time</span><span>Under 15 min</span></div>
            <div className={styles.miniStat}><span>OTA commission avoided</span><span>Grows monthly</span></div>
          </div>
        </div>
      </section>

      <section className={`${styles.trust} ${styles.section}`}>
        <div className={styles.wrap}>
          <h2>Built specifically for hotels, resorts &amp; homestays</h2>
          <p className={styles.trustLead}>
            We don't spread ourselves across every industry. Hospitality, tea, and real estate are the only three
            sectors we work with — so our process is built around how travellers actually search and book.
          </p>
          <div className={styles.trustStrip}>
            <div><div className={styles.icon}>I</div><p>Dedicated to hospitality — not a generalist agency juggling ten industries</p></div>
            <div><div className={styles.icon}>II</div><p>Response-time discipline built into every enquiry, day or night</p></div>
            <div><div className={styles.icon}>III</div><p>Transparent monthly reporting — you see exactly what your spend produces</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.services} ${styles.section}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>What's Included</span>
          <h2>Everything you need to reduce OTA dependency, in one engagement</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>01</div>
              <h3>Direct-Booking Website</h3>
              <p>A fast, mobile-first site designed to convert browsers into direct enquiries — not just a digital brochure.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>02</div>
              <h3>Buyer-Finding Ad Campaigns</h3>
              <p>Meta &amp; Google campaigns targeted at travellers actively planning trips to your region.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>03</div>
              <h3>Instant Enquiry Response</h3>
              <p>AI-powered WhatsApp automation that acknowledges every enquiry immediately, any hour of the day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.contact} ${styles.section}`} id="contact">
        <div className={`${styles.wrap} ${styles.contactInner}`}>
          <div className={styles.contactText}>
            <span className={styles.kicker}>Get Started</span>
            <h2>Get a free website &amp; marketing review</h2>
            <p>
              Tell us a little about your property. We'll review your current online presence and show you specifically
              where you're likely losing direct bookings — no cost, no obligation.
            </p>
            <a href={WHATSAPP_URL} className={styles.whatsappCta}>💬 Or message us directly on WhatsApp</a>
          </div>
          <div className={styles.formCard}>
            <h3>Request Your Free Review</h3>
            <p className={styles.formSub}>We'll respond within one business day.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}><label>Your Name</label><input name="name" type="text" placeholder="Full name" required /></div>
              <div className={styles.field}><label>Property Name</label><input name="businessName" type="text" placeholder="Hotel / resort / homestay name" required /></div>
              <div className={styles.field}><label>Phone / WhatsApp</label><input name="phone" type="tel" placeholder="+91" required /></div>
              <div className={styles.field}><label>City / Location</label><input name="city" type="text" placeholder="e.g. Darjeeling, Digha, Siliguri" required /></div>
              <div className={styles.field}>
                <label>Property Size</label>
                <select name="detail" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Under 15 rooms</option>
                  <option>15–40 rooms</option>
                  <option>40+ rooms</option>
                  <option>Multiple properties</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Get My Free Review'}
              </button>
              {status === 'sent' && <p className={`${styles.formStatus} ${styles.success}`}>Thanks — we'll be in touch within one business day.</p>}
              {status === 'error' && <p className={`${styles.formStatus} ${styles.error}`}>Something went wrong. Please try WhatsApp instead.</p>}
            </form>
            <p className={styles.formNote}>We'll never share your details. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.faq} ${styles.section}`}>
        <div className={styles.wrap}>
          <h2>Common questions from property owners</h2>
          <div className={styles.faqItem}>
            <h4>Will this actually reduce our OTA dependency, or just add another cost?</h4>
            <p>The goal is direct bookings that don't carry a commission. Most properties see the effect gradually over 60–90 days as the website and ads mature — we report on this monthly so you can see it happening.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>We're a small homestay — is this only for big hotels?</h4>
            <p>No. Independent homestays and boutique properties are exactly who this is built for — you don't need an in-house marketing team to benefit.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How long before we see results?</h4>
            <p>Website and campaign setup typically takes 1–2 weeks. Meaningful enquiry flow usually builds over the following 4–8 weeks as campaigns are optimised.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Is there a long-term contract?</h4>
            <p>We start with a short initial engagement so you can evaluate results before committing longer-term.</p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <h2>Stop handing your margin to booking platforms</h2>
          <p>Get a free, no-obligation review of your property's current online presence.</p>
          <a href="#contact" className={styles.btnPrimary}>Get My Free Review</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>SRV TECH — Digital Marketing · Website Development · AI Development, for Hotels &amp; Hospitality across West Bengal</div>
      </footer>
    </div>
  );
};
