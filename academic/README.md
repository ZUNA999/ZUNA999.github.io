# Shaojie Li — academic profile

This directory contains the English-only static academic profile for the `/academic/` path.
It is intentionally independent from the existing root website: the root files and root landing
page are not modified.

## Files

- `index.html` — semantic, no-JavaScript profile content with anchor navigation.
- `styles.css` — responsive desktop/mobile layout, accessible focus states, print styles, and reduced-motion support.
- `assets/favicon.svg` — the small `SL` monogram used by the page.
- `assets/Shaojie_Li_CV.pdf` — reserved path for the public CV PDF.

The portrait uses the existing repository-root image at `../Profile-display-hq.jpg`, so the image is
reused without duplicating or changing the root site's asset. The page content is based on the English
CV dated 2 September 2026; internal audit files and the source DOCX are not part of this directory.

No build step or JavaScript runtime is required: opening `index.html` serves the complete page.
