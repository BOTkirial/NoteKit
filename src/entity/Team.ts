import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Team {

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