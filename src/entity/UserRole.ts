import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Role from "./Role";
import User from "./User";


@Entity()
export default class UserRole {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Role)
    role!: Role

    @ManyToOne(() => User)
    user!: User

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role): UserRole {
        this.role = role;
        return this;
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User): UserRole {
        this.user = user;
        return this;
    }

}