# assets/

Drop your files here. Nothing in this folder is required for the site to
render — the page has fallbacks — but each file below unlocks something.

| File | What it does | Recommended |
|------|--------------|-------------|
| `profile.jpg` | Hero portrait. Replaces the "YL" initials avatar. | Square, 600×600 or larger |
| `resume.pdf` | Wires up the "Download résumé" link in the hero. | — |
| `og-image.png` | Preview card when the site is shared on LinkedIn/X/WhatsApp. | 1200×630 |
| `favicon.svg` | Browser tab icon. **Already included.** | — |

## After adding `profile.jpg`

Open `index.html`, find `data-todo="photo"`, and swap the initials `<div>`
for the commented-out `<img>` tag directly above it. The CSS already handles
the circular crop, accent border, glow and gradient overlay.
