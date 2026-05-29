// Shape of the per-locale content. en.ts and fr.ts both satisfy this.
export interface Meta { title: string; description: string; }

export interface Feature { icon: string; title: string; body: string; }
export interface Step { name: string; text: string; }
export interface Faq { q: string; a: string; }
export interface GuideSection { id: string; h2: string; html: string; }

export interface Guide {
  meta: Meta;
  h1: string;
  lead: string;
  updated: string;            // ISO date for dateModified
  published: string;          // ISO date for datePublished
  tocLabel: string;
  sections: GuideSection[];   // visible prose (authored HTML)
  faqs: Faq[];                // visible + FAQPage schema
}

export interface SiteContent {
  // shared UI
  ui: {
    skipToContent: string;
    download: string;
    downloadWindows: string;
    starOnGithub: string;
    viewOnGithub: string;
    readDocs: string;
    menu: string;
    close: string;
    switchTo: string;       // "Voir en français" / "View in English"
    backHome: string;
    onThisPage: string;
    free: string;
    openSource: string;
    updatedOn: string;      // "Updated"
    readGuide: string;
    contact: string;
  };
  nav: { key: string; label: string }[];   // key is RouteKey
  footer: {
    tagline: string;
    builtBy: string;          // "Built and maintained by"
    contactHeading: string;
    productHeading: string;
    learnHeading: string;
    rights: string;
    licenseNote: string;
    palestineLine: string;    // one quiet line in the footer
    madeNote: string;
  };

  home: {
    meta: Meta;
    hero: {
      badge: string;
      h1: string;
      sub: string;
      note: string;           // "Free. Open source. MIT."
      screenshotAlt: string;
    };
    problem: { eyebrow: string; h2: string; intro: string; bullets: string[]; close: string; };
    solution: { eyebrow: string; h2: string; intro: string; gains: string[]; safety: string[]; close: string; };
    trust: { eyebrow: string; h2: string; paras: string[]; };
    features: { eyebrow: string; h2: string; sub: string; items: Feature[]; };
    pipeline: { eyebrow: string; h2: string; sub: string; steps: Step[]; cta: string; };
    quickstart: { eyebrow: string; h2: string; sub: string; steps: string[]; outro: string; };
    builder: { eyebrow: string; h2: string; paras: string[]; link: string; photoAlt: string; };
    palestine: { eyebrow: string; h2: string; body: string; link: string; };
    faqTeaser: { eyebrow: string; h2: string; link: string; };
    finalCta: { h2: string; sub: string; };
  };

  features: {
    meta: Meta;
    h1: string; lead: string;
    items: (Feature & { detail: string })[];
    cta: { h2: string; sub: string };
  };

  howItWorks: {
    meta: Meta;
    h1: string; lead: string;
    steps: (Step & { log: string })[];
    safety: { h2: string; paras: string[] };
    cta: { h2: string; sub: string };
  };

  about: {
    meta: Meta;
    h1: string; lead: string;
    project: { h2: string; paras: string[] };
    builder: { h2: string; paras: string[]; skillsLabel: string; skills: string[]; photoAlt: string; linkText: string };
    open: { h2: string; paras: string[] };
  };

  palestine: {
    meta: Meta;
    h1: string;
    paras: string[];
    photoAlt: string;
    flagAlt: string;
    childrenAlt: string;
    childrenCaption: string;
    closing: string;
  };

  faq: {
    meta: Meta;
    h1: string; lead: string;
    groups: { heading: string; items: Faq[] }[];
  };

  guideSsl: Guide;
  guideDomains: Guide;
}
