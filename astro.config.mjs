import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// For a user site, create a GitHub repo named <username>.github.io
// and replace YOUR-GITHUB-USERNAME below with your GitHub username.
// (For a project site instead, also add: base: '/repo-name/'.)
export default defineConfig({
  site: 'https://tochsothak.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
