import { QueryRunner } from "typeorm";
import runUsers from "./seedUser";
import DataSourceManager from "../../src/DataSourceManager";


export const runSeeding = async (dataSource?: QueryRunner) => {
    console.info("SEEDING START");

    if(dataSource === undefined)
        dataSource = await DataSourceManager.getQueryRunner();

    await runUsers(dataSource);

    console.info("SEEDING COMPLETE");
    
}