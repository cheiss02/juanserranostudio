# Pre-launch checklist

This checklist is general information, not legal advice. Have a California attorney review business policies and client agreements before taking paid bookings.

## Business information

- Confirm the contracting business name and a business mailing address.
- Confirm the city/base and the exact service area before claiming a specific location.
- Verify the phone, booking email, support email, and social profile links.
- Do not publish client names, credits, or client photographs without permission.

## Client work and photographs

- Use a written commission agreement for each booking. Cover scope, delivery, usage/licensing, fees, payment schedule, cancellation, rescheduling, and unexpected events.
- Use a professionally translated Spanish agreement when negotiating a commission primarily in Spanish; bilingual website copy is not a substitute for a translated contract.
- Obtain appropriate model and location releases, including guardian permission for minors.
- Keep original ownership and release records organized.
- Strip GPS/location metadata from photographs made at private homes.
- Do not claim insurance coverage, client credits, years of experience, or credentials unless verified.

## Privacy and contact form

- The current site is static and does not publish a database or admin panel. Its contact form uses Formspree only after `PUBLIC_FORMSPREE_ENDPOINT` is configured; otherwise the page directs visitors to email the studio.
- Before enabling the form, review Formspree's data processing, retention, spam controls, and terms. Publish a privacy notice that accurately identifies the provider and explains how inquiry data is used.
- Protect access to the booking and support inboxes and decide who monitors them.
- Add privacy, terms, copyright, and accessibility pages only after their contents have been reviewed and match actual business practices.

## Hosting and security

- Confirm HTTPS is enabled for `juanserranostudio.com` in GitHub Pages before promoting the domain.
- GitHub Pages does not support custom response headers. It cannot provide this project with custom HSTS, Content-Security-Policy, X-Frame-Options, or Permissions-Policy headers. Use Cloudflare Pages or another header-capable host if those headers are a launch requirement.
- Re-run `npm run check` after content or layout changes, then manually review keyboard access, mobile navigation, and reduced-motion behavior.
- Verify the deployed sitemap, robots file, contact links, social preview image, DNS, and HTTPS certificate.
