import { AppDataSource } from "../database/data-source";
import { Produto } from "../entities/Produto";

const repo = AppDataSource.getRepository(Produto);

export const ProdutoService = {
    async criar(data: Partial<Produto>): Promise<Produto> {
        const produto = repo.create(data);
        await repo.save(produto);
        return produto;
    },

    async listar(): Promise<Produto[]> {
        return await repo.find();
    },

    async buscar_id(id: number): Promise<Produto | null> {
        return await repo.findOneBy({ id });
    },

    async atualizar(id: number, data: Partial<Produto>): Promise<Produto | null> {
        const produto = await repo.findOneBy({ id });
        if(!produto) return null;

        repo.merge(produto, data);
        return await repo.save(produto);
    },

    async deletar(id:number): Promise<Produto | null> {
        const produto = await repo.findOneBy({ id });
        if(!produto) return null;

        await repo.remove(produto);
        return produto
    }
}