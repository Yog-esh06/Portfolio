import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "strata",
    title: "STRATA",
    tagline: "Operational intelligence for enterprise teams: See what changed. Understand why. Decide what happens next.",
    category: "Agentic AI",
    featured: true,
    featuredOrder: 1,
    badge: "Industry Games Top 8 Finalist (out of 300)",
    status: "Production Prototype",
    summary: "An autonomous operational intelligence platform that monitors enterprise business signals, detects anomalous variances with Sentinel, launches cited multi-agent root cause investigations, and gates remediations through human approval.",
    problem: "Modern business operations generate fragmented metrics across billing, supply chains, customer SLAs, and support queues. When critical variances occur, teams waste hours correlating spreadsheets without traceable evidence or audit chains.",
    solution: "STRATA implements an event-driven telemetry pipeline combined with a FastAPI engine and multi-agent investigation swarm. It enforces an 'Evidence-or-Silence' policy where every claim cites specific telemetry fixtures, backed by a cryptographic audit trail and human-in-the-loop approval gates before running remediation routines.",
    architecture: [
      { name: "Telemetry Ingestion", role: "Signals & Sentinel", detail: "Monitors operational metrics, compares moving baselines, and flags statistical variances." },
      { name: "Multi-Agent Swarm", role: "Cited Investigator", detail: "Dispatches specialized agents to verify prior SOPs, historical cases, and correlate root causes." },
      { name: "Simulation Lab", role: "Counterfactual Test", detail: "Replays hypothetical operational fixes in cloned sandboxes before applying decisions." },
      { name: "Human Gate & Audit", role: "Approval & State", detail: "Requires explicit operator sign-off with tamper-evident audit logs and Supabase RLS." }
    ],
    technologies: ["FastAPI", "Python 3.12", "Next.js", "TypeScript", "Supabase Auth & RLS", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Competition Standing", value: "Top 8 / 300" },
      { label: "Detection Engine", value: "Sub-Second" },
      { label: "Evidence Rigor", value: "100% Grounded" },
      { label: "Security", value: "Row-Level RLS" }
    ],
    githubUrl: "https://github.com/Yog05esh/STRATA",
    demoUrl: "https://strata-ai.me",
    highlights: [
      "Top 8 finalist project at The Industry Games Hackathon among 300+ competitive participants.",
      "Live interactive replay console hosted at strata-ai.me with role-based demo credentials.",
      "Dual-mode architecture: lightweight static replay adapter alongside full-stack FastAPI engine.",
      "Strict 'Evidence-or-Silence' agent design refusing hallucinations without cited data fixtures."
    ]
  },
  {
    id: "aeon",
    title: "Aeon",
    tagline: "A swarm of AI agents that plans, researches, debates, and cites — streamed live.",
    category: "Agentic AI",
    featured: true,
    featuredOrder: 2,
    badge: "Multi-Agent Engine",
    status: "Production Prototype",
    summary: "A distributed multi-agent research and reasoning engine that replaces monolithic prompt engineering with an orchestrated swarm of parallel researchers, synthesizers, and evaluators.",
    problem: "Single-turn LLMs hallucinate citations, struggle with complex multi-hop information retrieval, and lack objective verification of intermediate reasoning steps.",
    solution: "Aeon breaks queries into parallel dependency graphs. Celery worker fleets perform hybrid vector retrieval, an LLM Synthesizer compiles grounded drafts, and an adversarial Critic agent grades drafts against strict evaluation rubrics, recursively refining answers while dynamically updating an interactive knowledge graph.",
    architecture: [
      { name: "Orchestrator", role: "Query Decomposition", detail: "Parses complex research questions into parallel execution tracks with dependency tracking." },
      { name: "Celery Fleet", role: "Distributed Retrieval", detail: "Executes concurrent vector & lexical lookups across partitioned document stores." },
      { name: "Synthesizer", role: "Evidence Compilation", detail: "Weaves extracted source snippets into structured answers with strict citation anchors." },
      { name: "Adversarial Critic", role: "Rubric Evaluation", detail: "Scores drafted findings on grounding, consistency, and completeness before streaming." }
    ],
    technologies: ["Python 3.12", "FastAPI async", "Celery 5.6", "Redis 7.4", "LangChain", "Next.js 16", "TypeScript", "Tailwind v4", "Docker Compose"],
    metrics: [
      { label: "Concurrency", value: "Worker Swarm" },
      { label: "Validation", value: "Critic Gated" },
      { label: "Interface", value: "Live Graph" },
      { label: "Frontend", value: "Next.js 16" }
    ],
    githubUrl: "https://github.com/Yog-esh06/Aeon",
    highlights: [
      "Asynchronous FastAPI backend coupled with distributed Celery 5.6 task workers over Redis 7.4.",
      "Adversarial Critic loop rejecting unsubstantiated assertions until empirical rubric criteria are met.",
      "Streaming interactive knowledge graph visualizing live agent deliberation and semantic citations.",
      "Comprehensive Docker Compose deployment orchestration for zero-friction local execution."
    ]
  },
  {
    id: "waypoint",
    title: "Waypoint",
    tagline: "Adaptive fleet routing platform powered by masked reinforcement learning and combinatorial solvers.",
    category: "Operations Research",
    featured: true,
    featuredOrder: 3,
    badge: "RL + OR-Tools",
    status: "Production Prototype",
    summary: "A decision intelligence platform for dynamic logistics operations where a Maskable Proximal Policy Optimization (PPO) agent learns when to trigger replanning, while Google OR-Tools guarantees feasible vehicle routing under traffic spikes.",
    problem: "Real-world delivery fleets suffer from disruptions such as road closures, order cancellations, and sudden traffic spikes. Continuously solving massive Vehicle Routing Problems (VRP) is computationally prohibitive, while static route schedules lead to missed SLA windows.",
    solution: "Waypoint pairs a discrete-event simulation environment with a masked RL policy (Stable-Baselines3) that monitors disruption severity to determine the exact optimal timestamp to trigger route re-optimization. Google OR-Tools solves the resulting constrained routing problem, maintaining SLA compliance with minimal fleet mileage.",
    architecture: [
      { name: "Seeded Simulator", role: "Discrete Event Core", detail: "Simulates traffic congestion, vehicle breakdowns, and stochastic customer order spikes." },
      { name: "Masked RL Policy", role: "Dynamic Trigger", detail: "MaskablePPO agent evaluates operational state and decides the optimal time to replan." },
      { name: "Google OR-Tools", role: "Exact Routing Solver", detail: "Solves Capacitated Vehicle Routing with Time Windows (CVRPTW) ensuring zero SLA violations." },
      { name: "Fleet Map View", role: "MapLibre GL UI", detail: "Visualizes vehicle breadcrumbs, live waypoints, ETA envelopes, and route adjustments." }
    ],
    technologies: ["Python 3.11", "Google OR-Tools 9.15", "Stable-Baselines3", "Gymnasium 1.x", "FastAPI", "Next.js 16", "Tailwind v4", "MapLibre GL 6", "Docker"],
    metrics: [
      { label: "RL Algorithm", value: "MaskablePPO" },
      { label: "Solver", value: "OR-Tools 9.15" },
      { label: "Map Engine", value: "MapLibre GL" },
      { label: "CI Pipeline", value: "Automated Passing" }
    ],
    githubUrl: "https://github.com/Yog-esh06/Waypoint",
    highlights: [
      "Rigorous operations research design combining mathematical programming with learned decision triggers.",
      "Custom Gymnasium environment with action masking preventing infeasible dispatch decisions.",
      "High-performance interactive geospatial dashboard rendered with MapLibre GL and Recharts 3.",
      "End-to-end continuous integration pipeline validating RL checkpoints and constraint solutions."
    ]
  },
  {
    id: "quarry",
    title: "Quarry",
    tagline: "Causal decision intelligence for interventions you can defend.",
    category: "Causal AI",
    featured: true,
    featuredOrder: 4,
    badge: "Causal AI Platform",
    status: "Production Prototype",
    summary: "A local-first causal inference workbench that separates predictive correlations from intervention outcomes, providing counterfactual estimation and policy optimization under real-world constraints.",
    problem: "Standard supervised machine learning answers 'what outcome is correlated with these features?' but fails catastrophically when evaluating policy interventions because it ignores confounding bias and reverse causality.",
    solution: "Quarry implements Structural Causal Models (SCMs), do-calculus interventions, doubly-robust estimators, and Heterogeneous Treatment Effect (HTE) models. Operators can simulate hypothetical business policy changes (e.g. loan risk thresholds or pricing tiers) and inspect counterfactual outcomes with rigorous confidence bounds.",
    architecture: [
      { name: "Structural Causal Model", role: "DAG Specification", detail: "Formulates explicit causal directed acyclic graphs to identify valid adjustment sets." },
      { name: "Doubly Robust Estimator", role: "Effect Quantification", detail: "Estimates Average and Conditional Treatment Effects resistant to model misspecification." },
      { name: "Counterfactual Engine", role: "Twin-World Simulation", detail: "Computes individual-level 'what-if' outcomes under altered intervention policies." },
      { name: "Policy Optimizer", role: "Constrained Search", detail: "Identifies optimal decision frontiers while satisfying budget and fairness bounds." }
    ],
    technologies: ["Python 3.10+", "FastAPI", "Next.js 16", "TypeScript", "Pytest", "Docker Compose", "Tailwind CSS"],
    metrics: [
      { label: "Reasoning", value: "Counterfactual" },
      { label: "Estimators", value: "Doubly-Robust" },
      { label: "Frontend", value: "Next.js 16" },
      { label: "Test Suite", value: "Passing" }
    ],
    githubUrl: "https://github.com/Yog-esh06/Quarry",
    highlights: [
      "Explicit separation of passive predictive correlation from active intervention counterfactuals.",
      "Controlled synthetic structural causal model benchmark providing access to hidden ground-truth effects.",
      "Strict TypeScript dashboard visualizing causal DAGs, treatment distributions, and policy curves.",
      "Comprehensive test coverage validating causal estimator convergence and identification rules."
    ]
  },
  {
    id: "realcost",
    title: "RealCost",
    tagline: "Uncover the compounding true financial cost of daily habits.",
    category: "FinTech & Full-Stack",
    featured: false,
    badge: "Live Deployed",
    status: "Live Deployed",
    summary: "A sleek dark-mode personal finance utility that computes the hidden annual cost of small recurring habits, with interactive visualizations, savings projections, and Gemini AI optimization insights.",
    problem: "Consumers frequently underestimate the financial drain of small daily expenses (coffee, subscriptions, impulsive ordering) because payments appear trivial in isolation.",
    solution: "RealCost calculates true monthly and yearly expense curves across habit categories, models potential compounding savings if habits are curtailed, and leverages Google Gemini AI to generate actionable habit replacement strategies.",
    architecture: [
      { name: "Interactive Ledger", role: "Client State", detail: "Dynamic habit tracking with real-time frequency recalculations and JSON data export." },
      { name: "Compounding Engine", role: "Financial Projection", detail: "Projects multi-year opportunity costs and potential savings portfolios." },
      { name: "Gemini AI Advisor", role: "Smart Insights", detail: "Evaluates expense clusters to suggest realistic behavioural swaps with quantifiable savings." }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Chart.js", "Google Gemini AI API", "Vercel"],
    metrics: [
      { label: "Deployment", value: "Vercel Edge" },
      { label: "AI Model", value: "Gemini 1.5" },
      { label: "Theme", value: "OLED Dark" },
      { label: "Responsiveness", value: "Mobile First" }
    ],
    githubUrl: "https://github.com/Yog-esh06/RealCost",
    demoUrl: "https://realcost-sigma.vercel.app",
    highlights: [
      "Live production deployment with active users at realcost-sigma.vercel.app.",
      "Graceful degradation: works seamlessly client-side without API keys for all calculations.",
      "Interactive pie and bar charts illustrating category expense density and potential savings.",
      "Responsive, mobile-first design built with clean dark aesthetic."
    ]
  },
  {
    id: "thermotwin",
    title: "ThermoTwin",
    tagline: "Physics-based digital twin with ML forecasting for data center cooling optimization.",
    category: "Systems & Infra",
    featured: false,
    badge: "34 Pytests Passing",
    status: "Benchmarked",
    summary: "A digital twin prototype simulating rack-level thermodynamics in data halls. Integrates multi-horizon ML inlet temperature forecasting with counterfactual cooling controls to eliminate hotspots with minimal chiller energy.",
    problem: "Data centers consume massive electrical power for cooling. Overcooling to avoid thermal breaches wastes millions in energy, while undercooling risks catastrophic server hardware throttling.",
    solution: "ThermoTwin combines a transient thermal fluid model of 4-12 server racks with multi-horizon predictive models (XGBoost, GRU, Random Forest). When an inlet breach is forecasted, the system clones the twin across 6 counterfactual cooling setpoints to select the safest, lowest-energy action.",
    architecture: [
      { name: "Physics Engine", role: "Rack & Air Model", detail: "Simulates server workload, recirculation, chilled water loop, and ambient weather cycles." },
      { name: "Predictive Forecaster", role: "Multi-Horizon ML", detail: "Forecasts rack inlet temperatures 5 to 60 minutes into the future using XGBoost & GRUs." },
      { name: "Twin Cloner", role: "Counterfactual Test", detail: "Clones the current thermal state into 6 parallel models to simulate proposed fan/chiller setpoints." }
    ],
    technologies: ["Python 3.11", "Flask", "PyTorch", "XGBoost", "FastAPI", "Chart.js", "Playwright"],
    metrics: [
      { label: "Test Suite", value: "34 Passed" },
      { label: "Forecast Horizons", value: "5 to 60 min" },
      { label: "Simulated Scale", value: "12 Racks" },
      { label: "Safety Standard", value: "ASHRAE 27°C" }
    ],
    highlights: [
      "34 automated pytest suites verifying thermodynamic conservation laws and state cloning.",
      "Supports 5 simulated climate profiles including coastal monsoon, hot desert, and temperate.",
      "Comparative benchmark demonstrating significant energy reduction over conventional reactive setpoints."
    ]
  },
  {
    id: "chronosops",
    title: "ChronosOps AI",
    tagline: "Multivariate operational telemetry intelligence and transparent anomaly detection.",
    category: "Systems & Infra",
    featured: false,
    status: "Production Prototype",
    summary: "A transparent workbench for analyzing multivariate operational time-series data from infrastructure, energy grids, and IoT fleets without opaque black-box models.",
    problem: "Operational engineers are overwhelmed by high-dimensional telemetry metrics, while black-box anomaly detectors alert without explaining underlying root causes or contributing sensors.",
    solution: "Processes time-series in-memory with interpretable baseline statistical estimators, decomposes seasonal and cyclical trends, and generates plain-language operational briefs isolating top contributing signals.",
    architecture: [
      { name: "Telemetry Ingestion", role: "Pandas Vector Engine", detail: "Cleans, aligns timestamps, and resamples uneven sensor streams in memory." },
      { name: "Decomposition Engine", role: "Trend & Seasonality", detail: "Extracts underlying operational cycles from transient noise." },
      { name: "Attribution Classifier", role: "Contributor Ranking", detail: "Ranks individual sensor contributions to anomalous deviations." }
    ],
    technologies: ["Python 3.10+", "FastAPI", "Pandas", "scikit-learn", "Pytest"],
    metrics: [
      { label: "Execution", value: "In-Memory" },
      { label: "Interpretability", value: "High" },
      { label: "API Framework", value: "FastAPI" }
    ],
    highlights: [
      "Zero data persistence design guaranteeing complete operational telemetry privacy.",
      "Provides interpretable decomposition baselines rather than uninspectable deep nets."
    ]
  },
  {
    id: "heavyhub",
    title: "HeavyHub",
    tagline: "Marketplace and booking engine for agricultural and construction equipment in India.",
    category: "FinTech & Full-Stack",
    featured: false,
    status: "Production Prototype",
    summary: "A full-stack equipment rental and procurement platform catering to Indian construction and farming sectors, featuring role-based dashboards, driver applications, and realtime communications.",
    problem: "Heavy machinery procurement in tier-2/3 Indian regions is plagued by informal brokering, non-transparent pricing, lack of verified operators, and fragmented logistics.",
    solution: "HeavyHub provides verified equipment listings, multi-role access (renters, owners, certified drivers, and admins), cart workflows, and direct messaging powered by Supabase Realtime.",
    architecture: [
      { name: "Role-Based Engine", role: "Access Control", detail: "Segmented portals for machinery owners, renters, and licensed heavy equipment drivers." },
      { name: "Realtime Broker", role: "Supabase Pub/Sub", detail: "Coordinates real-time booking notifications and operator chat." }
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase Auth & DB", "TypeScript"],
    metrics: [
      { label: "Database", value: "PostgreSQL" },
      { label: "Auth Provider", value: "Supabase" },
      { label: "Realtime", value: "WebSockets" }
    ],
    githubUrl: "https://github.com/Yog-esh06/Heavy-Hub",
    highlights: [
      "Custom role onboarding with active switching between equipment owner and renter roles.",
      "Location-aware vehicle discovery and dynamic booking cart management."
    ]
  },
  {
    id: "trestle",
    title: "Trestle",
    tagline: "Local-first infrastructure control plane and policy enforcement engine.",
    category: "Systems & Infra",
    featured: false,
    status: "Production Prototype",
    summary: "An internal developer platform reference architecture providing complete observability, policy enforcement, and audit trails for microservice application delivery.",
    problem: "Development teams struggle with opaque deployment environments, drift between staging and production, and lack of pre-flight policy compliance checks.",
    solution: "Trestle provides a single pane of glass for registering microservices, tracking environment variables, running automated policy audits, and reviewing delivery outcomes.",
    architecture: [
      { name: "Control Plane", role: "FastAPI Daemon", detail: "Tracks environment state, application configurations, and operation logs." },
      { name: "Policy Validator", role: "Compliance Rules", detail: "Inspects manifests against security and infrastructure policies before delivery." }
    ],
    technologies: ["Python 3.11+", "Next.js 15", "GitHub Actions CI", "TypeScript"],
    metrics: [
      { label: "CI Automation", value: "Passing" },
      { label: "Architecture", value: "Control Plane" }
    ],
    githubUrl: "https://github.com/Yog-esh06/Trestle-",
    highlights: [
      "Local-first control plane architecture with fully automated GitHub Actions CI testing.",
      "Clear audit logging for every configuration change and application deployment event."
    ]
  },
  {
    id: "spf",
    title: "Student Performance Prediction",
    tagline: "Explainable machine learning framework with SHAP uncertainty quantification.",
    category: "Causal AI",
    featured: false,
    status: "Research Prototype",
    summary: "A research-backed academic decision-support framework forecasting examination trajectories, identifying student risk tiers, and decoding feature impacts via SHAP value explanations.",
    problem: "Predictive grading systems often act as biased black boxes without giving educators actionable insight into which specific factors (attendance, test frequency, study habits) drove the outcome.",
    solution: "Combines gradient boosting regression with SHAP (SHapley Additive exPlanations) and prediction interval modeling, allowing academic mentors to interpret individual risk drivers.",
    architecture: [
      { name: "Feature Pipeline", role: "Data Preprocessing", detail: "Normalizes longitudinal academic metrics and socio-study behavioral features." },
      { name: "Ensemble Forecaster", role: "Continuous Prediction", detail: "Generates point predictions with calibrated uncertainty bounds." },
      { name: "SHAP Explainer", role: "Feature Attribution", detail: "Computes exact Shapley values for individualized educator intervention advice." }
    ],
    technologies: ["Python", "scikit-learn", "SHAP", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Institution", value: "SRM IST" },
      { label: "Mentor", value: "Dr. V. Angayarkanni" },
      { label: "Explainability", value: "SHAP Values" }
    ],
    highlights: [
      "Academic research project developed under the mentorship of Dr. V. Angayarkanni at SRM IST.",
      "Quantifies model prediction uncertainty rather than providing overconfident point estimates."
    ]
  }
];

