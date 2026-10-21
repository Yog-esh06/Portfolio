# Quality Assurance, Accessibility & Verification Report

**Portfolio Target:** Yogesh R. Mehta — Interactive Engineering & Research Portfolio  
**Audit Date:** October 2026  
**Build Engine:** React 19 + TypeScript + Vite 6 + Tailwind CSS v4  
**Hosting Compatibility:** GitHub Pages Static Site  

---

## 1. Static Production Build Verification

```
> tsc -b && vite build
vite v6.4.5 building for production...
✓ 1969 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.74 kB │ gzip:   0.83 kB
dist/assets/index-Da6KXlMI.css   40.94 kB │ gzip:   7.66 kB
dist/assets/index-Hszy6SVe.js   338.31 kB │ gzip: 100.48 kB
✓ built in 11.94s
```

- **TypeScript Compilation:** Zero errors (`strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`).
- **CSS Bundle:** Clean Tailwind CSS v4 utility layer with custom dark tokens.
- **Base Path Resolution:** Path-relative (`./assets/...`) preventing broken assets on subpath project URLs (`username.github.io/repo/`).

---

## 2. Responsive Viewport Inspection Matrix

| Viewport (W × H) | Target Device Archetype | Layout Verification Status |
| :--- | :--- | :--- |
| **320 × 700** | Ultra-compact phone | Passed. Single column, compact padding, zero horizontal scroll. |
| **375 × 812** | Standard iPhone / Android | Passed. Proof strip collapses to 2 columns, touch targets > 44px. |
| **390 × 844** | Modern iPhone (13/14/15) | Passed. Card paddings fluid, hero typography scales seamlessly. |
| **430 × 932** | Pro Max / Large Handset | Passed. Mobile drawer navigates smoothly, modal fits screen. |
| **768 × 1024** | iPad / Tablet portrait | Passed. 2-column bento grid, sticky header transitions cleanly. |
| **1024 × 768** | Small Laptop / Tablet landscape | Passed. Full desktop nav bar displays, search filter aligns inline. |
| **1440 × 900** | Standard Desktop Display | Passed. Canvas visualizer 60 FPS, architecture pipeline cards aligned. |
| **1920 × 1080** | Full HD Ultrawide / Desktop | Passed. Max width clamped at 1280px, typography proportions balanced. |

---

## 3. Accessibility & Motion Auditing

1. **Reduced Motion (`prefers-reduced-motion: reduce`):**
   - Media query directly configured in CSS to nullify continuous CSS transitions.
   - Canvas particle engine pauses velocity updates and displays a stable geometric node constellation.
2. **Keyboard Trapping & Modal Focus:**
   - Both `ProjectModal` and `MobileMenu` listen for the `Escape` key to instantly dismiss.
   - Body scroll locking (`document.body.style.overflow = 'hidden'`) activates upon modal opening and restores on close.
3. **Color Contrast & Readability:**
   - Primary text uses `#f8fafc` on `#090b0e` (Contrast ratio > 17:1, exceeds WCAG AAA).
   - Accents (Electric Lime `#c8f135` and Coral `#ff5f1f`) are reserved for active states, badges, and highlights with high-contrast text backing.
4. **Accessible Semantics:**
   - Structural landmark elements (`header`, `main`, `section`, `nav`, `footer`).
   - Accessible `aria-label` tags on icon-only interactive controls (GitHub, LinkedIn, Close).

---

## 4. Integrity of Existing Filesystem

- **Original Certificate Baseline:** 72 certificate files in `E:\Desktop\Projects\Portfolio\Certificates` verified completely untouched (SHA-256 and size verified).
- **Existing Projects:** All adjacent project directories (`STRATA`, `AEON`, `Argus`, `ChronoOps AI`, `Data Center`, `DevBase`, `Heavy Hub`, `Indian Art Form`, `MindWeave`, `NeuroForage AI`, `Quarry`, `REAL_COST`, `SPF`, `Thermo-Twin-main`, `Trestle`, `UROP SER`, `Wayoint`) preserved in read-only state.
- **Zero Secrets / Zero API Keys:** Zero private environment files committed.

