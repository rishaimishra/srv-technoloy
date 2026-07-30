import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://srvtechnology.com';
const OUT_FILE = join(__dirname, 'public', 'sitemap.xml');
const BLOG_FILE = join(__dirname, 'data', 'blog.json');

const STATIC_PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/services', priority: '0.9' },
  { path: '/services/custom-software', priority: '0.8' },
  { path: '/services/mobile-apps', priority: '0.8' },
  { path: '/services/erp-salesforce', priority: '0.8' },
  { path: '/services/ecommerce', priority: '0.8' },
  { path: '/services/ai-ml', priority: '0.8' },
  { path: '/portfolio', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/insights', priority: '0.7' },
  { path: '/contact', priority: '0.7' },
  { path: '/blog', priority: '0.9' },
];

function loadArticles() {
  if (!existsSync(BLOG_FILE)) return [];
  try {
    return JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function urlEntry({ path, priority, lastmod }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod.slice(0, 10)}</lastmod>` : '';
  return `  <url>\n    <loc>${SITE_URL}${path}</loc>${lastmodTag}\n    <priority>${priority}</priority>\n  </url>`;
}

function generateSitemap() {
  const blogEntries = loadArticles().map((article) => ({
    path: `/blog/${article.id}`,
    priority: '0.6',
    lastmod: article.updatedAt,
  }));

  const entries = [...STATIC_PAGES, ...blogEntries];

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.map(urlEntry).join('\n') +
    '\n</urlset>\n';

  writeFileSync(OUT_FILE, xml, 'utf-8');
  console.log(`sitemap.xml generated with ${entries.length} URLs (${blogEntries.length} from blog CMS).`);
}

generateSitemap();
