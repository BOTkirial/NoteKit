import { Entity, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Note {

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