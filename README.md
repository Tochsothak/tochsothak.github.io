# Toch Sothak — Portfolio

A modern, fast portfolio built with **Astro + Tailwind CSS**, made to be hosted
**free on GitHub Pages**. No server, no database, no cost.

## Preview it locally

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:4321).

## Publish it free on GitHub Pages

1. Create a GitHub account if you don't have one yet.
2. Create a **public** repository named exactly `tochsothak.github.io`.
3. Your site address is already set in `astro.config.mjs`:
   `https://tochsothak.github.io`.
4. Push this project to that repository:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/tochsothak/tochsothak.github.io.git
git push -u origin main
```

5. On GitHub, go to the repo → **Settings → Pages** → under **Build and
   deployment**, choose **GitHub Actions** as the source.
6. Push any change (or re-run the workflow from the **Actions** tab) and your
   site goes live at `https://tochsothak.github.io` — free, with HTTPS.

## Edit it later

- Text and sections: `src/pages/index.astro`
- Photo: `public/photo.jpg`
- CV download: `public/Toch-Sothak-CV.pdf` (replace with a newer CV any time)
- Colors/layout: Tailwind classes inside `src/pages/index.astro`

After each edit, commit and push — GitHub rebuilds and republishes automatically.

## Notes

- Keep employer work described in general terms only: no proprietary code,
  internal screenshots, or client data.
- A custom domain (like `tochsothak.com`) is optional and costs ~$10/year
  from a domain registrar; the `github.io` address itself is free forever.
