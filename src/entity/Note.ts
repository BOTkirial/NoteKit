import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Note {

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