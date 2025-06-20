import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import BaseEntity from "./BaseEntity";
import Note from "./Note";

export enum ShareType {
    READ = "lecture",
    WRITE = "écriture"
}


@Entity()
export default class SharedNote extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User)
    sharedTo!: User

    @ManyToOne(() => Note)
    sharedNote!: Note

    @Column({
        type: "enum",
        enum: ShareType,
        default: ShareType.READ
    })
    shareType!: ShareType;
    

    constructor() {
        super();
    }

    getSharedTo(): User {
        return this.sharedTo;
    }

    setSharedTo(user: User): SharedNote {
        this.sharedTo = user;
        return this;
    }

    getSharedNote(): Note {
        return this.sharedNote;
    }

    setSharedNote(note: Note): SharedNote {
        this.sharedNote = note;
        return this;
    }

    getShareType(): ShareType {
        return this.shareType;
    }

    setShareType(shareType: ShareType): SharedNote {
        this.shareType = shareType;
        return this;
    }

}