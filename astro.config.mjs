import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// This is a user site: the repo is named exactly <username>.github.io,
// so GitHub serves it at the domain root (https://tochsothak.github.io/)
// and all asset paths must be root-absolute. Do NOT set a subpath base
// here — a base of '/tochsothak.github.io/' is only for project sites.
export default defineConfig({
  site: 'https://tochsothak.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
