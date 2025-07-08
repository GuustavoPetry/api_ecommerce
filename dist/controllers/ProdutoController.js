"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
exports.ProdutoController = {
    async listar(req, res) {
        res.status(200).json({ status: "Listar Sucesso" });
    },
    async criar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    async buscar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    async atualizar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    async deletar(req, res) {
        res.status(200).json({ status: "sucesso" });
    }
};
