'use client';

import React, { useState } from 'react';
import { ExternalLink, Search, Layers, Cpu, Database, Network, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../../shared/components/BrandIcons';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Project } from '../../core/domain/entities';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-engineering', label: 'AI & LangGraph' },
    { id: 'cross-platform', label: 'Flutter & Cross-Platform' },
    { id: 'enterprise', label: 'Clean Arch & Enterprise' },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = selectedFilter === 'all' || p.category === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-engineering':
        return <Network size={20} className={styles.catIconIndigo} />;
      case 'cross-platform':
        return <Layers size={20} className={styles.catIconRose} />;
      case 'enterprise':
        return <Cpu size={20} className={styles.catIconEmerald} />;
      default:
        return <Database size={20} className={styles.catIconCyan} />;
    }
  };

  return (
    <section id="projects" className={`section-wrapper ${styles.projectsSection}`}>
      <div className="container">
        <SectionHeader
          number="03"
          title="Architectural Showcases & Flagship Projects"
          subtitle="Battle-tested production systems solving non-trivial distributed challenges, multi-agent reasoning, and cross-platform fidelity."
        />

        {/* Filter & Search Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.filterTabs}>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.filterBtn} ${selectedFilter === tab.id ? styles.activeFilterBtn : ''}`}
                onClick={() => setSelectedFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <GlassCard key={project.id} className={styles.projectCard}>
              <div className={styles.cardTopRow}>
                <div className={styles.projectIconBadge} style={{ borderColor: `${project.primaryColor}55` }}>
                  {getCategoryIcon(project.category)}
                </div>

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      title="Inspect Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className={styles.iconLink}
                      title="Live System or Demonstration"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSummary}>{project.summary}</p>

              {/* Architectural Highlights Callout */}
              <div className={styles.architectureBox}>
                <div className={styles.archLabel}>
                  <Terminal size={12} />
                  <span>Architecture Highlight</span>
                </div>
                <p className={styles.archText}>{project.architecturalSolution}</p>
              </div>

              {/* Metrics */}
              <div className={styles.metricsRow}>
                {project.metrics.map((metric, i) => (
                  <span key={i} className={styles.metricPill}>
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={styles.techTag}
                    style={{
                      color: project.primaryColor,
                      backgroundColor: `${project.primaryColor}14`,
                      borderColor: `${project.primaryColor}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <button
                  className={styles.deepDiveBtn}
                  onClick={() => setActiveProjectModal(project)}
                >
                  <span>Inspect System Architecture</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <p>No projects match your search criteria. Try a different query or reset filters.</p>
          </div>
        )}

        {/* Project Architecture Deep-Dive Modal */}
        {activeProjectModal && (
          <div className={styles.modalBackdrop} onClick={() => setActiveProjectModal(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div>
                  <span className={styles.modalCategory}>SYSTEM DEEP-DIVE</span>
                  <h2 className={styles.modalTitle}>{activeProjectModal.title}</h2>
                </div>
                <button className={styles.closeBtn} onClick={() => setActiveProjectModal(null)}>
                  ✕
                </button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>The Challenge / Problem Statement</h4>
                  <p className={styles.modalSectionText}>{activeProjectModal.problemStatement}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Architectural Solution & Principles</h4>
                  <p className={styles.modalSectionText}>{activeProjectModal.architecturalSolution}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Validated System Metrics</h4>
                  <div className={styles.modalMetrics}>
                    {activeProjectModal.metrics.map((m, i) => (
                      <span key={i} className={styles.modalMetricItem}>
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Technology Stack</h4>
                  <div className={styles.tagsContainer}>
                    {activeProjectModal.tags.map((t, i) => (
                      <span key={i} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalActionBtn}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {activeProjectModal.liveUrl && (
                  <a
                    href={activeProjectModal.liveUrl}
                    onClick={() => setActiveProjectModal(null)}
                    className={styles.modalActionPrimaryBtn}
                  >
                    <span>Launch Demonstration</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
