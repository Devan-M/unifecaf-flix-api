import "dotenv/config";
import { createConnection } from "mysql2/promise";
import { execSync } from "child_process";
import { PrismaClient } from "@prisma/client";

async function main() {
  const host = process.env.DB_HOST || "localhost";
  const user = process.env.DB_USER || "root";
  const password = process.env.DB_PASSWORD || "";
  const dbName = "unifecaf_flix";

  console.log("🔌 Conectando ao MySQL...");
  const connection = await createConnection({ host, user, password });

  console.log(`📦 Criando database '${dbName}' se não existir...`);
  await connection.execute(
    `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
  );
  await connection.end();
  console.log("✅ Database verificada/criada com sucesso.");

  console.log("🔄 Aplicando migrations com Prisma...");
  execSync("npx prisma migrate deploy", { stdio: "inherit" });

  console.log("🌱 Populando banco com dados de teste...");
  const prisma = new PrismaClient();

  const total = await prisma.filme.count();

  if (total > 0) {
    console.log("⚠️  Banco já possui dados, seed ignorado.");
  } else {
    await prisma.filme.createMany({
      data: [
        {
          nome: "Interestelar",
          sinopse: "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.",
          genero: "Ficção Científica",
          ano_lancamento: 2014,
          diretor: "Christopher Nolan",
          duracao_minutos: 169,
          classificacao: "10+",
          nota: 9.0,
        },
        {
          nome: "Coringa",
          sinopse: "A origem do famoso vilão da DC, um homem perturbado que se transforma no Coringa.",
          genero: "Drama",
          ano_lancamento: 2019,
          diretor: "Todd Phillips",
          duracao_minutos: 122,
          classificacao: "16+",
          nota: 8.5,
        },
        {
          nome: "Parasita",
          sinopse: "Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas.",
          genero: "Thriller",
          ano_lancamento: 2019,
          diretor: "Bong Joon-ho",
          duracao_minutos: 132,
          classificacao: "16+",
          nota: 8.6,
        },
        {
          nome: "O Poderoso Chefão",
          sinopse: "A história da família Corleone, uma das mais poderosas máfias dos Estados Unidos.",
          genero: "Crime",
          ano_lancamento: 1972,
          diretor: "Francis Ford Coppola",
          duracao_minutos: 175,
          classificacao: "16+",
          nota: 9.2,
        },
        {
          nome: "Matrix",
          sinopse: "Um hacker descobre que a realidade em que vive é uma simulação controlada por máquinas.",
          genero: "Ficção Científica",
          ano_lancamento: 1999,
          diretor: "Lana e Lilly Wachowski",
          duracao_minutos: 136,
          classificacao: "14+",
          nota: 8.7,
        },
        {
          nome: "Clube da Luta",
          sinopse: "Um homem insatisfeito com sua vida forma um clube de luta secreto com um estranho carismático.",
          genero: "Drama",
          ano_lancamento: 1999,
          diretor: "David Fincher",
          duracao_minutos: 139,
          classificacao: "18+",
          nota: 8.8,
        },
        {
          nome: "O Senhor dos Anéis: A Sociedade do Anel",
          sinopse: "Um hobbit embarca em uma jornada para destruir um anel poderoso e salvar a Terra Média.",
          genero: "Fantasia",
          ano_lancamento: 2001,
          diretor: "Peter Jackson",
          duracao_minutos: 178,
          classificacao: "12+",
          nota: 8.8,
        },
        {
          nome: "Vingadores: Ultimato",
          sinopse: "Os heróis restantes se unem para reverter as ações de Thanos e restaurar o universo.",
          genero: "Ação",
          ano_lancamento: 2019,
          diretor: "Anthony e Joe Russo",
          duracao_minutos: 181,
          classificacao: "12+",
          nota: 8.4,
        },
        {
          nome: "Whiplash",
          sinopse: "Um jovem baterista obcecado enfrenta um professor brutal em busca da perfeição musical.",
          genero: "Drama",
          ano_lancamento: 2014,
          diretor: "Damien Chazelle",
          duracao_minutos: 107,
          classificacao: "14+",
          nota: 8.5,
        },
        {
          nome: "Oppenheimer",
          sinopse: "A história do físico J. Robert Oppenheimer e o desenvolvimento da bomba atômica.",
          genero: "Drama",
          ano_lancamento: 2023,
          diretor: "Christopher Nolan",
          duracao_minutos: 180,
          classificacao: "14+",
          nota: 8.4,
        },
      ],
    });
    console.log("✅ 10 filmes inseridos com sucesso.");
  }

  await prisma.$disconnect();
  console.log("🚀 Setup concluído! Rode agora: npm run dev");
}

main().catch((err) => {
  console.error("❌ Erro no setup:", err.message);
  process.exit(1);
});