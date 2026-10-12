# Project Pages Specification

## Purpose
Project pages are read on wide monitors as well as phones. They use the width, keep related
content together and never leave large empty areas.

## Requirements

### Requirement: Fixed top
The page SHALL open with the hero (facts row: Date, Contributors, Tools, Link; title; summary;
context; image or video) and one Core ideas card, its heading inside and its ideas in a grid.
From 96rem the two sit side by side, their widths balanced so they end at the same height; below
that the hero takes the full width. Tools SHALL be a facts row, never a card of its own.

#### Scenario: Hero beside Core ideas
- **WHEN** the window is at least 96rem wide
- **THEN** the hero and Core ideas cards end at the same height

#### Scenario: Hero image on a tablet
- **WHEN** the hero image is a cover across the top of the card (below 60rem)
- **THEN** it is no taller than 60% of the screen

### Requirement: All text inside cards
Every heading and paragraph SHALL sit inside a card. A section split into several cards keeps
its title inside the first of them.

### Requirement: Challenges early
A Challenge(s)/Setbacks section SHALL come right after the top. Its items flow in balanced
columns, so a single last item never stretches across the card.

### Requirement: Every section keeps its own card
Each "##" section, and each "###" subsection of a section that has two or more, SHALL be its own
card. Cards are never merged across sections.

### Requirement: No large empty space
No card SHALL contain a large empty area, and there SHALL be no unexplained gaps between cards.

#### Scenario: Text much taller than its pictures
- **WHEN** a card's text is much taller than its pictures
- **THEN** the pictures float at the top right and the text wraps around and under them

#### Scenario: Short text beside a tall picture
- **WHEN** a card's text is much shorter than its single picture
- **THEN** the picture's caption moves under the text and the picture shrinks to the text's height (at least 200px)

#### Scenario: Wide pictures under short text
- **WHEN** short text can never be as tall as the pictures beside it
- **THEN** the text runs across the top and the pictures fill one row below

#### Scenario: Two picture cards that can't fill a row
- **WHEN** two consecutive picture cards each leave space on their own
- **THEN** they share a row, split so both end at the same height, if that leaves less empty space

#### Scenario: Run of text-only cards
- **WHEN** several cards without pictures follow each other
- **THEN** they are split into columns in reading order, the split with the least empty area wins, and a one-line card never gets a column of its own

### Requirement: Use the width
From 96rem the page SHALL spread up to 120rem (leaving a gutter for the back button). Only the
top cards and the outer edges need to line up; inner cards MAY start and end anywhere.

### Requirement: Picture sizing
Pictures SHALL never be shown wider than 60% of their pixel width or taller than 60% of their
pixel height (exports are about 2x), nor taller than 560px. Code blocks sit beside the pictures.

### Requirement: Phones
Below 60rem, cards SHALL stack in reading order at full width.

### Requirement: Back button
Project and writing pages SHALL have a round yellow back button with a drawn arrow. On phones it
is fixed to the bottom left, 4rem across; on desktop it sits at the top left.

### Requirement: Writing pages
A writing page SHALL show its header and each "##" entry as cards in one grid, as many across
as fit; a YouTube link alone on its line becomes an embedded player.

### Requirement: Research before redesigning
Before a layout pattern is changed, established practice SHALL be researched across many
examples and the result checked against it.
