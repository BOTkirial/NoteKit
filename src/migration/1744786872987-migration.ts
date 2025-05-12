import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1744786872987 implements MigrationInterface {
    name = 'Migration1744786872987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "description" character varying(512), "createdById" integer, "updatedById" integer, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "action" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "description" character varying(512) NOT NULL, "createdById" integer, "updatedById" integer, CONSTRAINT "UQ_4aa35beeebe7073b51be93aae68" UNIQUE ("name"), CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level_of_permission" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "weight" integer NOT NULL, "name" character varying(128) NOT NULL, "description" character varying(512) NOT NULL, "createdById" integer, "updatedById" integer, CONSTRAINT "UQ_3bafb7eaabc252c654cd0863c1c" UNIQUE ("name"), CONSTRAINT "PK_6a3107c122c7bf10e309bd0b937" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "access_matrix" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "roleId" integer, "actionId" integer, "levelOfPermissionId" integer, CONSTRAINT "PK_7125b519d535952416054ac786f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "ownerId" integer, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "createdById" integer, "updatedById" integer, CONSTRAINT "UQ_cf461f5b40cf1a2b8876011e1e1" UNIQUE ("name"), CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_nesting" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "parentTeamId" integer, "teamId" integer, CONSTRAINT "PK_25df83bbe1fcb721c047486536d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_role" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "teamId" integer, "roleId" integer, CONSTRAINT "PK_b4d9c800f392007b4e5a19f90ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_role" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "roleId" integer, "userId" integer, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_team" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "createdById" integer, "updatedById" integer, "teamId" integer, "userId" integer, CONSTRAINT "PK_155dbc144ff2bd4713fdf1f6c77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_528f294633a808293425ae2ab56" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_686b8af82beeafa884598c4da41" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "action" ADD CONSTRAINT "FK_e410a9ab25d6c066f3a72ae72c2" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "action" ADD CONSTRAINT "FK_1688a83bbeb9bcda265ff7c878f" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level_of_permission" ADD CONSTRAINT "FK_8de3866eb8e95d34d4e2591c870" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level_of_permission" ADD CONSTRAINT "FK_9ff7681554fc7725e14caf61f24" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_matrix" ADD CONSTRAINT "FK_1a13290922af108830818a9295b" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_matrix" ADD CONSTRAINT "FK_6c4ce2eecb97397c8415fdf4355" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_matrix" ADD CONSTRAINT "FK_44cab078f127b69c342f8917910" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_matrix" ADD CONSTRAINT "FK_9627c6fa2bca00eddca5b0cd9de" FOREIGN KEY ("actionId") REFERENCES "action"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_matrix" ADD CONSTRAINT "FK_5f2b99f90535aa623e3bc1d0b58" FOREIGN KEY ("levelOfPermissionId") REFERENCES "level_of_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_1100c955b41aeaca61ddd9308d4" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_4cb66f45783b5fa3c7f06aba3a4" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_b09836eba01a8653c0628a78af8" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "FK_3a93fbdeba4e1e9e47fec6bada9" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "FK_3152d46f0ce8751aca92399783d" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_cc3edb87232f54dc4e798a2481c" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_60095aeab8f0da1c0f69d937b7e" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_a1bc667364993ea08da3c65d0e1" FOREIGN KEY ("parentTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_nesting" ADD CONSTRAINT "FK_37895fb74c397ab23f6c6fd402e" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_524ca361fbf7bb7a8d34a3b43a2" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_b89d0ae50ec1e8c7b72b9ba4c32" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_83a137d3c7dbbaf6601a5fb538a" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_c21047f02971482ebcce5620627" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_4ecd5f8a8ac0857ee00697b8156" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_7896e024ffc5cb7cd5378fe54ae" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_04f355e967ba30aab189a1ca46c" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_32ecd75ddc134fd687792507e90" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_32ecd75ddc134fd687792507e90"`);
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc"`);
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_04f355e967ba30aab189a1ca46c"`);
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_7896e024ffc5cb7cd5378fe54ae"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_4ecd5f8a8ac0857ee00697b8156"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_c21047f02971482ebcce5620627"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_83a137d3c7dbbaf6601a5fb538a"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_b89d0ae50ec1e8c7b72b9ba4c32"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_524ca361fbf7bb7a8d34a3b43a2"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_37895fb74c397ab23f6c6fd402e"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_a1bc667364993ea08da3c65d0e1"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_60095aeab8f0da1c0f69d937b7e"`);
        await queryRunner.query(`ALTER TABLE "team_nesting" DROP CONSTRAINT "FK_cc3edb87232f54dc4e798a2481c"`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "FK_3152d46f0ce8751aca92399783d"`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "FK_3a93fbdeba4e1e9e47fec6bada9"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_b09836eba01a8653c0628a78af8"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_4cb66f45783b5fa3c7f06aba3a4"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_1100c955b41aeaca61ddd9308d4"`);
        await queryRunner.query(`ALTER TABLE "access_matrix" DROP CONSTRAINT "FK_5f2b99f90535aa623e3bc1d0b58"`);
        await queryRunner.query(`ALTER TABLE "access_matrix" DROP CONSTRAINT "FK_9627c6fa2bca00eddca5b0cd9de"`);
        await queryRunner.query(`ALTER TABLE "access_matrix" DROP CONSTRAINT "FK_44cab078f127b69c342f8917910"`);
        await queryRunner.query(`ALTER TABLE "access_matrix" DROP CONSTRAINT "FK_6c4ce2eecb97397c8415fdf4355"`);
        await queryRunner.query(`ALTER TABLE "access_matrix" DROP CONSTRAINT "FK_1a13290922af108830818a9295b"`);
        await queryRunner.query(`ALTER TABLE "level_of_permission" DROP CONSTRAINT "FK_9ff7681554fc7725e14caf61f24"`);
        await queryRunner.query(`ALTER TABLE "level_of_permission" DROP CONSTRAINT "FK_8de3866eb8e95d34d4e2591c870"`);
        await queryRunner.query(`ALTER TABLE "action" DROP CONSTRAINT "FK_1688a83bbeb9bcda265ff7c878f"`);
        await queryRunner.query(`ALTER TABLE "action" DROP CONSTRAINT "FK_e410a9ab25d6c066f3a72ae72c2"`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_686b8af82beeafa884598c4da41"`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_528f294633a808293425ae2ab56"`);
        await queryRunner.query(`DROP TABLE "user_team"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP TABLE "team_role"`);
        await queryRunner.query(`DROP TABLE "team_nesting"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "access_matrix"`);
        await queryRunner.query(`DROP TABLE "level_of_permission"`);
        await queryRunner.query(`DROP TABLE "action"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
