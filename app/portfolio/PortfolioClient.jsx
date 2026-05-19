'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { IconArrowUpRight, IconStar, IconFlask } from '@tabler/icons-react';
import styles from './page.module.css';

const filters = ['All work', 'E-commerce UX', 'Fintech UX/UI', 'SaaS & Enterprise'];

import { portfolioData } from '../../data/portfolioData';

const projects = Object.values(portfolioData).map(p => {
  let filter = 'SaaS & Enterprise';
  if (p.cat.includes('Fintech')) filter = 'Fintech UX/UI';
  else if (p.cat.includes('E-commerce') || p.cat.includes('Mobile')) filter = 'E-commerce UX';
  
  return {
    ...p,
    filter,
    link: p.externalLink || `/portfolio/${p.id}`
  };
});

export default function PortfolioPage() {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All work');

  const filtered = activeFilter === 'All work' 
    ? projects 
    : projects.filter((p) => p.filter === activeFilter);

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container text-center">
          <span className="section-tag reveal">Portfolio</span>
          <h1 className="section-title reveal">Designed for high transaction volumes</h1>
          <p className="section-subtitle centered reveal">
            We collaborate with ambitious ecommerce, fintech, and enterprise teams to scale metrics. Here is a look at selected work.
          </p>
          <div className="reveal" style={{ marginTop: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: '13px', fontStyle: 'italic' }}>
            *Note: All details are presented under NDA compliance. Selected client names have been anonymized.
          </div>
        </div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.filterBar} reveal`}>
            {filters.map((f) => (
              <button 
                key={f} 
                className={`${styles.filterPill} ${activeFilter === f ? styles.active : ''}`} 
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
            <span className={styles.filterCount}>{filtered.length} Projects</span>
          </div>

          <div className={`${styles.projGrid} reveal`}>
            {filtered.map((p) => {
              const isExternal = !!p.externalLink;
              return (
                <Link 
                  href={p.link || "#"} 
                  target={isExternal ? "_blank" : undefined} 
                  rel={isExternal ? "noopener noreferrer" : undefined} 
                  key={p.id} 
                  className={styles.projCard}
                >
                  <div className={styles.projThumb}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} className={styles.thumbImg} />
                    ) : (
                      <div className={styles.thumbContent}>
                        <span className={styles.thumbCat}>{p.cat}</span>
                        <h3 className={styles.thumbTitle}>{p.title.split('—')[0]}</h3>
                      </div>
                    )}
                  </div>
                  <div className={styles.projMeta}>
                    {p.conceptRedesign && (
                      <div className={styles.conceptBadge}>
                        <IconFlask size={11} /> Concept Redesign
                      </div>
                    )}
                    <div className={styles.projCat}>
                      <span className={styles.catDot} style={{ background: p.color }}></span>
                      {p.cat}
                    </div>
                    <div className={styles.projName}>{p.title}</div>
                    <p className={styles.projDesc}>{p.desc}</p>
                    <div className={styles.projTags}>
                      {p.tags.map((t) => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <div className={styles.projFooter}>
                      <span className={styles.projResult}>
                        <IconStar size={14} /> {p.result}
                      </span>
                      <span className={styles.projLink}>
                        {isExternal ? 'Visit Site' : 'View Case Study'} <IconArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section dashed-border" style={{ background: 'var(--bg-tertiary)', margin: '0 var(--space-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container text-center">
          <h2 className="section-title reveal">Interested in collaborating?</h2>
          <p className="section-subtitle centered reveal">Every product design begins with a free 30-minute scoping call under mutual NDA.</p>
          <div className={`btn-row centered reveal`} style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Book Discovery Call <IconArrowUpRight size={18} /></Link>
            <Link href="/services" className="btn btn-ghost btn-lg">Explore Capabilities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
