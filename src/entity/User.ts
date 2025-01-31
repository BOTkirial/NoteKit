import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import BaseEntity from "./BaseEntity";

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 64, unique: true })
    name: string;

    @Column({ type: "varchar", length: 64, nullable: true })
    email?: string;

    @Column({ type: "varchar", length: 64 })
    password: string;

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): User {
        this.name = name;
        return this;
    }

    getEmail(): string | undefined {
        return this.email;
    }

    setEmail(email: string): User {
        this.email = email;
        return this;
    }

    setPassword(password: string): User {
        this.password = password;
        return this;
    }

    getPassword(): string {
        return this.password;
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

}