'use client';

import React from 'react';
import { X, Printer, Mail, MapPin, Globe, Briefcase, GraduationCap, Award, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../shared/components/BrandIcons';
import { Profile, Experience, Project, Skill } from '../../core/domain/entities';
import styles from './CVModal.module.css';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  experiences: readonly Experience[];
  projects: readonly Project[];
  skills: readonly Skill[];
}

export const CVModal: React.FC<CVModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects,
  skills,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleRow}>
            <span className={styles.cvBadge}>CURRICULUM VITAE</span>
            <h2 className={styles.modalHeading}>Professional Mobile Resume</h2>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.printBtn} onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close CV">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className={styles.modalBody}>
          <div className={styles.cvPaper}>
            {/* 1. Header & Contact Details */}
            <div className={styles.cvHero}>
              <h1 className={styles.candidateName}>{profile.name}</h1>
              <p className={styles.candidateRole}>
                {profile.title} • 2 Years Professional Experience
              </p>
              <div className={styles.contactStrip}>
                <div className={styles.contactItem}>
                  <Mail size={14} />
                  <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                    {profile.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={14} />
                  <span>{profile.location}</span>
                </div>
                <div className={styles.contactItem}>
                  <LinkedinIcon size={14} />
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    linkedin.com/in/ajijulhoque
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <GithubIcon size={14} />
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    github.com/ajijulhoque
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Executive Professional Summary */}
            <div className={styles.cvSection}>
              <h3 className={styles.sectionTitle}>
                <Briefcase size={16} />
                Professional Summary
              </h3>
              <p className={styles.summaryText}>
                Results-driven Mobile Application Developer with <strong>2 years of professional software development experience</strong> specializing in <strong>Flutter and Dart SDK</strong>. Currently contributing at <strong>Softvence IT Limited (1 year 7 months running)</strong>, engineering production-grade cross-platform mobile solutions across iOS and Android. Proven expertise in <strong>Clean Mobile Architecture</strong>, <strong>BLoC & Riverpod state management</strong>, robust RESTful API integration with Dio, Firebase Suite (FCM Push Notifications, Firestore, Auth), and offline-first local persistence (Hive/SQLite), maintaining a <strong>99.8%+ crash-free user session rate</strong>.
              </p>
            </div>

            {/* 3. Core Technical Skills */}
            <div className={styles.cvSection}>
              <h3 className={styles.sectionTitle}>
                <Layers size={16} />
                Technical Competencies
              </h3>
              <div className={styles.skillsBlock}>
                <div className={styles.skillGroup}>
                  <h4 className={styles.skillGroupTitle}>Mobile & SDKs</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillPill}>Flutter 3.x</span>
                    <span className={styles.skillPill}>Dart 3</span>
                    <span className={styles.skillPill}>iOS & Android</span>
                    <span className={styles.skillPill}>Material 3</span>
                    <span className={styles.skillPill}>Cupertino</span>
                    <span className={styles.skillPill}>Custom Painters</span>
                  </div>
                </div>

                <div className={styles.skillGroup}>
                  <h4 className={styles.skillGroupTitle}>State Management & Architecture</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillPill}>BLoC Pattern</span>
                    <span className={styles.skillPill}>Cubit</span>
                    <span className={styles.skillPill}>Riverpod 2</span>
                    <span className={styles.skillPill}>Clean Architecture</span>
                    <span className={styles.skillPill}>Domain-Driven Design</span>
                    <span className={styles.skillPill}>SOLID</span>
                  </div>
                </div>

                <div className={styles.skillGroup}>
                  <h4 className={styles.skillGroupTitle}>APIs, Network & Offline</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillPill}>RESTful APIs</span>
                    <span className={styles.skillPill}>Dio Client</span>
                    <span className={styles.skillPill}>WebSockets</span>
                    <span className={styles.skillPill}>Hive DB</span>
                    <span className={styles.skillPill}>SQLite / sqflite</span>
                    <span className={styles.skillPill}>Secure Storage</span>
                  </div>
                </div>

                <div className={styles.skillGroup}>
                  <h4 className={styles.skillGroupTitle}>Cloud, Firebase & Deployment</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillPill}>Firebase FCM</span>
                    <span className={styles.skillPill}>Cloud Firestore</span>
                    <span className={styles.skillPill}>Firebase Auth</span>
                    <span className={styles.skillPill}>Google Play Console</span>
                    <span className={styles.skillPill}>App Store Connect</span>
                    <span className={styles.skillPill}>Git / GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Professional Work Experience */}
            <div className={styles.cvSection}>
              <h3 className={styles.sectionTitle}>
                <Briefcase size={16} />
                Professional Experience
              </h3>
              <div className={styles.timelineList}>
                {experiences.map((exp) => (
                  <div key={exp.id} className={styles.expCard}>
                    <div className={styles.expHeader}>
                      <h4 className={styles.expRole}>{exp.role}</h4>
                      <span className={styles.expPeriod}>{exp.period}</span>
                    </div>
                    <div className={styles.expOrgRow}>
                      <span className={styles.orgName}>{exp.organization}</span>
                      {exp.location && <span>• {exp.location}</span>}
                    </div>
                    <ul className={styles.bulletList}>
                      {exp.keyAchievements.map((item, idx) => (
                        <li key={idx}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Production Projects from CV */}
            <div className={styles.cvSection}>
              <h3 className={styles.sectionTitle}>
                <Award size={16} />
                Key Production Projects
              </h3>
              <div className={styles.projectCvGrid}>
                {projects.slice(0, 4).map((p) => (
                  <div key={p.id} className={styles.projectCvCard}>
                    <h4 className={styles.projCvTitle}>{p.title}</h4>
                    <p className={styles.projCvDesc}>{p.summary}</p>
                    {p.metrics.length > 0 && (
                      <div className={styles.projCvMetrics}>
                        ✓ {p.metrics.join(' • ')}
                      </div>
                    )}
                    <div className={styles.projCvTags}>
                      {p.tags.map((t, idx) => (
                        <span key={idx} className={styles.projCvTag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Education & Credentials */}
            <div className={styles.cvSection}>
              <h3 className={styles.sectionTitle}>
                <GraduationCap size={16} />
                Education & Professional Development
              </h3>
              <div className={styles.expCard}>
                <div className={styles.expHeader}>
                  <h4 className={styles.expRole}>Bachelor of Science in Computer Science & Engineering (CSE)</h4>
                  <span className={styles.expPeriod}>Graduated</span>
                </div>
                <div className={styles.expOrgRow}>
                  <span className={styles.orgName}>Dhaka, Bangladesh</span>
                </div>
                <ul className={styles.bulletList}>
                  <li>Focused on Software Engineering, Object-Oriented Design, Data Structures & Algorithms.</li>
                  <li>Specialized coursework and capstone project in Cross-Platform Mobile Applications using Flutter & Dart.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
