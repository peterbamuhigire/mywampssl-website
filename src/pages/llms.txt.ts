import type { APIRoute } from 'astro';
import { SITE_URL, AUTHOR, LINKS } from '../data/site';
import { en } from '../i18n/en';
import { path } from '../i18n/ui';

const abs = (p: string) => new URL(p, SITE_URL).toString();

// llms.txt — engine LLM-visibility artifact (not a Google ranking lever).
export const GET: APIRoute = () => {
  const body = `# WAMP SSL Automator

> Free, open-source Windows desktop tool that gives WampServer developers genuinely-trusted local HTTPS in one click: it creates a local Root Certificate Authority, installs it in the Windows trust store, issues per-domain certificates (SHA-256, SAN, serverAuth EKU, 825-day validity), merges Apache vhosts, updates the Windows hosts file, restarts Apache, and verifies every domain over HTTPS — with timestamped backups and automatic rollback. Windows 10/11, MIT licence.

## Guides
- [${en.guideSsl.h1}](${abs(path('guideSsl', 'en'))}): ${en.guideSsl.meta.description}
- [${en.guideDomains.h1}](${abs(path('guideDomains', 'en'))}): ${en.guideDomains.meta.description}

## Product
- [Home](${abs(path('home', 'en'))}): Overview, the problem it solves, and the one-click solution.
- [Features](${abs(path('features', 'en'))}): Trusted certificates, modern cert profile, idempotent runs, merge-never-clobber, backups + rollback, end-to-end verification, auto-detection, live log.
- [How it works](${abs(path('howItWorks', 'en'))}): The nine-step pipeline, validated before commit and rolled back on failure.
- [FAQ](${abs(path('faq', 'en'))}): Browser trust, config safety, rollback, OpenSSL, licensing.
- [Download (Windows)](${LINKS.download})
- [Source code (GitHub, MIT)](${LINKS.repo})

## French / Français
- [Accueil](${abs(path('home', 'fr'))})
- [Guide HTTPS/SSL WampServer](${abs(path('guideSsl', 'fr'))})
- [Guide domaines locaux Windows](${abs(path('guideDomains', 'fr'))})

## About & contact
- [About the project and maker](${abs(path('about', 'en'))})
- Maker: ${AUTHOR.name} (${AUTHOR.alias}) — ${AUTHOR.website}
- Email: ${AUTHOR.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
