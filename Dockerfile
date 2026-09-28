# -----------------------
# dependencies 
# -----------------------


FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# -----------------------
# builder
# -----------------------

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build



# -----------------------
# runner
# -----------------------

FROM node:22-alpine AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production


# Run as non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# copy only the standalon files

COPY --from=builder --chown=nextjs:nodejs ./app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs ./app/.next/static ./

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]   

