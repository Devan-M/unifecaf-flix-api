import { filmeRepository } from "../repositories/filmeRepository";

export const filmeService = {
  listarTodos: () => {
    return filmeRepository.findAll();
  },

  buscarPorId: (id: number) => {
    return filmeRepository.findById(id);
  },

  filtrarPorNomeOuSinopse: (termo: string) => {
    return filmeRepository.findByNomeOuSinopse(termo);
  },
};