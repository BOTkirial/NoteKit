import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import BaseEntity from "./BaseEntity";

@Entity()
export default class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User)
    owner!: User

    @Column({ type: "varchar", length: 128, unique: false })
    title!: string;

    @Column({ type: "text", unique: false, nullable: true })
    content!: string;
    
    @Column({ type: "boolean" })
    isPublic: boolean;
    
    @Column({ type: "varchar", length: 256, unique: false, nullable: true })
    excerpt?: string;

    constructor() {
        super();
        this.isPublic = false;
    }

    getOwner(): User {
        return this.owner;
    }

    setOwner(user: User): Note {
        this.owner = user;
        return this;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): Note {
        this.title = title;
        return this;
    }

    getPublic(): boolean {
        return this.isPublic;
    }

    setPublic(value: boolean): Note {
        this.isPublic = value;
        return this;
    }

    getExcerpt(): string | undefined {
        return this.excerpt;
    }

    setExcerpt(excerpt: string): Note {
        this.excerpt = excerpt;
        return this;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): Note {
        this.content = content;
        return this;
    }

}