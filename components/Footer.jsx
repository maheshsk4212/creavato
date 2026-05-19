import Link from 'next/link';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconArrowUpRight,
} from '@tabler/icons-react';
import styles from './Footer.module.css';

const services = [
  { label: 'E-commerce App Design', href: '/services#ecommerce-design' },
  { label: 'Fintech Product Design', href: '/services#fintech-design' },
  { label: 'SaaS UX/UI Design', href: '/services#saas-design' },
  { label: 'Enterprise UX Modernization', href: '/services#enterprise-modernization' },
  { label: 'Design Systems Creation', href: '/services#design-systems' },
  { label: 'Website Maintenance Support', href: '/services#website-maintenance' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="Crevato Logo" className={styles.logoImg} />
            </Link>
            <p className={styles.brandDesc}>
              Crevato is a premium digital product studio powered by AVAQON (est. 2018). Based in Bengaluru, India — serving transaction-focused clients globally.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/122154262/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <IconBrandLinkedin size={18} />
              </a>
              <a href="https://wa.me/919606793237" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <IconBrandWhatsapp size={18} />
              </a>
              <a href="https://instagram.com/crevato" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <IconBrandInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Capabilities</h4>
            <div className={styles.linkList}>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={styles.footerLink}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.linkList}>
              {company.map((c) => (
                <Link key={c.href} href={c.href} className={styles.footerLink}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <div className={styles.linkList}>
              <a href="mailto:sales@crevato.in" className={styles.footerLink}>
                sales@crevato.in
              </a>
              <a href="tel:+919606793237" className={styles.footerLink}>
                +91 9606793237
              </a>
              <span className={styles.footerLink}>
                No 43, KR Puram, Bengaluru - 560049
              </span>
            </div>
            <Link href="/contact" className={`btn btn-primary ${styles.footerCta}`} style={{ marginTop: 'var(--space-md)' }}>
              Book Discovery Call <IconArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Crevato. All rights reserved. Powered by AVAQON.
          </p>
          <p className={styles.credit}>
            Designed & built in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
