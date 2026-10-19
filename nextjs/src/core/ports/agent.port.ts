import { ChatMessage } from '../domain/entities';
import { Result } from '../types/result';

/**
 * Secondary Port: IAIAgentGateway
 * Interfaces with AI reasoning engines (Python FastAPI / LangGraph, Ollama, OpenAI, or Mock fallback).
 */
export interface IAIAgentGateway {
  sendMessage(
    prompt: string,
    history: readonly ChatMessage[]
  ): Promise<Result<ChatMessage>>;

  streamMessage?(
    prompt: string,
    history: readonly ChatMessage[],
    onChunk: (chunkText: string) => void
  ): Promise<Result<ChatMessage>>;
}
