import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Role {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 128, unique: true })
    name!: string;

    @Column({ type: "varchar", length: 512, unique: false })
    description?: string;

    setName(name: string): Role {
        this.name = name;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setDescription(description: string): Role {
        this.description = description;
        return this;
    }

    getDescription(): string {
        return this.description;
    }

}