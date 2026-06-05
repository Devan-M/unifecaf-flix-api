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
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=

   DATABASE_URL="mysql://root:@localhost:3306/unifecaf_flix"
   ```
4. Execute o setup inicial (cria o banco, aplica as migrations e insere os dados de teste):
   ```bash
   npm run setup
   ```
5. Suba o servidor:
   ```bash
   npm run dev
   ```

> O comando `npm run setup` cria automaticamente o banco de dados `unifecaf_flix` caso não exista, aplica as migrations do Prisma e popula a tabela com 10 filmes de exemplo.

---

## Estrutura do projeto

```plaintext
├── prisma/
│   └── schema.prisma         # Models e configuração do banco de dados
│
└── src/
    ├── config/               # Configuração do Prisma Client
    ├── controllers/          # Recebimento e validação das requisições HTTP
    ├── services/             # Lógica de negócio
    ├── repositories/         # Acesso ao banco de dados
    ├── routes/               # Definição das rotas da API
    ├── scripts/
    │   └── setup.ts          # Script de setup automático do banco
    ├── app.ts                # Configuração do Express
    └── server.ts             # Inicialização do servidor
```

---

## Status HTTP utilizados

| Código | Significado |
|--------|-------------|
| 200 | Sucesso |
| 400 | Requisição inválida |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |