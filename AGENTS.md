# Repository Notes

- This is a small set of self-contained static pages — no framework, no bundler, no build step.
  - `index.html` is the homepage: a Fibonacci-sphere sports photo archive (splash, intro film, drag-to-rotate sphere, flat grid, lightbox). Its CSS is `style.css`; its behavior is `script.js` (sphere/grid/lightbox-specific, not shared).
  - `portfolio.html`, `services.html`, `about.html`, `contact.html`, `quinceanera.html`, `wedding.html` are simple content pages sharing `style.css` for look, and `nav.js` for the header/hamburger menu, EN/ES language toggle, and custom cursor. Each page defines its own `UI` translation object inline and calls `initSiteChrome(UI)`.
- Bilingual (EN/ES) throughout via `data-i18n` / `data-i18n-html` attributes + a `UI` dictionary per page (see `script.js`'s `applyLang()` for the homepage, `nav.js`'s `initSiteChrome()` for the rest). When adding copy, add both languages together.
- Media lives in `assets/`: `assets/intro.mp4`, `assets/avatar.jpg`, `assets/logo-white.png`, `assets/photos/01.jpg`–`21.jpg` (homepage sphere), `assets/quinceanera/`, `assets/wedding/` (category gallery pages). Several of these are temporary placeholders pending final client assets — check with the user before assuming any photo/video is final.
- Contact info (email, phone, WhatsApp) is sourced from the live reference site at juanserranostudio.vercel.app — info@juanserranostudio.com / help@juanserranostudio.com / (562) 396-3548. Don't invent different contact details.
- The quote form on `contact.html` has no backend — it composes a `mailto:` link client-side. Don't silently wire it to a real form service without the user's say-so.
- GitHub Pages serves these files directly from the repo root (via `.github/workflows/deploy.yml`) — there is nothing to build or run locally. Open any `.html` file in a browser, or serve the folder with a static file server, to preview.
- `CNAME` at the repo root configures the `juanserranostudio.com` custom domain for GitHub Pages; keep it unless the domain changes.
- Do not add server-only secrets to client code — these are static pages with no backend.
