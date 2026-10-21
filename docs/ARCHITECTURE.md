# Application Architecture & Deployment Blueprint

**Target Platform:** GitHub Pages (Static Site Architecture)  
**Core Framework:** React 19 + TypeScript + Vite  
**Design Implementation:** Custom Tailwind CSS & CSS Design System Tokens  
**Icons:** Lucide-React  
**Motion & Visuals:** Canvas-based interactive particle/node engine + CSS transitions + Web Animation API  

---

## 1. Architectural Philosophy

1. **Static-First & Zero-Runtime-Backend:** Everything executes purely client-side in the browser. Zero reliance on backend services or dynamic API keys.
2. **Deterministic Content Separation:** All profile, project, research, and certificate records are cleanly modeled in typed TypeScript data schemas (`src/data/*.ts`), completely divorced from presentation logic.
3. **GitHub Pages URL Safety:** Vite `base` configuration is path-relative (`./`) so the build functions identically whether hosted at `username.github.io/` or `username.github.io/portfolio/`.
4. **Resilient Offline Performance:** Minimal runtime bundle, zero external CDN dependencies for critical rendering, SVG and canvas assets embedded or referenced locally.

---

## 2. Directory Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages static deploy workflow
├── docs/
│   ├── RESEARCH_INVENTORY.md     # Audited source of truth for projects & profile
│   ├── DESIGN_SYSTEM.md          # Tokens, colors, typography, breakpoints
│   ├── ARCHITECTURE.md           # System design & component contracts
│   └── QA_REPORT.md              # Responsive, accessibility & build verification
├── public/
│   ├── favicon.svg               # Custom engineering monogram icon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/               # Badge, Button, Modal, SectionHeading, Tag
│   │   ├── hero/                 # Hero visualizer canvas, proof strip, CTA buttons
│   │   ├── projects/             # Featured showcase, project filter grid, project modal
│   │   ├── research/             # Academic paper cards, experimental graphs, citations
│   │   ├── experience/           # Deloitte timeline, credentials, verifiable badges
│   │   ├── achievements/         # Hackathon highlights (Industry Games, Rehab Tech)
│   │   ├── certificates/         # Filterable gallery, category tabs, detail viewer
│   │   ├── skills/               # Systems, AI, data, tools grid
│   │   └── layout/               # Header, Nav, Mobile Drawer, Footer, BackToTop
│   ├── data/
│   │   ├── profile.ts            # Bio, positioning, contact links
│   │   ├── projects.ts           # Full audited project catalog
│   │   ├── research.ts           # SER & Cloud VM fault detection details
│   │   ├── experience.ts         # Deloitte internship and role details
│   │   ├── achievements.ts       # Hackathons & awards
│   │   ├── certificates.ts       # 72 categorized certificate records
│   │   └── skills.ts             # Organized skill categories
│   ├── types/
│   │   └── index.ts              # Strict TypeScript interfaces
│   ├── styles/
│   │   └── index.css             # Base reset, CSS custom properties, utility classes
│   ├── App.tsx                   # Main SPA container & section orchestration
│   └── main.tsx                  # Vite DOM entry
├── Certificates/                 # PRESERVED UNTOUCHED (read-only baseline)
├── certificates_manifest.json    # SHA-256 / inventory baseline of certificates
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── .nojekyll
└── README.md
```

---

## 3. Data Flow & State Management

- **SPA Routing:** Single-page smooth scroll with URL hash tracking (`#work`, `#research`, `#experience`, `#achievements`, `#certificates`, `#contact`).
- **Interactive Modals:** Lightweight React state (`activeProject`, `activeCertificate`) with keyboard listener (`ESC` key) and scroll-lock management.
- **Search & Filter Engine:** Client-side, instantaneous memoized filtering on project categories, technologies, and certificate issuers.

---

## 4. GitHub Pages Deployment Configuration

- **Vite Config:** `base: './'` for universal asset path resolution.
- **`.nojekyll`:** Instructs GitHub Pages not to pass the static files through Jekyll, preserving dotfiles and underscore assets.
- **GitHub Actions Workflow (`deploy.yml`):**
  - Triggers on push to `main`
  - Runs `npm ci`
  - Runs `npm run build`
  - Deploys `dist/` directly to GitHub Pages via standard `actions/deploy-pages@v4`.

