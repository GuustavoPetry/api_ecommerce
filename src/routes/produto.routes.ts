import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router();

routes.get("/", ProdutoController.listar);

export default routes;