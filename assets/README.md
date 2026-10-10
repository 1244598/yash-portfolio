# assets/

Drop your files here. Nothing in this folder is required for the site to
render — the page has fallbacks — but each file below unlocks something.

| File | What it does | Recommended |
|------|--------------|-------------|
| `profile.jpg` | Hero portrait. **Already added** (600×600, cropped from the original). | Square, 600×600+ |
| `resume.pdf` | Wires up the "Download résumé" link in the hero. | — |
| `iitkgp-logo.png` | Logo beside the college name in Education. Replaces the fallback icon. | Square, 256×256+, transparent |
| `og-image.png` | Preview card when the site is shared on LinkedIn/X/WhatsApp. | 1200×630 |
| `favicon.svg` | Browser tab icon. **Already included.** | — |

## Replacing `profile.jpg`

Just overwrite the file with another square image — the markup and CSS need
no changes. The CSS handles the circular crop, accent border, glow and
gradient overlay.

If you swap in a non-square image, crop it to a square first, or
`object-fit: cover` will centre-crop it for you (which may cut off a face
that isn't centred).

## After adding `iitkgp-logo.png`

Open `index.html`, find `data-todo="logo"`, and swap the fallback `<div>` for
the commented-out `<img>` tag above it.

If the logo has dark ink and gets lost against the dark tile, change the
wrapper to `<div class="edu__logo edu__logo--light" ...>` — that gives it a
near-white backing instead.
