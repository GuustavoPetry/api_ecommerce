import { Router } from "express";
import { UsuariosController } from "../controllers/UsuariosController";
import { authJwt } from "../middlewares/authJwt";

const routes = Router();

routes.get("/", authJwt, UsuariosController.listar);
routes.get("/:id", authJwt, UsuariosController.buscar)
routes.post("/", UsuariosController.adicionar);
routes.put("/:id", authJwt, UsuariosController.editar);
routes.delete("/:id", authJwt, UsuariosController.deletar);

export default routes;