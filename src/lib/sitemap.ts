import { SITE_URL } from '../data/site';
import { ALL_ROUTE_KEYS, LOCALES, DEFAULT_LOCALE, path, type Locale, type RouteKey } from '../i18n/ui';

const abs = (p: string) => new URL(p, SITE_URL).toString();

// Per-route lastmod (guides carry their own updated date).
const LASTMOD: Partial<Record<RouteKey, string>> = {
  guideSsl: '2026-05-30',
  guideDomains: '2026-05-30',
};
const DEFAULT_LASTMOD = '2026-05-30';

export function buildSitemap(locale: Locale): string {
  const urls = ALL_ROUTE_KEYS.map((key) => {
    const alts =
      LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(path(key, l))}"/>`).join('') +
      `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(path(key, DEFAULT_LOCALE))}"/>`;
    const lastmod = LASTMOD[key] ?? DEFAULT_LASTMOD;
    const priority = key === 'home' ? '1.0' : key.startsWith('guide') ? '0.9' : '0.7';
    return `<url><loc>${abs(path(key, locale))}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority>${alts}</url>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

export function buildSitemapIndex(): string {
  const maps = LOCALES.map(
    (l) => `<sitemap><loc>${abs(`/sitemap-${l}.xml`)}</loc><lastmod>${DEFAULT_LASTMOD}</lastmod></sitemap>`,
  ).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps}</sitemapindex>`;
}
