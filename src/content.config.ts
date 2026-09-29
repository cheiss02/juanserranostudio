import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const series = defineCollection({
  loader: glob({
    base: "./src/content/series",
    pattern: "**/index.md",
    generateId: ({ entry }) => entry.replace(/[/\\]index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title_en: z.string(),
      title_es: z.string(),
      description_en: z.string(),
      description_es: z.string(),
      category: z.enum(["sports", "portrait", "editorial", "weddings"]),
      cover: image(),
      hover_image: image(),
      mobile_image: image(),
      cover_alt_en: z.string(),
      cover_alt_es: z.string(),
      order: z.number(),
      images: z.array(
        z.object({
          src: image(),
          alt_en: z.string(),
          alt_es: z.string(),
        }),
      ),
    }),
});

export const collections = { series };