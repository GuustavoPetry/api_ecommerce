import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repo = AppDataSource.getRepository(Usuarios)

export const AuthService = {


    auth: async (email:string, password:string) => {
        const usuario = await repo.findOneBy({ email });
        if(usuario) {
            const passwordCompare = await bcrypt.compare(password, usuario.password);

            if(!passwordCompare) {
                throw new Error("Credenciais Inválidas");
            }

            // Criar Token JWT
            const token = jwt.sign(
                {
                    sub: usuario.id,
                    email: usuario.email,
                    nome: usuario.nome
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRE || "1h" }
            );

            // Retornar os dados do usuário com o token
            return {
                user: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                },
                token
            }

        } 
    }
}