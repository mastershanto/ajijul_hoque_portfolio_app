'use client';

import React from 'react';
import { Shield, Cpu, RefreshCw, Layers, CheckCircle2, Award, Zap } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Profile } from '../../core/domain/entities';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  profile: Profile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const pillars = [
    {
      icon: <Shield size={24} className={styles.pillarIconCyan} />,
      title: 'Clean Mobile Architecture',
      description:
        'Domain-driven isolation decoupling UI widgets from data layers. Presentation, Use Cases, and Repositories remain strictly separated so business logic survives framework upgrades.',
    },
    {
      icon: <Layers size={24} className={styles.pillarIconIndigo} />,
      title: 'BLoC & Riverpod Mastery',
      description:
        'Event-driven, predictable state machines with flutter_bloc and reactive dependency trees with Riverpod. Eliminates side-effects and guarantees unit testability across all mobile flows.',
    },
    {
      icon: <Zap size={24} className={styles.pillarIconRose} />,
      title: 'Fluid 60-120 FPS UI/UX',
      description:
        'Sub-16ms frame render budgets, custom painters, and responsive glassmorphism. Optimized widget rebuild lifecycles delivering silky, responsive experiences across low-end to flagship devices.',
    },
    {
      icon: <RefreshCw size={24} className={styles.pillarIconEmerald} />,
      title: 'Full Mobile Lifecycle',
      description:
        'End-to-end delivery: REST API integration via Dio interceptors, Firebase FCM push notifications, SQLite/Hive offline caching, and release management on Google Play and App Store.',
    },
  ];

  return (
    <section id="about" className={`section-wrapper ${styles.aboutSection}`}>
      <div className="container">
        <SectionHeader
          number="01"
          title="Mobile Engineering Philosophy & Bio"
          subtitle="Crafting fluid, high-performance mobile applications and clean cross-platform architectures with Flutter & Dart."
        />

        <div className={styles.contentGrid}>
          {/* Left Column: Deep Bio Narrative */}
          <div className={styles.bioColumn}>
            <GlassCard className={styles.bioCard}>
              <h3 className={styles.bioHeading}>Mobile Engineering Discipline</h3>
              {profile.fullBio.map((paragraph, index) => (
                <p key={index} className={styles.bioParagraph}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.principleList}>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Clean Mobile Architecture:</strong> Decoupled Domain Use Cases, Data Sources, and UI layers.</span>
                </div>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Predictable State:</strong> Reactive BLoC and Riverpod patterns preventing race conditions.</span>
                </div>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Proven Production Delivery:</strong> 1 yr 7 mos running at Softvence IT Limited with 99.8% crash-free rate.</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: 4 Architectural Pillars */}
          <div className={styles.pillarsColumn}>
            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, idx) => (
                <GlassCard key={idx} className={styles.pillarCard}>
                  <div className={styles.pillarIconWrapper}>{pillar.icon}</div>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
