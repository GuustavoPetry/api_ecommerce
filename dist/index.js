"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const produto_routes_1 = __importDefault(require("./routes/produto.routes"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // define transmissão de dados em JSON
app.use("/produtos", produto_routes_1.default); // acessa 'produtosRoutes' quando url for => /produtos
app.listen(process.env.API_PORT, () => {
    console.log("Servidor Rodando na porta", process.env.API_PORT);
});
