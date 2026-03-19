# Academic CV Website

Live site: https://zuna999.github.io/

This repository contains a concise academic CV website built for GitHub Pages.

## Current Sections

- Basic profile and contact
- Education
- Research projects
- Publications and patents
- Honors
- Skills
- Relevant experience

## Main File To Edit

Edit `site-data.js` first.

It contains the content for:

- name, profile summary, research directions
- contact shown in the header
- education
- relevant experience
- research projects
- publications and patents
- honors
- skills

## Notes

- The site is intentionally compact and information-first.
- Empty sections such as publications are hidden automatically.
- The current content is adapted from a resume into a more academic layout.

## Local Preview

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

```powershell
git add .
git commit -m "Update academic CV website"
git push origin main
```
