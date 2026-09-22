# Interactive 3D Project Terminal

## Goal
Turn the main floating computer monitor on the Home page into a readable project terminal while preserving the existing haunted archival atmosphere.

## Changes
- Display a short, syntax-styled code fragment on the main 3D monitor instead of abstract lines.
- Add a compact project overview for BookBerries, UMMTO Share, Ouedkniss, and Tiny Explorer within the same screen treatment.
- Let visitors cycle through the projects and open each live site from the screen.
- Keep the controls visually integrated into the CRT display, while ensuring Kamel's name and existing Home links remain unobstructed.
- Preserve the current slower drift, pointer depth, reduced-motion behavior, colors, and non-AI visual policy.

## Technical details
- Use an HTML interface anchored to the existing Three.js monitor so text stays crisp and links remain accessible.
- Stop pointer events from leaking into camera movement when visitors use the terminal controls.
- Scale or simplify the terminal at small screen sizes so it does not overlap the main heading.
- Verify the display, project switching, external links, and layout on desktop and mobile.
