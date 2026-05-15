import Link from 'next/link';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandBehance,
  IconArrowUpRight,
} from '@tabler/icons-react';
import styles from './Footer.module.css';

const services = [
  { label: 'UX Research & Audit', href: '/services#ux-audit' },
  { label: 'Fintech Product Design', href: '/services#fintech-design' },
  { label: 'Ecommerce Product Design', href: '/services#ecommerce-design' },
  { label: 'Design Systems', href: '/services#design-systems' },
  { label: 'Frontend Engineering', href: '/services#frontend' },
  { label: 'Product Strategy', href: '/services#strategy' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
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
              Building digital products for growing businesses. Based in Bengaluru, India — working worldwide.
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com/crevato" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <IconBrandInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/122154262/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <IconBrandLinkedin size={20} />
              </a>
              <a href="https://wa.me/917019440153" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <IconBrandWhatsapp size={20} />
              </a>
              <a href="https://behance.net/crevato" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Behance">
                <IconBrandBehance size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
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
              <a href="mailto:crevato@outlook.com" className={styles.footerLink}>
                crevato@outlook.com
              </a>
              <a href="tel:+917019440153" className={styles.footerLink}>
                +91 7019440153
              </a>
              <span className={styles.footerLink}>
                no 43, KR puram, bengaluru - 560049
              </span>
            </div>
            <Link href="/contact" className={`btn btn-primary ${styles.footerCta}`}>
              Book Discovery Call <IconArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Crevato. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed & built with ♥ in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
