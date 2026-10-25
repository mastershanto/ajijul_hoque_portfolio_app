# 📱 Ajijul Hoque — Mobile Application Developer (Flutter) Portfolio

> **Architectural Specification & Production Mobile Portfolio Platform**  
> Engineered by a Mobile Application Developer with 2 years of professional experience, currently building at Softvence IT Limited (1 year 7 months running). Built with Clean Architecture, fluid 60-120 FPS rendering, BLoC/Riverpod state management, and strict domain decoupling.

---

## 🧭 Architectural Blueprint

```
                              ┌───────────────────────────────────┐
                              │     PRESENTATION TIER (UI)        │
                              │  Next.js 16 / React 19 / Tokens   │
                              └─────────────────┬─────────────────┘
                                                │
                                       (Port Abstractions)
                                                │
  ┌─────────────────────────────────────────────▼─────────────────────────────────────────────┐
  │                                    CORE DOMAIN (Pure TS)                                  │
  │   - Entities (Profile, Skill, Project, Experience, ChatMessage, BackendSpec)              │
  │   - Result<T, E> Monadic Error Handling (Zero Unhandled Exceptions)                       │
  │   - Port Interfaces (IPortfolioRepository, IAIAgentGateway, IContactGateway)              │
  └─────────────────────────────────────────────▲─────────────────────────────────────────────┘
                                                │
                                    (Dependency Inversion)
                                                │
 ┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐
 │                                   INFRASTRUCTURE ADAPTERS                                  │
 │                                                                                            │
 │   ┌───────────────────────┐  ┌───────────────────────┐  ┌──────────────────────────────┐   │
 │   │  Python AI Engine     │  │   ASP.NET Core 9      │  │      Go 1.24 Gin Engine      │   │
 │   │  - LangGraph Swarms   │  │   - MediatR CQRS      │  │      - Goroutine Microservice│   │
 │   │  - FastAPI SSE Stream │  │   - Clean Hexagonal   │  │      - Zero Allocation JSON  │   │
 │   └───────────────────────┘  └───────────────────────┘  └──────────────────────────────┘   │
 │                                                                                            │
 │   ┌───────────────────────┐  ┌───────────────────────┐                                     │
 │   │   Rust 2024 Axum      │  │ Standalone Mock Port  │                                     │
 │   │   - Tokio Async Engine│  │ - 100% Offline First  │                                     │
 │   │   - Zero-Cost Memory  │  │ - Resilient Fallback  │                                     │
 │   └───────────────────────┘  └───────────────────────┘                                     │
 └────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 💎 The 25-Year Sustainability Principles

1. **Zero Vendor Lock-in (Ports & Adapters)**:
   - Business entities and application ports never import React, Next.js, or external database drivers.
   - When Next.js evolves or is replaced in 10-15 years, the domain core and contracts require zero rewrites.

2. **SOLID Rigor**:
   - **S**ingle Responsibility: Every module has one clear reason to change.
   - **O**pen/Closed: Feature extensions require new adapters without mutating domain aggregates.
   - **L**iskov Substitution: Any backend implementation (`Mock`, `Rest`, `PythonAI`) can substitute the port without breaking callers.
   - **I**nterface Segregation: Fine-grained ports (`IPortfolioRepository`, `IAIAgentGateway`, `IContactGateway`).
   - **D**ependency Inversion: High-level modules depend strictly on abstractions, resolved via `ServiceContainer`.

3. **Result Monad Pattern (`Result<T, E>`)**:
   - Inspired by Rust's `Result<T, E>` and Go's `(value, error)`. Eliminates unexpected runtime crashes across network boundaries.

4. **W3C Standard CSS Custom Properties**:
   - Pure standard CSS variables (`tokens.css`) with zero framework dependency. Guarantees styling durability for decades.

---

## 🗂️ Feature-First Directory Structure

```
nextjs/
├── src/
│   ├── core/                        # 🏛️ Domain Core (Decoupled, 100% Framework Independent)
│   │   ├── domain/                  # Immutable Entities & Value Objects
│   │   ├── ports/                   # Port Interfaces (Repositories & Gateways)
│   │   └── types/                   # Result<T, E> monad and functional types
│   │
│   ├── infrastructure/              # 🔌 Infrastructure Adapters
│   │   ├── adapters/                # Concrete Port Implementations
│   │   │   ├── mock-portfolio.ts    # 100% Offline-First In-Memory Adapter
│   │   │   ├── rest-portfolio.ts    # Resilient Circuit-Breaking REST Adapter
│   │   │   ├── python-ai.ts         # LangGraph & FastAPI SSE Streaming Gateway
│   │   │   ├── contact.ts           # Contact Dispatch Adapter
│   │   │   └── backend-diag.ts      # Multi-Backend Diagnostic Probe
│   │   ├── data/                    # High-fidelity domain seed data
│   │   └── container.ts             # Inversion of Control (IoC) Service Container
│   │
│   ├── features/                    # 🎯 Feature Modules (Co-located Logic & Styles)
│   │   ├── navigation/              # Floating glassmorphic navbar & scrollspy
│   │   ├── hero/                    # Hero headline, live role ticker, core hologram
│   │   ├── about/                   # 25-year architecture manifesto & bio
│   │   ├── skills/                  # Competency matrix with proficiency meters
│   │   ├── projects/                # Flagship showcases & deep-dive architecture modal
│   │   ├── experience/              # Milestones timeline with impact metrics
│   │   ├── ai-copilot/              # Autonomous AI terminal with LangGraph simulation
│   │   ├── backend-interop/         # Polyglot backend switcher & live test runner
│   │   ├── contact/                 # Contact transmission & email copy tool
│   │   └── footer/                  # System architecture telemetry footer
│   │
│   ├── shared/                      # 🧱 Reusable UI Building Blocks
│   │   ├── components/              # GlassCard, SectionHeader, Badge, Button, BrandIcons
│   │   ├── hooks/                   # useScrollSpy, useBackendRegistry
│   │   └── styles/                  # tokens.css design system tokens
│   │
│   └── app/                         # ⚡ Next.js App Router Shell
│       ├── layout.tsx               # SEO Metadata, OpenGraph & JSON-LD Schemas
│       ├── page.tsx                 # Clean Architecture Orchestrator
│       ├── globals.css              # Global tokens import & typography
│       └── api/                     # Gateway Proxy Endpoints
│           ├── agent/route.ts       # SSE Token Streaming Agent Route
│           ├── contact/route.ts     # Inquiry Dispatch Route
│           └── health/route.ts      # System Telemetry & Ping Route
```

---

## 🚀 Getting Started with Bun

### Prerequisites
- [Bun](https://bun.sh) (v1.4+) or Node.js (v20+)

### Commands

```bash
# 1. Install dependencies using Bun
bun install

# 2. Launch Development Server
bun run dev -p 3001

# 3. Compile Production Bundle
bun run build

# 4. Launch Production Server
bun run start -p 3001
```

---

## 🔄 Polyglot Backend Interoperability

This frontend is configured out of the box to connect with:

| Backend Target | Technology | Paradigm | Default Port |
| :--- | :--- | :--- | :--- |
| **Python AI** | Python 3.12 / FastAPI / LangGraph | Stateful Cyclic Multi-Agent Graph | `:8000` |
| **ASP.NET Core** | .NET 9 / C# 13 / MediatR | Clean Hexagonal CQRS & EF Core | `:5001` |
| **Go Gin** | Go 1.24 / Gin-Gonic / Goroutines | High-Throughput Concurrent Microservice | `:8080` |
| **Rust Axum** | Rust 2024 / Axum / Tokio | Memory-Safe Zero-Cost Async Engine | `:3000` |
| **Standalone Mock** | Pure TypeScript In-Memory | 100% Offline-First Embedded Fallback | `Local` |

You can switch the active backend dynamically in the **Polyglot Matrix** section or set `NEXT_PUBLIC_API_URL` in your environment.
