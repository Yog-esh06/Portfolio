# Technical Portfolio Audit & Recruiter-Focused Overhaul Plan

**Candidate:** Yogesh R. Mehta  
**Target Goal:** Software Engineering, AI/ML & Systems Internships (Summer 2027)  
**Academic Standing:** 3rd Year B.Tech CSE, SRM Institute of Science and Technology (Class of 2028)  
**Repository:** [https://github.com/Yog-esh06/Portofolio](https://github.com/Yog-esh06/Portofolio)  
**Canonical Deployment URL:** [https://yog-esh06.github.io/Portofolio/](https://yog-esh06.github.io/Portofolio/)  

---

## 1. URL & Deployment Configuration Audit

- **Canonical URL Finding:** The GitHub repository is named `Portofolio` (with an extra 'o') under user `Yog-esh06`. Consequently, the GitHub Pages deployment path is `https://yog-esh06.github.io/Portofolio/`.
- **Base Path Status:** In `vite.config.ts`, `base: './'` is configured. This correctly ensures that assets resolve relative to the current subpath whether visited at `/Portofolio/` or `/Portfolio/`.
- **Git Remote Audit:** Local remote origin is `https://github.com/Yog-esh06/Portofolio.git`.
- **Build Status:** Build currently succeeds locally with Vite 6 + Tailwind CSS v4. The previous `TS2307` error in GitHub Actions was traced to an unanchored `.gitignore` rule (`Certificates/` without leading `/`) that inadvertently ignored `src/components/certificates/CertificatesSection.tsx` on Windows Git. Staging this fix resolves the missing file in Git.

---

## 2. Section-by-Section Findings & Recruiter Usability

| Section | Current State | Recruiter Assessment & Weakness | Proposed Remediation |
| :--- | :--- | :--- | :--- |
| **Hero** | Typographic intro with systems visualizer. | Good visual impact, but lacks immediate resume CTA and competition proof points. | Add direct **View Resume** and **Download PDF** actions. Add clean availability indicator: *"SRM IST CSE '28 • Seeking Summer 2027 Internships"*. |
| **Proof Strip / Accolades** | Proof strip under hero had generic label order. | Hackathon wins were placed lower down; recruiter has to scroll past projects to see them. | **Move Hackathons directly after Hero!** Lead with **Rehab Tech Challenge Winner (Neuro-Move)**, followed immediately by **The Industry Games Top 8 Finalist (STRATA)**. |
| **Copy & Tone** | Repeated "Verified" badges and "Validated competition outcomes" phrasing. | Over-engineered "verification" labels feel artificial and defensive rather than confident and factual. | **Strip out all decorative "Verified" tags.** Use simple, factual descriptions with direct evidence links (repo, paper, credential). |
| **Projects** | STRATA, Aeon, Waypoint, Quarry featured. | High technical quality, but repository links needed exact matching with GitHub handles (`Aeon-multi-agent-RAG-orchestration-engine`, etc.). | Update all repository links to exact GitHub handles. Ensure every project card has an explicit **[View Repository]** button. |
| **Deloitte Experience** | Timeline with 6 skill badges. | Badges could be mistaken for public certifications without context. | Clearly explain the **150+ hours of professional learning** and that the 6 Level-3 badges are internal employee assessments completed via Deloitte's enterprise learning platform. |
| **Research** | 2 research papers shown (VM Fault Detection & SER). | User has **three** distinct research projects. The 3rd project was missing. | Integrate all **3 Research Papers**: 1. Cloud VM Fault Detection (SRM Research Day 2026), 2. Speech Emotion Recognition (SRM UROP), and 3. Student Performance Prediction with Cost-Sensitive Risk & SHAP (SRM ML Research under Dr. V. Angayarkanni). |
| **Certificates** | 72 items in gallery. | Clicking a card was static without a full preview experience. | Add **Certificate Detail Modal (`CertificateModal`)** showing issuing body, course scope, and verification metadata. |
| **LinkedIn Archive** | Completely missing. | Valuable professional updates, post reflections, and context are absent from the site. | Build a dedicated **"From LinkedIn / Updates"** section archiving real posts with original links and summaries. |
| **Resume PDF** | No PDF present in repository. | Critical gap for recruiters. | Prepare `public/documents/Yogesh-R-Mehta-Resume.pdf`, provide View and Download actions, and include an accessible interactive resume fallback modal. |

---

## 3. Discovered GitHub Repositories Audit

Direct inspection of Yogesh's local workspaces and GitHub remotes:

1. **STRATA:** `https://github.com/Yog05esh/STRATA` (Live Replay: `https://strata-ai.me`) — Autonomous operational intelligence, Sentinel variance detection, multi-agent cited investigation, human approval gate.
2. **Aeon:** `https://github.com/Yog-esh06/Aeon-multi-agent-RAG-orchestration-engine` — Multi-agent research swarm, Celery worker fleet, Redis, streaming knowledge graph.
3. **Waypoint:** `https://github.com/Yog-esh06/Waypoint` — Adaptive fleet routing, MaskablePPO reinforcement learning, Google OR-Tools.
4. **Quarry:** `https://github.com/Yog-esh06/Quarry` — Causal decision intelligence, Structural Causal Models (SCMs), counterfactual estimation.
5. **RealCost:** `https://github.com/Yog-esh06/RealCost` (Live Demo: `https://realcost-sigma.vercel.app`) — Habit finance analyzer with Gemini AI insights.
6. **Student Academic Performance Prediction (SPF):** `https://github.com/Yog-esh06/Student-Academic-Performance-Prediction` — Cost-sensitive risk classification, Shannon entropy uncertainty quantification, SHAP explainability.
7. **Emotional Classification using Audio Data (UROP SER):** `https://github.com/Yog-esh06/Emotional-Classification-using-Audio-Data` — Speech emotion recognition CNN, MFCC delta ablation.
8. **Heavy Hub:** `https://github.com/Yog-esh06/Heavy-Hub` — Agricultural and construction equipment marketplace.
9. **Trestle:** `https://github.com/Yog-esh06/Trestle-` — Internal developer platform and policy enforcement control plane.
10. **ChronoOps AI:** `https://github.com/Yog-esh06/ChronoOps-AI` — Multivariate time-series operational telemetry workbench.
11. **Argus:** `https://github.com/Yog-esh06/Argus` — Industrial safety operations console and camera event triage.
12. **NeuroForge AI:** `https://github.com/Yog-esh06/Neuroforage-AI` — Evidence-grounded document search and contradiction analysis.

---

## 4. The 3 Verified Research Papers / Projects

1. **Paper 1:** *A Lightweight Fault Detection Framework for Cloud Virtual Machines Using System-Level Metrics*
   - Status: Presented at SRM Research Day 2026
   - Investigators: Yogesh R. Mehta, Yatharth Garg
   - Telemetry: Hypervisor-level performance counters, sub-1.8ms inference latency, 3.5 min warning lead time.
2. **Paper 2:** *Prosodic-Temporal Feature Ablation in CNN Speech Emotion Recognition*
   - Status: Completed Research (SRM IST UROP)
   - Authors: Yogesh R. Mehta, Shreyas Gupta
   - Repository: `https://github.com/Yog-esh06/Emotional-Classification-using-Audio-Data`
   - Empirical Result: 92.78% test accuracy for dynamic MFCC derivatives on RAVDESS dataset.
3. **Paper 3:** *Cost-Sensitive Risk Classification, Uncertainty Quantification & Explainable AI for Student Academic Performance Prediction*
   - Status: Academic Research Project (SRM IST)
   - Mentor: Dr. V. Angayarkanni
   - Research Team: Yogesh R. Mehta, Bhavy Manchanda, Darsh M. Saraf, Bhavish Akula
   - Repository: `https://github.com/Yog-esh06/Student-Academic-Performance-Prediction`
   - Contribution: Asymmetric cost-sensitive matrix in XGBoost to minimize False Negatives, temporal progression synthesis, Shannon entropy uncertainty gating (>0.85 triggers educator review), SHAP explanations.

---

## 5. Recruiter-First Information Architecture (Proposed Order)

```
1. Header & Navigation (Monogram, Links, Resume Action, Theme Toggle)
2. Hero (Identity, Engineering Positioning, Resume CTAs, GitHub, LinkedIn, Interactive Canvas)
3. Competition Accolades & Hackathons (Rehab Tech Challenge 1st, Industry Games Top 8 2nd)
4. Flagship Engineering Projects (STRATA, Aeon, Waypoint, Quarry, RealCost)
5. Repository Archive & Systems Library (Search & Category Filter across 12 repos)
6. Professional Experience (Deloitte Controls Assurance + 6 Internal Badges Context)
7. Systems & Academic Research (All 3 Research Papers with Empirical Findings)
8. Technical Capabilities (Core Languages, AI/ML & OR, Full-Stack, Cloud & Reliability)
9. Verified Credentials Gallery (72 Categorized Certificates with Detail Modal)
10. From LinkedIn / Updates (Real Post Feed with Links & Context)
11. About & Academic Foundation (SRM IST, Expected 2028)
12. Contact & Footer (Resume Download, Socials, Dynamic Year)
```

---

## 6. Prioritized Implementation Actions

1. Create `src/data/posts.ts` containing authentic LinkedIn updates and context.
2. Update `src/data/research.ts` to include the 3rd research project (Student Performance Prediction under Dr. V. Angayarkanni).
3. Update `src/data/projects.ts` with exact GitHub repository URLs and genuine live demos.
4. Update `src/data/achievements.ts` to strictly order **Rehab Tech Challenge Winner first** and **The Industry Games Top 8 second**, with neutral, factual language.
5. Create `src/components/updates/LinkedInUpdates.tsx` rendering the post archive.
6. Reorder sections in `src/App.tsx` following the Recruiter-First Information Architecture.
7. Integrate `ResumeModal`, `CertificateModal`, `CustomCursor`, and `SpotlightBackground`.
8. Clean up all decorative "Verified" badges to avoid clutter.
9. Verify static build with `npm run build` and ensure zero errors.

