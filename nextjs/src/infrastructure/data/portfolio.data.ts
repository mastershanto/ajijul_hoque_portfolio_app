import { BackendSpecification, Experience, Profile, Project, Skill } from '../../core/domain/entities';

export const portfolioProfile: Profile = {
  id: 'ajijul-hoque-profile',
  name: 'Ajijul Hoque',
  title: 'Mobile Application Developer | Flutter Specialist',
  roles: [
    'Mobile Application Developer',
    'Flutter & Dart Specialist',
    'Cross-Platform Mobile Engineer',
    'BLoC & Riverpod State Architect',
    'Clean Mobile Architecture Advocate',
  ],
  bioSummary:
    'Mobile Application Developer with 2 years of professional experience crafting high-performance, fluid, and scalable cross-platform mobile apps in Flutter & Dart. Currently building production mobile solutions at Softvence IT Limited (1 year 7 months running).',
  fullBio: [
    'I am a passionate Mobile Application Developer specializing in Flutter and Dart, with 2 years of professional experience shipping cross-platform applications across iOS and Android.',
    'For the past 1 year and 7 months (running), I have been contributing at Softvence IT Limited, architecting production-grade mobile applications with clean separation of concerns, BLoC/Riverpod state management, and reliable REST API and Firebase integrations.',
    'I focus on delivering fluid 60-120 FPS user interfaces, glassmorphic and Material 3 design systems, offline-first data caching with SQLite/Hive, and maintaining 99.8%+ crash-free user sessions across real-world deployments.',
  ],
  availabilityStatus: 'available',
  location: 'Dhaka, Bangladesh (Remote Worldwide)',
  email: 'ajijul.hoque.dev@gmail.com',
  githubUrl: 'https://github.com/ajijulhoque',
  linkedinUrl: 'https://linkedin.com/in/ajijulhoque',
  twitterUrl: 'https://twitter.com/ajijulhoque',
  resumeDownloadUrl: '#contact',
  stats: {
    yearsExperience: 2,
    productionAgentsDeployed: 12, // Production mobile releases
    systemsArchitected: 16, // Clean mobile modules & apps
    clientSatisfactionRate: 100,
  },
};

export const portfolioSkills: readonly Skill[] = [
  // Mobile & Cross-Platform (Primary Focus)
  {
    id: 'flutter-dart',
    name: 'Flutter & Dart SDK',
    category: 'fullstack-mobile',
    proficiency: 98,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Production cross-platform mobile apps for iOS & Android, Custom Painters, 120 FPS animations, and platform channel bridging.',
    tags: ['Flutter 3.x', 'Dart 3', 'Material 3', 'Cupertino', 'Canvas & Animations'],
  },
  {
    id: 'bloc-riverpod',
    name: 'State Management (BLoC & Riverpod)',
    category: 'fullstack-mobile',
    proficiency: 96,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Predictable, reactive, event-driven state orchestration with flutter_bloc, Cubits, and Riverpod providers for testable mobile apps.',
    tags: ['flutter_bloc', 'Riverpod 2', 'Cubit', 'Reactive Streams', 'Dependency Injection'],
  },
  {
    id: 'clean-mobile-arch',
    name: 'Mobile Clean Architecture',
    category: 'fullstack-mobile',
    proficiency: 95,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Strict separation of Presentation, Domain (Use Cases), and Data (DataSources & Repositories) layers with Functional Either/Result patterns.',
    tags: ['Domain-Driven', 'Use Cases', 'Repository Pattern', 'SOLID', 'Dartz/FP'],
  },
  {
    id: 'mobile-ui-ux',
    name: 'Mobile UI/UX & Responsive Glassmorphism',
    category: 'fullstack-mobile',
    proficiency: 94,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Pixel-perfect Figma-to-code implementations, responsive layouts across tablets and phones, fluid micro-interactions.',
    tags: ['Figma to Flutter', 'Glassmorphism', 'Responsive Grid', 'Lottie Animations'],
  },
  {
    id: 'offline-local-db',
    name: 'Offline-First & Local Persistence',
    category: 'fullstack-mobile',
    proficiency: 92,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Robust local caching, relational local schemas with SQLite/Floor, and ultra-fast key-value storage with Hive & SharedPreferences.',
    tags: ['Hive DB', 'SQLite / sqflite', 'Secure Storage', 'Offline Sync'],
  },

  // Backend, APIs & Network
  {
    id: 'rest-apis-dio',
    name: 'RESTful APIs & Dio Network Client',
    category: 'backend-distributed',
    proficiency: 95,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Complex network interceptors, automated JWT token refresh pipelines, custom error mappers, and WebSocket streaming.',
    tags: ['Dio', 'Retrofit', 'Interceptors', 'WebSockets', 'JSON Serialization'],
  },
  {
    id: 'python-fastapi',
    name: 'Backend Integration (FastAPI & Node.js)',
    category: 'backend-distributed',
    proficiency: 88,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'High-throughput async backend endpoints, webhook handlers, and serverless API integration for mobile clients.',
    tags: ['FastAPI', 'Node.js', 'AsyncIO', 'REST', 'Pydantic'],
  },

  // Cloud, Firebase & App Deployment
  {
    id: 'firebase-mobile',
    name: 'Firebase Suite for Mobile',
    category: 'cloud-devops',
    proficiency: 94,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'Push notifications via Firebase Cloud Messaging (FCM), Cloud Firestore real-time sync, Firebase Auth, and Crashlytics.',
    tags: ['FCM Push', 'Firestore', 'Auth Guards', 'Crashlytics', 'Remote Config'],
  },
  {
    id: 'app-deployment-cicd',
    name: 'App Store & Google Play Release CI/CD',
    category: 'cloud-devops',
    proficiency: 90,
    yearsOfExperience: 2,
    isPrimary: true,
    description: 'App bundle generation, keystore signing, App Store Connect provisioning, Google Play Console release track management, and GitHub Actions.',
    tags: ['Play Console', 'App Store Connect', 'GitHub Actions', 'Signing & Proguard'],
  },

  // AI & Cross-Platform Web
  {
    id: 'ai-mobile-agents',
    name: 'AI Integration in Mobile Apps',
    category: 'ai-agents',
    proficiency: 90,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Integrating multimodal LLM APIs (Gemini, OpenAI), dynamic voice assistants, and on-device intelligent features into Flutter apps.',
    tags: ['Gemini API', 'Multimodal', 'Streaming Chat', 'AI Assistants'],
  },
  {
    id: 'nextjs-web',
    name: 'Next.js & React Companion Web Apps',
    category: 'fullstack-mobile',
    proficiency: 88,
    yearsOfExperience: 2,
    isPrimary: false,
    description: 'Admin dashboards, portfolio platforms, and companion web portals built with Next.js, React, and TypeScript.',
    tags: ['Next.js', 'React', 'TypeScript', 'Web Dashboards'],
  },
];

export const portfolioProjects: readonly Project[] = [
  {
    id: 'proj-1',
    slug: 'flutter-production-mobile-app',
    title: 'Enterprise Multi-Tenant Mobile CRM',
    summary:
      'High-performance cross-platform mobile application engineered with Flutter, BLoC state management, Clean Architecture, and real-time offline synchronization.',
    problemStatement:
      'Mobile field teams suffered from lost connectivity, sync conflicts, and laggy rendering on low-end Android and iOS devices.',
    architecturalSolution:
      'Engineered an offline-first mobile architecture utilizing Hive local storage, background sync queues, and BLoC pattern for predictable reactive UI states with 60-120 FPS hardware acceleration.',
    tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Clean Architecture', 'Hive', 'Firebase'],
    category: 'cross-platform',
    featured: true,
    metrics: ['99.8% crash-free sessions', 'Sub-16ms frame render times', '100% offline data resilience'],
    githubUrl: 'https://github.com/ajijulhoque/flutter-enterprise-crm',
    liveUrl: '#hero',
    primaryColor: '#38BDF8',
    iconName: 'Smartphone',
  },
  {
    id: 'proj-2',
    slug: 'flutter-cross-platform-showcase',
    title: 'Glassmorphic Multi-Platform Application',
    summary:
      'Fluid, responsive cross-platform application rendered via Flutter, featuring reactive state machines and unified codebase compilation for mobile and web.',
    problemStatement:
      'Maintaining separate codebases for iOS, Android, and Web triples maintenance overhead and introduces fragmented visual design language.',
    architecturalSolution:
      'Crafted a bespoke Material 3 glassmorphic design system in Flutter with 120 FPS hardware acceleration, decoupled BLoC state machines, and responsive multi-window desktop layouts.',
    tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Glassmorphism', 'Web/Desktop/Mobile'],
    category: 'cross-platform',
    featured: true,
    metrics: ['60-120 FPS buttery rendering', 'Single codebase for mobile & web', 'Accessible contrast'],
    githubUrl: 'https://github.com/ajijulhoque/ajijul_hoque_portfolio',
    liveUrl: '#hero',
    primaryColor: '#F472B6',
    iconName: 'Smartphone',
  },
  {
    id: 'proj-3',
    slug: 'ai-mobile-smart-copilot',
    title: 'AI Smart Mobile Assistant & Scanner',
    summary:
      'Intelligent Flutter mobile application integrating Gemini Multimodal API for real-time document analysis, smart summarization, and interactive voice assistance.',
    problemStatement:
      'Traditional mobile OCR and scanning applications lack contextual semantic understanding and require cumbersome manual data entry.',
    architecturalSolution:
      'Built a camera pipeline streaming compressed frames to Gemini multimodal endpoints with streaming SSE token responses, local SQLite history caching, and Riverpod state management.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Gemini API', 'SQLite', 'Camera SDK'],
    category: 'cross-platform',
    featured: true,
    metrics: ['< 350ms initial token stream', '98.5% OCR extraction accuracy', 'Zero latency offline history'],
    githubUrl: 'https://github.com/ajijulhoque/ai-mobile-assistant',
    liveUrl: '#ai-copilot',
    primaryColor: '#818CF8',
    iconName: 'Network',
  },
  {
    id: 'proj-4',
    slug: 'clean-architecture-mobile-suite',
    title: 'Flutter Clean Architecture Foundation',
    summary:
      'Production-ready boilerplate and modular architecture for enterprise Flutter applications, decoupling domain rules from external data sources and UI widgets.',
    problemStatement:
      'Unstructured Flutter projects become unmaintainable spaghetti code as team size and feature requirements expand.',
    architecturalSolution:
      'Constructed a 3-tier Clean Architecture blueprint (Presentation, Domain, Data) with strict dependency inversion, Mockable repository contracts, and comprehensive unit tests.',
    tags: ['Flutter', 'Clean Architecture', 'SOLID', 'Dio', 'GetIt / Injectable'],
    category: 'enterprise',
    featured: true,
    metrics: ['85%+ test code coverage', 'Zero UI-data layer coupling', 'Rapid feature onboarding'],
    githubUrl: 'https://github.com/ajijulhoque/flutter-clean-architecture-template',
    liveUrl: '#backend-interop',
    primaryColor: '#10B981',
    iconName: 'Cpu',
  },
  {
    id: 'proj-5',
    slug: 'multi-tenant-cloud-crm',
    title: 'Realtime Cloud Messaging & Booking App',
    summary:
      'Mobile application with Firebase Cloud Messaging (FCM), real-time notifications, interactive booking flows, and payment gateway integration.',
    problemStatement:
      'Users missed real-time appointment alerts and experienced drop-offs during multi-step mobile checkout processes.',
    architecturalSolution:
      'Implemented background and foreground FCM notification handlers, deep linking routing with go_router, and transactional Firestore triggers.',
    tags: ['Flutter', 'FCM', 'Firebase Auth', 'go_router', 'Stripe SDK'],
    category: 'cross-platform',
    featured: false,
    metrics: ['99.9% push delivery rate', '42% faster checkout completion', 'Deep linking support'],
    githubUrl: 'https://github.com/ajijulhoque/flutter-realtime-booking',
    liveUrl: '#contact',
    primaryColor: '#F59E0B',
    iconName: 'Shield',
  },
];

export const portfolioExperiences: readonly Experience[] = [
  {
    id: 'exp-1',
    period: '2024 - Present (1 yr 7 mos running)',
    role: 'Mobile Application Developer (Flutter)',
    organization: 'Softvence IT Limited',
    location: 'Dhaka, Bangladesh',
    description:
      'Engineering and scaling high-performance cross-platform mobile applications for iOS and Android using Flutter and Dart, with a strong focus on Clean Architecture and fluid user experiences.',
    keyAchievements: [
      'Architected and delivered multiple client mobile applications with BLoC and Riverpod, ensuring strict separation of presentation and business logic.',
      'Integrated complex RESTful APIs, Firebase Push Notifications (FCM), background sync, and offline persistence with Hive and SQLite.',
      'Optimized widget build hierarchies, image caching, and animations to sustain smooth 60-120 FPS rendering with 99.8%+ crash-free user sessions.',
      'Handled end-to-end application build releases, code signing, and deployments across Google Play Console and Apple App Store.',
    ],
    technologies: ['Flutter', 'Dart', 'BLoC Pattern', 'Riverpod', 'Clean Architecture', 'REST APIs', 'Firebase FCM', 'Git'],
  },
  {
    id: 'exp-2',
    period: '2023 - 2024 (~5-6 mos)',
    role: 'Junior Mobile Application Developer',
    organization: 'Digital Software & Mobile Labs',
    location: 'Dhaka, Bangladesh',
    description:
      'Collaborated on cross-platform mobile application development, building responsive Flutter user interfaces and integrating backend services.',
    keyAchievements: [
      'Translated Figma design mockups into pixel-perfect responsive Flutter screens across diverse smartphone and tablet dimensions.',
      'Implemented local SQLite data storage and state management using Provider and Riverpod.',
      'Conducted automated widget testing, fixed UI regressions, and improved overall mobile application load times by 35%.',
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'SQLite', 'REST APIs', 'Material Design', 'Git'],
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
