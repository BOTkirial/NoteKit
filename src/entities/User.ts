import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 64})
    name!: string;

    @Column({type: "varchar", length: 64})
    email?: string;

    @Column({type: "varchar", length: 64})
    passwordHash!: string;

    getName():string {
        return this.name;
    }

    setName(name:string): User {
        this.name = name;
        return this;
    }

    getEmail():string | undefined {
        return this.email;
    }

    setEmail(email:string): User {
        this.email = email;
        return this;
    }

}