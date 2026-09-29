# Juan Serrano Studio

Bilingual static photography portfolio built with Astro. English is served at `/` and Spanish at `/es/`. Portfolio categories are Sports, Portrait, Editorial, and Weddings.

## Local development

Requirements: Node.js 20.9 or newer (Node 22 LTS recommended).

```bash
npm ci
npm run dev
```

Astro prints the local URL after startup. Validate and build the static site with:

```bash
npm run check
```

The deployable site is generated in `dist/`.

## Edit site content

- **Project photos and copy:** each project has a folder in `src/content/series/<slug>/`. Edit `index.md` and replace `cover.jpg`, `hover.jpg`, `mobile.jpg`, and any gallery images in that folder. Keep the English and Spanish titles, descriptions, and alt text together. Astro generates responsive AVIF/WebP image variants at build time.
- **Add a project:** create a new series folder and an `index.md` with the same frontmatter fields as an existing project. Set `category` to `sports`, `portrait`, `editorial`, or `weddings`, provide both language descriptions and alt text, and set its display `order`.
- **Page text and translations:** edit the matching content in `src/i18n/en.json` and `src/i18n/es.json` together. Run `npm run check` to catch missing or invalid content.
- **Services and category descriptions:** edit `categories` and `services` in both locale JSON files. The service rows use the matching series cover photo automatically.
- **Business contact details and social profiles:** edit `src/data/site.ts`. Set Instagram and Facebook URLs before launch; blank values intentionally render non-clickable icons.
- **Site appearance:** edit `src/styles/global.css`.

The starter photographs are temporary examples. Replace them with images Juan is licensed to publish, and write accurate localized alt text. Remove GPS metadata from client/private-location photographs before adding them.

## GitHub Pages and GoDaddy

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Push to the `main` branch, then in GitHub open **Settings → Pages** and select **GitHub Actions** as the deployment source. Each successful workflow publishes the contents of `dist/`.

The file `public/CNAME` declares `juanserranostudio.com`. In GoDaddy DNS, point the apex (`@`) to GitHub Pages with these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optionally add GitHub's four IPv6 AAAA records from its current custom-domain documentation. Add a `www` CNAME pointing to `<your-github-username>.github.io`. In GitHub Pages settings, confirm `juanserranostudio.com` as the custom domain and enable **Enforce HTTPS** once the certificate is ready. DNS changes can take time to propagate.

### Contact form

GitHub Pages does not process Netlify Forms or provide server/API code. The contact page therefore shows direct email contact until a Formspree endpoint is configured. Create a Formspree form, then add a repository Actions variable named `PUBLIC_FORMSPREE_ENDPOINT` with its form endpoint, for example `https://formspree.io/f/your-form-id`. The value is a public form identifier, not an API secret. The form includes a honeypot; review Formspree's privacy, spam filtering, and rate-limit settings before launch.

### Hosting and security limitation

GitHub Pages serves static files but does **not** let this repository set response headers such as Content-Security-Policy, HSTS, X-Frame-Options, or Permissions-Policy. The site's `robots.txt` is not a substitute for security headers. If enforcing those headers remains a launch requirement, keep this GitHub repository as the source but deploy through Cloudflare Pages (or another host that supports a `_headers` file) and point the GoDaddy domain there instead.

## SEO and discovery

Astro builds fully rendered HTML. `src/pages/sitemap.xml.ts` generates the bilingual sitemap from the page/category/series content. `public/robots.txt` allows search and AI crawlers, `public/llms.txt` summarizes the studio, and every page receives a localized description, canonical URL, hreflang alternates, Open Graph/Twitter metadata, and structured data.

Before launch, replace the share image at `public/share-image.jpg`, configure real social profile URLs, and verify the sitemap and metadata on the deployed custom domain. Search engines decide independently whether and when to index or recommend a site; metadata helps discovery but cannot guarantee ranking or recommendations.
