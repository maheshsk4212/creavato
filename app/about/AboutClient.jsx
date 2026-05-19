'use client';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconArrowUpRight,
  IconEye,
  IconClock,
  IconBulb,
  IconHeart,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandReact,
  IconBrandAngular,
  IconBrandFlutter,
  IconCode,
  IconDeviceMobile,
  IconSettings,
  IconLayoutGrid,
} from '@tabler/icons-react';
import styles from './page.module.css';

const values = [
  { icon: IconEye, title: 'Transparency', desc: 'No hidden fees. We set clear deliverables and project stages upfront.' },
  { icon: IconClock, title: 'On-time delivery', desc: 'Deadlines are promises. We sync weekly and keep to tight product launch cycles.' },
  { icon: IconBulb, title: 'Craft first', desc: 'We deliver high-fidelity layouts and design systems that perform under load.' },
  { icon: IconHeart, title: 'Long-term thinking', desc: 'We design components and structures that scale as your code base grows.' },
];

const team = [
  { name: 'Mahesh SK', role: 'UX/UI Head', skills: ['UI/UX Design', 'Product Strategy', 'Fintech & E-commerce'], initials: 'MSK', color: '#6366f1', links: [{ icon: IconBrandLinkedin, url: 'https://linkedin.com' }] },
  { name: 'Kaif Kareeme', role: 'Business & Creative Operations', skills: ['MD of AVAQON', 'Studio Operations', 'Creative Business'], initials: 'KK', color: '#8b5cf6', links: [{ icon: IconBrandLinkedin, url: 'https://linkedin.com' }] },
  { name: 'Dev Kumar', role: 'Senior Frontend Engineer', skills: ['Flutter', 'Angular', 'React UI Integration'], initials: 'DK', color: '#10b981', links: [{ icon: IconBrandLinkedin, url: 'https://linkedin.com' }, { icon: IconBrandGithub, url: 'https://github.com' }] },
];

const milestones = [
  { year: '2018', title: 'AVAQON Foundation', desc: 'Established creative, branding, and print operations in Bengaluru, serving corporate clients.' },
  { year: '2022', title: 'Product Arm Scoping', desc: 'Began collaborating on complex SaaS dashboards, checkout funnels, and mobile layouts.' },
  { year: '2024', title: 'Crevato Incubation', desc: 'Formally launched Crevato as AVAQON\'s premium digital product studio to focus on high-fidelity designs.' },
  { year: '2026', title: 'Global Product Studio', desc: 'Delivering transaction-focused checkout systems and fintech platforms globally.' },
];

const designTools = [
  { icon: IconBrandFigma, name: 'Figma' },
  { icon: IconLayoutGrid, name: 'Design Systems' },
  { icon: IconSettings, name: 'UI Tokens' },
];

const devTools = [
  { icon: IconBrandAngular, name: 'Angular' },
  { icon: IconBrandFlutter, name: 'Flutter' },
  { icon: IconBrandReact, name: 'React' },
  { icon: IconCode, name: 'HTML / CSS' },
];

export default function AboutPage() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className="reveal">
              <span className="section-tag">Our Story</span>
              <h1 className="section-title">We are AVAQON&apos;s premium <span className="font-hand">product</span> studio</h1>
              <p className="section-subtitle">
                Crevato leverages AVAQON&apos;s operational credibility since 2018. We specialize strictly in transaction-optimized e-commerce and secure fintech product designs.
              </p>
            </div>
            <div className={`${styles.heroImage} reveal`}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Crevato Team Collaboration" className={styles.teamImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Leadership</span>
            <h2 className="section-title reveal">Backed by experience</h2>
            <p className="section-subtitle centered reveal">Crevato is guided by founders with over a decade of design and business operations experience.</p>
          </div>
          <div className={`${styles.foundersGrid} reveal`}>
            <div className={styles.founderCard}>
              <div className={styles.founderHeader}>
                <div className={styles.founderImgPlaceholder} style={{ background: '#3b82f6' }}>MSK</div>
                <div>
                  <h3 className={styles.founderName}>Mahesh SK</h3>
                  <div className={styles.founderRole}>UX/UI Head</div>
                </div>
              </div>
              <ul className={styles.founderCreds}>
                <li>Lead UI/UX Designer (10+ Years Exp.)</li>
                <li>FinTech & Banking Specialist (Oracle OBDX)</li>
                <li>User Research & Data Visualization</li>
                <li>AI-Driven Design</li>
              </ul>
            </div>
            <div className={styles.founderCard}>
              <div className={styles.founderHeader}>
                <div className={styles.founderImgPlaceholder} style={{ background: '#8b5cf6' }}>KK</div>
                <div>
                  <h3 className={styles.founderName}>Kaif Kareeme</h3>
                  <div className={styles.founderRole}>Business & Creative Operations</div>
                </div>
              </div>
              <ul className={styles.founderCreds}>
                <li>Founder & Managing Director of AVAQON (est. 2018)</li>
                <li>Electronics Engineering background bridging code & UX design</li>
                <li>Led UX at DAT Freight: $1.8M ARR uplift & 18% conversion growth</li>
                <li>Designed for J&J and Fast Company-recognized AI products</li>
                <li>Specializes in Healthcare, Logistics, Fintech, & AI design systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section" style={{ margin: '0 var(--space-lg)', borderRadius: 'var(--radius-xl)', background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className={`grid-2 reveal`}>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>OUR MISSION</div>
              <h3 className={styles.mvTitle}>Accelerating conversions for E-commerce & Fintech products</h3>
              <p>To design scalable, secure, and user-centric interfaces that directly translate to higher client revenue and frictionless transactions.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>OUR VISION</div>
              <h3 className={styles.mvTitle}>To be India&apos;s leading transaction UI design studio</h3>
              <p>Backed by AVAQON&apos;s operational strength, we aim to be the go-to studio for high-growth SaaS, Flutter, and Angular projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section">
        <div className="container text-center">
          <span className="section-tag reveal">How we work</span>
          <h2 className="section-title reveal">Studio Values</h2>
          <div className={`grid-4 reveal`} style={{ marginTop: 'var(--space-3xl)' }}>
            {values.map((v) => (
              <div key={v.title} className={styles.valCard}>
                <div className={styles.valIconWrap}>
                  <v.icon size={20} />
                </div>
                <h4 className={styles.valTitle}>{v.title}</h4>
                <p className={styles.valDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section dotted-bg" style={{ borderTop: '1px solid var(--border-primary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div className="container text-center">
          <span className="section-tag reveal">The Specialists</span>
          <h2 className="section-title reveal">Meet the Team</h2>
          <div className={`grid-3 reveal`} style={{ marginTop: 'var(--space-3xl)', justifyItems: 'center' }}>
            {team.map((t) => (
              <div key={t.name} className={styles.teamCard} style={{ width: '100%', maxWidth: '340px' }}>
                <div className={styles.teamPhoto}>
                  <div className={styles.teamAvatar} style={{ background: t.color }}>
                    {t.initials}
                  </div>
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{t.name}</h4>
                  <p className={styles.teamRole}>{t.role}</p>
                  <div className={styles.teamSkills}>
                    {t.skills.map((s) => <span key={s} className={styles.skillTag}>{s}</span>)}
                  </div>
                  <div className={styles.teamLinks}>
                    {t.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Studio Evolution</span>
            <h2 className="section-title reveal">Milestones</h2>
          </div>
          <div className={`${styles.timeline} reveal`}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.milestoneItem}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneLine}>
                  <div className={styles.milestoneDot}></div>
                </div>
                <div className={styles.milestoneContent}>
                  <h4 className={styles.milestoneTitle}>{m.title}</h4>
                  <p className={styles.milestoneDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border-primary)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Studio Stack</span>
            <h2 className="section-title reveal">Tools & Technologies</h2>
          </div>
          <div className={`${styles.toolsSection} reveal`}>
            <div className={styles.toolGroup}>
              <h4 className={styles.toolGroupTitle}>Design Systems & Tokens</h4>
              <div className={styles.toolWrap}>
                {designTools.map((t) => (
                  <div key={t.name} className={styles.toolChip}>
                    <t.icon size={16} /> {t.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.toolGroup}>
              <h4 className={styles.toolGroupTitle}>Engineering Handoff</h4>
              <div className={styles.toolWrap}>
                {devTools.map((t) => (
                  <div key={t.name} className={styles.toolChip}>
                    <t.icon size={16} /> {t.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title reveal">Ready to work with a dedicated product studio?</h2>
          <p className="section-subtitle centered reveal">We collaborate under NDA to scale conversions and build trust.</p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Discovery Call <IconArrowUpRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
