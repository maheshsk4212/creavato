'use client';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Crevato!%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp size={28} />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
