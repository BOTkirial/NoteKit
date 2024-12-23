import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 64, unique: true})
    name: string;

    @Column({type: "varchar", length: 64, nullable: true})
    email?: string;

    @Column({type: "varchar", length: 64})
    passwordHash: string;

    getId():number {
        return this.id;
    }

    getName():string {
        return this.name;
    }

    setName(name:string): User {
        this.name = name;
        return this;
    }

    getEmail():string | undefined {
        return this.email;
    }

    setEmail(email:string): User {
        this.email = email;
        return this;
    }

    getPasswordHash(): string {
        return this.passwordHash;
    }

    setPasswordHash(passwordHash:string): User {
        this.passwordHash = passwordHash;
        return this;
    }

//   @BeforeInsert()
//   async setPassword(password: string) {
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(password || this.password, salt)
//   }

}