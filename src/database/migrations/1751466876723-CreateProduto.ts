import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Produto } from "../../entities/Produto";

export class CreateProduto1751466876723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
