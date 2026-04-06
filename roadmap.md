# Roadmap

Projeto de estudo para praticar e demonstrar domínio de CI/CD com GitHub Actions, Docker e ferramentas modernas de qualidade de código.

---

## Stack

| Camada               | Ferramenta              |
| -------------------- | ----------------------- |
| Linguagem            | TypeScript + Node.js    |
| Testes unitários     | Vitest                  |
| Testes E2E           | Playwright              |
| Linting / Formatação | ESLint + Prettier       |
| Análise estática     | Semgrep                 |
| Review IA            | CodeRabbit              |
| Changelog            | release-please          |
| Containerização      | Docker + Docker Compose |
| CI/CD                | GitHub Actions          |
| Notificações         | action-send-mail        |

---

## Fase 1 — Base do projeto

- [ ] Inicializar repositório com `pnpm init`
- [ ] Configurar TypeScript (`tsconfig.json`)
- [ ] Configurar ESLint + Prettier (`.eslintrc.ts`, `.prettierrc`)
- [ ] Criar aplicação Node.js mínima (servidor HTTP simples com health check `/health`)
- [ ] Escrever primeiros testes unitários com Vitest
- [ ] Criar `Dockerfile` para a aplicação
- [ ] Criar `docker-compose.yml` com a aplicação + SonarQube local
- [ ] Criar `.env.example` com todas as variáveis necessárias documentadas
- [ ] Criar `.gitignore` cobrindo `node_modules`, `.env`, `dist`, relatórios de teste

---

## Fase 2 — Workflows de CI

- [ ] Workflow `ci.yml` — disparado em todo PR para `dev` e `main`
  - [ ] Step: instalar dependências com pnpm
  - [ ] Step: rodar ESLint
  - [ ] Step: compilar TypeScript (`tsc --noEmit`)
  - [ ] Step: rodar testes unitários com Vitest + cobertura
  - [ ] Step: análise estática com Semgrep (bloqueia PR se encontrar issues críticas)
- [ ] Configurar branch protection rules no GitHub
  - [ ] `dev` e `main`: exigir PR, exigir checks do CI, exigir 1 aprovação humana
  - [ ] Bloquear push direto
- [ ] Configurar CodeRabbit no repositório (`.coderabbit.yaml`)

---

## Fase 3 — Workflows de Deploy

- [ ] Workflow `deploy-dev.yml` — disparado no merge para `dev`
  - [ ] Step: build da imagem Docker
  - [ ] Step: deploy via SSH no ambiente DEV (`docker compose up -d`)
  - [ ] Step: aguardar health check responder (`/health` retorna `200`)
  - [ ] Step: rodar Playwright (E2E) contra a URL do DEV
  - [ ] Step: upload do relatório Playwright como artifact do workflow
  - [ ] Step: smoke tests automáticos
  - [ ] Step: notificação de falha (email para dev + revisor do PR)
- [ ] Workflow `deploy-prod.yml` — disparado via `workflow_dispatch` ou push de tag `v*.*.*`
  - [ ] Step: deploy via SSH no ambiente PROD
  - [ ] Step: smoke tests contra PROD
  - [ ] Step: gerar changelog com release-please
  - [ ] Step: enviar changelog por email para `equipe@empresa.com`
  - [ ] Step: notificação de falha (email para dev + revisor)

---

## Fase 4 — Qualidade e Observabilidade

- [ ] Configurar ruleset do Semgrep (definir quais conjuntos de regras serão aplicados e severidade mínima para bloquear o PR)
- [ ] Escrever suíte de testes E2E cobrindo fluxos críticos da aplicação
- [ ] Escrever smoke tests (subconjunto dos E2E, máximo 2 minutos de execução)
- [ ] Configurar relatório de cobertura visível no PR (via Vitest reporter)
- [ ] Validar que rollback manual funciona (re-executar deploy com tag anterior)

---

## Fase 5 — Documentação

- [ ] `README.md` — visão geral, como rodar localmente, variáveis necessárias
- [ ] `docs/testing-workflow.md` — fluxo completo de testes e critérios de passagem
- [ ] `docs/branch-strategy.md` — estratégia de branches e regras de proteção
- [ ] `CONTRIBUTING.md` — como abrir PRs, padrão de commits (Conventional Commits)
- [ ] `docs/future-improvements.md` — melhorias futuras fora do escopo atual

---

## Melhorias Futuras (fora do escopo atual)

Registradas para referência, sem previsão de implementação.

- **Kubernetes (Kind ou Minikube)** — orquestração local com demonstração de self-healing
- **Terraform** — gerenciamento de infraestrutura como código
- **Ambientes efêmeros por PR** — cada PR sobe sua própria instância para testes isolados
- **Feature flags** — habilitar trunk-based development com flags de feature
- **Observabilidade** — integração com ferramentas de métricas e logs (Prometheus, Grafana, Loki)
- **SonarQube self-hosted** — análise estática com experiência completa do Sonar via Docker, sem limitações de plano

---

## Convenções

**Branches:**

```
main        ← produção, protegida
dev         ← desenvolvimento e QA, protegida
feature/*   ← trabalho em andamento, baseada em dev
hotfix/*    ← correções urgentes, baseada em main
```

**Commits (Conventional Commits):**

```
feat: descrição da nova funcionalidade
fix: descrição da correção
chore: atualização de dependências ou configuração
docs: alterações em documentação
test: adição ou correção de testes
ci: alterações nos workflows
```

**Secrets necessários no GitHub:**

```
SSH_HOST            — endereço do servidor de deploy
SSH_USER            — usuário SSH
SSH_PRIVATE_KEY     — chave privada SSH
SEMGREP_APP_TOKEN   — token do Semgrep (opcional, necessário para dashboard)
EMAIL_USERNAME      — conta de email para envio de notificações
EMAIL_PASSWORD      — app password da conta de email
NOTIFY_EMAIL        — endereço de destino das notificações de falha
TEAM_EMAIL          — endereço de destino do changelog (equipe)
```
