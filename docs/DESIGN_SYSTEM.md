# Design System & Visual Identity Specification

**Portfolio:** Yogesh R. Mehta — Interactive Engineering & Research Portfolio  
**Design Persona:** Rigorous Engineering × Editorial Typography × Cybernetic Precision  

---

## 1. Visual Identity & Mood

- **Aesthetic:** Editorial dark mode, high-density technical typography, cybernetic grid textures, electric accents, tactile hardware-inspired micro-interactions.
- **Atmosphere:** Deep graphite canvas with crisp off-white typography, energized by electric lime (`#c8f135`) for operational vitality and warm amber/orange (`#ff6b35`) for telemetry and critical highlights.
- **Textures:** Precision SVG engineering grid backgrounds, ambient radial glows, hairline border glassmorphism (`1px solid rgba(255, 255, 255, 0.08)`).

---

## 2. Color Palette & Design Tokens

### Backgrounds & Surfaces
```css
--bg-canvas: #090b0e;        /* Deep midnight graphite */
--bg-surface: #0f1319;       /* Elevated container surface */
--bg-surface-elevated: #161b24; /* Hovered cards & modals */
--bg-glass: rgba(15, 19, 25, 0.78); /* Frosted backdrop with blur */
--border-subtle: rgba(255, 255, 255, 0.07);
--border-medium: rgba(255, 255, 255, 0.14);
--border-accent: rgba(200, 241, 53, 0.35);
```

### Accents & Indicators
```css
--accent-lime: #c8f135;       /* Electric Lime: Primary energy, AI & Active state */
--accent-lime-muted: rgba(200, 241, 53, 0.12);
--accent-orange: #ff5f1f;     /* Telemetry Coral/Orange: Hackathons & Critical signals */
--accent-orange-muted: rgba(255, 95, 31, 0.12);
--accent-cyan: #38bdf8;       /* Systems/Research Blue: Academic and Cloud papers */
--accent-purple: #a855f7;     /* Multi-Agent Swarms & Machine Learning */
```

### Typography Hierarchy & Colors
```css
--text-primary: #f8fafc;      /* Crisp off-white */
--text-secondary: #94a3b8;    /* Balanced slate */
--text-muted: #64748b;        /* Subtle annotations */
--text-accent: #c8f135;       /* High-emphasis values */
```

---

## 3. Typography Scale

- **Display & Headings:** `Space Grotesk`, `Syne`, or modern geometric sans (`sans-serif` fallback)
- **Body & Prose:** `Inter`, system `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
- **Technical Monospace:** `JetBrains Mono`, `Fira Code`, `SF Mono`, `monospace`

```css
--font-hero: clamp(2.5rem, 6vw, 4.5rem);
--font-h1: clamp(2rem, 4vw, 3rem);
--font-h2: clamp(1.5rem, 3vw, 2.25rem);
--font-h3: clamp(1.25rem, 2vw, 1.5rem);
--font-body: 1rem;
--font-small: 0.875rem;
--font-mono: 0.8125rem;
```

---

## 4. Layout & Grid Architecture

- **Max Container Width:** `1280px` (with standard horizontal padding `1.5rem` to `2.5rem`)
- **Responsive Breakpoints:**
  - `mobile`: `< 640px` (single column, full-touch targets, sticky bar)
  - `tablet`: `640px - 1024px` (2-column bento, streamlined drawers)
  - `desktop`: `1024px - 1440px` (full interactive layout, bento grids, sticky sidebars)
  - `wide`: `> 1440px` (expansive display with generous breathing room)

---

## 5. Micro-Interactions & Motion Principles

1. **Restrained Spring Motion:** Hover states scale smoothly by 1.015 - 1.025 with ease-out cubic bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Interactive Canvas / Particle Systems:** Ambient geometric node visualizer in the Hero that responds fluidly to mouse position without blocking scroll or CPU performance.
3. **Filter Transitions:** Fast, fluid layout reorganization with clean fade-in animations.
4. **Accessible Reduced-Motion:** Immediate fallback to standard opacity transitions when `@media (prefers-reduced-motion: reduce)` is active.
5. **Zero-Fluff Interactive Modals:** Project technical deep-dive drawer / modal with keyboard `ESC` dismissal, focus-trapping, and clean metadata display.

