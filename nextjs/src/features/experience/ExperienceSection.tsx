'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Experience } from '../../core/domain/entities';
import styles from './ExperienceSection.module.css';

interface ExperienceSectionProps {
  experiences: readonly Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className={`section-wrapper ${styles.experienceSection}`}>
      <div className="container">
        <SectionHeader
          number="04"
          title="Engineering Timeline & Impact"
          subtitle="A proven track record of shipping cross-platform mobile applications with Flutter, currently contributing at Softvence IT Limited (1 year 7 months running)."
        />

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              {/* Timeline Indicator Column */}
              <div className={styles.timelineTrack}>
                <div className={styles.timelineDot}>
                  <div className={styles.dotInner} />
                </div>
                {index !== experiences.length - 1 && <div className={styles.timelineLine} />}
              </div>

              {/* Experience Card Content */}
              <div className={styles.timelineContent}>
                <GlassCard className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <div className={styles.periodRow}>
                        <Calendar size={14} className={styles.periodIcon} />
                        <span className={styles.periodText}>{exp.period}</span>
                      </div>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <h4 className={styles.orgName}>{exp.organization}</h4>
                    </div>

                    {exp.location && (
                      <div className={styles.locationBadge}>
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <p className={styles.expDescription}>{exp.description}</p>

                  {/* Key Achievements */}
                  <div className={styles.achievementsBlock}>
                    <h5 className={styles.achievementsTitle}>Key Mobile Engineering Impact</h5>
                    <ul className={styles.achievementList}>
                      {exp.keyAchievements.map((ach, i) => (
                        <li key={i} className={styles.achievementItem}>
                          <CheckCircle size={15} className={styles.achIcon} />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className={styles.techStackRow}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
