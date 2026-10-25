import { CertificateItem } from '../types';

export const certificatesData: CertificateItem[] = [
  // 1. Deloitte Exclusive Badges (6 employee-exclusive badges + IT compliance)
  {
    id: "cert-deloitte-ai-expert",
    title: "AI Expert – Level 3",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Enterprise generative AI pipelines, LLM fine-tuning, retrieval-augmented generation architectures, and AI model evaluation frameworks."
  },
  {
    id: "cert-deloitte-ai-generalist",
    title: "AI Generalist – Level 3",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Core artificial intelligence, automated reasoning principles, enterprise adoption roadmaps, and model governance standards."
  },
  {
    id: "cert-deloitte-ai-market-spec",
    title: "AI Market Specialist – Level 3",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Industry-specific AI application models, risk-reward trade-off valuation, and enterprise technology integration strategy."
  },
  {
    id: "cert-deloitte-ai-market-lead",
    title: "AI Market Leader – Level 3",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Strategic executive AI readiness frameworks, organizational change management, and responsible AI governance oversight."
  },
  {
    id: "cert-deloitte-data-science",
    title: "Data Science Specialist",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Predictive statistical modeling, advanced feature engineering pipelines, regression analysis, and cross-validation workflows."
  },
  {
    id: "cert-deloitte-data-analytics",
    title: "Data Analytics Specialist",
    issuer: "Deloitte (Internal Assessment)",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Enterprise operational data intelligence, dashboard design, automated reporting, and audit trail reconciliation."
  },
  {
    id: "cert-deloitte-compliance",
    title: "IT Compliance Training",
    issuer: "Deloitte",
    category: "Deloitte Exclusive",
    year: "2026",
    description: "Enterprise data privacy standards, professional independence protocols, and security compliance training."
  },

  // 2. Hackathons & Competition Recognitions
  {
    id: "cert-rehab-tech",
    title: "1st Place Winner — Rehab Tech Challenge",
    issuer: "SRM IST Med-Tech Hackathon",
    category: "Hackathons & Awards",
    year: "2025",
    description: "First-place distinction with Team Kynex for Neuro-Move, a camera-based physiotherapy evaluation and pose-tracking system."
  },
  {
    id: "cert-industry-games",
    title: "Top 8 Finalist — The Industry Games",
    issuer: "The Industry Games Hackathon",
    category: "Hackathons & Awards",
    year: "2026",
    description: "Top 8 national finalist standing out of 300+ competitors with STRATA, an autonomous operational intelligence engine."
  },
  {
    id: "cert-srm-research-day",
    title: "Research Paper Presenter — SRM Research Day 2026",
    issuer: "SRM Institute of Science and Technology",
    category: "Hackathons & Awards",
    year: "2026",
    description: "Presented research paper on lightweight VM fault detection via host hardware performance counters and ensemble models."
  },

  // 3. AI & Machine Learning Certifications
  {
    id: "cert-anthropic-mcp",
    title: "Anthropic Model Context Protocol (MCP)",
    issuer: "Anthropic",
    category: "AI & ML",
    year: "2025",
    description: "Designing standardized tools, clients, and servers connecting large language models to live systems and persistent databases."
  },
  {
    id: "cert-oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle Cloud",
    category: "AI & ML",
    year: "2025",
    description: "Fundamentals of generative AI, large language models, computer vision, and machine learning pipelines in OCI."
  },
  {
    id: "cert-ibm-genai",
    title: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    category: "AI & ML",
    year: "2025",
    description: "Foundations of prompt engineering, transformer model architectures, and enterprise AI safety."
  },
  {
    id: "cert-aws-ml-intro",
    title: "Introduction to Machine Learning",
    issuer: "AWS Skill Builder",
    category: "AI & ML",
    year: "2025",
    description: "Supervised and unsupervised learning principles, evaluation metrics, and cloud ML deployment patterns."
  },
  {
    id: "cert-aws-ml-pipeline",
    title: "Machine Learning Process & Planning",
    issuer: "AWS Skill Builder",
    category: "AI & ML",
    year: "2025",
    description: "Structuring machine learning lifecycles: problem definition, data preparation, feature stores, and model evaluation."
  },
  {
    id: "cert-linkedin-agentic-ai",
    title: "Agentic AI Fundamentals & Autonomous Agents",
    issuer: "LinkedIn Learning",
    category: "AI & ML",
    year: "2025",
    description: "Architectures for goal-directed autonomous agents, dynamic tool dispatching, multi-agent debates, and memory persistence."
  },
  {
    id: "cert-udemy-ai-ethics",
    title: "AI Ethics & Responsible Deployment",
    issuer: "Udemy",
    category: "AI & ML",
    year: "2025",
    description: "Algorithmic bias mitigation, explainable AI attribution techniques, model interpretability, and compliance auditing."
  },

  // 4. Data Analytics & Science
  {
    id: "cert-udemy-math-stats",
    title: "Mathematical Statistics for Data Science",
    issuer: "Udemy",
    category: "Data & Analytics",
    year: "2025",
    description: "Probability distributions, maximum likelihood estimation, hypothesis testing, Bayesian updates, and confidence intervals."
  },
  {
    id: "cert-hp-data-science",
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    category: "Data & Analytics",
    year: "2024",
    description: "Statistical data transformation, business KPI formulation, and exploratory analysis methodologies."
  },
  {
    id: "cert-udemy-data-viz",
    title: "Data Visualization & Dashboards",
    issuer: "Udemy",
    category: "Data & Analytics",
    year: "2024",
    description: "Visual design principles, interactive analytics charting, and multi-dimensional operational report formatting."
  },

  // 5. NPTEL National Certifications (Ministry of Education, Govt. of India)
  {
    id: "cert-nptel-daa",
    title: "Design and Analysis of Algorithms",
    issuer: "NPTEL (IIT Madras / Govt. of India)",
    category: "NPTEL",
    year: "2025",
    description: "Asymptotic notation, divide-and-conquer, dynamic programming, graph algorithms (Dijkstra, Bellman-Ford, Tarjan), and NP-completeness."
  },
  {
    id: "cert-nptel-dbms",
    title: "Database Management Systems",
    issuer: "NPTEL (IIT Kharagpur / Govt. of India)",
    category: "NPTEL",
    year: "2025",
    description: "Relational algebra, SQL query optimization, B+ tree indexing structures, ACID transaction properties, and normalization."
  },
  {
    id: "cert-nptel-os",
    title: "Operating Systems Principles",
    issuer: "NPTEL (IIT / Govt. of India)",
    category: "NPTEL",
    year: "2025",
    description: "Process scheduling, thread synchronization, deadlocks, virtual memory management, paging algorithms, and file systems."
  },
  {
    id: "cert-nptel-oops",
    title: "Object-Oriented Programming & Systems",
    issuer: "NPTEL (IIT / Govt. of India)",
    category: "NPTEL",
    year: "2024",
    description: "Polymorphism, inheritance hierarchies, abstract classes, encapsulation, SOLID design principles, and design patterns."
  },
  {
    id: "cert-nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur / Govt. of India)",
    category: "NPTEL",
    year: "2024",
    description: "JVM internal memory architecture, garbage collection mechanics, concurrency primitives, and generic collections."
  },

  // 6. Corporate Job Simulations (Forage)
  {
    id: "cert-sim-jpmc",
    title: "JPMorgan Chase Software Engineering Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "Live financial stock price feed integration, JPMorgan Perspective open-source data visualization, and unit testing."
  },
  {
    id: "cert-sim-deloitte-tech",
    title: "Deloitte Technology Consulting Simulation",
    issuer: "Deloitte / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "Cloud migration feasibility analysis, enterprise architecture reviews, and legacy modernization strategy formulation."
  },
  {
    id: "cert-sim-deloitte-cyber",
    title: "Deloitte Cyber Risk Simulation",
    issuer: "Deloitte / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "Threat vector modeling, perimeter breach forensics, security operations triage, and mitigation roadmaps."
  },
  {
    id: "cert-sim-ea",
    title: "Electronic Arts Software Engineering Simulation",
    issuer: "Electronic Arts / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "Optimizing game inventory system data structures, C++ class design, and algorithm profiling."
  },
  {
    id: "cert-sim-skyscanner",
    title: "Skyscanner Front-End Engineering Simulation",
    issuer: "Skyscanner / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "React component architecture, date-picker state management, and accessible UI flight booking search."
  },
  {
    id: "cert-sim-tcs",
    title: "TCS Generative AI Job Simulation",
    issuer: "Tata Consultancy Services / Forage",
    category: "Job Simulations",
    year: "2025",
    description: "Prompt tuning, enterprise search integration, and generative model deployment governance."
  },

  // 7. Systems & Development
  {
    id: "cert-data-centers-intro",
    title: "Introduction to Data Centers",
    issuer: "Schneider Electric / Industry Education",
    category: "Systems & Dev",
    year: "2025",
    description: "Physical infrastructure, cooling architectures, thermal zones, power distribution efficiency (PUE), and server rack topologies."
  },
  {
    id: "cert-cisco-networking",
    title: "Networking Basics & Device Configuration",
    issuer: "Cisco Networking Academy",
    category: "Systems & Dev",
    year: "2025",
    description: "OSI and TCP/IP protocol stacks, IPv4/IPv6 subnetting, routing tables, switch VLANs, and firewall rules."
  },
  {
    id: "cert-ibm-web-dev",
    title: "IBM Full-Stack Web Development Path",
    issuer: "IBM SkillsBuild",
    category: "Systems & Dev",
    year: "2024",
    description: "Asynchronous JavaScript, RESTful APIs, modern frontend component architecture, and cloud deployment."
  }
];
