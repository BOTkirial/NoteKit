import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class LevelOfPermission {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 128, unique: true})
    name!: string;

    @Column({ type: "varchar", length: 512, unique: false })
    description?: string;

    setName(name:string):LevelOfPermission {
        this.name = name;
        return this;
    }

    getName():string {
        return this.name;
    }

    setDescription(description: string): LevelOfPermission {
        this.description = description;
        return this;
    }

    getDescription(): string {
        return this.description;
    }

}