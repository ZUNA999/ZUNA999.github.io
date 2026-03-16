# Academic Homepage Starter

This repository contains a static academic homepage template for GitHub Pages.
It is designed for a personal research profile rather than a plain resume page.

## Included Sections

- About
- Research interests
- News / updates
- Publications
- Projects
- Experience / education timeline
- Teaching / service / awards / talks
- Contact

## Main File To Edit

Edit `site-data.js` first.

That file contains the content model for:

- name, title, affiliation, summary
- research interests
- email, scholar, GitHub, CV links
- publications
- projects
- teaching, service, awards, talks
- contact details

You only need to edit `index.html` or `styles.css` if you want to change layout or visual design.

## Recommended Editing Order

1. Replace the placeholder identity and affiliation fields in `site-data.js`.
2. Update the `links` array with your real Scholar, GitHub, email, and CV links.
3. If you have a portrait, place it in the repo, for example `assets/portrait.jpg`, then set `portrait` to `"assets/portrait.jpg"`.
4. If you have a CV PDF, place it in the repo, for example `assets/cv.pdf`, then set `cvUrl` to `"assets/cv.pdf"`.
5. Add project entries to the `projects` array when you are ready. If the array is empty, the whole section stays hidden.
6. Empty lists automatically hide their matching sections or panels.

## Local Preview

If Python is available, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly for a quick check.

## Publish To GitHub Pages

Because the repository name is `ZUNA999.github.io`, it is your GitHub user site repository.
After the first push to the default branch, GitHub Pages should publish from the repository root.

Useful commands:

```powershell
git add .
git commit -m "Refine academic homepage template"
git push -u origin main
```

Expected site URL:

```text
https://zuna999.github.io/
```

## Notes

- The navigation automatically hides links for empty sections.
- The `Projects` section is already wired up and will appear as soon as you add project data.
- The template is intentionally modular so you can keep the homepage compact while expanding later.
