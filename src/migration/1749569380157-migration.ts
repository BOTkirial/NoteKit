import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749569380157 implements MigrationInterface {
    name = 'Migration1749569380157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ALTER COLUMN "content" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ALTER COLUMN "content" SET NOT NULL`);
    }

}
