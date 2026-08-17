import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";
import { products } from "./src/data";

dotenv.config();

const app = express();
// Hosting platforms (Render, Railway, Fly, Heroku…) inject the port to bind on.
// Falling back to 3000 keeps local development unchanged.
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Inbound enquiries are appended to a newline-delimited JSON log so nothing submitted
// on the site is lost before a CRM or mailer is wired up.
const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRY_LOG = path.join(DATA_DIR, "inquiries.jsonl");

function recordInquiry(kind: "contact" | "quote", payload: Record<string, unknown>, ref: string) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const entry = { ref, kind, receivedAt: new Date().toISOString(), ...payload };
    fs.appendFileSync(INQUIRY_LOG, JSON.stringify(entry) + "\n", "utf8");
    console.log(`[${kind}] ${ref} recorded`);
    return true;
  } catch (error) {
    // Never fail the visitor's submission because our disk write failed — log loudly instead.
    console.error(`[${kind}] FAILED to record ${ref}:`, error);
    return false;
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const digitsOf = (value: string) => value.replace(/\D/g, "");

/* ─────────────────────────  EMAIL NOTIFICATIONS  ───────────────────────── */

const MAIL_TO = process.env.MAIL_TO || "support@jetronixindia.com";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
// Port 465 is implicit TLS; 587 upgrades with STARTTLS.
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : SMTP_PORT === 465;
const MAIL_FROM = process.env.MAIL_FROM || (SMTP_USER ? `"Jetronix Website" <${SMTP_USER}>` : "");

const mailer =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        // Some budget shared hosts serve an expired or mismatched certificate on their
        // mail server. Only set this if sending fails with a certificate error — it
        // disables verification of the mail server's identity.
        tls:
          process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false"
            ? { rejectUnauthorized: false }
            : undefined,
      })
    : null;

if (!mailer) {
  console.warn(
    "WARNING: SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS). " +
      "Enquiries will still be saved to data/inquiries.jsonl but no email will be sent."
  );
} else {
  console.log(`Email notifications enabled -> ${MAIL_TO} (via ${SMTP_HOST}:${SMTP_PORT})`);
}

/** Turns the form's product id into the catalogue name so the email reads properly. */
function productLabel(id: unknown) {
  const value = String(id ?? "").trim();
  if (!value) return "";
  if (value === "both") return "Comparative demonstration (multiple products)";
  return products.find((p) => p.id === value)?.name || value;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

/**
 * Emails a submitted enquiry to the sales inbox. Never throws — a mail failure must
 * not lose the visitor's submission, which is already on disk by this point.
 */
async function emailInquiry(opts: {
  subject: string;
  ref: string;
  replyTo?: string;
  rows: [string, string][];
}) {
  if (!mailer) return false;

  const tableRows = opts.rows
    .filter(([, v]) => v && v.trim())
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;white-space:nowrap">${escapeHtml(
          label
        )}</td><td style="padding:8px 14px;border:1px solid #e2e8f0">${escapeHtml(value).replace(
          /\n/g,
          "<br>"
        )}</td></tr>`
    )
    .join("");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a">
    <h2 style="margin:0 0 4px">${escapeHtml(opts.subject)}</h2>
    <p style="margin:0 0 16px;color:#64748b;font-size:13px">Reference <b>${escapeHtml(
      opts.ref
    )}</b> &middot; submitted from the Jetronix website</p>
    <table style="border-collapse:collapse;font-size:14px">${tableRows}</table>
  </div>`;

  const text = opts.rows
    .filter(([, v]) => v && v.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  try {
    await mailer.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: opts.replyTo && EMAIL_PATTERN.test(opts.replyTo) ? opts.replyTo : undefined,
      subject: `${opts.subject} [${opts.ref}]`,
      text: `Reference: ${opts.ref}\n\n${text}`,
      html,
    });
    console.log(`[mail] ${opts.ref} sent to ${MAIL_TO}`);
    return true;
  } catch (error) {
    console.error(`[mail] FAILED to send ${opts.ref}:`, error);
    return false;
  }
}

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not defined.");
}

// B2B Assistant System Instruction incorporating full Jetronix Product and JV Details
const ADVISOR_SYSTEM_INSTRUCTION = `
You are the "Jetronix AI Smart Print-Spec Advisor", a world-class consultant for industrial coding and marking solutions. 
Your role is to guide production managers, plant heads, packaging engineers, and business owners to select the perfect Continuous Inkjet (CIJ) Printer, nozzle size, and ink parameters for their production lines.

Brand: JETRONIX (Precision in Every Mark)
Joint Venture of:
1. RUNICHA ENTERPRISES (Indore, MP - Tarun Chouhan)
2. BEST CODE TECHNOLOGY INDIA (Jaipur, Rajasthan - Akash Singh Rathore)

Product Lineup:
1. Jetronix S200PLUS Series (Continuous Inkjet Printer / CIJ)
   - Tagline: "Reliable Coding. Maximum Uptime."
   - Target: Heavy-duty packaging, high speed lines, tough industrial environments.
   - Print Height: 2-20mm
   - Printing Lines: 1 to 5 lines of print
   - Print Speed: Up to 768 m/min
   - Nozzle Options: 60µm (standard), 50µm (ultra-fine), 75µm (heavy pigment), 85µm (large characters)
   - Ink Types: Dye-based, Pigment-based
   - Ink Colors: Black, Red, Blue, Green, White (high opacity pigment), Invisible (UV security)
   - Unique Strengths: Independent rugged stainless steel IP55 structure, 10.1" color touch screen, low fluid consumption, embedded Linux operating system.

2. Jetronix Si220 Industrial Inkjet Printer
   - Tagline: "Print High Quality Marks on Any Surface"
   - Target: Highly versatile, flexible surface marking, cost-effective high accuracy.
   - Printing Lines: Up to 5 lines of print
   - Key Strengths: Advanced smart RFID cartridge system (prevents fluid loading errors), Auto Printhead Flushing (clean-start technology that prevents clogging), advanced solvent recovery system.
   - Ideal Industries: FMCG, Pharmaceuticals, Cables/Wires, Building Materials, Metals, Inks.

Ink Matching Guide by Substrates:
- FMCG Plastics (PET bottles, HDPE pouches, PP containers): Fast-dry dye-based black ink or specialized plastic-adhesion inks.
- Pharmaceuticals (Blister packs, glass vials, cardboard cartons): High contrast black/red food-grade/pharma-grade inks with high resolution.
- Cable & Wire (Dark PVC, rubber, PE jacket): High-contrast pigment-based White or Yellow inks (S200PLUS is perfect for heavy pigment).
- Metals (Aluminum cans, steel drums, tin plates): Heat-resistant black, red, or white pigment ink, solvent base MEK (Methyl Ethyl Ketone).
- Building Materials (Cement bags, plywood, gypsum boards): Pigment-based inks or high-capacity inks with larger nozzles (75µm or 85µm).

Your Guidelines:
- Speak professionally, technical yet accessible, in a polite and helpful B2B advisor tone.
- Recommend specific Jetronix printer models (S200PLUS vs Si220) depending on their industry needs.
- If they print on dark cables or dark plastics, recommend High-Contrast Pigmented White/Yellow ink and the S200PLUS with 75µm/85µm nozzle.
- If they require zero-clog clean start and RFID fluid cartridges, recommend the Si220.
- Provide estimates on print line capabilities (up to 5 lines for both models, capturing dates, batch codes, lot numbers, barcodes, QR codes).
- Encourage them to request a physical sample print via our Interactive Sample Tool.
- Mention our support network in Indore (Runicha Enterprises) and Jaipur (Best Code Technology India) for instant service.
- Keep your answers beautifully structured, utilizing direct bullet points and highlighted sections. Do not use markdown headers larger than ###.
`;

// AI Advisor Proxy Route
app.post("/api/advisor", async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    if (!ai) {
      return res.status(503).json({
        error: "Gemini API client is not initialized. Please configure your GEMINI_API_KEY in Secrets.",
      });
    }

    // Format chat contents according to @google/genai guidelines
    // The history should be in standard { role, parts: [{ text }] } format.
    // However, a simple generateContent call with structured chat style works perfectly too:
    const formattedHistory = Array.isArray(history) ? history : [];
    
    // Build combined prompt with historical context
    const chatParts = [
      { text: `System context: ${ADVISOR_SYSTEM_INSTRUCTION}` }
    ];

    // Map conversation history
    formattedHistory.forEach((msg: any) => {
      chatParts.push({
        text: `${msg.sender === "user" ? "User" : "Advisor"}: ${msg.text}`
      });
    });

    // Add current message
    chatParts.push({ text: `User: ${message}` });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatParts,
      config: {
        temperature: 0.7,
        systemInstruction: ADVISOR_SYSTEM_INSTRUCTION
      }
    });

    const replyText = response.text || "No response text generated.";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini Advisor API Error:", error);
    return res.status(500).json({
      error: error.message || "An error occurred while contacting the AI Advisor.",
    });
  }
});

// B2B quote inquiries
app.post("/api/quote", async (req: Request, res: Response) => {
  const { customerName, companyName, email, phone, selectedProduct, industry, message } = req.body;
  if (!customerName || !companyName || !email || !phone) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  const inquiryRef = `JT-${Math.floor(100000 + Math.random() * 900000)}`;
  recordInquiry("quote", { customerName, companyName, email, phone, selectedProduct, industry, message }, inquiryRef);

  await emailInquiry({
    subject: "New quote request",
    ref: inquiryRef,
    replyTo: email,
    rows: [
      ["Contact Name", customerName],
      ["Company", companyName],
      ["Email", email],
      ["Phone", phone],
      ["Product", productLabel(selectedProduct)],
      ["Industry", industry],
      ["Message", message],
    ],
  });

  return res.json({
    success: true,
    inquiryRef,
    message: "Thank you for your interest! Your quote request has been logged. Our engineers from Indore/Jaipur will contact you within 2 business hours.",
  });
});

// Contact Us enquiries
app.post("/api/contact", async (req: Request, res: Response) => {
  const name = String(req.body?.name ?? "").trim();
  const company = String(req.body?.company ?? "").trim();
  const phone = String(req.body?.phone ?? "").trim();
  const email = String(req.body?.email ?? "").trim();
  const location = String(req.body?.location ?? "").trim();
  const message = String(req.body?.message ?? "").trim();

  const missing = [
    !name && "your name",
    !company && "company name",
    !phone && "phone number",
  ].filter(Boolean);

  if (missing.length) {
    return res.status(400).json({ error: `Please provide ${missing.join(", ")}.` });
  }
  if (digitsOf(phone).length < 10) {
    return res.status(400).json({ error: "Please enter a valid phone number with at least 10 digits." });
  }
  if (email && !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "That email address does not look valid." });
  }

  const ticketRef = `JET-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
  const stored = recordInquiry("contact", { name, company, phone, email, location, message }, ticketRef);

  await emailInquiry({
    subject: "New contact enquiry",
    ref: ticketRef,
    replyTo: email,
    rows: [
      ["Name", name],
      ["Company", company],
      ["Phone", phone],
      ["Email", email],
      ["Preferred Hub", location],
      ["Message", message],
    ],
  });

  return res.json({
    success: true,
    ticketRef,
    stored,
    message: `Thank you, ${name}. Your enquiry has been logged and our ${location || "regional"} team will respond shortly.`,
  });
});

// Baked in by esbuild at build time (--define). Undefined when running from source via tsx,
// so local `npm run dev` still gets the Vite middleware without needing NODE_ENV set.
declare const __PRODUCTION_BUILD__: boolean;
const isProduction =
  (typeof __PRODUCTION_BUILD__ !== "undefined" && __PRODUCTION_BUILD__) ||
  process.env.NODE_ENV === "production";

// Setup Vite Dev Server / Static Asset Delivery
async function bootstrap() {
  if (!isProduction) {
    // Loaded lazily so the production server never pulls in the dev toolchain.
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Jetronix server running in ${isProduction ? "production" : "development"} mode on port ${PORT}`
    );
  });
}

bootstrap();
