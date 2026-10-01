## Project structure rules

### Folder responsibilities

- `app/` contains routing and Next.js metadata files only: `layout`, `page`, `loading`, `error`, `not-found`, `route`, `icon`, `apple-icon`, `favicon.ico`, `opengraph-image`, `sitemap`, `robots`, and `globals.css`.
- Never put components, utilities, data, or static assets (images, fonts, `.webmanifest`) in `app/`, except Next.js metadata file conventions.
- `components/` holds React components, grouped by role: `ui/` (generic, no domain logic), `layout/` (header, footer), `brand/`, and one folder per domain feature (`product/`, `catalog/`).
- `lib/` holds non-UI code: site config, data, and pure helper functions. Do not import React in `lib/`.
- `public/` holds static assets served as-is by URL: logo, `products/` images. Reference them with absolute paths (`/logo.svg`).

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
- Render raster images with `next/image`, with explicit `alt` text and dimensions (or `fill` with a sized parent).

### Styling

- Global CSS lives in `app/globals.css`: Tailwind import, design tokens (CSS variables), and `@theme` mapping only.
- Do not add custom utility classes to `globals.css` when a component or Tailwind utilities can do the same. Keep styling in components.
- Add new colors, radii, and fonts as design tokens in `:root` and expose them via `@theme inline`; do not hardcode hex values in components.

### Components and code

- Server Components by default. Add `"use client"` only to the smallest component that needs state, effects, or browser APIs.
- One component per file, named in PascalCase, matching the file name. Import with the `@/` alias.
- Keep route files (`page.tsx`) thin: compose components and call `lib/` functions; no large inline markup or data.
- Always extract each page section into its own component. Do not leave section markup, section-local lists/data, or multi-block UI inline in `page.tsx` — create a named component under `components/<domain>/` (e.g. `components/home/Stats.tsx`) instead.
- Colocate a component with its route only if it is used by that route alone; use a private folder (`app/<route>/_components/`). Shared components go to `components/`.
- Do not create new top-level folders (`src/`, `styles/`, `assets/`, `utils/`) without a clear need; follow KISS.
