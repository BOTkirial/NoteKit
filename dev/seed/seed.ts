import { QueryRunner } from "typeorm";
import DataSourceManager from "../../src/DataSourceManager";
import User from "../../src/entity/User";
import runUsers from "./user.seed";

export const runSeeding = async (dataSource?: QueryRunner) => {
    console.info("SEEDING START");

    if(dataSource === undefined)
        dataSource = await DataSourceManager.getQueryRunner();

    await runUsers(dataSource);
    const countUsers = await dataSource.manager.count(User);

    console.info("Created " + countUsers + " users");

    console.info("SEEDING COMPLETE");
    
}