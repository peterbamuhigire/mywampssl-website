// Generates favicons + OG social cards from the brand mark using sharp.
// Run: node scripts/gen-assets.mjs
import sharp from 'sharp';
import { mkdirSync, copyFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const iconPath = resolve(root, 'src/assets/brand/icon.svg');
const pub = resolve(root, 'public');
const ogDir = resolve(pub, 'og');
mkdirSync(ogDir, { recursive: true });

const iconSvg = readFileSync(iconPath);

// --- favicons / app icons ---
const pngSizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-48.png', 48],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];
for (const [name, size] of pngSizes) {
  await sharp(iconSvg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(resolve(pub, name));
  console.log('icon', name, size);
}
// SVG favicon (scalable)
copyFileSync(iconPath, resolve(pub, 'favicon.svg'));

// --- OG cards (1200x630) ---
function ogSvg({ eyebrow, title1, title2, sub }) {
  // Title may be two lines. Safe system-font fallback (Windows: Segoe UI).
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="22%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#19D08B" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#19D08B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1220"/>
      <stop offset="100%" stop-color="#0E1626"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#19D08B"/>
  <!-- mark -->
  <g transform="translate(96,150) scale(0.62)">
    <rect width="512" height="512" rx="116" fill="#0E1626" stroke="#22344A" stroke-width="4"/>
    <path d="M188 232 V206 a68 68 0 0 1 136 0 V232" fill="none" stroke="#19D08B" stroke-width="30" stroke-linecap="round"/>
    <rect x="150" y="232" width="212" height="172" rx="30" fill="#19D08B"/>
    <path d="M212 318 l28 30 l56 -64" fill="none" stroke="#0B1220" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g font-family="'Segoe UI', Arial, sans-serif">
    <text x="470" y="180" fill="#7FE9C2" font-size="26" font-weight="700" letter-spacing="3">${eyebrow}</text>
    <text x="468" y="280" fill="#F5F8F7" font-size="66" font-weight="800">${title1}</text>
    <text x="468" y="356" fill="#F5F8F7" font-size="66" font-weight="800">${title2}</text>
    <text x="470" y="430" fill="#9FB3C8" font-size="34" font-weight="500">${sub}</text>
    <text x="470" y="556" fill="#3DD6E6" font-size="28" font-weight="600" font-family="'Consolas','Courier New',monospace">mywampssl.techguypeter.com</text>
  </g>
</svg>`;
}

const cards = {
  'og-en.png': ogSvg({
    eyebrow: 'FREE · OPEN SOURCE · MIT',
    title1: 'Trusted local HTTPS',
    title2: 'for WampServer.',
    sub: 'One click. No more certificate warnings.',
  }),
  'og-fr.png': ogSvg({
    eyebrow: 'GRATUIT · OPEN SOURCE · MIT',
    title1: 'HTTPS local de confiance',
    title2: 'pour WampServer.',
    sub: 'En un clic. Fini les alertes de certificat.',
  }),
};
for (const [name, svg] of Object.entries(cards)) {
  await sharp(Buffer.from(svg)).png().toFile(resolve(ogDir, name));
  console.log('og', name);
}
console.log('done');
