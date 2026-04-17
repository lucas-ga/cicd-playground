# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CI/CD playground — a study project demonstrating GitHub Actions, Docker, and code quality tooling. Built on Node.js + TypeScript with Fastify. Phases 1–2 complete; Phase 3 (deploy workflows) in progress.

## Commands

```bash
pnpm install          # install dependencies
pnpm run dev          # run with hot-reload (jiti, no build step)
pnpm run build        # compile TypeScript → dist/
pnpm run start:prod   # run compiled output (requires build first)
pnpm test             # run Vitest
pnpm run lint         # ESLint
pnpm run lint:fix     # ESLint with auto-fix
pnpm run format       # Prettier --write
```

Run a single test file:
```bash
pnpm vitest run test/app.test.ts
```

SonarQube (local):
```bash
docker compose up sonarqube   # available at http://localhost:9000
```

## Architecture

```
src/app.ts      → Fastify instance; registers /health, /ready, /live endpoints
src/server.ts   → bootstraps the server (binds PORT or 3000, host 0.0.0.0)
test/           → Vitest unit tests (import app.ts directly, no running server needed)
```

The app and server are intentionally split so tests can import the Fastify instance without binding a port.

## CI/CD Pipeline

`.github/workflows/ci.yml` runs on every PR to `dev` and `main`:
1. ESLint
2. `tsc` (type-check + compile)
3. Vitest
4. Semgrep security scan

**Branch strategy:** `feature/*` → `dev` → `main`. Conventional Commits required (`feat`, `fix`, `chore`, `docs`, `test`, `ci`).

## Tooling Notes

- **Package manager:** pnpm ≥ 10 (enforced via `.npmrc` `engine-strict=true`)
- **Node version:** ≥ 22
- **Module format:** ESM (`"type": "module"` in package.json); import paths must include `.js` extension even for `.ts` source files
- **TypeScript:** strict mode, target ES2022, `moduleResolution: nodenext`
- **Prettier:** single quotes, no semicolons, 100-char print width, trailing commas
- **Pre-commit hook:** Husky runs lint-staged automatically
- **Code review:** CodeRabbit is configured (`.coderabbit.yaml`) to review PRs in Portuguese (pt-BR)

## Docker

```bash
docker build -t cicd-playground .          # multi-stage build
docker compose up                          # app on :3000, SonarQube on :9000
```

The Dockerfile uses a multi-stage build: `builder` compiles TypeScript, `runner` (alpine) copies only `dist/` and runs `pnpm start:prod`.
