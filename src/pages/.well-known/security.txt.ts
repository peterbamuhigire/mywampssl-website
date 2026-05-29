import type { APIRoute } from 'astro';
import { SITE_URL, AUTHOR, LINKS } from '../../data/site';

// RFC 9116. Engine also requires Canonical + Policy.
export const GET: APIRoute = () => {
  const body = `Contact: mailto:${AUTHOR.email}
Contact: ${LINKS.issues}
Expires: 2027-05-30T00:00:00.000Z
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${LINKS.repo}/blob/main/SECURITY.md
Preferred-Languages: en, fr
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
