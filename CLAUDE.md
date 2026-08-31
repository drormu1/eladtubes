# CLAUDE.md

## Project
Marketing one-page website (Hebrew, RTL) for אלעד שמחי — contractor in Israel:
sewer work, earthworks, plumbing. Service area: Petah Tikva and central Israel.

## Goals
- Small, clear, conversion-focused. Contact actions first: phone + WhatsApp.
- Content updates (text/images/videos) must never require touching logic.

## Stack & File Roles
Static site, no build step. Must keep working when opened directly from disk (file://) and on GitHub Pages.

- `index.html` — single page. Sections: hero, #services, #equipment, #clients, #projects, #team, #contact. Loads `data.js` BEFORE `script.js` (order matters).
- `data.js` — ALL editable content: `window.siteData = { contact, galleries }`. Contact details live ONLY here (real phone: 050-886-1398). Content changes go here and nowhere else.
- `script.js` — logic only: gallery rendering + wiring `data-phone-link` / `data-whatsapp-link` / `data-phone-display` elements. Do not put content here.
- `styles.css` — responsive RTL design, CSS variables in `:root`, breakpoints at 980px and 600px.

## Working Rules
- You may freely edit files inside this project folder without asking each time.
- Prefer small, safe, incremental changes.
- Preserve Hebrew RTL support and responsive behavior.
- Media lives in `assets/images/<section>` and `assets/videos/<section>`; keep folder names stable.
- Phone numbers displayed in HTML are static placeholders; `script.js` replaces them from `data.js` at load. Galleries are empty without JS — acceptable.

## History / Decisions
- 2026-08-31: "מספר ישיר" copy box removed from #contact per owner request — do not re-add.
- 2026-08-31: data split out of script.js into data.js (chosen over fetch+JSON to keep file:// working).
- 2026-08-31: Mobile (≤980px): compact one-row header with hamburger menu (.nav-toggle toggles .nav-open on .topbar); ≤600px: floating buttons become a fixed bottom action bar (call/WhatsApp). Do not revert to stacked column topbar.
- Keep copy concise and action-oriented.
- 2026-08-31: SEO baseline added — LocalBusiness (Plumber) JSON-LD injected by script.js from `siteData.business` in data.js, OG tags + local keywords in index.html, robots.txt + sitemap.xml. Placeholder `REPLACE-WITH-YOUR-SITE-URL` and empty `siteUrl` must be filled once the site is deployed.
