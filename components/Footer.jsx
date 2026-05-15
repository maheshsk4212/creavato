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
  { label: 'Web Design & Dev', href: '/services#web-design' },
  { label: 'Website Maintenance', href: '/services#maintenance' },
  { label: 'Mobile App Dev', href: '/services#mobile-app' },
  { label: 'UI/UX Design', href: '/services#ui-ux' },
  { label: 'Logo & Branding', href: '/services#graphic-logo' },
  { label: 'Social Media', href: '/services#social-media' },
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
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <IconBrandInstagram size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <IconBrandLinkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                <IconBrandWhatsapp size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Behance">
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
              <a href="mailto:hello@crevato.in" className={styles.footerLink}>
                hello@crevato.in
              </a>
              <a href="tel:+919876543210" className={styles.footerLink}>
                +91 98765 43210
              </a>
              <span className={styles.footerLink}>
                Koramangala, Bengaluru
              </span>
            </div>
            <Link href="/contact" className={`btn btn-primary ${styles.footerCta}`}>
              Start a project <IconArrowUpRight size={16} />
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
