## Project structure rules

### Folder responsibilities

- `app/` contains routing and Next.js metadata files only: `layout`, `page`, `loading`, `error`, `not-found`, `route`, `icon`, `apple-icon`, `favicon.ico`, `opengraph-image`, `sitemap`, `robots`, and `globals.css`.
- Never put components, utilities, data, or static assets (images, fonts, `.webmanifest`) in `app/`, except Next.js metadata file conventions.
- `components/` holds React components, grouped by role:
  - `ui/` — generic primitives (Button, Text, Section, Container); no domain copy or page-specific layout.
  - `layout/` — header, footer.
  - `brand/` — logo and brand marks.
  - `shared/` — cross-page composed blocks reused by more than one domain (e.g. `CtaSection`).
  - one folder per domain feature: `home/`, `about/`, `product/`, `catalog/`.
- Domain-only building blocks (split layouts, media wrappers, section headers used only inside that domain) live in `components/<domain>/shared/` (e.g. `components/about/shared/`). Do not put those in `components/ui/` or top-level `shared/` until a second domain needs them.
- Page section components stay at `components/<domain>/SectionName.tsx` (e.g. `WhoWeAre.tsx`, `Advantages.tsx`). Thin wrappers that only pass copy into a shared block are fine (e.g. `AboutCta` → `CtaSection`).
- `lib/` holds non-UI code: site config, data, motion tokens, and pure helper functions. Do not import React in `lib/`.
- `hooks/` holds shared client hooks (e.g. `useQuoteRequest`). Keep hooks free of JSX.
- `public/` holds static assets served as-is by URL: logo, `products/` images, `about/` and `home/` media. Reference them with absolute paths (`/logo.svg`, `/about/nor.mp4`).

### Metadata and icons

- No PWA: do not add `manifest.ts`, `site.webmanifest`, or installable app icons (`web-app-manifest-*.png`).
- Do not create subfolders such as `app/favicon/`: Next.js only recognizes metadata files at the root of a route segment.
- `icon` must be square (vector SVG or PNG, at least 32x32). `apple-icon` must be 180x180 PNG. `opengraph-image` must be 1200x630.
- Never embed raster images (base64 PNG) inside SVG files. Use real vector SVG or a PNG.
- Take site name, description, and theme colors from `lib/site.ts`; do not duplicate them.

### Assets

- Do not keep unused assets. Remove default `create-next-app` files from `public/` when they are not referenced.
- Source logo mark: `public/logo.png`. Wordmark for UI: `public/logo.svg`.
- Product images go to `public/products/<slug>.<ext>`. Every `image` path in data must point to an existing file.
- About/home raster and video assets go under `public/about/` and `public/home/`.
- Render raster images with `next/image`, with explicit `alt` text and dimensions (or `fill` with a sized parent). Background videos use a plain `<video>` with `autoPlay` `muted` `loop` `playsInline`.

### Styling and design tokens

- Global CSS lives in `app/globals.css`: Tailwind import, design tokens (CSS variables), and `@theme` mapping only.
- Do not add custom utility classes to `globals.css` when a component or Tailwind utilities can do the same. Keep styling in components.
- Add new colors, radii, fonts, and layout spacing as design tokens in `:root` and expose them via `@theme inline`; do not hardcode hex, rem, or ad-hoc spacing values in components when a token exists or should exist.
- Prefer token utilities over raw Tailwind scale classes for layout: `py-section` / `md:py-section-md`, `space-y-stack` / `md:space-y-stack-md`, `gap-split` / `md:gap-split-md` / `lg:gap-split-lg`, `mt-block` / `md:mt-block-md`, `gap-icon-gap`, `size-icon-lg` / `size-icon-md`, `py-cell` / `md:py-cell-md` / `md:px-cell-x`, `rounded-sm|md|lg` (from `--r-*`).
- Only fall back to raw spacing (`gap-3`, `py-7`, …) when no token is close; do not invent one-off values that nearly match an existing token.
- Background roles:
  - `--bg` / `bg-bg` — default page background (white).
  - `--bg-subtle` / `bg-bg-subtle` — highlighted section bands (e.g. International Perspective, Why Norvant).
  - `--surface` / `bg-surface` — elevated cards and bordered surfaces.
  - `--brand` / `bg-brand` — brand CTA bands (`CtaSection`).
  - Keep `--brand-light` for rare tinted panels; do not use it as the default subtle band if `--bg-subtle` is intended.
- Typography goes through `components/ui/Text.tsx` variants and tones; do not re-declare font sizes for section titles in page components.

### Page sections (home / about)

- Keep `page.tsx` as a composition of section components only.
- Reuse shared primitives instead of duplicating markup:
  - Cross-page CTA → `components/shared/CtaSection.tsx` (domain wrappers only supply copy).
  - About text+media splits → `AboutSplit`, `AboutMedia`, `AboutSectionHeader`.
  - Icon rows with separators → `DividedList`.
- Default vertical rhythm for sections comes from `Section` (`py-section md:py-section-md`). If media must flush to the section edges, drop section padding and keep `py-section` only on the text column (see International Perspective).
- Full-bleed media sections (hero video, panorama bands) use their own `<section>` + `Container` for text; do not force them through padded `Section` when the media must span the viewport.
- Icon sizes: large feature icons use `size-icon-lg` (64); compact industry/icon strips use `size-icon-md` (48). Keep both; do not collapse to one size without an explicit product decision.
- Raster photos in about split layouts use `rounded-lg` on the media wrapper unless the design calls for flush edges.

### Components and code

- Server Components by default. Add `"use client"` only to the smallest component that needs state, effects, or browser APIs.
- Do not call `setState` synchronously inside `useEffect` (cascading renders / React Compiler). For client-only mounts (e.g. `createPortal`), use `useSyncExternalStore` with `() => true` on the client and `() => false` on the server — not `useEffect(() => setMounted(true), [])`.
- One component per file, named in PascalCase, matching the file name. Import with the `@/` alias.
- Keep route files (`page.tsx`) thin: compose components and call `lib/` functions; no large inline markup or data.
- Always extract each page section into its own component. Do not leave section markup, section-local lists/data, or multi-block UI inline in `page.tsx` — create a named component under `components/<domain>/` (e.g. `components/home/Stats.tsx`) instead.
- Colocate a component with its route only if it is used by that route alone; use a private folder (`app/<route>/_components/`). Shared components go to `components/shared/` or `components/ui/` as above.
- Do not create new top-level folders (`src/`, `styles/`, `assets/`, `utils/`) without a clear need; follow KISS.
- Remove unused domain components and assets when a page is rewritten; do not leave dead leftovers.
