import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio configurable por variable de entorno: permite reutilizar el mismo
// código tanto para una vista previa (p.ej. GitHub Pages sin dominio propio)
// como para el dominio definitivo una vez esté disponible.
const SITE_URL = process.env.SITE_URL ?? 'https://lafusio.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
