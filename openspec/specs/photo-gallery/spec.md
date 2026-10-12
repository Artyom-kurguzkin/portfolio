# Photo Gallery Specification

## Purpose
A Photos card on the main page mixes Artyom's Instagram posts with pictures from his projects,
laid out as a bento grid. It costs nothing until a visitor asks for it.

## Requirements

### Requirement: Gallery content
The gallery SHALL contain every Instagram post, plus each non-draft project's hero picture and
every local picture in its page body. The yellow "Photos" heading shows the total count.

#### Scenario: Project picture
- **WHEN** a tile comes from a project
- **THEN** it carries a link to that project

### Requirement: Collapsed on arrival
On page load the card SHALL show only its heading and a round yellow arrow button, and no gallery
image SHALL be requested.

#### Scenario: Hover the collapsed card
- **WHEN** the pointer is anywhere over the collapsed card
- **THEN** the cursor is a pointer and the arrow bobs

#### Scenario: Open by click
- **WHEN** the collapsed card is clicked anywhere
- **THEN** the images load and the gallery opens

#### Scenario: Open by keyboard
- **WHEN** the arrow button is focused and Enter is pressed
- **THEN** the gallery opens

### Requirement: Opening animation
Opening SHALL play as one movement: the tiles pop in one after another within 600ms whatever
their number, then shuffle straight away, gliding to new places and sizes. The arrow button is
removed once the gallery is open; there is no separate shuffle button.

#### Scenario: Shuffle follows the pop-in
- **WHEN** the gallery is opened
- **THEN** the shuffle starts as the last tile lands, about 0.7s after the click, and all motion ends by about 1.4s

### Requirement: Bento grid
Tiles SHALL be square cells in 6 columns (3 below 40rem card width), sized by a repeating
pattern of big (2×2), wide (2×1), tall (1×2) and single tiles. The pattern is built from blocks
that fill whole rows at both 6 and 3 columns, so the grid closes into a rectangle for any number
of tiles.

#### Scenario: Any tile count
- **WHEN** the gallery has any number of tiles from 10 up
- **THEN** the grid has no holes at 6 or 3 columns

### Requirement: Zoom in the gallery
Every tile SHALL be zoomable (see zoom). Its magnifier badge shows only while it is hovered or
reached with Tab. Instagram photos open fitted to the screen; project pictures open at full size
and show a "Go to project →" button beside the back button.

#### Scenario: Badge after a mouse click
- **WHEN** a photo is clicked, the zoom is closed and the pointer moves to another photo
- **THEN** only the hovered photo shows a badge

### Requirement: Instagram fetch
`scripts/instagram.mjs` SHALL run before dev and build, page through all posts with the
Instagram API (videos use their thumbnail) and download the images into `public/instagram/`,
writing `src/data/instagram.json`. Both outputs are gitignored. The token is read from
`INSTAGRAM_TOKEN` (GitHub secret in CI, `.env` locally) and SHALL never reach the built site.

#### Scenario: No token
- **WHEN** INSTAGRAM_TOKEN is missing or rejected
- **THEN** the build succeeds with no Instagram photos

#### Scenario: Token not in output
- **WHEN** the site is built
- **THEN** no file in dist contains the token

### Requirement: Fresh photos
The deploy workflow SHALL also run weekly, so new posts appear without a push. The token expires
60 days after it is generated and is renewed by hand in the Meta app and the GitHub secret.
