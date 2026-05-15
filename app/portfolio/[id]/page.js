'use client';
import { use } from 'react';
import Link from 'next/link';
import { portfolioData } from '../../../data/portfolioData';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import styles from './page.module.css';

export default function ProjectPage({ params }) {
  const { id } = use(params);
  const project = portfolioData[id];

  if (!project) {
    return (
      <div className={styles.container}>
        <div className="container text-center" style={{ padding: '100px 0' }}>
          <h1>Project not found</h1>
          <Link href="/portfolio" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* ── PROJECT HERO ── */}
      <section className={styles.hero} style={{ '--project-color': project.color }}>
        <div className="container">
          <Link href="/portfolio" className={styles.backLink}>
            <IconArrowLeft size={18} /> Back to portfolio
          </Link>
          <div className={styles.heroContent}>
            <div className={styles.meta}>
              <span className={styles.cat}>
                <span className={styles.dot} style={{ background: project.color }}></span>
                {project.cat}
              </span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT CONTENT ── */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.gallery}>
            {project.sections.map((section, index) => {
              if (section.type === 'image' || section.type === 'media') {
                return (
                  <div key={index} className={styles.mediaWrapper}>
                    <img src={section.url} alt={`${project.title} screenshot ${index + 1}`} className={styles.media} loading="lazy" />
                  </div>
                );
              }
              if (section.type === 'text') {
                return (
                  <div key={index} className={styles.textSection}>
                    <p>{section.content}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className={styles.footerCta}>
        <div className="container text-center">
          <h2 className="section-title">Ready to build your next project?</h2>
          <div className="btn-row centered" style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start a project <IconArrowUpRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              Explore more work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
