import { BackendSpecification, Experience, Profile, Project, Skill } from '../../core/domain/entities';

export const portfolioProfile: Profile = {
  id: 'ajijul-hoque-profile',
  name: 'Ajijul Hoque',
  title: 'AI Systems Architect & Full-Stack Engineer',
  roles: [
    'AI Systems Architect',
    'LangGraph & LLM Engineer',
    'Flutter & Cross-Platform Lead',
    'Clean Architecture Evangelist',
    'Polyglot Backend Engineer',
  ],
  bioSummary:
    'I architect self-correcting multi-agent reasoning networks using LangGraph & LLMs, and craft high-performance, fluid, and scalable user interfaces in Flutter & Next.js built for decades of maintainability.',
  fullBio: [
    'With deep expertise across AI engineering, autonomous multi-agent networks, and distributed systems, I bridge the gap between bleeding-edge research and mission-critical production software.',
    'My foundational architecture follows Clean Architecture, SOLID principles, and Domain-Driven Design (DDD). I design applications where the presentation layer, business rules, and infrastructure remain strictly decoupled—allowing the same frontend to talk seamlessly to ASP.NET Core, Go/Gin, Rust/Axum, or Python AI microservices without rewriting a single line of business logic.',
    'On the client side, I engineer rich, responsive applications with glassmorphic aesthetics, zero-compromise accessibility, micro-animations, and sub-100ms interaction feedback loops.',
  ],
  availabilityStatus: 'available',
  location: 'Dhaka, Bangladesh (Remote Worldwide)',
  email: 'ajijul.hoque.dev@gmail.com',
  githubUrl: 'https://github.com/ajijulhoque',
  linkedinUrl: 'https://linkedin.com/in/ajijulhoque',
  twitterUrl: 'https://twitter.com/ajijulhoque',
  resumeDownloadUrl: '#contact',
  stats: {
    yearsExperience: 4,
    productionAgentsDeployed: 18,
    systemsArchitected: 24,
    clientSatisfactionRate: 100,
  },
};

export const portfolioSkills: readonly Skill[] = [
  // AI & Agentic Systems
  {
    id: 'langgraph',
    name: 'LangGraph & Multi-Agent Swarms',
    category: 'ai-agents',
    proficiency: 95,
    yearsOfExperience: 3,
    isPrimary: true,
    description: 'Stateful cyclical graphs, self-correcting reflection loops, human-in-the-loop workflows.',
    tags: ['Cyclic Graphs', 'Agent Swarms', 'State Machines', 'Reflection Loops'],
  },
  {
    id: 'gemini-openai',
    name: 'LLM Orchestration (Gemini 2.5 / GPT-4o / Claude 3.7)',
    category: 'ai-agents',
    proficiency: 96,
    yearsOfExperience: 3,
    isPrimary: true,
    description: 'Structured outputs, function calling, tool use, multimodality, dynamic context windows.',
    tags: ['Tool Use', 'Structured JSON', 'Multimodal', 'Prompt Optimization'],
  },
  {
    id: 'rag-vector',
    name: 'Enterprise RAG & Hybrid Vector Retrieval',
    category: 'ai-agents',
    proficiency: 92,
    yearsOfExperience: 3,
    isPrimary: true,
    description: 'Chunking strategies, Qdrant/Chroma/Pinecone, BM25 hybrid ranking, cross-encoders.',
    tags: ['Qdrant', 'Pinecone', 'Embeddings', 'Re-Ranking', 'Context Enrichment'],
  },
  {
    id: 'ollama-local-llm',
    name: 'Local LLMs & On-Prem Inference (Ollama / vLLM)',
    category: 'ai-agents',
    proficiency: 88,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Self-hosted inference pipelines, quantized GGUF models, privacy-first offline setups.',
    tags: ['vLLM', 'Ollama', 'Quantization', 'Private AI'],
  },

  // Full-Stack & Cross-Platform
  {
    id: 'flutter-dart',
    name: 'Flutter & Dart',
    category: 'fullstack-mobile',
    proficiency: 98,
    yearsOfExperience: 4,
    isPrimary: true,
    description: 'Production cross-platform mobile/desktop/web with BLoC, Riverpod, and smooth 120fps animations.',
    tags: ['BLoC', 'Custom Painters', 'Web & Mobile', 'Material 3', 'Riverpod'],
  },
  {
    id: 'nextjs-react',
    name: 'Next.js 16 / React 19 / TypeScript 5',
    category: 'fullstack-mobile',
    proficiency: 94,
    yearsOfExperience: 4,
    isPrimary: true,
    description: 'Server Components, Turbopack, App Router, Clean Hexagonal Architecture, Feature-First.',
    tags: ['App Router', 'RSC', 'TypeScript', 'Turbopack', 'Micro-Frontends'],
  },
  {
    id: 'css-design-systems',
    name: 'Modern CSS & Design Systems',
    category: 'fullstack-mobile',
    proficiency: 93,
    yearsOfExperience: 4,
    isPrimary: false,
    description: 'Glassmorphism, CSS Custom Properties, GPU-accelerated micro-interactions, responsive grids.',
    tags: ['CSS Modules', 'Design Tokens', 'Glassmorphism', 'WCAG AAA'],
  },

  // Backend & Distributed Systems
  {
    id: 'python-fastapi',
    name: 'Python (FastAPI, AsyncIO, PyDantic)',
    category: 'backend-distributed',
    proficiency: 95,
    yearsOfExperience: 4,
    isPrimary: true,
    description: 'High-throughput async APIs, WebSocket streaming, Server-Sent Events, distributed workers.',
    tags: ['FastAPI', 'PyDantic v2', 'AsyncIO', 'SSE', 'Celery'],
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core (C# 13, Clean Architecture)',
    category: 'backend-distributed',
    proficiency: 86,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Minimal APIs, MediatR CQRS, Entity Framework Core, strongly typed domain aggregates.',
    tags: ['C#', 'Clean Architecture', 'CQRS', 'MediatR', 'EF Core'],
  },
  {
    id: 'go-gin',
    name: 'Go / Gin Microservices',
    category: 'backend-distributed',
    proficiency: 84,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Low-latency microservices, goroutine concurrency, structured logging, gRPC.',
    tags: ['Golang', 'Gin-Gonic', 'Goroutines', 'gRPC', 'Zero Allocations'],
  },
  {
    id: 'rust-axum',
    name: 'Rust / Axum High-Performance Services',
    category: 'backend-distributed',
    proficiency: 80,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Memory-safe asynchronous endpoints, Tokio runtime, zero-cost abstractions, tower middleware.',
    tags: ['Tokio', 'Axum', 'Type Safety', 'Zero Cost', 'SIMD'],
  },

  // Cloud & DevOps
  {
    id: 'firebase-gcp',
    name: 'Firebase & Google Cloud Platform',
    category: 'cloud-devops',
    proficiency: 90,
    yearsOfExperience: 4,
    isPrimary: true,
    description: 'Cloud Firestore, App Hosting, Cloud Functions, IAM Security Rules, Cloud Run.',
    tags: ['Firestore', 'Cloud Run', 'Security Rules', 'Cloud Functions'],
  },
  {
    id: 'docker-cicd',
    name: 'Docker, Linux & CI/CD Pipelines',
    category: 'cloud-devops',
    proficiency: 89,
    yearsOfExperience: 3,
    isPrimary: false,
    description: 'Multi-stage container builds, automated regression test gates, GitHub Actions.',
    tags: ['Containers', 'GitHub Actions', 'Linux Kernel', 'Nginx'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & Distributed Storage',
    category: 'cloud-devops',
    proficiency: 88,
    yearsOfExperience: 3,
    isPrimary: false,
    description: 'ACID transactions, relational modeling, pgvector indexing, query plan optimization.',
    tags: ['pgvector', 'Indexes', 'Migrations', 'Partitioning'],
  },
];

export const portfolioProjects: readonly Project[] = [
  {
    id: 'proj-1',
    slug: 'agentic-workflow-orchestrator',
    title: 'Agentic Workflow Orchestrator',
    summary:
      'Autonomous multi-agent research and synthesis network developed with LangGraph, featuring dynamic validation, automated web synthesis, and self-critique loops.',
    problemStatement:
      'Standard LLM pipelines hallucinate, lack iterative refinement, and cannot self-correct when API tools return unexpected or partial schemas.',
    architecturalSolution:
      'Designed a stateful directed cyclic graph with LangGraph. Each node represents a specialist agent (Researcher, Analyst, Critic, Formatter) with strict JSON contracts and an automated critique supervisor that triggers recursive repair cycles.',
    tags: ['LangGraph', 'Python 3.12', 'FastAPI', 'Gemini 2.5', 'Pydantic'],
    category: 'ai-engineering',
    featured: true,
    metrics: ['99.2% schema adherence', '3.8x reduction in hallucinations', 'Autonomous self-healing'],
    githubUrl: 'https://github.com/ajijulhoque/agentic-workflow-orchestrator',
    liveUrl: '#ai-copilot',
    primaryColor: '#818CF8',
    iconName: 'Network',
  },
  {
    id: 'proj-2',
    slug: 'enterprise-rag-suite',
    title: 'Enterprise Hybrid RAG Suite',
    summary:
      'Zero-latency knowledge discovery engine featuring dense & sparse hybrid retrieval, multi-format chunking, and source-attributed citations.',
    problemStatement:
      'Legacy vector search relies solely on naive cosine distance embeddings, missing exact keyword matches, SKU codes, and multi-page cross-references.',
    architecturalSolution:
      'Implemented reciprocal rank fusion (RRF) combining dense vector embeddings with BM25 lexical search, backed by a cross-encoder re-ranking stage and streaming SSE token response pipeline.',
    tags: ['Qdrant', 'FastAPI', 'LangChain', 'OpenAI', 'Python AsyncIO'],
    category: 'ai-engineering',
    featured: true,
    metrics: ['< 45ms retrieval time', '89% improvement in technical recall', 'Zero hallucinated citations'],
    githubUrl: 'https://github.com/ajijulhoque/enterprise-rag-suite',
    liveUrl: '#contact',
    primaryColor: '#38BDF8',
    iconName: 'Database',
  },
  {
    id: 'proj-3',
    slug: 'polyglot-backend-clean-architecture',
    title: 'Polyglot 25-Year Clean Architecture Platform',
    summary:
      'Frontend & backend foundation decouples business logic across ASP.NET Core, Go/Gin, Rust/Axum, and Python AI without vendor lock-in.',
    problemStatement:
      'Software frameworks quickly go obsolete every 3-5 years. Tightly coupling UI to vendor APIs creates massive tech debt and expensive total rewrites.',
    architecturalSolution:
      'Built a Ports & Adapters (Hexagonal) architecture with standard TypeScript Result monads, strict contract definitions, and interchangeable infrastructure adapters that sustain across multiple decades.',
    tags: ['Next.js 16', 'Clean Architecture', 'SOLID', 'ASP.NET Core', 'Go', 'Rust'],
    category: 'enterprise',
    featured: true,
    metrics: ['100% backend agnostic', 'Zero vendor lock-in', 'Strict SOLID adherence'],
    githubUrl: 'https://github.com/ajijulhoque/polyglot-clean-architecture',
    liveUrl: '#backend-interop',
    primaryColor: '#10B981',
    iconName: 'Cpu',
  },
  {
    id: 'proj-4',
    slug: 'flutter-cross-platform-showcase',
    title: 'Glassmorphic Multi-Platform Application',
    summary:
      'High-performance, fluid desktop & mobile application rendered via Flutter, featuring reactive state machines and unified codebase compilation.',
    problemStatement:
      'Maintaining separate codebases for iOS, Android, and Desktop triples maintenance overhead and introduces fragmented visual design language.',
    architecturalSolution:
      'Crafted a bespoke Material 3 glassmorphic design system in Flutter with 120 FPS hardware acceleration, decoupled BLoC state machines, and responsive multi-window desktop layouts.',
    tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Glassmorphism', 'Web/Desktop/Mobile'],
    category: 'cross-platform',
    featured: true,
    metrics: ['60-120 FPS buttery rendering', 'Single codebase for 5 platforms', 'Accessible contrast'],
    githubUrl: 'https://github.com/ajijulhoque/ajijul_hoque_portfolio',
    liveUrl: '#hero',
    primaryColor: '#F472B6',
    iconName: 'Smartphone',
  },
  {
    id: 'proj-5',
    slug: 'multi-tenant-cloud-crm',
    title: 'Enterprise Multi-Tenant Realtime CRM',
    summary:
      'Cloud-native CRM system with row-level security rules, real-time reactive sync, audit logs, and automated background workers.',
    problemStatement:
      'Data isolation leaks in multi-tenant environments are catastrophic. High concurrent writes create database race conditions and stale caches.',
    architecturalSolution:
      'Engineered declarative row-level access control rules in Cloud Firestore, transactional writes, and event-driven Cloud Functions handling real-time customer data pipelines.',
    tags: ['Firebase', 'Cloud Functions', 'PostgreSQL', 'Flutter Web', 'TypeScript'],
    category: 'enterprise',
    featured: false,
    metrics: ['99.99% uptime', 'Sub-second multi-tenant sync', 'Zero data isolation leakage'],
    githubUrl: 'https://github.com/ajijulhoque/multi-tenant-crm',
    liveUrl: '#contact',
    primaryColor: '#F59E0B',
    iconName: 'Shield',
  },
  {
    id: 'proj-6',
    slug: 'local-ai-code-copilot',
    title: 'Private On-Premises Code Intelligence Agent',
    summary:
      'Privacy-first developer copilot operating entirely offline with Ollama, custom AST parsing, and context-aware file indexers.',
    problemStatement:
      'Proprietary enterprise code cannot be uploaded to public cloud LLMs due to compliance, privacy, and intellectual property constraints.',
    architecturalSolution:
      'Constructed a local inference bridge linking Tree-sitter AST queries with local 8B/14B Q4_K_M quantized LLMs, delivering instant semantic autocomplete and contextual code generation.',
    tags: ['Ollama', 'Python AsyncIO', 'Tree-Sitter', 'Private AI', 'FastAPI'],
    category: 'ai-engineering',
    featured: false,
    metrics: ['100% offline data privacy', '32k token context window', '< 120ms token latency'],
    githubUrl: 'https://github.com/ajijulhoque/local-ai-copilot',
    liveUrl: '#ai-copilot',
    primaryColor: '#6366F1',
    iconName: 'Terminal',
  },
];

export const portfolioExperiences: readonly Experience[] = [
  {
    id: 'exp-1',
    period: '2025 - Present',
    role: 'Lead AI Systems Architect & Core Engineer',
    organization: 'AI Innovation Hub & Applied Systems Labs',
    location: 'Dhaka, Bangladesh / Remote',
    description:
      'Spearheading the engineering of autonomous multi-agent networks, cyclic reasoning workflows with LangGraph, and high-reliability production applications.',
    keyAchievements: [
      'Engineered stateful multi-agent systems serving real-time synthesis and document parsing.',
      'Reduced hallucination rates by 70% through automated self-correcting validation loops.',
      'Standardized clean architecture patterns across all frontend and microservice layers.',
    ],
    technologies: ['LangGraph', 'Python 3.12', 'FastAPI', 'Flutter', 'Next.js 16', 'Docker', 'Qdrant'],
  },
  {
    id: 'exp-2',
    period: '2024 - 2025',
    role: 'Full-Stack Application Developer',
    organization: 'Independent Digital Labs',
    location: 'Remote',
    description:
      'Architected cross-platform mobile and web applications with Flutter and modern reactive web stacks, integrating cloud backends and asynchronous APIs.',
    keyAchievements: [
      'Delivered 4 production cross-platform applications with 99.8% crash-free sessions.',
      'Designed high-throughput REST and SSE streaming endpoints in Python FastAPI and Node.js.',
      'Implemented robust CI/CD automated test suites and containerized cloud deployments.',
    ],
    technologies: ['Flutter', 'Dart', 'FastAPI', 'Firebase Suite', 'PostgreSQL', 'Tailored CSS', 'Git CI/CD'],
  },
  {
    id: 'exp-3',
    period: '2023 - 2024',
    role: 'Software Development Associate',
    organization: 'Tech Academy & Open Source Initiatives',
    location: 'Dhaka, Bangladesh',
    description:
      'Assisted in building responsive dashboards, optimized state machines, and authored open-source components for developer workflows.',
    keyAchievements: [
      'Refactored legacy UI components into reusable, accessible design token modules.',
      'Constructed automated regression integration test pipelines reducing deploy cycle times.',
      'Collaborated on open-source agent tooling and developer documentation.',
    ],
    technologies: ['React', 'TypeScript', 'Dart', 'Material Design', 'REST APIs', 'Linux'],
  },
];

export const backendSpecifications: readonly BackendSpecification[] = [
  {
    id: 'python-ai',
    displayName: 'Python AI Engine (LangGraph & FastAPI)',
    technology: 'Python 3.12 / FastAPI / LangGraph / AsyncIO',
    paradigm: 'Autonomous Multi-Agent Cyclical Graph with Self-Critique',
    architecturePattern: 'Stateful Agentic Graph & Semantic RAG',
    defaultPort: 8000,
    status: 'connected',
    latencyMs: 18,
    features: [
      'Self-correcting LangGraph reflection loop',
      'Streaming token responses via Server-Sent Events (SSE)',
      'Vector search integration with Qdrant / Chroma',
      'Pydantic v2 strict schema validation',
    ],
    codeSnippet: `@app.post("/v1/agent/chat")
async def stream_agent(request: AgentRequest):
    graph = create_reflective_agent_graph()
    async def event_generator():
        async for chunk in graph.astream(request.prompt):
            yield f"data: {chunk.json()}\\n\\n"
    return StreamingResponse(event_generator(), media_type="text/event-stream")`,
  },
  {
    id: 'aspnet-core',
    displayName: 'ASP.NET Core 9 (C# 13)',
    technology: '.NET 9 / ASP.NET Core Minimal APIs / MediatR',
    paradigm: 'Clean Hexagonal Architecture with CQRS',
    architecturePattern: 'Domain-Driven Design (DDD) with Strongly Typed Aggregates',
    defaultPort: 5001,
    status: 'simulated',
    latencyMs: 8,
    features: [
      'CQRS separation with MediatR queries & commands',
      'Entity Framework Core with compiled queries',
      'Built-in rate limiting, memory caching, and OpenTelemetry',
      'Ahead-Of-Time (AOT) compilation ready',
    ],
    codeSnippet: `var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
var app = builder.Build();

app.MapGet("/api/v1/portfolio/profile", async (ISender mediator) => {
    var result = await mediator.Send(new GetPortfolioProfileQuery());
    return Results.Ok(result);
});`,
  },
  {
    id: 'go-gin',
    displayName: 'Go Gin Microservice',
    technology: 'Go 1.24 / Gin-Gonic / Goroutines',
    paradigm: 'High-Throughput Concurrent Microservice',
    architecturePattern: 'Layered Hexagonal Architecture with Interface Ports',
    defaultPort: 8080,
    status: 'simulated',
    latencyMs: 4,
    features: [
      'Zero-allocation JSON serialization',
      'Massive concurrency handled via lightweight goroutines',
      'Structured Zap logging with correlation IDs',
      'Microsecond latency request pipeline',
    ],
    codeSnippet: `func SetupRouter(repo domain.PortfolioRepository) *gin.Engine {
    r := gin.New()
    r.Use(gin.Recovery(), middleware.Logger())
    v1 := r.Group("/api/v1")
    {
        v1.GET("/projects", func(c *gin.Context) {
            projects, err := repo.GetAll(c.Request.Context())
            if err != nil { c.JSON(500, gin.H{"error": err.Error()}); return }
            c.JSON(200, projects)
        })
    }
    return r
}`,
  },
  {
    id: 'rust-axum',
    displayName: 'Rust Axum Engine',
    technology: 'Rust 2024 Edition / Axum / Tokio Runtime',
    paradigm: 'Memory-Safe Zero-Cost Asynchronous Engine',
    architecturePattern: 'Strict Type-Safe Tower Service Architecture',
    defaultPort: 3000,
    status: 'simulated',
    latencyMs: 2,
    features: [
      'Zero data races guaranteed by the Rust borrow checker',
      'Ultra-compact binary with zero runtime garbage collection pauses',
      'Tokio multi-threaded work-stealing executor',
      'Sub-millisecond P99 response time',
    ],
    codeSnippet: `#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/api/v1/health", get(health_handler))
        .route("/api/v1/projects", get(get_projects_handler))
        .layer(TraceLayer::new_for_http());
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}`,
  },
  {
    id: 'mock-standalone',
    displayName: 'Embedded Standalone Gateway (Offline First)',
    technology: 'Native In-Memory Gateway / Pure Standard TS',
    paradigm: 'Zero-Dependency Resilient Client-Side Fallback',
    architecturePattern: 'Self-Contained Local In-Memory Port Implementation',
    defaultPort: 0,
    status: 'mock_active',
    latencyMs: 1,
    features: [
      '100% offline operational guarantee',
      'Instantaneous client-side response with zero network latency',
      'Exact mirror of production backend data contracts',
      'Built-in simulated network delay for realism testing',
    ],
    codeSnippet: `export class MockPortfolioRepository implements IPortfolioRepository {
  async getProfile(): Promise<Result<Profile>> {
    return Result.ok(portfolioProfile);
  }
}`,
  },
];
