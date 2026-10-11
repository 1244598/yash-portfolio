# assets/

Drop your files here. Nothing in this folder is required for the site to
render — the page has fallbacks — but each file below unlocks something.

| File | What it does | Recommended |
|------|--------------|-------------|
| `iitkgp-campus.jpg` | Photo in the Education card. **Already added** (900×600). | 3:2 landscape |
| `profile.jpg` | Hero portrait. **Already added** (600×600, cropped from the original). | Square, 600×600+ |
| `resume.pdf` | Wires up the "Download résumé" link in the hero. | — |
| `og-image.png` | Preview card when the site is shared on LinkedIn/X/WhatsApp. | 1200×630 |
| `kharcha/*.png` | Kharcha app screenshots in the Projects section. **Already added** (4 × 420×933). | — |
| `favicon.svg` | Browser tab icon. **Already included.** | — |

## Replacing `profile.jpg`

Just overwrite the file with another square image — the markup and CSS need
no changes. The CSS handles the circular crop, accent border, glow and
gradient overlay.

If you swap in a non-square image, crop it to a square first, or
`object-fit: cover` will centre-crop it for you (which may cut off a face
that isn't centred).

## About the campus photo

`iitkgp-campus.jpg` is a photograph of the IIT Kharagpur main building,
credited on the page to **Himanshu Bali** (the name is watermarked on the
original). It is someone else's copyrighted work, used here with a visible
credit. If you don't have permission for it, replace the file with your own
photo of campus — the markup and styling need no changes.

Keep `.edu__credit` in `index.html` for as long as you keep this photo.

## Kharcha screenshots

`kharcha/home.png`, `insights.png`, `add.png` and `trends.png` come from the
Kharcha repo's `docs/store-assets/` (the Play Store listing assets), resized
to 420×933 and quantised to a 128-colour palette — about 21 KB each instead
of 210 KB, with UI text still crisp.

They are lazy-loaded and sit inside a collapsed `<details>`, so nothing is
fetched until someone opens the Kharcha card.
