# cicd-playground

Este repositório é um projeto de estudo para praticar e demonstrar domínio de CI/CD com GitHub Actions, Docker e ferramentas modernas de qualidade de código.

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/lucas-ga/cicd-playground?utm_source=oss&utm_medium=github&utm_campaign=lucas-ga%2Fcicd-playground&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

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
---

## Licença

Este projeto está licenciado sob a licença ISC.
