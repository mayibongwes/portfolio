// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// base: set to '/portfolio/' when served from the default github.io subdirectory URL.
// Once mayi.co.za is pointed at GitHub Pages (apex domain), change base back to '/'.
export default defineConfig({
  site: 'https://mayibongwes.github.io',
  base: '/portfolio',
  compressHTML: true,
});
