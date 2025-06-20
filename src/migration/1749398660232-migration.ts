import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749398660232 implements MigrationInterface {
    name = 'Migration1749398660232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "email" character varying(64), "password" character varying(64) NOT NULL, "createdById" integer, "updatedById" integer, CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "title" character varying(128) NOT NULL, "content" text NOT NULL, "isPublic" boolean NOT NULL, "excerpt" character varying(256), "createdById" integer, "updatedById" integer, "ownerId" integer, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."shared_note_sharetype_enum" AS ENUM('lecture', 'écriture')`);
        await queryRunner.query(`CREATE TABLE "shared_note" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "shareType" "public"."shared_note_sharetype_enum" NOT NULL DEFAULT 'lecture', "createdById" integer, "updatedById" integer, "sharedToId" integer, "sharedNoteId" integer, CONSTRAINT "PK_99c62b91170242dd70df9b7a28d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_1100c955b41aeaca61ddd9308d4" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_4cb66f45783b5fa3c7f06aba3a4" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_b09836eba01a8653c0628a78af8" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shared_note" ADD CONSTRAINT "FK_e5eb8d509b9e2f6622c70b5ffc5" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shared_note" ADD CONSTRAINT "FK_c960165c2585a67f32535bd2814" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shared_note" ADD CONSTRAINT "FK_facb9d6250f5088d6852aeda830" FOREIGN KEY ("sharedToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shared_note" ADD CONSTRAINT "FK_61d83c3793199acd7a3c394d174" FOREIGN KEY ("sharedNoteId") REFERENCES "note"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shared_note" DROP CONSTRAINT "FK_61d83c3793199acd7a3c394d174"`);
        await queryRunner.query(`ALTER TABLE "shared_note" DROP CONSTRAINT "FK_facb9d6250f5088d6852aeda830"`);
        await queryRunner.query(`ALTER TABLE "shared_note" DROP CONSTRAINT "FK_c960165c2585a67f32535bd2814"`);
        await queryRunner.query(`ALTER TABLE "shared_note" DROP CONSTRAINT "FK_e5eb8d509b9e2f6622c70b5ffc5"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_b09836eba01a8653c0628a78af8"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_4cb66f45783b5fa3c7f06aba3a4"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_1100c955b41aeaca61ddd9308d4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5"`);
        await queryRunner.query(`DROP TABLE "shared_note"`);
        await queryRunner.query(`DROP TYPE "public"."shared_note_sharetype_enum"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
