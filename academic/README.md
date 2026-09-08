# Shaojie Li — CV PDF page

The `/academic/` page is a minimal wrapper around the complete English CV PDF. The page only
provides links to the English page, the Chinese translation page, and the corresponding PDF
download, then embeds the PDF without rewriting or reflowing its contents.

## Files

- `index.html` — English CV PDF page.
- `zh.html` — Chinese CV PDF page.
- `pdf-site.css` — system-font, white-background layout for the PDF viewer.
- `assets/Shaojie_Li_CV.pdf` — existing English CV PDF, kept unchanged.
- `assets/Shaojie_Li_CV_CN.pdf` — Chinese reference PDF rendered from
  `CVModify/CV_Shaojie_Li_Master_Template_2026-09-02_CN_Reference.docx`.

The older stylesheet and favicon remain in the directory but are not used by these PDF pages.
No build step or JavaScript runtime is required.
