'use client';
import { useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import {
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
  IconCheck,
  IconCircleCheck,
  IconChevronDown,
  IconLock,
  IconInfoCircle,
  IconArrowUpRight,
  IconLoader2,
} from '@tabler/icons-react';
import styles from './page.module.css';

const serviceOptions = [
  'E-commerce App Design',
  'Fintech Product Design',
  'SaaS UX/UI Design',
  'Enterprise UX Modernization',
  'Design Systems Creation',
  'Frontend Engineering Collaboration',
  'Website Maintenance Support',
  'Social Media Content Management',
];

const budgetOptions = [
  '₹30k – ₹1L',
  '₹1L – ₹5L',
  '₹5L – ₹15L',
  '₹15L – ₹25L',
  '₹25L+',
];

const stageOptions = ['Idea / MVP stage', 'Growth Stage product', 'Enterprise system', 'Legacy software refactor'];

const timelineOptions = ['Within 1 month', '1–3 months', '3–6 months', 'Continuous support'];

const processSteps = [
  { num: '1', title: 'Scope review', desc: 'We read every submission personally — no automated bot replies.' },
  { num: '2', title: 'Detailed reply', desc: 'We response within 4 hours with initial thoughts and questions.' },
  { num: '3', title: 'Discovery sync', desc: 'A 30-minute call to align objectives and review timeline expectations.' },
  { num: '4', title: 'NDA Proposal', desc: 'A detailed proposal listing fixed pricing milestones and deliverables.' },
];

const faqs = [
  { q: 'Is the discovery call really free?', a: 'Yes. The initial 30-minute consultation is free and carries no pressure. We review layouts, scope, and technical compatibility.' },
  { q: 'What payment structures do you support?', a: 'We bill against specific project milestones (typically 40% setup deposit, 30% alpha prototype delivery, 30% handover sign-off) or structured monthly retainers for ongoing development support.' },
  { q: 'Will you sign a mutual NDA?', a: 'Yes. Most fintech and enterprise SaaS products require strict security checks. We sign standard NDAs before scoping out sensitive mockups or data pipelines.' },
];

export default function ContactPage() {
  const sectionRef = useScrollReveal();
  const formRef = useRef();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hpValue, setHpValue] = useState('');

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hpValue) {
      setSubmitted(true);
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);
      }, (error) => {
          console.error('Failed to send email:', error.text);
          alert('Enquiry received. (For dev sandbox: standard feedback logged).');
          setSubmitted(true);
      })
      .finally(() => {
          setLoading(false);
      });
  };

  return (
    <div ref={sectionRef}>
      {/* ── HERO ── */}
      <section className={`${styles.hero} dotted-bg`}>
        <div className="container">
          <div className="reveal">
            <span className="section-tag">Contact</span>
            <h1 className="section-title">Initiate your product design sprint</h1>
            <p className="section-subtitle">
              We reply within 4 hours to schedule a scoping sync under NDA. Tell us about your business goals.
            </p>
            <div className={styles.responseBadge}>
              <span className={styles.pulse}></span>
              Usually active (Average reply: under 4 hours)
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
                    <IconCircleCheck size={48} />
                  </div>
                  <h3 className={styles.successTitle}>Enquiry submitted successfully</h3>
                  <p className={styles.successDesc}>We are reviewing your parameters and will reach out shortly to coordinate a video sync.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>Tell us about your project</h3>

                  <div className={styles.twoFields}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Your Name <span className={styles.req}>*</span></label>
                      <input type="text" name="name" className={styles.field} placeholder="Arjun Kumar" required />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Company name</label>
                      <input type="text" name="company_name" className={styles.field} placeholder="ShopFast Pvt Ltd" />
                    </div>
                  </div>

                  <div className={styles.twoFields}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Email address <span className={styles.req}>*</span></label>
                      <input type="email" name="user_email" className={styles.field} placeholder="arjun@shopfast.in" required />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>WhatsApp / Mobile</label>
                      <input type="tel" name="user_phone" className={styles.field} placeholder="+91 99999 88888" />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Required Capability</label>
                    <div className={styles.svcOptions}>
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          className={`${styles.svcOpt} ${selectedServices.includes(svc) ? styles.checked : ''}`}
                          onClick={() => toggleService(svc)}
                        >
                          <span className={`${styles.checkbox} ${selectedServices.includes(svc) ? styles.on : ''}`}>
                            {selectedServices.includes(svc) && <IconCheck size={10} stroke={3} />}
                          </span>
                          {svc}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="selected_services" value={selectedServices.join(', ')} />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Product Stage</label>
                    <div className={styles.budgetOptions}>
                      {stageOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`${styles.budgetOpt} ${selectedStage === s ? styles.selected : ''}`}
                          onClick={() => setSelectedStage(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="project_stage" value={selectedStage} />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Ideal Timeline</label>
                    <div className={styles.budgetOptions}>
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`${styles.budgetOpt} ${selectedTimeline === t ? styles.selected : ''}`}
                          onClick={() => setSelectedTimeline(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="project_timeline" value={selectedTimeline} />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Investment Range</label>
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
                    <input type="hidden" name="selected_budget" value={selectedBudget} />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Tell us about your project <span className={styles.req}>*</span></label>
                    <textarea name="message" className={`${styles.field} ${styles.textarea}`} rows={4} placeholder="What are you building, and what is your primary business goal?" required></textarea>
                  </div>

                  {/* Honeypot field (hidden from humans) */}
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />
                  <div className={styles.hpField} aria-hidden="true">
                    <label htmlFor="website_url">Leave this field blank</label>
                    <input
                      id="website_url"
                      type="text"
                      name="website_url"
                      tabIndex="-1"
                      autoComplete="off"
                      value={hpValue}
                      onChange={(e) => setHpValue(e.target.value)}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
                    {loading ? (
                      <>Submitting Enquiry <IconLoader2 size={16} className="spin" /></>
                    ) : (
                      <>Submit Scoping Enquiry <IconArrowUpRight size={16} /></>
                    )}
                  </button>
                  <p className={styles.privacyNote}>
                    <IconLock size={12} /> Confidentiality guaranteed. We do not sell info.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Prefer direct chat?</h4>
                <a href="https://wa.me/917019440153" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <IconBrandWhatsapp size={16} /> WhatsApp Support
                </a>
                <p className={styles.sideNote}>Usually online</p>
              </div>

              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Contact details</h4>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><IconMail size={16} /></div>
                  <div><span className={styles.contactLabel}>Email</span><br /><a href="mailto:sales@crevato.in" style={{ fontWeight: 600 }}>sales@crevato.in</a></div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><IconMapPin size={16} /></div>
                  <div><span className={styles.contactLabel}>Studio Location</span><br /><span style={{ fontWeight: 600 }}>No 43, KR Puram, Bengaluru - 560049</span></div>
                </div>
              </div>

              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Working hours</h4>
                <div className={styles.hoursRow}><span>Monday – Friday</span><span>9:00 AM – 7:00 PM</span></div>
                <div className={styles.hoursRow}><span>Saturday</span><span>10:00 AM – 3:00 PM</span></div>
                <div className={`${styles.hoursRow} ${styles.closed}`}><span>Sunday</span><span>Closed</span></div>
                <p className={styles.sideNote} style={{ marginTop: '16px' }}>
                  <IconInfoCircle size={12} /> Indian Standard Time (IST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section dashed-border" style={{ background: 'var(--bg-tertiary)', margin: '0 var(--space-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag reveal">Next Steps</span>
            <h2 className="section-title reveal">After You Submit</h2>
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
            <h2 className="section-title reveal">Before Reaching Out</h2>
          </div>
          <div className={`${styles.faqList} reveal`}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q} <IconChevronDown size={18} stroke={2.5} /></summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
