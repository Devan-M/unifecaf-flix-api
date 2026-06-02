import { prisma } from "../config/prismaClient";

export const filmeRepository = {
  findAll: () => {
    return prisma.filme.findMany();
  },

  findById: (id: number) => {
    return prisma.filme.findUnique({
      where: { id },
    });
  },

  findByNomeOuSinopse: (termo: string) => {
    return prisma.filme.findMany({
      where: {
        OR: [
          { nome: { contains: termo } },
          { sinopse: { contains: termo } },
        ],
      },
    });
  },
};