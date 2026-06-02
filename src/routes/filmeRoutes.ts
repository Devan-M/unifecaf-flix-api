import { Router } from "express";
import { filmeController } from "../controllers/filmeController";

export const filmeRouter = Router();

filmeRouter.get("/filme", filmeController.listarTodos);
filmeRouter.get("/filme/:id", filmeController.buscarPorId);
filmeRouter.get("/filtro/filme", filmeController.filtrarPorNomeOuSinopse);