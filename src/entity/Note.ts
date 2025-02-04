import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.js";
import BaseEntity from "./BaseEntity.js";

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