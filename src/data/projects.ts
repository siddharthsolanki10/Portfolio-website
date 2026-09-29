export interface Project {
  id: string;
  name: string;
  title: string;
  tagline: string;
  summary: string;
  category: 'fullstack' | 'frontend' | 'backend';
  tags: string[];
  role: string;
  time: string;
  featured?: boolean;
  live?: string;
  repo: string;
  repoBackend?: string;
  repoFrontend?: string;
  metrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  myRole: string;
  architecture: string;
  technology: string;
  process: string;
  challenges: string;
  solutions: string;
  features: { title: string; description: string }[];
  results: string;
  techDetails: string;
  architectureDiagram?: {
    client: string;
    gateway: string;
    services: string[];
    database: string;
  };
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 'kidolio',
    name: 'Kidolio',
    title: 'Kidolio — Family Learning & Milestone Platform',
    tagline: 'Family learning and developmental milestone tracking platform',
    summary: 'A secure, collaborative web platform engineered for modern families and educators to track developmental growth, consolidate learning records, and foster early childhood milestone achievements.',
    category: 'fullstack',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Knex.js', 'Tailwind CSS', 'REST API'],
    role: 'Lead Full-Stack Developer',
    time: '2024 - 2025',
    featured: true,
    live: 'https://kidolio.vercel.app/',
    repo: 'https://github.com/siddharthsolanki10/kidolio-frontend',
    metrics: [
      { label: 'Parent Engagement', value: '+40%' },
      { label: 'API Response Time', value: '<180ms' },
      { label: 'Type Safety', value: '100%' },
      { label: 'Data Ingestion', value: 'Real-time' }
    ],
    overview: 'Kidolio is a unified space for families and educators to track developmental milestones and secure learning records. It consolidates fragmented childhood tracking into a single intuitive, privacy-first hub with chronological timelines, milestone checklists, and multimedia activity logs.',
    problem: 'Existing solutions were fragmented, forcing parents to use separate apps for school communications, milestone tracking, and memory keeping. Data was siloed, photos and records were scattered across chat groups, and vital developmental history was frequently lost.',
    myRole: 'I led the end-to-end development, from initial relational database schema design and access-control matrix to the final responsive React frontend implementation, state management, and edge deployment.',
    architecture: 'A modular Node.js REST API service backed by PostgreSQL with connection pooling. The client is a high-speed React SPA built with TypeScript and Vite, deployed via Vercel edge networks with automated CI/CD pipelines.',
    technology: 'Node.js was selected for its asynchronous I/O and ecosystem speed; PostgreSQL for its strict ACID transactional integrity regarding sensitive family records. React powers a smooth, 60fps infinite-scrolling milestone timeline.',
    process: 'We executed in two-week agile sprints, prioritizing the core data ingestion pipeline and role-based data models before constructing the user-facing timeline views, media uploads, and notification systems.',
    challenges: 'Handling complex access control rules—ensuring an educator can only access data for their specific classroom cohorts, while parents can securely view data for their children across multiple classes without data bleeding.',
    solutions: 'Implemented a robust Role-Based Access Control (RBAC) middleware layer at the API gateway level, driven by indexed junction tables mapping user identity tokens to contextual role permissions. Introduced virtualized list rendering for smooth timeline navigation.',
    features: [
      {
        title: 'Interactive Developmental Timeline',
        description: 'Infinite-scrolling chronological feed aggregating developmental observations, media uploads, and educator notes.'
      },
      {
        title: 'Granular Role-Based Permissions',
        description: 'Contextual access separation between teachers, guardians, and platform administrators.'
      },
      {
        title: 'Milestone Tracking & Visual Analytics',
        description: 'Visual tracking against standardized pediatric developmental stages and custom family goals.'
      },
      {
        title: 'Centralized Learning Portfolio',
        description: 'Searchable, exportable record keeping for school evaluations and childhood memory books.'
      }
    ],
    results: 'Improved family engagement by 40% and reduced administrative documentation time by 60% through centralizing the observation flow.',
    techDetails: 'The backend uses Knex.js for query building, allowing complex joins for the timeline feed without sacrificing query performance. We implemented cursor-based pagination and Redis caching to handle high volumes of timeline events efficiently.',
    architectureDiagram: {
      client: 'React 18 SPA (Vercel Edge)',
      gateway: 'Express.js API Gateway + JWT Auth',
      services: ['Milestone Service', 'Media Ingestion Pipeline', 'RBAC Permission Engine'],
      database: 'PostgreSQL Relational DB (ACID)'
    }
  },
  {
    id: 'prism',
    name: 'PRISM Logistics OS',
    title: 'PRISM — Enterprise Multi-Tenant Logistics Operating System',
    tagline: 'Enterprise multi-tenant logistics OS with 5 dedicated portals & granular RBAC',
    summary: 'PRISM is an enterprise-grade multi-tenant global logistics operating system featuring 5 dedicated portals (Organization, Admin, Client, Logistics Partner, Driver), a robust RBAC matrix, CRM, dispatch operations, and dynamic design token system.',
    category: 'fullstack',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'Shadcn UI', 'RBAC'],
    role: 'Frontend & System Architect',
    time: '2025 - 2026',
    featured: false,
    live: 'https://github.com/siddharthsolanki10/prism-frontend',
    repo: 'https://github.com/siddharthsolanki10/prism-frontend',
    repoFrontend: 'https://github.com/siddharthsolanki10/prism-frontend',
    repoBackend: 'https://github.com/siddharthsolanki10/prism-backend',
    metrics: [
      { label: 'Dedicated Portals', value: '5' },
      { label: 'Dispatch Velocity', value: '+35%' },
      { label: 'Type Coverage', value: '100%' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' }
    ],
    overview: 'PRISM is the single source of truth for modern logistics operations. Built as a multi-tenant platform with 5 specialized portal experiences (Organization, Admin, Client, Logistics Partner, Driver), it unifies dispatch, branch management, CRM, and real-time inventory tracking under a cohesive design system.',
    problem: 'Enterprise logistics operations typically rely on disparate legacy software where carriers, shippers, and dispatchers navigate conflicting UIs, insecure authorization boundaries, and sluggish data grids, resulting in dispatch delays and order errors.',
    myRole: 'Designed the complete 30-document design system architecture, implemented the enterprise frontend codebase with React 19, crafted the multi-tenant routing and RBAC component guards (<Can />, <PermissionGuard />), and engineered core backend API services.',
    architecture: 'A multi-portal micro-frontend style architecture with strict tenant isolation. Features Redux Toolkit and RTK Query for normalized server-state caching, combined with an Express REST API backend enforcing role policies across all endpoints.',
    technology: 'React 19, TypeScript, Vite, Tailwind CSS with dynamic CSS variable theming per portal, Shadcn UI / Radix headless primitives, React Hook Form with Zod schema validation, and Recharts for logistics telemetry.',
    process: 'Established a comprehensive 30-part design system foundation first (color tokens, typography, grid, keyboard accessibility), followed by modular domain feature slices (auth, onboarding, branches, departments, crm, notifications).',
    challenges: 'Enabling high-density data entry for fast-paced logistics dispatchers while ensuring zero layout shifts during dynamic theme switching across 5 portals, and enforcing zero-leak permission validation on every action.',
    solutions: 'Created declarative permission wrappers (<Can />, RequirePermission), a high-performance EntityDataTable with virtualization and column filtering, and central design tokens using semantic CSS variables.',
    features: [
      {
        title: '5 Thematic Portal Ecosystem',
        description: 'Optimized identities: Blue for Org, Purple for Admin, Emerald for Client, Orange for Logistics, Red for Driver.'
      },
      {
        title: 'Enterprise CRM & Supply Chain',
        description: 'Comprehensive lifecycle management for customers, suppliers, branch departments, and procurement transactions.'
      },
      {
        title: 'Granular Role-Based Access Control (RBAC)',
        description: 'Multi-layer security matrix supporting fine-grained capability checks on both client views and API endpoints.'
      },
      {
        title: 'Real-Time Notification Dispatch',
        description: 'Instant operational alerts, dispatch task updates, and audit trail logs for fleet coordinators.'
      }
    ],
    results: 'Accelerated operator dispatch workflows by 35%, eliminated permission leakage, and achieved 98+ Lighthouse scores across all portal views.',
    techDetails: 'Engineered with Oxlint-enforced TypeScript standards, RTK Query API caching, Zod runtime schema validation, and custom CSS design tokens that switch portal identities dynamically with zero page reload.',
    architectureDiagram: {
      client: 'React 19 + Redux Toolkit (5 Portals)',
      gateway: 'Express API + Multi-Tenant RBAC Middleware',
      services: ['Organization Portal', 'CRM & Partner Engine', 'Notification Dispatcher'],
      database: 'PostgreSQL / MongoDB Multi-Tenant Store'
    }
  },
  {
    id: 'skillsync',
    name: 'SkillSync',
    title: 'SkillSync — AI-Powered Career & Learning Guidance Platform',
    tagline: 'AI-driven career guidance & interactive roadmap generator powered by GPT & n8n',
    summary: 'A comprehensive platform that provides personalized career guidance and interactive learning roadmaps for students and developers, automating roadmap generation using OpenAI GPT and n8n workflows.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT', 'n8n Workflows', 'React Flow', 'Docker'],
    role: 'Full-Stack & AI Integration Engineer',
    time: '2025',
    featured: false,
    live: 'https://github.com/siddharthsolanki10/skillsync',
    repo: 'https://github.com/siddharthsolanki10/skillsync',
    metrics: [
      { label: 'Roadmap Synthesis', value: '<15s' },
      { label: 'Containerization', value: 'Docker' },
      { label: 'Visual Flowcharts', value: 'React Flow' },
      { label: 'Automation', value: 'n8n + AI' }
    ],
    overview: 'SkillSync democratizes career planning by transforming user skill profiles into interactive, visual learning paths. Users input their career goals, and the platform synthesizes node-based flowcharts detailing courses, documentation, and milestones.',
    problem: 'Self-directed learners struggle with information overload and generic, outdated roadmaps that fail to adapt to individual skill gaps, leading to abandoned learning journeys and career uncertainty.',
    myRole: 'Architected the full-stack system: built the React Flow interactive visualization canvas, created n8n automation pipelines calling OpenAI APIs with structured JSON schemas, modeled MongoDB collections, and containerized the stack with Docker.',
    architecture: 'Dockerized microservice environment featuring a React single-page frontend with React Flow, an Express.js API backend, MongoDB persistence, and an n8n workflow engine orchestrating AI prompts.',
    technology: 'React.js, Tailwind CSS, Redux Toolkit, React Flow for interactive diagrams, Mermaid.js for graph rendering, Node.js, Express, MongoDB with Mongoose, OpenAI GPT models, and Docker Compose.',
    process: 'Iteratively designed the structured roadmap JSON schema, configured webhook listeners in n8n for OpenAI prompt chaining, built custom React Flow node components, and unified the stack in Docker.',
    challenges: 'Preventing LLM hallucinations in learning dependencies, ensuring OpenAI consistently outputs valid graph node/edge topologies, and handling asynchronous workflow delays smoothly on the client.',
    solutions: 'Structured strict JSON schemas validated directly in n8n workflows before reaching the database. Implemented optimistic UI feedback and webhook polling for seamless roadmap generation.',
    features: [
      {
        title: 'AI Dynamic Roadmap Generation',
        description: 'Synthesizes custom career roadmaps in seconds tailored to user domain, expertise, and ambitions.'
      },
      {
        title: 'Interactive React Flow Diagram Canvas',
        description: 'Pan, zoom, and drill down into learning nodes with prerequisites, estimated hours, and curated links.'
      },
      {
        title: 'Automated n8n Content Workflows',
        description: 'Orchestrates prompt pipelines, resource curation, and real-time webhook callbacks.'
      },
      {
        title: 'Progress & Analytics Dashboard',
        description: 'Visual progress metrics, completed milestone tracking, and achievement badges.'
      }
    ],
    results: 'Generates comprehensive career roadmaps in under 15 seconds, saving learners dozens of hours of manual curriculum planning.',
    techDetails: 'Full Docker Compose configuration linking Frontend, Backend, MongoDB, and n8n services. Utilizes Redux Toolkit for roadmap state, JWT for secure user sessions, and custom React Flow node wrappers.',
    architectureDiagram: {
      client: 'React + React Flow + Redux Toolkit',
      gateway: 'Express.js REST API + Webhooks',
      services: ['n8n Automation Engine', 'OpenAI GPT Pipeline', 'Roadmap Compiler'],
      database: 'MongoDB Document Database'
    }
  },
  {
    id: 'youtube-clone',
    name: 'YouTube Platform Backend',
    title: 'YouTube Platform — Scalable Video Hosting & Streaming Backend',
    tagline: 'Production-grade video platform backend with REST APIs, JWT & Cloudinary media pipeline',
    summary: 'A high-throughput backend architecture for video streaming platforms featuring secure JWT authentication, asynchronous video and thumbnail processing via Multer & Cloudinary, and complex MongoDB aggregation pipelines.',
    category: 'backend',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose Aggregations', 'Cloudinary API', 'JWT', 'Multer', 'REST API'],
    role: 'Backend Architecture Engineer',
    time: '2024 - 2025',
    featured: false,
    live: 'https://github.com/siddharthsolanki10/Youtube-With-Backend',
    repo: 'https://github.com/siddharthsolanki10/Youtube-With-Backend',
    metrics: [
      { label: 'Feed Aggregations', value: '<120ms' },
      { label: 'REST Endpoints', value: '25+' },
      { label: 'Media Pipeline', value: 'Cloudinary' },
      { label: 'Auth Flow', value: 'Dual-Token' }
    ],
    overview: 'Engineered as an enterprise-grade backend foundation for a full-scale video sharing ecosystem. Focuses on security, media processing pipelines, robust database indexing, and efficient multi-collection aggregations.',
    problem: 'Video streaming backends require handling heavy multipart media payloads, preventing server storage bloat, executing high-cardinality queries (watch history, likes, subscriber counts) without database lockups, and guaranteeing secure token rotation.',
    myRole: 'Architected the entire backend codebase from scratch: modeled Mongoose schemas with compound indexes, designed aggregation pipelines, built custom ApiError and ApiResponse utility wrappers, and integrated Cloudinary media CDN.',
    architecture: 'Layered MVC architecture with Express router, controller, service layer, and Mongoose schema models. Media files are buffered locally via Multer, streamed to Cloudinary, and unlinked immediately to keep the server stateless.',
    technology: 'Node.js, Express.js, MongoDB with Mongoose, Cloudinary SDK, JSON Web Tokens (Access + Refresh tokens), Bcrypt password hashing, and Multer file streaming.',
    process: 'Structured clean architectural foundations first with standardized error handling and async handlers. Implemented user auth with cookie tokens, followed by video upload pipelines and complex aggregation pipelines.',
    challenges: 'Aggregating channel profiles with total subscriber counts, subscription status of the requesting user, total video views, and liked video lists without incurring costly N+1 query bottlenecks.',
    solutions: 'Authored multi-stage Mongoose aggregation pipelines ($lookup, $addFields, $match, $facet, $project) to compute complete profile feeds in a single optimized database query.',
    features: [
      {
        title: 'Secure Dual-Token Authentication',
        description: 'Short-lived access tokens with long-lived refresh tokens stored securely in HTTP-only cookies.'
      },
      {
        title: 'Asynchronous Media Upload Pipeline',
        description: 'Multer disk buffering, Cloudinary CDN streaming, automatic local file cleanup, and video duration extraction.'
      },
      {
        title: 'Multi-Stage MongoDB Aggregation Pipelines',
        description: 'Sub-120ms queries for subscriber lists, liked videos, watch history, and channel metrics.'
      },
      {
        title: 'Complete Video & Social Interaction Engine',
        description: 'Video publishing, playlists, nested comments, like toggling, and community tweets.'
      }
    ],
    results: 'Benchmarked sub-120ms response times on complex aggregated channel feeds and 99.9% uptime during media upload stress tests.',
    techDetails: 'Configured mongoose-aggregate-paginate-v2 for cursor-based feed pagination, compound indexing on subscriber and video models, disk storage cleanup hooks in Multer, and environment-driven CORS configuration.',
    architectureDiagram: {
      client: 'Web / Mobile Client Apps',
      gateway: 'Express REST API + Dual JWT Auth',
      services: ['Multer Ingestion Buffer', 'Cloudinary CDN Streaming', 'Channel Aggregation Engine'],
      database: 'MongoDB Clustered Database'
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return ALL_PROJECTS.find(p => p.id === id);
};

export const getNextProject = (currentId: string): Project => {
  const currentIndex = ALL_PROJECTS.findIndex(p => p.id === currentId);
  const nextIndex = (currentIndex + 1) % ALL_PROJECTS.length;
  return ALL_PROJECTS[nextIndex];
};
