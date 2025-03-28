import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    banner: z.string(),
    link: z.string(),
    category: z.string(),
    status: z.string(),
    period: z.string(),
    order: z.number().optional(),
  })
});

export const collections = { blog, projects };
