# Yash Laxkar — Portfolio

A static personal portfolio site. Plain HTML, CSS and vanilla JavaScript —
no frameworks, no build step, no npm install. Clone it, open `index.html`,
done.

**Live:** https://1244598.github.io/yash-portfolio/

---

## Structure

```
index.html        All page content. A TODO list sits at the very top.
css/style.css     All styles. Design tokens live in :root.
js/main.js        Nav toggle, active-section highlighting, scroll reveal.
assets/           Photos, résumé, favicon. See assets/README.md.
```

## Running it locally

Opening `index.html` directly in a browser works fine. If you'd rather serve
it over HTTP:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Editing content

Everything you need to fill in is listed in a `TODO` comment block at the top
of `index.html`. Each item is also tagged inline so you can jump straight to
it — search for `data-todo="..."`:

| Search for | What to change |
|-----------|----------------|
| `data-todo="resume"` | Add `assets/resume.pdf` (link is already wired) |
| `data-todo="logo"` | Add `assets/iitkgp-logo.png`, then swap in the `<img>` |
| `data-todo="project"` | Project titles, descriptions, tech tags, links |
| `data-todo="meta"` | `og:url` and `og:image` for social previews |

Placeholder text that still needs real content shows up on the page in an
amber box, so it's obvious what's unfinished. Those boxes come from the
`.todo` class — once you've written the real copy, delete the
`<em class="todo">...</em>` wrapper along with it.

### Adding a project

There's a copy-paste `<article>` template in an HTML comment just above the
first project card in the Projects section. Duplicate it, fill it in, and
delete the third "Add your next project" placeholder card.

### Adding a skill

Find the Skills section and add an `<li class="chip">Thing</li>` to the
relevant group. To add a whole new group, copy an existing
`.skills__group` block.

---

## Changing the look

All colours, spacing, fonts and radii are CSS custom properties at the top of
`css/style.css` (section 1, `:root`). You rarely need to touch anything else.

**Change the accent colour** — one line, and the whole site follows:

```css
:root {
  --accent: #4f8cff;        /* electric blue (default) */
}
```

If you pick a very different hue, also update these four so the glows and
tints match:

```css
--accent-bright: #7aa8ff;   /* lighter — used for links and headings */
--accent-deep:   #2f6ae0;   /* darker — button gradient */
--accent-tint:   rgba(79, 140, 255, 0.12);
--accent-glow:   rgba(79, 140, 255, 0.4);
```

**Fonts** are loaded via a single Google Fonts `<link>` in `index.html`
(Space Grotesk for headings, Manrope for body, JetBrains Mono for stats and
labels) and mapped to `--font-display`, `--font-body` and `--font-mono`.
Swapping them means editing the `<link>` and those three variables.

---

## Deploying

### GitHub Pages (current setup)

Already configured. Pages serves the `main` branch from the repo root, so
every push goes live:

```bash
git add -A
git commit -m "Update content"
git push
```

Give it 30–60 seconds. To check build status: **Settings → Pages**, or
`gh run list` / the Actions tab.

To set this up on a fresh repo: **Settings → Pages → Source:** `Deploy from a
branch`, **Branch:** `main`, **Folder:** `/ (root)`.

> A repo named `<username>.github.io` serves at
> `https://<username>.github.io/` instead of a `/repo-name/` subpath.

### Vercel or Netlify

Both work with zero configuration — import the repo and deploy. Leave the
build command empty and set the output/publish directory to the repo root.

### Custom domain

Add a file named `CNAME` at the repo root containing just your domain
(e.g. `yashlaxkar.dev`), point a DNS `CNAME` record at
`1244598.github.io`, then set the domain under **Settings → Pages**.

---

## Notes

- All asset paths are **relative**, so the site works at a subpath
  (`/yash-portfolio/`), at a domain root, or opened from the filesystem.
- Accessibility: semantic landmarks, a skip link, visible focus rings, `alt`
  text, and `prefers-reduced-motion` respected (animations are disabled, and
  revealed content renders immediately rather than fading in).
- No analytics, no cookies, no trackers, no third-party JS. The only external
  request is the Google Fonts stylesheet.
