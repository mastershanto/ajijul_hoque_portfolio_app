import { Experience, Profile, Project, Skill, SkillCategory } from '../../core/domain/entities';
import { IPortfolioRepository } from '../../core/ports/portfolio.port';
import { Result } from '../../core/types/result';
import { MockPortfolioRepository } from './mock-portfolio.repository';

/**
 * RestPortfolioRepository
 * Connects to external REST backends (ASP.NET Core, Go/Gin, Rust/Axum).
 * Implements resilient circuit-breaking: if the remote host fails or is unavailable,
 * gracefully falls back to the in-memory repository without breaking the user experience.
 */
export class RestPortfolioRepository implements IPortfolioRepository {
  private readonly baseUrl: string;
  private readonly fallbackRepo: MockPortfolioRepository;
  private readonly timeoutMs: number;

  constructor(baseUrl = process.env.NEXT_PUBLIC_API_URL || '', timeoutMs = 4000) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.fallbackRepo = new MockPortfolioRepository();
    this.timeoutMs = timeoutMs;
  }

  private async fetchWithTimeout<T>(endpoint: string): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }

      return (await response.json()) as T;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getProfile(): Promise<Result<Profile>> {
    if (!this.baseUrl) {
      return this.fallbackRepo.getProfile();
    }
    try {
      const data = await this.fetchWithTimeout<Profile>('/api/v1/profile');
      return Result.ok(data);
    } catch {
      return this.fallbackRepo.getProfile();
    }
  }

  async getSkills(category?: SkillCategory): Promise<Result<readonly Skill[]>> {
    if (!this.baseUrl) {
      return this.fallbackRepo.getSkills(category);
    }
    try {
      const url = category ? `/api/v1/skills?category=${category}` : '/api/v1/skills';
      const data = await this.fetchWithTimeout<readonly Skill[]>(url);
      return Result.ok(data);
    } catch {
      return this.fallbackRepo.getSkills(category);
    }
  }

  async getProjects(category?: string): Promise<Result<readonly Project[]>> {
    if (!this.baseUrl) {
      return this.fallbackRepo.getProjects(category);
    }
    try {
      const url = category && category !== 'all' ? `/api/v1/projects?category=${category}` : '/api/v1/projects';
      const data = await this.fetchWithTimeout<readonly Project[]>(url);
      return Result.ok(data);
    } catch {
      return this.fallbackRepo.getProjects(category);
    }
  }

  async getProjectBySlug(slug: string): Promise<Result<Project | null>> {
    if (!this.baseUrl) {
      return this.fallbackRepo.getProjectBySlug(slug);
    }
    try {
      const data = await this.fetchWithTimeout<Project>(`/api/v1/projects/${slug}`);
      return Result.ok(data);
    } catch {
      return this.fallbackRepo.getProjectBySlug(slug);
    }
  }

  async getExperiences(): Promise<Result<readonly Experience[]>> {
    if (!this.baseUrl) {
      return this.fallbackRepo.getExperiences();
    }
    try {
      const data = await this.fetchWithTimeout<readonly Experience[]>('/api/v1/experiences');
      return Result.ok(data);
    } catch {
      return this.fallbackRepo.getExperiences();
    }
  }
}
