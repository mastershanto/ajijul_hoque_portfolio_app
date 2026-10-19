/**
 * Domain Entities & Value Objects
 * Independent of presentation layers and external databases.
 * Designed to sustain 25+ years through immutable specifications and explicit schema contracts.
 */

export interface Profile {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly roles: readonly string[];
  readonly bioSummary: string;
  readonly fullBio: readonly string[];
  readonly availabilityStatus: 'available' | 'busy' | 'consulting_only';
  readonly location: string;
  readonly email: string;
  readonly githubUrl: string;
  readonly linkedinUrl: string;
  readonly twitterUrl?: string;
  readonly resumeDownloadUrl?: string;
  readonly stats: {
    readonly yearsExperience: number;
    readonly productionAgentsDeployed: number;
    readonly systemsArchitected: number;
    readonly clientSatisfactionRate: number; // percentage e.g. 100
  };
}

export type SkillCategory = 'ai-agents' | 'fullstack-mobile' | 'backend-distributed' | 'cloud-devops';

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly proficiency: number; // 0 - 100
  readonly yearsOfExperience: number;
  readonly isPrimary: boolean;
  readonly description?: string;
  readonly tags: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly problemStatement: string;
  readonly architecturalSolution: string;
  readonly tags: readonly string[];
  readonly category: 'ai-engineering' | 'full-stack' | 'cross-platform' | 'enterprise';
  readonly featured: boolean;
  readonly metrics: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly primaryColor: string;
  readonly iconName: string;
}

export interface Experience {
  readonly id: string;
  readonly period: string;
  readonly role: string;
  readonly organization: string;
  readonly location?: string;
  readonly description: string;
  readonly keyAchievements: readonly string[];
  readonly technologies: readonly string[];
}

export type BackendType = 'aspnet-core' | 'go-gin' | 'rust-axum' | 'python-ai' | 'mock-standalone';

export interface BackendSpecification {
  readonly id: BackendType;
  readonly displayName: string;
  readonly technology: string;
  readonly paradigm: string;
  readonly architecturePattern: string;
  readonly defaultPort: number;
  readonly status: 'connected' | 'mock_active' | 'simulated';
  readonly latencyMs: number;
  readonly features: readonly string[];
  readonly codeSnippet: string;
}

export interface ChatMessage {
  readonly id: string;
  readonly sender: 'user' | 'agent' | 'system';
  readonly text: string;
  readonly timestamp: string;
  readonly citations?: readonly string[];
  readonly codeBlocks?: readonly {
    readonly language: string;
    readonly code: string;
  }[];
}

export interface ContactInquiry {
  readonly name: string;
  readonly email: string;
  readonly subject?: string;
  readonly message: string;
  readonly requestedBackendTarget?: BackendType;
}

export interface ContactSubmissionResult {
  readonly success: boolean;
  readonly messageId: string;
  readonly timestamp: string;
  readonly note: string;
}
