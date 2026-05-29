// JSON-LD builders. Every object must match visible page content.
import { SITE_URL, PRODUCT, LINKS, AUTHOR, OG } from '../data/site';
import type { Locale } from '../i18n/ui';
import type { Faq, Step, Guide } from '../i18n/types';

const abs = (p: string) => new URL(p, SITE_URL).toString();

const ORG_ID = `${SITE_URL}/#org`;
const SITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#peter`;
const APP_ID = `${SITE_URL}/#app`;

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Tech Guy Peter',
    url: AUTHOR.website,
    logo: { '@type': 'ImageObject', url: abs('/icon-512.png'), width: 512, height: 512 },
    founder: { '@id': PERSON_ID },
    sameAs: [AUTHOR.github, AUTHOR.website],
  };
}

export function website(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: PRODUCT.name,
    inLanguage: locale === 'fr' ? 'fr' : 'en',
    publisher: { '@id': ORG_ID },
  };
}

export function person() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AUTHOR.name,
    alternateName: AUTHOR.alias,
    url: AUTHOR.website,
    jobTitle: 'Software & Web Developer',
    worksFor: { '@id': ORG_ID },
    knowsAbout: [...AUTHOR.knowsAbout],
    sameAs: [AUTHOR.github, AUTHOR.website],
  };
}

export function softwareApplication(locale: Locale) {
  return {
    '@type': 'SoftwareApplication',
    '@id': APP_ID,
    name: PRODUCT.name,
    alternateName: PRODUCT.codeName,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: PRODUCT.os.join(', '),
    softwareVersion: PRODUCT.version,
    license: 'https://opensource.org/licenses/MIT',
    url: SITE_URL,
    downloadUrl: LINKS.download,
    softwareHelp: LINKS.readme,
    inLanguage: locale === 'fr' ? 'fr' : 'en',
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    image: abs(OG[locale]),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    featureList: [
      'Trusted local Root CA in the Windows trust store',
      'Per-domain certificates with SAN, serverAuth EKU, 825-day validity',
      'Idempotent runs',
      'Merge (never overwrite) Apache vhosts',
      'Timestamped backups and automatic rollback',
      'End-to-end HTTPS verification',
      'WAMP and Apache version auto-detection',
      'Single-window real-time log',
    ],
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function howTo(name: string, steps: Step[], locale: Locale) {
  return {
    '@type': 'HowTo',
    name,
    inLanguage: locale === 'fr' ? 'fr' : 'en',
    totalTime: 'PT2M',
    tool: { '@type': 'HowToTool', name: PRODUCT.name },
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function techArticle(guide: Guide, pagePath: string, locale: Locale) {
  return {
    '@type': 'TechArticle',
    headline: guide.h1,
    description: guide.meta.description,
    inLanguage: locale === 'fr' ? 'fr' : 'en',
    datePublished: guide.published,
    dateModified: guide.updated,
    mainEntityOfPage: abs(pagePath),
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    image: abs(OG[locale]),
  };
}

/** Wrap a set of node objects into a single @graph document. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
