import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.ts";

@Entity()
export class Note {

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