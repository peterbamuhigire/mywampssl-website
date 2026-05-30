import type { APIRoute } from 'astro';
import { SITE_URL, AUTHOR, LINKS } from '../../data/site';

export const GET: APIRoute = () => {
  const body = `Contact: mailto:${AUTHOR.email}
Contact: ${AUTHOR.website}
Expires: 2027-05-30T00:00:00Z
Preferred-Languages: en, fr
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${LINKS.issues}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
