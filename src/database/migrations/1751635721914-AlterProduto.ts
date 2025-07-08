import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProduto1751635721914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("produtos", [
            new TableColumn({
                name: "quantidade",
                type: "int",
                default: 0,
                isNullable: false
            }),
            new TableColumn({
                name: "ncm",
                type: "char",
                length: "8",
                isNullable: false
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("produtos", ["quantidade", "ncm"]);
    }

}
