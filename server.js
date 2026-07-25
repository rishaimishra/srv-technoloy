import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

// Serve built SPA with history fallback for BrowserRouter
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const RECEIVER_EMAILS = (process.env.CONTACT_RECEIVER_EMAILS || 'rishavbeas@gmail.com,rishav@srvtechnology.com,info@srvtechnology.com')
  .split(',')
  .map((addr) => addr.trim())
  .filter(Boolean);

async function sendMail({ subject, replyTo, html }) {
  return transporter.sendMail({
    from: `"SRV Technology Website" <${process.env.SMTP_USER}>`,
    to: RECEIVER_EMAILS,
    replyTo,
    subject,
    html,
  });
}

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, projectType, budget, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
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
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.post('/api/quote', async (req, res) => {
  const { name, email, service, notes } = req.body || {};

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields.' });
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
        <p><strong>Notes:</strong></p>
        <p>${notes || 'N/A'}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send quote email:', err);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    await sendMail({
      subject: 'New Newsletter Subscriber',
      replyTo: email,
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send subscribe email:', err);
    res.status(500).json({ error: 'Failed to subscribe. Please try again later.' });
  }
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`SMTP API server listening on port ${PORT}`);
});
