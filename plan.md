# Project Plan: Dark Theme Redesign

## Overview
Redesign larbaco.com with a GitHub Dark Theme-inspired design system. Replace Bootstrap components with custom CSS. The site is a React + Vite SPA with EN/PT language support, deployed on Firebase.

---

## Current State

### Bootstrap Usage (to be removed)
- **Components:** Container (6 files), Navbar/Nav (App), Row/Col (Hero, Footer, Carousel, Projects), Card/Card.Body/Card.Title/Card.Text (Projects)
- **CSS:** `import 'bootstrap/dist/css/bootstrap.css'` in `src/index.jsx`
- **Utility classes:** `p-0`, `p-1`, `p-5`, `pt-1`, `px-0`, `m-0`, `ms-auto`, `fluid`, `sticky-top`, `text-center`, `justify-content-center`, `justify-content-between`, `d-inline-block`, `h-100`, `g-4`, `border-top`, `btn`, `container`, `nav-link`, `active`
- **Packages:** `bootstrap@5.3.3`, `react-bootstrap@2.10.9`

### Current Design System (fragmented)
- **Global:** warm gray `#92867f` bg, purple-to-lime gradient, no unified tokens
- **Resume:** blue `#2a7fff` primary, separate variable set from global
- **Projects:** defaults to Bootstrap blue `#007bff`
- **Typography:** system font stack, `Inter` referenced but never loaded, no type scale
- **Spacing:** ad-hoc values, mixed `px`/`rem`/`em`/`vh`

### Layout Structure
```
<main> (CSS Grid: auto | 1vh | minmax(60vh, 1fr) | auto)
  <header class="topSide">    (fixed, 55px, z-index 1000)
  <div class="gradient-bar">  (1vh purple-to-green divider)
  <div class="bottomSide">    (main scrollable content, padding-top: 125px)
  <footer class="footer-div"> (fixed bottom, z-index 1000)
</main>
```

---

## Task List

```json
[
  {
    "category": "foundation",
    "description": "Set up design tokens, fonts, and dark theme base",
    "steps": [
      "Add Google Fonts link for Inter (400/500/600/700) and JetBrains Mono (400/600) to index.html",
      "Replace the two separate :root blocks (global.css and resume/styles.css) with a single unified :root in global.css",
      "Define color tokens: bg-canvas #0d1117, bg-surface #161b22, border-default #30363d, text-primary #e6edf3, text-secondary #8b949e, accent-green #00ff9d, accent-blue #58a6ff",
      "Define typography tokens: font-sans 'Inter', font-mono 'JetBrains Mono', type scale (xs/sm/base/lg/xl/2xl/3xl) with rem values",
      "Define spacing scale: 0.25rem increments from --space-1 (4px) to --space-8 (32px)",
      "Define shared tokens: --radius-sm (4px), --radius-md (8px), --radius-lg (16px), --shadow-sm/md/lg, --transition-fast (150ms), --transition-normal (250ms)",
      "Set body background to bg-canvas, text to text-primary, font to Inter in global.css",
      "Remove old global variables (--primary-bg, --gradient-start, --gradient-end, --text-light, --text-dark, --hover-scale)",
      "Update resume/styles.css :root to use the shared tokens instead of its own independent set"
    ],
    "passes": false
  },
  {
    "category": "layout",
    "description": "Rebuild navbar without Bootstrap",
    "steps": [
      "In App.jsx, replace <Navbar> and <Nav> from react-bootstrap with a plain <nav> element",
      "Style the navbar: position fixed top, full-width, bg bg-surface/80, backdrop-filter blur(12px), border-bottom border-default, height 55px, z-index 1000",
      "Implement nav links as plain <a> or <NavLink> elements with text-secondary color, hover:text-primary transition",
      "Move language toggle flags to the right side using flexbox (justify-content: space-between)",
      "Add a subtle animated green status dot (8px circle, accent-green) before the logo or nav brand",
      "Replace Bootstrap utility classes: sticky-top → custom CSS, ms-auto → margin-left: auto, nav-link → custom .nav-link class, active → .nav-link.active",
      "Ensure mobile hamburger menu works without Bootstrap's collapse JS (use CSS-only or minimal React state toggle)"
    ],
    "passes": false
  },
  {
    "category": "layout",
    "description": "Rebuild footer without Bootstrap",
    "steps": [
      "In Footer.jsx, replace Container/Row/Col from react-bootstrap with semantic HTML and CSS Grid/Flexbox",
      "Style footer: position fixed bottom, full-width, bg bg-surface, border-top border-default, padding --space-3",
      "Replace utility classes: border-top → border-top: 1px solid var(--border-default), justify-content-between → flex justify, p-1/m-0/p-0 → spacing tokens",
      "Ensure footer text uses text-secondary color, links use text-secondary with hover:text-primary"
    ],
    "passes": false
  },
  {
    "category": "foundation",
    "description": "Update main layout grid and remove gradient bar",
    "steps": [
      "In global.css, update .main-div CSS Grid to: 'auto 1fr auto' (remove the 1vh gradient bar row)",
      "Remove the gradient bar div between topSide and bottomSide in App.jsx",
      "Update .bottomSide: remove padding-top: 125px hack, use padding-top equal to navbar height + spacing (e.g., calc(55px + var(--space-4)))",
      "Update .bottomSide: remove padding-bottom: 10vh hack, use padding-bottom equal to footer height + spacing",
      "Keep both topSide and footer as position: fixed with z-index 1000"
    ],
    "passes": false
  },
  {
    "category": "components",
    "description": "Redesign home page and hero section",
    "steps": [
      "In Hero.jsx, replace Container/Row/Col with custom layout using CSS Grid or Flexbox",
      "Replace the carousel with a static hero: large JetBrains Mono heading, subtitle in Inter, blinking cursor animation on the heading",
      "Add a subtle dot-grid background pattern using CSS radial-gradient on the home page",
      "Style the hero with vertical centering, max-width container, text-primary for heading, text-secondary for subtitle",
      "Replace Bootstrap utility classes: p-0, justify-content-center, text-center, p-5, fluid → custom CSS using spacing tokens",
      "In home/index.jsx, remove Container import, use a custom .page-container class with max-width and auto margins"
    ],
    "passes": false
  },
  {
    "category": "components",
    "description": "Redesign projects page with dark cards",
    "steps": [
      "In projects/index.jsx, replace Card/Card.Body/Card.Title/Card.Text and Container/Row/Col with custom HTML",
      "Create a CSS Grid layout for project cards: auto-fill, minmax(320px, 1fr), gap --space-6",
      "Style project cards: bg-surface background, 1px border-default border, border-radius --radius-lg, padding --space-5",
      "Add hover effect: subtle border-color transition to accent-green, box-shadow glow 0 0 20px rgba(0,255,157,0.1)",
      "Style project title: font-mono (JetBrains Mono), text-lg, text-primary",
      "Style project description: text-secondary, font-size base",
      "Style demo/code links as inline-flex items with accent-blue color and hover underline",
      "Replace utility classes: px-0, g-4, h-100, btn → custom CSS",
      "Ensure project images have border-radius --radius-md and dark background fallback"
    ],
    "passes": false
  },
  {
    "category": "components",
    "description": "Redesign resume page with dark theme",
    "steps": [
      "Update resume/styles.css: replace all hardcoded colors with design tokens (bg-surface, text-primary, text-secondary, border-default)",
      "Update .resume .container: bg bg-surface, border 1px border-default, box-shadow --shadow-lg, border-radius --radius-lg",
      "Update .resume .header: bg bg-canvas, border-bottom 1px border-default, remove the old #f0f0f0 background",
      "Update section headers: color accent-blue instead of --primary-color, keep the ▹ indicator but in accent-green",
      "Update timeline: timeline line in border-default, dots in accent-blue, timeline-content bg bg-surface with border border-default",
      "Update skill dots: filled dots use accent-green instead of --primary-color",
      "Update contact icon colors to use muted versions (text-secondary with opacity)",
      "Update print.css: override dark tokens to white/black for printing (bg white, text black, borders light gray)"
    ],
    "passes": false
  },
  {
    "category": "components",
    "description": "Redesign about and contact pages with dark theme",
    "steps": [
      "Update about page styles: bg bg-surface, border border-default for content cards, text-primary for headings, text-secondary for body",
      "Update contact page: preserve the CSS pixel art invader but update its background to bg-canvas, update any surrounding text colors to use tokens",
      "Add consistent .page-container class to both pages: max-width 900px, margin auto, padding --space-6 on each side",
      "Ensure all headings use the type scale tokens, all body text uses text-secondary"
    ],
    "passes": false
  },
  {
    "category": "cleanup",
    "description": "Remove Bootstrap dependency entirely",
    "steps": [
      "Remove 'import bootstrap/dist/css/bootstrap.css' from src/index.jsx",
      "Run npm uninstall bootstrap react-bootstrap",
      "Search entire src/ for any remaining Bootstrap utility classes and replace with custom CSS",
      "Search entire src/ for any remaining react-bootstrap imports and remove them",
      "Run npm run build and verify zero errors",
      "Check all 5 pages in browser: no layout breaks, no missing styles, no console errors"
    ],
    "passes": false
  },
  {
    "category": "verification",
    "description": "Test responsive design across breakpoints",
    "steps": [
      "Navigate to each page at viewport 375px (mobile) — verify navbar, content, footer render without overflow",
      "Navigate to each page at viewport 768px (tablet) — verify grid layouts adapt, cards stack properly",
      "Navigate to each page at viewport 1440px (desktop) — verify max-width containers center properly",
      "Test language toggle (EN/PT) at mobile viewport — verify flags are accessible",
      "Take a screenshot at each breakpoint"
    ],
    "passes": false
  },
  {
    "category": "verification",
    "description": "Verify production build and deploy",
    "steps": [
      "Run npm run build — must complete with zero errors",
      "Run npm run preview — verify the production build renders correctly",
      "Check all 5 pages for console errors in the preview build",
      "Verify print button works on resume page in preview build",
      "Verify language switching works in preview build"
    ],
    "passes": false
  }
]
```
