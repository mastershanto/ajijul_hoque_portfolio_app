'use client';

import { useCallback, useState } from 'react';
import { BackendSpecification, BackendType } from '../../core/domain/entities';
import { container } from '../../infrastructure/container';

export function useBackendRegistry() {
  const diagnosticsGateway = container.getBackendDiagnosticsGateway();
  const availableBackends = diagnosticsGateway.getAvailableBackends();

  const [activeBackend, setActiveBackendState] = useState<BackendType>(
    container.getActiveBackendType()
  );
  const [testingTarget, setTestingTarget] = useState<BackendType | null>(null);
  const [testResults, setTestResults] = useState<
    Record<string, { latencyMs: number; status: string; payload: Record<string, unknown> }>
  >({});

  const switchBackend = useCallback((target: BackendType, customUrl?: string) => {
    container.setActiveBackend(target, customUrl);
    setActiveBackendState(target);
  }, []);

  const runConnectivityTest = useCallback(
    async (target: BackendType) => {
      setTestingTarget(target);
      const res = await diagnosticsGateway.testConnectivity(target);
      if (res.success) {
        setTestResults((prev) => ({
          ...prev,
          [target]: res.data,
        }));
      }
      setTestingTarget(null);
    },
    [diagnosticsGateway]
  );

  return {
    activeBackend,
    availableBackends,
    switchBackend,
    runConnectivityTest,
    testingTarget,
    testResults,
  };
}
