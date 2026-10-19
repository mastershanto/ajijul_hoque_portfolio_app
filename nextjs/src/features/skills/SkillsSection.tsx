'use client';

import React, { useState } from 'react';
import { Bot, Smartphone, Server, Cloud, Cpu, Layers } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Skill, SkillCategory } from '../../core/domain/entities';
import styles from './SkillsSection.module.css';

interface SkillsSectionProps {
  skills: readonly Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: <Cpu size={16} /> },
    { id: 'fullstack-mobile', label: 'Flutter & Mobile Core', icon: <Smartphone size={16} /> },
    { id: 'backend-distributed', label: 'REST APIs & Backend', icon: <Server size={16} /> },
    { id: 'cloud-devops', label: 'Firebase & App Stores', icon: <Cloud size={16} /> },
    { id: 'ai-agents', label: 'AI Mobile Integration', icon: <Bot size={16} /> },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className={`section-wrapper ${styles.skillsSection}`}>
      <div className="container">
        <SectionHeader
          number="02"
          title="Technical Competency Matrix"
          subtitle="Core mobile development toolkit centered around Flutter, Dart, BLoC/Riverpod, RESTful Dio networking, and Firebase infrastructure."
        />

        {/* Category Tabs */}
        <div className={styles.tabBar}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${isSelected ? styles.activeTabBtn : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => {
            return (
              <GlassCard key={skill.id} className={styles.skillCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <span className={styles.yearsBadge}>{skill.yearsOfExperience} Years Exp</span>
                  </div>
                  <span className={styles.proficiencyValue}>{skill.proficiency}%</span>
                </div>

                {/* Meter Bar */}
                <div className={styles.meterTrack}>
                  <div
                    className={styles.meterFill}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>

                {skill.description && (
                  <p className={styles.skillDescription}>{skill.description}</p>
                )}

                {/* Skill Tags */}
                <div className={styles.tagWrap}>
                  {skill.tags.map((tag, i) => (
                    <span key={i} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
