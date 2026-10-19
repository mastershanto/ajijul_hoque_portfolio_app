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
      title: '25-Year Sustainability',
      description:
        'Standard web platform primitives, pure W3C CSS tokens, and Domain-Driven Design ensure zero framework lock-in. When React 25 or Next.js 30 arrives, the business core remains 100% intact.',
    },
    {
      icon: <Cpu size={24} className={styles.pillarIconIndigo} />,
      title: 'SOLID & Clean Architecture',
      description:
        'Dependency Inversion (DIP) and Interface Segregation (ISP) guide every module. High-level domain logic communicates through typed Ports, allowing low-level adapters to swap effortlessly.',
    },
    {
      icon: <RefreshCw size={24} className={styles.pillarIconEmerald} />,
      title: 'Polyglot Backend Interop',
      description:
        'Engineered to connect with any enterprise backend: ASP.NET Core 9 (MediatR CQRS), Go Gin (Goroutine microservices), Rust Axum (Memory-safe async), or Python AI (LangGraph & FastAPI).',
    },
    {
      icon: <Zap size={24} className={styles.pillarIconRose} />,
      title: 'Self-Correcting AI Agents',
      description:
        'Beyond naive LLM prompts: architecting stateful cyclic reasoning graphs with automated validation, critique nodes, and vector RAG pipelines that autonomously heal hallucinations.',
    },
  ];

  return (
    <section id="about" className={`section-wrapper ${styles.aboutSection}`}>
      <div className="container">
        <SectionHeader
          number="01"
          title="Architectural Philosophy & Engineering Bio"
          subtitle="Building software systems designed to outlive short-term framework fads through strict modular boundaries and mathematical domain purity."
        />

        <div className={styles.contentGrid}>
          {/* Left Column: Deep Bio Narrative */}
          <div className={styles.bioColumn}>
            <GlassCard className={styles.bioCard}>
              <h3 className={styles.bioHeading}>Engineering for Longevity</h3>
              {profile.fullBio.map((paragraph, index) => (
                <p key={index} className={styles.bioParagraph}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.principleList}>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Zero Vendor Lock-in:</strong> Clean boundaries between core contracts and infrastructure.</span>
                </div>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Type-Safe Error Handling:</strong> Result monad pattern eliminating unhandled exceptions.</span>
                </div>
                <div className={styles.principleItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Cross-Platform Fluidity:</strong> Unified Flutter and React engineering.</span>
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
