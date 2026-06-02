import { Request, Response } from "express";
import { filmeService } from "../services/filmeService";

export const filmeController = {
  listarTodos: async (req: Request, res: Response) => {
    try {
      const filmes = await filmeService.listarTodos();
      return res.status(200).json(filmes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao listar filmes." });
    }
  },

  buscarPorId: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      if (Number.isNaN(id)) {
        return res.status(400).json({ mensagem: "ID inválido." });
      }

      const filme = await filmeService.buscarPorId(id);

      if (!filme) {
        return res.status(404).json({ mensagem: "Filme não encontrado." });
      }

      return res.status(200).json(filme);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao buscar filme." });
    }
  },

  filtrarPorNomeOuSinopse: async (req: Request, res: Response) => {
    try {
      const termo = String(req.query.nome || "").trim();

      if (!termo) {
        return res
          .status(400)
          .json({ mensagem: "Parâmetro 'nome' é obrigatório." });
      }

      const filmes = await filmeService.filtrarPorNomeOuSinopse(termo);
      return res.status(200).json(filmes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao filtrar filmes." });
    }
  },
};