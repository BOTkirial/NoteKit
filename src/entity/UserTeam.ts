import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Team from "./Team";
import User from "./User";


@Entity()
export default class UserTeam {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Team)
    team!: Team

    @ManyToOne(() => User)
    user!: User

    getTeam(): Team {
        return this.team;
    }

    setTeam(team: Team): UserTeam {
        this.team = team;
        return this;
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User): UserTeam {
        this.user = user;
        return this;
    }

}