import runAccesMatrix from "./seedAccessMatrix";
import runActions from "./seedAction";
import runLevelOfPermissions from "./seedLevelOfPermission";
import runRoles from "./seedRole";
import runUserRoles from "./seedRoleUser";
import runUsers from "./seedUser";

console.log("SEEDING START");

const run = async () => {
    await runActions();
    await runUsers();
    await runLevelOfPermissions();
    await runRoles();

    await runAccesMatrix();
    await runUserRoles();
}

run();

console.log("SEEDING COMPLETE");