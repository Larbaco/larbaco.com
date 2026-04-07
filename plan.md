# Project Plan

## Overview
Improve and maintain the larbaco.com portfolio site (React + Vite + Bootstrap). Multilingual (EN/PT) SPA deployed on Firebase Hosting.

**Reference:** `PRD.md`

---

## Task List

```json
[
  {
    "category": "testing",
    "description": "Verify all pages load without errors",
    "steps": [
      "Start dev server and verify it starts cleanly",
      "Open home page and check for console errors",
      "Navigate to projects, resume, about, contact pages",
      "Verify no 404s or broken images"
    ],
    "passes": true
  },
  {
    "category": "testing",
    "description": "Test language switching (EN/PT)",
    "steps": [
      "Verify language flags render in navbar",
      "Switch to PT and verify all labels translate",
      "Switch back to EN and verify content restores",
      "Check localStorage persistence across reload"
    ],
    "passes": false
  },
  {
    "category": "feature",
    "description": "Verify resume page and print button functionality",
    "steps": [
      "Open resume page and verify all sections render",
      "Test collapsible sections expand/collapse",
      "Click print button and verify print dialog triggers",
      "Check print CSS applies correctly"
    ],
    "passes": false
  },
  {
    "category": "feature",
    "description": "Verify projects page grid and images",
    "steps": [
      "Open projects page and verify card grid renders",
      "Check all project images load without 404s",
      "Verify demo and code links are valid URLs",
      "Test responsive layout on narrow viewport"
    ],
    "passes": false
  },
  {
    "category": "testing",
    "description": "Run build and verify no errors",
    "steps": [
      "Run npm run build successfully",
      "Check for any build warnings",
      "Preview production build with npm run preview"
    ],
    "passes": false
  }
]
```

---

## Agent Instructions

1. Read `activity.md` first to understand current state
2. Find next task with `"passes": false`
3. Complete all steps for that task
4. Verify in browser via Playwright
5. Update task to `"passes": true`
6. Log completion in `activity.md`
7. Repeat until all tasks pass

**Important:** Only modify the `passes` field. Do not remove or rewrite tasks.

---

## Completion Criteria
All tasks marked with `"passes": true`
