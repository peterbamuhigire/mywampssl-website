import type { APIRoute } from 'astro';
import { buildSitemapIndex } from '../lib/sitemap';
export const GET: APIRoute = () =>
  new Response(buildSitemapIndex(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
