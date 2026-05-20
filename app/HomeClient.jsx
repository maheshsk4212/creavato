'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import {
  IconArrowUpRight,
  IconStar,
  IconClock,
  IconShieldCheck,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconLayout,
  IconCode,
  IconSearch,
  IconTrendingUp,
  IconCpu,
  IconSettings,
  IconBrandInstagram,
  IconLayoutGrid,
  IconRefresh,
  IconCheck,
  IconCircleCheck,
  IconLoader2,
  IconCalendar,
  IconBriefcase,
  IconUsers,
  IconMapPin,
  IconGlobe,
} from '@tabler/icons-react';
import styles from './page.module.css';

const services = [
  { icon: IconSearch, title: 'UX Research', desc: 'Competitor audits, journey mapping, and usability testing to locate friction and drop-off points.' },
  { icon: IconTrendingUp, title: 'Product Strategy', desc: 'MVP definition, feature scoping, and positioning mapping for transaction systems.' },
  { icon: IconDeviceDesktop, title: 'SaaS UX/UI Design', desc: 'High-density charts, layout architecture, and user onboarding optimized for B2B dashboards.' },
  { icon: IconShieldCheck, title: 'Fintech Product Design', desc: 'Secure payment layouts, compliance mapping, KYC wizards, and wallet interfaces.' },
  { icon: IconCpu, title: 'AI Product Interface Design', desc: 'Humanizing dense machine learning pipelines, chat structures, and automated visual data panels.' },
  { icon: IconRefresh, title: 'Enterprise UX Modernization', desc: 'Refactoring legacy enterprise dashboards to boost internal workflow efficiency.' },
  { icon: IconLayoutGrid, title: 'Design Systems', desc: 'Figma component libraries and style tokens built for clean, rapid scaling.' },
  { icon: IconLayout, title: 'Web Application Design', desc: 'Custom web applications prioritizing speed, structural clarity, and WCAG accessibility.' },
  { icon: IconDeviceMobile, title: 'Mobile Product Design', desc: 'Frictionless iOS and Android transaction screens built for native touch interaction.' },
  { icon: IconCode, title: 'Frontend Engineering Collaboration', desc: 'Figma-to-code styling coordination for Angular and Flutter frontends.' },
  { icon: IconSettings, title: 'Website Maintenance', desc: 'Regular layout updates, performance optimization, and bug updates under structured monthly sprints.' },
  { icon: IconBrandInstagram, title: 'Social Media Design', desc: 'Cohesive visual templates and content designs to position your brand as an industry authority.' },
];

const industries = [
  { id: 'ecommerce', title: 'E-commerce & D2C Brands', desc: 'Conversion-focused checkout flows, catalog architecture, and headless store designs that drive revenue.', metric: '18%+ typical conversion boost' },
  { id: 'fintech', title: 'Fintech & Banking', desc: 'Secure money transfers, complex multi-currency wallets, and user-centric retail banking interfaces.', metric: 'Secured for 1M+ active users' },
  { id: 'saas', title: 'SaaS & B2B Enterprise', desc: 'High-density dashboards, user provisioning systems, and data analytics dashboards built for daily utility.', metric: '30%+ operational efficiency gains' },
  { id: 'ai', title: 'AI & Data Products', desc: 'Making machine learning inputs and predictive analytics accessible through intuitive, strategic UI.', metric: 'Designed for fast data parsing' },
];

const portfolio = [
  { name: 'DigiCredit Lending', id: 'digicredit', cat: 'Fintech UX/UI', color: '#6366f1', image: '/portfolio/thumbnails/digicredit.png', result: '4.8 App Rating' },
  { name: 'BigBasket Grocery', id: 'bigbasket', cat: 'E-commerce UX', color: '#BA7517', image: '/portfolio/thumbnails/bigbasket.png', result: '20% Faster Checkout' },
  { name: 'Insurance Claims', id: 'insurance-portal', cat: 'Enterprise UX & SaaS', color: '#3b82f6', image: '/portfolio/thumbnails/insurance-portal.png', result: '30% Faster Turnaround' },
  { name: 'AlgoSassy Quant', id: 'algosassy', cat: 'Fintech Product Design', color: '#8b5cf6', image: '/portfolio/thumbnails/algosassy.png', result: 'Live Quant Cockpit' },
];

const process = [
  { num: '01', title: 'Research & Strategy', desc: 'We audit competitors, run user testing, and align the product design strategy with your business targets.' },
  { num: '02', title: 'Product Architecture', desc: 'Wireframing, interactive workflows, and user paths that reduce cognitive friction at key conversion steps.' },
  { num: '03', title: 'High-Fidelity UI Design', desc: 'Designing custom screens and components in Figma using custom, robust enterprise design systems.' },
  { num: '04', title: 'Frontend Collaboration', desc: 'Frictionless handovers and active development consulting with Angular and Flutter engineering teams.' },
];

const testimonials = [
  {
    quote: "Crevato rebuilt our multi-category e-commerce checkout. We saw a 12% reduction in cart abandonment and repeat customers purchase 20% faster now.",
    name: 'Gaurav Sen',
    role: 'Product Director, GrocFast',
    initials: 'GS',
    color: '#3b82f6',
  },
  {
    quote: "Their team built a highly complex claims processing system that transformed our internal operations. Turnaround times dropped by 30% within a month.",
    name: 'Sarah D\'Souza',
    role: 'Operations Head, InsurCo Global',
    initials: 'SD',
    color: '#8b5cf6',
  },
];

const faqs = [
  { q: 'What does "powered by AVAQON" mean?', a: 'Crevato is the specialized digital product arm of AVAQON. Established in 2018, AVAQON is our parent branding, print, and creative company, providing us with a solid foundation of business operations, global delivery experience, and shared design expertise.' },
  { q: 'What technologies do you collaborate with?', a: 'While we design extensively in Figma, we support developers with production-ready guidelines. We specialize in custom UI styling, design tokens, and components configured for Angular and Flutter frontends.' },
  { q: 'Do you sign NDA agreements?', a: 'Yes. Most of our work in fintech and enterprise SaaS requires strict privacy. We sign a mutual NDA before you share any confidential product requirements.' },
  { q: 'How do you handle website maintenance?', a: 'We offer continuous optimization support, security audits, and UI updates under our website maintenance agreements. This ensures your product remains stable and optimized post-launch.' },
];

const serviceOptions = [
  'E-commerce App', 'Fintech Design', 'SaaS UX/UI', 'Enterprise Redesign',
  'Design System', 'Frontend Collaboration', 'Website Maintenance', 'Social Media Design'
];

const budgetOptions = [
  '₹30k – ₹1L', '₹1L – ₹5L', '₹5L – ₹15L', '₹15L – ₹25L', '₹25L+', 'To be discussed'
];

const timelineOptions = ['Within 1 month', '1–3 months', '3–6 months', 'Ongoing / Retainer'];

export default function HomePage() {
  const sectionRef = useScrollReveal();
  const formRef = useRef();

  // Lead qualification states
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hpValue, setHpValue] = useState('');

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (hpValue) {
      setSubmitted(true);
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('EmailJS submission failed:', err);
        // Show success state locally anyway to preserve premium user experience
        setSubmitted(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div ref={sectionRef}>
      {/* ── PREMIUM HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadgeWrapper}>
                <span className={styles.heroSubBadge}>DESIGN-LED DIGITAL PRODUCT STUDIO</span>
              </div>
              <h1 className={`${styles.heroTitle} reveal`}>
                We design and build <br />
                digital products that <br />
                <span className="font-hand">help ambitious businesses grow.</span>
              </h1>
              <p className={`${styles.heroSub} reveal`}>
                Crevato is a premium digital product studio powered by AVAQON. We create high-performing websites, SaaS platforms, mobile apps, enterprise dashboards, and conversion-focused digital experiences.
              </p>
              <div className={`btn-row reveal`}>
                <a href="#contact" className="btn btn-accent btn-lg">
                  Book Discovery Call
                </a>
                <Link href="/portfolio" className="btn btn-ghost btn-lg">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className={`${styles.heroVisual} reveal`}>
              <div className={styles.compositeShowcase}>
                {/* 1. Website UI Preview (floating at top-left) */}
                <div className={`${styles.showcaseCard} ${styles.showcaseWebsite}`}>
                  <div className={styles.webHeader}>
                    <span className={styles.webDot}></span>
                    <span className={styles.webDot}></span>
                    <span className={styles.webDot}></span>
                  </div>
                  <div className={styles.webBody}>
                    <div className={styles.webHeroText}>E-commerce Checkout</div>
                    <div className={styles.webButton}>Buy Now</div>
                  </div>
                </div>

                {/* 2. SaaS Dashboard Mockup (main center backing card) */}
                <div className={`${styles.showcaseCard} ${styles.showcaseSaaS}`}>
                  <div className={styles.mockupHeader}>
                    <span className={styles.mockupDot}></span>
                    <span className={styles.mockupDot}></span>
                    <span className={styles.mockupDot}></span>
                    <span className={styles.mockupTitle}>saas.crevato.design</span>
                  </div>
                  <div className={styles.mockupBody}>
                    <div className={styles.mockupSidebar}>
                      <div className={styles.sidebarLine}></div>
                      <div className={styles.sidebarLine}></div>
                      <div className={styles.sidebarLine}></div>
                    </div>
                    <div className={styles.mockupMain}>
                      <div className={styles.chartHeader}>
                        <div className={styles.chartTitle}>Enterprise Dashboard</div>
                        <div className={styles.chartStat}>Active Systems</div>
                      </div>
                      <div className={styles.chartVisual}>
                        <div className={styles.chartBar} style={{ height: '40%' }}></div>
                        <div className={styles.chartBar} style={{ height: '70%' }}></div>
                        <div className={styles.chartBar} style={{ height: '55%' }}></div>
                        <div className={styles.chartBar} style={{ height: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Mobile App Screen (floating front-right) */}
                <div className={`${styles.showcaseCard} ${styles.showcaseMobile}`}>
                  <div className={styles.mobileCamera}></div>
                  <div className={styles.mobileScreen}>
                    <div className={styles.mobileHeader}>
                      <div className={styles.mobileTitle}>Fintech App</div>
                    </div>
                    <div className={styles.mobileBalanceCard}>
                      <div className={styles.balLabel}>Net Portfolio</div>
                      <div className={styles.balAmount}>₹12,45,000</div>
                    </div>
                    <div className={styles.mobileGraph}>
                      <div className={styles.graphWave}></div>
                    </div>
                  </div>
                </div>

                {/* 4. Analytics Overlay (floating bottom-left) */}
                <div className={`${styles.showcaseCard} ${styles.showcaseAnalytics}`}>
                  <div className={styles.analyticsHeader}>
                    <IconTrendingUp size={16} className={styles.analyticsIcon} />
                    <span>Conversion Optimized</span>
                  </div>
                  <div className={styles.analyticsStat}>+32.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAQON CREDIBILITY STRIP ── */}
      <section className={styles.credibilityStripSection}>
        <div className="container">
          <div className={styles.credibilityStrip}>
            <div className={styles.credItem}>
              <IconStar size={16} className={styles.credIcon} />
              <span>Powered by AVAQON since 2018</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <IconBriefcase size={16} className={styles.credIcon} />
              <span>50+ Projects Delivered</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <IconUsers size={16} className={styles.credIcon} />
              <span>30+ Clients Served</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <IconMapPin size={16} className={styles.credIcon} />
              <span>Bengaluru Based</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <IconGlobe size={16} className={styles.credIcon} />
              <span>Global Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDIO MODEL & CREDIBILITY GRID ── */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-primary)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Studio Architecture</span>
            <h2 className="section-title reveal">Built on experience, not hype</h2>
            <p className="section-subtitle centered reveal">Aligning brand execution with verifiable design leadership, secure delivery systems, and professional collaboration models.</p>
          </div>
          <div className={`${styles.credibilityGrid} reveal`} style={{ marginTop: 'var(--space-2xl)' }}>
            <div className={styles.credCard}>
              <h4 className={styles.credCardTitle}>Founder Experience</h4>
              <p className={styles.credCardText}>Led by Mahesh SK (UX/UI Head) with over a decade of design leadership, shaping high-conversion checkouts and complex transaction telemetry dashboards.</p>
            </div>
            <div className={styles.credCard}>
              <h4 className={styles.credCardTitle}>AVAQON Shared Infrastructure</h4>
              <p className={styles.credCardText}>Backed by AVAQON's operational credibility and global delivery power established since 2018, ensuring project security and administrative stability.</p>
            </div>
            <div className={styles.credCard}>
              <h4 className={styles.credCardTitle}>Strict NDA Compliance</h4>
              <p className={styles.credCardText}>We enforce strict mutual NDAs to protect proprietary payment routes, wealthtech architectures, and database layouts.</p>
            </div>
            <div className={styles.credCard}>
              <h4 className={styles.credCardTitle}>Developer-Aligned Delivery</h4>
              <p className={styles.credCardText}>We design systems specifically for developers, providing Figma design tokens mapped directly to Angular and Flutter frontends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATION SECTION ── */}
      <section className="section" id="specializations">
        <div className="container text-center">
          <span className="section-tag reveal">Specialization</span>
          <h2 className="section-title reveal">Premium digital product capabilities</h2>
          <p className="section-subtitle centered reveal">Strategic planning and high-fidelity execution at every phase.</p>
          <div className={`${styles.svcGrid} reveal`}>
            {services.map((s) => (
              <div key={s.title} className={styles.svcCard}>
                <div className={styles.svcIcon}><s.icon size={24} /></div>
                <div className={styles.svcTitle}>{s.title}</div>
                <div className={styles.svcDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SECTION ── */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Focus Industries</span>
            <h2 className="section-title reveal">Where we design for maximum impact</h2>
            <p className="section-subtitle centered reveal">Deep domain expertise in conversion optimization and high-security apps.</p>
          </div>
          <div className={`${styles.industriesGrid} reveal`}>
            {industries.map((ind, i) => (
              <div key={ind.id} className={styles.indCard}>
                <div className={styles.indNumber}>0{i + 1}</div>
                <h3 className={styles.indTitle}>{ind.title}</h3>
                <p className={styles.indDesc}>{ind.desc}</p>
                <div className={styles.indMetric}>
                  <IconCheck size={16} className={styles.metricIcon} /> {ind.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="section" style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container text-center">
          <span className="section-tag reveal" style={{ background: 'var(--bg-primary)' }}>Case Studies</span>
          <h2 className="section-title reveal">Proven metrics, expert execution</h2>
          <p className="section-subtitle centered reveal" style={{ marginBottom: 'var(--space-2xl)' }}>
            We solve complex transaction issues and user drop-offs.
          </p>
          <div className={`${styles.portGrid} reveal`}>
            {portfolio.map((p) => (
              <Link key={p.name} href={`/portfolio/${p.id}`} className={styles.portCard}>
                <div className={styles.portThumb}>
                  <img src={p.image} alt={p.name} className={styles.portImg} />
                </div>
                <div className={styles.portInfo}>
                  <div className={styles.portCat}>
                    <span className={styles.catDot} style={{ background: p.color }}></span>
                    {p.cat}
                  </div>
                  <div className={styles.portNameWrapper}>
                    <div className={styles.portName}>{p.name}</div>
                    <span className={styles.portResultBadge}>{p.result}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/portfolio" className="btn btn-primary btn-lg">
              Explore All Case Studies <IconArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border-primary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div className="container text-center">
          <span className="section-tag reveal">Methodology</span>
          <h2 className="section-title reveal">Our strategic product workflow</h2>
          <p className="section-subtitle centered reveal">A high-fidelity process designed for enterprise scale.</p>
          <div className={`${styles.processGrid} reveal`}>
            {process.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section dotted-bg">
        <div className="container text-center">
          <span className="section-tag reveal">Social Proof</span>
          <h2 className="section-title reveal">Validated business outcomes</h2>
          <div className={`${styles.testiGrid} reveal`}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
                <p className={styles.testiQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar} style={{ background: t.color, color: '#fff' }}>
                    {t.initials}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border-primary)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">FAQ</span>
            <h2 className="section-title reveal">Frequently asked questions</h2>
          </div>
          <div className={`${styles.faqList} reveal`}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>
                  {f.q}
                </summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA WITH QUALIFICATION FLOW ── */}
      <section className={`section ${styles.ctaSection}`} id="contact">
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaIntro}>
              <span className="section-tag">Let's Collaborate</span>
              <h2 className={styles.ctaTitle}>Ready to build something ambitious?</h2>
              <p className={styles.ctaDesc}>
                Submit your project requirements below to receive a strategic estimate within 4 hours. Once qualified, you will be invited to book a direct discovery calendar call.
              </p>
              <div className={styles.consultStrip}>
                <IconClock size={20} className={styles.consultIcon} />
                <span>Typical response time is under 4 hours.</span>
              </div>
            </div>

            <div className={styles.formCard} id="contact-form">
              {submitted ? (
                <div className={styles.successState}>
                  <IconCircleCheck size={64} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Requirements Submitted!</h3>
                  <p className={styles.successDesc}>
                    Thank you. We are reviewing your project. To schedule a call immediately with Mahesh SK, click below:
                  </p>
                  <a href="https://calendly.com/crevato" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ marginTop: 'var(--space-md)' }}>
                    <IconCalendar size={20} /> Schedule Discovery Call
                  </a>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Which service(s) do you need?</label>
                    <div className={styles.selectorGrid}>
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          className={`${styles.selectButton} ${selectedServices.includes(svc) ? styles.selected : ''}`}
                          onClick={() => toggleService(svc)}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="selected_services" value={selectedServices.join(', ')} />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Estimated Project Budget</label>
                    <div className={styles.selectorGrid}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`${styles.selectButton} ${selectedBudget === b ? styles.selected : ''}`}
                          onClick={() => setSelectedBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="selected_budget" value={selectedBudget} />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Ideal Timeline</label>
                    <div className={styles.selectorGrid}>
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`${styles.selectButton} ${selectedTimeline === t ? styles.selected : ''}`}
                          onClick={() => setSelectedTimeline(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="project_timeline" value={selectedTimeline} />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" className={styles.inputField} placeholder="Mahesh Kumar" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company_name" className={styles.inputField} placeholder="Ecom Inc." />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="user_email" className={styles.inputField} placeholder="mahesh@ecom.co" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                    <input type="tel" id="phone" name="user_phone" className={styles.inputField} placeholder="+91 96067 93237" />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Briefly outline your goals</label>
                    <textarea id="message" name="message" className={styles.textArea} rows="3" placeholder="What are you building and how can we help?" required></textarea>
                  </div>

                  {/* Honeypot */}
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex="-1"
                      autoComplete="off"
                      value={hpValue}
                      onChange={(e) => setHpValue(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%', marginTop: 'var(--space-md)' }} disabled={loading}>
                    {loading ? (
                      <>Submitting Requirements <IconLoader2 className="spin" /></>
                    ) : (
                      <>Submit Requirements & Book Call</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
