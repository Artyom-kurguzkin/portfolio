# Zoom Specification

## Purpose
Pictures and code can be inspected closely. One shared component (components/Zoom.astro) serves
every page.

## Requirements

### Requirement: What zooms
Every content picture, code block and hero image or video on project pages, and every gallery
tile, SHALL open full screen on click, Enter or Space.

### Requirement: Opening size
Pictures SHALL open at full resolution, centred, unless marked `data-zoom="fit"` (gallery
Instagram photos), which open fitted to the screen. Clicking the picture toggles between the two.

#### Scenario: Project picture
- **WHEN** a picture on a project page is clicked
- **THEN** it opens at full resolution

#### Scenario: Instagram photo
- **WHEN** an Instagram photo in the gallery is clicked
- **THEN** it opens fitted to the screen, and clicking it shows it at full size

### Requirement: Closing
The view SHALL close on Escape, on a click outside the picture, or on its round yellow back
button pinned to the bottom left. Closing a view opened with the mouse SHALL leave no keyboard
focus behind; closing one opened with the keyboard returns focus to the item.

### Requirement: Magnifier badge
Zoomable items SHALL carry a yellow magnifier badge on their own top-right corner, wherever the
layout moves them. On project pages it always shows; in the gallery only on hover or keyboard
focus. Hovering wiggles it (runs even with OS animations off); there is no lift, shadow or zoom
animation on the item itself.

### Requirement: Project link
A picture marked `data-project` SHALL show a yellow "Go to project →" button next to the back
button, linking to that project.
