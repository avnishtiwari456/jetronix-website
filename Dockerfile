# Portable image — works on Railway, Fly.io, Cloud Run, or any Docker host.
# Render can use this too (set runtime to "docker" instead of using render.yaml).

# ---- build stage: needs devDependencies to compile the client and bundle the server
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- runtime stage: ships only the built output and production dependencies
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist

# Enquiries are appended here. Mount a volume at /app/data to keep them across
# restarts — container filesystems are wiped on every redeploy.
RUN mkdir -p /app/data

# The platform overrides this via the PORT env var; 3000 is only the local default.
EXPOSE 3000
CMD ["node", "dist/server.cjs"]
