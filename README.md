# Rucha Gade — Portfolio (React)

This is a pixel-perfect React conversion of the original static HTML portfolio
(`index.html`, `about.html`, `projects.html`, `blogs.html`, `resume.html`, `contact.html`).
No visual or behavioral changes were made — same fonts, same CSS (`src/index.css`
is the original `assets/style.css` unchanged), same copy, same animations.

## What changed under the hood
- Built with **Vite + React + react-router-dom** instead of separate `.html` files.
- Each original page is now a route/component in `src/pages/`.
- Shared chrome (starfield, nav, ground strip, footer) lives in `src/components/`
  and wraps every route via `Layout.jsx`.
- The vanilla JS from `assets/script.js` was ported 1:1 into React:
  - starfield generation → `Stars.jsx`
  - mobile nav toggle → `Nav.jsx`
  - typewriter effect → `useTypewriter` hook in `Home.jsx`
  - scroll reveal (IntersectionObserver) → `Reveal.jsx`
  - project filter buttons → state in `Projects.jsx`
  - demo contact form submit → state in `Contact.jsx`

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
npm run preview
```

## Note
This version is synced with the latest state of the source repo (per-page CSS files
split out of `style.css`, the redesigned "fun resume" on the Resume page, the contact
form removed from the Contact page, and updated project/social links). The real
`Rucha_Gade_Resume.pdf` from the repo is included in `public/assets/` so the download
button on the Resume page works.

A couple of quirks from the source HTML were intentionally preserved rather than
"fixed", since the ask was to match the UI exactly:
- On the Home page, the "View all projects →" link sits inside the 3-column project
  grid (a 4th grid cell) because the original `<div class="proj-grid">` in `index.html`
  is never explicitly closed before `</section>`.
- On the Contact page, the email link's `href` (`rucha.geeks@email.com`) doesn't match
  its visible text (`rucha.work111@email.com`) — same mismatch as the source.
