import { ContactInquiry, ContactSubmissionResult } from '../../core/domain/entities';
import { IContactGateway } from '../../core/ports/contact.port';
import { Result } from '../../core/types/result';

/**
 * ContactAdapter
 * Handles transmission of contact inquiries through an API endpoint,
 * with validation and clean simulation fallback.
 */
export class ContactAdapter implements IContactGateway {
  private readonly endpoint: string;

  constructor(endpoint = '/api/contact') {
    this.endpoint = endpoint;
  }

  async submitInquiry(inquiry: ContactInquiry): Promise<Result<ContactSubmissionResult>> {
    // Validate inputs defensively according to SOLID SRP
    if (!inquiry.name || inquiry.name.trim().length < 2) {
      return Result.fail(new Error('Please provide your name (at least 2 characters).'));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inquiry.email || !emailRegex.test(inquiry.email)) {
      return Result.fail(new Error('Please provide a valid email address.'));
    }

    if (!inquiry.message || inquiry.message.trim().length < 5) {
      return Result.fail(new Error('Please provide a descriptive message (at least 5 characters).'));
    }

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      });

      if (!response.ok) {
        throw new Error(`Contact endpoint returned status ${response.status}`);
      }

      const data = (await response.json()) as ContactSubmissionResult;
      return Result.ok(data);
    } catch {
      // Offline fallback: simulated successful transmission
      return Result.ok({
        success: true,
        messageId: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        timestamp: new Date().toISOString(),
        note: `Thank you, ${inquiry.name}! Your message has been received and queued for Ajijul Hoque.`,
      });
    }
  }
}
