# Workflow Specification

## Purpose
How changes to this repo are made and checked.

## Requirements

### Requirement: Visual check after UI changes
After any UI change, every affected page SHALL be screenshotted with Playwright at about 1940px,
1200px and 375px (lazy images scrolled into view first) and the screenshots inspected before the
work is reported as done. Interactive changes are also exercised (click, hover, keyboard).

### Requirement: No commits unless asked
Changes SHALL NOT be committed, and commit messages SHALL NOT be written, unless the owner asks.

### Requirement: Honest reporting
Reports SHALL state what is still wrong (page and width) instead of claiming a layout is clean,
and SHALL NOT describe a change as done before it is made.

### Requirement: Short replies
Replies SHALL be brief and without fluff.

### Requirement: Dev server
The dev server runs with `npx astro dev --background` and stops with `npx astro dev stop`. When
it serves stale content, it is restarted (and if needed `.astro` deleted and `astro sync` run).

### Requirement: Materials
Source materials live in `local/` (gitignored), the owner's OneDrive and Obsidian vault, and
sibling repos (e.g. ../../2-clcn). Credential-gated systems are screenshotted by the owner.
