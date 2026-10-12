# Content Specification

## Purpose
The pages describe real work, in Artyom's own terms. Anything not backed by the owner or their
materials is a defect.

## Requirements

### Requirement: Only sourced facts
Page content SHALL come only from facts the owner gave or from their materials (reports, git
history, meeting minutes, design files, repos). Role, outcome, contributors, dates and links SHALL
be left empty rather than filled with guesses.

#### Scenario: Missing role
- **WHEN** a project's materials don't state Artyom's role
- **THEN** the `role` field stays unset and the owner is asked

#### Scenario: Ambiguous contributors
- **WHEN** git author names are ambiguous
- **THEN** contributors are left out until the owner lists them

### Requirement: Read the source fully
Before a project page is written, its full source material SHALL be read and its details,
challenges and reflections carried over.

#### Scenario: Report lists challenges
- **WHEN** the report lists difficulties or reflections
- **THEN** the page has a Challenges section built from them

#### Scenario: Technique used but not named
- **WHEN** the report describes a technique used in the work (e.g. button debouncing)
- **THEN** it is named in Core ideas

### Requirement: Case-study structure
A project page SHALL follow the project template: Core ideas, Challenge(s), Approach, How it
works, Outcome. Challenge states the problem and constraints; Approach gives the key decisions
with their trade-offs (including what was not done); How it works describes the system as it
is; Outcome gives the result and what was learnt. Setbacks are not a separate section from
Challenge. Core ideas are the anchors the story is told around, but their framework names (e.g.
ITIL) are not repeated throughout the text.

#### Scenario: Project with two systems
- **WHEN** a project replaced one system with another (e.g. CLCN's WordPress site with a React app)
- **THEN** How it works gives both systems equal weight and a subsection on the transition

### Requirement: Plain language
The hero summary SHALL be one plain sentence about what the thing is. The context SHALL say
briefly what kind of work it was, without course codes or mark dates. Text SHALL be plain, with
no fluff or stuck-up phrasing.

### Requirement: Precise tool lists
`stack` (shown as Tools) SHALL list the actual components and tools in conventional terms
(e.g. PIC32, C, IR LED, IR receiver, Buzzer, Potentiometer, Push buttons).

### Requirement: Owner's focus
When the owner narrows a page's focus (e.g. the ERP over the HRIS), the other part SHALL be cut
to a minimal mention.

### Requirement: Drafts stay hidden
A project with `draft: true` SHALL appear neither in the gallery nor as a page, and its URL
SHALL return 404.

#### Scenario: Hide a project in progress
- **WHEN** a project's front matter has `draft: true`
- **THEN** the Projects card does not list it and /projects/<id>/ is not built
