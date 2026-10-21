# Technical Portfolio Research Inventory & Source of Truth

**Subject:** Yogesh R. Mehta  
**Institution:** B.Tech Computer Science & Engineering, SRM Institute of Science and Technology, Kattankulathur (Graduation: 2028)  
**Location:** Chennai, India  
**Profiles:**  
- GitHub: [https://github.com/Yog-esh06](https://github.com/Yog-esh06) & [https://github.com/Yog05esh](https://github.com/Yog05esh)  
- LinkedIn: [https://www.linkedin.com/in/yog-esh06/](https://www.linkedin.com/in/yog-esh06/)  

---

## 1. Verified Identity & Technical Positioning

- **Positioning Statement:** Computer Science student building practical software systems across AI/ML, full-stack architectures, and cloud reliability research.
- **Core Languages:** Python, TypeScript, JavaScript, C, C++, Java, SQL.
- **Frameworks & Libraries:** React, Next.js, FastAPI, Flask, PyTorch, scikit-learn, Tailwind CSS, Celery, Redis, Docker, OR-Tools, Librosa.

---

## 2. Flagship Project Inventory

| Project Name | Category | Primary Stack | Key Problem & Architecture | Status & Links |
| :--- | :--- | :--- | :--- | :--- |
| **STRATA** *(Featured #1 - Hackathon Finalist)* | Agentic AI & Ops Intelligence | Next.js, FastAPI, Supabase Auth/RLS, Python 3.12 | Operational intelligence for enterprise business teams. Ingests signals, runs Sentinel detection, multi-agent cited investigation, and human-in-the-loop approval gates. | **Industry Games Top 8 Finalist (out of 300)**<br>Repo: [github.com/Yog05esh/STRATA](https://github.com/Yog05esh/STRATA)<br>Live Replay: [strata-ai.me](https://strata-ai.me) |
| **Aeon** *(Featured #2)* | Multi-Agent Swarm Engine | Python 3.12, FastAPI, Celery 5.6, Redis 7.4, LangChain, Next.js 16, TypeScript | Multi-agent research swarm that parallelizes search, synthesizes evidence with strict citation verification, uses a Critic agent to score rubrics, and streams a live knowledge graph. | Production Prototype<br>Repo: [github.com/Yog-esh06/Aeon](https://github.com/Yog-esh06/Aeon) |
| **Waypoint** *(Featured #3)* | Operations Research & RL | Python 3.11, Google OR-Tools 9.15, MaskablePPO (SB3), Gymnasium, Next.js 16, MapLibre GL | Adaptive fleet routing platform where a masked RL policy triggers replanning when disruptions occur, constraint solvers guarantee route feasibility, and a seeded simulator tests efficiency. | CI Passing / Rigorous Architecture<br>Repo: [github.com/Yog-esh06/Waypoint](https://github.com/Yog-esh06/Waypoint) |
| **Quarry** *(Featured #4)* | Causal AI & Decision Intel | Python 3.10+, FastAPI, Next.js 16, TypeScript, Pytest | Causal decision intelligence separating predictive correlation from intervention effects. Uses structural causal models (SCMs), counterfactual reasoning, and constrained policy optimization. | Complete Local Prototype<br>Repo: [github.com/Yog-esh06/Quarry](https://github.com/Yog-esh06/Quarry) |
| **RealCost** *(Featured Deployed)* | FinTech & AI Utility | Next.js, Tailwind CSS, Gemini AI, Chart.js | Analyzes the compounding real-world financial cost of daily habits with interactive cost breakdowns, savings calculators, and AI optimization recommendations. | **Deployed Live**<br>Demo: [realcost-sigma.vercel.app](https://realcost-sigma.vercel.app)<br>Repo: [github.com/Yog-esh06/RealCost](https://github.com/Yog-esh06/RealCost) |
| **ThermoTwin** *(Digital Twin)* | Physics Simulation & ML Control | Python 3.11, Flask, PyTorch, Chart.js, 34 Pytests | Machine-learning-enhanced thermal digital twin for predictive cooling control in data centers. Simulates rack-level airflow, transient thermal loads, and multi-horizon temperature forecasting. | Verified Prototype (34 tests passing)<br>Local Reference Codebase |
| **ChronosOps AI** | Multivariate Time-Series | Python, FastAPI, Pandas, scikit-learn | Telemetry intelligence workbench turning raw multivariate operational time-series data into interpretable anomaly detection briefs without black-box opacity. | Complete Local Prototype |
| **Argus** | Vision & Industrial Safety | Next.js 14, FastAPI, Python 3.11, Docker | Industrial safety console modeling camera, zone, event, and risk triage workflows for hazardous workspace operations. | Prototype Architecture |
| **NeuroForge AI** | Document Intelligence | Python, FastAPI, Next.js, BM25 + Dense Search | Evidence-grounded document search and decision support. Features contradiction detection, claim citation validation, and hash-chained audit trails. | Architecture Prototype |
| **HeavyHub** | Full-Stack Marketplace | React, Vite, Tailwind CSS, Supabase Auth/DB | Equipment rental and marketplace platform for agricultural and construction machinery in India, featuring role-based dashboards, cart workflows, and realtime chat. | Functional App Prototype<br>Repo: [github.com/Yog-esh06/Heavy-Hub](https://github.com/Yog-esh06/Heavy-Hub) |
| **Trestle** | Platform Engineering | Python 3.11+, Next.js 15, GitHub Actions CI | Local-first infrastructure and environment control plane for teams managing application delivery, policy enforcement, and audit logs. | Complete Implementation<br>Repo: [github.com/Yog-esh06/Trestle-](https://github.com/Yog-esh06/Trestle-) |
| **Student Performance Predictor (SPF)** | Explainable ML | Python, scikit-learn, SHAP, Streamlit | Decision-support framework predicting student academic performance, identifying risk tiers, quantifying uncertainty, and explaining model factors via SHAP values. Mentored by Dr. V. Angayarkanni. | SRM Academic Research Project |

---

## 3. Academic & Industry Research

### Research Topic 1: Cloud Virtual Machine Fault Detection
- **Title:** *A Lightweight Fault Detection Framework for Cloud Virtual Machines Using System-Level Metrics*
- **Presented At:** SRM Research Day 2026
- **Collaborator:** Yatharth Garg
- **Affiliation:** SRM Institute of Science and Technology
- **Methodology & Key Focus:** Lightweight collection of hypervisor and VM system telemetry (CPU cycles, memory allocation velocity, disk I/O latency) paired with anomaly detection models to detect degraded VM health prior to cascade outages without significant guest overhead.

### Research Topic 2: Speech Emotion Recognition (SER)
- **Title:** *Prosodic-Temporal Feature Ablation in CNN Speech Emotion Recognition* (SRM UROP)
- **Authors:** Yogesh R Mehta, Shreyas Gupta
- **Dataset:** RAVDESS (Ryerson Audio-Visual Database of Emotional Speech and Song; 2,068 samples across 6 emotions: angry, calm, fearful, happy, neutral, sad)
- **Architecture:** 4-block deep convolutional neural network with batch normalization and dropout regularization.
- **Empirical Findings:**
  - MFCC + Delta + Delta-Delta (capturing dynamic acoustic trajectory over time): **92.78% Test Accuracy**
  - MFCC + Pitch (F0) + Energy (RMS): **89.94% Test Accuracy**
  - Demonstrates the decisive advantage of temporal spectral derivatives over isolated static acoustic features for emotional nuances.

---

## 4. Professional Experience & Industry Badges

### Deloitte — Controls Assurance Intern
- **Department:** Audit & Assurance
- **Location:** Chennai, India
- **Duration:** May – July 2026
- **Core Focus:** Controls assurance, IT compliance evaluation, automated audit verification workflows, risk advisory foundations, enterprise systems reliability.
- **Verified Achievements:**
  - 150+ hours of continuous professional learning
  - 6 Employee-Exclusive Deloitte Skill Badges:
    1. Deloitte AI Expert – Level 3
    2. Deloitte AI Market Specialist – Level 3
    3. Deloitte AI Generalist – Level 3
    4. Deloitte AI Market Leader – Level 3
    5. Deloitte Data Analytics
    6. Deloitte Data Science
    7. IT Compliance Training Certification

---

## 5. Hackathon & Competitive Accolades

1. **The Industry Games Hackathon (Sem 5)**
   - **Standing:** Top 8 Finalist out of 300+ participants
   - **Project:** STRATA — Autonomous Multi-Agent Operational Intelligence System
2. **Rehab Tech Challenge (Sem 4)**
   - **Standing:** 1st Place Winner
   - **Team:** Kynex
   - **Project:** Neuro-Move — Computer vision and pose estimation pipeline for objective physiotherapy assessment and rehabilitation monitoring.
3. **Competitive Participation & Hackathon Portfolio:**
   - Adobe University Hackathon
   - Hack4Health
   - Hybrid Hack
   - EY Techathon 6.0
   - CeraTech 2026
   - Devtrails
   - Ultron 9.0
   - Ossome Hacks 3.0
   - CodeMaeven & Heisen Hack 2025

---

## 6. Certificate Inventory & Categorization (72 Verified Items)

All verified locally from `Certificates/` baseline:
- **AI & Agentic Systems:** Anthropic Model Context Protocol (MCP), Oracle AI Foundations Associate, IBM SkillsBuild Generative AI, LinkedIn Agentic AI & Autonomous Agents series, AWS Skill Builder ML series, HP LIFE AI.
- **Data Science & Statistics:** HP LIFE Data Science, Udemy Mathematical Statistics for Data Science, Udemy Data Visualization.
- **NPTEL National Certifications (Elite/Pass):**
  - Design & Analysis of Algorithms (DAA)
  - Database Management Systems (DBMS)
  - Operating Systems (OS)
  - Java Programming
  - Object-Oriented Programming (OOP)
- **Job Simulations & Corporate Certifications:**
  - AWS Solutions Architecture
  - J.P. Morgan Software Engineering
  - EA Software Engineering
  - Skyscanner Front-End Engineering
  - Wells Fargo Software Engineering
  - TCS Generative AI
  - Deloitte Cyber, Data Analytics, Technology
- **Systems & Infrastructure:** Introduction to Data Centers, Networking Devices & Config, Networking Basics, MongoDB Python Developer Path.

