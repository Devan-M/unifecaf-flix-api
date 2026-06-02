import express from "express";
import cors from "cors";
import { filmeRouter } from "./routes/filmeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/controle-filmes", filmeRouter);

export { app };