import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export default class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 128, unique: true })
    name!: string;

    @Column({ type: "varchar", length: 512, unique: false, nullable: true })
    description?: string;

    setName(name: string): Role {
        this.name = name;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setDescription(description: string): Role {
        this.description = description;
        return this;
    }

    getDescription(): string {
        return this.description;
    }

}