import { BackendType } from '../core/domain/entities';
import { IBackendDiagnosticsGateway } from '../core/ports/backend.port';
import { IContactGateway } from '../core/ports/contact.port';
import { IPortfolioRepository } from '../core/ports/portfolio.port';
import { IAIAgentGateway } from '../core/ports/agent.port';
import { BackendDiagnosticsAdapter } from './adapters/backend-diagnostics.adapter';
import { ContactAdapter } from './adapters/contact.adapter';
import { MockPortfolioRepository } from './adapters/mock-portfolio.repository';
import { PythonAIAgentAdapter } from './adapters/python-ai.adapter';
import { RestPortfolioRepository } from './adapters/rest-portfolio.repository';

/**
 * ServiceContainer (Inversion of Control Container)
 * Adheres strictly to the Dependency Inversion Principle (DIP):
 * High-level business modules do not depend on low-level modules.
 * Both depend on abstractions (Ports).
 */
export class ServiceContainer {
  private static instance: ServiceContainer;

  private currentBackendType: BackendType = 'python-ai';
  private portfolioRepo: IPortfolioRepository;
  private agentGateway: IAIAgentGateway;
  private contactGateway: IContactGateway;
  private backendDiagnosticsGateway: IBackendDiagnosticsGateway;

  private constructor() {
    this.portfolioRepo = new MockPortfolioRepository();
    this.agentGateway = new PythonAIAgentAdapter();
    this.contactGateway = new ContactAdapter();
    this.backendDiagnosticsGateway = new BackendDiagnosticsAdapter();
  }

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  public getPortfolioRepository(): IPortfolioRepository {
    return this.portfolioRepo;
  }

  public getAgentGateway(): IAIAgentGateway {
    return this.agentGateway;
  }

  public getContactGateway(): IContactGateway {
    return this.contactGateway;
  }

  public getBackendDiagnosticsGateway(): IBackendDiagnosticsGateway {
    return this.backendDiagnosticsGateway;
  }

  public getActiveBackendType(): BackendType {
    return this.currentBackendType;
  }

  public setActiveBackend(target: BackendType, customBaseUrl?: string): void {
    this.currentBackendType = target;
    if (target === 'mock-standalone') {
      this.portfolioRepo = new MockPortfolioRepository();
    } else {
      this.portfolioRepo = new RestPortfolioRepository(customBaseUrl);
    }
  }
}

// Global singleton accessor
export const container = ServiceContainer.getInstance();
