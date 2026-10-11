# CLAUDE.md: Portfolio Website for Yash Laxkar

## Goal
Build a polished, modern, **static** personal portfolio website for Yash Laxkar that can be hosted for free on GitHub Pages (also compatible with Vercel/Netlify). No backend, no build step required.

## Tech constraints
- Plain **HTML, CSS, and vanilla JavaScript** only. No frameworks, no bundlers, no npm dependencies.
- Files live at the repo root so GitHub Pages works out of the box:
  - `index.html`
  - `css/style.css`
  - `js/main.js`
  - `assets/` (images, resume PDF, favicon)
- All asset paths must be **relative** (e.g. `assets/profile.jpg`, not `/assets/profile.jpg`) so the site works under a GitHub Pages project URL.
- Google Fonts via `<link>` is allowed. Keep everything else self-contained.
- Fully responsive (mobile-first). Test at 375px, 768px, and 1280px widths.
- Semantic HTML, proper `alt` text, good contrast, visible keyboard focus states, and `prefers-reduced-motion` respected.
- Add proper `<title>`, meta description, and Open Graph tags.

## Design direction
- **Dark theme**. The accent is **warm amber** (`--accent-rgb: 255 138 76`) — the owner
  asked for less blue, since an all-blue page read as dull. Every tint, glow and
  gradient derives from `--accent-rgb` / `--accent-2-rgb`, so re-theming is two lines.
- Keep the ambient motion layer (drifting aurora + film grain + cursor spotlight on
  cards + count-up on the rating). It is what stops the dark background reading flat.
  All of it must stay behind `prefers-reduced-motion`.
- Define all colors, spacing, and fonts as CSS custom properties in `:root` so the theme is easy to tweak.
- Clean, modern, minimal layout with generous whitespace. It should look genuinely premium, not like a template.
- Pick a distinctive font pairing (e.g. a geometric sans for headings plus a readable body font). Avoid generic defaults.
- Smooth scrolling, a sticky translucent navbar with active-section highlighting, and subtle fade/slide-in animations on scroll (use `IntersectionObserver`).
- Subtle hover effects on cards and buttons. Do not overdo animation.

## Sections (in order)
1. **Hero**: Name, short tagline (e.g. "Software Engineer at Walmart Global Tech | Competitive Programmer"), two buttons (View Projects, Contact Me), and the profile photo.
2. **About Me**: A short, personal paragraph. Mention IIT Kharagpur, Walmart, competitive programming, and fitness.
3. **Experience**: Walmart Global Tech (**Software Engineer II**, joined Aug 2025, Bengaluru) and Software Development Intern at Walmart (May to Jul 2024). Present as a clean vertical timeline.
   Stack: Java, Spring Boot, Python, Kafka, Redis, Guava Cache, Docker, Kubernetes.
4. **Competitive Programming**: Codeforces Specialist (peak rating 1518, handle `yash_laxkar1`). Show as stat cards with links to the profiles. **CodeChef has been removed** — that account is lost. Do not re-add it.
5. **Projects**: Card grid of **expanding** cards. Each card is a native `<details>`; clicking it
   opens a detailed write-up **in place on the same page** — never a new page or a new tab — and
   clicking again closes it. An open card spans the full grid row. Keep the native `<details>`
   so it still works with JavaScript off; `js/main.js` only adds the height animation.
   Current three, written from the real repos:
   - **Swing-Trading Signal System** — `trading-signal-app` (Kotlin/Compose) + `trading-signal-backend`
     (Spring Boot + Python FinBERT). Layer weights 45/35/20.
   - **Kharcha** — offline-first expense manager, Room + Compose, heading to the Play Store.
   - **Document Intake Agent** — Walmart work. Kafka + four-stage LLM agent pipeline on Kubernetes.
     **Keep internal system names, codenames and architecture out of this page.** Describe the
     problem and the technology only.
   - Leave an easy-to-copy card template with a comment so more projects can be added.
6. **Skills**: Grouped chips: C/C++, Python, Java (Spring Boot), React.js, PostgreSQL/MySQL, Git.
7. **Education**: IIT Kharagpur, M.Sc (5-year integrated) in Mathematics & Computing, 2025.
   Show the campus photo (`assets/iitkgp-campus.jpg`) in the card, with the
   photographer credit kept visible. **Do not display CGPA** anywhere on the
   page, and do not record the figure in this repo (it is a public repo) — not in
   markup, not in comments, not here. Do not add it back unless asked.
8. **Hobbies / Beyond Code**: Gym and fitness, and **badminton**. Keep the tone personal and a
   little playful. Use icon-style cards. **Competitive programming does not belong here** — it has
   its own section above, and the owner asked for it removed from this one.
9. **Contact**: Email, phone (`tel:`), LinkedIn, GitHub, Codeforces links. Use `mailto:` for email. No backend form (a simple "Say hello" email button is enough).
10. **Footer**: Copyright line and a back-to-top link.

## Real contact details (now live on the site)
- Email: `yashlaxkar1@gmail.com`
- Phone: `+91 87419 62932` (shown publicly as a `tel:` link — remove it if it attracts spam)
- LinkedIn: https://www.linkedin.com/in/yash-laxkar-9b176420b/
- GitHub: https://github.com/1244598
- Codeforces: https://codeforces.com/profile/yash_laxkar1

## Placeholders (do NOT invent real data)
Use obvious placeholders and list them in a `TODO` comment at the top of `index.html`:
- Resume PDF link (`assets/resume.pdf`)
- Project descriptions and links
- Any facts not listed in this file

## Tone and density (owner feedback, 2026-10-11)
The first build was called "dull" with "too much text". Keep it that way:
- **Short copy.** One-line descriptions. No three-sentence paragraphs anywhere
  except the About lead. Cut filler like "as part of the engineering org".
- **Dense layout.** Compact section headers (number + title + hairline on one
  line), not stacked blocks with subtitles. No screen-height gaps.
- **Visible contrast.** Cards need readable borders and a top highlight; the
  page uses a dot-grid texture and an accent wash, not flat black.
- No amber "TODO" boxes on the rendered page — placeholders should look
  intentional, not broken.

Never fabricate achievements, metrics, employers, or links.

## Image handling
When the owner adds photos to `assets/`:
- **Profile photo**: circular crop (`border-radius: 50%`, `object-fit: cover`), thin accent-colored border or soft glow, and a subtle gradient overlay so it blends into the dark background.
- **Other photos**: rounded corners, soft shadow, optional grayscale-to-color transition on hover, and a gradient fade at the edges so they don't look like hard rectangles on a dark page.
- Add `loading="lazy"` to images below the fold and always set `width`/`height` to prevent layout shift.
- If no photo exists yet, render a stylish initials avatar ("YL") as a fallback.

## Code quality
- Keep CSS organized with section comments and consistent naming (BEM-style classes are fine).
- Keep JS small and commented: nav highlighting, scroll-reveal, mobile menu toggle, and optional smooth-scroll fallback.
- Run a quick check at the end: no console errors, no broken links, Lighthouse-friendly (aim for 90+ on Performance, Accessibility, and SEO).

## Deployment (GitHub Pages)
1. Push to a repo (ideally named `<username>.github.io` for a clean URL).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. The site goes live at `https://<username>.github.io/`.

Add a short `README.md` explaining how to edit content and deploy.

## Working style
- Build the full site in one pass, then summarize what you created and which placeholders still need real content.
- Ask before adding anything outside the scope above (analytics, blog, contact-form backends).
- Prefer simple, readable code over clever tricks.
