import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./Team";
import { Role } from "./Role";

@Entity()
export class TeamRole {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Team)
    team!: Team

    @ManyToOne(() => Role)
    role!: Role

    getTeam(): Team {
        return this.team;
    }

    setTeam(team: Team): TeamRole {
        this.team = team;
        return this;
    }

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role): TeamRole {
        this.role = role;
        return this;
    }

}