import { Entity, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Note {

    @ManyToOne(() => User)
    owner!: User

}