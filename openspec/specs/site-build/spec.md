# Site Build Specification

## Purpose
The site builds statically and deploys itself.

## Requirements

### Requirement: Deploy
Every push to `main`, a manual run, and a weekly schedule SHALL build the site with
`withastro/action` (Node 24) and deploy it to GitHub Pages at https://artyom-kurguzkin.com.

#### Scenario: Leftover merge conflict
- **WHEN** a file contains git conflict markers
- **THEN** the build fails, so markers are resolved before pushing

### Requirement: Link previews
Every page SHALL carry Open Graph and Twitter card tags: its own title and description, and the
site-wide preview image `public/og.png` (1200×627, a screenshot of the main page). The default
description is the first line of the About text.

### Requirement: Secrets
Secrets SHALL live only in GitHub secrets or the gitignored `.env`, never in the repo or the
built site.
