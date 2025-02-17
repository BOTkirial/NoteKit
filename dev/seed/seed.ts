import { QueryRunner } from "typeorm";
import runAccesMatrix from "./seedAccessMatrix";
import runActions from "./seedAction";
import runLevelOfPermissions from "./seedLevelOfPermission";
import runRoles from "./seedRole";
import runUserRoles from "./seedRoleUser";
import runUsers from "./seedUser";
import DataSourceManager from "../../src/DataSourceManager";
import Action from "../../src/entity/Action";
import User from "../../src/entity/User";
import LevelOfPermission from "../../src/entity/LevelOfPermission";
import Role from "../../src/entity/Role";
import UserRole from "../../src/entity/UserRole";
import AccessMatrix from "../../src/entity/AccessMatrix";

export const runSeeding = async (dataSource?: QueryRunner) => {
    console.info("SEEDING START");

    if(dataSource === undefined)
        dataSource = await DataSourceManager.getQueryRunner();

    await runActions(dataSource);
    await runUsers(dataSource);
    await runLevelOfPermissions(dataSource);
    await runRoles(dataSource);

    await runAccesMatrix(dataSource);
    await runUserRoles(dataSource);

    const countUsers = await dataSource.manager.count(User);
    const countActions = await dataSource.manager.count(Action);
    const countRoles = await dataSource.manager.count(Role);
    const countLop = await dataSource.manager.count(LevelOfPermission);
    const countAccessMatrix = await dataSource.manager.count(AccessMatrix);
    const countUserRoles = await dataSource.manager.count(UserRole);

    console.info("Created " + countActions + " actions");
    console.info("Created " + countUsers + " users");
    console.info("Created " + countLop + " level of permissions");
    console.info("Created " + countRoles + " roles");
    console.info("Created " + countAccessMatrix + " access matrix");
    console.info("Created " + countUserRoles + " user roles");

    console.info("SEEDING COMPLETE");
    
}