'use client';

import React, { useState } from 'react';
import { Menu, X, Terminal, Sparkles, Smartphone, FileText } from 'lucide-react';
import { useScrollSpy } from '../../shared/hooks/useScrollSpy';
import { useAppDispatch } from '../../shared/store/hooks';
import { openCVModal } from '../cv/cvSlice';
import styles from './Navbar.module.css';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Architecture & Bio' },
  { id: 'skills', label: 'Technical Matrix' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
  { id: 'ai-copilot', label: 'AI Copilot' },
  { id: 'backend-matrix', label: 'Polyglot Matrix' },
  { id: 'contact', label: 'Connect' },
];

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id), 120);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.brand} onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className={styles.logoIcon}>
            <Smartphone size={22} className={styles.iconPulse} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.name}>Ajijul Hoque</span>
            <span className={styles.title}>Mobile Application Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.id === 'ai-copilot' && <Sparkles size={13} className={styles.sparkleIcon} />}
                {item.id === 'backend-matrix' && <Terminal size={13} className={styles.matrixIcon} />}
                {item.label}
                {isActive && <span className={styles.activePill} />}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.cvCta}
            onClick={() => dispatch(openCVModal())}
            title="View Full Curriculum Vitae"
          >
            <FileText size={14} />
            <span>CV</span>
          </button>

          <a
            href="#ai-copilot"
            className={styles.copilotCta}
            onClick={(e) => { e.preventDefault(); handleNavClick('ai-copilot'); }}
          >
            <Sparkles size={14} />
            <span>AI Assistant</span>
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileActiveLink : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              className={styles.cvCta}
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(openCVModal());
              }}
            >
              <FileText size={14} />
              <span>View Full CV / Resume</span>
            </button>
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
