# Repository Notes

- This is a single self-contained static page: `index.html` at the repo root. No framework, no bundler, no build step. All CSS lives in the one `<style>` block in `<head>`; all JS lives in the one `<script>` at the end of `<body>`.
- Media lives in `assets/`: `assets/intro.mp4`, `assets/avatar.jpg`, `assets/logo-white.png`, and `assets/photos/01.jpg`–`21.jpg`. Reference these exact relative paths; do not add a bundler, framework, or external CSS/JS file.
- GitHub Pages serves `index.html` and `assets/` directly from the repo root (via `.github/workflows/deploy.yml`) — there is nothing to build or run locally. Open `index.html` in a browser (or serve the folder with any static file server) to preview changes.
- `CNAME` at the repo root configures the `juanserranostudio.com` custom domain for GitHub Pages; keep it unless the domain changes.
- Do not add server-only secrets to client code — this is a static page with no backend.
