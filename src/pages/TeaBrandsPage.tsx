import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import styles from './TeaBrandsPage.module.css';

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
    <div className={styles.page}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO
        title="Be Found by Tea Buyers Online"
        description="A professional export-ready website and buyer-search ad campaigns for tea gardens, estates, D2C brands, and exporters in West Bengal — so wholesale and export buyers find you before a competitor."
        canonical="https://srvtechnology.com/tea-brands"
        keywords={['tea export website', 'tea garden website design', 'wholesale tea buyer marketing', 'tea estate branding', 'Darjeeling tea exporters']}
      />
      <LocalBusinessSchema />

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>SRV<span>TECH</span> · Tea</div>
          <a href="#contact" className={styles.navCta}>Get Free Consultation</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.leafPattern}></div>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <span className={styles.eyebrow}>For Tea Gardens, Brands, Packers &amp; Exporters in West Bengal</span>
          <h1>Buyers are already searching for suppliers like you. <em>Can they find you?</em></h1>
          <p className={styles.sub}>
            Export houses, retail chains, and wholesale buyers search online before they ever pick up the phone.
            If your business doesn't show up, they contact a competitor instead — regardless of whose tea is better.
          </p>
          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.btnPrimary}>Request a Free Consultation</a>
            <a href={WHATSAPP_URL} className={styles.btnGhost}>💬 Chat on WhatsApp</a>
          </div>
          <div className={styles.dividerLine}>SERVING GARDENS &amp; BRANDS ACROSS DARJEELING · DOOARS · TERAI · JALPAIGURI · KOLKATA TRADE</div>
        </div>
      </header>

      <section className={`${styles.pain} ${styles.section}`}>
        <div className={styles.wrap}>
          <div className={styles.painHead}>
            <span className={styles.kicker}>The Problem</span>
            <h2>Great tea, invisible online — while buyers move to whoever they find first</h2>
          </div>
          <div className={styles.painList}>
            <div className={styles.painRow}>
              <div className={styles.qn}>"</div>
              <div><h3>Invisible to online buyers</h3><p>Export houses, hotels, and retail chains increasingly search online before reaching out — if you're not there, they never know you exist.</p></div>
            </div>
            <div className={styles.painRow}>
              <div className={styles.qn}>"</div>
              <div><h3>Growth capped by middlemen</h3><p>Trade relationships built over years are valuable, but they also put a ceiling on volume. There's a whole layer of direct buyers you're not reaching.</p></div>
            </div>
            <div className={styles.painRow}>
              <div className={styles.qn}>"</div>
              <div><h3>Competitors look more credible online</h3><p>A brand with even a basic professional website routinely wins the buyer's attention over one with none — regardless of product quality.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.section}`}>
        <div className={`${styles.wrap} ${styles.solInner}`}>
          <div className={styles.solText}>
            <span className={styles.kicker}>How We Fix It</span>
            <h2>An export-ready website, in front of buyers who are actively searching</h2>
            <p>
              We build a professional website that presents your estate, brand, or export business credibly to trade
              buyers, then run targeted search campaigns that reach people actively searching for tea suppliers —
              not passive scrollers.
            </p>
            <ul className={styles.checklist}>
              <li><span className={styles.num}>01</span> Export-ready website with your certifications, capacity &amp; story</li>
              <li><span className={styles.num}>02</span> Google Search campaigns targeting active buyer search terms</li>
              <li><span className={styles.num}>03</span> Simple enquiry capture so buyer contacts don't get lost</li>
              <li><span className={styles.num}>04</span> Monthly reporting on enquiries and where they came from</li>
            </ul>
          </div>
          <div className={styles.mockcard}>
            <span className={styles.tag}>Illustrative Example</span>
            <h3>What a Buyer-Search Campaign Tracks</h3>
            <p>A sample of what monthly reporting looks like once your campaign is live.</p>
            <div className={styles.miniStat}><span>Buyer search enquiries</span><span>4–6</span></div>
            <div className={styles.miniStat}><span>Cost per enquiry</span><span>₹250–450</span></div>
            <div className={styles.miniStat}><span>Top search terms</span><span>Wholesale, export, bulk</span></div>
            <div className={styles.miniStat}><span>Response window</span><span>Same business day</span></div>
          </div>
        </div>
      </section>

      <section className={`${styles.segments} ${styles.section}`}>
        <div className={styles.wrap}>
          <h2>Built for every part of the tea trade</h2>
          <p className={styles.segLead}>
            Whether you sell direct-to-consumer or trade in bulk, the way buyers find you online is different —
            our approach adapts to which one you are.
          </p>
          <div className={styles.segGrid}>
            <div className={styles.segCard}>
              <h3>Tea Gardens &amp; Estates</h3>
              <p>Present your estate's story, certifications, and harvest to buyers who value provenance and quality.</p>
            </div>
            <div className={styles.segCard}>
              <h3>Organic &amp; D2C Brands</h3>
              <p>Sell direct to consumers with a website and campaigns built for online ordering, not just enquiries.</p>
            </div>
            <div className={styles.segCard}>
              <h3>Exporters &amp; Wholesale Packers</h3>
              <p>Reach procurement managers and export buyers actively searching for suppliers at scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.services} ${styles.section}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>What's Included</span>
          <h2>Everything needed to be found by the buyers already searching</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>01</div>
              <h3>Export-Ready Website</h3>
              <p>A professional site that presents your business credibly to trade buyers, exporters, and retail partners.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>02</div>
              <h3>Buyer-Finding Ad Campaigns</h3>
              <p>Google Search campaigns built around the exact terms procurement buyers and exporters use.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.idx}>03</div>
              <h3>Instant Enquiry Response</h3>
              <p>AI-powered WhatsApp automation ensures no buyer enquiry sits unanswered while you're occupied with operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.contact} ${styles.section}`} id="contact">
        <div className={`${styles.wrap} ${styles.contactInner}`}>
          <div className={styles.contactText}>
            <span className={styles.kicker}>Get Started</span>
            <h2>Request a free consultation</h2>
            <p>
              Tell us about your tea business. We'll show you exactly what buyers see (or don't see) when they search
              for suppliers like you — no cost, no obligation.
            </p>
            <a href={WHATSAPP_URL} className={styles.whatsappCta}>💬 Or message us directly on WhatsApp</a>
          </div>
          <div className={styles.formCard}>
            <h3>Request Your Free Consultation</h3>
            <p className={styles.formSub}>We'll respond within one business day.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}><label>Your Name</label><input name="name" type="text" placeholder="Full name" required /></div>
              <div className={styles.field}><label>Business Name</label><input name="businessName" type="text" placeholder="Estate / brand / company name" required /></div>
              <div className={styles.field}><label>Phone / WhatsApp</label><input name="phone" type="tel" placeholder="+91" required /></div>
              <div className={styles.field}><label>City / Location</label><input name="city" type="text" placeholder="e.g. Darjeeling, Jalpaiguri, Siliguri" required /></div>
              <div className={styles.field}>
                <label>Business Type</label>
                <select name="detail" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Tea Garden / Estate</option>
                  <option>Organic / D2C Brand</option>
                  <option>Wholesale Packer</option>
                  <option>Exporter</option>
                  <option>Retail Chain</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Get My Free Consultation'}
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
          <h2>Common questions from tea businesses</h2>
          <div className={styles.faqItem}>
            <h4>We've always relied on trade relationships — will this actually work for us?</h4>
            <p>Digital presence doesn't replace trade relationships, it adds a new channel alongside them — reaching buyers who don't yet know your business exists.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Our business isn't very online — is this a big undertaking?</h4>
            <p>No. We handle the website and campaigns end-to-end. Your involvement is mainly providing information about your business and responding to buyer enquiries once they come in.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How long before we see enquiries?</h4>
            <p>Website and campaign setup typically takes 1–2 weeks. Given the more considered nature of B2B tea buying, expect enquiry flow to build gradually over 4–8 weeks.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you work with both small estates and larger exporters?</h4>
            <p>Yes — our approach adapts to your business type and buyer profile, from boutique estates to established export operations.</p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <h2>Let the buyers who are already searching find you first</h2>
          <p>Get a free, no-obligation consultation on your tea business's online presence.</p>
          <a href="#contact" className={styles.btnPrimary}>Request Free Consultation</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>SRV TECH — Digital Marketing · Website Development · AI Development, for the Tea Industry across West Bengal</div>
      </footer>
    </div>
  );
};
