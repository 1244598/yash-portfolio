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
- **Dark theme** with one accent color (default: electric blue `#4f8cff`, easy to change via a CSS variable).
- Define all colors, spacing, and fonts as CSS custom properties in `:root` so the theme is easy to tweak.
- Clean, modern, minimal layout with generous whitespace. It should look genuinely premium, not like a template.
- Pick a distinctive font pairing (e.g. a geometric sans for headings plus a readable body font). Avoid generic defaults.
- Smooth scrolling, a sticky translucent navbar with active-section highlighting, and subtle fade/slide-in animations on scroll (use `IntersectionObserver`).
- Subtle hover effects on cards and buttons. Do not overdo animation.

## Sections (in order)
1. **Hero**: Name, short tagline (e.g. "Software Engineer at Walmart Global Tech | Competitive Programmer"), two buttons (View Projects, Contact Me), and the profile photo.
2. **About Me**: A short, personal paragraph. Mention IIT Kharagpur, Walmart, competitive programming, and fitness.
3. **Experience**: Walmart Global Tech (Software Engineer, joined Aug 2025, Bengaluru) and Software Development Intern at Walmart (May to Jul 2024). Present as a clean vertical timeline.
4. **Competitive Programming**: Codeforces Specialist (peak rating 1518, handle `yash_laxkar1`) and CodeChef 4-star (peak rating 1921, handle `yashlaxkar1`). Show as stat cards with links to the profiles.
5. **Projects**: Card grid. Start with placeholders the owner can fill in:
   - Personal swing-trading signal app (technicals + sentiment + order book depth)
   - Android app(s) planned for the Google Play Store
   - Leave an easy-to-copy card template with a comment so more projects can be added.
6. **Skills**: Grouped chips: C/C++, Python, Java (Spring Boot), React.js, PostgreSQL/MySQL, Git.
7. **Education**: IIT Kharagpur, M.Sc (5-year integrated) in Mathematics & Computing, 2025.
   Show the institute logo next to the name. CGPA is **7.98/10** but is deliberately
   **not displayed** on the page — do not add it back unless asked.
8. **Hobbies / Beyond Code**: Gym and fitness, competitive programming. Keep the tone personal and a little playful. Use icon-style cards.
9. **Contact**: Email, LinkedIn, GitHub, Codeforces, CodeChef links. Use `mailto:` for email. No backend form (a simple "Say hello" email button is enough).
10. **Footer**: Copyright line and a back-to-top link.

## Placeholders (do NOT invent real data)
Use obvious placeholders and list them in a `TODO` comment at the top of `index.html`:
- Email address, LinkedIn URL, GitHub URL
- Resume PDF link (`assets/resume.pdf`)
- Project descriptions and links
- Any facts not listed in this file

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
