'use client';
import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandBehance,
  IconCheck,
  IconCircleCheck,
  IconChevronDown,
  IconLock,
  IconInfoCircle,
  IconArrowUpRight,
} from '@tabler/icons-react';
import styles from './page.module.css';

const serviceOptions = [
  'Web design & dev', 'Maintenance', 'Mobile app',
  'UI/UX design', 'Logo & branding', 'Social media', 'Not sure yet',
];

const budgetOptions = ['Under ₹25k', '₹25k–75k', '₹75k–2L', '₹2L+'];

const processSteps = [
  { num: '1', title: 'We review your brief', desc: 'We read every submission personally — no bots, no auto-replies.' },
  { num: '2', title: 'We reply within 4 hrs', desc: 'With initial thoughts, questions, and a proposed call time.' },
  { num: '3', title: 'Free 30-min call', desc: 'We scope the project together — no sales pressure, just a real conversation.' },
  { num: '4', title: 'You get a proposal', desc: 'A clear quote with timeline, deliverables, and payment terms.' },
];

const faqs = [
  { q: 'Is the initial consultation really free?', a: "Yes, completely. The 30-minute discovery call is free and carries no obligation." },
  { q: "I don't have a full brief yet — is that okay?", a: "Absolutely. Most clients come to us with just an idea. We'll help you shape it." },
  { q: 'How do you take payment?', a: 'We take a 50% deposit to start, and the remaining 50% on delivery. UPI, bank transfer, and Razorpay accepted.' },
  { q: 'Do you sign an NDA?', a: "Yes. If your project is sensitive, we're happy to sign a mutual NDA before the discovery call." },
];

export default function ContactPage() {
  const sectionRef = useScrollReveal();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container">
          <div className="reveal">
            <span className="section-tag">Get in touch</span>
            <h1 className="section-title">Let&apos;s talk about your project</h1>
            <p className="section-subtitle">
              Whether you have a fully scoped brief or just a rough idea — we&apos;re happy to chat. Fill in the form and we&apos;ll get back to you within 4 hours.
            </p>
            <div className={styles.responseBadge}>
              <span className={styles.pulse}></span>
              We typically reply within 4 hours on weekdays
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.mainGrid} reveal`}>
            {/* Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <IconCircleCheck size={64} />
                  </div>
                  <h3 className={styles.successTitle}>We&apos;ve received your enquiry!</h3>
                  <p className={styles.successDesc}>We&apos;ll review your project details and get back to you within 4 hours on weekdays.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>Tell us about your project</h3>

                  <div className={styles.twoFields}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Your name <span className={styles.req}>*</span></label>
                      <input type="text" className={styles.field} placeholder="Arjun Kumar" required />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Company / brand name</label>
                      <input type="text" className={styles.field} placeholder="ShopFast Pvt. Ltd." />
                    </div>
                  </div>

                  <div className={styles.twoFields}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Email address <span className={styles.req}>*</span></label>
                      <input type="email" className={styles.field} placeholder="arjun@shopfast.in" required />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Phone / WhatsApp</label>
                      <input type="tel" className={styles.field} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Which service(s) are you interested in?</label>
                    <div className={styles.svcOptions}>
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          className={`${styles.svcOpt} ${selectedServices.includes(svc) ? styles.checked : ''}`}
                          onClick={() => toggleService(svc)}
                        >
                          <span className={`${styles.checkbox} ${selectedServices.includes(svc) ? styles.on : ''}`}>
                            {selectedServices.includes(svc) && <IconCheck size={14} stroke={3} />}
                          </span>
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Budget range</label>
                    <div className={styles.budgetOptions}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`${styles.budgetOpt} ${selectedBudget === b ? styles.selected : ''}`}
                          onClick={() => setSelectedBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Tell us about your project <span className={styles.req}>*</span></label>
                    <textarea className={`${styles.field} ${styles.textarea}`} rows={4} placeholder="What are you building, who is it for, and what's the goal?" required></textarea>
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send enquiry <IconArrowUpRight size={20} />
                  </button>
                  <p className={styles.privacyNote}>
                    <IconLock size={16} /> Your details are private and never shared.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Prefer a direct message?</h4>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <IconBrandWhatsapp size={24} /> Chat on WhatsApp
                </a>
                <p className={styles.sideNote}>+91 98765 43210 · Usually responds in under 30 mins</p>
              </div>

              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Contact details</h4>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><IconMail size={20} /></div>
                  <div><span className={styles.contactLabel}>Email</span><br /><a href="mailto:hello@crevato.in" style={{ fontWeight: 600 }}>hello@crevato.in</a></div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><IconPhone size={20} /></div>
                  <div><span className={styles.contactLabel}>Phone</span><br /><span style={{ fontWeight: 600 }}>+91 98765 43210</span></div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><IconMapPin size={20} /></div>
                  <div><span className={styles.contactLabel}>Location</span><br /><span style={{ fontWeight: 600 }}>Koramangala, Bengaluru</span></div>
                </div>
              </div>

              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Working hours</h4>
                <div className={styles.hoursRow}><span>Monday – Friday</span><span>9:00 AM – 7:00 PM</span></div>
                <div className={styles.hoursRow}><span>Saturday</span><span>10:00 AM – 3:00 PM</span></div>
                <div className={`${styles.hoursRow} ${styles.closed}`}><span>Sunday</span><span>Closed</span></div>
                <p className={styles.sideNote} style={{ marginTop: '16px' }}>
                  <IconInfoCircle size={16} /> All times in IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section dashed-border" style={{ background: 'var(--bg-tertiary)', margin: 'var(--space-2xl) var(--space-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">What happens next</span>
            <h2 className="section-title reveal">After you submit</h2>
          </div>
          <div className={`${styles.processGrid} reveal`}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.stepNum}>{step.num}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Quick FAQ</span>
            <h2 className="section-title reveal">Before you reach out</h2>
          </div>
          <div className={`${styles.faqList} reveal`}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q} <IconChevronDown size={20} stroke={2.5} /></summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
