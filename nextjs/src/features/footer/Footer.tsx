'use client';

import React from 'react';
import { Cpu, Terminal, Shield, ArrowUp, Heart } from 'lucide-react';
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
                <Cpu size={18} />
              </div>
              <span className={styles.brandTitle}>Ajijul Hoque</span>
            </div>
            <p className={styles.brandDesc}>
              AI Systems Architect & Full-Stack Engineer. Built on Clean Architecture, SOLID principles, and 25-year sustainable engineering standards.
            </p>
          </div>

          <div className={styles.telemetryCard}>
            <span className={styles.telemetryHeading}>SYSTEM ARCHITECTURE TELEMETRY</span>
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>RUNTIME</span>
                <span className={styles.tValue}>Bun 1.4.3 / V8 JIT</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>FRAMEWORK</span>
                <span className={styles.tValue}>Next.js 16 / React 19</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>PARADIGM</span>
                <span className={styles.tValue}>Hexagonal (Ports & Adapters)</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tLabel}>BACKEND READINESS</span>
                <span className={styles.tValue}>ASP.NET / Go / Rust / Python</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <span>© 2026 Ajijul Hoque. Designed for continuous long-term evolution.</span>
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
