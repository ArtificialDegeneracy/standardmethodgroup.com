import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Operations Notes. One file per article in src/content/insights/; the file name is the URL slug.
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160), // meta description and social preview; keep it free of profanity
    dek: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Dan Rockhold'),
    ogImage: z.string().url().optional(), // absolute URL; falls back to the sitewide social image
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
