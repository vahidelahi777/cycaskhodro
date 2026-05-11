FROM docker.arvancloud.ir/node:20-alpine AS deps
#RUN sed -i 's|https://dl-cdn.alpinelinux.org|https://linux-mirror.liara.ir/repository|g' /etc/apk/repositories && \
#    apk update && \
#    apk add --no-cache libc6-compat
#RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

FROM docker.arvancloud.ir/node:20-alpine  AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV PATH=/app/node_modules/.bin:$PATH

RUN npm run build

FROM docker.arvancloud.ir/node:20-alpine  AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
