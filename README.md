# unifecaf-flix-api

API REST em Node.js para a plataforma fictícia **UniFECAF Flix**.

Expõe um catálogo de filmes armazenado em MySQL, seguindo arquitetura MVC e padrão REST.

---

## Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL

---

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/controle-filmes/filme` | Lista todos os filmes |
| GET | `/v1/controle-filmes/filme/:id` | Busca um filme pelo ID |
| GET | `/v1/controle-filmes/filtro/filme?nome=xxx` | Filtra filmes por nome ou sinopse |

---

## Como rodar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` na raiz com:
   ```env
   DATABASE_URL="mysql://root:@localhost:3306/unifecaf_flix"
   ```
4. Gere o Prisma Client:
   ```bash
   npx prisma generate
   ```
5. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```

---

## Estrutura do projeto

```plaintext

├── prisma/
│   └── schema.prisma        # Models e configuração do banco de dados
│
└── src/
    ├── config/              # Configuração do Prisma Client
    ├── routes/              # Definição das rotas da API
    ├── controllers/         # Recebimento e validação das requisições HTTP
    ├── services/            # Lógica de negócio
    ├── repositories/        # Acesso ao banco de dados
    ├── app.ts               # Configuração do Express
    └── server.ts            # Inicialização do servidor
```
---

## Status HTTP utilizados

| Código | Significado |
|--------|-------------|
| 200 | Sucesso |
| 400 | Requisição inválida |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |