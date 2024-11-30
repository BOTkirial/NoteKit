import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username: string;

    @Column()
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }

}