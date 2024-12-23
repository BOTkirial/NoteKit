import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734819983300 implements MigrationInterface {
    name = 'Migration1734819983300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "action" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_4aa35beeebe7073b51be93aae68" UNIQUE ("name"), CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level_of_permission" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_3bafb7eaabc252c654cd0863c1c" UNIQUE ("name"), CONSTRAINT "PK_6a3107c122c7bf10e309bd0b937" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "acces_matrix" ("id" SERIAL NOT NULL, "roleId" integer, "actionId" integer, "levelOfPermissionId" integer, CONSTRAINT "PK_8a1554d9b2937c6f0c6fcd4d541" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "email" character varying(64), "passwordHash" character varying(64) NOT NULL, CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "ownerId" integer, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_cf461f5b40cf1a2b8876011e1e1" UNIQUE ("name"), CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_nesting" ("id" SERIAL NOT NULL, "parentTeamId" integer, "teamId" integer, CONSTRAINT "PK_25df83bbe1fcb721c047486536d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_role" ("id" SERIAL NOT NULL, "teamId" integer, "roleId" integer, CONSTRAINT "PK_b4d9c800f392007b4e5a19f90ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_role" ("id" SERIAL NOT NULL, "roleId" integer, "userId" integer, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_team" ("id" SERIAL NOT NULL, "teamId" integer, "userId" integer, CONSTRAINT "PK_155dbc144ff2bd4713fdf1f6c77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" ADD CONSTRAINT "FK_077ff92fc840d950f4a0c386a65" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" ADD CONSTRAINT "FK_bea6c0ef3f967ed085f2c17161c" FOREIGN KEY ("actionId") REFERENCES "action"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" ADD CONSTRAINT "FK_757dcfb805de24518a6fd833161" FOREIGN KEY ("levelOfPermissionId") REFERENCES "level_of_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_b09836eba01a8653c0628a78af8" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_a1bc667364993ea08da3c65d0e1" FOREIGN KEY ("parentTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_37895fb74c397ab23f6c6fd402e" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_83a137d3c7dbbaf6601a5fb538a" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_32ecd75ddc134fd687792507e90" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_32ecd75ddc134fd687792507e90"`);
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_83a137d3c7dbbaf6601a5fb538a"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_37895fb74c397ab23f6c6fd402e"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_a1bc667364993ea08da3c65d0e1"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_b09836eba01a8653c0628a78af8"`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" DROP CONSTRAINT "FK_757dcfb805de24518a6fd833161"`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" DROP CONSTRAINT "FK_bea6c0ef3f967ed085f2c17161c"`);
        await queryRunner.query(`ALTER TABLE "acces_matrix" DROP CONSTRAINT "FK_077ff92fc840d950f4a0c386a65"`);
        await queryRunner.query(`DROP TABLE "user_team"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP TABLE "team_role"`);
        await queryRunner.query(`DROP TABLE "team_nesting"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "acces_matrix"`);
        await queryRunner.query(`DROP TABLE "level_of_permission"`);
        await queryRunner.query(`DROP TABLE "action"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
