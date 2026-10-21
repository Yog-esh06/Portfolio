import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Foundational programming languages used across production systems, systems research, and high-performance services.",
    skills: [
      { name: "Python", highlight: true, level: "Advanced" },
      { name: "TypeScript", highlight: true, level: "Proficient" },
      { name: "JavaScript (ES6+)", highlight: false, level: "Proficient" },
      { name: "C & C++", highlight: true, level: "Proficient" },
      { name: "Java", highlight: false, level: "Proficient" },
      { name: "SQL (PostgreSQL)", highlight: true, level: "Advanced" }
    ]
  },
  {
    title: "AI/ML & Operations Research",
    description: "Mathematical modeling, operations research solvers, reinforcement learning, and agentic reasoning architectures.",
    skills: [
      { name: "Google OR-Tools (VRP/CVRPTW)", highlight: true, level: "Operations Research" },
      { name: "Reinforcement Learning (MaskablePPO)", highlight: true, level: "SB3 / Gym" },
      { name: "Causal Inference (SCMs & Doubly-Robust)", highlight: true, level: "Do-Calculus" },
      { name: "PyTorch & Deep CNNs", highlight: true, level: "Model Training" },
      { name: "scikit-learn & XGBoost", highlight: false, level: "Ensemble Models" },
      { name: "Acoustic Signal Processing (Librosa)", highlight: false, level: "MFCC / FFT" },
      { name: "LangChain & Swarm Orchestration", highlight: true, level: "Agentic Systems" },
      { name: "Model Context Protocol (MCP)", highlight: true, level: "Anthropic MCP" }
    ]
  },
  {
    title: "Full-Stack & Backend Systems",
    description: "Asynchronous API engines, event queues, high-performance web applications, and responsive interfaces.",
    skills: [
      { name: "FastAPI (Async Python)", highlight: true, level: "Production API" },
      { name: "Next.js (App Router & Static)", highlight: true, level: "Modern Frontend" },
      { name: "React 19 & TypeScript", highlight: true, level: "Component Arch" },
      { name: "Celery & Redis Worker Queues", highlight: true, level: "Distributed Jobs" },
      { name: "Tailwind CSS & Design Systems", highlight: false, level: "Responsive UX" },
      { name: "Flask & WebSockets", highlight: false, level: "Streaming Telemetry" }
    ]
  },
  {
    title: "Data Stores & Cloud Reliability",
    description: "Persistent transactional databases, row-level security, memory caches, and cloud virtualization monitoring.",
    skills: [
      { name: "PostgreSQL & Supabase RLS", highlight: true, level: "Row-Level Security" },
      { name: "Redis In-Memory Caching", highlight: false, level: "Pub/Sub & Queues" },
      { name: "Docker & Container Orchestration", highlight: true, level: "Containerization" },
      { name: "GitHub Actions CI/CD", highlight: false, level: "Automated Testing" },
      { name: "Hypervisor & VM Telemetry", highlight: true, level: "Fault Detection" },
      { name: "Controls Assurance & ITGC", highlight: true, level: "Deloitte Experience" }
    ]
  }
];

