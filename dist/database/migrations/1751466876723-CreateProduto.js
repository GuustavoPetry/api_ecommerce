"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduto1751466876723 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1751466876723 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "produtos",
            columns: [
                {
                    name: "id", // nome da coluna
                    type: "int", // tipo de dado
                    isPrimary: true, // chave primária
                    isGenerated: true, // auto increment
                    generationStrategy: "increment" // estratégia do auto increment, depende do banco
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "100", // comprimento do varchar
                },
                {
                    name: "preco",
                    type: "decimal",
                    precision: 10,
                    scale: 2
                },
                {
                    name: "descricao",
                    type: "text",
                },
                {
                    name: "quantidade",
                    type: "int",
                    default: 0,
                    isNullable: false
                },
                {
                    name: "ncm",
                    type: "char",
                    length: "8",
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("produtos");
    }
}
exports.CreateProduto1751466876723 = CreateProduto1751466876723;
