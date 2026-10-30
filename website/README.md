# CoopLab website

Static source for [cooplab.sigmas.club](https://cooplab.sigmas.club/).
Serve this directory with any static web server. No build or dependencies are needed.

## Editing

- `index.html`: page text, links, sections and the route illustration.
- `style.css`: colors, typography, spacing and responsive layouts. The color
  variables are near the top; the final theme section supplies the blue/orange finish.
- `app.js`: image previews and the copy-link button.
- `assets/`: screenshots and the site icon.

The source uses two spaces for indentation and separate lines for CSS
properties. Blank lines separate the different parts of the page.
The included `.editorconfig` and `.prettierrc.json` keep the style consistent.
In VS Code, install the Prettier extension and use **Format Document** to format
your changes. Formatting tools are optional; the website works without them.

## Preview

For a local preview, run `python -m http.server 8793 --bind 127.0.0.1 --directory website`
from the repository root, then open `http://127.0.0.1:8793/`.

The images are real development captures. The settings screen shows an earlier
launcher iteration; the native setup image shows a later closed-test launcher.
They do not demonstrate a complete campaign playthrough.

This directory contains only the public website. It includes no playable mod,
launcher binaries, invitations, credentials or private service configuration.
