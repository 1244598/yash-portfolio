# assets/

Drop your files here. Nothing in this folder is required for the site to
render — the page has fallbacks — but each file below unlocks something.

| File | What it does | Recommended |
|------|--------------|-------------|
| `profile.jpg` | Hero portrait. **Already added** (600×600, cropped from the original). | Square, 600×600+ |
| `resume.pdf` | Wires up the "Download résumé" link in the hero. | — |
| `iitkgp-logo.png` | Logo beside the college name in Education. **Already added** (192×192, transparent). | — |
| `og-image.png` | Preview card when the site is shared on LinkedIn/X/WhatsApp. | 1200×630 |
| `favicon.svg` | Browser tab icon. **Already included.** | — |

## Replacing `profile.jpg`

Just overwrite the file with another square image — the markup and CSS need
no changes. The CSS handles the circular crop, accent border, glow and
gradient overlay.

If you swap in a non-square image, crop it to a square first, or
`object-fit: cover` will centre-crop it for you (which may cut off a face
that isn't centred).

## About the institute logo

`iitkgp-logo.png` came from the Wikipedia article on IIT Kharagpur, where it
is published under a **fair use** claim — it is the institute's trademark,
not public-domain artwork. Using it to show where you studied is ordinary
nominative use, the same as putting it on a CV. Swap or drop it if you'd
rather not carry it.

It sits on a near-white tile (`.edu__logo--light`) because the mark is dark
navy and disappears against the dark card.
