import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Role from "./Role";
import Action from "./Action";
import LevelOfPermission from "./LevelOfPermission";



@Entity()
export default class AccesMatrix {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Role)
    role!: Role

    @ManyToOne(() => Action)
    action!: Action

    @ManyToOne(() => LevelOfPermission)
    levelOfPermission!: LevelOfPermission

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role): AccesMatrix {
        this.role = role;
        return this;
    }

    getAction(): Action {
        return this.action;
    }

    setAction(action: Action): AccesMatrix {
        this.action = action;
        return this;
    }

    getLevelOfPermission(): LevelOfPermission {
        return this.levelOfPermission;
    }

    setLevelOfPermission(levelOfPermission: LevelOfPermission): AccesMatrix {
        this.levelOfPermission = levelOfPermission;
        return this;
    }

}