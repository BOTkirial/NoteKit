import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Role from "./Role";
import Action from "./Action";
import LevelOfPermission from "./LevelOfPermission";



@Entity()
export default class AccessMatrix {

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

    setRole(role: Role): AccessMatrix {
        this.role = role;
        return this;
    }

    getAction(): Action {
        return this.action;
    }

    setAction(action: Action): AccessMatrix {
        this.action = action;
        return this;
    }

    getLevelOfPermission(): LevelOfPermission {
        return this.levelOfPermission;
    }

    setLevelOfPermission(levelOfPermission: LevelOfPermission): AccessMatrix {
        this.levelOfPermission = levelOfPermission;
        return this;
    }

}