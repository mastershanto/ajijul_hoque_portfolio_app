'use client';

import React, { useState } from 'react';
import { Activity, Check, Code, Cpu, ExternalLink, Play, Server, Shield, Zap } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { BackendSpecification, BackendType } from '../../core/domain/entities';
import { useBackendRegistry } from '../../shared/hooks/useBackendRegistry';
import styles from './BackendInteropSection.module.css';

export const BackendInteropSection: React.FC = () => {
  const {
    activeBackend,
    availableBackends,
    switchBackend,
    runConnectivityTest,
    testingTarget,
    testResults,
  } = useBackendRegistry();

  const [selectedBackendId, setSelectedBackendId] = useState<BackendType>('python-ai');

  const selectedSpec =
    availableBackends.find((b) => b.id === selectedBackendId) ?? availableBackends[0];

  const testResult = testResults[selectedBackendId];

  return (
    <section id="backend-matrix" className={`section-wrapper ${styles.interopSection}`}>
      <div className="container">
        <SectionHeader
          number="06"
          title="Polyglot Backend Interoperability Matrix"
          subtitle="Strict Clean Architecture allows this single Next.js frontend to interface with ASP.NET Core, Go/Gin, Rust/Axum, and Python AI without changing a line of domain logic."
        />

        {/* Backend Selector Tabs */}
        <div className={styles.backendTabs}>
          {availableBackends.map((backend) => {
            const isSelected = selectedBackendId === backend.id;
            const isCurrentActive = activeBackend === backend.id;
            return (
              <button
                key={backend.id}
                className={`${styles.backendTab} ${isSelected ? styles.activeTab : ''}`}
                onClick={() => setSelectedBackendId(backend.id)}
              >
                <div className={styles.tabContent}>
                  <div className={styles.tabTitleRow}>
                    <Server size={15} className={styles.tabIcon} />
                    <span className={styles.tabName}>{backend.displayName}</span>
                  </div>
                  {isCurrentActive && (
                    <span className={styles.activePill}>
                      <span className={styles.pulseDot} />
                      ACTIVE
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Backend Specification Dashboard */}
        <div className={styles.dashboardGrid}>
          {/* Left Column: Architectural Specifications */}
          <GlassCard className={styles.specCard}>
            <div className={styles.specHeader}>
              <div>
                <span className={styles.specTag}>ARCHITECTURE CONTRACT</span>
                <h3 className={styles.specTitle}>{selectedSpec.displayName}</h3>
                <p className={styles.specParadigm}>{selectedSpec.paradigm}</p>
              </div>

              <div className={styles.statusGroup}>
                <Badge
                  label={selectedSpec.status.toUpperCase()}
                  variant={selectedSpec.status === 'connected' ? 'emerald' : 'cyan'}
                />
              </div>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Technology Stack</span>
                <span className={styles.metaValue}>{selectedSpec.technology}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Design Pattern</span>
                <span className={styles.metaValue}>{selectedSpec.architecturePattern}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Default Port</span>
                <span className={styles.metaValue}>:{selectedSpec.defaultPort}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Target P99 Latency</span>
                <span className={styles.metaValue}>~{selectedSpec.latencyMs}ms</span>
              </div>
            </div>

            <div className={styles.featuresSection}>
              <h4 className={styles.featuresTitle}>Core Architectural Capabilities</h4>
              <div className={styles.featuresList}>
                {selectedSpec.features.map((feat, i) => (
                  <div key={i} className={styles.featureItem}>
                    <Check size={16} className={styles.featureCheck} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test & Switch Controls */}
            <div className={styles.actionToolbar}>
              <Button
                variant="primary"
                size="md"
                icon={<Activity size={16} />}
                disabled={testingTarget === selectedBackendId}
                onClick={() => runConnectivityTest(selectedBackendId)}
              >
                {testingTarget === selectedBackendId ? 'Testing Latency...' : 'Test Live Connectivity'}
              </Button>

              {activeBackend !== selectedBackendId ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => switchBackend(selectedBackendId)}
                >
                  Set As Active Runtime
                </Button>
              ) : (
                <span className={styles.alreadyActiveNote}>✓ Currently bound to IoC Container</span>
              )}
            </div>

            {/* Live Diagnostic Result Pill */}
            {testResult && (
              <div className={styles.testResultBox}>
                <div className={styles.testResultHeader}>
                  <Zap size={14} className={styles.zapIcon} />
                  <span>Latency: {testResult.latencyMs}ms</span>
                  <span className={styles.resultStatus}>• {testResult.status}</span>
                </div>
                <pre className={styles.resultJson}>
                  <code>{JSON.stringify(testResult.payload, null, 2)}</code>
                </pre>
              </div>
            )}
          </GlassCard>

          {/* Right Column: Production Code Snippet */}
          <div className={styles.codeColumn}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.dots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.codeLangTitle}>
                  {selectedSpec.id === 'aspnet-core' && 'Program.cs (.NET 9 / C# 13)'}
                  {selectedSpec.id === 'go-gin' && 'main.go (Go 1.24 / Gin)'}
                  {selectedSpec.id === 'rust-axum' && 'main.rs (Rust 2024 / Axum)'}
                  {selectedSpec.id === 'python-ai' && 'agent_server.py (Python 3.12 / FastAPI)'}
                  {selectedSpec.id === 'mock-standalone' && 'mock_repository.ts (TypeScript)'}
                </span>
              </div>
              <pre className={styles.codeSnippetBody}>
                <code>{selectedSpec.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
