import { CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import type { Relation } from "typeorm";
import User from "./User";

export default abstract class BaseEntity {

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne("User")
    createdBy: Relation<User>

    @ManyToOne("User")
    updatedBy: Relation<User>

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