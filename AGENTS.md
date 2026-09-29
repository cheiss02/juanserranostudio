# Repository Notes

- This is a static Astro site. Read the relevant Astro component, content collection, or image documentation before changing framework behavior.
- Portfolio entries live in `src/content/series/<slug>/index.md` with their local images.
- English and Spanish interface copy lives in `src/i18n/en.json` and `src/i18n/es.json`; keep both dictionaries structurally aligned.
- Run `npm run check` before publishing. It runs Astro diagnostics and creates the static site in `dist/`.
- Do not add server-only secrets to client code. GitHub Pages serves static files only.
