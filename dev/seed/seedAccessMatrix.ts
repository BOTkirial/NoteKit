import { QueryRunner } from "typeorm";
import DataSourceManager from "../../src/DataSourceManager";
import AccessMatrix from "../../src/entity/AccessMatrix";
import Action from "../../src/entity/Action";
import LevelOfPermission from "../../src/entity/LevelOfPermission";
import Role from "../../src/entity/Role";

const runAccesMatrix = async (dataSource: QueryRunner) => {

    const count = await dataSource.manager.count(AccessMatrix);
    if(count > 0) {
        return;
    }

    // admin
    const roleAdmin = await dataSource.manager.findOne(Role, { where: {name: "administrator"} });
    if(!roleAdmin) {
        throw new Error("Role 'administrator' was not found in the database");
    }

    const lopAny = await dataSource.manager.findOne(LevelOfPermission, {where: {name: "any"}});
    if(!lopAny) {
        throw new Error("Level Of Permission 'any' was not found in the database");
    }

    const allActions = await dataSource.manager.find(Action);
    allActions.forEach(action => {

        const accessMatrix = new AccessMatrix();
        accessMatrix.setRole(roleAdmin);
        accessMatrix.setLevelOfPermission(lopAny);
        accessMatrix.setAction(action);
        dataSource.manager.save(accessMatrix);

    });

    // user
    const roleUser = await dataSource.manager.findOne(Role, { where: {name: "user"} });
    if(!roleUser) {
        throw new Error("Role 'user' was not found in the database");
    }

    const lopUser = await dataSource.manager.findOne(LevelOfPermission, {where: {name: "user"}});
    if(!lopUser) {
        throw new Error("Level Of Permission 'user' was not found in the database");
    }

    const actions = await dataSource.manager.find(Action, { where: [
        { name: "Create a Note" },
        { name: "Read a Note" },
        { name: "Delete a Note" },
        { name: "Edit a Note" }
    ] })

    actions.forEach(action => {

        const accessMatrix = new AccessMatrix();
        accessMatrix.setRole(roleUser);
        accessMatrix.setLevelOfPermission(lopUser);
        accessMatrix.setAction(action);
        dataSource.manager.save(accessMatrix);

    })


}

export default runAccesMatrix;