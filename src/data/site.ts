// Sitewide constants. Single source of truth for URLs, contact, author.
export const SITE_URL = 'https://mywampssl.techguypeter.com';

export const PRODUCT = {
  name: 'WAMP SSL Automator',
  codeName: 'MyWampSSL',
  version: '1.0',
  license: 'MIT',
  os: ['Windows 10', 'Windows 11'],
  category: 'DeveloperApplication',
} as const;

export const LINKS = {
  repo: 'https://github.com/peterbamuhigire/MyWampSSL',
  download: 'https://github.com/peterbamuhigire/MyWampSSL/releases/latest',
  issues: 'https://github.com/peterbamuhigire/MyWampSSL/issues',
  readme: 'https://github.com/peterbamuhigire/MyWampSSL#readme',
  wampserver: 'https://www.wampserver.com/en/',
  letsencrypt: 'https://letsencrypt.org/',
} as const;

export const AUTHOR = {
  name: 'Peter Bamuhigire',
  alias: 'Tech Guy Peter',
  website: 'https://www.techguypeter.com',
  email: 'peter@techguypeter.com',
  whatsapp: '+256 784 464178',
  whatsappLink: 'https://wa.me/256784464178',
  github: 'https://github.com/peterbamuhigire',
  // Used for Person.knowsAbout (E-E-A-T). Never surfaced as a "hire me" pitch.
  knowsAbout: ['Cloud systems', 'Mobile apps', 'ERP systems', 'Custom software', 'Software consulting'],
} as const;

export const OG = {
  en: '/og/og-en.png',
  fr: '/og/og-fr.png',
} as const;
