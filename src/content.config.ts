import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const PROJECT_CATEGORIES = ['Electronics', 'Web', 'Analytics', 'Design', 'Modeling'] as const;
export const ORGANISATIONS = ['Flinders', 'CLCN', 'Novita'] as const;

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		// one category or a list, e.g. `category: Web` or `category: [Web, Analytics]`; always an array after parsing
		category: z.union([z.enum(PROJECT_CATEGORIES), z.array(z.enum(PROJECT_CATEGORIES))]).transform((c) => [c].flat()),
		// where the project was done; filtered by the Organisation chip
		organisation: z.enum(ORGANISATIONS).optional(),
		stack: z.array(z.string()).default([]),
		link: z.url().optional(),
		// hero + gallery thumbnail, a path under public/ (e.g. /img/foo.png)
		image: z.string().optional(),
		// project page hero (all optional): recurring themes shown as #tags, your role,
		// and the outside-in context paragraph that opens the page
		themes: z.array(z.string()).default([]),
		role: z.string().optional(),
		context: z.string().optional(),
		date: z.coerce.date(),
	}),
});

const writings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
		// external post; leave out to host the post on this site at /writings/<id>/
		link: z.url().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects, writings };
