"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const data_source_1 = require("../database/data-source");
const Produto_1 = require("../entities/Produto");
const repo = data_source_1.AppDataSource.getRepository(Produto_1.Produto);
exports.ProdutoService = {
    async criar(data) {
        const produto = repo.create(data);
        await repo.save(produto);
        return produto;
    },
    async listar() {
        return await repo.find();
    },
    async buscar_id(id) {
        return await repo.findOneBy({ id });
    },
    async atualizar(id, data) {
        const produto = await repo.findOneBy({ id });
        if (!produto)
            return null;
        repo.merge(produto, data);
        return await repo.save(produto);
    },
    async deletar(id) {
        const produto = await repo.findOneBy({ id });
        if (!produto)
            return null;
        await repo.remove(produto);
        return produto;
    }
};
