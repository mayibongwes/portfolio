# Portfolio (mayi.co.za)

Personal site for **Mayibongwe Sibanda**—software engineering lead, case studies, and contact. Built with [Astro](https://astro.build).

## Local development

```bash
npm install
npm run dev
```

On **Windows**, if `npm run build` fails with a missing `@rollup/rollup-win32-x64-msvc` module, run `npm install` again (optional platform binaries). This repo lists that package under `optionalDependencies` so it installs when npm resolves optionals correctly.

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deploy (GitHub Pages + custom domain)

1. In the GitHub repo, enable **Pages** with source **GitHub Actions** (Settings → Pages → Build and deployment).
2. Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.
3. For **mayi.co.za**, add a DNS record pointing to GitHub Pages and keep `public/CNAME` as `mayi.co.za`. See [GitHub docs: configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

If you use the default `*.github.io` URL without a custom domain, set `base` in `astro.config.mjs` to your project path (e.g. `/portfolio/`) and redeploy.

## Private notes

The `private/` folder is **gitignored**. It holds career and LinkedIn checklists for local use and manual copy to Google Drive—not published on GitHub.
