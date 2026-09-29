# Architecture Rules

- Keep pointer-driven project card motion isolated in `ProjectTiltCard`; this preserves a data-only Projects page and centralizes touch/reduced-motion handling.