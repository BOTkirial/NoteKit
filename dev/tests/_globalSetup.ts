import { TestDataSource } from "../../src/test-data-source";
import { QueryRunner } from "typeorm";

// globalSetup.ts
export default async function globalSetup() {
    
    console.log('🔥 Tests started 🔥');

    // initializes the database connection

    try {
        if(!TestDataSource.isInitialized)
            await TestDataSource.initialize();
    } catch (error:any) {
        console.info("An error occured when initializing database connection : " + error);
        throw new Error("An error occured when initializing database connection : " + error)
    }

    // Begins a transaction

    let queryRunner: QueryRunner;
    queryRunner = TestDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    TestQueryRunner.setQueryRunner(queryRunner);
    TestQueryRunner.getQueryRunner();


    // Rollback the transaction after the tests are finished
    
    process.on('SIGINT', async () => {
        await queryRunner.rollbackTransaction();
        if (TestDataSource.isInitialized)  {
            await TestDataSource.destroy();
            await queryRunner.release();
        }
        console.log('✅ Tests finished, rollback done ✅');
        process.exit(0);
    });



  }

  export abstract class TestQueryRunner {

    private static queryRunner: QueryRunner;

    static setQueryRunner = (queryRunner: QueryRunner) => {
        TestQueryRunner.queryRunner = queryRunner;
        console.group(TestQueryRunner.getQueryRunner())
    }

    static getQueryRunner = (): QueryRunner => {
        return TestQueryRunner.queryRunner;
    }

  }