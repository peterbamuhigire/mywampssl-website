// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';

// Canonical production origin. Used for sitemaps, canonical URLs, hreflang,
// Open Graph URLs, and JSON-LD. Locked during project intake.
export const SITE = 'https://mywampssl.techguypeter.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  redirects: {
    '/': '/en/',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,   // /en/ and /fr/ are both explicit
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    alpinejs(),
    icon({
      include: {
        lucide: [
          'shield-check', 'lock', 'lock-keyhole', 'download', 'github', 'star',
          'terminal', 'refresh-cw', 'rotate-ccw', 'check-check', 'search',
          'app-window', 'circle-check', 'circle-x', 'triangle-alert', 'arrow-right',
          'chevron-down', 'chevron-right', 'menu', 'x', 'globe', 'mail',
          'message-circle', 'file-text', 'shield', 'server', 'cpu', 'layers',
          'database', 'smartphone', 'cloud', 'wrench', 'heart', 'external-link',
          'copy', 'badge-check', 'zap', 'eye', 'file-code', 'list-checks',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
