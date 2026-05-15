'use client';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconArrowUpRight,
  IconDeviceDesktop,
  IconTool,
  IconDeviceMobile,
  IconLayout,
  IconBrush,
  IconBrandInstagram,
  IconCheck,
  IconChevronDown,
} from '@tabler/icons-react';
import styles from './page.module.css';

const servicesData = [
  {
    id: 'web-design',
    icon: IconDeviceDesktop,
    name: 'Website Design & Development',
    tagline: 'Custom websites that look great and convert visitors into customers',
    desc: "We design and build custom websites from scratch — no drag-and-drop templates that look like everyone else's. Every site is fast, mobile-first, SEO-ready, and built to grow with your business.",
    deliverables: [
      'Custom UI/UX design in Figma',
      'High-performance Next.js / React build',
      'Mobile-responsive across all devices',
      'SEO-optimised structure & 90+ Lighthouse score',
      'CMS so you can edit content yourself',
      '60 days post-launch support & training',
    ],
    process: ['Discovery call', 'Design & review', 'Build & launch', 'Optimization'],
    pricing: [
      { tier: 'Starter', from: 'Starting from', amt: '₹35,000', items: '5 pages · CMS Setup · Responsive Design · Basic SEO' },
      { tier: 'Business', from: 'Starting from', amt: '₹75,000', items: '10 pages · Custom Animations · Advanced SEO · Analytics', featured: true, badge: 'Most popular' },
      { tier: 'Enterprise', from: 'Custom quote', amt: '₹1,50,000+', items: 'Full custom web app · Advanced Integrations · Dedicated support' },
    ],
  },
  {
    id: 'maintenance',
    icon: IconTool,
    name: 'Website Maintenance',
    tagline: 'Keep your site fast, secure and always up-to-date',
    desc: "A website isn't a one-time thing. Plugins break, designs go stale, content needs updating. Our monthly plans keep your site running smoothly so you can focus on your business.",
    deliverables: [
      'Plugin & CMS updates',
      'Security monitoring & backups',
      'Speed & performance checks',
      'Content edits (text, images, pages)',
      'Monthly performance report',
    ],
    pricing: [
      { tier: 'Basic', from: 'Per month', amt: '₹3,000', items: 'Updates · Backups · 2 content edits/mo' },
      { tier: 'Pro', from: 'Per month', amt: '₹7,000', items: 'Everything + priority support · unlimited edits · monthly report', featured: true, badge: 'Best value' },
    ],
  },
  {
    id: 'mobile-app',
    icon: IconDeviceMobile,
    name: 'Mobile App Design & Development',
    tagline: 'iOS & Android apps that users actually enjoy using',
    desc: 'We design and build mobile apps for startups and businesses — from MVP to full product. Using Flutter for cross-platform efficiency, your app ships on both iOS and Android from a single codebase.',
    deliverables: [
      'UI/UX design in Figma first',
      'Cross-platform (iOS + Android)',
      'Backend API integration',
      'App Store & Play Store submission',
      '60 days post-launch bug support',
    ],
    process: ['Scope & wireframe', 'UI design', 'Develop & test'],
    timeline: 'MVP apps typically take 8–12 weeks · Full product 16–24 weeks',
  },
  {
    id: 'ui-ux',
    icon: IconLayout,
    name: 'UI/UX Designing',
    tagline: 'Interfaces that feel intuitive and convert better',
    desc: "Great UI/UX is the difference between a product people love and one they abandon. We research, wireframe, prototype and test — so your product works beautifully before a single line of code is written.",
    deliverables: [
      'User research & competitor audit',
      'Wireframes & information architecture',
      'High-fidelity Figma designs',
      'Interactive clickable prototype',
      'Design system & component library',
      'Developer-ready Figma handoff',
    ],
    audience: ['Startups pre-development', 'SaaS products', 'App redesigns', 'E-commerce UX'],
  },
  {
    id: 'graphic-logo',
    icon: IconBrush,
    name: 'Graphic & Logo Designing',
    tagline: 'A brand identity that makes people remember you',
    desc: "Your logo is the first thing people see and the last thing they forget. We create brand identities that are distinctive, professional, and built to scale — from a business card to a billboard.",
    deliverables: [
      'Logo in all formats (SVG, PNG, PDF)',
      'Light & dark / colour variations',
      'Brand colour palette & typography',
      'Brand guidelines document',
      'Business card & letterhead design',
      'Social media profile kit',
    ],
    pricing: [
      { tier: 'Logo only', from: 'Starting from', amt: '₹8,000', items: '3 concepts · 2 revisions · All file formats' },
      { tier: 'Brand kit', from: 'Starting from', amt: '₹20,000', items: 'Logo + colours + fonts + guidelines + social kit', featured: true, badge: 'Recommended' },
    ],
  },
  {
    id: 'social-media',
    icon: IconBrandInstagram,
    name: 'Social Media Management',
    tagline: "Grow your brand's online presence with consistent, engaging content",
    desc: "Social media is where your audience lives. We create scroll-stopping content, manage your accounts, and grow your following — so you can focus on running your business while your brand stays visible 24/7.",
    deliverables: [
      'Content strategy & calendar',
      'Post design (static + reels)',
      'Scheduling & publishing',
      'Community engagement & replies',
      'Hashtag research & optimisation',
      'Monthly analytics reports',
    ],
    pricing: [
      { tier: 'Starter', from: 'Per month', amt: '₹10,000', items: '12 posts · 2 platforms · Basic analytics' },
      { tier: 'Growth', from: 'Per month', amt: '₹20,000', items: '20 posts + stories + reels · 3 platforms · Full analytics', featured: true, badge: 'Most popular' },
      { tier: 'Premium', from: 'Per month', amt: '₹35,000', items: 'Full management + paid ads · All platforms · Dedicated manager' },
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
            Everything your digital brand needs, <span className="font-hand" style={{ transform: 'rotate(5deg)' }}>in one place</span>
          </h1>
          <p className="section-subtitle centered reveal">
            From your first logo to a full mobile app — we handle design, development and everything in between.
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
