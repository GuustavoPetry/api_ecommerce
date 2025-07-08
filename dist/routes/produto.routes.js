"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProdutoController_1 = require("../controllers/ProdutoController");
const routes = (0, express_1.Router)();
routes.get("/", ProdutoController_1.ProdutoController.listar);
exports.default = routes;
