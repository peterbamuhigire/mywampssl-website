import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4321';
mkdirSync('reports/visual', { recursive: true });

async function launch() {
  for (const channel of ['msedge', 'chrome']) {
    try { return await chromium.launch({ channel, headless: true }); }
    catch { /* try next */ }
  }
  return await chromium.launch({ headless: true });
}

const shots = [
  ['en/', 'home-desktop', 1320, 900, false],
  ['en/', 'home-mobile', 390, 844, false],
  ['en/guide/wampserver-ssl-https/', 'guide-desktop', 1320, 900, false],
  ['en/features/', 'features-desktop', 1320, 900, false],
  ['en/standing-with-palestine/', 'palestine-desktop', 1320, 900, false],
];

const browser = await launch();
for (const [route, name, w, h, full] of shots) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(`${BASE}/${route}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(350);
  await page.screenshot({ path: `reports/visual/${name}.png`, fullPage: full });
  console.log('shot', name);
  await page.close();
}
await browser.close();
console.log('done');
