'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Download, Code2, Bot, Layers, Smartphone, SmartphoneNfc } from 'lucide-react';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Profile } from '../../core/domain/entities';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [profile.roles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Text & Value Proposition */}
        <div className={styles.textContent}>
          <div className={styles.statusBadgeWrapper}>
            <Badge
              label="Available for Flutter & Mobile Development"
              variant="cyan"
              pulseDot={true}
              icon={<Smartphone size={14} />}
            />
          </div>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className="gradient-text-cyan-indigo">{profile.name}</span>
          </h1>

          <div className={styles.roleTicker}>
            <span className={styles.rolePrefix}>Specializing in </span>
            <span className={styles.roleText} key={currentRoleIndex}>
              {profile.roles[currentRoleIndex]}
            </span>
          </div>

          <p className={styles.bioSummary}>
            {profile.bioSummary}
          </p>

          <div className={styles.actionRow}>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => scrollTo('projects')}
            >
              Explore Mobile Apps & Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<Sparkles size={18} />}
              onClick={() => scrollTo('ai-copilot')}
            >
              Consult AI Assistant
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className={styles.statsStrip}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2+ Years</span>
              <span className={styles.statLabel}>Professional Exp</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>1 yr 7 mos</span>
              <span className={styles.statLabel}>Softvence IT (Running)</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>99.8%</span>
              <span className={styles.statLabel}>Crash-Free Sessions</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Interactive Tech Core */}
        <div className={styles.graphicContent}>
          <div className={styles.hologramStage}>
            {/* Ambient Background Aura */}
            <div className={styles.auraGlow} />

            {/* Central Hexagonal Core */}
            <div className={styles.centralCore}>
              <div className={styles.coreInner}>
                <Smartphone size={48} className={styles.coreIcon} />
                <span className={styles.coreLabel}>FLUTTER CORE</span>
                <span className={styles.coreSub}>DART & MOBILE ARCH</span>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div className={`${styles.floatingBadge} ${styles.satTopLeft}`}>
              <Layers size={15} className={styles.satIconCyan} />
              <span>BLoC & Riverpod</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satTopRight}`}>
              <Smartphone size={15} className={styles.satIconIndigo} />
              <span>iOS & Android</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satBottomLeft}`}>
              <Layers size={15} className={styles.satIconRose} />
              <span>Softvence IT Ltd</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satBottomRight}`}>
              <ShieldCheck size={15} className={styles.satIconEmerald} />
              <span>Clean Mobile Arch</span>
            </div>

            {/* Interactive Code Stream Preview Window */}
            <div className={styles.codePreviewCard}>
              <div className={styles.codeCardHeader}>
                <span className={styles.codeDotRed} />
                <span className={styles.codeDotYellow} />
                <span className={styles.codeDotGreen} />
                <span className={styles.codeTitle}>flutter_clean_architecture.dart</span>
              </div>
              <pre className={styles.codeBody}>
                <code>{`// Domain layer decoupled from UI & APIs
class FetchProfileUseCase implements UseCase<Profile, NoParams> {
  final IMobileRepository repository;
  const FetchProfileUseCase(this.repository);

  @override
  Future<Either<Failure, Profile>> call(NoParams params) {
    return repository.getProfile();
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
