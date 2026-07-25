import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

const routes = [
  { path: '/blog', file: 'blog/index.html' },
  { path: '/blog/syspro-salesforce-integration', file: 'blog/syspro-salesforce-integration/index.html' },
  { path: '/blog/ai-ml-decisions', file: 'blog/ai-ml-decisions/index.html' },
  { path: '/blog/ecommerce-future-2026', file: 'blog/ecommerce-future-2026/index.html' },
];

async function prerender() {
  const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
    cwd: __dirname,
    stdio: 'pipe',
    shell: true,
  });

  await new Promise((resolve) => setTimeout(resolve, 4000));

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    for (const route of routes) {
      const url = `http://localhost:4173${route.path}`;
      await page.goto(url, { waitUntil: 'networkidle' });

      const html = await page.content();
      const filePath = join(dist, route.file);
      mkdirSync(dirname(filePath), { recursive: true });

      const doctype = '<!doctype html>\n';
      writeFileSync(filePath, doctype + html);
      console.log(`Prerendered: ${route.path} → ${route.file}`);
    }
  } finally {
    await browser.close();
    server.kill();
  }

  console.log('Prerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
