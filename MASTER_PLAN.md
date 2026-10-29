# MASTER_PLAN.md — Bhumi Associates Website
## Permanent Project Specification · Source of Truth

> Do not let later phases silently drift from this file.

---

## 1. VERIFIED BUSINESS FACTS

| Field | Value |
|---|---|
| **Business name** | Bhumi Associates |
| **Business type** | Real estate — property buying and selling |
| **Address** | D/556B, Punjabi Colony, Block D, Bhajanpura, Shahdara, New Delhi, Delhi 110053, India |
| **Phone** | +91 98716 53127 |
| **Call link** | `tel:+919871653127` |
| **WhatsApp** | `https://wa.me/919871653127` |
| **Google Maps** | `https://maps.app.goo.gl/ohnXseNPDSoFGzv17` |

### Primary goals
1. Generate enquiries from property buyers.
2. Generate enquiries from property owners looking to sell.
3. Build trust with prospective customers.
4. Make phone and WhatsApp contact easy.
5. Present verified property listings when provided.
6. Help visitors find the business location.

### Content integrity rules
- Do **not** invent: business history, years of experience, awards, employees, testimonials, reviews, ratings, statistics, registration details, property listings, prices, property availability, or guarantees.
- No verified property inventory or real testimonials exist yet.
- Use a truthful empty state or clearly labelled **[SAMPLE — NOT REAL]** development-only content until verified content is provided.

---

## 2. DESIGN REFERENCE — NON-NEGOTIABLE

**Primary reference:** https://ivang-design.com/apollo/slider1/

The site must be a real-estate adaptation of Apollo Slider 1, not a generic property website.

### Verified Apollo Slider 1 Characteristics (inspected 2026-10-29)

**Page structure (top to bottom):**
1. Full-screen hero slider with max-image plugin (full-viewport background images)
2. Circular logo + brand name overlay, horizontal rule lines above and below the brand name
3. Social links (horizontal, animated hover effect `cl-effect-18` — sliding underline from below)
4. Sticky navigation (becomes fixed on scroll via `jquery.sticky`)
5. About / Profile section (section reveals: `cbp-so-side-left` slides in from left, `cbp-so-side-right` from right)
6. Parallax divider section (full-width, fixed background)
7. Team section
8. Services section
9. Portfolio / Works (Isotope.js masonry + category filter)
10. Blog section (bxSlider carousel)
11. Parallax section 4 (testimonials with bxSlider)
12. Contact / "LET'S HAVE A CHAT" section (split heading)
13. Contact form + contact info row
14. Footer with copyright and social links

**Hero slider:**
- Plugin: `jquery.maximage` + `jquery.cycle` for cross-fading full-bleed images
- Left/right arrow controls (`#arrow_left`, `#arrow_right`)
- Brand name overlaid center-screen (not inside slide content per-slide)
- Scroll cue arrow at bottom: `#arrow` div linking to `#profile`

**Section reveal animation:**
- On scroll, sections with `.cbp-so-init` class animate to full opacity + translateX(0) from ±200px
- Transition: `transform 1s, opacity 1s`
- Delay: 0.1s for right-side elements

**Section title treatment:**
- Large `h1` on left side
- Angled second line (`div.angle > h1`) with a vertical rule (`div.line-vert`) below it
- Horizontal line (`div.line`) between headline lines

**Contact section heading pattern:**
```html
<h1><strong><span>LET'S</span></strong></h1>
<div class="angle"><h1><strong>HAVE A CHAT</strong></h1></div>
<div class="line-vert"></div>
```

**Portfolio / gallery:**
- Isotope.js masonry layout
- Category filter list (`#filter ul li a`) with data attributes
- ColorBox for lightbox on click

---

## 3. VERIFIED TYPOGRAPHY (inspected from CSS source)

### Heading font
- **Font family:** `Poiret One` (Google Fonts)
- **Google Fonts URL:** `http://fonts.googleapis.com/css?family=Poiret+One&subset=latin,latin-ext,cyrillic`
- **CSS declaration:** `font-family: 'Poiret One', cursive;`
- **Applied to:** all `h1`–`h6` elements
- **Text transform:** `uppercase`
- **Font weight:** `600` (declared) — Poiret One is inherently a thin/display font; the weight renders as bold-display

### Body font
- **Font family:** `OpenSans-Light-webfont` (self-hosted in `css/font/`)
- **Google Fonts equivalent:** Open Sans, weight 300 (Light)
- **CSS declaration:** `font-family: 'OpenSans-Light-webfont';`
- **Applied to:** `body`, general prose, testimonials, labels
- **Font size:** `16px`, `line-height: 24px`

### Heading sizes (desktop)
| Element | Size | Line height |
|---|---|---|
| h1 | 60px | 62px |
| h2 | 52px | 54px |
| h3 | 44px | 46px |
| h4 | 34px | 40px |
| h5 | 26px | 32px |
| h6 | 22px | 26px |

### Heading sizes (mobile 480–600px)
| Element | Size | Line height |
|---|---|---|
| h1 | 30px | 32px |
| h2 | 55px | 57px (unchanged approx) |

### Home text overlay (hero)
| Element | Size | Line height |
|---|---|---|
| `.home-text-top` | 30px | 30px |
| `.home-text-middle` (brand name) | 80px | 80px |
| `.home-text-bottom` | 30px | 30px |

### Color context
- Headings: `color: #e9e9e9` (near-white)
- h4: `color: #EC572C` (orange-red accent — **not** used for Bhumi; substitute with bronze `#A77B43`)
- Body text / background: `color: #fff` on dark sections
- General background: `#f5f5f5`

### Implementation plan for Bhumi Associates
- **Use Poiret One** via Google Fonts for headings (free, legally available)
- **Use Open Sans 300** via Google Fonts for body (equivalent to OpenSans-Light-webfont)
- Document substitution: OpenSans-Light-webfont is identical to Open Sans 300 weight from Google Fonts — no visual difference

---

## 4. DESIGN SYSTEM TOKENS

```css
:root {
  /* Colors */
  --color-charcoal:   #151515;
  --color-dark:       #262626;      /* Apollo dark sections */
  --color-off-white:  #F7F6F2;
  --color-white:      #FFFFFF;
  --color-gray:       #858585;
  --color-light-gray: #e9e9e9;      /* Apollo heading color */
  --color-bronze:     #A77B43;      /* Accent — replaces Apollo's #EC572C */
  --color-bg:         #f5f5f5;      /* Apollo body background */

  /* Typography */
  --font-heading: 'Poiret One', cursive;
  --font-body:    'Open Sans', sans-serif;
  --font-weight-body: 300;

  /* Heading scale */
  --text-h1: 60px;
  --text-h2: 52px;
  --text-h3: 44px;
  --text-h4: 34px;
  --text-h5: 26px;
  --text-h6: 22px;

  /* Spacing */
  --section-pad-y: 100px;

  /* Transitions */
  --transition-base: all 0.3s ease-out;
  --transition-section: transform 1s, opacity 1s;
}
```

---

## 5. SITE STRUCTURE

One cohesive landing page (`index.html`) with these sections in order:

| # | Section | Notes |
|---|---|---|
| 1 | Header / Navigation | Sticky, Apollo-style horizontal nav |
| 2 | Hero Slider | Full-screen, 3 slides, Poiret One headings |
| 3 | About — "WHO WE ARE." | Split-line heading, left/right reveal |
| 4 | Trust Principles | 4 genuine principles, no fabricated stats |
| 5 | Testimonials alternative | "What matters when you buy or sell" |
| 6 | Business Introduction | No fabricated staff |
| 7 | Services | 3 blocks: Buy / Sell / Enquiries |
| 8 | Contact CTA Strip | "LET'S TALK PROPERTY." |
| 9 | Property Gallery | Isotope filters, honest empty state / labelled samples |
| 10 | Property Insights | Editorial layout, draft content clearly labelled |
| 11 | Contact Form + Map | WhatsApp fallback, verified details only |
| 12 | Footer | Wordmark, nav, contact, copyright |

### Hero slider slides
| Slide | Heading | CTA |
|---|---|---|
| 1 | `FIND YOUR PLACE.` | `EXPLORE PROPERTIES` |
| 2 | `YOUR NEXT CHAPTER.` | `FIND A PROPERTY` |
| 3 | `READY FOR WHAT'S NEXT?` | `SELL YOUR PROPERTY` |

Supporting label: `REAL ESTATE · NEW DELHI`
Intro copy: *"Discover property opportunities with Bhumi Associates. Whether you're buying your next home or selling a property, let's start the conversation."*

### Services
- **Buy a Property** — discuss preferred location, type, budget, and requirements
- **Sell a Property** — help owners start an enquiry about selling
- **Property Enquiries** — a point of contact for people exploring opportunities

### Contact
- Heading: `LET'S` / `TALK PROPERTY.`
- Fields: Full name · Phone · Enquiry type (Buy / Sell / General) · Preferred location (optional) · Budget (optional) · Message
- No backend — WhatsApp fallback with prefilled message
- Show: phone, WhatsApp, address, Google Maps link

### Gallery
- Filters: All · Residential · Apartments · Independent Houses · Commercial
- No verified listings yet — honest empty state or clearly labelled `[SAMPLE — NOT REAL]` cards
- Property data stored in a central editable data file

---

## 6. FUNCTIONAL REQUIREMENTS

### Motion
- Section reveals: translateX from ±200px, opacity 0→1, duration 1s (Apollo pattern)
- Hero transitions: smooth cross-fade
- Heading/image hover effects: restrained, 0.3s ease-out
- Sticky nav transition
- Mobile menu open/close animation
- Gallery filter transition (Isotope-style)
- `prefers-reduced-motion`: disable all transforms and transitions

### Responsive
- Desktop: ≥960px
- Tablet: 768px–959px
- Mobile: <768px (including 480px, 320px breakpoints matching Apollo CSS)
- Recompose layouts, do not just shrink
- Touch-friendly controls (≥44px tap targets)
- No horizontal overflow
- Mobile swipe for hero slider

### Accessibility
- Semantic HTML5
- ARIA labels on slider controls, nav, form fields
- Visible focus states
- Sufficient contrast (WCAG AA minimum)
- Meaningful alt text on all images
- Keyboard-operable gallery filters, slider, nav, form

### Performance
- Prioritize hero image (LCP)
- Lazy-load below-fold images
- Optimize image sizes
- Avoid unnecessary JS dependencies
- Prevent layout shifts (CLS)

### SEO
- Title: `Bhumi Associates | Property Buying & Selling in New Delhi`
- Description: `Contact Bhumi Associates in Bhajanpura, Shahdara, New Delhi, for property buying and selling enquiries.`
- Canonical URL: set only when production domain is confirmed
- LocalBusiness structured data: only from verified facts above
- Heading hierarchy: one `h1` per page, logical `h2`–`h6` sequence

---

## 7. TECHNICAL RULES

1. Inspect the existing repository before editing.
2. Permanent technology stack: **Plain HTML5, CSS3, and vanilla JavaScript only**. No React, JSX, Vite, Vue, Angular, Next.js, TypeScript, or other frontend frameworks, compilers, or bundlers. The website must remain runnable directly by opening `index.html` in any modern browser or via a simple local static server.
3. Standard file structure:
   - `index.html` (root)
   - `css/style.css` (centralized design tokens and all styles)
   - `js/main.js` (UI logic, navigation, interactions, animations)
   - `js/properties.js` (separate property data store and helpers)
   - `assets/images/` and `assets/fonts/` (static assets)
4. Never delete working code or rebuild unnecessarily. Adapt existing work.
5. Semantic HTML, centralized CSS tokens (`css/style.css`), clear decoupled data structure (`js/properties.js`).
6. Avoid third-party dependencies unless strictly justified and using zero-build methods.
7. All visible buttons and links must do what they promise.
8. No broken images, dead controls, accidental lorem ipsum, console errors, or fake functionality.
9. Do not claim an action succeeded unless it actually succeeded.
10. Test changes across responsive viewports and fix issues before declaring a phase complete.
11. Do not claim deployment unless it actually happened.

---

## 8. PHASE PLAN

| Phase | Title | Completion condition |
|---|---|---|
| **0** | Inspect and initialize | Project and reference understood; memory files created ✅ |
| **1** | Design foundation and header | Responsive foundation + functional nav with centralized tokens |
| **2** | Hero slider | Visually strong hero, working controls, responsive |
| **3** | About, trust, people, services | Accurate content, consistent design, working CTAs |
| **4** | Property gallery | Working filters, responsive cards, no misrepresented data |
| **5** | Insights, contact, map, footer | Honest contact, correct verified details |
| **6** | Motion and responsive polish | Polished transitions, mobile layouts |
| **7** | QA, SEO, production readiness | Build passes, interactions work, no fabricated claims |

### Rules
- Work on only **one phase at a time**.
- Preserve the same repository, components, styles, and decisions between phases.
- After each phase: report files changed, what works, build results, known issues, updated PROJECT_NOTES.md, recommended next phase.
- Do not begin the next phase until instructed.

---

## 9. QA AND CONTENT INTEGRITY RULES

- No fabricated testimonials, staff, statistics, or credentials.
- No invented business history or guarantees.
- Demo/sample listings must be clearly labelled `[SAMPLE — NOT REAL]`.
- All contact links (tel, wa.me, maps) must use the verified values above.
- WhatsApp form fallback must only send after deliberate user submission.
- Never expose secrets in frontend code.
- Contrast must be WCAG AA compliant.
- Build must pass without console errors before a phase is declared complete.

