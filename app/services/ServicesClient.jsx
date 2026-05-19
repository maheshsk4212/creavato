'use client';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconArrowUpRight,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconLayout,
  IconShieldCheck,
  IconTrendingUp,
  IconCheck,
  IconChevronDown,
  IconSearch,
  IconCpu,
  IconRefresh,
  IconLayoutGrid,
  IconCode,
  IconSettings,
  IconBrandInstagram,
} from '@tabler/icons-react';
import styles from './page.module.css';

const servicesData = [
  {
    id: 'ux-research',
    icon: IconSearch,
    name: 'UX Research',
    tagline: 'Aligning user behaviors with strategic business opportunities',
    desc: 'We dig deep to uncover friction points, run usability testing, map user journeys, and discover why customers drop off.',
    deliverables: [
      'Heuristic evaluation & competitor audit',
      'User journey mapping & friction analysis',
      'Detailed findings report with prioritized fixes',
      'Stakeholder workshop to align on solutions',
    ],
    process: ['Data gathering', 'Heuristic analysis', 'Insights report'],
    audience: ['SaaS platforms', 'E-commerce hubs', 'Fintech apps'],
  },
  {
    id: 'product-strategy',
    icon: IconTrendingUp,
    name: 'Product Strategy',
    tagline: 'Scoping and positioning before pushing pixels',
    desc: 'Collaborate on product roadmaps, MVP feature prioritization, and business-value architecture to ensure your launch aligns with market demands.',
    deliverables: [
      'Product roadmap development',
      'User persona & market positioning studies',
      'MVP scoping & feature prioritization matrix',
      'Product growth & retention strategy',
    ],
    process: ['Competitive mapping', 'Feature scoping', 'Launch roadmap'],
    audience: ['Early-stage startups', 'Enterprise expansion teams'],
  },
  {
    id: 'saas-design',
    icon: IconDeviceDesktop,
    name: 'SaaS UX/UI Design',
    tagline: 'High-performance workspaces designed for daily utility',
    desc: 'Clean dashboard layouts, streamlined data density, and frictionless client onboarding built to increase daily active usage.',
    deliverables: [
      'End-to-end web app interfaces',
      'Onboarding flows & dashboard telemetry design',
      'High-fidelity responsive prototypes in Figma',
      'Role-based permissions UI layouts',
    ],
    process: ['Layout architecture', 'Hi-fi component design', 'Prototype testing'],
  },
  {
    id: 'fintech-design',
    icon: IconShieldCheck,
    name: 'Fintech Product Design',
    tagline: 'Building user trust through secure financial interfaces',
    desc: 'Designing secure banking apps, KYC onboarding steps, lending screens, and quant trading platforms.',
    deliverables: [
      'Lending & retail banking mobile UI',
      'Multi-currency transaction flow UI',
      'Secure document uploading & KYC wizard flows',
      'Live investment charts & telemetry panels',
    ],
    process: ['Trust audits', 'Component drafting', 'Compliance mapping'],
    audience: ['Neo-banks', 'Wealthtech', 'Quant trading platforms'],
  },
  {
    id: 'ai-design',
    icon: IconCpu,
    name: 'AI Product Interface Design',
    tagline: 'Humanizing dense machine learning pipelines',
    desc: 'Interactive prompts, model observability screens, and automated data visualization for complex AI workflows.',
    deliverables: [
      'Interactive chat & prompt workspace interfaces',
      'Model training observability telemetry layouts',
      'Dense data visualizers and chart nodes',
      'Agentic workflow configuration UI',
    ],
    process: ['Data mapping', 'Prompt visual scaffolding', 'Figma layout'],
  },
  {
    id: 'enterprise-modernization',
    icon: IconRefresh,
    name: 'Enterprise UX Modernization',
    tagline: 'Refactoring legacy enterprise software into high-speed tools',
    desc: 'Updating sluggish, outdated legacy business applications to improve internal operational efficiency.',
    deliverables: [
      'Legacy software audits & UX refactoring map',
      'High-performance data table & filters design',
      'Multi-tenant business control panel UI',
      'Internal workflow step optimization plans',
    ],
    process: ['Friction mapping', 'Layout optimization', 'Component modernizing'],
    audience: ['Logistics firms', 'Insurance systems', 'Healthcare operators'],
  },
  {
    id: 'design-systems',
    icon: IconLayoutGrid,
    name: 'Design Systems',
    tagline: 'Scalable component foundations for engineering teams',
    desc: 'Figma atomic libraries and code-mirrored design tokens to unify design standards and accelerate product delivery.',
    deliverables: [
      'Figma component library with auto-layout v5',
      'Style guides & documentation setups',
      'Design tokens matched to Angular & Flutter classes',
      'Accessibility review & color contrast grids',
    ],
    process: ['Token taxonomy', 'Component building', 'Handover sync'],
  },
  {
    id: 'web-design',
    icon: IconLayout,
    name: 'Web Application Design',
    tagline: 'Custom web software built for performance',
    desc: 'Responsive web designs that prioritize speed, search engine accessibility, and structural clarity.',
    deliverables: [
      'Web app desktop & mobile UI',
      'Custom asset curation and UI styling tokens',
      'High-fidelity interactive page transitions',
      'Accessibility validation reviews',
    ],
    process: ['Wireframing', 'High-fi screen design', 'SEO alignment'],
  },
  {
    id: 'mobile-design',
    icon: IconDeviceMobile,
    name: 'Mobile Product Design',
    tagline: 'Native, high-conversion mobile design',
    desc: 'Designing custom iOS and Android shopping apps and product interfaces optimized for native touch interactions.',
    deliverables: [
      'iOS & Android native UI screen layouts',
      'Micro-interactions & transitions design',
      'Native gestures & component guidelines',
      'App Store asset preparation layouts',
    ],
    process: ['Flow drafting', 'Figma UI design', 'Touch-target review'],
  },
  {
    id: 'frontend-collab',
    icon: IconCode,
    name: 'Frontend Engineering Collaboration',
    tagline: 'Ensuring pixel-perfect transitions to development',
    desc: 'Collaborating actively with your development team. Specifying responsive layouts, animations, and components optimized for Angular and Flutter frontends.',
    deliverables: [
      'Figma development documentation sheets',
      'Mirrored component tokens (Angular/Flutter)',
      'Active developer QA sync sessions',
      'Pixel-perfect layout code verification',
    ],
    process: ['Code alignment', 'QA checkups', 'Delivery signoff'],
    audience: ['Angular teams', 'Flutter engineering teams'],
  },
  {
    id: 'website-maintenance',
    icon: IconSettings,
    name: 'Website Maintenance',
    tagline: 'Iterative testing and regular performance tuning',
    desc: 'Routine security audits, layout iterations, and conversion performance tuning to keep your digital products performing.',
    deliverables: [
      'Monthly usability audit checks',
      'Continuous UI iterations & performance optimization',
      'Security patch checks & framework maintenance',
      'A/B test coordination & feedback deployment',
    ],
    process: ['Audit checkup', 'Sprint patch planning', 'Deployment QA'],
  },
  {
    id: 'social-media-management',
    icon: IconBrandInstagram,
    name: 'Social Media Management',
    tagline: 'Premium content and strategic positioning',
    desc: 'Designing premium content strategy, custom graphics, and creative messaging to position your brand as an industry leader.',
    deliverables: [
      'Premium brand content layout templates',
      'Custom asset graphics & data storytelling charts',
      'Creative messaging & copy writing guidelines',
      'Social alignment calendars',
    ],
    process: ['Positioning review', 'Template curation', 'Calendar scheduling'],
  },
];

const faqs = [
  { q: 'Do you work with clients outside Bengaluru?', a: 'Yes — we work globally. Project coordination happens over video conferences, Slack channels, and shared Figma workspace updates.' },
  { q: 'How long does a typical project take?', a: 'Strategic UX Audits take 2 weeks. Comprehensive product design systems take 4–8 weeks. Full mobile or web app designs take 8–20 weeks depending on complexity. We outline clear deliverables and stages beforehand.' },
  { q: 'Do you sign NDA agreements?', a: 'Yes. Most of our work in fintech, e-commerce, and enterprise SaaS requires strict privacy. We sign a mutual NDA before you share any confidential product requirements.' },
  { q: 'What is your billing structure?', a: 'We work on a fixed-scope milestone basis for discrete product designs, or on a monthly retainer for continuous collaboration, maintenance, and ongoing frontend support.' },
];

export default function ServicesPage() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container text-center">
          <span className="section-tag reveal">Our Capabilities</span>
          <h1 className={`section-title reveal`}>
            UX-led design for <span className="font-hand">ecommerce & fintech</span> platforms
          </h1>
          <p className="section-subtitle centered reveal">
            We help ambitious businesses scale transaction rates, user satisfaction, and brand credibility through expert, strategic design.
          </p>
          <div className={`${styles.svcNav} reveal`}>
            {servicesData.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.svcPill}>{s.name}</a>
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
                <service.icon size={28} />
              </div>
              <div>
                <h2 className={styles.svcName}>{service.name}</h2>
                <p className={styles.svcTagline}>{service.tagline}</p>
              </div>
            </div>

            <div className={styles.svcContent}>
              <div className={styles.svcLeft}>
                <p className={styles.svcDesc}>{service.desc}</p>
                <h4 className={styles.delivTitle}>Key Deliverables</h4>
                <div className={styles.delivList}>
                  {service.deliverables.map((d) => (
                    <div key={d} className={styles.delivItem}>
                      <span className={styles.delivDot}><IconCheck size={12} stroke={3} /></span>
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
                        <div className={styles.pmStep}>0{i + 1}</div>
                        <div className={styles.pmTitle}>{p}</div>
                      </div>
                    ))}
                  </div>
                )}
                {service.audience && (
                  <div>
                    <h4 className={styles.delivTitle}>Focus Areas</h4>
                    <div className={styles.audienceTags}>
                      {service.audience.map((a) => (
                        <span key={a} className={styles.audienceTag}>{a}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 'var(--space-xl)' }}>
                  <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="btn btn-primary btn-sm">
                    Inquire about this capability <IconArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ ── */}
      <section className="section dotted-bg" style={{ borderTop: '1px solid var(--border-primary)', borderBottom: '1px solid var(--border-primary)' }}>
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
          <h2 className="section-title reveal">Not sure where to begin?</h2>
          <p className="section-subtitle centered reveal">
            We collaborate on comprehensive user audits, strategic roadmaps, and custom UI design sprints to validate your product thesis.
          </p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Book a Free Discovery Call <IconArrowUpRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
