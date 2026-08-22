import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		stack: z.array(z.string()).default([]),
		link: z.url().optional(),
		image: z.string().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects };
