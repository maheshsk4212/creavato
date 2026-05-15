'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconArrowUpRight, IconPhoto, IconDeviceMobile, IconBrush,
  IconDeviceDesktop, IconLayout, IconTool, IconTrendingUp,
  IconStar, IconHeart, IconMail, IconClock,
} from '@tabler/icons-react';
import styles from './page.module.css';

const filters = ['All work', 'Web design & dev', 'Mobile app', 'UI/UX', 'Logo & branding', 'Graphic Design'];

import { portfolioData } from '../../data/portfolioData';

const projects = Object.values(portfolioData).map(p => {
  let filter = 'UI/UX';
  if (p.cat.includes('Web')) filter = 'Web design & dev';
  else if (p.cat.includes('Mobile')) filter = 'Mobile app';
  else if (p.cat.includes('Logo')) filter = 'Logo & branding';
  else if (p.cat.includes('Graphic')) filter = 'Graphic Design';
  
  return {
    ...p,
    filter,
    link: p.externalLink || `/portfolio/${p.id}`
  };
});

export default function PortfolioPage() {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All work');

  const filtered = activeFilter === 'All work' ? projects : projects.filter((p) => p.filter === activeFilter || p.cat.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div ref={sectionRef}>
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container text-center">
          <span className="section-tag reveal">Our work</span>
          <h1 className="section-title reveal">Projects we&apos;re proud of <span className="font-hand" style={{ transform: 'rotate(-5deg)' }}>so far!</span></h1>
          <p className="section-subtitle centered reveal">From early-stage startups to global enterprise teams — here&apos;s a look at what we&apos;ve built, designed, and shipped.</p>
          <div className="reveal" style={{ marginTop: 'var(--space-md)', color: '#A0A0A0', fontSize: '13px', fontStyle: 'italic' }}>
            *Note: Selected work is shown in anonymized format due to client confidentiality and NDA agreements.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.filterBar} reveal`}>
            {filters.map((f) => (
              <button key={f} className={`${styles.filterPill} ${activeFilter === f ? styles.active : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
            <span className={styles.filterCount}>{filtered.length} projects</span>
          </div>

          <div className={`${styles.projGrid} reveal`}>
            {filtered.map((p, i) => (
              <Link href={p.link || "#"} target={p.link ? "_blank" : undefined} rel={p.link ? "noopener noreferrer" : undefined} key={p.name} className={`${styles.projCard} ${p.featured ? styles.featured : ''}`}>
                <div className={`${styles.projThumb} ${p.featured ? styles.tall : ''}`} style={p.image ? { padding: 0, overflow: 'hidden' } : { backgroundColor: p.color }}>
                  {p.image ? (
                    <img src={p.image} alt={`${p.title || p.name} - ${p.cat} project by Crevato`} className={styles.thumbImg} />
                  ) : (
                    <div className={styles.thumbContent}>
                      <span className={styles.thumbCat}>{p.cat}</span>
                      <h3 className={styles.thumbTitle}>{(p.title || p.name || '').split('—')[0].split('-')[0].trim()}</h3>
                      <div className={styles.thumbDecor}></div>
                    </div>
                  )}
                </div>
                <div className={styles.projMeta}>
                  <div className={styles.projCat}><span className={styles.catDot} style={{ background: p.color }}></span>{p.cat}</div>
                  <div className={styles.projName}>{p.title || p.name}</div>
                  <div className={styles.projDesc}>{p.desc}</div>
                  <div className={styles.projTags}>{p.tags.map((t) => <span key={t} className={styles.projTag}>{t}</span>)}</div>
                  <div className={styles.projFooter}>
                    <span className={styles.projResult}><p.resultIcon size={16} stroke={2} /> {p.result}</span>
                    {!p.cat.includes('Logo') && !p.cat.includes('Graphic') && (
                      <span className={styles.projLink}>{p.externalLink ? 'Visit Site' : 'View Case Study'} <IconArrowUpRight size={16} /></span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dashed-border" style={{ background: 'var(--bg-tertiary)', margin: 'var(--space-2xl) var(--space-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container text-center">
          <h2 className="section-title reveal">Seen something you like?</h2>
          <p className="section-subtitle centered reveal">Every project starts with a free 30-minute call. Tell us what you&apos;re building.</p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Start your project <IconArrowUpRight size={18} /></Link>
            <Link href="/services" className="btn btn-ghost btn-lg">See our services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
