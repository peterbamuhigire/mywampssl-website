# CLAUDE.md — Software Application Website

This is a multi-language static website for a **software application**, built with Astro,
Tailwind CSS, and Alpine.js. You are building a production-grade, visually stunning,
conversion-focused website from markdown content and product assets.

The build is governed by the **website-skills engine** at `.claude/skills/` (git submodule).
That engine is the source of truth for process, quality gates, and standards. Read the
relevant `SKILL.md` before generating any code.

## Project Philosophy

We build **beautiful, blazing-fast, zero-JavaScript static websites** that score 95–100 on
Lighthouse. Every site must be distinctive — never generic SaaS-template aesthetics. For a
software application this means: a clear value proposition, a strong primary CTA (demo /
sign-up / download), credible product proof (screenshots, feature depth, social proof), and
a frictionless path to conversion.

## Architecture

```
docs/
  i18n-config.md   -> Language configuration (en + fr enabled; en default)
  seo.md           -> SEO meta tags, structured data, sitemap config
  references/      -> Raw client/product source documents (PDF, DOCX, TXT) — input only
  en/              -> English content (source language)
  fr/              -> French content (translated from en/)
photo-bank/
  branding/        -> Logos, brand marks, app icon
  hero/            -> Hero/banner images
  team/            -> Team headshots
  services/        -> Feature/product images
  gallery/         -> Product screenshots, UI captures
  about/           -> About page images
  testimonials/    -> Customer photos / logos
  misc/            -> Other images
.claude/skills/    -> The website-skills engine (git submodule) — you follow these
src/               -> Astro source code — you generate this
dist/              -> Built static site — Astro generates this
public/            -> Static assets (favicon, og-image, robots.txt)
```

Workflow is always: **read content -> establish design -> process photos -> build pages -> verify build.**

## Multi-Language Support

This site supports 2 languages: English (en, default/source) and French (fr).

- **Configuration:** `docs/i18n-config.md` controls which languages are enabled
- **Content:** Each language has its own directory under `docs/{lang}/`
- **URL structure:** `/{lang}/page` (e.g. `/en/about`, `/fr/a-propos`)
- **Default:** Root `/` redirects to `/en/`
- **Photos:** Shared across both languages (in `photo-bank/`)
- **Components:** Shared across both languages (accept a `lang` prop)

### Language Standards
- **English:** British spelling (colour, organisation), clear professional product tone
- **French:** Formal French, vouvoiement (vous) throughout, professional and respectful

### Text Expansion
- French: 20–40% longer than English
- All designs must accommodate longer French text without breaking

## Skills (the engine)

Skills live under `.claude/skills/skills/<category>/<skill>/SKILL.md`. The master
orchestrator is `skills/orchestration/website-builder/SKILL.md` — read it before a build.

**Execution order:** website-builder -> i18n -> (design-reference) -> brand-strategy ->
sector-strategies -> design-system -> photo-manager -> page-builder -> seo -> deploy.
Premium, conversion-critical builds also apply `premium-website-product` and
`premium-ui-ux-design` before page production, and `google-ai-search` before `seo` when AI
search visibility is in scope.

Every project must pass the canonical CI pipeline at
`.claude/skills/templates/ci/website.yml` (perf, a11y, visual-qa, security, drift,
design-quality). A build that does not pass every gate is not shipped on the engine.

## Critical Rules

### Content is truth
- ALL text content comes from `docs/{lang}/*.md` files. Never invent company names,
  features, team members, pricing, or any factual content.
- If a docs file has placeholder text like `[PLACEHOLDER — ...]`, keep it as a placeholder
  in the built site or use a generic "Coming soon" — never fabricate content.
- YAML frontmatter in docs files contains structured data (name, email, phone, etc.). Use
  these values exactly.

### Photos are dimension-aware
- NEVER place a photo without first measuring its dimensions (ImageMagick `identify` or PIL).
- NEVER use a small image in a large slot (no upscaling).
- Every photo used must be tracked in `src/assets/images/_catalog.json`.
- Photos are copied from `photo-bank/` to `src/assets/images/` (flat) — never moved/modified.
- If no suitable photo exists for a slot, use a CSS gradient/solid placeholder and document
  it in the catalog's `placeholders_needed` array.
- NEVER reference external placeholder services (no unsplash, placeholder.com, picsum).

### Design must be distinctive
- Read `docs/en/style-brief.md` and commit to a BOLD aesthetic appropriate to the product.
- NEVER use Inter, Roboto, Arial, or system fonts as primary typefaces.
- NEVER default to purple-gradient-on-white or generic SaaS card layouts.
- Use fonts from Fontsource (self-hosted, no external CDN requests).

### Performance is non-negotiable
- Zero unnecessary JavaScript. Astro ships no JS by default — keep it that way.
- Alpine.js only for interactive elements (mobile menu, accordions, tabs, modals).
- Self-host everything: fonts, icons, scripts. No external CDN dependencies.
- Use Astro's `<Image>` component for all images (auto WebP/AVIF, responsive srcsets).
- Hero images use `loading="eager"`. Everything else uses `loading="lazy"`.
- Target: total page weight under 500KB on first load (excluding lazy-loaded images).
  African 3G calibration applies — see the deploy skill's africa-calibration reference.

### Accessibility is required (WCAG 2.2 AA)
- One `<h1>` per page, sequential `<h2>`–`<h6>`. Descriptive `alt` on every image.
- `aria-label` on icon-only buttons. Keyboard-navigable mobile menu.
- Colour contrast: 4.5:1 body text, 3:1 large text. Focus-visible styles everywhere.
- Skip-to-content link in BaseLayout.

### Mobile-first, always
- Design for 375px first, then 768px and 1280px+. Touch targets minimum 44x44px.
- No horizontal scroll at any viewport. Responsive type scales.

## Tech Stack

- **Astro** (latest) — static site generator, zero JS by default, component islands
- **Tailwind CSS v4** — utility-first styling with design tokens in config
- **Alpine.js** — lightweight interactivity (no build step)
- **Fontsource** — self-hosted Google Fonts alternatives
- **Lucide** or **Phosphor** — SVG icon sets

## Common Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Error Handling

- If `docs/en/` is missing critical files, tell the user what's needed before proceeding.
- If `photo-bank/` is empty, build with CSS gradient placeholders and document needed photos.
- If `npm run build` fails, read the error, fix it, and try again.
- If a font package fails to install, fall back to another distinctive font — never to system fonts.
- If `docs/fr/` is empty, skip French in the build until translations are provided.
