# Deploying to jetronix.in (aaPanel + PM2)

This package is already built. Nothing is compiled on the server, so a small
instance is enough and the deploy takes under a minute.

What is inside:

| Path                | What it is                                      |
| ------------------- | ----------------------------------------------- |
| `dist/`             | the built site and the bundled server           |
| `dist/server.cjs`   | the Express server PM2 runs                     |
| `package.json`      | the dependency list and the `start` script      |
| `package-lock.json` | exact versions, so the server installs the same |
| `.env.example`      | the settings the server reads                   |

## 1. Find the project folder

In aaPanel: **Website → Node.js Project**, look at the **Document Root** column
for the `jetronix_in` row. It is usually `/www/wwwroot/jetronix.in`. Use whatever
that column shows; the commands below assume that path.

## 2. Upload

In aaPanel: **Files**, open the project folder, **Upload** this zip, then right
click it and choose **Unzip** into the same folder.

Say **yes** when it asks to overwrite. `dist/` is replaced completely, which is
what you want.

> Do not delete `.env` or `node_modules` if they are already there.

## 3. Install dependencies

Only needed the first time, and any later time the dependency list changes.

Open **Terminal** in aaPanel and run:

```bash
cd /www/wwwroot/jetronix.in
npm ci --omit=dev
```

If `npm ci` complains that the lock file is out of sync, use `npm install --omit=dev` instead.

## 4. Settings

The server reads its settings from a `.env` file next to `package.json`.
If one already exists, leave it alone. If not:

```bash
cd /www/wwwroot/jetronix.in
cp .env.example .env
nano .env
```

Fill in the SMTP details so the contact and quote forms send email. Without
them the site still works and every enquiry is written to
`data/inquiries.jsonl`, but no email goes out.

`PORT` must match the port the aaPanel project was created with.

## 5. Restart

In aaPanel: **Website → Node.js Project → jetronix_in → Modify**, then **Restart**.

Or from the terminal:

```bash
pm2 restart jetronix_in && pm2 logs jetronix_in --lines 30
```

The log should end with `Jetronix server running in production mode on port …`.

## 6. Check it worked

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000/
curl -s http://127.0.0.1:3000/api/news | head -c 200
```

The first should print `200`. The second should print a JSON list of packaging
industry headlines — that confirms the server can reach the outside world, which
the Knowledge Hub section needs.

Then open https://jetronix.in in a browser and hard refresh (Ctrl+F5).

## If the site does not come up

```bash
pm2 logs jetronix_in --lines 50     # what the server said
pm2 list                            # is it running or restarting in a loop
node -v                             # must be 20 or newer
```

A blank page with the old content is almost always browser cache — hard refresh.
