import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');
const PORT = process.env.PRERENDER_PORT || 4173;
const BASE_URL = `http://localhost:${PORT}`;

// Every public marketing route that should be crawlable/shareable with real
// per-page <title>/meta in the raw HTML. Admin routes are intentionally
// excluded — they're auth-gated and shouldn't be indexed.
const STATIC_ROUTES = [
  { path: '/', file: 'index.html' },
  { path: '/services', file: 'services/index.html' },
  { path: '/services/custom-software', file: 'services/custom-software/index.html' },
  { path: '/services/mobile-apps', file: 'services/mobile-apps/index.html' },
  { path: '/services/erp-salesforce', file: 'services/erp-salesforce/index.html' },
  { path: '/services/ecommerce', file: 'services/ecommerce/index.html' },
  { path: '/services/ai-ml', file: 'services/ai-ml/index.html' },
  { path: '/portfolio', file: 'portfolio/index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/insights', file: 'insights/index.html' },
  { path: '/contact', file: 'contact/index.html' },
  { path: '/blog', file: 'blog/index.html' },
  { path: '/hotels-business', file: 'hotels-business/index.html' },
  { path: '/tea-brands', file: 'tea-brands/index.html' },
];

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server at ${url} did not become ready in time`);
}

async function getBlogRoutes() {
  try {
    const res = await fetch(`${BASE_URL}/api/blog`);
    if (!res.ok) return [];
    const articles = await res.json();
    return articles.map((a) => ({ path: `/blog/${a.id}`, file: `blog/${a.id}/index.html` }));
  } catch {
    return [];
  }
}

async function prerender() {
  // Run the real Express app (not `vite preview`) so /api/blog is actually
  // reachable — the blog list/detail pages fetch it client-side, and without
  // it, admin-authored articles that aren't in the static JOURNAL_ARTICLES
  // fallback would prerender as empty.
  const server = spawn('node', ['server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    env: { ...process.env, PORT: String(PORT) },
    shell: true,
  });

  try {
    await waitForServer(`${BASE_URL}/api/blog`);

    const routes = [...STATIC_ROUTES, ...(await getBlogRoutes())];

    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
      for (const route of routes) {
        const url = `${BASE_URL}${route.path}`;
        await page.goto(url, { waitUntil: 'networkidle' });

        const html = await page.content();
        const filePath = join(dist, route.file);
        mkdirSync(dirname(filePath), { recursive: true });

        writeFileSync(filePath, '<!doctype html>\n' + html);
        console.log(`Prerendered: ${route.path} -> ${route.file}`);
      }
    } finally {
      await browser.close();
    }

    console.log(`Prerendering complete! (${routes.length} routes)`);
  } finally {
    server.kill();
  }
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
