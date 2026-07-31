import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import multer from 'multer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JWT_SECRET = process.env.JWT_SECRET || 'srv-blog-cms-secret-change-in-production';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123!';

const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
if (!existsSync(UPLOADS_DIR)) mkdirSync(UPLOADS_DIR, { recursive: true });

const BLOG_FILE = path.join(DATA_DIR, 'blog.json');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function loadArticles() {
  if (!existsSync(BLOG_FILE)) return [];
  try {
    return JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
  } catch { return []; }
}

function saveArticles(articles) {
  writeFileSync(BLOG_FILE, JSON.stringify(articles, null, 2), 'utf-8');
}

// --- Lead store (data/leads.json) ---
// The store is an array of lead records. `sourcePage` is intentionally NOT
// unique: many leads may originate from the same landing page/campaign so we
// can aggregate performance per source.
function loadLeads() {
  if (!existsSync(LEADS_FILE)) return [];
  try {
    const parsed = JSON.parse(readFileSync(LEADS_FILE, 'utf-8'));
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function saveLeads(leads) {
  writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

function appendLead(lead) {
  const leads = loadLeads();
  leads.push(lead);
  saveLeads(leads);
}

function sanitizeSourcePage(value, fallback = 'direct') {
  if (typeof value !== 'string') return fallback;
  let v = value.trim().replace(/[^a-zA-Z0-9/_.\-?&=:%@#+]/g, '');
  if (!v) return fallback;
  return v.slice(0, 300);
}

// Resolve the landing page / campaign source for an incoming lead. Prefers the
// client-supplied value, then falls back to the HTTP Referer so tracking still
// works for clients that don't send it explicitly.
function resolveLeadSource(req, body) {
  const clientPage = body?.sourcePage || body?.landingPage;
  const clientUrl = body?.sourceUrl || body?.landingUrl;

  let page = sanitizeSourcePage(clientPage);
  if (!page || page === 'direct') {
    const referer = req.headers?.referer || req.headers?.origin;
    if (typeof referer === 'string' && referer) {
      try {
        const u = new URL(referer);
        page = sanitizeSourcePage((u.pathname || '').replace(/\/+$/, '') || '/', 'direct');
      } catch {
        page = sanitizeSourcePage(referer, 'direct');
      }
    }
  }

  const url = sanitizeSourcePage(clientUrl, page || 'direct');
  return { sourcePage: page || 'direct', sourceUrl: url };
}

const SEED_ARTICLES = [
  {
    id: 'syspro-salesforce-integration',
    title: 'Bridging Enterprise ERP and CRM: Syspro & Salesforce Integration Strategies',
    category: 'ENTERPRISE SYSTEMS',
    date: '15 JAN 2026',
    readTime: '6 min read',
    image: '',
    summary: 'How real-time synchronization between Syspro ERP and Salesforce Sales Cloud drives operational efficiency and order accuracy.',
    content: [
      'For mid-market and global enterprises, disconnecting inventory data in Syspro ERP from sales pipelines in Salesforce creates operational friction and order delays.',
      'By leveraging Syspro e.net Business Objects with custom Salesforce Apex triggers and Lightning Web Components, SRV Technology establishes bi-directional sync for inventory, custom price tiers, and customer order histories.',
      'This architecture ensures sales representatives have instant inventory visibility while warehouse teams receive automated order fulfillment requests as soon as deals close.',
    ],
    tags: ['Syspro ERP', 'Salesforce', 'Enterprise Integration', 'Apex', 'e.net'],
  },
  {
    id: 'ai-ml-decisions',
    title: 'How AI and Machine Learning Are Helping Smarter Decisions',
    category: 'AI / ML',
    date: '15 JAN 2026',
    readTime: '7 min read',
    image: '',
    summary: 'How predictive modeling and generative AI agents are streamlining supply chains, talent acquisition, and operational risk.',
    content: [
      'Modern enterprises generate terabytes of operational telemetry daily, but actionable insight remains scarce without intelligent automated analysis.',
      'By implementing fine-tuned predictive machine learning models and LLM agents, companies can automate routine data transformations and receive proactive anomaly alerts before system bottlenecks occur.',
      'Our team specializes in creating production-grade AI pipelines that seamlessly hook into existing databases with enterprise-level access controls and data privacy.',
    ],
    tags: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'LLM Integration'],
  },
  {
    id: 'ecommerce-future-2026',
    title: 'The Future of E-Commerce in 2026: Redefining Online Shopping',
    category: 'ECOMMERCE',
    date: '15 JAN 2026',
    readTime: '6 min read',
    image: '',
    summary: 'Headless storefronts, instant AI shopping assistants, and hyper-personalized checkout flows are shaping the modern shopping cart.',
    content: [
      'The traditional monolithic e-commerce stack is quickly giving way to modular, API-first architecture. Retailers need the agility to push new promotional storefronts in hours rather than weeks.',
      'Integrating 3D product previews, instant localized tax and shipping calculators, and friction-free payment methods directly increases checkout conversion rates by up to 35%.',
      'Learn how SRV Technology built custom high-volume commerce engines for brands like The Cary Company to handle millions in annual transaction volumes.',
    ],
    tags: ['E-Commerce', 'Magento', 'Headless Web', 'Conversion Rate'],
  },
];

function seedArticles() {
  if (!existsSync(BLOG_FILE) || loadArticles().length === 0) {
    saveArticles(SEED_ARTICLES);
    console.log(`Seeded ${SEED_ARTICLES.length} articles`);
  }
}

let hashedPassword = null;

async function getHashedPassword() {
  if (!hashedPassword) {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);
  }
  return hashedPassword;
}

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    jwt.verify(header.split(' ')[1], JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const hash = await getHashedPassword();
  const valid = await bcrypt.compare(password, hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, username });
});

app.get('/api/auth/verify', authMiddleware, (_req, res) => {
  res.json({ valid: true });
});

app.get('/api/blog', (_req, res) => {
  const articles = loadArticles();
  res.json(articles);
});

app.get('/api/blog/:id', (req, res) => {
  const articles = loadArticles();
  const article = articles.find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
});

app.post('/api/blog', authMiddleware, (req, res) => {
  const { id, title, category, date, readTime, image, summary, content, tags } = req.body || {};
  if (!id || !title || !summary || !content) {
    return res.status(400).json({ error: 'id, title, summary, content are required' });
  }
  const articles = loadArticles();
  if (articles.find(a => a.id === id)) {
    return res.status(409).json({ error: 'Article with this ID already exists' });
  }
  const article = {
    id,
    title: title || '',
    category: category || 'GENERAL',
    date: date || new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
    readTime: readTime || '',
    image: image || '',
    summary,
    content: Array.isArray(content) ? content : [content],
    tags: tags || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  articles.push(article);
  saveArticles(articles);
  res.status(201).json(article);
});

app.put('/api/blog/:id', authMiddleware, (req, res) => {
  const articles = loadArticles();
  const idx = articles.findIndex(a => a.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Article not found' });
  const existing = articles[idx];
  const { title, category, date, readTime, image, summary, content, tags } = req.body || {};
  articles[idx] = {
    ...existing,
    title: title ?? existing.title,
    category: category ?? existing.category,
    date: date ?? existing.date,
    readTime: readTime ?? existing.readTime,
    image: image ?? existing.image,
    summary: summary ?? existing.summary,
    content: content ?? existing.content,
    tags: tags ?? existing.tags,
    updatedAt: new Date().toISOString(),
  };
  saveArticles(articles);
  res.json(articles[idx]);
});

app.delete('/api/blog/:id', authMiddleware, (req, res) => {
  const articles = loadArticles();
  const idx = articles.findIndex(a => a.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Article not found' });
  articles.splice(idx, 1);
  saveArticles(articles);
  res.json({ success: true });
});

app.post('/api/blog/upload', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const RECEIVER_EMAILS = (process.env.CONTACT_RECEIVER_EMAILS || 'rishav@srvtechnology.com')
  .split(',')
  .map((addr) => addr.trim())
  .filter(Boolean);

const APP_URL = process.env.APP_URL || 'https://srvtechnology.com';

async function sendMail({ subject, replyTo, html }) {
  return transporter.sendMail({
    from: `"SRV Technology" <${process.env.SMTP_USER}>`,
    to: RECEIVER_EMAILS,
    replyTo,
    subject,
    html,
  });
}

async function sendAutoReply({ to, name }) {
  return transporter.sendMail({
    from: `"SRV Technology" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Thank You for Contacting SRV Technology',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hello ${name},</p>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">Thank you for contacting SRV Technology. We have received your message and our team will get back to you within 24 hours.</p>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">In the meantime, feel free to explore our work and services:</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="${APP_URL}" style="background: #2563eb; color: #fff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Visit Our Website</a>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="color: #64748b; font-size: 14px;">Best regards,<br><strong>SRV Technology Team</strong><br>${APP_URL}</p>
        </div>
      </div>
    `,
  });
}

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, projectType, budget, message } = req.body || {};
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  const { sourcePage, sourceUrl } = resolveLeadSource(req, req.body);
  try {
    appendLead({
      id: crypto.randomUUID(),
      type: 'contact',
      sourcePage,
      sourceUrl,
      name: `${firstName} ${lastName}`.trim(),
      firstName,
      lastName,
      email,
      phone: phone || '',
      projectType: projectType || '',
      budget: budget || '',
      message,
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Failed to store contact lead:', err);
  }
  try {
    await sendMail({
      subject: `New Consultation Request — ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Source Page:</strong> ${sourcePage}${sourceUrl !== sourcePage ? ` (${sourceUrl})` : ''}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    await sendAutoReply({ to: email, name: `${firstName} ${lastName}` }).catch(() => {});
    res.json({ success: true });
  } catch (err) {
    // The lead is already persisted in data/leads.json — surface the email
    // failure in logs but still acknowledge the submission so the visitor
    // isn't told to resubmit (which would create a duplicate record).
    console.error('Failed to send contact email:', err);
    res.json({ success: true });
  }
});

app.post('/api/landing-lead', async (req, res) => {
  const { formType, name, businessName, phone, city, detail } = req.body || {};
  if (!formType || !name || !phone) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  const { sourcePage, sourceUrl } = resolveLeadSource(req, req.body);
  try {
    appendLead({
      id: crypto.randomUUID(),
      type: 'landing',
      formType: formType === 'hotel' ? 'hotel' : 'tea',
      sourcePage,
      sourceUrl,
      name,
      businessName: businessName || '',
      phone,
      city: city || '',
      detail: detail || '',
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Failed to store landing lead:', err);
  }
  const label = formType === 'hotel' ? 'Hotel/Hospitality Landing Page' : 'Tea Business Landing Page';
  const detailLabel = formType === 'hotel' ? 'Property Size' : 'Business Type';
  try {
    await sendMail({
      subject: `New Lead (${label}) — ${name}`,
      html: `
        <h2>New Lead — ${label}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business/Property Name:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
        <p><strong>City/Location:</strong> ${city || 'N/A'}</p>
        <p><strong>${detailLabel}:</strong> ${detail || 'N/A'}</p>
        <p><strong>Source Page:</strong> ${sourcePage}${sourceUrl !== sourcePage ? ` (${sourceUrl})` : ''}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    // Lead is already persisted — acknowledge submission to avoid duplicates.
    console.error('Failed to send landing lead email:', err);
    res.json({ success: true });
  }
});

app.post('/api/quote', async (req, res) => {
  const { name, email, service, notes } = req.body || {};
  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  const { sourcePage, sourceUrl } = resolveLeadSource(req, req.body);
  try {
    appendLead({
      id: crypto.randomUUID(),
      type: 'quote',
      sourcePage,
      sourceUrl,
      name,
      email,
      service: service || '',
      notes: notes || '',
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Failed to store quote lead:', err);
  }
  try {
    await sendMail({
      subject: `New Quote Request — ${name}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Source Page:</strong> ${sourcePage}${sourceUrl !== sourcePage ? ` (${sourceUrl})` : ''}</p>
        <p><strong>Notes:</strong></p>
        <p>${notes || 'N/A'}</p>
      `,
    });
    await sendAutoReply({ to: email, name }).catch(() => {});
    res.json({ success: true });
  } catch (err) {
    // Lead is already persisted — acknowledge submission to avoid duplicates.
    console.error('Failed to send quote email:', err);
    res.json({ success: true });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  const { sourcePage, sourceUrl } = resolveLeadSource(req, req.body);
  try {
    appendLead({
      id: crypto.randomUUID(),
      type: 'subscribe',
      sourcePage,
      sourceUrl,
      name: '',
      email,
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Failed to store subscriber:', err);
  }
  try {
    await sendMail({
      subject: 'New Newsletter Subscriber',
      replyTo: email,
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source Page:</strong> ${sourcePage}${sourceUrl !== sourcePage ? ` (${sourceUrl})` : ''}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send subscribe email:', err);
    res.json({ success: true });
  }
});

// --- Admin: lead tracking API (auth-gated) ---
// Supports filtering by source page / type, free-text search, sorting and
// pagination so the dashboard can monitor landing-page performance.
app.get('/api/leads', authMiddleware, (req, res) => {
  let leads = loadLeads();
  const { source, type, q, sort, page, limit } = req.query;

  if (source) leads = leads.filter((l) => l.sourcePage === source);
  if (type) leads = leads.filter((l) => l.type === type);
  if (q) {
    const term = String(q).toLowerCase();
    leads = leads.filter((l) =>
      [l.name, l.email, l.phone, l.businessName, l.city, l.message, l.notes, l.service, l.projectType, l.detail]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }

  const summary = {
    total: leads.length,
    bySource: Object.entries(
      leads.reduce((acc, l) => {
        acc[l.sourcePage || '/'] = (acc[l.sourcePage || '/'] || 0) + 1;
        return acc;
      }, {})
    )
      .map(([sourcePage, count]) => ({ sourcePage, count }))
      .sort((a, b) => b.count - a.count),
    byType: leads.reduce((acc, l) => {
      acc[l.type] = (acc[l.type] || 0) + 1;
      return acc;
    }, {}),
  };

  switch (sort) {
    case 'oldest':
      leads.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case 'source':
      leads.sort(
        (a, b) =>
          (a.sourcePage || '').localeCompare(b.sourcePage || '') || new Date(b.createdAt) - new Date(a.createdAt)
      );
      break;
    case 'name':
      leads.sort(
        (a, b) => (a.name || '').localeCompare(b.name || '') || new Date(b.createdAt) - new Date(a.createdAt)
      );
      break;
    default:
      leads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const p = Math.max(1, parseInt(String(page), 10) || 1);
  const lim = Math.min(200, Math.max(1, parseInt(String(limit), 10) || 50));
  const totalPages = Math.max(1, Math.ceil(leads.length / lim));
  const start = (p - 1) * lim;

  res.json({
    leads: leads.slice(start, start + lim),
    total: leads.length,
    page: p,
    limit: lim,
    totalPages,
    summary,
  });
});

app.delete('/api/leads/:id', authMiddleware, (req, res) => {
  const leads = loadLeads();
  const idx = leads.findIndex((l) => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Lead not found' });
  leads.splice(idx, 1);
  saveLeads(leads);
  res.json({ success: true });
});

app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8787;
seedArticles();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Admin login: ${ADMIN_USERNAME}`);
});
