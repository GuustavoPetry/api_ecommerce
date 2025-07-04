import express from "express";
import "reflect-metadata";
import produtosRoutes from "./routes/produto.routes";
require("dotenv").config();

const app = express();
app.use(express.json()); // define transmissão de dados em JSON

app.use("/produtos", produtosRoutes); // acessa 'produtosRoutes' quando url for => /produtos

app.listen(process.env.API_PORT, () => {
    console.log("Servidor Rodando na porta", process.env.API_PORT);
})


