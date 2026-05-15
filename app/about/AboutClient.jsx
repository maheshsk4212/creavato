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
  IconBrandDribbble,
  IconBrandBehance,
  IconBrandFigma,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandWordpress,
  IconDeviceMobile,
  IconDatabase,
  IconVector,
  IconPhoto,
  IconBrush,
} from '@tabler/icons-react';
import styles from './page.module.css';

const values = [
  { icon: IconEye, title: 'Transparency', desc: 'No surprise costs. Clear timelines. You always know where your project stands.' },
  { icon: IconClock, title: 'On-time delivery', desc: 'Deadlines are promises. We plan carefully and flag delays early.' },
  { icon: IconBulb, title: 'Craft first', desc: "We don't ship work we're not proud of. Quality isn't optional." },
  { icon: IconHeart, title: 'Long-term thinking', desc: "We build for your growth, not for a quick invoice and exit." },
];

const team = [
  { name: 'Mahesh SK', role: 'Founder · Design lead', skills: ['UI/UX', 'Branding'], initials: 'MSK', color: '#378ADD', image: '/team/mahesh.png', links: [IconBrandLinkedin, IconBrandInstagram] },
  { name: 'Dev Kumar', role: 'Full-stack developer', skills: ['React', 'Node.js'], initials: 'DK', color: '#1D9E75', image: '/team/dev-kumar.png', links: [IconBrandLinkedin, IconBrandGithub] },
  { name: 'Sneha Rao', role: 'UI/UX designer', skills: ['Figma', 'Prototyping'], initials: 'SR', color: '#BA7517', image: '/team/sneha-rao.png', links: [IconBrandLinkedin, IconBrandDribbble] },
  { name: 'Arun Pillai', role: 'Graphic designer', skills: ['Illustrator', 'Logo'], initials: 'AP', color: '#D4437A', image: '/team/arun-pillai.png', links: [IconBrandLinkedin, IconBrandBehance] },
];

const milestones = [
  { year: '2022', title: 'Started as a freelance studio', desc: 'First 3 clients. Logo designs and a small WordPress site.' },
  { year: '2023', title: 'Built the core team', desc: 'Brought on a developer and a UI designer. First mobile app project.' },
  { year: '2024', title: '20+ projects completed', desc: 'Expanded to e-commerce, SaaS UI and brand identity packages.' },
  { year: '2025', title: 'Registered as a private limited company', desc: 'Serving clients across Bengaluru, Mumbai and Dubai.' },
];

const designTools = [
  { icon: IconBrandFigma, name: 'Figma' },
  { icon: IconVector, name: 'Illustrator' },
  { icon: IconPhoto, name: 'Photoshop' },
  { icon: IconBrush, name: 'After Effects' },
];

const devTools = [
  { icon: IconBrandReact, name: 'React' },
  { icon: IconBrandNodejs, name: 'Node.js' },
  { icon: IconBrandWordpress, name: 'WordPress' },
  { icon: IconDeviceMobile, name: 'Flutter' },
  { icon: IconDatabase, name: 'MongoDB' },
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
              <span className="section-tag">Our story</span>
               <h1 className="section-title">We&apos;re a specialist studio with <span className="font-hand" style={{ transform: 'rotate(-5deg)' }}>deep</span> product expertise</h1>
               <p className="section-subtitle">
                With over a decade of experience in UI/UX leadership, we help fintech and ecommerce teams build digital products that users trust. We care about craft, strategy, and measurable outcomes.
               </p>
            </div>
            <div className={`${styles.heroImage} reveal`}>
              <img src="/team/team-group.png" alt="Crevato Team" className={styles.teamImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.founderGrid} reveal`}>
            <div className={styles.founderPhoto}>
              <div className={styles.founderAvatar}>
                <img src="/team/mahesh.png" alt="Mahesh SK" />
              </div>
              <h4>Mahesh SK</h4>
              <p className={styles.founderRole}>Founder & Creative Director</p>
              <div className={styles.founderSocials}>
                <a href="https://linkedin.com/in/mahesh" className={styles.socialLink}><IconBrandLinkedin size={20} /></a>
                <a href="https://instagram.com/mahesh" className={styles.socialLink}><IconBrandInstagram size={20} /></a>
              </div>
            </div>
            <div className={styles.founderStory}>
              <p>Hi, I&apos;m Mahesh SK. I founded Crevato after a decade of leading UI/UX for complex fintech products and enterprise platforms. I saw a gap in the market: most agencies were too broad, and most freelancers lacked the execution depth for high-stakes products.</p>
              <p>I built this specialist studio to fix that — providing high-growth teams with the strategic design and frontend execution quality typically reserved for Tier-1 global studios.</p>
              <blockquote className={styles.quote}>
                <p>&ldquo;In fintech and ecommerce, design is more than just visuals. It&apos;s about building trust and reducing friction at the most critical points of the user journey.&rdquo;</p>
                <cite>— Mahesh SK, Founder & Studio Lead</cite>
              </blockquote>
              <p>Based in Bengaluru, we operate as a specialist collective. We don&apos;t just deliver Figma files; we deliver product strategy and production-ready frontend code that performs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section dashed-border" style={{ margin: 'var(--space-2xl) var(--space-lg)', borderRadius: 'var(--radius-xl)', background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className={`grid-2 reveal`}>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>OUR MISSION</div>
              <h3 className={styles.mvTitle}>Make great digital design accessible to every growing business</h3>
              <p>Not just for big corporates with big budgets — but for the founder working out of a co-working space in KR Puram.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>OUR VISION</div>
              <h3 className={styles.mvTitle}>To be the most trusted digital partner for 500+ businesses by 2028</h3>
              <p>Growing from Bengaluru into a studio with a reputation for work that actually converts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section">
        <div className="container text-center">
          <span className="section-tag reveal">What drives us</span>
          <h2 className="section-title reveal">Our values</h2>
          <div className={`grid-4 reveal`} style={{ marginTop: 'var(--space-3xl)' }}>
            {values.map((v) => (
              <div key={v.title} className={styles.valCard}>
                <div className={styles.valIconWrap}>
                  <v.icon size={28} />
                </div>
                <h4 className={styles.valTitle}>{v.title}</h4>
                <p className={styles.valDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section dotted-bg" style={{ borderTop: '2px solid var(--border-primary)', borderBottom: '2px solid var(--border-primary)' }}>
        <div className="container text-center">
          <span className="section-tag reveal">The people</span>
          <h2 className="section-title reveal">Meet the team</h2>
          <div className={`grid-4 reveal`} style={{ marginTop: 'var(--space-3xl)' }}>
            {team.map((t) => (
              <div key={t.name} className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <div className={styles.teamAvatar} style={{ background: t.color }}>
                    {t.image ? <img src={t.image} alt={`${t.name} - ${t.role} at Crevato`} /> : t.initials}
                  </div>
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{t.name}</h4>
                  <p className={styles.teamRole}>{t.role}</p>
                  <div className={styles.teamSkills}>
                    {t.skills.map((s) => <span key={s} className={styles.skillTag}>{s}</span>)}
                  </div>
                  <div className={styles.teamLinks}>
                    {t.links.map((Icon, i) => <Icon key={i} size={20} stroke={2} />)}
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
            <span className="section-tag reveal">Our journey</span>
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

      {/* ── STATS ── */}
      <section className="section-sm">
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            {[
              { n: '50+', l: 'Projects delivered' },
              { n: '30+', l: 'Happy clients' },
              { n: '5', l: 'Industries served' },
              { n: '4.9★', l: 'Average rating' },
            ].map((s) => (
              <div key={s.l} className={styles.statCard}>
                <div className={styles.statNum}>{s.n}</div>
                <div className={styles.statLabel}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Our toolkit</span>
            <h2 className="section-title reveal">Tools & technologies</h2>
          </div>
          <div className={`${styles.toolsSection} reveal`}>
            <div className={styles.toolGroup}>
              <h4 className={styles.toolGroupTitle}>Design</h4>
              <div className={styles.toolWrap}>
                {designTools.map((t) => (
                  <div key={t.name} className={styles.toolChip}>
                    <t.icon size={20} /> {t.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.toolGroup}>
              <h4 className={styles.toolGroupTitle}>Development</h4>
              <div className={styles.toolWrap}>
                {devTools.map((t) => (
                  <div key={t.name} className={styles.toolChip}>
                    <t.icon size={20} /> {t.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title reveal">Like what you see? Let&apos;s build something together.</h2>
          <p className="section-subtitle centered reveal">We&apos;d love to hear about your project — big or small.</p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start a project <IconArrowUpRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">View our work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
