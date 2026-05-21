/* ------------------------------------------------------------------ *
 *  generate-sitemap.mjs                                              *
 *  Runs at build-time (and pre-build) to emit /public/sitemap.xml    *
 *  Single source of truth for every indexable route.                 *
 * ------------------------------------------------------------------ */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://fillers.skin';
const TODAY = new Date().toISOString().split('T')[0];

/* ------------------------------------------------------------------
 *  ROUTE DEFINITIONS — keep in sync with src/App.jsx
 * ------------------------------------------------------------------ */
const routes = [
  /* Core */
  { loc: '/',          changefreq: 'weekly',  priority: '1.0' },
  { loc: '/treatments',changefreq: 'monthly', priority: '0.9' },
  { loc: '/results',   changefreq: 'monthly', priority: '0.9' },
  { loc: '/about',     changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact',   changefreq: 'monthly', priority: '0.8' },

  /* FAQ hub + topics */
  { loc: '/faq',                         changefreq: 'monthly', priority: '0.8' },
  { loc: '/faq/lip-fillers',             changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/jawline-chin',            changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/cheek-fillers',           changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/tear-trough',             changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/skin-anti-ageing',        changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/cost-pricing',            changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/safety-recovery',         changefreq: 'monthly', priority: '0.75' },
  { loc: '/faq/treatment-comparisons',   changefreq: 'monthly', priority: '0.75' },

  /* Location pages */
  { loc: '/locations/lip-fillers-newcastle',          changefreq: 'monthly', priority: '0.85' },
  { loc: '/locations/cheek-fillers-sunderland',       changefreq: 'monthly', priority: '0.85' },
  { loc: '/locations/jawline-fillers-durham',         changefreq: 'monthly', priority: '0.85' },
  { loc: '/locations/tear-trough-fillers-gateshead',  changefreq: 'monthly', priority: '0.85' },
  { loc: '/locations/non-surgical-rhinoplasty-gosforth', changefreq: 'monthly', priority: '0.85' },

  /* Comparison pages */
  { loc: '/compare/lip-fillers-vs-lip-flip',          changefreq: 'monthly', priority: '0.8' },
  { loc: '/compare/botox-vs-fillers',                 changefreq: 'monthly', priority: '0.8' },
  { loc: '/compare/russian-lips-vs-classic-lips',     changefreq: 'monthly', priority: '0.8' },
  { loc: '/compare/cheek-fillers-vs-implants',        changefreq: 'monthly', priority: '0.8' },

  /* Concern pages */
  { loc: '/concerns/thin-lips',          changefreq: 'monthly', priority: '0.8' },
  { loc: '/concerns/under-eye-hollows',  changefreq: 'monthly', priority: '0.8' },
  { loc: '/concerns/facial-volume-loss', changefreq: 'monthly', priority: '0.8' },
  { loc: '/concerns/nasolabial-folds',   changefreq: 'monthly', priority: '0.8' },
  { loc: '/concerns/jawline-definition', changefreq: 'monthly', priority: '0.8' },
];

/* ------------------------------------------------------------------ */
const urlEntry = ({ loc, changefreq, priority }) =>
  `  <url>
    <loc>${DOMAIN}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlEntry).join('\n')}
</urlset>
`;

const outPaths = [
  resolve(__dirname, '../public/sitemap.xml'),
];

for (const out of outPaths) {
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, xml, 'utf-8');
  console.log(`✓ sitemap.xml written → ${out}  (${routes.length} URLs)`);
}
