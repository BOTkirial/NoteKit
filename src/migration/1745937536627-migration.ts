import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745937536627 implements MigrationInterface {
    name = 'Migration1745937536627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ADD "title" character varying(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note" ADD "isFavorite" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note" ADD "excerpt" character varying(256)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "excerpt"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "isFavorite"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "title"`);
    }

}
