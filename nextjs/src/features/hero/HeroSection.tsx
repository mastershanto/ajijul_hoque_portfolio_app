'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Download, Code2, Bot, Layers } from 'lucide-react';
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
              label="Available for Autonomous AI & Systems Architecture"
              variant="cyan"
              pulseDot={true}
              icon={<ShieldCheck size={14} />}
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
              Explore Architecture & Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<Sparkles size={18} />}
              onClick={() => scrollTo('ai-copilot')}
            >
              Consult AI Agent
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className={styles.statsStrip}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{profile.stats.productionAgentsDeployed}+</span>
              <span className={styles.statLabel}>Production AI Agents</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>25-Year</span>
              <span className={styles.statLabel}>Clean Arch Standard</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>{profile.stats.systemsArchitected}+</span>
              <span className={styles.statLabel}>Cross-Platform Systems</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Zero-Vendor Lock-in</span>
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
                <Code2 size={48} className={styles.coreIcon} />
                <span className={styles.coreLabel}>CLEAN ARCH</span>
                <span className={styles.coreSub}>PORTS & ADAPTERS</span>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div className={`${styles.floatingBadge} ${styles.satTopLeft}`}>
              <Bot size={15} className={styles.satIconCyan} />
              <span>LangGraph Swarms</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satTopRight}`}>
              <Terminal size={15} className={styles.satIconIndigo} />
              <span>FastAPI / Python</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satBottomLeft}`}>
              <Layers size={15} className={styles.satIconRose} />
              <span>Flutter 120 FPS</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.satBottomRight}`}>
              <ShieldCheck size={15} className={styles.satIconEmerald} />
              <span>C# / Go / Rust Interop</span>
            </div>

            {/* Interactive Code Stream Preview Window */}
            <div className={styles.codePreviewCard}>
              <div className={styles.codeCardHeader}>
                <span className={styles.codeDotRed} />
                <span className={styles.codeDotYellow} />
                <span className={styles.codeDotGreen} />
                <span className={styles.codeTitle}>clean_architecture_contract.ts</span>
              </div>
              <pre className={styles.codeBody}>
                <code>{`// Domain is 100% independent of frameworks
export interface IPortfolioRepository {
  getProfile(): Promise<Result<Profile>>;
}

// Seamlessly interchangeable at runtime
container.setActiveBackend('python-ai');`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
