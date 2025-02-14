import { QueryRunner } from "typeorm";
import testDataSource from "../../src/testDataSource";
import { runSeeding } from "../seed/seed";

export default async function globalSetup() {

    console.log('🔥 Tests started 🔥');

    try {
        if(!testDataSource.isInitialized)
            await testDataSource.initialize();
    } catch (error:any) {
        console.info("An error occured when initializing database connection : " + error);
        throw new Error("An error occured when initializing database connection : " + error)
    }

    const queryRunner: QueryRunner = testDataSource.createQueryRunner();
    await queryRunner.connect();

    await runSeeding(queryRunner);

    process.on('SIGINT', async () => {
        console.log('✅ Tests finished, rollback done ✅');
        process.exit(0);
    });

}
