'use client';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  IconArrowUpRight,
  IconStar,
  IconClock,
  IconShieldCheck,
  IconDeviceDesktop,
  IconTool,
  IconDeviceMobile,
  IconLayout,
  IconBrush,
  IconBrandInstagram,
  IconPhoto,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import styles from './page.module.css';

const services = [
  { icon: IconDeviceDesktop, title: 'Web Design & Dev', tag: 'Custom sites', href: '/services#web-design' },
  { icon: IconTool, title: 'Website Maintenance', tag: 'Monthly plans', href: '/services#maintenance' },
  { icon: IconDeviceMobile, title: 'Mobile App Design', tag: 'iOS & Android', href: '/services#mobile-app' },
  { icon: IconLayout, title: 'UI/UX Designing', tag: 'Figma & prototypes', href: '/services#ui-ux' },
  { icon: IconBrush, title: 'Graphic & Logo', tag: 'Brand identity', href: '/services#graphic-logo' },
  { icon: IconBrandInstagram, title: 'Social Media', tag: 'Content & growth', href: '/services#social-media' },
];

const stats = [
  { num: '50+', label: 'Projects completed' },
  { num: '30+', label: 'Happy clients' },
  { num: '3 yrs', label: 'Industry experience' },
];

const portfolio = [
  { name: 'Tech Pioneer IT', id: 'tech-pioneer', cat: 'Corporate Website', color: '#0ea5e9', image: '/portfolio/thumbnails/tech-pioneer.png', externalLink: 'https://techpioneerit.netlify.app/' },
  { name: 'DigiCredit Lending', id: 'digicredit', cat: 'Fintech UI/UX', color: '#7F77DD', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2f4e4e145628331.62a19ea8d4f51.png' },
  { name: 'HealthyBites App', id: 'healthybites-ios', cat: 'Food Delivery', color: '#1D9E75', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a03b23121701695.60d1991150610.png' },
  { name: 'AlgoSassy Quant', id: 'algosassy', cat: 'Trading Platform', color: '#7F77DD', image: '/portfolio/thumbnails/algosassy.png', externalLink: 'https://algosassy.netlify.app/' },
  { name: 'Poll Brain Data', id: 'poll-brain', cat: 'Data Analytics', color: '#FF4F01', image: '/portfolio/thumbnails/poll-brain.png', externalLink: 'https://pollbrainanalytics.netlify.app/' },
  { name: 'Stride Identity', id: 'stride-branding', cat: 'Brand Identity', color: '#FF4F01', image: '/portfolio/logos/stride logo - 3.png' },
];

const process = [
  { num: '01', title: 'Discovery', desc: 'Understand goals, users & requirements' },
  { num: '02', title: 'Design', desc: 'Wireframes, prototypes & visual design' },
  { num: '03', title: 'Build', desc: 'Development, testing & revisions' },
  { num: '04', title: 'Launch', desc: 'Deploy, handover & ongoing support' },
];

const testimonials = [
  {
    quote: "They delivered our e-commerce site in 3 weeks, exactly as we imagined. Sales went up 40% in the first month.",
    name: 'Rohit Kumar',
    role: 'Founder, ShopFast',
    initials: 'RK',
    color: '#00A3FF',
    image: '/testimonials/rohit.png',
  },
  {
    quote: "The logo and brand kit they designed made us look like a ₹10 crore company. Worth every rupee.",
    name: 'Priya Mehta',
    role: 'Co-founder, Glowup',
    initials: 'PM',
    color: '#7F77DD',
    image: '/testimonials/priya.png',
  },
];

const clients = [
  { name: 'Techpioneer IT', logo: '/portfolio/thumbnails/tech-pioneer.png', initial: 'T' },
  { name: 'Turi Port Management', logo: '/portfolio/logos/Turi Logo-6.png', initial: 'T' },
  { name: 'Stoopa Technologies', logo: '/portfolio/logos/Stoopa Logo.png', initial: 'S' },
  { name: 'Tanvi IT solutions', initial: 'T' },
  { name: 'Isoftech', initial: 'I' },
  { name: 'Stride Logistics', logo: '/portfolio/logos/stride logo - 3.png', initial: 'S' },
];

export default function HomePage() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} reveal`}>
                We build digital products<br />
                <span className={styles.highlightWrapper}>
                  that grow your business
                  <span className={`font-hand ${styles.heroAnnotation}`}>*fast!</span>
                </span>
              </h1>
              <p className={`${styles.heroSub} reveal`}>
                Web design, mobile apps, UI/UX & branding — everything your brand needs to stand out online.
              </p>
              <div className={`btn-row reveal`}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start a project <IconArrowUpRight size={18} />
                </Link>
                <Link href="/portfolio" className="btn btn-ghost btn-lg">
                  View our work
                </Link>
              </div>
              <div className={`${styles.trustStrip} reveal`}>
                <span className={styles.trustPill}><IconStar size={16} color="var(--brand-accent)" /> 50+ projects delivered</span>
                <span className={styles.trustPill}><IconClock size={16} color="var(--brand-accent)" /> On-time delivery</span>
              </div>
            </div>
            <div className={`${styles.heroVisual} reveal`}>
              <div className={styles.mockupContainer}>
                <img src="/hero-mockup.png" alt="Crevato Work Mockup" className={styles.heroMockup} />
                <div className={styles.pricingBadge}>
                  <div className={styles.pricingLabel}>WEB PROJECTS</div>
                  <div className={styles.pricingValue}>from ₹24,999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className={`${styles.socialProof} section-sm`}>
        <div className="container">
          <p className={`${styles.proofLabel} text-center reveal`}>Trusted by businesses across the world</p>
          <div className={styles.logoScrollWrapper}>
            <div className={`${styles.logoStrip} marquee`}>
              {/* Simple text marquee */}
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <div key={i} className={styles.clientNameItem}>
                  <IconStar size={16} className={styles.clientSeparator} />
                  <span className={styles.clientTextName}>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-sm">
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            {stats.map((s, index) => (
              <div key={s.label} className={`${styles.statCard} ${index === 1 ? styles.statCardRotate : ''}`}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services">
        <div className="container text-center">
          <span className="section-tag reveal">What we do</span>
          <h2 className="section-title reveal">Everything your digital presence needs</h2>
          <p className="section-subtitle centered reveal">Under one roof — no handoffs, no confusion.</p>
          <div className={`${styles.svcGrid} reveal`}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} className={styles.svcCard}>
                <div className={styles.svcIcon}><s.icon size={32} /></div>
                <div className={styles.svcTitle}>{s.title}</div>
                <div className={styles.svcTag}>{s.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PORTFOLIO ── */}
      <section className="section dashed-border" style={{ background: 'var(--bg-tertiary)', margin: 'var(--space-2xl) var(--space-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container text-center">
          <span className="section-tag reveal" style={{ background: 'var(--bg-primary)' }}>Our work</span>
          <h2 className="section-title reveal">Featured projects</h2>
          <div className={`${styles.portGrid} reveal`}>
            {portfolio.map((p) => (
              <Link 
                key={p.name} 
                href={p.externalLink || `/portfolio/${p.id}`} 
                target={p.externalLink ? "_blank" : undefined}
                rel={p.externalLink ? "noopener noreferrer" : undefined}
                className={styles.portCard}
              >
                <div className={styles.portThumb} style={p.image ? { padding: 0, overflow: 'hidden' } : { backgroundColor: p.color }}>
                  {p.image ? (
                    <img src={p.image} alt={`${p.name || p.title} - ${p.cat} project by Crevato`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className={styles.thumbContent}>
                      <span className={styles.thumbCatLabel}>{p.cat}</span>
                      <h3 className={styles.thumbTitleText}>{p.name || p.title}</h3>
                    </div>
                  )}
                </div>
                <div className={styles.portInfo}>
                  <div className={styles.portCat}>
                    <span className={styles.catDot} style={{ background: p.color }}></span>
                    {p.cat}
                  </div>
                  <div className={styles.portName}>{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/portfolio" className={`btn btn-primary reveal`} style={{ marginTop: 'var(--space-xl)' }}>
            See all projects <IconArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container text-center">
          <span className="section-tag reveal">How we work</span>
          <h2 className="section-title reveal">Our process <span className="font-hand" style={{ transform: 'rotate(10deg)' }}>is simple</span></h2>
          <p className="section-subtitle centered reveal">Simple, transparent, and built around your timeline.</p>
          <div className={`${styles.processGrid} reveal`}>
            {process.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>
                  <span className={styles.stepLabel}>Step</span>
                  {step.num}
                </div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section dotted-bg" style={{ borderTop: '2px solid var(--border-primary)', borderBottom: '2px solid var(--border-primary)' }}>
        <div className="container text-center">
          <span className="section-tag reveal">What clients say</span>
          <h2 className="section-title reveal">Real words from real people</h2>
          <div className={`${styles.testiGrid} reveal`}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
                <p className={styles.testiQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar} style={{ background: t.color, color: '#fff' }}>
                    {t.image ? <img src={t.image} alt={t.name} /> : t.initials}
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

      {/* ── CTA ── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className="section-title reveal">Ready to build something <span className="font-hand">great?</span></h2>
          <p className="section-subtitle centered reveal">
            Let's talk about your project. Free 30-min consultation — no strings attached.
          </p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get a free quote <IconArrowUpRight size={18} />
            </Link>
            <a
              href="https://wa.me/917019440153"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <IconBrandWhatsapp size={20} /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
