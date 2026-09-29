# Interactive 3D Project Cards

## Goal
Transform the four existing project entries into responsive archival display cards with cursor-tracked perspective, layered depth, glare, and distinct app preview mockups, while preserving every project’s current content and external link.

## Implementation
- Add a reusable `ProjectTiltCard` component that:
  - Tracks pointer position only for fine-pointer devices.
  - Smoothly interpolates rotation and glare coordinates with `requestAnimationFrame`.
  - Eases back to a neutral position on pointer exit.
  - Keeps keyboard focus and external-link behavior accessible.
- Split each card into three visual planes:
  - Base: archival frame, card surface, scanlines, and restrained edge glow.
  - `translateZ(25px)`: project metadata, description, technology tags, and CRT preview.
  - `translateZ(45px)`: title, live marker, and visit action.
- Add four lightweight, project-specific mock interface previews built from semantic HTML/CSS:
  - BookBerries: bookstore shelf/catalog.
  - UMMTO Share: student resource dashboard.
  - Ouedkniss: marketplace listing/search.
  - Tiny Explorer: colorful learning activity.
- Extend the existing global design utilities with token-based tilt-card, glare, scanline, CRT, and reduced-motion styles.
- Keep the established haunted archived-internet palette and typography; no generated imagery or external media will be added.

## Touch, Motion, and Accessibility
- Disable cursor rotation and glare tracking on coarse-pointer/touch devices; retain a clean flat card with subtle press feedback.
- Respect `prefers-reduced-motion` by removing tilt interpolation and depth movement.
- Preserve visible focus states, readable contrast, and full-card keyboard activation.

## Verification
- Check all four cards at desktop and mobile sizes.
- Confirm tilt direction, glare tracking, smooth reset, project links, keyboard focus, touch fallback, and reduced-motion behavior.
- Confirm no layout overlap, runtime errors, or build errors.
