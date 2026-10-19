import { ContactInquiry, ContactSubmissionResult } from '../domain/entities';
import { Result } from '../types/result';

/**
 * Secondary Port: IContactGateway
 * Encapsulates message transport (REST API, Webhook, Email worker, or Local Simulation).
 */
export interface IContactGateway {
  submitInquiry(inquiry: ContactInquiry): Promise<Result<ContactSubmissionResult>>;
}
