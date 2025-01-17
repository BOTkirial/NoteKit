import runAccesMatrix from "./seedAccessMatrix";
import runActions from "./seedAction";
import runLevelOfPermissions from "./seedLevelOfPermission";
import runRoles from "./seedRole";
import runUserRoles from "./seedRoleUser";
import runUsers from "./seedUser";


const run = async () => {
    console.info("SEEDING START");
    await runActions();
    await runUsers();
    await runLevelOfPermissions();
    await runRoles();

    await runAccesMatrix();
    await runUserRoles();
    console.info("SEEDING COMPLETE");
}

run();
