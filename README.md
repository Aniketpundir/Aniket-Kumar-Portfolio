# Aniket Kumar — Developer Portfolio

A premium, animated, fully responsive developer portfolio built with React, Vite,
Tailwind CSS, and Framer Motion. Content is sourced entirely from the provided
resume and project screenshots — no placeholder text.

## Tech Stack

- **React 19** + **Vite** — build tooling
- **Tailwind CSS v4** — utility styling (via `@theme` design tokens in `src/index.css`)
- **Framer Motion** — animations, scroll reveals, gestures
- **React Icons** — icon set
- **React Router DOM** — routing (single home route + 404)
- **React Scroll** — smooth in-page navigation

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project Structure

```
src/
  assets/
    images/          # profile photos
    projects/        # cropped project screenshots
  components/         # one component per UI section/widget
  data/
    resumeData.js     # single source of truth for all copy/content
  pages/
    NotFound.jsx       # 404 page
  App.jsx
  index.css            # design tokens + Tailwind entry + custom utilities
public/
  resume/
    Aniket_Resume.pdf   # served for the "Download Resume" button
```

## Updating Content

All text (name, summary, skills, projects, experience, education, certifications,
contact links) lives in **`src/data/resumeData.js`**. Edit that file to update
copy anywhere on the site — no need to touch components.

To swap images:
- Profile photos: `src/assets/images/`
- Project screenshots: `src/assets/projects/` (filenames must match each
  project's `image` key in `resumeData.js`)
- Resume PDF: replace `public/resume/Aniket_Resume.pdf` (keep the same filename,
  or update `personal.resumeFile` in `resumeData.js`)

## Design System

Colors, fonts, and reusable utility classes (glassmorphism, gradient text,
gradient borders, glow shadows) are defined once in `src/index.css` under the
Tailwind v4 `@theme` block, so the whole palette can be restyled from one place.

| Token | Value |
|---|---|
| Primary | `#3B82F6` |
| Secondary | `#8B5CF6` |
| Accent | `#06B6D4` |
| Background | `#0F172A` |
| Card | `#111827` |
| Text | `#F8FAFC` |
| Muted text | `#94A3B8` |

Fonts: **Space Grotesk** (display/headings), **Inter** (body), **JetBrains Mono**
(code-styled labels/eyebrows), loaded via Google Fonts in `index.css`.

## Deployment

The project is a standard static Vite build and deploys as-is to:

**Vercel**
```bash
npm i -g vercel
vercel
```
(Framework preset: Vite. Build command `npm run build`, output dir `dist`.)

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://<user>.github.io/<repo>"`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. `npm run deploy`
   (If deploying to a project subpath, also set `base: '/<repo>/'` in `vite.config.js`.)

## Notes

- The contact section intentionally has no form — it links directly to email,
  phone, WhatsApp (deep link), GitHub, LinkedIn, and the resume download, per
  the brief.
- Respects `prefers-reduced-motion` (particle background and CSS transitions
  scale down automatically).
"# Portfolio" 
