"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    listar: async (req, res) => {
        try {
            const produtos = await ProdutoService_1.ProdutoService.listar();
            res.status(200).json(produtos);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao listar recursos", error });
        }
    },
    criar: async (req, res) => {
        try {
            const produto = await ProdutoService_1.ProdutoService.criar(req.body);
            res.status(201).json(produto);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao criar o recurso", error });
        }
    },
    buscar: async (req, res) => {
        const id = Number(req.params.id);
        const produto = await ProdutoService_1.ProdutoService.buscar_id(id);
        if (!produto)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(produto);
    },
    atualizar: async (req, res) => {
        const id = Number(req.params.id);
        const atualizado = await ProdutoService_1.ProdutoService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(atualizado);
    },
    deletar: async (req, res) => {
        const id = Number(req.params.id);
        const removido = await ProdutoService_1.ProdutoService.deletar(id);
        if (!removido)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json({ status: "Produto removido com sucesso", produto: removido });
    }
};
