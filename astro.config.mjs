import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dismafer.shop',

  /* Optimizaciones de build */
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },

  /* Prefetch para navegación más rápida */
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  /* Vite: plugin Tailwind v4 + headers de seguridad en dev */
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
