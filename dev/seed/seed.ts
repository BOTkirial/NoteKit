import { QueryRunner } from "typeorm";
import runAccesMatrix from "./seedAccessMatrix";
import runActions from "./seedAction";
import runLevelOfPermissions from "./seedLevelOfPermission";
import runRoles from "./seedRole";
import runUserRoles from "./seedRoleUser";
import runUsers from "./seedUser";
import DataSourceManager from "../../src/DataSourceManager";


export const runSeeding = async (dataSource?: QueryRunner) => {
    console.info("SEEDING START");

    // const dataSource = await DataSourceManager.getQueryRunner();

    await runActions(dataSource);
    // await runUsers();
    // await runLevelOfPermissions();
    // await runRoles();

    // await runAccesMatrix();
    // await runUserRoles();
    console.info("SEEDING COMPLETE");
}

// runSeeding();
