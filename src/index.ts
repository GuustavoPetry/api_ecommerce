import express from "express";
import "reflect-metadata";
import produtosRoutes from "./routes/produto.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import loginRoutes from "./routes/auth.routes";
import { AppDataSource } from "./database/data-source";
require("dotenv").config();
const cors = require("cors");

AppDataSource.initialize()
        .then(() => {

            const app = express();
            app.use(express.json()); // define transmissão de dados em JSON
            const origins = ["https://localhost:4000"];
            // Cors deve ser implementado antes de qualquer rota
            app.use(cors({
                origin: (origin:string, callback:Function) => {
                    if(!origin) return callback(null, true);

                    if(origins.includes(origin)) {
                        return callback(null, true);
                    } else {
                        return callback(new Error("Origem não permitida"));
                    }
                },
                credentials: true,
                methods: ["GET, POST, PUT, PATCH, DELETE"],
                allowedHeader: ["Content-Type", "Authorization"]
            }));
            app.use("/produtos", produtosRoutes); // acessa 'produtosRoutes' quando url for => /produtos
            app.use("/usuarios", usuariosRoutes);
            app.use("/login", loginRoutes);

            app.listen(process.env.PORT, () => {
                console.log("Servidor Rodando na porta", process.env.PORT);
            })

            console.log("Banco de dados conectado com sucesso");
            
        })
        .catch((error) => {
            console.error("Banco de dados não está conectado");
        });
