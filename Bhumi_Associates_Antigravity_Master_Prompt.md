# FINAL MASTER PROMPT --- BHUMI ASSOCIATES WEBSITE

## Antigravity: initialize the project, preserve the design, and build in phases

You are the creative director, UI/UX designer, senior frontend engineer,
animation specialist, accessibility reviewer, and QA engineer for this
project.

Build a polished, responsive real-estate website for **Bhumi
Associates**, a business focused on property buying and selling. Treat
the supplied Apollo webpage as the primary design reference and preserve
its visual identity throughout the project.

**Primary design reference:** https://ivang-design.com/apollo/slider1/

**Important workflow rule:** Do not try to build the entire website in
one giant step. First inspect the reference and initialize the project
documentation. Then build one phase at a time, test it, update the
project notes, and wait for the next instruction before proceeding to
the next phase.

------------------------------------------------------------------------

# 1. BUSINESS FACTS --- SOURCE OF TRUTH

Use these exact details everywhere:

-   **Business name:** Bhumi Associates
-   **Business type:** Real estate --- property buying and selling
-   **Address:** D/556B, Punjabi Colony, Block D, Bhajanpura, Shahdara,
    New Delhi, Delhi 110053, India
-   **Phone:** +91 98716 53127
-   **Call link:** `tel:+919871653127`
-   **WhatsApp:** `https://wa.me/919871653127`
-   **Google Maps:** `https://maps.app.goo.gl/ohnXseNPDSoFGzv17`

Primary goals: 1. Generate enquiries from property buyers. 2. Generate
enquiries from property owners looking to sell. 3. Build trust with
prospective customers. 4. Make phone and WhatsApp contact easy. 5.
Present verified property listings when provided. 6. Help visitors find
the business location.

Do not invent business history, years of experience, awards, employees,
testimonials, reviews, ratings, statistics, registration details,
property listings, prices, property availability, or guarantees. No
supplied property inventory or real testimonials exist yet. Use a
truthful empty state or clearly labelled development-only sample data
until verified content is provided.

------------------------------------------------------------------------

# 2. DESIGN REFERENCE --- A NON-NEGOTIABLE REQUIREMENT

Study the live reference before building, using browser access if
available:

https://ivang-design.com/apollo/slider1/

The site must be a real-estate adaptation of Apollo Slider 1, not a
generic property website.

Reproduce its overall visual language and structure as closely as
possible: - A bold, editorial, image-led opening. - Large display
headings, often split across lines. - Strong typography hierarchy and
deliberate whitespace. - A prominent hero slider with clear controls. -
Carefully composed image-and-text sections. - Editorial-style About,
services, team/business introduction, and content sections. - A visual
portfolio/gallery with working category filters. - Distinctive calls to
action and a strong conversation/contact section. - An integrated,
well-designed footer. - Smooth, restrained transitions and hover
effects. - A coherent composition across desktop, tablet, and mobile.

Do not merely use Apollo's name or make a superficially similar
template. Inspect the reference and use its proportions, hierarchy,
spacing, section rhythm, image treatment, and interaction patterns as
the visual benchmark. Do not claim pixel-perfect reproduction unless you
have actually compared screenshots.

### Design system

Use the reference as the main guide. Initial palette: - Charcoal:
`#151515` - Warm off-white: `#F7F6F2` - White: `#FFFFFF` - Muted gray:
`#858585` - Restrained bronze accent: `#A77B43`

Suggested typography: - Bold display font such as Bebas Neue, or a
visually suitable equivalent. - Readable body font such as DM Sans or
Manrope. - Use the fonts with appropriate fallbacks.

Centralize design tokens as CSS variables. Keep headings dramatic, text
readable, and contrast accessible. Use large images and whitespace
deliberately.

Avoid generic blue gradients, excessive rounded cards, unnecessary
shadows, cluttered listing grids, random icon decoration, and animation
on every element. Do not let the real-estate content dilute the
distinctive Apollo design.

------------------------------------------------------------------------

# 3. WEBSITE CONTENT AND STRUCTURE

Create one cohesive landing page with the following sections, adapted to
the reference's design and flow:

1.  Header/navigation.
2.  Full-screen or near-full-screen hero slider.
3.  About / "Who We Are".
4.  Trust principles or facts section without invented numbers.
5.  Testimonials or a truthful alternative until real reviews are
    supplied.
6.  Business/team introduction without fabricated staff.
7.  Services.
8.  A strong conversation/contact CTA strip.
9.  Property gallery with category filters.
10. Property insights/editorial content, with draft content clearly
    identified.
11. Contact form, phone, WhatsApp, and map.
12. Footer.

Do not force sections to look populated with fabricated information. If
there are no verified testimonials, team details, partner logos,
published articles, or property listings, use an honest alternative or
clearly marked editable placeholders.

### Hero slider

Create three slides:

**Slide 1** - Heading: `FIND YOUR PLACE.` - Image: attractive
residential property or architectural exterior. - CTA:
`EXPLORE PROPERTIES`

**Slide 2** - Heading: `YOUR NEXT CHAPTER.` - Image: beautiful home
interior or aspirational residential setting. - CTA: `FIND A PROPERTY`

**Slide 3** - Heading: `READY FOR WHAT'S NEXT?` - Image: distinctive
property exterior or architectural detail. - CTA: `SELL YOUR PROPERTY`

Include a small label such as `REAL ESTATE · NEW DELHI`, concise
supporting copy, visible slide indicators, previous/next controls, and a
subtle scroll cue. Make the slider functional with smooth transitions,
mobile swipe support, readable overlays, and reduced-motion support.
Autoplay is optional; if included, use a sensible interval and pause
appropriately during interaction.

Suggested introductory copy: "Discover property opportunities with Bhumi
Associates. Whether you're buying your next home or selling a property,
let's start the conversation."

### About section

Use a large split-line heading such as:

`WHO` `WE ARE.`

Explain that Bhumi Associates helps people start conversations about
property buying and selling. Emphasize clear communication and
customer-focused discussions without claiming unverified expertise or
guarantees.

### Trust section

Use genuine principles such as: - Buyer-focused property discussions. -
Support for property sellers. - Clear communication. - Local property
enquiries.

Do not use made-up counters or statistics.

### Testimonials and people

Only display real customer feedback and team profiles when provided and
authorized. Otherwise, replace testimonials with a "What matters when
you buy or sell" principles section and use a business introduction
instead of invented staff.

### Services

Build visually distinctive service blocks: - **Buy a Property** ---
discuss preferred location, type, budget, and requirements. - **Sell a
Property** --- help owners start an enquiry about selling. - **Property
Enquiries** --- provide a point of contact for people exploring
opportunities.

Each block must have a concise description and a working contact action.
Do not promise guaranteed sales, investment returns, or appreciation.

### Property gallery

Use an editorial, image-led gallery inspired by Apollo's portfolio.
Provide useful category filters where relevant, such as All,
Residential, Apartments, Independent Houses, and Commercial.

No verified property listings have been provided yet. Therefore: - Do
not represent fabricated listings as real inventory. - Use an honest
empty state or development-only demo cards that are clearly labelled as
samples. - Store listing data in a central, easy-to-edit data file. -
Make it easy to add verified photos, titles, locations, property type,
price, availability, descriptions, and enquiry links later. - Ensure
filters work and the layout is responsive.

### Property insights

If included, use an editorial layout for topics such as preparing to
sell, questions to ask before a property visit, or defining a buying
budget. Clearly label draft/sample content and do not invent publication
dates or present drafts as established articles.

### Contact section

Use a bold heading such as:

`LET'S` `TALK PROPERTY.`

Provide a contact form with: - Full name. - Phone number. - Enquiry
type: Buy / Sell / General. - Preferred location (optional). - Budget
(optional). - Message.

Validate fields and show clear success/error states. If no backend is
configured, do not pretend to send the form. Use a clear WhatsApp
fallback that builds a prefilled message and opens WhatsApp only after
the visitor deliberately submits. Never expose secrets in frontend code.

Display the verified phone, WhatsApp, address, and supplied Google Maps
link. Embed a map only if it can be done reliably.

### Footer

Include the Bhumi Associates wordmark, brief description, navigation,
services, phone, WhatsApp, address, Google Maps link, and current
copyright year. Include social links only if real accounts are supplied.

------------------------------------------------------------------------

# 4. MOTION, RESPONSIVENESS, ACCESSIBILITY, AND SEO

### Motion

Use restrained, polished animation for: - Hero transitions. -
Heading/section reveals. - Image hover treatments. - Navigation link and
button states. - Gallery filtering. - Sticky header transitions. -
Mobile menu.

Respect reduced-motion preferences. Avoid excessive parallax and
distracting effects. Clean up event listeners and animation instances
correctly.

### Responsive behavior

Test multiple desktop, tablet, and mobile widths. Recompose layouts for
mobile rather than shrinking desktop layouts. Prevent horizontal
overflow, clipped headings, unreadable overlays, awkward image crops,
and oversized forms. Ensure controls are touch-friendly.

### Accessibility

Use semantic HTML, accessible labels, visible focus states,
keyboard-operable controls, useful image alt text, sufficient contrast,
and reduced-motion support.

### Performance

Optimize image sizes, lazy-load below-the-fold imagery, prioritize the
hero image, avoid unnecessary dependencies, prevent layout shifts, and
keep JavaScript efficient. Use appropriate image licensing.

### SEO

Suggested title:
`Bhumi Associates | Property Buying & Selling in New Delhi`

Suggested description:
`Contact Bhumi Associates in Bhajanpura, Shahdara, New Delhi, for property buying and selling enquiries.`

Use a proper heading hierarchy and accurate metadata. Add local business
structured data only from verified details. Do not fabricate ratings,
reviews, or credentials. Set the canonical URL only when the production
domain is known.

------------------------------------------------------------------------

# 5. TECHNICAL RULES

1.  Inspect the existing repository before editing. If it is empty,
    choose a clean, maintainable setup such as React + Vite. If a
    suitable framework already exists, preserve it unless there is a
    strong reason to change.
2.  Never delete working code or rebuild the repository unnecessarily.
3.  Use reusable components, centralized design tokens, and a clear data
    structure for properties and services.
4.  Avoid dependencies unless they serve a real need.
5.  All visible buttons and links must do what they promise.
6.  Do not leave broken images, dead controls, accidental lorem ipsum,
    console errors, missing React keys, or fake functionality.
7.  Do not claim an action succeeded unless it actually succeeded.
8.  Run the available build/tests at appropriate phases and fix issues
    caused by the changes.
9.  Do not claim the site was deployed unless it was actually deployed.

------------------------------------------------------------------------

# 6. PROJECT MEMORY FILES --- CREATE THESE FIRST

Create the following files in the **root of the project repository** so
future Antigravity tasks can preserve decisions without repeatedly
consuming the entire prompt.

## `MASTER_PLAN.md`

Write the permanent project specification into this file. It must
contain: - Verified business facts. - Apollo reference URL and locked
design direction. - Visual tokens and typography guidance. - Site
structure and functional requirements. - The phase plan below. - QA and
content-integrity rules.

This file is the source of truth. Do not let later phases silently drift
from it.

## `PROJECT_NOTES.md`

Create a concise implementation log. Include: - Current phase and
status. - Actual framework and important dependencies. - Key files and
components. - Design decisions already implemented. - Features
completed. - Known bugs and unfinished tasks. - Next phase and concrete
next actions. - Commands used to run, build, and test.

Update this file at the end of every phase. Record facts about the
actual repository, not assumptions.

## `AGENTS.md`

If supported by the environment, create a short repository instruction
file containing these rules: - Before each task, read `MASTER_PLAN.md`
and `PROJECT_NOTES.md`. - Preserve Apollo Slider 1's visual direction
and the verified Bhumi Associates business facts. - Work only on the
requested phase. - Inspect existing code before editing and reuse
completed work. - Do not invent business data or fake functionality. -
Test the changes and update `PROJECT_NOTES.md` before finishing.

If the environment uses a different recognized project-instructions
filename, use the supported equivalent and document it in
`PROJECT_NOTES.md`.

Do not copy this entire prompt into `PROJECT_NOTES.md`. Keep the master
plan as the full specification and the notes as a concise progress log.

------------------------------------------------------------------------

# 7. PHASED IMPLEMENTATION --- DO NOT SKIP AHEAD

Work on only one phase at a time. Do not attempt all phases in the first
task. Preserve the same repository, components, styles, and decisions
between phases.

## Phase 0 --- Inspect and initialize

-   Inspect repository contents, framework, package scripts, and
    existing code.
-   Inspect Apollo Slider 1 if browser access is available.
-   Record its actual visual and interaction characteristics.
-   Create `MASTER_PLAN.md`, `PROJECT_NOTES.md`, and `AGENTS.md` (or
    supported equivalent).
-   Record the chosen stack and current project state.
-   Do not build the entire site in this phase.

**Completion condition:** Project and reference are understood; memory
files exist and are accurate; existing work has not been needlessly
overwritten.

## Phase 1 --- Design foundation and header

-   Set fonts, CSS variables, layout containers, spacing, button styles,
    and base styles.
-   Build responsive navigation and mobile menu.
-   Establish section skeleton and correct page order.
-   Match Apollo's visual rhythm and hierarchy.

**Completion condition:** Responsive foundation and functional
navigation with consistent centralized tokens.

## Phase 2 --- Hero slider

-   Build the three-slide hero.
-   Match reference composition, image treatment, typography, controls,
    and spacing.
-   Implement slide navigation and mobile swipe.
-   Connect CTAs to relevant sections.
-   Test readability and reduced motion.

**Completion condition:** Visually strong hero, working controls, no
clipped text, and responsive layout.

## Phase 3 --- About, trust, people, and services

-   Build About, trust principles, honest testimonials alternative,
    business introduction, services, and CTA strip.
-   Use the reference's editorial composition and oversized headings.
-   Do not invent staff, testimonials, statistics, or claims.

**Completion condition:** Accurate content, consistent visual design,
working service CTAs.

## Phase 4 --- Property gallery

-   Build responsive gallery and working filters.
-   Create editable property data structure.
-   Use an honest empty state or clearly labelled development-only
    sample data.
-   Add image hover states and enquiry links.

**Completion condition:** Filters work, cards are responsive, no demo
data is misrepresented.

## Phase 5 --- Insights, contact, map, and footer

-   Build editorial content layout, contact form, validation, WhatsApp
    fallback, contact information, map link, and footer.
-   Use only the verified business details above.

**Completion condition:** Contact links and form behavior work honestly;
all contact details are correct.

## Phase 6 --- Motion and responsive polish

-   Refine transitions, section reveals, hover states, sticky header,
    and mobile menu.
-   Check mobile/tablet layouts and reduced motion.
-   Fix overflow, spacing, image crops, and layout shifts.

**Completion condition:** Polished, restrained motion and deliberate
responsive layouts.

## Phase 7 --- QA, SEO, and production readiness

-   Run production build and available tests.
-   Fix broken assets, dead links, console errors, and accessibility
    issues.
-   Test hero, navigation, filters, form, phone, WhatsApp, and map.
-   Review SEO and responsive behavior.
-   Compare screenshots against Apollo if browser/screenshot tools are
    available.
-   Document any real assets or configuration still needed.
-   Update `PROJECT_NOTES.md`.

**Completion condition:** Build passes, main interactions work, no
fabricated claims or unlabelled demo listings remain, and remaining
setup requirements are documented.

------------------------------------------------------------------------

# 8. HOW TO HANDLE FUTURE PHASE REQUESTS

Whenever I ask you to continue, read `MASTER_PLAN.md` and
`PROJECT_NOTES.md`, then work only on the phase I name. Do not restart
the project or repeat completed work.

After each phase, provide a concise report: 1. Files changed. 2. What
now works. 3. Build/tests run and their actual results. 4. Known
remaining issues. 5. Confirmation that `PROJECT_NOTES.md` was updated.
6. Recommended next phase.

Do not begin the next phase until I ask.

------------------------------------------------------------------------

# 9. YOUR FIRST TASK --- START NOW

**Execute Phase 0 only.**

1.  Inspect the available project workspace and repository.
2.  Study https://ivang-design.com/apollo/slider1/ if browser access is
    available.
3.  Create `MASTER_PLAN.md`, `PROJECT_NOTES.md`, and `AGENTS.md` (or the
    supported equivalent) in the project root.
4.  Record the business facts, reference URL, visual direction, actual
    project structure, and phase checklist.
5.  Do not build later phases yet.
6.  Report what you inspected, which files you created, any access
    limitations, and the exact next step for Phase 1.

If browser access to the reference is unavailable, say so explicitly and
preserve the URL in the project files. Do not pretend to have inspected
it.

**The first task is initialization and design-reference study, not full
website implementation.**

### CRITICAL: MATCH THE EXACT TYPOGRAPHY OF THE APOLLO REFERENCE

Reference: https://ivang-design.com/apollo/slider1/

Do not use Bebas Neue, DM Sans, Manrope, or any other suggested substitute by default.

Before implementing the website:

1. Inspect the reference website's CSS, linked stylesheets, font declarations, and available font files.
2. Use browser developer tools, if available, to identify the actual computed font family and weight used for headings, body text, navigation, buttons, and other text elements.
3. Match the original typography as closely as possible, including:
   - Exact font family.
   - Font weight and style.
   - Font size and responsive scaling.
   - Line height and letter spacing.
   - Text transformation and line breaks.
   - Heading width, alignment, and spacing.
4. Reproduce the reference's typography hierarchy across desktop, tablet, and mobile layouts.
5. Use the original font files only if legally available for use. Do not copy proprietary font files without authorization.
6. If the original font cannot legally or technically be used, select the closest visually matching, properly licensed alternative. Document the substitution in `PROJECT_NOTES.md`.
7. Do not guess font names or claim an exact match without verification.

**Acceptance criterion:** The Bhumi Associates website should use the same verified typefaces as the reference wherever permitted, with matching weights, proportions, spacing, and responsive behavior. Typography must remain consistent across every implementation phase.