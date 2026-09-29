import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://juanserranostudio.com",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
});