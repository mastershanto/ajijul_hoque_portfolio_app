import { NextRequest, NextResponse } from 'next/server';


/**
 * Agent Proxy Route
 * Can proxy requests to a remote Python FastAPI/LangGraph backend or stream responses directly.
 */
export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt: string };

    const searchParams = req.nextUrl.searchParams;
    const isStream = searchParams.get('stream') === 'true';

    // If external Python backend URL is configured, forward the request
    const pythonBackendUrl = process.env.PYTHON_AI_BACKEND_URL;
    if (pythonBackendUrl) {
      const response = await fetch(`${pythonBackendUrl}/v1/agent/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      return new Response(response.body, {
        headers: {
          'Content-Type': isStream ? 'text/event-stream' : 'application/json',
          'Cache-Control': 'no-cache',
        },
      });
    }

    // Default intelligent agent logic
    const answer = generateAgentAnswer(prompt);

    if (isStream) {
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          const words = answer.text.split(' ');
          for (let i = 0; i < words.length; i++) {
            const word = (i === 0 ? '' : ' ') + words[i];
            controller.enqueue(encoder.encode(word));
            await new Promise((r) => setTimeout(r, 20));
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
        },
      });
    }

    return NextResponse.json({
      message: answer.text,
      citations: answer.citations,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Agent execution failed' },
      { status: 500 }
    );
  }
}

function generateAgentAnswer(prompt: string): { text: string; citations: string[] } {
  const p = prompt.toLowerCase();
  if (p.includes('langgraph') || p.includes('agent') || p.includes('ai') || p.includes('llm')) {
    return {
      text: "Ajijul designs autonomous multi-agent networks using LangGraph, Python 3.12, and FastAPI. His architectures incorporate stateful cyclic graphs with critique and reflection supervisors. These nodes continuously evaluate intermediate tool outputs and trigger dynamic recovery branches when APIs return incomplete schema matches.",
      citations: ['Agentic Workflow Orchestrator', 'LangGraph Production Patterns'],
    };
  }
  if (p.includes('architecture') || p.includes('clean') || p.includes('solid') || p.includes('backend')) {
    return {
      text: "The architectural foundation adheres to Clean Architecture and SOLID principles. The domain layer remains strictly isolated from React, Next.js, and specific databases. Ports and Adapters (Hexagonal design) allow this exact frontend to talk to ASP.NET Core, Go/Gin, Rust/Axum, or Python AI without changing any core business rules.",
      citations: ['Hexagonal Architecture Specification', 'SOLID 25-Year Principles'],
    };
  }
  if (p.includes('flutter') || p.includes('mobile') || p.includes('dart') || p.includes('frontend')) {
    return {
      text: "Ajijul crafts 120 FPS glassmorphic cross-platform user experiences in Flutter with custom shaders, responsive breakpoint engines, and decoupled state management (BLoC / Riverpod). In web development, he builds with Next.js 16, App Router, and standard CSS Custom Properties.",
      citations: ['Flutter Multi-Platform Architecture', 'Responsive Layout System'],
    };
  }
  return {
    text: "Ajijul Hoque is an AI Systems Architect & Full-Stack Engineer based in Dhaka, Bangladesh (working remotely worldwide). He specializes in LangGraph multi-agent engineering, cross-platform Flutter development, and polyglot Clean Architecture. What specific aspect of his work would you like to explore?",
    citations: ['Profile Overview', 'Technical Matrix'],
  };
}
