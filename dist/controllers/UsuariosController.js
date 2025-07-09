"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
exports.UsuariosController = {
    listar: async (req, res) => {
        try {
            const usuarios = await UsuarioService_1.UsuarioService.listar();
            res.status(200).json(usuarios);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao listar recursos", error });
        }
    },
    buscar: async (req, res) => {
        const id = Number(req.params.id);
        const usuario = await UsuarioService_1.UsuarioService.buscar(id);
        if (!usuario)
            res.status(404).json({ erro: "Recurso não encontrado" });
        res.status(200).json(usuario);
    },
    adicionar: async (req, res) => {
        try {
            const usuario = await UsuarioService_1.UsuarioService.adicionar(req.body);
            res.status(201).json(usuario);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao adicionar recurso", error });
        }
    },
    editar: async (req, res) => {
        const id = Number(req.params.id);
        const atualizado = await UsuarioService_1.UsuarioService.editar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Recurso não encontrado" });
        res.status(200).json(atualizado);
    },
    deletar: async (req, res) => {
        const id = Number(req.params.id);
        const deletado = await UsuarioService_1.UsuarioService.deletar(id);
        if (!deletado)
            res.status(404).json({ erro: "Recurso não encontrado" });
        res.status(200).json({ status: "Usuario removido com sucesso", usuario: deletado });
    }
};
