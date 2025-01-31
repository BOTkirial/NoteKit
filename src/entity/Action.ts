import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export default class Action extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 128, unique: true})
    name!: string;

    @Column({ type: "varchar", length: 512, unique: false })
    description?: string;

    setName(name:string):Action {
        this.name = name;
        return this;
    }

    getName():string {
        return this.name;
    }

    setDescription(description: string): Action {
        this.description = description;
        return this;
    }

    getDescription(): string {
        return this.description;
    }

}