# Jetronix — Industrial Coding & Marking Website

Marketing and B2B enquiry site for **Jetronix**, a joint venture of Runicha Enterprises
(Indore) and Best Code Technology India (Jaipur).

**Stack:** React 19 + Vite 6 + Tailwind 4 on the front end, Express (TypeScript) on the
back end, bundled to a single Node process.

## Run locally

**Prerequisites:** Node 20 or newer.

```bash
npm install
npm run dev
```

Opens on <http://localhost:3000>.

Optional: copy `.env.example` to `.env` and set `GEMINI_API_KEY` to enable the AI Advisor
page. Everything else works without it.

| Script          | Does                                            |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Dev server with hot reload                      |
| `npm run build` | Builds the client and bundles the server        |
| `npm start`     | Runs the production build (`dist/server.cjs`)   |
| `npm run lint`  | Type-checks with `tsc --noEmit`                 |

## Pages

Hash-based routing (`src/App.tsx`):

| Route         | Content                                    |
| ------------- | ------------------------------------------ |
| `#home`       | Hero + overview                            |
| `#products`   | Full catalogue — 33 machines, 8 categories |
| `#calculator` | Solvent savings / GST & ROI estimator      |
| `#lab`        | Sample generator + substrate matchmaker    |
| `#advisor`    | Gemini-backed technical advisor            |
| `#partners`   | Joint-venture hubs + B2B quote sheet       |
| `#contact`    | Contact form + regional office details     |

The product catalogue lives in `src/data.ts` and drives the products page, the header
mega-menu, and the quote form's product selector. Add a product there and it appears in
all three.

## API

| Endpoint       | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `POST /api/contact` | Contact Us enquiries                                |
| `POST /api/quote`   | B2B quote requests                                  |
| `POST /api/advisor` | Gemini proxy for the AI Advisor (needs the API key) |

Submissions are appended as JSON lines to `data/inquiries.jsonl`. There is **no email
notification and no database** — read the file to see enquiries:

```bash
cat data/inquiries.jsonl
```

## Deploying

See **[DEPLOY.md](DEPLOY.md)** for step-by-step hosting instructions.
