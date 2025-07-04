import { Request, Response } from "express";

export const ProdutoController = {
    async listar(req: Request, res: Response) {
        res.status(200).json({ status: "Listar Sucesso" });
    },

    async criar(req: Request, res: Response) {
        res.status(200).json({ status: "sucesso" });
    },

    async buscar(req: Request, res: Response) {
        res.status(200).json({ status: "sucesso" });
    },

    async atualizar(req: Request, res: Response) {
        res.status(200).json({ status: "sucesso" });
    },

    async deletar(req: Request, res: Response) {
        res.status(200).json({ status: "sucesso" });
    }
}