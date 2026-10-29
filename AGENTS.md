# AGENTS.md — Repository Instructions for AI Agents

## Read first, build second

Before starting any task on this repository, read:
1. **`MASTER_PLAN.md`** — the permanent project specification and source of truth
2. **`PROJECT_NOTES.md`** — the current implementation state and phase log

Do not begin work without reading both files. Do not repeat completed work.

---

## Non-negotiable rules

### Technology Stack (Strict)
- **Plain HTML5, CSS3, and vanilla JavaScript only.**
- **No frameworks or bundlers:** Do not introduce React, JSX, Vite, Vue, Angular, Next.js, TypeScript, Webpack, Rollup, or any compile/build system.
- The website must remain a pure static site that works by opening `index.html` directly in a browser or serving it with any standard static HTTP server.
- Standard file structure:
  ```text
  bhumi-associates/
  ├── index.html
  ├── css/
  │   └── style.css
  ├── js/
  │   ├── main.js
  │   └── properties.js
  ├── assets/
  │   ├── images/
  │   └── fonts/
  ├── MASTER_PLAN.md
  ├── PROJECT_NOTES.md
  └── AGENTS.md
  ```

### Design
- Preserve **Apollo Slider 1**'s visual direction throughout every phase.
  Reference: https://ivang-design.com/apollo/slider1/
- Use **Poiret One** (Google Fonts) for all headings — verified as the exact font used in the reference.
- Use **Open Sans 300** (Google Fonts) for body text — equivalent to the reference's self-hosted OpenSans-Light-webfont.
- Keep all design tokens centralized in `css/style.css`.
- Do not introduce generic blue gradients, excessive rounded cards, cluttered icon grids, or animation on every element.

### Business content
- Use **only the verified business details** in MASTER_PLAN.md § 1.
- Do **not** invent staff, testimonials, statistics, ratings, property listings, prices, experience claims, or guarantees.
- Label any development-only sample content clearly as **[SAMPLE — NOT REAL]**.
- All contact links (tel, wa.me, Google Maps) must use the exact verified values.

### Code quality
- Inspect existing code before editing. Reuse completed work.
- Work only on the phase explicitly requested.
- Never delete working code or rebuild the repository unnecessarily.
- All visible buttons and links must do what they promise.
- No console errors, broken images, dead controls, or accidental lorem ipsum.
- Keep property data in `js/properties.js` decoupled from rendering logic in `js/main.js`.
- Verify pages across viewport widths (320px, 480px, 768px, 960px, 1200px) and check for zero browser console errors before declaring a phase complete.

### After each phase
- Update `PROJECT_NOTES.md` with: files changed, features completed, known issues, next actions.
- Report: files changed · what now works · test results · known issues · confirmation PROJECT_NOTES.md was updated · recommended next phase.
- Do not begin the next phase until the user asks.

---

## Phase checklist (do not skip ahead)

| Phase | Title | Status |
|---|---|---|
| 0 | Inspect and initialize | ✅ Complete |
| 1 | Design foundation and header | ✅ Complete (Converted to pure HTML/CSS/JS) |
| 2 | Hero slider | ✅ Complete |
| 3 | About, trust, people, services | ✅ Complete |
| 4 | Property gallery | ✅ Complete |
| 5 | Insights, contact, map, footer | ✅ Complete |
| 6 | Motion and responsive polish | ✅ Complete |
| 7 | QA, SEO, production readiness | ✅ Complete |
