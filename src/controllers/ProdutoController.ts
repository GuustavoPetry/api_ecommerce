import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";

export const ProdutoController = {
    listar: async (req: Request, res: Response): Promise<void> => {
        try {
            const produtos = await ProdutoService.listar();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({erro: "Erro ao listar recursos", error})
        }
    },

    criar: async (req: Request, res: Response): Promise<void> => {
        try {
            const produto = await ProdutoService.criar(req.body);
            res.status(201).json(produto);
        } catch (error){
            res.status(500).json({erro: "Erro ao criar o recurso", error});
        }
    },

    buscar: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const produto = await ProdutoService.buscar_id(id);
        if(!produto) res.status(404).json({erro: "Produto não encontrado"});

        res.status(200).json(produto)
    },

    atualizar: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const atualizado = await ProdutoService.atualizar(id, req.body);
        if(!atualizado) res.status(404).json({erro: "Produto não encontrado"});

        res.status(200).json(atualizado);

    },

    deletar: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const removido = await ProdutoService.deletar(id);
        if(!removido) res.status(404).json({erro: "Produto não encontrado"});

        res.status(200).json({status: "Produto removido com sucesso", produto: removido});
    }
}