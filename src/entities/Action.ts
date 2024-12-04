import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Action {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 128, unique: true})
    name!: string;

    setName(name:string):Action {
        this.name = name;
        return this;
    }

    getName():string {
        return this.name;
    }

}