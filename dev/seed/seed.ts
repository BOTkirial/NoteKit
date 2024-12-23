import runActions from "./seedAction";
import runLevelOfPermissions from "./seedLevelOfPermission";
import runUsers from "./seedUser";

console.log("SEEDING START");

runUsers();
runLevelOfPermissions();
runActions();

console.log("SEEDING COMPLETE");