import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub published this site at the subpath /tochsothak.github.io/
// (see Settings -> Pages: "Your site is live at
// https://tochsothak.github.io/tochsothak.github.io/"), so all asset
// paths must be prefixed with that base, otherwise the CSS and photo
// 404 and the page looks unstyled.
export default defineConfig({
  site: 'https://tochsothak.github.io',
  base: '/tochsothak.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
});
