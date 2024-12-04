import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username: string;

    @Column()
    passwordHash: string;

    constructor() {
        this.username = "";
        this.passwordHash = "";
    }

}