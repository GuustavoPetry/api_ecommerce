import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1751466876723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true, // chave primária
                        isGenerated: true, // auto increment
                        generationStrategy: "increment" // estratégia do auto increment, depende do banco
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
