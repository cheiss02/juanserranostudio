# Juan Serrano Studio

A single self-contained static page — `index.html` — for Serrano Studio Photography (sports photography, Southern California). No framework, no build step, no dependencies.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Assets

All media lives in `assets/`, referenced by `index.html`:

```text
assets/intro.mp4
assets/avatar.jpg
assets/logo-white.png
assets/photos/01.jpg … assets/photos/21.jpg
```

Replace these files directly — there is no build step to run afterward. Each photo file is used for both its sphere/grid thumbnail and its lightbox full image.

## Edit content

Photo titles, locations, and captions are defined in the `photos` array near the top of the `<script>` block in `index.html`. Keep the array in the same order as `assets/photos/01.jpg`–`21.jpg`, and keep exactly one entry marked `tall:true` (the portrait-oriented Allegiant Stadium shot) in sync with the actual portrait image.

## GitHub Pages and GoDaddy

`.github/workflows/deploy.yml` publishes the repository root (minus `.git`/`.github`) to GitHub Pages on every push to `main`. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source.

`CNAME` declares `juanserranostudio.com`. In GoDaddy DNS, point the apex (`@`) to GitHub Pages with these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add a `www` CNAME record pointing to `<your-github-username>.github.io`. In GitHub Pages settings, confirm `juanserranostudio.com` as the custom domain and enable **Enforce HTTPS** once the certificate is ready.

### Hosting limitation

GitHub Pages serves static files but does not let this repository set response headers (Content-Security-Policy, HSTS, X-Frame-Options, Permissions-Policy). If enforcing those headers becomes a requirement, deploy through a header-capable static host (e.g. Cloudflare Pages) instead and point the GoDaddy domain there.
