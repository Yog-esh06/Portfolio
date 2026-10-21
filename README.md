# Yogesh R. Mehta — Interactive Engineering & Research Portfolio

A premium, interactive developer and systems engineering portfolio built with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS v4**.

Designed to showcase real software systems, operations research solvers, multi-agent swarms, empirical academic research, and industry experience without marketing fluff or arbitrary progress bars.

---

## 🌟 Key Features

- **Distinctive Visual Identity:** Dark graphite canvas with electric lime (`#c8f135`) and coral (`#ff5f1f`) accents, precision technical typography, and an interactive 60 FPS Canvas node visualizer.
- **Flagship Project Deep-Dives:** Extensive architectural breakdowns of:
  - **STRATA:** Operational intelligence platform (The Industry Games Top 8 Finalist out of 300+ participants).
  - **Aeon:** Multi-agent research swarm engine with distributed Celery workers and live knowledge graphs.
  - **Waypoint:** Adaptive fleet routing with MaskablePPO reinforcement learning and Google OR-Tools.
  - **Quarry:** Causal decision intelligence platform using Structural Causal Models (SCMs) and counterfactual simulation.
  - **RealCost:** Habit expense analyzer deployed live with Gemini AI insights.
- **Systems & Academic Research:**
  - *Cloud Virtual Machine Fault Detection* presented at SRM Research Day 2026.
  - *Prosodic-Temporal Feature Ablation in CNN Speech Emotion Recognition* (SRM UROP, 92.78% accuracy on RAVDESS).
- **Professional Practice:** Deloitte Controls Assurance internship, 150+ hours of enterprise learning, and 6 employee-exclusive skill badges.
- **72 Verified Credentials Gallery:** Filterable and searchable gallery of certified badges across AI/ML, Data Science, NPTEL national certifications, and corporate simulations.
- **Zero-Backend Static Deployment:** Fully statically buildable for GitHub Pages with relative asset paths and no external API runtime dependencies.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production (Static Export)
```bash
npm run build
```
This compiles the static assets into the `dist/` directory with relative asset URLs (`./assets/...`).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Content Architecture & Maintenance

All profile information, project records, research summaries, and certificates are cleanly isolated from the presentation components in `src/data/`:

| Data File | Description |
| :--- | :--- |
| `src/data/profile.ts` | Headline, bio, social links, and key metric stats. |
| `src/data/projects.ts` | Audited project catalog with problem statements, architecture flows, metrics, and repository links. |
| `src/data/research.ts` | Academic papers, methodologies, empirical test results, and citations. |
| `src/data/experience.ts` | Professional roles (Deloitte Controls Assurance, SRM Researcher) and badges. |
| `src/data/achievements.ts` | Hackathon standings (The Industry Games Top 8, Rehab Tech Challenge 1st place). |
| `src/data/certificates.ts` | Complete catalog of 72 verified credentials organized into 7 categories. |
| `src/data/skills.ts` | Technical capability categories organized by systems domain. |

To add a new project or update your resume, simply update the corresponding TypeScript data file in `src/data/`. The UI will re-render automatically.

---

## 🌐 Deploying to GitHub Pages (Phase 2)

The website is pre-configured for automated deployment to GitHub Pages via GitHub Actions:

1. Create a new GitHub repository (e.g., `portfolio` or `yog-esh06.github.io`).
2. Initialize git and push the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of interactive engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/Yog-esh06/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site.

---

## 🔒 Filesystem Safety & Read-Only Integrity

- Existing projects in adjacent directories were inspected strictly read-only and preserved untouched.
- The 72 original certificates in `Certificates/` remain intact in their original structure.

