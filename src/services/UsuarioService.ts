import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";
const bcrypt = require('bcrypt');
const saltRounds = 10;

const repo = AppDataSource.getRepository(Usuarios);

type UsuarioRetorno = {
    id: number,
    nome: string,
    email: string
}

export const UsuarioService = {

    async listar(): Promise<UsuarioRetorno[]> {
        return await repo.find({
            select: ["id", "nome", "email"]
        });
    },

    async buscar(id: number): Promise<Usuarios | null> {
        return await repo.findOneBy({ id });
    },

    async adicionar(data: Partial<Usuarios>): Promise<UsuarioRetorno> {
        data.password = await bcrypt.hash(data.password, saltRounds);
        const usuario = repo.create(data);
        await repo.save(usuario);
        // Retorna apenas dados não sensíveis, sem a senha
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        };
    },

    async editar(id: number, data: Partial<Usuarios>): Promise<UsuarioRetorno | null> {
        const usuario = await repo.findOneBy({ id });
        if (!usuario) return null;
        if (data.password) data.password = await bcrypt.hash(data.password, saltRounds);

        repo.merge(usuario, data);
        await repo.save(usuario);
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    },

    async deletar(id: number): Promise<Usuarios | null> {
        const usuario = await repo.findOneBy({ id });
        if (!usuario) return null;

        await repo.remove(usuario);
        return usuario;
    }

}