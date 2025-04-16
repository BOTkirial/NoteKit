import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export default class Team extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 128, unique: true})
    name!: string;

    setName(name:string):Team {
        this.name = name;
        return this;
    }

    getName():string {
        return this.name;
    }

}