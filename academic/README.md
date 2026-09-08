# Shaojie Li — CV pages

The `/academic/` page presents each complete two-page CV as static page images,
with the two pages shown side by side within the viewport. This keeps the full
English or Chinese CV visible without vertical scrolling while preserving the
navigation links to the original PDF files for download.

## Files

- `index.html` — English CV pages.
- `zh.html` — Chinese CV pages.
- `pdf-site.css` — viewport-fitted, two-column layout for the page images.
- `assets/cv-en-1.png` and `assets/cv-en-2.png` — rendered English pages.
- `assets/cv-cn-1.png` and `assets/cv-cn-2.png` — rendered Chinese pages.
- `assets/Shaojie_Li_CV.pdf` — English CV PDF, kept unchanged.
- `assets/Shaojie_Li_CV_CN.pdf` — Chinese CV PDF, kept unchanged.

No build step or JavaScript runtime is required. To preview locally, run
`python -m http.server 8000` from the repository root and open
`http://localhost:8000/academic/`.
