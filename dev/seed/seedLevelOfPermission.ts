import { AppDataSource } from "../../src/data-source";
import LevelOfPermission from "../../src/entity/LevelOfPermission";

const runLevelOfPermissions = async () => {

    if(!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    const count = await AppDataSource.manager.count(LevelOfPermission);
    if(count > 0) {
        return;
    }

    // None
    const lopNone = new LevelOfPermission();
    lopNone.setName("none");
    lopNone.setDescription("The User will not be able to perform the Action.")
    lopNone.setWeight(0)

    // User
    const lopUser = new LevelOfPermission();
    lopUser.setName("user");
    lopUser.setDescription("The User will be able to perform the Action if the User is the owner of the Note.")
    lopUser.setWeight(1)

    // Own Team
    const lopOwnTeam = new LevelOfPermission();
    lopOwnTeam.setName("own team");
    lopOwnTeam.setDescription("The User will be able to perform the Action if the User is part of the same Team as the target Note's owner.")
    lopOwnTeam.setWeight(2)

    // Any Team
    const lopAnyTeam = new LevelOfPermission();
    lopAnyTeam.setName("any team");
    lopAnyTeam.setDescription("The User will be able to perform the Action, if he is part of any of the nested Team of the target Note's owner.")
    lopAnyTeam.setWeight(3)

    // Any
    const lopAny = new LevelOfPermission();
    lopAny.setName("any");
    lopAny.setDescription("The User will be able to perform the Action.")
    lopAny.setWeight(4)

    try {
        await Promise.all([
            AppDataSource.manager.save(lopNone),
            AppDataSource.manager.save(lopUser),
            AppDataSource.manager.save(lopOwnTeam),
            AppDataSource.manager.save(lopAnyTeam),
            AppDataSource.manager.save(lopAny)
        ])
    } catch (error) {
        throw new Error('An error occured when creating the level of permission : ' + error);
    }

}

export default runLevelOfPermissions;