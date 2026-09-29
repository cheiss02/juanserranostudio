import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { categories } from "../i18n/index";
import { site } from "../data/site";

const baseUrl = site.url.replace(/\/$/, "");
const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

export const GET = (async () => {
  const pages = [
    { en: "/", es: "/es/" },
    { en: "/portfolio/", es: "/es/portfolio/" },
    { en: "/services/", es: "/es/services/" },
    { en: "/about/", es: "/es/about/" },
    { en: "/contact/", es: "/es/contact/" },
    ...categories.map((category) => ({
      en: `/portfolio/${category}/`,
      es: `/es/portfolio/${category}/`,
    })),
    ...(await getCollection("series")).map((entry) => ({
      en: `/portfolio/${entry.data.category}/${entry.id}/`,
      es: `/es/portfolio/${entry.data.category}/${entry.id}/`,
    })),
  ];

  const urls = pages.map(({ en, es }) => {
    const englishUrl = `${baseUrl}${en}`;
    const spanishUrl = `${baseUrl}${es}`;
    return [
      "  <url>",
      `    <loc>${escapeXml(englishUrl)}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(englishUrl)}" />`,
      `    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(spanishUrl)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(englishUrl)}" />`,
      "  </url>",
      "  <url>",
      `    <loc>${escapeXml(spanishUrl)}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(englishUrl)}" />`,
      `    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(spanishUrl)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(englishUrl)}" />`,
      "  </url>",
    ].join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}) satisfies APIRoute;