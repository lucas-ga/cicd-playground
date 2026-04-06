# cicd-playground

Este repositório é um projeto de estudo para praticar e demonstrar domínio de CI/CD com GitHub Actions, Docker e ferramentas modernas de qualidade de código.

## Funcionalidades

- **Servidor HTTP**: Implementado em Node.js com TypeScript.
- **Testes**: Testes unitários com Vitest.
- **Qualidade de Código**: Linting com ESLint e formatação com Prettier.
- **Análise Estática**: Semgrep para análise de segurança e qualidade.
- **Containerização**: Docker e Docker Compose para ambientes consistentes.
- **CI/CD**: Workflows automatizados com GitHub Actions.
- **Notificações**: Integração com action-send-mail para notificações.

## Stack Tecnológica

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

## Estrutura do Projeto

```plaintext
cicd-playground/
├── src/                # Código-fonte da aplicação
│   ├── app.ts         # Lógica principal
│   └── server.ts      # Configuração do servidor
├── test/               # Testes
│   └── app.test.ts    # Testes unitários
├── Dockerfile          # Configuração do Docker
├── docker-compose.yml  # Configuração do Docker Compose
├── tsconfig.json       # Configuração do TypeScript
├── package.json        # Dependências e scripts
└── roadmap.md          # Planejamento do projeto
```

## Como Executar

### Requisitos

- Node.js >= 22
- pnpm >= 10
- Docker e Docker Compose

### Passos

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Execute o servidor em modo de desenvolvimento:

   ```bash
   pnpm dev
   ```

3. Para produção, utilize Docker:

   ```bash
   docker-compose up --build
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Roadmap

### Fase 1 — Base do Projeto

- [ ] Inicializar repositório com `pnpm init`
- [ ] Configurar TypeScript (`tsconfig.json`)
- [ ] Configurar ESLint + Prettier (`.eslintrc.ts`, `.prettierrc`)
- [ ] Criar aplicação Node.js mínima (servidor HTTP simples com health check `/health`)
- [ ] Escrever primeiros testes unitários com Vitest
- [ ] Criar `Dockerfile` para a aplicação
- [ ] Criar `docker-compose.yml` com a aplicação + SonarQube local
- [ ] Criar `.env.example` com todas as variáveis necessárias documentadas
- [ ] Criar `.gitignore` cobrindo `node_modules`, `.env`, `dist`, relatórios de teste

### Fase 2 — Workflows de CI

- [ ] Workflow `ci.yml` — disparado em todo PR para `dev` e `main`

---

## Licença

Este projeto está licenciado sob a licença ISC.
