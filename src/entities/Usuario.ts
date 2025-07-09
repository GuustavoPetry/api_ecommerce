import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuarios {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: String;

    @Column()
    email!: String;

    @Column()
    password!: String;

}