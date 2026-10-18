# Design Review: larbaco.com

Review of the current site before any large rewrite. This document lists what works, what is broken or weak, and a phased proposal. No application code changes in this branch.

## Method

- Ran the Vite dev server from `master` (commit `1b1803e`) and captured screenshots of Home, Projects, Resume, About and Contact at 1440x900 and 390x844.
- Measured layout with Playwright at 390px and 1366px on each route.
- The `frontend-design` skill was not available in this session. The review applies its principles directly: commit to one clear direction, strong hierarchy, distinctive typography, a restrained palette, and no generic card grids.

## What works

- The command-center direction is coherent. Numbered monospace eyebrows (`01 / INÍCIO`, `02 / PROJETOS`), dark surfaces, thin borders and the About timeline give the site a recognizable identity.
- The Home hero states who Thiago is in one glance, with a clear primary CTA (Currículo) and secondary CTAs.
- About and Resume use the same panel language, so the pages feel related.
- Body text color (`#8b949e` on `#0d1117`) is about 5.7:1 by my calculation, which meets WCAG AA for normal text.

## Problems

Ordered by impact.

1. **No navigation on mobile (high).** `.navbar-nav` is `display: none` at `max-width: 992px` and there is no menu toggle. On a phone, Projects, About, Contact and Resume are reachable only through Home's CTAs.
2. **Headings clip on mobile (high).** At 390px the Home `h1` ("Thiago Cabral", 48px) and the Projects title ("Projetos selecionados") run past the right edge and are cut off in screenshots. Measured `scrollWidth` equals the viewport width, so the page itself does not scroll sideways and the clipping is easy to miss. The root cause is not traced yet; likely a column wider than the viewport that an ancestor hides.
3. **Fixed footer covers content (medium).** `.footer-div` is `position: fixed`. On desktop it covers the bottom of Home (the "Foco atual" grid) and the Resume summary, and the print button sits on top of it.
4. **Brand clipped at the top edge (low-medium).** The status dot and the `TC` logo touch the top of the 55px navbar and the green dot is partly cut off.
5. **Projects page looks empty (medium).** One featured project fills the page. Its visual is a large `01` placeholder with no imagery, and there is no secondary grid, so the page reads as unfinished.
6. **Generic grid on Home (low).** The "Foco atual" 2x2 cards repeat the same card treatment as the stack panel and add little information.
7. **Green accent is overused (low).** The green appears on eyebrows, the primary button, the status dot (pulsing), timeline details and panel borders. That weakens the primary CTA as the one place to look.

## Proposal

Phased so each step can be reviewed on its own. Per `DESIGN_ROADMAP.md`, the navbar and footer changes need Thiago's approval before implementation.

**Phase 1: fix what is broken (small, low risk)**
- Add a mobile menu for `max-width: 992px` (a toggle button that opens the existing `navbar-nav` list). *Touches the navbar, needs approval.*
- Replace fixed heading sizes with `clamp()` and allow long words to wrap on small screens (Home `h1`, page titles).
- Give `.main-div` bottom padding that matches the footer height, or make the footer part of the page flow. *Touches the footer, needs approval.*
- Align the brand dot and logo inside the navbar.

**Phase 2: hierarchy**
- Projects: make the featured project a real visual (screenshot or a designed image frame), then add a compact grid of 2–3 secondary projects. Keep the existing EN/PT copy in sync in `src/pages/projects/{en,pt}.json`.
- Home: replace the "Foco atual" grid with a short list inside the stack panel, or drop it.

**Phase 3: accent discipline**
- Keep the green for the primary CTA, the active nav item and the status dot. Use the blue for links and secondary elements.
- Reduce the pulse animation to the status dot only.

## Second pass: frontend-design skill

Source: `anthropics/skills`, `skills/frontend-design`. Thiago pointed to it after the first pass, so this section refines the principles-only review above. I read the skill through a summary of its SKILL.md, not the raw file.

### Subject

Backend developer and DevOps analyst with public-sector infrastructure work. The audience is recruiters and tech leads who scan in under a minute. The site should read as an engineer's own place: precise, calm and evidence-first.

### Defaults the skill flags, found on this site

- **Near-black with acid green.** `#0d1117` with `#00ff9d` is the combination the skill lists as a default.
- **Numbered eyebrow labels on every page.** `01 / INÍCIO`, `02 / PROJETOS`, `03 / CURRÍCULO`, plus 13 uppercase label styles across the stylesheets.
- **Identical bordered panels in grids.** The "Foco atual" 2x2 grid and the Projects `01` placeholder.
- **Big-number stat strip.** The Resume "6 / 9 / 5 / 6" strip is the big number + small label pattern.
- **Decorative pulse.** The status dot pulses forever.

### Quality floor gaps

- No `prefers-reduced-motion` rule in the stylesheets, so the status dot animates for everyone.
- `:focus-visible` is defined only for `.resume .section-header`. I did not find a global focus style.

### Design plan, two directions

**Option A: refine the current dark identity (recommended).** Keeps the canvas that `DESIGN_ROADMAP.md` marks as approved and removes the defaults above.
- Palette: canvas `#0d1117`, surface `#161b22`, border `#30363d`, text `#e6edf3`, muted text `#8b949e`, accent `#00ff9d` for the primary CTA and active nav only, link blue `#58a6ff`.
- Labels: sentence-case section titles. Keep numbers only on the Resume timeline, where they mark a real sequence.
- Type roles: Inter for headings and body (semi-bold for hierarchy). JetBrains Mono for data only: stack items, dates, and the status line.
- Home: two columns. Name, role and one summary sentence with three CTAs on the left. A single list of stack items on the right, replacing the "Foco atual" grid.
- Projects: the featured project full width with a real image. Secondary projects as list rows, not identical cards.
- Motion and focus: a 2px green focus ring on all interactive elements. The status pulse stops under `prefers-reduced-motion`.

**Option B: new light direction.** A bigger change that replaces the approved identity across all pages.
- Palette: paper `#f5f2ea`, ink `#1b1a17`, muted `#5f5b52`, rule `#d9d3c4`, accent teal `#0f5c57`, status orange `#c2410c`. Contrast needs checking before use.
- Type roles: a serif display for the name and section titles, Inter for body, JetBrains Mono for data only.
- Layout: a single editorial column with a left index for sections.
- Cost: touches every page and the About and Contact pages that the roadmap marks as approved.

**Home layout, Option A** (wireframe):

```
┌──────────────────────────────────────────────────────────┐
│ Thiago Cabral                          ┌ Stack ───────┐  │
│ Backend developer and DevOps analyst   │ Java         │  │
│                                        │ Linux        │  │
│ One-sentence summary.                  │ GitLab       │  │
│                                        │ Argo CD      │  │
│ [Currículo]  [Projetos]  [Contato]     │ OpenShift    │  │
│                                        │ SQL          │  │
│ ──────────────────────────────────     └──────────────┘  │
│ Location · Timezone · Status                             │
└──────────────────────────────────────────────────────────┘
```

## Third pass: full frontend-design skill

This pass follows the full skill text. Process: plan, review against the brief, then build. Nothing here is committed yet.

### Plan (brief: Option A, refine the dark identity)

- **Subject and audience.** Thiago Cabral, backend developer and DevOps analyst with public-sector infrastructure work. Recruiters and tech leads scanning in under a minute. Primary job: show competence and make contact or the resume easy to reach.
- **Color, 5 named values.** Canvas `#0d1117`, surface `#161b22`, rule `#30363d`, text `#e6edf3`, muted `#8b949e`. Accent `#00ff9d` is kept for now. See open decision 1.
- **Type.** Inter for headings and body. JetBrains Mono for data only: stack items, dates, status.
- **Layout.** Two columns on desktop. Name, role, summary and CTAs on the left. Stack and focus panels on the right. Left-aligned throughout, no centered blocks.
- **Principles.** One memorable element (the name in mono at display size). Everything else quiet. No numbering without a sequence. No decorative gradients.

### Review against the brief

- **Proposed, then rejected by Thiago:** removing the numbered label on Home (`01 / Início`), removing the gradient wash on the stack and focus panels, and changing "Foco atual" from a 2x2 grid of boxed cards to plain rows. These were design decisions and Thiago keeps them. They are reverted in the branch and are not part of this PR.
- **Kept.** The green accent, the all-caps panel titles, and the eyebrows on the other pages. They are defaults the skill lists, but they are part of the approved identity. They are open decisions below, not silent changes.
- **Quality floor.** The focus ring and reduced-motion rule are proposed in Phase 1. They are not implemented in this branch.

### Open decisions

1. **Accent green** (`#00ff9d`) is the default the skill flags for near-black. A warm amber such as `#e3b341` is a candidate. Changing it touches every page.
2. **All-caps panel titles and numbered eyebrows** on the other pages. Remove them page by page, or keep them as the house style.
3. **Navbar and footer** still need approval (see Phase 1).

## Correction plan

Scope: fixes only. Design improvements (all-caps labels, accent color, card layouts, resume density) are left out until Thiago decides on them.

**Status:** applied on this branch and approved by Thiago: 1 (mobile menu), 2 (footer translation), 4 (print button padding), 5 (print button label), 6 (document language), 12 (control border token on four components) and 13 (flag hit area). Section numbering follows option (a), the menu order. The sub-labels in Sobre became `03.1` and `03.2` so they do not clash with the page number `03`. Not applied: 3 (fixed footer covering content), 7 (meta description), 8 (per-page titles), 9 (`<h1>` on Projetos, Sobre and Contato), 10 (heading clipping) and 11 (focus and reduced motion).

Each step is verified with `npm run build`, `npx vitest run`, and a Playwright check at 390px and 1366px for every route (Início, Projetos, Currículo, Sobre, Contato).

### Group 1: needs approval (navbar and footer)

1. **Mobile menu (≤992px).** `.navbar-nav` is `display: none` in `src/global.css` (media query near line 296). Add a toggle button with `aria-expanded` and `aria-controls` in the navbar in `src/App.jsx`. Close it on route change and on Escape. *Check:* all five routes are reachable at 390px by keyboard and touch.
2. **Footer text in English.** `src/components/layout/Footer.jsx` hardcodes "Made by Thiago Cabral 2026". Move it to a translation key in `APP_CONFIG.translations` (`src/App.jsx`) and mirror it in the JSON files, following the three-place rule. *Check:* PT shows the PT text and EN shows the EN text.
3. **Fixed footer covers content on mobile.** `.footer-div` is `position: fixed`. Give `.main-div` bottom padding that matches the footer height, or make the footer part of the page flow. *Check:* the Contato "Copiar" button for the phone is fully visible at 390px.

### Group 2: no approval needed beyond this plan

4. **Print button covers the last block on mobile (Currículo).** Add bottom padding to the resume page so the floating button does not cover the e-mail and site rows. Do not hide the button. *Check:* the last row is reachable at 390px.
5. **Print button label in English.** `src/components/PrintButton.jsx` has `aria-label="View Print Format"`. Pass the language in and use a translation key. *Check:* the PT page has a PT label.
6. **Document language.** `index.html` has `lang="en"`, but the default is PT. Set `lang` to `pt-BR` and update `document.documentElement.lang` in `App.jsx` when the language changes. *Check:* the attribute matches the visible language after switching.
7. **Meta description in English.** Move the `<meta name="description">` in `App.jsx` to the translations, in both languages.
8. **Per-page titles.** Every route has the same `<title>`. Set a page title per route, using translation keys. *Check:* each route has its own title in the browser tab.
9. **Missing `<h1>`.** Projetos, Sobre and Contato use an `<h2>` as the page title. Change the element to `<h1>` and keep the existing CSS selectors working, so the page looks the same. *Check:* one `<h1>` per page, and the visual result is unchanged.
10. **Heading clipping on mobile (Início).** Re-apply the title size fix that was reverted earlier: `font-size: clamp(2.25rem, 6vw, 5.5rem)` and no 48px override at ≤900px. *Check:* "Thiago Cabral" fits at 390px and the desktop size is unchanged at 1366px.
11. **Keyboard focus and reduced motion.** Re-apply the `:focus-visible` outline and the `prefers-reduced-motion` block that were in commit `23d2849` and were removed from this branch. *Check:* Tab moves a visible outline across the navbar and the page links, and the status dot stops pulsing when reduced motion is set.

### Group 3: contrast and touch targets

12. **Control borders below 3:1.** Border color `#30363d` on `#161b22` measures about 1.42:1. WCAG 1.4.11 asks for 3:1 on borders that identify controls. Measure a candidate with a script, then change only the border token used by secondary buttons and cards. *Check:* the measured ratio is at least 3:1 and the cards still read as separate from the surface.
13. **Language flags.** The flag images are about 24x21px. Keep the image size and enlarge the clickable area to at least 24x24px, and ideally 44x44px, using padding or a pseudo-element. *Check:* the hit area is measured in Playwright.

### Not in this plan

- Section numbering (`01 / …`) and the other design choices in the review. These need a design decision first.

## Text changes

Any copy change must update all three places: `APP_CONFIG.translations` in `src/App.jsx`, `src/pages/projects/{en,pt}.json`, and `public/data/{en,pt}.json`.

## Next step

Thiago to choose a direction (Option A or B) and approve Phase 1 (including the navbar and footer changes). Then implement Phase 1 on this branch under the chosen direction, run `npm run build` and `npx vitest run`, and ask for validation before Phase 2.
