import { en } from './en';
import { fr } from './fr';
import type { SiteContent } from './types';
import type { Locale } from './ui';

const MAP: Record<Locale, SiteContent> = { en, fr };

export function getContent(lang: Locale): SiteContent {
  return MAP[lang];
}
