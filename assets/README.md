# assets/

Drop your files here. Nothing in this folder is required for the site to
render — the page has fallbacks — but each file below unlocks something.

| File | What it does | Recommended |
|------|--------------|-------------|
| `profile.jpg` | Hero portrait. Replaces the "YL" initials avatar. | Square, 600×600 or larger |
| `resume.pdf` | Wires up the "Download résumé" link in the hero. | — |
| `iitkgp-logo.png` | Logo beside the college name in Education. Replaces the fallback icon. | Square, 256×256+, transparent |
| `og-image.png` | Preview card when the site is shared on LinkedIn/X/WhatsApp. | 1200×630 |
| `favicon.svg` | Browser tab icon. **Already included.** | — |

## After adding `profile.jpg`

Open `index.html`, find `data-todo="photo"`, and swap the initials `<div>`
for the commented-out `<img>` tag directly above it. The CSS already handles
the circular crop, accent border, glow and gradient overlay.

## After adding `iitkgp-logo.png`

Open `index.html`, find `data-todo="logo"`, and swap the fallback `<div>` for
the commented-out `<img>` tag above it.

If the logo has dark ink and gets lost against the dark tile, change the
wrapper to `<div class="edu__logo edu__logo--light" ...>` — that gives it a
near-white backing instead.
