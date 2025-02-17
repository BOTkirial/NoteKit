import { QueryRunner } from "typeorm";
import appDataSource from "./appDataSource";

abstract class DataSourceManager {

    private static queryRunner: QueryRunner | undefined = undefined;
    private static transactionRunning: boolean = false;

    public static getQueryRunner = async ():Promise<QueryRunner> => {

        // initializes the database connection before any requests
        try {
            if(!appDataSource.isInitialized)
                await appDataSource.initialize();
        } catch (error:any) {
            console.info("An error occured when initializing database connection : " + error);
            throw new Error("An error occured when initializing database connection : " + error)
        }

        // creates a queryRunner if not created already
        if(DataSourceManager.queryRunner === undefined) {
            DataSourceManager.queryRunner = appDataSource.createQueryRunner();
            await DataSourceManager.queryRunner.connect();
        }

        return DataSourceManager.queryRunner;
    }

    public static startTransaction = async ():Promise<void> => {
        if(!DataSourceManager.transactionRunning) {
            const queryRunner = await DataSourceManager.getQueryRunner();
            console.info("Transaction started");
            await queryRunner.startTransaction();
            DataSourceManager.transactionRunning = true;
        } else {
            console.error("Transaction already running");
        }
    }

    public static rollbackTransaction = async ():Promise<void> => {
        if(DataSourceManager.transactionRunning) {
            const queryRunner = await DataSourceManager.getQueryRunner();
            console.info("Transaction reverted");
            await queryRunner.rollbackTransaction();
            DataSourceManager.transactionRunning = false;
        } else {
            console.error("No transaction running");
        }
    }

    public static commitTransaction = async ():Promise<void> => {
        if(DataSourceManager.transactionRunning) {
            const queryRunner = await DataSourceManager.getQueryRunner();
            console.info("Transaction commited");
            await queryRunner.commitTransaction();
            DataSourceManager.transactionRunning = false;
        } else {
            console.error("No transaction running");
        }
    }    

    
 
}

export default DataSourceManager;