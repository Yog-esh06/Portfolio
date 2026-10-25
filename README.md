# Yogesh R. Mehta — Interactive Engineering & Research Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Site-yog--esh06.github.io%2FPortofolio-d4ff33?style=for-the-badge&logo=githubpages&logoColor=black)](https://yog-esh06.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Yog--esh06-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yog-esh06/Portofolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yog--esh06-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yog-esh06/)

A high-signal, interactive developer and systems engineering portfolio built with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS v4**.

Designed specifically for technical recruiters, engineering hiring managers, and internship evaluation committees to explore real software systems, distributed architectures, operations research solvers, multi-agent swarms, empirical academic research, and industry experience with zero marketing fluff.

🔗 **Live Website:** [https://yog-esh06.github.io/Portofolio/](https://yog-esh06.github.io/Portofolio/)

---

## 🎯 Candidate Profile & Positioning

- **Name:** Yogesh R. Mehta
- **Degree:** B.Tech in Computer Science and Engineering (Expected Graduation: 2028)
- **Institution:** SRM Institute of Science and Technology, Kattankulathur, Chennai, India
- **Target Roles:** Summer 2027 Software Engineering, AI/ML, Cloud Infrastructure & Systems Internships
- **Availability:** Ready for technical interviews & engineering internships

---

## 🌟 Key Highlights & Information Architecture

### 1. Hackathon Achievements First
- **🥇 Rehab Tech Challenge 2024 — 1st Place Winner** (Team Kynex, Neuro-Move):
  Motor rehabilitation platform integrating real-time OpenCV pose estimation with EMG muscle telemetry and localized ML feedback for stroke recovery tracking.
- **🏅 The Industry Games 2026 — Top 8 Finalist (Out of 300+ Participants)** (STRATA):
  National finalist project building an offline-resilient, decentralized disaster intelligence engine with multi-agent coordination, terrain assessment, and LoRa packet relaying.

### 2. Flagship Systems & Live Deployments
- **[STRATA](https://strata-zeta.vercel.app)** ([GitHub](https://github.com/Yog05esh/STRATA)): Decentralized multi-agent disaster response platform with real-time hazard mapping.
- **[Aeon Engine](https://github.com/Yog-esh06/Aeon-multi-agent-RAG-orchestration-engine)**: Hybrid RAG & multi-agent consensus orchestrator with pgvector dense retrieval and dynamic consensus synthesis.
- **[Waypoint](https://waypoint-delta-pearl.vercel.app)** ([GitHub](https://github.com/Yog-esh06/Waypoint)): Interactive pathfinding and graph algorithmic workbench with visual execution stepping.
- **[Quarry](https://github.com/Yog-esh06/Quarry)**: Resilient distributed web scraping pipeline with automated rate limiting, exponential backoff, and schema normalization.
- **[RealCost](https://real-cost.vercel.app)** ([GitHub](https://github.com/Yog-esh06/RealCost)): Real estate pricing model with SHAP feature interpretability and localized valuation analysis.
- **Full Repository Archive:** Filterable and searchable catalog across all 13 open-source repositories.

### 3. Professional Industry Practice: Deloitte
- **Role:** Controls Assurance Intern (Audit & Assurance, Chennai, May–July 2026).
- **Scope:** 150+ hours of structured enterprise learning across enterprise IT risk, internal controls, and data integrity.
- **Internal Accreditations:** 6 Deloitte Level-3 Employee Skill Badges (Internal Audit, Enterprise Technology Controls, Cloud Assurance, IT Risk Assessment, SOX Compliance, and Data Integrity Validation).

### 4. Empirical Research Portfolio (3 Distinct Papers)
1. **Cloud VM Fault Detection Framework Using System-Level Metrics:**
   Presented at SRM Research Day 2026 (with Yatharth Garg). Lightweight anomaly detection correlating CPU, memory, and hypervisor I/O telemetry.
2. **Prosodic-Temporal Feature Ablation in CNN Speech Emotion Recognition:**
   SRM Undergraduate Research Opportunity (UROP) with Shreyas Gupta. Evaluated acoustic feature representations for speech emotion detection ([GitHub](https://github.com/Yog-esh06/Emotional-Classification-using-Audio-Data)).
3. **Cost-Sensitive Risk Classification & Explainable AI for Student Academic Performance:**
   Under the supervision of Dr. V. Angayarkanni. Cost-sensitive threshold tuning, conformal prediction sets, and SHAP interpretability ([GitHub](https://github.com/Yog-esh06/Student-Academic-Performance-Prediction)).

### 5. 72 Verified Credentials Gallery
- Filterable catalog of 72 verified certifications spanning Cloud & Systems, AI/ML, Security & Assurance, Data Science, and Software Development.
- Clickable credential cards trigger an interactive **`CertificateModal`** detailing the issuer, verification scope, and competencies.

### 6. "From LinkedIn" Archive
- Curated editorial feed showcasing 5 verified milestone posts with outbound LinkedIn links.

### 7. Resume Access & Interactive Modal
- One-click PDF download linking to `public/documents/Yogesh-R-Mehta-Resume.pdf`.
- Built-in interactive **`ResumeModal`** providing a digital fallback summary of academic, project, and technical achievements.

### 8. Motion & Visual System
- Desktop-only smooth spring follower cursor (`CustomCursor.tsx`) with magnetic button interaction (`useMagnetic.ts`).
- Ambient mouse-following spotlight grid (`SpotlightBackground.tsx`).
- Touch-safe, zero scroll-jacking, and fully respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework:** React 19, TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4, Custom CSS Variables
- **Icons:** Lucide React, Custom SVGs
- **Deployment:** GitHub Pages via GitHub Actions

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Yog-esh06/Portofolio.git
cd Portofolio
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Runs TypeScript verification (`tsc -b`) and Vite production bundle generation into `dist/`.

### 4. Preview Static Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── docs/
│   └── RECRUITER_AUDIT_REPORT.md# Full audit report and evidence verification
├── public/
│   └── documents/
│       ├── README.md            # Resume PDF drop instructions
│       └── Yogesh-R-Mehta-Resume.pdf # Official resume PDF
├── src/
│   ├── components/
│   │   ├── achievements/        # Hackathon & competition milestones
│   │   ├── certificates/        # 72 credentials gallery & detail modal
│   │   ├── common/              # Cursor, spotlight, resume modal, headings, badges
│   │   ├── experience/          # Deloitte experience & internal badges
│   │   ├── hero/                # Positioning, ticker & resume CTAs
│   │   ├── layout/              # Header, mobile menu, footer
│   │   ├── projects/            # Featured deep-dives & repository archive
│   │   ├── research/            # 3 academic papers & UROP breakdowns
│   │   ├── skills/              # Domain-categorized technical capabilities
│   │   └── updates/             # "From LinkedIn" editorial feed
│   ├── data/                    # Type-safe data stores (projects, experience, etc.)
│   ├── hooks/                   # useMagnetic and interactive utilities
│   ├── styles/                  # Tailwind v4 theme & graphite design system
│   ├── types/                   # TypeScript interfaces and contracts
│   ├── App.tsx                  # Recruiter-first single-page sequence
│   └── main.tsx                 # React DOM root entry point
├── Certificates/                # 72 original verified certificate files (intact)
├── package.json
├── tsconfig.json
└── vite.config.ts               # Portable relative base configuration (./)
```

---

## 🌐 Deployment to GitHub Pages

The project is configured for automated CI/CD deployment:

1. Push changes to the `main` branch:
   ```bash
   git push origin main
   ```
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Check out the repository.
   - Install dependencies with `npm ci`.
   - Run `npm run build` (`tsc -b && vite build`).
   - Deploy the generated `dist/` directory directly to GitHub Pages.
3. Access the deployed site at: [https://yog-esh06.github.io/Portofolio/](https://yog-esh06.github.io/Portofolio/)

---

## 📄 License & Integrity

- **Author:** Yogesh R. Mehta
- **Certificates Baseline:** All 72 original certificates preserved.
- **Code:** Open-source under the MIT License.
