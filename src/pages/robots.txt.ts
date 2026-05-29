import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';

// Allow all crawlers, including AI crawlers (engine policy: do not block AI
// crawlers unless the owner opts out in writing). Reference the sitemap index.
const AI_BOTS = [
  'Googlebot', 'Bingbot', 'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'Google-Extended', 'ClaudeBot', 'anthropic-ai', 'Claude-Web',
  'PerplexityBot', 'CCBot', 'Applebot', 'Applebot-Extended',
];

export const GET: APIRoute = () => {
  const allowBlocks = AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n');
  const body = `# WAMP SSL Automator — robots.txt
User-agent: *
Allow: /

${allowBlocks}

Sitemap: ${SITE_URL}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
