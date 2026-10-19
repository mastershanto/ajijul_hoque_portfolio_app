import { Experience, Profile, Project, Skill, SkillCategory } from '../../core/domain/entities';
import { IPortfolioRepository } from '../../core/ports/portfolio.port';
import { Result } from '../../core/types/result';
import {
  portfolioExperiences,
  portfolioProfile,
  portfolioProjects,
  portfolioSkills,
} from '../data/portfolio.data';

/**
 * MockPortfolioRepository
 * Pure in-memory adapter guaranteeing 100% operational reliability even if external
 * backends are offline, unreachable, or in development.
 */
export class MockPortfolioRepository implements IPortfolioRepository {
  private readonly profile: Profile = portfolioProfile;
  private readonly skills: readonly Skill[] = portfolioSkills;
  private readonly projects: readonly Project[] = portfolioProjects;
  private readonly experiences: readonly Experience[] = portfolioExperiences;

  async getProfile(): Promise<Result<Profile>> {
    return Result.ok(this.profile);
  }

  async getSkills(category?: SkillCategory): Promise<Result<readonly Skill[]>> {
    if (!category) {
      return Result.ok(this.skills);
    }
    const filtered = this.skills.filter((s) => s.category === category);
    return Result.ok(filtered);
  }

  async getProjects(category?: string): Promise<Result<readonly Project[]>> {
    if (!category || category === 'all') {
      return Result.ok(this.projects);
    }
    const filtered = this.projects.filter((p) => p.category === category);
    return Result.ok(filtered);
  }

  async getProjectBySlug(slug: string): Promise<Result<Project | null>> {
    const project = this.projects.find((p) => p.slug === slug) ?? null;
    return Result.ok(project);
  }

  async getExperiences(): Promise<Result<readonly Experience[]>> {
    return Result.ok(this.experiences);
  }
}
