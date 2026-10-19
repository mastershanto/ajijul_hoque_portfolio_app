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

    if (p.includes('langgraph') || p.includes('agent') || p.includes('ai') || p.includes('llm')) {
      text =
        "Ajijul architects autonomous multi-agent networks using LangGraph and Python. His core pattern utilizes cyclical state graphs with automated supervisor nodes, critique loops, and tool-use barriers to eliminate hallucinations. He has deployed 18+ production agents integrating Gemini 2.5, GPT-4o, and local Ollama inference pipelines.";
      citations.push('Agentic Workflow Orchestrator (LangGraph)', 'Enterprise RAG Suite');
    } else if (p.includes('backend') || p.includes('rust') || p.includes('go') || p.includes('asp.net') || p.includes('architecture')) {
      text =
        "Ajijul implements strict Clean Hexagonal Architecture (Ports & Adapters) and SOLID principles. The system decouples domain rules from frameworks, making the application interchangeable with ASP.NET Core (C# CQRS/MediatR), Go (Gin concurrency), Rust (Axum memory-safe async), and Python FastAPI without UI rewrites.";
      citations.push('Clean Architecture Specification', 'Polyglot Backend Interop Matrix');
    } else if (p.includes('flutter') || p.includes('mobile') || p.includes('cross-platform') || p.includes('ui')) {
      text =
        "On the client tier, Ajijul crafts responsive, 120 FPS glassmorphic user interfaces using Flutter (with BLoC / Riverpod) and modern Next.js 16. His focus is on sub-100ms interaction feedback, accessible contrast ratios, and unified cross-platform state engines.";
      citations.push('Flutter Multi-Platform Architecture', 'Next.js 16 Clean Frontend');
    } else if (p.includes('contact') || p.includes('hire') || p.includes('email') || p.includes('available')) {
      text =
        "Ajijul is currently Available for select high-impact engineering projects, AI agent consulting, and full-stack systems architecture. You can reach him directly at ajijul.hoque.dev@gmail.com or submit the contact form below.";
      citations.push('ajijul.hoque.dev@gmail.com', 'Dhaka, Bangladesh (Remote Worldwide)');
    } else {
      text =
        `Ajijul Hoque is an AI Systems Architect & Full-Stack Engineer specializing in self-correcting LangGraph multi-agent systems, cross-platform Flutter development, and 25-year sustainable Clean Architecture. Feel free to ask about his projects, tech stack, or system design approaches!`;
      citations.push('Ajijul Hoque Portfolio Core', 'Systems Architecture Index');
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
