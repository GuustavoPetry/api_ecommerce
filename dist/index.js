"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // define transmissão de dados em JSON
app.get("/", (req, res) => {
    res.send("Servidor rodando");
});
app.listen(process.env.API_PORT, () => {
    console.log("Servidor Rodando na porta", process.env.API_PORT);
});
