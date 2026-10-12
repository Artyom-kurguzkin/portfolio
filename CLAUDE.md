# portfolio

Artyom Kurguzkin's portfolio (Astro 7, GitHub Pages at artyom-kurguzkin.com).

## Specs: OpenSpec
How the site behaves and the owner's rules for content and layout live in [openspec/](openspec/):
specs in [openspec/specs/](openspec/specs/), project context and rules in
[openspec/config.yaml](openspec/config.yaml). Read the relevant spec before changing content or
layout, and update it when behaviour or a rule changes.

## Development
Start the dev server with `npx astro dev --background`; stop it with `npx astro dev stop`.

## Secrets
`INSTAGRAM_TOKEN` lives only in the GitHub secret and the gitignored `.env`. Never commit it.
