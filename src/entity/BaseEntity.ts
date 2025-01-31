import { CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import User from "./User";

export default class BaseEntity {

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User)
    createdBy!: User

    @ManyToOne(() => User)
    updatedBy!: User

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    getCreatedBy(): User {
        return this.createdBy;
    }

    getUpdatedBy(): User {
        return this.updatedBy;
    }

}