import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import BaseEntity from "./BaseEntity";

@Entity()
export default class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User)
    owner!: User

    getOwner(): User {
        return this.owner;
    }

    setOwner(user: User): Note {
        this.owner = user;
        return this;
    }

}