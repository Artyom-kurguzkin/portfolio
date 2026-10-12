# Home Page Specification

## Purpose
The main page introduces Artyom and lists his work: About, Projects, Writings and Photos.

## Requirements

### Requirement: Approved layout
The layout SHALL NOT be rearranged without the owner asking. From 60rem: About across the top,
Projects and Writings below in a 2:1 split, Photos across the bottom. Below that, cards stack.

### Requirement: Contact links
The About card SHALL end with the contact line: email, LinkedIn, Instagram and Discord.

### Requirement: Project filters
Projects SHALL be filterable by one category chip (clicking the active chip clears it) and by
organisation. When nothing matches, the card says so.

### Requirement: Project tile details
Tiles SHALL always show organisation and date; in card view they also show the Tools list. The
organisation is dropped while an organisation filter is applied.

#### Scenario: Card view
- **WHEN** six or fewer tiles are visible
- **THEN** tiles are cards with a square thumbnail, title, organisation · date and tools

#### Scenario: List view
- **WHEN** seven or more tiles are visible
- **THEN** tiles are compact rows with organisation · date and no tools

### Requirement: Greeting
The "Hi, I'm Artyom" heading SHALL recolour each letter in the blue, green and yellow palette,
never matching its neighbours.
