# Session Log: 05-05-2026 12:58 - supreme-style-portfolio

## Quick Reference (for AI scanning)
**Confidence keywords:** supportfolio, portfolio, supreme, nextjs-15, tailwind-v4, typescript, ryan-pham, vercel-deploy, ryanpham.me, namecheap-dns, futura-heavy-oblique, courier-new, box-logo, scaffold, app-router
**Projects:** supportfolio (new portfolio), portfolio (old reference at ~/Documents/portfolio)
**Outcome:** Built a minimalist Supreme-style portfolio site using Next.js 15 + Tailwind v4, ported all data/assets from old portfolio, iteratively refined typography/spacing to match Supreme's aesthetic; ready to deploy to Vercel with custom domain ryanpham.me.

## Decisions Made
- **Tech stack: Next.js 15 + Tailwind v4 + TypeScript** — chosen for parity with the old portfolio and zero-config deploy on Vercel.
- **No UI libraries** — kept the stack minimal (no shadcn, no framer-motion) to match the brutalist/minimalist Supreme aesthetic.
- **Plain TS data file** (`src/data/portfolio.ts`) instead of the old portfolio's JSX-embedded `resume.tsx` — simpler, decoupled from React.
- **Inline SVG social icons** instead of an icon library — fewer deps, tighter control over sizing.
- **Used npm instead of pnpm** — pnpm wasn't installed; npm worked cleanly after removing the auto-generated `pnpm-workspace.yaml`.
- **Vercel over GitHub Pages** for deploy — Next.js App Router doesn't fit GitHub Pages without static export workarounds.
- **Removed blog and contact tabs**, moved `about` to top of nav per user preference.
- **Background `#000000`, foreground `#ffffff`** (final values, after iteration through #d4d4d4 → #c0c0c0 → #e8e8e8 → #f5f5f5 → #ffffff).
- **Logo font: Futura Heavy Oblique** via inline style with `fontWeight: 900, fontStyle: italic` and `fontFamily: '"Futura", "Century Gothic", sans-serif'`.
- **Mono font: Courier New only** (was originally Consolas/Monaco/Courier New fallback chain).
- **Hover effect on tabs: red background highlight** (`hover:bg-accent hover:text-white`), not underline. Removed global `a:hover { text-decoration: underline }`.

## Key Learnings
- Next.js 15 (16.2.4 actually got installed via create-next-app) places `favicon.ico` directly in `src/app/` — deleting that file falls back to the browser default.
- Tailwind v4 uses CSS-first config with `@theme inline` block in `globals.css` — no `tailwind.config.ts` needed for theme tokens.
- `create-next-app` fails silently on dependency install if the chosen package manager (`--use-pnpm`) isn't on PATH; rerunning with `npm install` after deleting `pnpm-workspace.yaml` recovers cleanly.
- Supreme's aesthetic specifics worth replicating: italic Futura Heavy logo, sharp box corners (no border radius), Courier-style monospace timestamp, generous vertical rhythm in the nav list.
- For `font-mono` Tailwind utility to work in v4, define `--font-mono` in the `@theme` block.

## Solutions & Fixes
- **Scaffold blocked by existing README.md:** moved README to `/tmp/`, then ran `npx create-next-app@latest /Users/ryan/Documents/supportfolio` from outside the dir.
- **pnpm ENOENT:** removed `pnpm-workspace.yaml` then ran `npm install` to complete dep install.
- **Logo box growing with text size:** reduced padding from `px-5 py-2` to `px-3 py-0.5` to keep box compact when bumping text size to `text-3xl`/`text-4xl`.
- **Underline appearing on hover for logo and tabs:** removed global `a:hover { text-decoration: underline }` from `globals.css`; added `no-underline` class to logo Link defensively.
- **Made text whiter incrementally** by editing `--color-foreground` in `globals.css` (final: `#ffffff`).

## Files Modified
- `src/app/layout.tsx`: Root layout with metadata (title "Ryan Pham", description "Software Engineer"), `<body className="min-h-screen bg-background text-foreground antialiased">`.
- `src/app/globals.css`: Tailwind v4 `@theme inline` block. Final tokens: `--color-background: #000000`, `--color-foreground: #ffffff`, `--color-muted: #808080`, `--color-accent: #e21a23`, `--font-sans: "Century Gothic", "Futura", "Trebuchet MS", Arial, sans-serif`, `--font-mono: "Courier New", monospace`.
- `src/app/page.tsx`: Landing page — centered Logo + Timestamp block, then a left-aligned column with NavLinks and SocialIcons.
- `src/data/portfolio.ts`: All portfolio data (name, social links, skills, work, education, projects, hackathons). User edited `resumeUrl` to `/Ryan_Pham_Resume.pdf`.
- `src/components/logo.tsx`: Red box (`bg-accent`, `px-3 py-0.5`, no rounded corners) with "Ryan Pham" in `text-3xl` Futura Heavy Oblique italic white text.
- `src/components/timestamp.tsx`: Client component, live clock formatted `MM/DD/YYYY HH:MMam/pm ATL`, Courier New mono, `text-xs`.
- `src/components/nav-links.tsx`: Vertical list — about, projects, experience, education, skills, resume. `font-mono text-[13px]`, `hover:bg-accent hover:text-white`.
- `src/components/social-icons.tsx`: GitHub, LinkedIn, Instagram, Email inline SVGs at `size-4.5`, `gap-5`, hover transitions to white.
- `src/components/page-layout.tsx`: Shared inner-page wrapper with back link to `/`.
- `src/components/footer.tsx`: Originally created, then removed from `page.tsx` per user request (file may still exist but unused).
- `src/app/{about,projects,experience,education,skills,blog,contact}/page.tsx`: Inner content pages rendering data from `portfolio.ts`. (Blog & contact tabs removed from nav but pages still exist.)
- Deleted: `src/app/favicon.ico`, default boilerplate SVGs from `public/` (file.svg, globe.svg, next.svg, vercel.svg, window.svg).
- `public/`: copied 11 assets from `~/Documents/portfolio/public/` (me.png, Ryan_Pham_Resume_FW25.pdf, project images, company logos).

## Setup & Config
- **Project location:** `/Users/ryan/Documents/supportfolio`
- **GitHub remote:** `https://github.com/ryangpham/portfolio.git` (branch: main)
- **Old portfolio reference:** `/Users/ryan/Documents/portfolio` (Next.js 14, source of all data/assets)
- **Source data file (old):** `/Users/ryan/Documents/portfolio/src/data/resume.tsx`
- **Resume PDF in public/:** originally `Ryan_Pham_Resume_FW25.pdf`, but `portfolio.ts` now references `/Ryan_Pham_Resume.pdf` — these names don't match; PDF in public/ may need to be renamed before deploy.
- **Dev server:** `npx next dev --turbopack -p 3000`
- **Build verified:** `npx next build` — green, 9 static routes prerendered.
- **Plan file:** `/Users/ryan/.claude/plans/image-1-create-a-kind-muffin.md`

## Pending Tasks
- **Resume filename mismatch:** `public/Ryan_Pham_Resume_FW25.pdf` vs. `portfolio.ts` reference `/Ryan_Pham_Resume.pdf`. Either rename the PDF or update the data file before deploy, otherwise the resume tab will 404.
- **Blog and contact pages still exist** under `src/app/blog/` and `src/app/contact/` — were removed from nav but routes are still reachable. Optionally delete the directories.
- **Footer component (`src/components/footer.tsx`)** is no longer imported — can be deleted.
- **Initial commit + push to GitHub:** `git add . && git commit -m "feat: initial portfolio build" && git push origin main`.
- **Vercel deploy:** import the GitHub repo at vercel.com → Add New Project → Deploy (Next.js auto-detected).
- **Custom domain (ryanpham.me from Namecheap):**
  - Vercel: Settings → Domains → add `ryanpham.me` AND `www.ryanpham.me`
  - Namecheap: Advanced DNS → add `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com` (Vercel will confirm exact values)
  - Delete any conflicting existing A/CNAME records
  - SSL is auto-provisioned

## Quick Resume Context
The supportfolio repo at `/Users/ryan/Documents/supportfolio` is a finished Next.js 15 minimalist portfolio styled like the Supreme website (red box logo with "Ryan Pham" in Futura Heavy Oblique on pure black, Courier New timestamp, left-aligned mono nav links with red hover highlight, social icons row). All personal data is in `src/data/portfolio.ts`, ported from the old portfolio at `~/Documents/portfolio`. The build is green; next step is to commit, push to GitHub (`https://github.com/ryangpham/portfolio.git`), deploy on Vercel, and wire the `ryanpham.me` Namecheap domain. Watch out for the resume PDF filename mismatch before deploying.
