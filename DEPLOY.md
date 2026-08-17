# Deploying the Jetronix site

The app is a single Node process: Express serves the built React client and the three API
routes. Any host that runs Node 20+ works. Instructions below are for **Render** (free
tier); Railway and Fly.io follow the same shape.

The repo already contains everything needed:

| File            | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `render.yaml`   | Render Blueprint — provisions the service automatically         |
| `Dockerfile`    | Portable image for Railway / Fly.io / Cloud Run / Docker hosts   |
| `.dockerignore` | Keeps `node_modules`, `dist`, `.env` and `data/` out of images  |

---

## 1. Push the code to GitHub

The repo is already initialised and committed locally. Create an **empty** repository on
GitHub (no README, no .gitignore — this repo has both), then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

## 2. Create the Render service

> **Pick Blueprint or Web Service — not Static Site.** This app runs an Express server
> for the `/api/*` routes, so a Static Site cannot host it. Choosing Static Site fails
> with `Publish directory jetronix-website does not exist!`, because static sites only
> serve pre-built files and never run `npm start`.

1. Sign in at <https://render.com> and connect the GitHub account.
2. **New → Blueprint**, pick the repository.
3. Render reads `render.yaml` and fills in build/start commands itself. Click **Apply**.

If the Blueprint option is unavailable, create a **Web Service** manually instead:

| Field         | Value                      |
| ------------- | -------------------------- |
| Language      | Node                       |
| Branch        | `main`                     |
| Build Command | `npm ci && npm run build`  |
| Start Command | `npm start`                |
| Instance Type | Free                       |

and add the environment variable `NODE_ENV=production`.

First build takes roughly 3–5 minutes. The live URL looks like
`https://jetronix-website.onrender.com`.

## 3. Enable email notifications

Contact and quote submissions are emailed to **support@jetronixindia.com**. Until SMTP is
configured the site still works and still records every enquiry to
`data/inquiries.jsonl` — it just does not send mail, and logs a warning on startup.

Set these in the Render dashboard (**Environment** tab), or in `.env` on your own server:

| Variable    | Value                                                          |
| ----------- | -------------------------------------------------------------- |
| `SMTP_HOST` | Your provider's outgoing server, e.g. `smtp.zoho.in`             |
| `SMTP_PORT` | `587` for STARTTLS (usual), `465` for SSL                        |
| `SMTP_USER` | The full mailbox address, e.g. `support@jetronixindia.com`       |
| `SMTP_PASS` | The mailbox password, or an app-specific password                |
| `MAIL_TO`   | Optional. Defaults to `support@jetronixindia.com`                |
| `MAIL_FROM` | Optional. Defaults to `"Jetronix Website" <SMTP_USER>`           |

Where to get the values:

- **Google Workspace** — `smtp.gmail.com`, port `587`. You must create an
  [App Password](https://myaccount.google.com/apppasswords); the normal account password
  will be rejected.
- **Zoho Mail** — `smtp.zoho.in`, port `587`. Generate an app password if 2FA is on.
- **Your domain's own hosting (cPanel/Hostinger/GoDaddy)** — the mail settings page lists
  the outgoing server name; the password is the mailbox password.

Most providers refuse to send when `MAIL_FROM` is not the authenticated mailbox, so leave
`MAIL_FROM` unset unless you know the provider allows it.

**If sending fails with a certificate error**, some budget hosts serve an expired or
mismatched certificate on their mail server. As a last resort set
`SMTP_TLS_REJECT_UNAUTHORIZED=false`. This stops the server verifying the mail host's
identity, so prefer fixing the certificate or switching provider.

Each email arrives with the customer's address in **Reply-To**, so replying from the
inbox goes straight back to them.

## 4. Optional — enable the AI Advisor

Without a key the site works fully except the Advisor page, which returns a 503.

1. Get a key at <https://aistudio.google.com/apikey>.
2. Render dashboard → your service → **Environment** → set `GEMINI_API_KEY`.
3. Save; Render redeploys automatically.

> The model id in `server.ts` (`gemini-3.5-flash`) has not been verified against Google's
> current model list. If the Advisor returns a 404 or 400 after adding the key, that line
> is the thing to change.

---

## Things to know before showing a client

**Free tier sleeps.** After ~15 minutes of no traffic the service spins down, and the next
visitor waits roughly 50 seconds for a cold start. Open the URL yourself a minute before a
demo, or move to a paid instance ($7/mo) to remove the delay.

**Enquiries do not survive a redeploy.** `data/inquiries.jsonl` sits on the container
filesystem, which is wiped on every deploy and restart. Fine for a demo; before real
customers use the forms, do one of:

- attach a Render Disk mounted at `/app/data` (paid), or
- send submissions to email/Slack/a database instead of a file
  (`recordInquiry()` in `server.ts` is the single place to change).

**No email notifications.** Nobody is alerted when a form is submitted. Read the file, or
wire up SMTP.

**`data/` and `.env` are gitignored** — customer personal data and the API key stay out of
the repository. Set secrets through the host's environment settings, never in the code.

---

## Alternative hosts

**Railway** — New Project → Deploy from GitHub repo. It detects the `Dockerfile`. Set
`NODE_ENV=production` and, if wanted, `GEMINI_API_KEY`.

**Fly.io** — `fly launch` picks up the `Dockerfile`; set secrets with
`fly secrets set GEMINI_API_KEY=...`.

**Any Docker host:**

```bash
docker build -t jetronix .
docker run -p 3000:3000 -e NODE_ENV=production -v jetronix-data:/app/data jetronix
```

The server binds to `process.env.PORT` when the platform provides one, otherwise 3000.
