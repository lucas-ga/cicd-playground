FROM node:current-alpine AS builder
WORKDIR /usr/local/app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install -g pnpm && pnpm install
RUN pnpm exec tsc

FROM node:current-alpine AS runner
WORKDIR /usr/local/app

COPY --from=builder /usr/local/app/dist ./dist
COPY --from=builder /usr/local/app/package.json ./
COPY --from=builder /usr/local/app/pnpm-lock.yaml ./

ENV NODE_ENV=production

RUN npm install -g pnpm && pnpm install --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]