// Locale config + the route-equivalence map (localized slugs) + URL helpers.
// Canonical URLs, hreflang, the language switcher and sitemaps all resolve
// through ROUTES so each logical page maps to its correct localized URL.

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string; ogLocale: string; name: string }> = {
  en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_GB', name: 'English' },
  fr: { label: 'FR', htmlLang: 'fr', ogLocale: 'fr_FR', name: 'Français' },
};

// Logical page key -> localized path segment per locale.
// Home is '' (root of the locale). Guides are nested.
export type RouteKey =
  | 'home' | 'features' | 'howItWorks'
  | 'guideSsl' | 'guideDomains'
  | 'about' | 'palestine' | 'faq';

export const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home:        { en: '',                              fr: '' },
  features:    { en: 'features',                      fr: 'fonctionnalites' },
  howItWorks:  { en: 'how-it-works',                  fr: 'comment-ca-marche' },
  guideSsl:    { en: 'guide/wampserver-ssl-https',    fr: 'guide/https-ssl-wampserver' },
  guideDomains:{ en: 'guide/local-domains-windows',   fr: 'guide/domaines-locaux-windows' },
  about:       { en: 'about',                         fr: 'a-propos' },
  palestine:   { en: 'standing-with-palestine',       fr: 'solidarite-palestine' },
  faq:         { en: 'faq',                            fr: 'questions-frequentes' },
};

export const ALL_ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];

/** Locale-relative path with trailing slash, e.g. ('features','fr') -> '/fr/fonctionnalites/' */
export function path(key: RouteKey, locale: Locale): string {
  const seg = ROUTES[key][locale];
  return seg ? `/${locale}/${seg}/` : `/${locale}/`;
}

/** Absolute URL on the canonical origin. */
export function absUrl(pathname: string, origin: string): string {
  return new URL(pathname, origin).toString();
}

/** hreflang alternates for a route: every locale + x-default. */
export function alternates(key: RouteKey, origin: string) {
  const list = LOCALES.map((l) => ({ hreflang: LOCALE_META[l].htmlLang, href: absUrl(path(key, l), origin) }));
  list.push({ hreflang: 'x-default', href: absUrl(path(key, DEFAULT_LOCALE), origin) });
  return list;
}

/** The other locale (for the language switcher on a given page). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}
