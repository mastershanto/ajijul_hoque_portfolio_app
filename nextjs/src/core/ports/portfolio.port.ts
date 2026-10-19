import { Profile, Skill, Project, Experience, SkillCategory } from '../domain/entities';
import { Result } from '../types/result';

/**
 * Secondary Port: IPortfolioRepository
 * Decouples domain retrieval logic from specific persistence or remote API mechanisms.
 */
export interface IPortfolioRepository {
  getProfile(): Promise<Result<Profile>>;
  getSkills(category?: SkillCategory): Promise<Result<readonly Skill[]>>;
  getProjects(category?: string): Promise<Result<readonly Project[]>>;
  getProjectBySlug(slug: string): Promise<Result<Project | null>>;
  getExperiences(): Promise<Result<readonly Experience[]>>;
}
