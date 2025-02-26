import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Team from "./Team";
import BaseEntity from "./BaseEntity";

@Entity()
export default class TeamNesting extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Team)
    parentTeam!: Team;

    @ManyToOne(() => Team)
    team!: Team

    getTeam(): Team {
        return this.team;
    }

    setTeam(team: Team): TeamNesting {
        this.team = team;
        return this;
    }

    getParentTeam(): Team {
        return this.parentTeam;
    }

    setParentTeam(parentTeam: Team): TeamNesting {
        this.parentTeam = parentTeam;
        return this;
    }

}