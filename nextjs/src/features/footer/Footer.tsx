'use client';

import React from 'react';
import { Smartphone, Terminal, Shield, ArrowUp, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          <div className={styles.brandInfo}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <Smartphone size={18} />
              </div>
              <span className={styles.brandTitle}>Ajijul Hoque</span>
            </div>
            <p className={styles.brandDesc}>
              Mobile Application Developer specializing in Flutter, Dart, and Clean Architecture. 2 years of professional experience, currently building production apps at Softvence IT Limited (1 year 7 months running).
            </p>
          </div>

          <div className={styles.telemetryCard}>
            <span className={styles.telemetryHeading}>MOBILE ARCHITECTURE TELEMETRY</span>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>SPECIALIZATION</span>
                <span className={styles.tValue}>Flutter & Mobile (iOS / Android)</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>CORE SDK</span>
                <span className={styles.tValue}>Flutter 3.x / Dart 3</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>STATE ENGINE</span>
                <span className={styles.tValue}>BLoC & Riverpod</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>CURRENT TENURE</span>
                <span className={styles.tValue}>Softvence IT (1 yr 7 mos)</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <span>© 2026 Ajijul Hoque. Engineered with Clean Mobile Architecture.</span>
          </div>

          <button className={styles.backToTopBtn} onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
