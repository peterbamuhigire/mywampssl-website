import type { APIRoute } from 'astro';
import { SITE_URL, AUTHOR, LINKS, PRODUCT } from '../data/site';
import { en } from '../i18n/en';

function strip(html: string): string {
  return html
    .replace(/<\/(p|li|h2|h3|pre|ul|ol|blockquote)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<h3[^>]*>/gi, '\n### ')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&rsaquo;/g, '>').replace(/&nbsp;/g, ' ').replace(/&mdash;/g, '—')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = () => {
  const c = en;
  const h = c.home;
  const parts: string[] = [];

  parts.push(`# ${PRODUCT.name}\n`);
  parts.push(`Trusted local HTTPS for WampServer, in one click. Windows 10/11. Free and open source (MIT). Site: ${SITE_URL} · Code: ${LINKS.repo} · Download: ${LINKS.download}\n`);

  parts.push(`## The problem\n${h.problem.intro}\n` + h.problem.bullets.map((b) => `- ${b}`).join('\n') + `\n${h.problem.close}`);

  parts.push(`## The solution\n${h.solution.intro}\n` + h.solution.gains.map((g) => `- ${g}`).join('\n') +
    `\nSafety:\n` + h.solution.safety.map((s) => `- ${s}`).join('\n') + `\n${h.solution.close}`);

  parts.push(`## Why "trusted" matters\n` + h.trust.paras.join('\n\n'));

  parts.push(`## Features\n` + c.features.items.map((f) => `- ${f.title}: ${f.body} ${f.detail}`).join('\n'));

  parts.push(`## How it works (nine-step pipeline)\n` + c.howItWorks.steps.map((s, i) => `${i + 1}. ${s.name}: ${s.text}`).join('\n') +
    `\n\n` + c.howItWorks.safety.paras.join('\n\n'));

  parts.push(`## Quick start\n` + h.quickstart.steps.map((s, i) => `${i + 1}. ${s}`).join('\n') + `\n${h.quickstart.outro}`);

  for (const g of [c.guideSsl, c.guideDomains]) {
    parts.push(`## ${g.h1}\n${g.lead}\n\n` + g.sections.map((s) => `### ${s.h2}\n${strip(s.html)}`).join('\n\n'));
    parts.push(`### FAQ — ${g.h1}\n` + g.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'));
  }

  parts.push(`## FAQ\n` + c.faq.groups.flatMap((grp) => grp.items).map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'));

  parts.push(`## About\n${c.about.project.paras.join('\n\n')}\n\nMaker: ${AUTHOR.name} (${AUTHOR.alias}). Works across ${AUTHOR.knowsAbout.join(', ')}. ${AUTHOR.website}`);

  parts.push(`## Standing with Palestine\n${c.palestine.paras.join('\n\n')}\n${c.palestine.closing}`);

  parts.push(`## Contact\nEmail: ${AUTHOR.email}\nWhatsApp: ${AUTHOR.whatsapp}\nWebsite: ${AUTHOR.website}\nGitHub: ${LINKS.repo}`);

  const body = parts.join('\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
