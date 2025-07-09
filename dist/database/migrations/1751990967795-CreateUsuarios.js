"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarios1751990967795 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsuarios1751990967795 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "1000"
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("usuarios");
    }
}
exports.CreateUsuarios1751990967795 = CreateUsuarios1751990967795;
