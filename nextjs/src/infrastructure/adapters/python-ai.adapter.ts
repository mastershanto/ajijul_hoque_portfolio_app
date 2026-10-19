import { ChatMessage } from '../../core/domain/entities';
import { IAIAgentGateway } from '../../core/ports/agent.port';
import { Result } from '../../core/types/result';

/**
 * PythonAIAgentAdapter
 * Connects the frontend to an AI agent reasoning loop (LangGraph / FastAPI).
 * Uses Next.js API route as a secure gateway or connects directly to the Python backend.
 * Provides rich intelligent simulation when backend is in offline demo mode.
 */
export class PythonAIAgentAdapter implements IAIAgentGateway {
  private readonly endpoint: string;

  constructor(endpoint = '/api/agent') {
    this.endpoint = endpoint;
  }

  async sendMessage(prompt: string, history: readonly ChatMessage[]): Promise<Result<ChatMessage>> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history }),
      });

      if (!response.ok) {
        throw new Error(`Agent gateway returned ${response.status}`);
      }

      const data = (await response.json()) as { message: string; citations?: string[] };

      return Result.ok({
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: data.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: data.citations,
      });
    } catch {
      // Offline fallback agent intelligence
      const fallbackReply = this.generateFallbackResponse(prompt);
      return Result.ok(fallbackReply);
    }
  }

  async streamMessage(
    prompt: string,
    history: readonly ChatMessage[],
    onChunk: (chunkText: string) => void
  ): Promise<Result<ChatMessage>> {
    try {
      const response = await fetch(`${this.endpoint}?stream=true`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Streaming failed, fallback to atomic');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;
        onChunk(chunk);
      }

      return Result.ok({
        id: `agent-stream-${Date.now()}`,
        sender: 'agent',
        text: fullText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    } catch {
      // Simulate token-by-token streaming response
      const fallback = this.generateFallbackResponse(prompt);
      const words = fallback.text.split(' ');
      let accumulated = '';

      for (let i = 0; i < words.length; i++) {
        const piece = (i === 0 ? '' : ' ') + words[i];
        accumulated += piece;
        onChunk(piece);
        await new Promise((res) => setTimeout(res, 25));
      }

      return Result.ok({
        ...fallback,
        text: accumulated,
      });
    }
  }

  private generateFallbackResponse(prompt: string): ChatMessage {
    const p = prompt.toLowerCase();
    let text = '';
    const citations: string[] = [];

    if (p.includes('softvence') || p.includes('tenure') || p.includes('experience') || p.includes('company')) {
      text =
        "Ajijul has 2 years of professional experience in mobile development and has been contributing at Softvence IT Limited for 1 year and 7 months (running). At Softvence IT Limited, he architects and delivers production-grade Flutter mobile applications, integrates REST APIs and Firebase Push Notifications, and ensures 99.8%+ crash-free user sessions.";
      citations.push('Softvence IT Limited (1 yr 7 mos running)', '2 Years Professional Mobile Exp');
    } else if (p.includes('flutter') || p.includes('mobile') || p.includes('dart') || p.includes('bloc') || p.includes('riverpod') || p.includes('state')) {
      text =
        "Ajijul is a dedicated Mobile Application Developer specializing in Flutter and Dart SDK. He utilizes BLoC and Riverpod for predictable, reactive, and event-driven state orchestration, alongside custom painters and Material 3 design to deliver buttery 60-120 FPS animations.";
      citations.push('Flutter 3.x & Dart SDK', 'BLoC & Riverpod State Engine');
    } else if (p.includes('clean') || p.includes('architecture') || p.includes('solid')) {
      text =
        "In mobile development, Ajijul enforces Clean Mobile Architecture: strict separation across Presentation (UI & BLoC/Cubit), Domain (Pure Use Cases & Entities), and Data (Repositories, Dio Remote Clients & Hive/SQLite Local Storage). This ensures zero UI-data coupling and effortless unit testing.";
      citations.push('Clean Mobile Architecture Specification', 'Domain-Driven Mobile Design');
    } else if (p.includes('firebase') || p.includes('api') || p.includes('backend') || p.includes('dio')) {
      text =
        "Ajijul connects mobile applications with robust backend services using Dio HTTP client with custom auth interceptors, Firebase Cloud Messaging (FCM) for real-time push notifications, Cloud Firestore, and offline-first caching via SQLite and Hive.";
      citations.push('Dio REST Networking', 'Firebase Suite for Mobile');
    } else if (p.includes('contact') || p.includes('hire') || p.includes('email') || p.includes('available')) {
      text =
        "Ajijul is currently Available for Flutter mobile development roles, cross-platform app consulting, and collaborative engineering projects. You can reach him directly at ajijul.hoque.dev@gmail.com or submit the contact form below.";
      citations.push('ajijul.hoque.dev@gmail.com', 'Dhaka, Bangladesh (Remote Worldwide)');
    } else {
      text =
        `Ajijul Hoque is a Mobile Application Developer specializing in Flutter, Dart, and Clean Architecture with 2 years of professional experience, currently building production apps at Softvence IT Limited (1 year 7 months running). Feel free to ask about his mobile projects, state management techniques, or professional timeline!`;
      citations.push('Ajijul Hoque Mobile Portfolio', 'Flutter & Dart Specialization');
    }

    return {
      id: `agent-reply-${Date.now()}`,
      sender: 'agent',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: citations.length > 0 ? citations : undefined,
    };
  }
}
