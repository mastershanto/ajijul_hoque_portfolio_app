import { BackendSpecification, BackendType } from '../domain/entities';
import { Result } from '../types/result';

/**
 * Secondary Port: IBackendDiagnosticsGateway
 * Validates connectivity, latency, and interoperability across ASP.NET Core, Go/Gin, Rust/Axum, and Python AI.
 */
export interface IBackendDiagnosticsGateway {
  getAvailableBackends(): readonly BackendSpecification[];
  testConnectivity(target: BackendType): Promise<Result<{ latencyMs: number; status: string; payload: Record<string, unknown> }>>;
}
