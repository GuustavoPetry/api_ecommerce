import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Usuarios);

export const UsuarioService = {
    async listar(): Promise<Usuarios[]> {
        return await repo.find();
    },

    async adicionar(data: Partial<Usuarios>): Promise<Usuarios> {
        const usuario = repo.create(data);
        await repo.save(usuario);
        return usuario;
    },

    async editar(id: number, data: Partial<Usuarios>): Promise<Usuarios | null> {
        const usuario = await repo.findOneBy({ id });
        if(!usuario) return null;

        repo.merge(usuario, data);
        return await repo.save(usuario);
    },

    async deletar(id: number): Promise<Usuarios | null> {
        const usuario = await repo.findOneBy({ id });
        if(!usuario) return null;

        await repo.remove(usuario);
        return usuario;
    }

}