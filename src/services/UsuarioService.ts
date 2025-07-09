import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";
const bcrypt = require('bcrypt');
const saltRounds = 10;

const repo = AppDataSource.getRepository(Usuarios);

export const UsuarioService = {
    async listar(): Promise<Usuarios[]> {
        return await repo.find();
    },

    async buscar(id: number): Promise<Usuarios | null> {
        return await repo.findOneBy({ id });
    },

    async adicionar(data: Partial<Usuarios>): Promise<Usuarios> {
        data.password = await bcrypt.hash(data.password, saltRounds);
        const usuario = repo.create(data);
        await repo.save(usuario);
        return usuario;
    },

    async editar(id: number, data: Partial<Usuarios>): Promise<Usuarios | null> {
        if(data.password) await bcrypt.hash(data.password, saltRounds);
        const usuario = await repo.findOneBy({ id });
        if(!usuario) return null;

        repo.merge(usuario, data);
        await repo.save(usuario);
        return usuario;
    },

    async deletar(id: number): Promise<Usuarios | null> {
        const usuario = await repo.findOneBy({ id });
        if(!usuario) return null;

        await repo.remove(usuario);
        return usuario;
    }

}