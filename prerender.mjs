import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync, renameSync } from 'fs';
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
  // No `shell: true` here: `node` is a real executable, and wrapping it in a
  // shell means `server.kill()` below only terminates the shell wrapper on
  // Windows, leaving the actual server.js process orphaned and still holding
  // the port for the next build.
  const server = spawn('node', ['server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    env: { ...process.env, PORT: String(PORT) },
  });

  try {
    await waitForServer(`${BASE_URL}/api/blog`);

    const routes = [...STATIC_ROUTES, ...(await getBlogRoutes())];

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Block Cloudflare Turnstile: it keeps long-lived connections open to
    // challenges.cloudflare.com, so `networkidle` never fires. The widget
    // renders inside a cross-origin iframe anyway and contributes nothing
    // to the prerendered HTML/SEO, so it's safe to skip during prerender.
    await page.route('**/*', (route) => {
      if (route.request().url().includes('challenges.cloudflare.com')) {
        return route.abort();
      }
      return route.continue();
    });

    // Every route below is written to a `.staging` file first and only
    // moved into its final dist/ path after the whole crawl finishes. The
    // live server's catch-all route serves dist/index.html as the SPA shell
    // for any path it doesn't have a prerendered file for yet. If we wrote
    // straight to the final path, the homepage (first in STATIC_ROUTES)
    // would overwrite dist/index.html with its own fully Helmet-rendered
    // HTML after its own iteration — and every later route would then load
    // THAT as its starting document instead of the pristine `vite build`
    // shell. React Helmet only owns/replaces tags it itself rendered, so it
    // would add that route's tags on top of the homepage's instead of
    // replacing them, leaving two conflicting <title>/canonical/meta sets
    // in the final HTML. Keeping dist/index.html untouched until the end
    // keeps the fallback shell clean for every route in the loop.
    const staged = [];
    try {
      for (const route of routes) {
        const url = `${BASE_URL}${route.path}`;
        await page.goto(url, { waitUntil: 'networkidle' });

        const html = await page.content();
        const filePath = join(dist, route.file);
        const stagingPath = `${filePath}.staging`;
        mkdirSync(dirname(filePath), { recursive: true });

        writeFileSync(stagingPath, '<!doctype html>\n' + html);
        staged.push({ stagingPath, filePath });
        console.log(`Prerendered: ${route.path} -> ${route.file}`);
      }

      for (const { stagingPath, filePath } of staged) {
        renameSync(stagingPath, filePath);
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
