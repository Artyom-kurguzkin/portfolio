import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const PROJECT_CATEGORIES = ['Electronics', 'Web', 'Analytics', 'Design', 'Modeling'] as const;

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.enum(PROJECT_CATEGORIES),
		stack: z.array(z.string()).default([]),
		link: z.url().optional(),
		image: z.string().optional(),
		date: z.coerce.date(),
	}),
});

const writings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
		link: z.url(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects, writings };
