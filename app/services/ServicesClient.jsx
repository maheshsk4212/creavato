'use client';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconArrowUpRight,
  IconDeviceDesktop,
  IconTool,
  IconDeviceMobile,
  IconLayout,
  IconShieldCheck,
  IconTrendingUp,
  IconCheck,
  IconChevronDown,
  IconSearch,
} from '@tabler/icons-react';
import styles from './page.module.css';

const servicesData = [
  {
    id: 'ux-audit',
    icon: IconSearch,
    name: 'UX Research & Audit',
    tagline: 'Identify friction and unlock growth with data-driven insights',
    desc: "We dive deep into your product to find where users are dropping off and why. Our audits provide actionable recommendations to improve conversion, retention, and overall user satisfaction.",
    deliverables: [
      'Heuristic evaluation & competitor audit',
      'User journey mapping & friction analysis',
      'Accessibility (WCAG) compliance check',
      'Detailed findings report with prioritised fixes',
      'Stakeholder workshop to align on solutions',
    ],
    process: ['Data collection', 'Analysis', 'Strategy workshop'],
    pricing: [
      { tier: 'Discovery Audit', from: 'Single platform', amt: 'Custom quote', items: 'Core flow audit · 48h turnaround · Actionable PDF', featured: true },
    ],
  },
  {
    id: 'fintech-design',
    icon: IconShieldCheck,
    name: 'Fintech Product Design',
    tagline: 'Building trust through secure and intuitive financial experiences',
    desc: "Fintech products require a unique balance of security and simplicity. We design banking, lending, and investment platforms that users trust with their money.",
    deliverables: [
      'End-to-end product UI/UX design',
      'Complex data visualisation & dashboards',
      'Secure onboarding & KYC flows',
      'High-fidelity interactive prototypes',
      'Multi-currency & localization support',
    ],
    process: ['Discovery & Scope', 'User Flow Design', 'High-Fi Prototyping'],
    audience: ['Neo-banks', 'Lending platforms', 'Trading apps', 'Wealthtech'],
  },
  {
    id: 'ecommerce-design',
    icon: IconDeviceMobile,
    name: 'Ecommerce Product Design',
    tagline: 'Conversion-focused interfaces for high-growth retail brands',
    desc: "We don't just make pretty shops. We build high-performance ecommerce experiences that guide users from discovery to checkout with zero friction.",
    deliverables: [
      'Custom Shopify & headless commerce design',
      'Mobile-first shopping experiences',
      'Checkout optimization & A/B testing strategy',
      'Inventory & dashboard UI design',
      'Loyalty & retention program UX',
    ],
    process: ['Brand alignment', 'CX strategy', 'Design & build'],
  },
  {
    id: 'design-systems',
    icon: IconLayout,
    name: 'Design Systems',
    tagline: 'Scalable foundations for consistent product growth',
    desc: "Stop rebuilding the same buttons. We create robust, documented design systems in Figma and code that allow your team to ship faster and maintain consistency.",
    deliverables: [
      'Atomic component library (Figma)',
      'Documentation & usage guidelines',
      'React/Next.js component mirroring',
      'Token-based styling (Design Tokens)',
      'Legacy product migration plan',
    ],
    pricing: [
      { tier: 'System Foundation', from: 'Custom quote', amt: 'Consultation-led', items: 'Core components · Documentation · Figma setup' },
    ],
  },
  {
    id: 'frontend',
    icon: IconDeviceDesktop,
    name: 'Frontend Engineering',
    tagline: 'High-performance React & Next.js execution',
    desc: "Design is only as good as the execution. We build pixel-perfect, high-performance frontends that are SEO-ready and accessibility-compliant.",
    deliverables: [
      'Next.js / React production-ready build',
      'Lighthouse score optimization (90+)',
      'Complex animations & transitions',
      'API & Headless CMS integration',
      'Unit & E2E testing implementation',
    ],
    process: ['Architecture planning', 'Development', 'QA & Launch'],
  },
  {
    id: 'strategy',
    icon: IconTrendingUp,
    name: 'Product Strategy',
    tagline: 'Defining the "Why" before we build the "What"',
    desc: "We help you define your product roadmap, identify key personas, and align your business goals with user needs before a single pixel is moved.",
    deliverables: [
      'Product roadmap development',
      'User persona & market research',
      'MVP scoping & feature prioritisation',
      'Growth & retention strategy',
    ],
  },
];

const faqs = [
  { q: 'Do you work with clients outside Bengaluru?', a: 'Yes — we work with clients across India and internationally. All project communication happens over video calls, email and Slack.' },
  { q: 'How long does a typical project take?', a: 'A logo takes 1–2 weeks. A website takes 3–6 weeks. A mobile app takes 8–24 weeks depending on complexity. We give you a clear timeline before we start.' },
  { q: 'What do you need from me to get started?', a: 'A brief about your business, your goals, any references you like, and a 50% deposit. We handle the rest.' },
  { q: 'Can I combine services?', a: "Absolutely. Most clients start with a logo + website, then add maintenance. Bundling services gets you a better price — ask us about it." },
];

export default function ServicesPage() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container text-center">
          <span className="section-tag reveal">What we do</span>
          <h1 className={`section-title reveal`}>
            UX-led expertise for <span className="font-hand" style={{ transform: 'rotate(5deg)' }}>fintech & ecommerce</span> teams
          </h1>
          <p className="section-subtitle centered reveal">
            We help digital products improve trust, usability, and conversion through strategic research and expert execution.
          </p>
          <div className={`${styles.svcNav} reveal`}>
            {servicesData.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.svcPill}>{s.name.split(' ').slice(0, 2).join(' ')}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {servicesData.map((service, idx) => (
        <section key={service.id} id={service.id} className={`section ${styles.svcSection}`}>
          <div className="container reveal">
            <div className={styles.svcHeader}>
              <div className={styles.svcIconWrap}>
                <service.icon size={32} />
              </div>
              <div>
                <h2 className={styles.svcName}>{service.name}</h2>
                <p className={styles.svcTagline}>{service.tagline}</p>
              </div>
            </div>

            <div className={styles.svcContent}>
              <div className={styles.svcLeft}>
                <p className={styles.svcDesc}>{service.desc}</p>
                <h4 className={styles.delivTitle}>What you get</h4>
                <div className={styles.delivList}>
                  {service.deliverables.map((d) => (
                    <div key={d} className={styles.delivItem}>
                      <span className={styles.delivDot}><IconCheck size={14} stroke={3} /></span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.svcRight}>
                {service.process && (
                  <div className={styles.miniProcess}>
                    {service.process.map((p, i) => (
                      <div key={p} className={styles.pmCard}>
                        <div className={styles.pmStep}>Step {i + 1}</div>
                        <div className={styles.pmTitle}>{p}</div>
                      </div>
                    ))}
                  </div>
                )}
                {service.audience && (
                  <div>
                    <h4 className={styles.delivTitle}>Who needs this?</h4>
                    <div className={styles.audienceTags}>
                      {service.audience.map((a) => (
                        <span key={a} className={styles.audienceTag}>{a}</span>
                      ))}
                    </div>
                  </div>
                )}
                {service.timeline && (
                  <div className={styles.timelineNote}>
                    <strong>Timeline:</strong> {service.timeline}
                  </div>
                )}
              </div>
            </div>

            {service.pricing && (
              <div className={styles.pricingSection}>
                <h4 className={styles.delivTitle}>Pricing</h4>
                <div className={styles.pricingRow} style={{ gridTemplateColumns: `repeat(${service.pricing.length}, 1fr)` }}>
                  {service.pricing.map((p) => (
                    <div key={p.tier} className={`${styles.priceCard} ${p.featured ? styles.featured : ''}`}>
                      {p.badge && <div className={styles.priceBadge}>{p.badge}</div>}
                      <div className={styles.priceTier}>{p.tier}</div>
                      <div className={styles.priceFrom}>{p.from}</div>
                      <div className={styles.priceAmt}>{p.amt}</div>
                      <div className={styles.priceItems}>{p.items}</div>
                      <Link href="/contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} ${styles.priceBtn}`}>
                        Select {p.tier}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ── FAQ ── */}
      <section className="section dotted-bg" style={{ borderTop: '2px solid var(--border-primary)', borderBottom: '2px solid var(--border-primary)' }}>
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
                  <IconChevronDown size={20} stroke={2.5} />
                </summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title reveal">Not sure which service you need?</h2>
          <p className="section-subtitle centered reveal">
            Tell us about your project and we'll recommend the right approach — free, no pressure.
          </p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Book a free call <IconArrowUpRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
