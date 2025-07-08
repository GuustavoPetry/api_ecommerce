import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: String;

    @Column("decimal", {precision: 10, scale: 2})
    preco!: number;

    @Column()
    descricao!: String;

    @Column()
    quantidade!: number;

    @Column()
    ncm!: String;

}