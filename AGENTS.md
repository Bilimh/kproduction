# Repository Guidelines

## Project Structure & Module Organization

This repository is a static, single-page French photography portfolio. `index.html` contains the page markup, embedded CSS, and embedded JavaScript. There are no separate source, test, or asset directories. Photography and web fonts are currently loaded from Unsplash and Google Fonts, so a network connection is needed to see the complete design.

## Build, Test, and Development Commands

There is no build step, package manager, or test runner configured. To preview changes, open `index.html` in a browser, or serve the repository locally with `python3 -m http.server 8000` and visit `http://localhost:8000`. Stop the server with Ctrl+C.

## Coding Style & Naming Conventions

Keep the page self-contained unless the project structure is deliberately expanded. Use semantic HTML, descriptive class names (for example, `film-frame` and `about-copy`), and accessible labels for interactive controls. CSS custom properties and JavaScript constants use the existing kebab-case and camelCase patterns respectively. The current file has compact, often single-line CSS and JavaScript; when editing, keep related rules and behaviors grouped by page section and avoid changing unrelated content. Do not add dependencies for features that can be implemented with the existing browser APIs.

## Testing Guidelines

No automated tests or coverage requirements are present. After editing, preview the page at desktop and narrow mobile widths. Check navigation links, the scroll-driven experience, the draggable photo wall, film strip, and lightbox controls (including keyboard navigation). Confirm the browser console has no new errors and that images and fonts load when online.

## Commit & Pull Request Guidelines

Git history is unavailable in this checkout, so no repository-specific commit convention can be confirmed. Use a short, imperative commit subject that describes the change, such as `Improve mobile photo wall`. Pull requests should summarize the visible change, mention manual checks performed, and include desktop and mobile screenshots for visual updates. Link a related issue when one exists.

## Configuration & Content Notes

The contact link currently uses `bonjour@example.com`; replace it with the approved project address before launch. Keep image alt text meaningful, and avoid committing private credentials or personal data.
