import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

export const UsuariosController = {
    listar: async (req: Request, res: Response): Promise<void> => {
        try {
            const usuarios = await UsuarioService.listar();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({erro: "Erro ao listar recursos", error});
        }
    },

    buscar: async(req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const usuario = await UsuarioService.buscar(id);
        if(!usuario) res.status(404).json({erro: "Recurso não encontrado"});

        res.status(200).json(usuario);
    },

    adicionar: async (req: Request, res: Response): Promise<void> => {
        try {
            const usuario = await UsuarioService.adicionar(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({erro: "Erro ao adicionar recurso", error});
        }
    },

    editar: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const atualizado = await UsuarioService.editar(id, req.body);
        if(!atualizado) res.status(404).json({erro: "Recurso não encontrado"});

        res.status(200).json(atualizado);
    },

    deletar: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const deletado = await UsuarioService.deletar(id);
        if(!deletado) res.status(404).json({erro: "Recurso não encontrado"});

        res.status(200).json({status: "Usuario removido com sucesso", usuario: deletado});
    }

}