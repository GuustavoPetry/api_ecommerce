"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const data_source_1 = require("../database/data-source");
const Usuario_1 = require("../entities/Usuario");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const repo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuarios);
exports.UsuarioService = {
    async listar() {
        return await repo.find();
    },
    async buscar(id) {
        return await repo.findOneBy({ id });
    },
    async adicionar(data) {
        data.password = await bcrypt.hash(data.password, saltRounds);
        const usuario = repo.create(data);
        await repo.save(usuario);
        return usuario;
    },
    async editar(id, data) {
        if (data.password)
            await bcrypt.hash(data.password, saltRounds);
        const usuario = await repo.findOneBy({ id });
        if (!usuario)
            return null;
        repo.merge(usuario, data);
        await repo.save(usuario);
        return usuario;
    },
    async deletar(id) {
        const usuario = await repo.findOneBy({ id });
        if (!usuario)
            return null;
        await repo.remove(usuario);
        return usuario;
    }
};
