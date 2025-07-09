import { Router } from "express";
import { UsuariosController } from "../controllers/UsuariosController";

const routes = Router();

routes.get("/", UsuariosController.listar);
routes.get("/:id", UsuariosController.buscar)
routes.post("/", UsuariosController.adicionar);
routes.put("/:id", UsuariosController.editar);
routes.delete("/:id", UsuariosController.deletar);

export default routes;